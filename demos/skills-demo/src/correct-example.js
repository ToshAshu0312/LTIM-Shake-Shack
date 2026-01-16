const Joi = require('joi');
const logger = require('./utils/logger');
const { AppError } = require('./utils/errors');

/**
 * Retrieves user data by ID
 * @param {string} userId - The user's unique identifier
 * @returns {Promise<Object>} User data object
 * @throws {AppError} When user is not found
 */
async function getUserData(userId) {
  try {
    // Input validation
    const schema = Joi.string().uuid().required();
    const { error } = schema.validate(userId);
    
    if (error) {
      throw new AppError('Invalid user ID format', 400);
    }
    
    // Parameterized query to prevent SQL injection
    const query = 'SELECT id, name, email, created_at FROM users WHERE id = $1 AND deleted_at IS NULL';
    const result = await db.query(query, [userId]);
    
    if (result.rows.length === 0) {
      throw new AppError('User not found', 404);
    }
    
    logger.info('User data retrieved', { userId });
    
    return result.rows[0];
  } catch (error) {
    logger.error('Error retrieving user data', { userId, error: error.message });
    throw error;
  }
}

/**
 * Retrieves all users with pagination
 * @param {number} page - Page number (1-indexed)
 * @param {number} limit - Number of items per page
 * @returns {Promise<Object>} Paginated user list
 */
async function getAllUsers(page = 1, limit = 20) {
  try {
    // Input validation
    const schema = Joi.object({
      page: Joi.number().integer().min(1).default(1),
      limit: Joi.number().integer().min(1).max(100).default(20)
    });
    
    const { error, value } = schema.validate({ page, limit });
    if (error) {
      throw new AppError('Invalid pagination parameters', 400);
    }
    
    const offset = (value.page - 1) * value.limit;
    
    // Get total count
    const countQuery = 'SELECT COUNT(*) FROM users WHERE deleted_at IS NULL';
    const countResult = await db.query(countQuery);
    const total = parseInt(countResult.rows[0].count);
    
    // Get paginated users
    const query = `
      SELECT id, name, email, created_at 
      FROM users 
      WHERE deleted_at IS NULL 
      ORDER BY created_at DESC 
      LIMIT $1 OFFSET $2
    `;
    
    const result = await db.query(query, [value.limit, offset]);
    
    logger.info('Users retrieved', { 
      page: value.page, 
      limit: value.limit, 
      total 
    });
    
    return {
      users: result.rows,
      pagination: {
        page: value.page,
        limit: value.limit,
        total,
        totalPages: Math.ceil(total / value.limit)
      }
    };
  } catch (error) {
    logger.error('Error retrieving users', { error: error.message });
    throw error;
  }
}

/**
 * Creates a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function createUser(req, res) {
  try {
    // Input validation schema
    const schema = Joi.object({
      name: Joi.string().min(2).max(100).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    });
    
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        })),
        timestamp: new Date().toISOString()
      });
    }
    
    // Hash password
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(value.password, 10);
    
    // Insert user
    const query = `
      INSERT INTO users (name, email, password, created_at, updated_at)
      VALUES ($1, $2, $3, NOW(), NOW())
      RETURNING id, name, email, created_at
    `;
    
    const result = await db.query(query, [
      value.name,
      value.email,
      hashedPassword
    ]);
    
    const user = result.rows[0];
    
    logger.info('User created', { userId: user.id });
    
    // Return success response with 201 status
    res.status(201).json({
      success: true,
      data: user,
      message: 'User created successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error creating user', { error: error.message });
    
    // Handle duplicate email
    if (error.code === '23505') {
      return res.status(409).json({
        success: false,
        error: {
          code: 'EMAIL_EXISTS',
          message: 'Email already registered'
        },
        timestamp: new Date().toISOString()
      });
    }
    
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'An error occurred while creating user'
      },
      timestamp: new Date().toISOString()
    });
  }
}

/**
 * Soft deletes a user (requires authentication)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function deleteUser(req, res) {
  try {
    // Authentication check (middleware should handle this)
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Admin access required'
        },
        timestamp: new Date().toISOString()
      });
    }
    
    const userId = req.params.id;
    
    // Validate user ID
    const schema = Joi.string().uuid().required();
    const { error } = schema.validate(userId);
    
    if (error) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'INVALID_USER_ID',
          message: 'Invalid user ID format'
        },
        timestamp: new Date().toISOString()
      });
    }
    
    // Soft delete (set deleted_at timestamp)
    const query = `
      UPDATE users 
      SET deleted_at = NOW(), updated_at = NOW() 
      WHERE id = $1 AND deleted_at IS NULL
      RETURNING id
    `;
    
    const result = await db.query(query, [userId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found or already deleted'
        },
        timestamp: new Date().toISOString()
      });
    }
    
    logger.info('User deleted', { userId, deletedBy: req.user.id });
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error deleting user', { 
      userId: req.params.id, 
      error: error.message 
    });
    
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'An error occurred while deleting user'
      },
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = {
  getUserData,
  getAllUsers,
  createUser,
  deleteUser
};

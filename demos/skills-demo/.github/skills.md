# Team Development Skills

This file defines custom skills, coding standards, and best practices for our development team. GitHub Copilot uses this to provide contextually relevant suggestions.

---

## Custom Commands

### /create-api
Creates a new REST API endpoint following our team standards.

**Standards to follow:**
- Use Express.js router
- Include input validation using Joi
- Implement try-catch error handling
- Add request logging
- Return consistent JSON response format:
  ```json
  {
    "success": boolean,
    "data": object | array,
    "message": string,
    "timestamp": ISO8601
  }
  ```
- Include JSDoc comments
- Use async/await for asynchronous operations
- Add rate limiting middleware

**Example:**
```javascript
/**
 * @route GET /api/users/:id
 * @description Get user by ID
 */
router.get('/users/:id', validateId, async (req, res) => {
  try {
    // Implementation here
  } catch (error) {
    // Error handling
  }
});
```

---

### /create-db-query
Creates database queries following our data access patterns.

**Standards to follow:**
- Use parameterized queries to prevent SQL injection
- Implement connection pooling
- Add query timeout limits
- Include proper error handling
- Log slow queries (>100ms)
- Use transactions for multi-step operations
- Add JSDoc with query purpose and parameters

**Example:**
```javascript
/**
 * Fetches user orders with pagination
 * @param {string} userId - User identifier
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 */
async function getUserOrders(userId, page, limit) {
  // Implementation
}
```

---

### /generate-tests
Generates unit tests following our testing standards.

**Standards to follow:**
- Use Jest as testing framework
- Follow AAA pattern (Arrange, Act, Assert)
- Include positive and negative test cases
- Mock external dependencies
- Test edge cases
- Aim for 80%+ code coverage
- Use descriptive test names

**Structure:**
```javascript
describe('ModuleName', () => {
  describe('functionName', () => {
    it('should handle success case', () => {});
    it('should handle error case', () => {});
    it('should validate input', () => {});
  });
});
```

---

## Architecture Patterns

### Microservices Structure
When creating a new microservice:
1. **Directory Structure:**
   ```
   service-name/
   ├── src/
   │   ├── controllers/
   │   ├── services/
   │   ├── models/
   │   ├── routes/
   │   ├── middleware/
   │   ├── utils/
   │   └── config/
   ├── tests/
   ├── docs/
   └── package.json
   ```

2. **Layers:**
   - **Controller**: HTTP request/response handling
   - **Service**: Business logic
   - **Model**: Data access layer
   - **Middleware**: Cross-cutting concerns (auth, logging, etc.)

3. **Communication:**
   - REST for synchronous calls
   - Message queue (RabbitMQ) for async operations
   - Include circuit breaker for external services

---

### Error Handling Pattern
All errors should follow this structure:

```javascript
class AppError extends Error {
  constructor(message, statusCode, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Usage
throw new AppError('User not found', 404);
```

---

## Coding Standards

### Naming Conventions
- **Variables/Functions**: camelCase (`getUserById`, `isActive`)
- **Classes**: PascalCase (`UserController`, `DatabaseService`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRY_COUNT`, `API_BASE_URL`)
- **Files**: kebab-case (`user-controller.js`, `database-config.js`)
- **Booleans**: Prefix with `is`, `has`, `should` (`isValid`, `hasAccess`)

### Code Documentation
- All public functions must have JSDoc comments
- Include parameter types and descriptions
- Document return types
- Add examples for complex functions
- Update comments when code changes

### Security Standards
- Never commit secrets or API keys
- Use environment variables for configuration
- Validate and sanitize all user inputs
- Implement rate limiting on public endpoints
- Use HTTPS for all external communications
- Follow OWASP Top 10 guidelines
- Add CORS configuration for web APIs

### Performance Guidelines
- Use database indexes for frequently queried fields
- Implement caching for expensive operations (Redis)
- Limit API response payloads (pagination)
- Use compression middleware
- Optimize database queries (avoid N+1 problems)
- Profile and monitor slow operations

---

## Git Commit Standards

Follow Conventional Commits format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example:**
```
feat(auth): add JWT token refresh mechanism

Implement automatic token refresh to improve user experience.
Tokens now refresh 5 minutes before expiration.

Closes #123
```

---

## API Design Guidelines

### RESTful Principles
- Use nouns for resource names (`/users`, not `/getUsers`)
- Use HTTP methods correctly (GET, POST, PUT, DELETE, PATCH)
- Use plural nouns (`/users/123`, not `/user/123`)
- Use sub-resources for relationships (`/users/123/orders`)
- Version your API (`/api/v1/users`)

### Response Codes
- 200: Success (GET, PUT, PATCH)
- 201: Created (POST)
- 204: No Content (DELETE)
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

### Request/Response Format
- Accept and return JSON
- Use camelCase for JSON keys
- Include pagination metadata for lists
- Add HATEOAS links where appropriate

---

## Database Conventions

### Table Naming
- Use plural nouns (`users`, `orders`)
- Use snake_case (`order_items`, `user_preferences`)

### Column Naming
- Primary key: `id` (integer, auto-increment)
- Foreign keys: `{table}_id` (`user_id`, `order_id`)
- Timestamps: `created_at`, `updated_at`
- Soft delete: `deleted_at`
- Use descriptive names (`first_name`, not `fname`)

### Indexes
- Add indexes on foreign keys
- Add indexes on frequently filtered columns
- Use composite indexes for multi-column queries
- Document why each index exists

---

## Logging Standards

Use structured logging with these levels:
- **ERROR**: System errors, exceptions
- **WARN**: Deprecated features, unusual situations
- **INFO**: Important business events
- **DEBUG**: Detailed diagnostic information

**Include in logs:**
- Timestamp
- Log level
- Request ID (for tracing)
- User ID (if applicable)
- Action performed
- Duration (for operations)

**Example:**
```javascript
logger.info('User login successful', {
  userId: user.id,
  requestId: req.id,
  ip: req.ip,
  duration: Date.now() - startTime
});
```

---

## Code Review Checklist

Before submitting code for review:
- [ ] Code follows naming conventions
- [ ] All functions have JSDoc comments
- [ ] Unit tests written and passing
- [ ] No hardcoded secrets or credentials
- [ ] Error handling implemented
- [ ] Logging added for important operations
- [ ] Input validation added
- [ ] Performance considered (queries optimized, caching used)
- [ ] Security review completed
- [ ] Documentation updated

---

## Environment Configuration

### Required Environment Variables
```
NODE_ENV=development|production
PORT=3000
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
JWT_SECRET=...
LOG_LEVEL=info|debug|error
API_RATE_LIMIT=100
```

### Configuration Files
- `.env.example`: Template for required variables
- `.env.development`: Local development settings
- `.env.test`: Test environment settings
- Never commit `.env` files with secrets

---

## Deployment Standards

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Dependencies updated and security-scanned
- [ ] Database migrations tested
- [ ] Environment variables configured
- [ ] Monitoring and alerts configured
- [ ] Rollback plan documented

### Health Check Endpoint
Every service must expose:
```
GET /health
Response: {
  "status": "healthy",
  "version": "1.2.3",
  "uptime": 12345,
  "dependencies": {
    "database": "connected",
    "cache": "connected"
  }
}
```

---

## Questions?

For questions about these standards:
1. Check the team wiki
2. Ask in #dev-standards Slack channel
3. Bring up in weekly tech sync
4. Propose changes via pull request to this file

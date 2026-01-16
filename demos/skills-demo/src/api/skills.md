# API Layer Skills

This skills.md provides guidance specific to our API layer implementation.

---

## API-Specific Patterns

### Request Validation Middleware
Always validate incoming requests before processing:

```javascript
const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
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
    next();
  };
};
```

---

## Rate Limiting Configuration

Apply rate limits based on endpoint sensitivity:

- **Public endpoints**: 100 requests/15 minutes
- **Authenticated endpoints**: 1000 requests/15 minutes
- **Admin endpoints**: 5000 requests/15 minutes

```javascript
const rateLimit = require('express-rate-limit');

const createRateLimiter = (maxRequests, windowMinutes) => {
  return rateLimit({
    windowMs: windowMinutes * 60 * 1000,
    max: maxRequests,
    message: 'Too many requests, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
  });
};
```

---

## Authentication Middleware

Every protected route must use authentication:

```javascript
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication token required',
        timestamp: new Date().toISOString()
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Invalid or expired token',
      timestamp: new Date().toISOString()
    });
  }
};
```

---

## Response Formatting

All API responses should follow this structure:

### Success Response
```json
{
  "success": true,
  "data": {
    // Response payload
  },
  "message": "Operation successful",
  "timestamp": "2026-01-12T10:30:00.000Z",
  "metadata": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User with ID 123 not found"
  },
  "timestamp": "2026-01-12T10:30:00.000Z",
  "requestId": "req-123-abc"
}
```

---

## API Versioning

When creating new API versions:

1. Keep old versions running for at least 6 months
2. Add deprecation warnings to old versions
3. Document migration path in API docs
4. Use URL versioning: `/api/v1/`, `/api/v2/`

---

## CORS Configuration

Configure CORS based on environment:

```javascript
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://app.example.com']
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
```

---

## Request Logging

Log all API requests with:
- Request ID
- HTTP method
- Path
- Status code
- Response time
- User ID (if authenticated)

```javascript
const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('API request', {
      requestId: req.id,
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration,
      userId: req.user?.id,
      ip: req.ip
    });
  });
  
  next();
};
```

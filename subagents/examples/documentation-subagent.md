# Documentation Generator Subagent Examples

This document provides examples for using subagents to automatically generate various types of documentation.

## Example 1: API Documentation Generator

### Prompt:
```
Launch a subagent to create comprehensive API documentation:
1. Find all API endpoints/routes in the application
2. Document each endpoint with:
   - HTTP method and URL pattern
   - Request parameters (query, body, headers)
   - Response format and status codes
   - Authentication requirements
   - Example requests and responses
   - Error scenarios
3. Group endpoints by resource/functionality
4. Generate OpenAPI/Swagger compatible documentation

Save as API_DOCUMENTATION.md in /docs folder.
```

### What It Generates:
- Complete API reference
- Request/response examples
- Error documentation
- Authentication details

---

## Example 2: Component Library Documentation

### Prompt:
```
I need a subagent to document all React/Vue components:
- Find all component files
- For each component document:
  * Purpose and usage
  * Props/attributes with types and defaults
  * Events emitted
  * Slots available (if Vue)
  * CSS classes and styling
  * Accessibility features
  * Usage examples with code
  * Related components
- Create a component catalog with screenshots (describe what they'd show)
- Include best practices for using each component

Generate comprehensive component library docs in /docs/components/.
```

### What It Generates:
- Component reference guide
- Props documentation
- Usage examples
- Design patterns

---

## Example 3: Architecture Documentation

### Prompt:
```
Launch a subagent to create architecture documentation:
1. Analyze the project structure and identify architectural layers
2. Create a high-level architecture diagram (Mermaid syntax)
3. Document each major module/service:
   - Responsibility and purpose
   - Dependencies and integrations
   - Data flow
   - Key design decisions
4. Explain design patterns used
5. Document deployment architecture
6. Include scalability considerations

Create a comprehensive ARCHITECTURE.md with diagrams.
```

### What It Generates:
- Architecture diagrams
- Module descriptions
- Design pattern documentation
- System overview

---

## Example 4: Database Schema Documentation

### Prompt:
```
I need a subagent to document the database schema:
- Find all database models/entities
- For each table/collection document:
  * Table name and purpose
  * All columns/fields with types and constraints
  * Primary and foreign keys
  * Indexes
  * Relationships with other tables
  * Example data
- Create ER diagrams (in Mermaid)
- Document migration strategy
- Include sample queries for common operations

Generate DATABASE_SCHEMA.md with visual diagrams.
```

### What It Generates:
- Schema reference
- ER diagrams
- Relationship documentation
- Query examples

---

## Example 5: Developer Onboarding Guide

### Prompt:
```
Launch a subagent to create a developer onboarding guide:
1. Document prerequisites and required tools
2. Create step-by-step setup instructions
3. Explain project structure and conventions
4. List environment variables and configuration
5. Provide first-task recommendations for new developers
6. Document development workflow and git practices
7. Include testing and deployment procedures
8. Add troubleshooting section for common issues
9. Link to all other documentation

Create DEVELOPER_ONBOARDING.md with clear, actionable steps.
```

### What It Generates:
- Setup instructions
- Project orientation
- Development workflow
- Troubleshooting guide

---

## Example 6: Configuration Guide

### Prompt:
```
I need a subagent to document all configuration options:
- Find all configuration files (env, json, yaml, etc.)
- For each configuration option document:
  * Name and location
  * Purpose and effect
  * Valid values/format
  * Default value
  * Required vs optional
  * Examples for different environments
- Explain configuration precedence
- Document secrets management
- Include validation rules

Create CONFIGURATION.md with examples for dev, staging, and production.
```

### What It Generates:
- Configuration reference
- Environment examples
- Secrets management guide
- Validation documentation

---

## Example 7: Testing Documentation

### Prompt:
```
Launch a subagent to create testing documentation:
1. Document testing strategy and types of tests
2. Explain how to run tests (unit, integration, e2e)
3. List testing frameworks and tools used
4. Document mocking and fixture patterns
5. Provide examples of good test structure
6. Explain coverage requirements
7. Document CI/CD testing pipeline
8. Include debugging test failures guide

Create TESTING_GUIDE.md with practical examples.
```

### What It Generates:
- Testing strategy
- How-to guides
- Best practices
- Debugging tips

---

## Example 8: Security Documentation

### Prompt:
```
I need a subagent to create security documentation:
- Document authentication and authorization mechanisms
- Explain session management
- List all security headers and middleware
- Document input validation and sanitization
- Explain CSRF and XSS protection
- Document rate limiting and DDoS protection
- List security-related dependencies
- Include security testing procedures
- Document incident response procedures

Create SECURITY.md with implementation details.
```

### What It Generates:
- Security architecture
- Protection mechanisms
- Testing procedures
- Best practices

---

## Example 9: Performance Documentation

### Prompt:
```
Launch a subagent to document performance characteristics:
1. Identify performance-critical paths
2. Document caching strategies
3. Explain database query optimization
4. List performance monitoring tools
5. Document load testing procedures
6. Explain scalability considerations
7. Include performance benchmarks
8. Document optimization techniques used

Create PERFORMANCE.md with metrics and benchmarks.
```

### What It Generates:
- Performance analysis
- Optimization strategies
- Monitoring setup
- Benchmarking guide

---

## Example 10: Troubleshooting Guide

### Prompt:
```
I need a subagent to create a troubleshooting guide:
- Analyze error handling throughout the code
- List common errors and their solutions
- Document debugging techniques
- Explain logging and monitoring
- Provide stack trace interpretation guide
- Include common deployment issues
- Document rollback procedures
- Add FAQ section based on code analysis

Create TROUBLESHOOTING.md organized by symptom/solution.
```

### What It Generates:
- Error catalog
- Solution procedures
- Debugging guides
- FAQ section

---

## Advanced Documentation Generation

### Complete Documentation Suite Prompt:
```
Launch a subagent to create a complete documentation suite for this project:

Phase 1 - Core Documentation:
- README with project overview, quick start, and links
- ARCHITECTURE with system design and diagrams
- API_REFERENCE with all endpoints documented
- DEVELOPER_GUIDE with setup and workflow

Phase 2 - Technical Documentation:
- DATABASE_SCHEMA with ER diagrams
- CONFIGURATION with all options explained
- DEPLOYMENT guide for various environments
- TESTING strategy and procedures

Phase 3 - Operational Documentation:
- MONITORING and alerting setup
- TROUBLESHOOTING common issues
- SECURITY policies and procedures
- PERFORMANCE optimization guide

Requirements:
- Use clear, concise language
- Include code examples where relevant
- Add diagrams (Mermaid format)
- Link between related documents
- Include table of contents
- Add last-updated dates

Create all documentation in /docs folder with proper structure.
```

---

## Documentation Maintenance

### Update Existing Documentation Prompt:
```
Subagent task: Audit and update existing documentation:
1. Read all existing docs in /docs folder
2. Compare with current codebase
3. Identify outdated information
4. Find missing documentation for new features
5. Check for broken links
6. Verify code examples still work
7. Update diagrams if architecture changed

Provide a report of changes needed and create updated versions.
```

---

## Tips for Documentation Subagents

### Getting Better Documentation:
1. **Specify target audience**: Junior developers, API consumers, ops team, etc.
2. **Request examples**: Real code examples make docs more useful
3. **Ask for diagrams**: Visual documentation is easier to understand
4. **Define format**: Markdown, JSDoc, OpenAPI, etc.

### Sample Audience Specification:
```
"Create documentation for junior developers unfamiliar with the tech stack"
vs
"Create technical reference for experienced developers"
```

### Requesting Structured Output:
```
"Use the following structure for each component:
1. Overview and purpose
2. Installation/import
3. Props/parameters
4. Code examples
5. Common pitfalls
6. Related components"
```

---

**Ready to document?** Copy any prompt and let the subagent create comprehensive documentation! 📚✍️

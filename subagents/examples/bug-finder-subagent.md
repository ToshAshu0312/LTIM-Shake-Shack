# Bug Finder Subagent Examples

This document provides examples for using subagents to detect, analyze, and help fix bugs in your codebase.

## Example 1: Race Condition Detector

### Prompt:
```
Launch a subagent to find potential race conditions and concurrency bugs:
1. Search for shared state accessed by multiple async operations
2. Identify missing mutex/lock mechanisms
3. Find async operations that aren't properly awaited
4. Look for state updates that could conflict
5. Check for promises that aren't properly chained
6. Identify callback hell patterns that might hide race conditions

Create a race condition risk report with examples and suggested fixes.
```

### What It Finds:
- Concurrent access issues
- Missing synchronization
- Async/await anti-patterns
- Timing-dependent bugs

---

## Example 2: Memory Leak Hunter

### Prompt:
```
I need a subagent to find potential memory leaks:
- Event listeners that aren't removed
- Timers (setTimeout/setInterval) without cleanup
- Unclosed database/file connections
- Circular references that prevent garbage collection
- Large objects held in closures unnecessarily
- React components with missing cleanup in useEffect
- Global variables accumulating data

Provide leak patterns found with severity rating and fix recommendations.
```

### What It Finds:
- Resource cleanup failures
- Closure memory retention
- Event listener leaks
- Uncleared timers

---

## Example 3: Null/Undefined Reference Bugs

### Prompt:
```
Launch a subagent to find null/undefined reference errors:
1. Find object property access without null checks
2. Identify array operations without length validation
3. Look for function calls on potentially undefined objects
4. Check for missing optional chaining opportunities
5. Find destructuring without default values
6. Identify places where || or ?? operators should be used

Create a null-safety improvement report with before/after examples.
```

### What It Finds:
- Potential null pointer exceptions
- Missing null checks
- Unsafe property access
- Defensive programming gaps

---

## Example 4: Logic Error Detector

### Prompt:
```
I need a subagent to find potential logic errors:
- Off-by-one errors in loops and array indices
- Incorrect comparison operators (== vs ===, > vs >=)
- Wrong operator precedence assumptions
- Inverted boolean conditions
- Missing break statements in switch cases
- Incorrect array/string slice parameters
- Math operations with wrong order of operations

Analyze the logic flow and report suspicious patterns.
```

### What It Finds:
- Boundary condition errors
- Operator mistakes
- Logic flow issues
- Mathematical errors

---

## Example 5: Type Coercion Issues (JavaScript/TypeScript)

### Prompt:
```
Launch a subagent to find type coercion bugs:
1. Find implicit type conversions that might cause bugs
2. Identify loose equality (==) that should be strict (===)
3. Look for string concatenation that should be number addition
4. Find array/object comparisons that might not work as expected
5. Check for truthy/falsy confusion in conditionals
6. Identify NaN comparisons without Number.isNaN()

Report type coercion risks with corrected examples.
```

### What It Finds:
- Type conversion bugs
- Equality comparison issues
- Implicit casting problems
- Truthy/falsy logic errors

---

## Example 6: API Error Handling Bugs

### Prompt:
```
I need a subagent to audit API error handling:
1. Find API calls without try-catch or error callbacks
2. Check if error responses are properly typed/validated
3. Look for missing timeout handling
4. Identify APIs without retry logic for transient failures
5. Find places where errors aren't propagated to users
6. Check if loading states are properly reset on errors

Create an API reliability improvement report.
```

### What It Finds:
- Missing error handling
- Timeout issues
- Poor user feedback
- State management errors

---

## Example 7: State Management Bugs

### Prompt:
```
Launch a subagent to find state management issues:
- Direct state mutations instead of using setState/setters
- State updates that depend on previous state incorrectly
- Missing useCallback/useMemo causing unnecessary re-renders
- Stale closure issues in React hooks
- Redux state mutations instead of immutable updates
- Component state that should be lifted up or moved to context

Analyze state management patterns and suggest improvements.
```

### What It Finds:
- Direct mutation bugs
- Closure issues
- Performance problems
- Architectural issues

---

## Example 8: Input Validation Gaps

### Prompt:
```
I need a subagent to find input validation vulnerabilities:
1. User inputs that aren't sanitized or validated
2. Missing length/range checks
3. Unvalidated file uploads
4. Email/URL validation gaps
5. Missing CSRF token validation
6. Unvalidated date/time inputs
7. SQL injection risks in query construction

Create a security-focused validation report with fix priorities.
```

### What It Finds:
- Missing input validation
- Security vulnerabilities
- Data integrity issues
- Injection risks

---

## Example 9: Resource Cleanup Bugs

### Prompt:
```
Launch a subagent to find resource cleanup issues:
- Database connections that aren't closed
- File handles that remain open
- WebSocket connections without close handlers
- HTTP requests without abort controllers
- Canvas contexts that aren't cleaned up
- Workers that aren't terminated
- Subscriptions that aren't unsubscribed

Report cleanup gaps with proper disposal patterns.
```

### What It Finds:
- Resource leaks
- Connection leaks
- Missing disposal logic
- Cleanup anti-patterns

---

## Example 10: Configuration and Environment Bugs

### Prompt:
```
I need a subagent to find configuration-related bugs:
1. Hardcoded values that should be environment variables
2. Missing environment variable fallbacks
3. Configuration values used without validation
4. Secrets committed in code or config files
5. Environment-specific code without proper guards
6. Missing required configuration documentation

Create a configuration hygiene report with security emphasis.
```

### What It Finds:
- Hardcoded credentials
- Missing config validation
- Environment issues
- Security risks

---

## Advanced Bug Detection

### Comprehensive Bug Hunt Prompt:
```
Launch a subagent to perform a comprehensive bug detection sweep:

Phase 1 - Scan for common bug patterns:
- Null/undefined references
- Type coercion issues
- Off-by-one errors
- Resource leaks

Phase 2 - Analyze error handling:
- Missing try-catch blocks
- Unhandled promise rejections
- Swallowed errors
- Poor error messages

Phase 3 - Check async operations:
- Race conditions
- Missing awaits
- Callback hell
- Promise anti-patterns

Phase 4 - Review state management:
- State mutations
- Stale closures
- Unnecessary re-renders

Provide a prioritized bug report with:
- Severity (Critical/High/Medium/Low)
- Likelihood of occurrence
- Impact if triggered
- Recommended fix with code examples

Focus on bugs that would cause runtime failures or data corruption.
```

---

## Tips for Bug-Finding Subagents

### Maximize Detection:
1. **Be specific about bug types** you're concerned with
2. **Provide context** about recent issues or failure patterns
3. **Request reproduction steps** if possible
4. **Ask for fix examples** not just problem identification

### Follow-up After Detection:
```
After the subagent reports bugs, you can ask:
"Create a fix for the critical and high severity issues found, starting with [specific file/issue]"
```

### Combining with Testing:
```
"Find bugs in error handling, then generate unit tests that would catch these bugs"
```

---

**Start bug hunting!** Copy any prompt and let the subagent find issues before they cause problems! 🐛🔍

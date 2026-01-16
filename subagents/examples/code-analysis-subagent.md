# Code Analysis Subagent Examples

This document provides specific examples for using subagents to analyze code quality and suggest improvements.

## Example 1: Find All TODO and FIXME Comments

### Prompt:
```
Launch a subagent to find all TODO, FIXME, HACK, and XXX comments in the codebase. Create a prioritized task list with:
- File location and line number
- The comment text
- Surrounding code context
- Estimated complexity (Simple/Medium/Complex)
- Suggested timeline for resolution

Group by priority and create a project board markdown file.
```

### What It Does:
- Searches entire workspace for code comments
- Extracts context and analyzes complexity
- Creates actionable task list
- Organizes by priority

---

## Example 2: Detect Code Duplication

### Prompt:
```
I need a subagent to find duplicate or near-duplicate code blocks across the project. The agent should:
1. Search for functions with similar logic (80%+ similarity)
2. Identify repeated code patterns that could be extracted
3. Find copy-pasted code with minor variations
4. Calculate how much code could be eliminated
5. Suggest refactoring strategies with shared utilities

Provide a report showing duplicate groups with file locations and refactoring recommendations.
```

### What It Does:
- Analyzes code similarity patterns
- Identifies refactoring opportunities
- Calculates potential code reduction
- Suggests DRY principle improvements

---

## Example 3: Function Complexity Analysis

### Prompt:
```
Launch a subagent to analyze function complexity across the codebase:
- Find functions with cyclomatic complexity > 10
- Identify deeply nested code (> 4 levels)
- Flag functions with too many parameters (> 5)
- Find functions with multiple responsibilities
- Suggest refactoring strategies for each complex function

Generate a complexity report ranked by severity with refactoring recommendations.
```

### What It Does:
- Calculates code complexity metrics
- Identifies hard-to-maintain functions
- Provides specific refactoring guidance
- Prioritizes technical debt

---

## Example 4: Error Handling Audit

### Prompt:
```
I need a subagent to audit error handling throughout the application:
1. Find try-catch blocks that catch but don't properly handle errors
2. Identify async functions without error handling
3. Look for unhandled promise rejections
4. Find places where errors are silently swallowed
5. Check if error messages are user-friendly and actionable
6. Verify if errors are logged with sufficient context

Create an error handling improvement report with examples of good vs bad patterns found.
```

### What It Does:
- Comprehensive error handling review
- Identifies error handling anti-patterns
- Suggests improvements with examples
- Ensures robust error management

---

## Example 5: Code Style Consistency Checker

### Prompt:
```
Launch a subagent to check code style consistency:
- Find inconsistent naming conventions (camelCase vs snake_case)
- Identify mixed quote styles (single vs double quotes)
- Check for inconsistent indentation
- Find mixed import styles (require vs import)
- Look for inconsistent file organization patterns
- Check arrow function vs traditional function usage consistency

Report all inconsistencies with suggestions for standardization.
```

### What It Does:
- Analyzes code style patterns
- Identifies inconsistencies
- Suggests standardization
- Improves codebase uniformity

---

## Example 6: Dead Code Detection

### Prompt:
```
I need a subagent to find dead code in the project:
1. Search for unused functions and variables
2. Find imports that are never used
3. Identify unreachable code blocks
4. Look for commented-out code that should be removed
5. Find obsolete utility functions with no callers
6. Check for unused CSS classes or styles

Create a safe-to-delete report with confidence ratings for each finding.
```

### What It Does:
- Identifies unused code
- Finds safe deletion candidates
- Reduces codebase bloat
- Improves maintainability

---

## Example 7: API Usage Pattern Analysis

### Prompt:
```
Launch a subagent to analyze how APIs are used across the codebase:
- Find all API calls and their patterns
- Identify inconsistent error handling between API calls
- Look for API calls that should be cached
- Find places where API responses aren't validated
- Check for hardcoded API endpoints
- Identify opportunities for API call abstraction

Suggest a consistent API client wrapper implementation based on findings.
```

### What It Does:
- Maps API usage patterns
- Identifies inconsistencies
- Suggests centralized API handling
- Improves API reliability

---

## Example 8: Test Coverage Gaps

### Prompt:
```
I need a subagent to identify test coverage gaps:
1. Find all functions and classes
2. Check which ones have corresponding tests
3. Identify critical business logic without tests
4. Find edge cases that aren't tested
5. Look for integration points without test coverage
6. Analyze test quality (are tests meaningful or just for coverage?)

Create a test prioritization report focusing on untested critical paths.
```

### What It Does:
- Analyzes test coverage
- Identifies critical untested code
- Prioritizes testing efforts
- Suggests test scenarios

---

## Tips for Code Analysis Subagents

### Getting Better Results:
1. **Be specific about scope**: Mention file patterns or directories
2. **Define quality criteria**: What makes code "good" in your context?
3. **Request examples**: Ask for both good and bad examples found
4. **Want actionable output**: Request specific refactoring suggestions

### Sample Scope Refinement:
```
Instead of: "Find code quality issues"
Try: "Find code quality issues in /src/components focusing on React best practices"
```

### Requesting Structured Output:
```
"Present findings as a markdown table with columns: File, Line, Issue, Severity, Suggestion"
```

---

## Combining Multiple Analyses

You can chain multiple analyses:

```
Launch a subagent to perform a comprehensive code health check:
1. First, analyze code complexity and identify problem functions
2. Then, check if those complex functions have adequate test coverage
3. Look for similar patterns across the identified problem areas
4. Suggest a refactoring strategy that addresses all three concerns

Provide an integrated improvement plan with priorities.
```

---

**Ready to analyze your code?** Copy any prompt and start improving your codebase! 🔍

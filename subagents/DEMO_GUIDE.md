# Subagents Demo Guide - Copy & Paste Prompts

This guide provides ready-to-use prompts that demonstrate GitHub Copilot's subagent capabilities. Simply copy and paste these prompts into Copilot Chat to see autonomous agents in action.

## Table of Contents
- [Demo 1: Code Analysis & Refactoring](#demo-1-code-analysis--refactoring)
- [Demo 2: Security Vulnerability Scanner](#demo-2-security-vulnerability-scanner)
- [Demo 3: Documentation Generator](#demo-3-documentation-generator)
- [Demo 4: Performance Analysis](#demo-4-performance-analysis)
- [Demo 5: Dependency Impact Analyzer](#demo-5-dependency-impact-analyzer)

---

## Demo 1: Code Analysis & Refactoring

### 📋 Copy This Prompt:
```
I need you to launch a subagent to analyze all JavaScript/TypeScript files in this workspace for code quality issues. The subagent should:

1. Search for common anti-patterns (nested callbacks, god functions, magic numbers)
2. Identify functions longer than 50 lines that could be refactored
3. Find duplicate code blocks that could be extracted into reusable functions
4. Check for inconsistent naming conventions
5. Provide a comprehensive report with file locations and suggested improvements

Please do this research autonomously and return a detailed analysis report.
```

### Expected Outcome:
- Subagent searches entire workspace
- Analyzes code patterns and quality
- Generates comprehensive report with findings
- Provides actionable recommendations

---

## Demo 2: Security Vulnerability Scanner

### 📋 Copy This Prompt:
```
Launch a subagent to perform a comprehensive security audit of this codebase. The agent should:

1. Search for hardcoded credentials, API keys, or sensitive data
2. Identify SQL injection vulnerabilities in database queries
3. Check for XSS (Cross-Site Scripting) risks in user input handling
4. Find insecure file operations or path traversal issues
5. Look for outdated dependencies with known vulnerabilities
6. Analyze authentication and authorization implementations

Return a prioritized security report with severity ratings (Critical, High, Medium, Low) and remediation steps for each finding.
```

### Expected Outcome:
- Deep security analysis across all files
- Categorized vulnerability report
- Severity ratings for each issue
- Specific remediation recommendations

---

## Demo 3: Documentation Generator

### 📋 Copy This Prompt:
```
I need a subagent to create comprehensive documentation for this project. The agent should:

1. Analyze the project structure and identify all main components
2. Document each module/class with purpose, functionality, and usage examples
3. Create API documentation for all public functions and methods
4. Generate a project architecture overview diagram (in Markdown/Mermaid)
5. Document configuration files and environment setup
6. Create a developer onboarding guide

Save all documentation in a new /docs folder with proper structure and formatting.
```

### Expected Outcome:
- Complete project documentation suite
- Architecture diagrams
- API reference documentation
- Developer onboarding materials

---

## Demo 4: Performance Analysis

### 📋 Copy This Prompt:
```
Launch a subagent to analyze performance bottlenecks in this application. The agent should:

1. Search for inefficient loops and O(n²) or worse algorithms
2. Identify unnecessary re-renders in React components (if applicable)
3. Find memory leaks (unclosed connections, event listeners, timers)
4. Check for expensive operations in render paths
5. Analyze database query patterns for N+1 problems
6. Look for opportunities to implement caching or memoization
7. Identify large bundle sizes or unused dependencies

Provide a detailed performance audit report with specific optimization recommendations and expected impact.
```

### Expected Outcome:
- Performance bottleneck identification
- Algorithm complexity analysis
- Optimization recommendations with impact estimates
- Prioritized action items

---

## Demo 5: Dependency Impact Analyzer

### 📋 Copy This Prompt:
```
I need a subagent to analyze the impact of upgrading a specific dependency (or all dependencies). The agent should:

1. List all current dependencies and their versions
2. Identify outdated packages and available updates
3. Search the codebase for breaking changes if we upgrade
4. Find deprecated API usage that might break with updates
5. Analyze transitive dependencies and potential conflicts
6. Check for security advisories on current versions
7. Estimate the effort required for each upgrade

Create a comprehensive upgrade strategy report with risk assessment and recommended migration path.
```

### Expected Outcome:
- Complete dependency inventory
- Breaking change analysis
- Risk-assessed upgrade plan
- Migration strategy with effort estimates

---

## Advanced Demo: Architecture Migration

### 📋 Copy This Prompt:
```
Launch a subagent to help migrate this application from [Current Architecture, e.g., "callback-based async"] to [Target Architecture, e.g., "async/await pattern"]. The agent should:

1. Map out all instances of the current pattern in the codebase
2. Identify dependencies between affected files
3. Analyze edge cases and potential breaking changes
4. Create a migration plan with file-by-file changes
5. Suggest testing strategies for each migration step
6. Document any manual intervention required

Research this thoroughly and return a comprehensive migration roadmap with code examples for key transformations.
```

### Expected Outcome:
- Complete architecture analysis
- Migration roadmap with dependencies
- Code transformation examples
- Testing strategy

---

## Tips for Using Subagents

### ✅ Best Practices:
1. **Be Specific**: Clearly define what you want the subagent to research
2. **Set Scope**: Define boundaries (file types, folders, depth)
3. **Define Output**: Specify what format you want the results in
4. **Trust Autonomy**: Let the agent work without interrupting
5. **Review Results**: Always review subagent findings before implementing changes

### 🎯 When to Use Subagents:
- Complex multi-file analysis
- Deep code pattern searches
- Comprehensive audits (security, performance, quality)
- Large-scale refactoring planning
- Documentation generation
- Architecture analysis

### ⚠️ When NOT to Use Subagents:
- Simple single-file edits
- Quick questions with obvious answers
- Tasks requiring immediate user input
- Simple code generation without research

---

## Customizing Prompts

You can adapt these prompts by:
- Changing the scope (specific folders, file types)
- Adjusting the depth of analysis
- Adding domain-specific requirements
- Modifying output format preferences

### Example Customization:
```
Original: "analyze all JavaScript files"
Customized: "analyze only files in /src/api folder for REST API best practices"
```

---

## Monitoring Subagent Progress

While the subagent works, you'll see:
1. Initial task acknowledgment
2. Research and analysis phases
3. Intermediate findings (if applicable)
4. Final comprehensive report

The subagent will inform you when the task is complete and present its findings.

---

## Need Help?

If a subagent doesn't perform as expected:
1. Make your prompt more specific
2. Break complex tasks into smaller steps
3. Provide context about your project structure
4. Specify the expected output format clearly

---

**Ready to try?** Pick any prompt above, copy it, and paste it into GitHub Copilot Chat to see subagents in action! 🚀

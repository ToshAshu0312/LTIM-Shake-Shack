# Dependency Analyzer Subagent Examples

This document provides examples for using subagents to analyze, audit, and manage project dependencies.

## Example 1: Outdated Dependencies Checker

### Prompt:
```
Launch a subagent to analyze outdated dependencies:
1. List all project dependencies from package.json/requirements.txt/etc
2. Check current versions against latest stable versions
3. Identify packages with major version updates available
4. Flag deprecated packages
5. Check for security vulnerabilities in current versions
6. Estimate breaking change risk for each update
7. Group by update priority (security, major, minor, patch)

Create an UPGRADE_PLAN.md with risk assessment and recommended update order.
```

### What It Analyzes:
- Version comparisons
- Security vulnerabilities
- Breaking change risks
- Update priorities

---

## Example 2: Dependency Tree Analyzer

### Prompt:
```
I need a subagent to analyze the dependency tree:
- Map all direct and transitive dependencies
- Identify dependency conflicts
- Find duplicate packages (different versions of same package)
- Calculate total dependency size
- Identify dependencies that could be removed
- Check for circular dependencies
- Find packages only used in one place

Create a visual dependency graph (Mermaid) and an optimization report.
```

### What It Analyzes:
- Dependency relationships
- Conflicts and duplicates
- Bundle size impacts
- Optimization opportunities

---

## Example 3: License Compliance Checker

### Prompt:
```
Launch a subagent to audit dependency licenses:
1. Extract license information for all dependencies
2. Flag copyleft licenses (GPL, AGPL) that might have restrictions
3. Identify dependencies with no license or unknown licenses
4. Check for license incompatibilities
5. List dependencies requiring attribution
6. Generate a LICENSES.md file with all required notices
7. Identify commercial licenses that need purchase

Create a license compliance report with risk ratings.
```

### What It Analyzes:
- License types
- Compliance risks
- Attribution requirements
- Legal considerations

---

## Example 4: Unused Dependencies Detector

### Prompt:
```
I need a subagent to find unused dependencies:
- List all installed packages
- Search codebase for actual imports/requires
- Identify dependencies never imported
- Find dev dependencies used in production code
- Check for dependencies only used in old/commented code
- Calculate potential bundle size reduction
- Verify if "unused" packages are actually needed for builds

Create a SAFE_TO_REMOVE.md with confidence ratings for each package.
```

### What It Analyzes:
- Import usage patterns
- Dead dependencies
- Misplaced dev dependencies
- Bundle optimization potential

---

## Example 5: Security Vulnerability Audit

### Prompt:
```
Launch a subagent to perform security audit of dependencies:
1. Check all dependencies against known CVE databases
2. Identify vulnerabilities with severity ratings
3. Find packages with available security patches
4. Check for packages with no maintainer response
5. Analyze transitive dependency vulnerabilities
6. Suggest alternative packages for vulnerable ones
7. Create automated fix suggestions where available

Generate SECURITY_AUDIT.md with immediate action items prioritized by severity.
```

### What It Analyzes:
- Known vulnerabilities
- Security patches
- Maintainer responsiveness
- Alternative packages

---

## Example 6: Dependency Update Impact Analysis

### Prompt:
```
I need a subagent to analyze the impact of updating [specific package or all packages]:
1. Identify current usage of the package in codebase
2. Review changelog for breaking changes
3. Find deprecated API usage that needs updating
4. Search for related discussions/issues in the package repo
5. Check if our current code is compatible
6. Estimate refactoring effort required
7. Identify affected tests that need updates

Create an update strategy with code migration examples.
```

### What It Analyzes:
- Breaking changes
- Code compatibility
- Refactoring requirements
- Migration path

---

## Example 7: Bundle Size Optimizer

### Prompt:
```
Launch a subagent to optimize bundle size:
- Analyze bundle composition and size by package
- Find large dependencies with lighter alternatives
- Identify packages where we only use small portions
- Check for tree-shaking opportunities
- Find CSS/font files that could be optimized
- Identify duplicate code in different packages
- Suggest code splitting strategies
- Calculate potential size reductions

Create BUNDLE_OPTIMIZATION.md with before/after projections.
```

### What It Analyzes:
- Bundle composition
- Size contributors
- Alternative packages
- Optimization strategies

---

## Example 8: Dependency Health Check

### Prompt:
```
I need a subagent to assess overall dependency health:
1. Check maintenance status (last update, issue response time)
2. Evaluate popularity and community size
3. Assess test coverage and code quality
4. Check for active development vs abandoned projects
5. Review documentation quality
6. Evaluate backward compatibility track record
7. Check for TypeScript support quality
8. Assess performance characteristics

Create a DEPENDENCY_HEALTH.md scorecard for critical dependencies.
```

### What It Analyzes:
- Maintenance status
- Community health
- Code quality
- Future viability

---

## Example 9: Alternative Package Finder

### Prompt:
```
Launch a subagent to find better alternatives for dependencies:
- List all current dependencies
- For each, search for alternatives with:
  * Better performance
  * Smaller bundle size
  * More active maintenance
  * Better TypeScript support
  * Fewer dependencies
  * More features
- Compare pros/cons of current vs alternatives
- Assess migration difficulty

Create ALTERNATIVE_PACKAGES.md with recommendations and migration estimates.
```

### What It Analyzes:
- Alternative options
- Comparative analysis
- Migration feasibility
- Cost-benefit analysis

---

## Example 10: Monorepo Dependency Management

### Prompt:
```
I need a subagent to analyze dependencies across monorepo packages:
1. Map dependencies used in each workspace
2. Find duplicate dependencies across workspaces
3. Identify version mismatches for shared dependencies
4. Suggest dependencies to hoist to root
5. Find workspace-specific deps that could be shared
6. Check for internal package dependency cycles
7. Optimize internal package dependencies

Create MONOREPO_DEPENDENCY_STRATEGY.md with consolidation plan.
```

### What It Analyzes:
- Cross-workspace dependencies
- Version consistency
- Hoisting opportunities
- Internal dependencies

---

## Advanced Dependency Analysis

### Comprehensive Dependency Audit Prompt:
```
Launch a subagent for complete dependency lifecycle analysis:

Phase 1 - Current State Assessment:
- Inventory all dependencies with versions
- Check for security vulnerabilities
- Identify outdated packages
- Find unused dependencies

Phase 2 - Health & Quality:
- Assess maintenance status
- Check license compliance
- Evaluate package quality scores
- Review dependency tree complexity

Phase 3 - Optimization Opportunities:
- Identify bundle size optimizations
- Find lighter alternatives
- Suggest consolidation strategies
- Recommend removal candidates

Phase 4 - Upgrade Planning:
- Prioritize security updates
- Plan major version upgrades
- Estimate migration effort
- Create testing strategy

Deliverables:
1. DEPENDENCY_AUDIT.md - Complete analysis
2. UPGRADE_ROADMAP.md - Prioritized update plan
3. SECURITY_ACTIONS.md - Immediate security fixes
4. OPTIMIZATION_PLAN.md - Performance improvements

Include risk ratings, effort estimates, and expected benefits for each recommendation.
```

---

## Continuous Dependency Management

### Automated Dependency Monitoring Prompt:
```
Set up a subagent for ongoing dependency monitoring:
1. Create a baseline of current dependencies
2. Define alerts for:
   - New security vulnerabilities
   - Major version releases
   - Deprecated packages
   - License changes
3. Set up automated checks for:
   - Breaking changes in updates
   - Compatibility with our code
   - Bundle size impacts
4. Create a monthly review process

Document the monitoring strategy in DEPENDENCY_MONITORING.md
```

---

## Tips for Dependency Analysis Subagents

### Getting Better Analysis:
1. **Specify context**: Web frontend, Node backend, mobile app, etc.
2. **Define priorities**: Security, bundle size, maintainability, etc.
3. **Set constraints**: Budget, timeline, risk tolerance
4. **Request comparisons**: Current state vs recommended state

### Sample Context Specification:
```
"Analyze dependencies for a performance-critical web frontend where bundle size is the top priority, followed by security"
```

### Follow-up Actions:
```
After analysis, you can request:
"Create a PR to update all packages with patch versions and security fixes"
"Generate package.json with recommended alternative packages"
"Create migration guide for updating [specific package] from v2 to v3"
```

### Integration with CI/CD:
```
"Create a GitHub Action workflow that runs this dependency analysis weekly and creates issues for findings"
```

---

**Start optimizing dependencies!** Copy any prompt and let the subagent analyze your project's dependencies! 📦🔍

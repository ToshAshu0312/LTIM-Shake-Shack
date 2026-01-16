# GitHub Copilot Skills.md Feature Demo Guide

## Overview
GitHub Copilot's **skills.md** feature allows teams to define custom skills, coding standards, and project-specific guidelines that Copilot uses to provide contextually relevant suggestions.

## Demo Duration
**15-20 minutes**

---

## What is skills.md?

The `skills.md` file (or `.github/skills.md`) lets you:
- Define custom commands and prompts
- Establish team coding standards
- Create project-specific development guidelines
- Teach Copilot about your architecture patterns
- Standardize common tasks across the team

---

## Demo Setup (Before the Presentation)

### 1. Prerequisites
- VS Code with GitHub Copilot installed
- GitHub Copilot Chat enabled
- A sample project (use the provided demo files)

### 2. File Structure
```
your-project/
├── .github/
│   └── skills.md          # Project-level skills
├── src/
│   ├── api/
│   │   └── skills.md      # API-specific skills
│   └── database/
│       └── sample-code.js
└── README.md
```

---

## Demo Script

### **Part 1: Introduction (3 minutes)**

**Say:** 
> "Today I'll show you how skills.md transforms GitHub Copilot from a general coding assistant into a project-aware team member that understands your specific standards and patterns."

**Show:**
- Open the `.github/skills.md` file
- Briefly explain the structure

---

### **Part 2: Basic Skills Demo (5 minutes)**

#### Demo 1: Custom Command
**Type in Copilot Chat:** `@workspace /create-api`

**Expected Result:**
Copilot will use the skill defined in skills.md to create an API endpoint following your team's standards.

**Explain:**
> "Notice how Copilot automatically follows our team's API structure, including error handling, logging, and documentation standards."

#### Demo 2: Architecture Patterns
**Type in Copilot Chat:** `@workspace how should I structure a new microservice?`

**Expected Result:**
Copilot references the architecture guidelines in skills.md.

**Explain:**
> "Copilot now understands our microservice architecture and suggests code that follows our established patterns."

---

### **Part 3: Coding Standards Demo (5 minutes)**

#### Demo 3: Code Review Standards
**Open:** `sample-code.js` (intentionally has issues)

**Type in Copilot Chat:** `@workspace review this code for our standards`

**Expected Result:**
Copilot identifies violations of the standards defined in skills.md.

**Show:**
- Error handling issues
- Logging inconsistencies
- Documentation gaps
- Naming convention violations

**Explain:**
> "The skills.md file acts as an automated code review checklist, ensuring consistency across the entire team."

---

### **Part 4: Custom Skills in Action (5 minutes)**

#### Demo 4: Database Query Skill
**Type in Copilot Chat:** `@workspace /create-db-query for fetching user orders`

**Expected Result:**
Copilot generates a database query using your team's:
- Preferred ORM/query builder
- Error handling patterns
- Connection pooling approach
- Query optimization standards

#### Demo 5: Test Generation
**Type in Copilot Chat:** `@workspace /generate-tests for the user authentication module`

**Expected Result:**
Copilot creates tests following your testing framework and conventions.

---

### **Part 5: Team Benefits (2 minutes)**

**Key Points to Emphasize:**

1. **Onboarding**: New developers instantly access team standards
2. **Consistency**: All code follows the same patterns
3. **Knowledge Sharing**: Best practices are codified and accessible
4. **Productivity**: Reduce repetitive questions about "how we do things"
5. **Living Documentation**: skills.md evolves with your codebase

---

## Demo Tips

### Do's ✅
- Keep skills.md examples relevant to your audience
- Show before/after comparisons
- Demonstrate multiple skill types (commands, guidelines, patterns)
- Encourage audience to think about their own team's needs
- Show how skills.md can be version-controlled and evolve

### Don'ts ❌
- Don't make skills.md too complex during the demo
- Avoid using overly technical jargon
- Don't skip explaining WHY each skill is useful
- Avoid rushing through examples

---

## Q&A Preparation

### Common Questions:

**Q: Can we have multiple skills.md files?**
A: Yes! You can have project-level (`.github/skills.md`) and directory-specific skills that provide context for different parts of your codebase.

**Q: Does this replace documentation?**
A: No, it complements it. skills.md makes documentation actionable for Copilot.

**Q: How do we maintain skills.md?**
A: Treat it like code—use pull requests, code reviews, and version control.

**Q: Can we use it for security standards?**
A: Absolutely! Define security patterns, authentication flows, and compliance requirements.

**Q: Does it work with all programming languages?**
A: Yes, skills.md is language-agnostic.

---

## Follow-up Actions

After the demo, encourage customers to:
1. Identify 3-5 coding standards they want to enforce
2. Create a basic skills.md for their team
3. Start with simple skills and expand over time
4. Share skills.md across repositories for consistency

---

## Additional Resources

- [GitHub Copilot Skills Documentation](https://docs.github.com/copilot)
- Sample skills.md templates (provided in this demo)
- Team adoption guide

---

## Success Metrics

Track these after implementation:
- Reduction in "how do we..." questions
- Code review time decrease
- Onboarding time for new developers
- Code consistency improvements
- Developer satisfaction scores

# Skills.md Demo for GitHub Copilot

## Quick Start Guide

This demo showcases how GitHub Copilot's **skills.md** feature helps teams standardize coding practices and improve developer productivity.

### Demo Files

1. **DEMO_GUIDE_SKILLS.md** - Complete presentation script and talking points
2. **.github/skills.md** - Main project-level skills and standards
3. **src/api/skills.md** - API-specific skills and patterns
4. **src/sample-code.js** - Code with violations (for demonstration)
5. **src/correct-example.js** - Proper implementation following standards

---

## What You'll Demonstrate

### 1. Custom Commands
Show how developers can use `/create-api`, `/create-db-query`, and `/generate-tests` commands that follow team standards automatically.

### 2. Code Review
Use Copilot to review `sample-code.js` and identify 20+ violations of the team's coding standards.

### 3. Consistent Code Generation
Generate new code that automatically follows architecture patterns, naming conventions, and error handling standards.

### 4. Living Documentation
Show how skills.md serves as executable documentation that evolves with the codebase.

---

## Demo Preparation

1. **Install Required Extensions:**
   - GitHub Copilot
   - GitHub Copilot Chat

2. **Open in VS Code:**
   - Open this `skills-demo` folder as your workspace

3. **Familiarize Yourself:**
   - Read through DEMO_GUIDE_SKILLS.md
   - Review the skills.md files
   - Practice the key commands

4. **Test Before Presenting:**
   - Try `@workspace /create-api` in Copilot Chat
   - Ask Copilot to review sample-code.js
   - Generate a test file using `/generate-tests`

---

## Demo Flow (15-20 minutes)

### Part 1: Introduction (3 min)
- Explain what skills.md is
- Show the file structure

### Part 2: Custom Commands (5 min)
- Demonstrate `/create-api`
- Show `/create-db-query`

### Part 3: Code Review (5 min)
- Open sample-code.js
- Ask Copilot: `@workspace review this code for our standards`
- Show the violations identified

### Part 4: Standards in Action (5 min)
- Generate new code following standards
- Compare sample-code.js vs correct-example.js

### Part 5: Team Benefits (2 min)
- Discuss ROI and team impact
- Q&A

---

## Key Messages

✅ **Consistency**: Everyone writes code the same way
✅ **Onboarding**: New developers get instant access to team knowledge
✅ **Productivity**: Reduce "how do we do this?" questions
✅ **Quality**: Automated standards enforcement
✅ **Evolution**: Skills grow with your team

---

## Customization Tips

### For Your Customer
Modify skills.md to include:
- Their actual tech stack (frameworks, databases)
- Their specific coding standards
- Their security requirements
- Their deployment practices

### Industry-Specific Examples
- **Finance**: Add compliance and audit logging standards
- **Healthcare**: Include HIPAA requirements and PHI handling
- **E-commerce**: Add PCI DSS and transaction security patterns
- **SaaS**: Include multi-tenancy and data isolation patterns

---

## Success Stories to Share

Use these talking points:
- "Teams report 40% reduction in code review time"
- "New developer onboarding cut from 2 weeks to 3 days"
- "Consistency in code quality across 20+ microservices"
- "Security standards automatically enforced by Copilot"

---

## Follow-up Resources

After the demo, provide:
1. This entire demo folder
2. Link to GitHub Copilot skills documentation
3. Template skills.md for their team
4. Implementation checklist

---

## Troubleshooting

**Copilot not using skills.md?**
- Ensure file is named exactly `skills.md`
- Check it's in `.github/` or current directory
- Reload VS Code window
- Use `@workspace` in Copilot Chat

**Custom commands not working?**
- Use exact command format: `/command-name`
- Ensure commands are defined in skills.md
- Update to latest Copilot version

---

## Questions?

Common customer questions and answers are in DEMO_GUIDE_SKILLS.md under "Q&A Preparation"

---

## Demo Checklist

Before presenting:
- [ ] VS Code with Copilot installed
- [ ] All demo files accessible
- [ ] Tested key commands
- [ ] Prepared for Q&A
- [ ] Customized examples if needed
- [ ] 15-20 minutes scheduled
- [ ] Backup examples ready

---

**Good luck with your demo! 🚀**

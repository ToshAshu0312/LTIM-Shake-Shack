# TTPS Documentation Agent - Demo Guide

## Overview
The TTPS (Transfer to Production Support) Documentation Generator Agent automates the creation of comprehensive production handover documentation by aggregating information from multiple sources.

**Time Savings**: What traditionally takes 3-5 days of manual work → **2-3 minutes of automated generation**

---

## What is TTPS Documentation?

**Transfer to Production Support (TTPS)** documentation is a critical handover document provided to maintenance teams when new features are deployed to production. It includes:

- ✅ **Business Context**: What was built and why
- ✅ **Technical Details**: How it was implemented
- ✅ **Deployment Procedures**: How to deploy and rollback
- ✅ **Operational Guidelines**: Monitoring, alerts, maintenance
- ✅ **Troubleshooting**: Common issues and solutions
- ✅ **Support Information**: Contacts and escalation paths

---

## How It Works

### Data Sources
The agent intelligently curates information from:

| Source | What It Provides |
|--------|------------------|
| **Jira** | Epics, user stories, business requirements, acceptance criteria |
| **GitHub** | Pull requests, code changes, technical implementation, commit history |
| **Figma** | UI/UX designs, component specs, user flows, prototypes |
| **Confluence** | Architecture docs, past incident RCAs, deployment guides |
| **Workspace** | README files, release notes, technical documentation |

### Agent Workflow
```
1. User specifies scope (epic, release, or sprint)
   ↓
2. Agent queries Jira for business requirements
   ↓
3. Agent extracts GitHub technical details
   ↓
4. Agent retrieves Figma design specs
   ↓
5. Agent aggregates Confluence documentation
   ↓
6. Agent cross-references workspace files
   ↓
7. Agent generates structured TTPS document
   ↓
8. Output: Comprehensive markdown document ready for review
```

---

## Demo Scenarios

### 🎯 Scenario 1: Generate Full Feature TTPS

**Use Case**: New Order Management System feature going to production

**Demo Prompt**:
```
@ttps-documentation-agent Generate complete TTPS documentation for epic KAN-45
```

**What Happens**:
1. Agent queries Jira for KAN-45 epic and all related stories
2. Identifies linked GitHub PRs (searches by epic key in PR descriptions)
3. Retrieves Figma designs tagged with "order-management"
4. Searches Confluence for "Order Management" architecture docs
5. Compiles comprehensive TTPS with all 10 sections

**Expected Output**: 
- 20-30 page markdown document
- Executive summary with business objectives
- Complete technical architecture
- Detailed implementation notes
- UI/UX specifications with Figma links
- Deployment and rollback procedures
- Troubleshooting guide
- Operational runbook

---

### 🎯 Scenario 2: Sprint-Based TTPS

**Use Case**: All completed features from Sprint 23 going to production

**Demo Prompt**:
```
@ttps-documentation-agent Create TTPS for all stories completed in Sprint 23 of project KAN
```

**What Happens**:
1. Agent queries Jira: `project = KAN AND sprint = 23 AND status = Done`
2. Finds 8 completed stories
3. For each story, extracts technical details from GitHub
4. Groups related changes by component
5. Creates consolidated TTPS covering all sprint deliverables

**Expected Output**:
- Consolidated documentation for 8 stories
- Grouped by system component (Frontend, Backend, Database)
- Combined deployment procedure
- Unified troubleshooting guide

---

### 🎯 Scenario 3: Focused Troubleshooting Section

**Use Case**: Need only troubleshooting guide for existing feature

**Demo Prompt**:
```
@ttps-documentation-agent Generate troubleshooting section for the payment gateway integration (epic KAN-67). Include common errors, resolution steps, and escalation procedures.
```

**What Happens**:
1. Agent finds KAN-67 and related bugs in Jira
2. Searches Confluence for past payment gateway RCAs
3. Analyzes GitHub code for error handling patterns
4. Reviews GitHub issues for common problems
5. Generates focused troubleshooting documentation

**Expected Output**:
- Common issues with symptoms and resolutions
- Error codes reference table
- Step-by-step debug procedures
- Escalation paths for complex issues

---

### 🎯 Scenario 4: Database Changes Documentation

**Use Case**: DBA team needs detailed database changes for a release

**Demo Prompt**:
```
@ttps-documentation-agent Document all database changes for release v2.6.0. Include schema changes, migration scripts, indexes, and rollback procedures.
```

**What Happens**:
1. Agent searches GitHub PRs tagged with "v2.6.0" and "database"
2. Identifies migration scripts in codebase
3. Extracts schema changes from PR diffs
4. Finds configuration changes in environment files
5. Compiles database-focused documentation

**Expected Output**:
- Complete list of schema changes (tables, columns, constraints)
- Migration script locations and execution order
- Index creation/modification details
- Rollback SQL scripts
- Performance impact assessment

---

### 🎯 Scenario 5: API Documentation for Integration Teams

**Use Case**: External teams need API documentation for new endpoints

**Demo Prompt**:
```
@ttps-documentation-agent Generate API documentation section for the new Customer Profile API (KAN-89). Include endpoints, request/response examples, authentication, and rate limits.
```

**What Happens**:
1. Agent finds KAN-89 in Jira with API requirements
2. Searches GitHub for API controller/route code
3. Extracts endpoint definitions, request/response schemas
4. Finds authentication middleware implementation
5. Checks for OpenAPI/Swagger documentation
6. Generates structured API documentation

**Expected Output**:
- API endpoints table with methods and paths
- Request/response examples with JSON schemas
- Authentication requirements
- Rate limiting policies
- Error codes and handling
- Sample cURL commands

---

## Step-by-Step Demo Script

### Preparation (Before Demo)
1. ✅ Ensure Atlassian MCP is connected (Jira + Confluence)
2. ✅ Verify GitHub MCP is connected to LTIM-MCP-Demo repository
3. ✅ Check Figma MCP connection with file key Keh2M4DFkwxA1qGYfVaCvg
4. ✅ Have a known epic (e.g., KAN-45) or sprint ready for demo

### Live Demo Flow

#### **Step 1: Introduction (30 seconds)**
"Traditional TTPS documentation takes 3-5 days to manually compile from multiple sources. Today I'll show you how the TTPS Agent generates the same documentation in 2-3 minutes."

#### **Step 2: Show the Challenge (1 minute)**
"For a single feature release, teams manually:
- Read through 10-15 Jira stories
- Review 5-8 GitHub pull requests
- Check Figma for UI changes
- Search Confluence for architecture docs
- Consolidate everything into a 20-30 page document

This is error-prone, time-consuming, and often incomplete."

#### **Step 3: Invoke the Agent (30 seconds)**
Open GitHub Copilot Chat and type:
```
@ttps-documentation-agent Generate complete TTPS documentation for epic KAN-45 (Order Management System)
```

#### **Step 4: Watch the Magic (2-3 minutes)**
Point out as the agent:
- ✅ "Now querying Jira for epic KAN-45..."
- ✅ "Found 12 related user stories"
- ✅ "Searching GitHub for linked pull requests..."
- ✅ "Found 6 merged PRs with 147 file changes"
- ✅ "Retrieving Figma designs for order screens..."
- ✅ "Searching Confluence for architecture documentation..."
- ✅ "Compiling comprehensive TTPS document..."

#### **Step 5: Review Generated Documentation (2 minutes)**
Show key sections:
1. **Executive Summary**: "See how it extracted business objectives from Jira"
2. **Technical Architecture**: "Here's the system diagram from Confluence"
3. **Implementation Details**: "All GitHub PRs are documented with file changes"
4. **UI Specifications**: "Direct links to Figma designs"
5. **Troubleshooting Guide**: "Based on past incidents and code analysis"

#### **Step 6: Highlight Value (1 minute)**
"What we just generated in 3 minutes would have taken a senior engineer 3-5 days to compile:
- ✅ All Jira stories analyzed
- ✅ All code changes documented
- ✅ All designs referenced
- ✅ Architecture diagrams included
- ✅ Troubleshooting guide created
- ✅ Ready for production handover"

---

## Common Questions & Answers

### Q: Does this replace manual review?
**A**: No. The agent accelerates documentation creation by 95%, but domain experts should still review for accuracy and completeness.

### Q: What if some information is missing from the MCPs?
**A**: The agent will note missing information and generate documentation based on available sources. You can manually add missing details.

### Q: Can I generate TTPS for multiple epics at once?
**A**: Yes! Specify multiple epic keys or use sprint-based generation to cover all stories in a sprint.

### Q: How does it handle security-sensitive information?
**A**: The agent only accesses information you have permission to view through the MCPs. Sensitive data should be manually redacted before distribution.

### Q: Can I customize the TTPS template?
**A**: Yes! Edit the agent file (.github/agents/ttps-documentation-agent.md) to modify sections, add new ones, or change the output format.

### Q: Does it work with other project management tools (not Jira)?
**A**: Currently optimized for Jira + GitHub + Figma. For other tools, you'd need to extend the agent with appropriate MCPs.

---

## Tips for Best Results

### 1. **Epic Organization**
- Keep Jira epics well-organized with linked stories
- Use consistent naming conventions
- Link PRs to Jira tickets in PR descriptions (e.g., "Fixes KAN-45")

### 2. **GitHub Best Practices**
- Write descriptive PR descriptions
- Include technical context in PR comments
- Tag PRs with version labels (e.g., "v2.6.0")
- Document breaking changes in PR descriptions

### 3. **Figma Organization**
- Use consistent naming for design files and frames
- Add descriptions to design components
- Tag designs with epic/story keys
- Keep prototypes up-to-date

### 4. **Confluence Maintenance**
- Keep architecture diagrams current
- Document incident RCAs with root causes and resolutions
- Maintain deployment runbooks
- Link Confluence pages to Jira epics

---

## Success Metrics

### Time Savings
- **Before**: 3-5 days for manual TTPS creation
- **After**: 2-3 minutes for automated generation
- **Productivity Gain**: 95% reduction in documentation time

### Quality Improvements
- ✅ **Completeness**: All sources checked systematically
- ✅ **Consistency**: Standard template every time
- ✅ **Accuracy**: Direct extraction from source systems
- ✅ **Traceability**: All links to source materials included

### Team Benefits
- **Development Team**: Minimal documentation burden
- **Maintenance Team**: Comprehensive handover docs
- **Product Team**: Better production readiness
- **Management**: Reduced post-deployment incidents

---

## Next Steps

### After Demo
1. ✅ Bookmark the TTPS agent: `@ttps-documentation-agent`
2. ✅ Try generating TTPS for your next release
3. ✅ Customize the template for your organization
4. ✅ Train maintenance teams on the new documentation format
5. ✅ Integrate into your release process

### Integration with Release Process
```
Traditional Process:
Feature Complete → Manual TTPS Creation (3-5 days) → Production Deployment

New Process:
Feature Complete → Generate TTPS (3 minutes) → Review (1 hour) → Production Deployment
```

---

## Support

For questions or issues with the TTPS Documentation Agent:
- Review agent definition: `.github/agents/ttps-documentation-agent.md`
- Check MCP connections: Atlassian, GitHub, Figma
- Refer to workspace documentation: README.md
- Contact: Development team or GitHub Copilot support

---

**Ready to transform your production handover process? Start with: `@ttps-documentation-agent`**

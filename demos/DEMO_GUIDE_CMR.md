# CMR Documentation Agent - Demo Guide

## Overview
The CMR (Change Management Review) Documentation Generator Agent automates the creation of comprehensive production change approval documentation for weekly releases at Shake Shack.

**Time Savings**: What takes 8-12 hours of manual compilation → **5-10 minutes of automated generation**

---

## What is CMR Documentation?

**Change Management Review (CMR)** is a formal document required before deploying changes to production. It's reviewed by the Change Advisory Board (CAB) and stakeholders to make a GO/NO-GO decision.

### Purpose
- 📋 **What**: Comprehensive overview of all changes going to production
- 🎯 **Why**: Business justification and value proposition
- ⚠️ **Risk**: Identify and mitigate potential risks
- ✅ **Approval**: Obtain formal sign-off from stakeholders
- 📅 **Schedule**: Plan deployment timeline and coordination

### Typical CMR Contents
- ✅ Executive summary (business language)
- ✅ Change details (business + technical)
- ✅ Risk assessment and mitigation strategies
- ✅ Testing evidence and QA sign-off
- ✅ Rollback procedures
- ✅ Deployment plan and schedule
- ✅ Approval checklist and sign-offs
- ✅ Supporting documentation links

---

## Why CMR Matters for Shake Shack

### Weekly Production Release Cadence
Shake Shack deploys to production **every week**, requiring:
- Fast turnaround on CMR documentation
- Consistent format and completeness
- Clear communication to non-technical stakeholders
- Efficient CAB review process

### Stakeholders Who Rely on CMR
| Stakeholder | What They Need from CMR |
|-------------|-------------------------|
| **Change Advisory Board (CAB)** | Risk assessment, go/no-go recommendation |
| **Product Management** | Business value, customer impact |
| **Engineering Leadership** | Technical changes, complexity assessment |
| **Operations Team** | Deployment plan, rollback procedures |
| **QA Team** | Testing evidence, validation status |
| **Security Team** | Security implications, compliance |
| **Executive Management** | Strategic alignment, risk exposure |

---

## How It Works

### Data Sources
The CMR agent aggregates from:

| Source | What It Provides |
|--------|------------------|
| **Jira** | Business requirements, epics, stories, priorities, stakeholder approvals |
| **GitHub** | Merged PRs, code changes, technical implementation, test results |
| **Confluence** | Past incident RCAs, risk patterns, architecture impacts, runbooks |
| **Workspace** | Test results, deployment scripts, configuration files |

### Agent Workflow
```
1. User specifies release (version + date)
   ↓
2. Agent queries Jira for all stories in release
   ↓
3. Agent extracts GitHub merged PRs
   ↓
4. Agent analyzes risks from code + Confluence RCAs
   ↓
5. Agent compiles test evidence
   ↓
6. Agent generates rollback procedures
   ↓
7. Agent creates deployment timeline
   ↓
8. Agent assembles approval checklist
   ↓
9. Output: Complete CMR document for CAB review
```

---

## Demo Scenarios

### 🎯 Scenario 1: Standard Weekly Release

**Use Case**: Generate CMR for weekly production release

**Demo Prompt**:
```
@cmr-documentation-agent Generate CMR for v2.6.0 deploying to production on January 15, 2026. Include all stories from Sprint 23 in project KAN.
```

**What Happens**:
1. Agent queries Jira for Sprint 23 stories in project KAN
2. Finds 12 completed stories, 2 epics
3. Searches GitHub for merged PRs since last release (v2.5.1)
4. Identifies 8 merged PRs, 145 files changed
5. Analyzes database schema changes (2 migrations)
6. Searches Confluence for related incident RCAs
7. Compiles test results from GitHub Actions
8. Generates comprehensive CMR with 9 sections

**Expected Output**:
- **Executive Summary**: Business overview, risk level: MEDIUM, recommendation: GO
- **Change Overview**: 12 stories, 8 PRs, business + technical summary
- **Detailed Technical Changes**: Full breakdown by component
- **Risk Assessment**: 3 identified risks with mitigation strategies
- **Testing Evidence**: All test types passed, QA sign-off confirmed
- **Rollback Plan**: Tested rollback procedure with 15-min RTO
- **Deployment Plan**: Hour-by-hour timeline with team assignments
- **Approvals**: Checklist for 6 required approvers
- **References**: All Jira/GitHub/Confluence links

---

### 🎯 Scenario 2: High-Risk Release with Database Changes

**Use Case**: Release includes significant database migrations

**Demo Prompt**:
```
@cmr-documentation-agent Create CMR for v2.7.0 with database schema changes for new payment system. Deployment: January 22. Highlight risks and mitigation.
```

**What Happens**:
1. Agent identifies database-related PRs from GitHub
2. Finds migration scripts and impact analysis
3. Searches Confluence for past database incident RCAs
4. Elevates risk level to HIGH due to database changes
5. Generates detailed rollback procedures for database
6. Recommends canary deployment strategy
7. Includes DBA approval requirement

**Expected Output**:
- **Risk Level**: HIGH (database migration required)
- **Risk Assessment**: Detailed database migration risks
- **Mitigation**: Backup procedures, rollback scripts, DBA standby
- **Deployment Plan**: Extended validation windows, gradual rollout
- **Rollback Plan**: Database-specific rollback tested in staging

---

### 🎯 Scenario 3: Emergency Hotfix CMR

**Use Case**: Security vulnerability requires immediate production deployment

**Demo Prompt**:
```
@cmr-documentation-agent Generate emergency CMR for security hotfix KAN-888 (critical vulnerability). Must deploy today.
```

**What Happens**:
1. Agent recognizes emergency change request
2. Retrieves security issue details from Jira
3. Finds hotfix PR from GitHub
4. Generates fast-track CMR with emergency justification
5. Includes expedited approval workflow
6. Highlights time-sensitive nature

**Expected Output**:
- **Change Type**: EMERGENCY
- **Business Impact**: Critical security vulnerability, potential data exposure
- **Risk**: High impact if NOT deployed (security breach risk)
- **Mitigation**: Hotfix tested in staging, limited scope change
- **Emergency Justification**: Why normal approval cycle is bypassed
- **Expedited Approvals**: Security Lead + Tech Lead only (streamlined)
- **Deployment**: Immediate deployment authorized

---

### 🎯 Scenario 4: Multi-Epic Feature Release

**Use Case**: Multiple related epics going to production together

**Demo Prompt**:
```
@cmr-documentation-agent Generate CMR for Order Management System release including epics KAN-45, KAN-46, and KAN-47. Deployment: February 1.
```

**What Happens**:
1. Agent queries Jira for all three epics
2. Finds 28 stories across 3 epics
3. Identifies 15 merged PRs spanning multiple components
4. Recognizes high complexity due to multi-epic coordination
5. Analyzes interdependencies between epics
6. Generates comprehensive integration risk assessment

**Expected Output**:
- **Scope**: 28 stories, 3 epics, major feature release
- **Business Value**: Complete order management system overhaul
- **Technical Complexity**: HIGH (frontend, backend, database, integrations)
- **Risk Level**: MEDIUM-HIGH (large scope, multiple dependencies)
- **Testing**: Extended UAT period required
- **Deployment**: Recommended phased rollout with feature flags
- **Communication**: Extensive stakeholder coordination plan

---

### 🎯 Scenario 5: Zero-Downtime Configuration Change

**Use Case**: Production configuration update without code changes

**Demo Prompt**:
```
@cmr-documentation-agent Create CMR for configuration-only change: update payment gateway timeout from 30s to 60s. No code deployment required.
```

**What Happens**:
1. Agent identifies configuration-only change
2. Finds related Jira story with justification
3. Notes no code changes (low technical risk)
4. Identifies dynamic config capability (no restart)
5. Generates simplified CMR for config change

**Expected Output**:
- **Change Type**: Configuration Only
- **Scope**: Single environment variable change
- **Risk Level**: LOW (no code changes, reversible config)
- **Downtime**: NONE (dynamic config update)
- **Rollback**: Instant (revert config value)
- **Testing**: Validated in staging
- **Approval**: Simplified workflow (Tech Lead + Ops Lead)

---

## Step-by-Step Demo Script

### Preparation (Before Demo)
1. ✅ Ensure Atlassian MCP connected (Jira + Confluence)
2. ✅ Verify GitHub MCP connected
3. ✅ Have a real release ready (e.g., Sprint 23 or v2.6.0)
4. ✅ Know the production deployment date
5. ✅ Have CAB meeting scheduled

### Live Demo Flow (10 minutes)

#### **Step 1: Set the Context** (1 minute)
"At Shake Shack, we deploy to production every week. Each deployment requires a CMR document for Change Advisory Board approval. Traditionally, this takes 8-12 hours to compile manually from Jira, GitHub, Confluence, test results, and deployment plans. Today, I'll show you how the CMR Agent generates this in 5-10 minutes."

#### **Step 2: Show the Challenge** (2 minutes)
"A typical CMR requires:
- Reviewing 10-15 Jira stories for business context
- Analyzing 5-10 GitHub PRs for technical changes
- Searching Confluence for risk patterns from past incidents
- Compiling test results from multiple sources
- Creating rollback procedures
- Building deployment timeline
- Assembling approval checklist

This is time-consuming, error-prone, and often incomplete under time pressure."

#### **Step 3: Invoke the Agent** (30 seconds)
Open GitHub Copilot Chat:
```
@cmr-documentation-agent Generate CMR for v2.6.0 deploying to production on January 15, 2026. Include all stories from Sprint 23 in project KAN.
```

#### **Step 4: Watch the Agent Work** (5-7 minutes)
Point out as agent processes:
- ✅ "Querying Jira for Sprint 23 stories..."
- ✅ "Found 12 stories across 2 epics"
- ✅ "Searching GitHub for merged PRs since v2.5.1..."
- ✅ "Found 8 merged PRs, 145 files changed"
- ✅ "Analyzing risk: Found database migration in 2 PRs"
- ✅ "Searching Confluence for past incidents in payment system..."
- ✅ "Compiling test results from GitHub Actions..."
- ✅ "Generating rollback procedures..."
- ✅ "Creating deployment timeline..."
- ✅ "Assembling CMR document..."

#### **Step 5: Review Generated CMR** (3 minutes)

**Executive Summary** (Business Language):
"See how it presents in business language:
- What's changing: 'New order search and payment retry features'
- Why it matters: 'Improves customer experience, reduces support tickets'
- Risk level: MEDIUM
- Recommendation: GO"

**Change Overview** (Business + Technical):
"Here's the bridge between business and technical:
- Business: 12 stories delivering search and payment improvements
- Technical: 8 PRs, 145 files changed, 2 database migrations"

**Risk Assessment**:
"Agent identified 3 risks automatically:
1. Database migration (MEDIUM) - mitigated with tested rollback
2. Payment integration changes (LOW) - mitigated with feature flags
3. High-traffic deployment window (LOW) - mitigated with gradual rollout"

**Testing Evidence**:
"All test results aggregated:
- Unit tests: 87% coverage ✅
- Integration tests: 92% coverage ✅
- Performance: P95 245ms (under 300ms target) ✅
- QA sign-off: Approved by Sarah Johnson ✅"

**Deployment Plan**:
"Hour-by-hour timeline with team assignments:
- 2:00 PM: Pre-deployment checklist
- 2:15 PM: Database backup
- 2:25 PM: Canary deployment (5% traffic)
- 3:05 PM: 50% rollout
- 3:45 PM: Full deployment
- 4:25 PM: Validation complete"

**Approvals**:
"Ready for CAB with checklist for 6 approvers:
- Product Owner
- Tech Lead
- QA Lead
- Security Lead
- Infrastructure Lead
- Change Manager"

#### **Step 6: Highlight Value** (1 minute)
"What we generated in 7 minutes would have taken 8-12 hours manually:
- ✅ All Jira stories analyzed and documented
- ✅ All GitHub PRs reviewed and summarized
- ✅ Risks identified and mitigation plans created
- ✅ Test evidence compiled
- ✅ Rollback procedures documented
- ✅ Deployment timeline built
- ✅ Approval workflow prepared
- ✅ Both business and technical language
- ✅ Ready for CAB presentation"

---

## Common Questions & Answers

### Q: Does this replace CAB review?
**A**: No. The agent accelerates CMR creation by 95%, but CAB still reviews and approves. It gives them better documentation to make informed decisions faster.

### Q: How does it handle incomplete information?
**A**: The agent notes any missing information (e.g., "No test results found in GitHub Actions") and generates CMR with available data. You can manually add missing details.

### Q: Can it assess business risk vs. technical risk?
**A**: Yes. It separates risk assessment:
- **Technical risk**: From code complexity, database changes, infrastructure
- **Business risk**: From Jira story priorities, customer impact statements
- **Combined risk**: Overall risk rating with both factors

### Q: What if deployment date changes?
**A**: Simply regenerate CMR with new date. The agent pulls latest data each time, ensuring CMR is always current.

### Q: How does it handle emergency changes?
**A**: Recognizes emergency flags in Jira, generates fast-track CMR with:
- Emergency change justification
- Expedited approval workflow
- Time-sensitive deployment plan
- Risk acceptance documentation

### Q: Can it generate CMR for config-only changes?
**A**: Yes. It recognizes when no code changes are involved and generates a simplified CMR focused on configuration changes, with lower risk assessment and streamlined approval.

---

## Best Practices for CMR Success

### 1. **Jira Organization**
- Tag stories with release version (e.g., "v2.6.0")
- Use consistent sprint naming
- Document business value in story descriptions
- Mark priority clearly (High/Medium/Low)
- Add stakeholder names to stories

### 2. **GitHub Best Practices**
- Merge PRs to release branch (e.g., `release/v2.6.0`)
- Tag PRs with Jira keys (e.g., "KAN-123" in PR title/description)
- Write descriptive PR descriptions with implementation details
- Include breaking changes in PR description
- Run all CI/CD tests before merge

### 3. **Confluence Maintenance**
- Keep incident RCAs up-to-date
- Document architecture decisions
- Maintain deployment runbooks
- Link Confluence pages to Jira epics

### 4. **Testing Evidence**
- Store test results in GitHub Actions artifacts
- Include performance benchmarks in test output
- Get QA sign-off in Jira (documented in story comments)
- Run security scans and save reports

### 5. **Weekly Release Cadence**
- Use consistent release naming: `v2.6.0`, `v2.7.0`
- Schedule CMR generation Monday (for Friday deployment)
- Schedule CAB review Tuesday/Wednesday
- Deploy Friday afternoon (low-traffic window)

---

## CMR Agent Integration with Release Process

### Traditional Release Process (Without Agent)
```
Monday:
- Developer manually compiles Jira stories (2 hours)
- Developer reviews GitHub PRs (2 hours)
- Developer writes risk assessment (1 hour)
- Developer finds test results (1 hour)

Tuesday:
- Developer creates deployment plan (2 hours)
- Developer builds rollback procedures (1 hour)
- Developer assembles approval checklist (1 hour)
- Total: 10 hours ❌

Wednesday:
- CAB reviews CMR (often incomplete or outdated)

Friday:
- Production deployment
```

### New Release Process (With CMR Agent)
```
Monday:
- Run CMR agent (10 minutes) ✅
- Review and validate generated CMR (30 minutes)
- Submit to CAB (5 minutes)
- Total: 45 minutes 🚀

Tuesday:
- CAB reviews complete, accurate CMR
- Approvals obtained same day

Friday:
- Production deployment with confidence
```

**Time Savings**: 9+ hours per week = **~450 hours per year** for weekly releases!

---

## Success Metrics

### Time Savings
- **Before**: 8-12 hours for CMR creation
- **After**: 45 minutes (10 min generation + 35 min review)
- **Productivity Gain**: 92% reduction in CMR creation time

### Quality Improvements
- ✅ **Completeness**: 100% of PRs and stories documented
- ✅ **Accuracy**: Direct extraction from source systems (no manual transcription errors)
- ✅ **Consistency**: Standard CMR format every week
- ✅ **Timeliness**: CMR ready same day, not day before deployment

### Process Benefits
- **Faster CAB Approval**: Better documentation → faster decisions
- **Reduced Deployment Risk**: Comprehensive risk analysis every release
- **Better Stakeholder Communication**: Business + technical language
- **Audit Trail**: Complete traceability to source systems

---

## Next Steps

### After Demo
1. ✅ Bookmark the CMR agent: `@cmr-documentation-agent`
2. ✅ Generate CMR for your next release
3. ✅ Present to CAB and gather feedback
4. ✅ Customize CMR template for your organization
5. ✅ Train team on CMR agent usage

### Integration Checklist
- [ ] Add CMR generation to Monday release prep
- [ ] Update CAB meeting agenda to expect agent-generated CMRs
- [ ] Train product owners on reviewing business language
- [ ] Train tech leads on reviewing technical sections
- [ ] Document customizations to CMR template

---

## Support

For questions or issues with the CMR Documentation Agent:
- Review agent definition: `.github/agents/cmr-documentation-agent.md`
- Check MCP connections: Atlassian (Jira + Confluence), GitHub
- Refer to workspace documentation: [README.md](../README.md)
- Contact: DevOps team or GitHub Copilot support

---

**Transform your weekly release process. Start with: `@cmr-documentation-agent`** 🚀

# CMR (Change Management Review) Documentation

## Overview
This folder contains resources, templates, and documentation related to **Change Management Review (CMR)** for production deployments at Shake Shack.

## Purpose
CMR is the formal approval process for deploying changes to production. It ensures:
- ✅ All changes are documented and understood
- ✅ Risks are identified and mitigated
- ✅ Testing is complete and validated
- ✅ Stakeholders are informed and approve
- ✅ Rollback procedures are in place
- ✅ Deployment is coordinated and scheduled

## Weekly Release Cadence
Shake Shack follows a **weekly production release** schedule:
- **Monday**: CMR document generation and preparation
- **Tuesday/Wednesday**: Change Advisory Board (CAB) review and approvals
- **Thursday**: Final preparation and pre-deployment checks
- **Friday**: Production deployment

## CMR Agent
The **CMR Documentation Generator Agent** automates the creation of CMR documents by aggregating information from:
- **Jira**: Business requirements, epics, user stories
- **GitHub**: Merged PRs, code changes, technical implementation
- **Confluence**: Past incident RCAs, risk patterns, architecture documentation
- **Workspace**: Test results, deployment scripts, configuration

### Quick Start
```
@cmr-documentation-agent Generate CMR for [version] deploying to production on [date]
```

### Agent Location
- **Agent Definition**: [../.github/agents/cmr-documentation-agent.md](../.github/agents/cmr-documentation-agent.md)
- **Demo Guide**: [../demos/DEMO_GUIDE_CMR.md](../demos/DEMO_GUIDE_CMR.md)

## CMR Document Structure

### 1. Executive Summary (Business Language)
- What's changing
- Why it matters
- Key benefits
- Risk level
- Go/No-Go recommendation

### 2. Change Overview (Business + Technical)
- Business changes from Jira
- Technical changes from GitHub
- Deployment scope

### 3. Detailed Technical Changes
- Code changes by component
- Database modifications
- Infrastructure updates
- Dependencies

### 4. Risk Assessment and Mitigation
- Identified risks
- Mitigation strategies
- Dependencies and prerequisites

### 5. Testing and Validation Evidence
- Test results summary
- QA sign-off
- UAT completion
- Staging validation
- Compliance checks

### 6. Rollback Plan
- Rollback decision criteria
- Step-by-step rollback procedures
- Rollback testing evidence
- Post-rollback actions

### 7. Deployment Plan and Schedule
- Deployment timeline
- Pre-deployment checklist
- Post-deployment validation
- Communication plan
- Team availability

### 8. Approvals and Sign-Offs
- Required approvers
- Approval workflow
- CAB review details
- Emergency change justification (if applicable)

### 9. Supporting Documentation
- Jira references
- GitHub PR links
- Confluence documentation
- Test results
- Monitoring dashboards

## Change Advisory Board (CAB)

### CAB Members
- Product Owner
- Tech Lead
- QA Lead
- Security Lead
- Infrastructure Lead
- Change Manager

### CAB Review Process
1. **CMR Submission**: Monday (after generation)
2. **Initial Review**: Tuesday morning (async)
3. **CAB Meeting**: Tuesday/Wednesday
4. **Decision**: Approved/Rejected/Deferred/Approved with Conditions
5. **Final Approval**: Wednesday EOD

### CAB Decision Criteria
- **GO**: All approvals obtained, risks acceptable, testing complete
- **NO-GO**: High risks unmitigated, testing incomplete, critical dependencies unavailable
- **DEFERRED**: More information needed, additional testing required
- **GO WITH CONDITIONS**: Approved with specific conditions (e.g., extended monitoring, phased rollout)

## Risk Levels

### LOW Risk
- Configuration-only changes
- Minor UI updates
- Bug fixes in non-critical areas
- No database changes
- Tested feature flag rollouts

### MEDIUM Risk
- Database schema changes (tested)
- New API endpoints
- Multiple component changes
- Third-party integration updates
- Medium code complexity

### HIGH Risk
- Core system modifications (payment, auth, checkout)
- Complex database migrations
- Breaking API changes
- Large-scale refactoring
- New external dependencies
- Changes to critical business logic

### CRITICAL Risk
- Emergency security patches
- Revenue-impacting changes
- Data migration or cleanup
- System-wide infrastructure changes
- Untested in production-like environment

## Deployment Types

### Standard Deployment
- **When**: Weekly scheduled releases
- **Approval**: Full CAB review
- **Timeline**: Monday (CMR) → Tuesday/Wednesday (CAB) → Friday (Deploy)

### Expedited Deployment
- **When**: Time-sensitive but not emergency
- **Approval**: Streamlined CAB review
- **Timeline**: 2-3 days (compressed schedule)

### Emergency Deployment
- **When**: Critical security/revenue issue
- **Approval**: Tech Lead + Security Lead only
- **Timeline**: Same day (post-facto CAB review)

## Folder Structure
```
cmr/
├── README.md                      # This file
├── templates/                     # CMR document templates
│   ├── standard-release.md       # Standard weekly release template
│   ├── emergency-change.md       # Emergency change template
│   └── config-only-change.md     # Configuration-only change template
├── examples/                      # Example CMR documents
│   ├── CMR-2026-01-v2.6.0.md     # Example: Standard release
│   └── CMR-2026-02-hotfix.md     # Example: Emergency hotfix
├── checklists/                    # Reusable checklists
│   ├── pre-deployment.md         # Pre-deployment checklist
│   ├── post-deployment.md        # Post-deployment validation
│   └── rollback-procedure.md     # Rollback checklist
└── guidelines/                    # CMR process guidelines
    ├── risk-assessment.md        # How to assess risks
    ├── testing-requirements.md   # Testing standards
    └── approval-workflow.md      # Approval process details
```

## Best Practices

### For Product Teams
- Document business value clearly in Jira stories
- Prioritize stories appropriately
- Provide stakeholder information
- Review CMR for business accuracy

### For Development Teams
- Write descriptive PR descriptions
- Link PRs to Jira stories
- Include breaking changes in PR
- Ensure all tests pass before merge
- Review CMR for technical accuracy

### For QA Teams
- Complete testing before CMR generation
- Document test results
- Provide clear sign-off in Jira
- Validate staging deployment

### For Operations Teams
- Maintain deployment runbooks
- Document monitoring setup
- Test rollback procedures
- Review deployment timeline

## Related Resources

- **TTPS Documentation**: [../ttps/](../) - Post-deployment handover
- **Release Notes**: [../docs/](../docs/) - Version release notes
- **Demo Guides**: [../demos/](../demos/) - How to use CMR agent

## Support

For questions or issues:
- **CMR Agent**: [../.github/agents/cmr-documentation-agent.md](../.github/agents/cmr-documentation-agent.md)
- **Demo Guide**: [../demos/DEMO_GUIDE_CMR.md](../demos/DEMO_GUIDE_CMR.md)
- **Process Questions**: Contact Change Manager
- **Technical Questions**: Contact Tech Lead

---

**Weekly Release Cadence**: Every Friday  
**Next CAB Meeting**: Check calendar  
**Agent Usage**: `@cmr-documentation-agent`

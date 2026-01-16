# LTIM-MCP-Demo

## 📁 Repository Structure

This repository demonstrates GitHub Copilot agents leveraging Model Context Protocol (MCP) servers for automating various documentation and workflow tasks for Shake Shack.

### Directory Organization

```
LTIM-Shake-Shack/
├── .github/
│   └── agents/                          # GitHub Copilot Agents
│       ├── cmr-documentation-agent.md   # CMR change approval generator
│       ├── ttps-documentation-agent.md  # TTPS handover docs generator
│       ├── release-notes-agent.md       # Release notes generator
│       └── brd-to-jira-agent.md         # BRD to Jira epic converter
│
├── cmr/                                 # Change Management Review
│   ├── README.md                        # CMR process documentation
│   ├── templates/                       # CMR document templates
│   ├── examples/                        # Example CMR documents
│   ├── checklists/                      # Deployment checklists
│   └── guidelines/                      # CMR guidelines
│
├── demos/                               # Demo Guides & Prompts
│   ├── DEMO_GUIDE_CMR.md               # CMR agent demo guide
│   ├── DEMO_GUIDE_TTPS.md              # TTPS agent demo guide
│   ├── DEMO_PROMPT_RELEASE_NOTES.md    # Release notes agent demo
│   └── DEMO_GUIDE_BRD_EPICS.md         # BRD to Jira demo guide
│
├── docs/                                # Documentation & Release Notes
│   └── RELEASE_NOTES_v2.5.1.md         # Version 2.5.1 release notes
│
├── requirements/                        # Business Requirements
│   └── requirements.md                  # BRD and feature requirements
│
├── incident-triage-system/              # Incident Triage System (Future)
│   ├── mcp-servers/                     # Custom MCP server configs
│   ├── prompts/                         # Triage prompts
│   └── scripts/                         # Automation scripts
│
└── README.md                            # This file
```

## 🤖 GitHub Copilot Agents

### 1. CMR Documentation Agent
**Purpose**: Generate Change Management Review documentation for production releases  
**Location**: [.github/agents/cmr-documentation-agent.md](.github/agents/cmr-documentation-agent.md)  
**Demo Guide**: [demos/DEMO_GUIDE_CMR.md](demos/DEMO_GUIDE_CMR.md)

**Usage**:
```
@cmr-documentation-agent Generate CMR for v2.6.0 deploying to production on January 15, 2026
```

**Capabilities**:
- Executive summary with business justification
- Change overview (business + technical language)
- Comprehensive risk assessment and mitigation
- Testing evidence compilation
- Rollback procedures documentation
- De3loyment timeline and coordination
- Approval workflow and sign-offs
- Weekly release support

### 2. TTPS Documentation Agent
**Purpose**: Generate Transfer to Production Support documentation  
**Location**: [.github/agents/ttps-documentation-agent.md](.github/agents/ttps-documentation-agent.md)  
**Demo Guide**: [demos/DEMO_GUIDE_TTPS.md](demos/DEMO_GUIDE_TTPS.md)

**Usage**:
```
@ttps-documentation-agent Generate TTPS for release v2.6.0
```

**Capabilities**:
- Operational readiness checklists
- Monitoring and alerting setup
- Known issues and troubleshooting
- Escalation paths and support contacts

### 2. Release Notes Agent
**Purpose**: Generate release notes from Jira, GitHub, and Figma  
**Location**: [.github/agents/release-notes-agent.md](.github/agents/release-notes-agent.md)  
**Demo Guide**: [demos/DEMO_PROMPT_RELEASE_NOTES.md](demos/DEMO_PROMPT_RELEASE_NOTES.md)

**Usage**:
```
@release-notes-agent Generate release notes for v2.6.0
```

### 4. BRD to Jira Agent
**Purpose**: Convert BRD documents to Jira epics and stories  
**Location**: [.github/agents/brd-to-jira-agent.md](.github/agents/brd-to-jira-agent.md)  
**Demo Guide**: [demos/DEMO_GUIDE_BRD_EPICS.md](demos/DEMO_GUIDE_BRD_EPICS.md)

**Usage**:
```
@brd-to-jira-agent Convert requirements.md to Jira epics
```

## 🔌 MCP Servers Used

### Atlassian MCP (Jira + Confluence)
- **Purpose**: Access Jira issues, epics, and Confluence documentation
- **Configuration**: Set in VS Code MCP settings
- **Required Env Vars**: `ATLASSIAN_API_TOKEN`, `JIRA_CLOUD_ID`, `CONFLUENCE_CLOUD_ID`

### GitHub MCP
- **Purpose**: Access repository PRs, commits, and code
- **Configuration**: Set in VS Code MCP settings
- **Required Env Vars**: `GITHUB_TOKEN`

### Figma MCP
- **Purpose**: Access UI/UX designs and specifications
- **Configuration**: Set in VS Code MCP settings
- **Required Env Vars**: `FIGMA_ACCESS_TOKEN`

## 🚀 Getting Started

### Prerequisites
1. VS Code with GitHub Copilot extension
2. MCP servers configured (Atlassian, GitHub, Figma)
3. Access to:
   - Jira project (e.g., KAN)
   - GitHub repository (ToshAshu0312/LTIM-MCP-Demo)
   - Figma files (optional for UI-related features)

### Quick Start
1. Open VS Code in this workspace
2. Open GitHub Copilot Chat (`Ctrl+Shift+I` or `Cmd+Shift+I`)
3. Use any agent with `@agent-name` mention
4. Follow the demo guides in [demos/](demos/) folder

## 📚 Documentation

- **CMR Process**: [cmr/README.md](cmr/README.md) - Change Management Review guidelines
- **Release Notes**: [docs/RELEASE_NOTES_v2.5.1.md](docs/RELEASE_NOTES_v2.5.1.md)
- **Requirements**: [requirements/requirements.md](requirements/requirements.md)
- **Demo Guides**: [demos/](demos/)

## 📅 Weekly Release Process

Shake Shack follows a **weekly production release** cadence:

### Monday: CMR Generation
```
@cmr-documentation-agent Generate CMR for [version] deploying on Friday
```
- Agent generates comprehensive CMR (10 minutes)
- Team reviews and validates CMR (30 minutes)
- Submit to CAB for review

### Tuesday/Wednesday: CAB Review & Approvals
- Change Advisory Board reviews CMR
- Stakeholders provide approvals
- GO/NO-GO decision made

### Thursday: Pre-Deployment Preparation
- Final checks and validations
- Deployment team coordination
- Communication to stakeholders

### Friday: Production Deployment
```
@ttps-documentation-agent Generate TTPS for [version] post-deployment
```
- Deploy to production (scheduled window)
- Post-deployment validation
- Generate TTPS handover for Ops team

## 🎯 Use Cases

### For Change Advisory Board (CAB)
- Review comprehensive CMR documents for production approvals
- Assess risks with evidence-based mitigation strategies
- Make informed GO/NO-GO decisions
- Track approval workflow and sign-offs

### For Product Teams
- Convert BRD documents to Jira epics automatically
- Generate release notes from completed sprints
- Track feature development across Jira, GitHub, and Figma
- Communicate business value in CMR documents

### For Operations Teams
- Review CMR documents before production deployment
- Generate TTPS documentation for production handovers
- Access consolidated troubleshooting guides
- Get monitoring and alerting setup instructions
- Coordinate deployment schedules

### For Development Teams
- Automate CMR and TTPS documentation generation
- Reduce manual effort from 8-12 hours to 10 minutes
- Ensure consistency across documentation
- Focus on coding instead of paperwork

## 🛠️ Customization

Each agent can be customized by editing the corresponding `.md` file in [.github/agents/](.github/agents/). The agents use a standard format:
- **Purpose**: What the agent does
- **Description**: Detailed capabilities
- **Instructions**: Step-by-step workflow
- **Constraints**: Limitations
- **Examples**: Usage scenarios

## 📝 Contributing

To add new agents or modify existing ones:
1. Create/edit agent file in [.github/agents/](.github/agents/)
2. Follow the existing agent format
3. Add demo guide in [demos/](demos/)
4. Update this README with agent information

## 🔗 Related Resources

- **GitHub Repository**: [ToshAshu0312/LTIM-MCP-Demo](https://github.com/ToshAshu0312/LTIM-MCP-Demo)
- **Jira Project**: KAN
- **Figma File**: Keh2M4DFkwxA1qGYfVaCvg

---

**Maintained by**: LTIM Team for Shake Shack  
**Last Updated**: January 10, 2026
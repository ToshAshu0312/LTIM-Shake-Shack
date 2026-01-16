# BRD to Jira Epics & Stories Agent

## Agent Purpose
Automatically converts Business Requirements Documents (BRD) to Jira Epics and User Stories with live Figma design integration.

## Agent Instructions

You are an automated agent that creates sprint-ready Jira Epics and User Stories from a BRD with integrated Figma design context.

### Your Workflow:

#### Step 1: Read Requirements
- Read the `requirements.md` file in the workspace
- Extract all functional requirements (FR-1 through FR-9)
- Note business objectives and success metrics
- Identify Figma design references

#### Step 2: Extract Figma Design Context
Use Figma MCP tools to get design information:
- **File Key**: `Keh2M4DFkwxA1qGYfVaCvg`
- **Node ID**: `1:1225` (Home screen)

Get the following from Figma:
1. Screenshot of the design (for visual reference)
2. Design context (UI components, layout, styling)
3. Color palette and typography details
4. Component specifications

#### Step 3: Group Requirements into Epics
Analyze the 9 functional requirements and group them into 6-8 logical Epics based on:
- User journey stages
- Feature cohesion
- Business value alignment
- Technical dependencies

Typical Epic grouping:
1. **User Authentication & Profile** (FR-1)
2. **Product Browsing & Discovery** (FR-2)
3. **Shopping List & Cart** (FR-3, FR-4)
4. **Delivery & Fulfillment** (FR-5)
5. **Payment & Checkout** (FR-6)
6. **Order Tracking** (FR-7)
7. **Loyalty Program** (FR-8)
8. **Customer Support** (FR-9)

#### Step 4: Create Jira Epics
For each Epic, create a Jira issue with:

**Jira Configuration:**
- Cloud ID: `<YOUR_JIRA_CLOUD_ID>`
- Project Key: `KAN`
- Issue Type: `Epic` (ID: 10009)

**Epic Content:**
- **Summary**: Clear, concise Epic title
- **Description**: Include:
  - Business value statement
  - Functional requirements covered
  - Success metrics
  - Figma design reference (fileKey + nodeId)
  - Key UI components from Figma
  - Technical considerations
  - Acceptance criteria (high-level)
  
- **Priority**: Map from BRD (High/Medium/Low)
- **Labels**: Add relevant labels (e.g., "mvp", "phase-1", "grocery-app")

#### Step 5: Create User Stories for Key Epics
Focus on Epic 2 (Product Browsing) and create 5-7 detailed User Stories:

**Jira Configuration:**
- Issue Type: `Story` (ID: 10013)
- Parent Link: Link to the Epic created in Step 4

**Story Content:**
- **Summary**: "As a [user type], I want [goal], so that [benefit]"
- **Description**: Include:
  - Full user story format
  - Acceptance Criteria (Given/When/Then format)
  - UI Implementation Details from Figma:
    - Specific components to use
    - Layout dimensions and spacing
    - Color codes and typography
    - Interaction patterns
  - Figma reference (fileKey + nodeId)
  - Technical implementation notes
  - Definition of Done checklist
  
- **Story Points**: Estimate using Fibonacci (1, 2, 3, 5, 8, 13)
- **Priority**: Align with Epic priority
- **Labels**: Add specific labels (e.g., "ui-component", "api-integration")

#### Step 6: Create Issue Links
- Link User Stories to their parent Epics
- Add dependencies between Stories if applicable
- Create "relates to" links for cross-functional requirements

#### Step 7: Generate Summary Report
Provide a comprehensive summary with:
- Total Epics created (with Jira keys and links)
- Total Stories created (with Jira keys and links)
- Story points breakdown by Epic
- Figma MCP calls used
- Sprint readiness assessment
- Traceability matrix (Requirements → Epics → Stories)

---

## Design Integration Requirements

### Figma Elements to Extract:
- Component dimensions (width × height in px)
- Color palette (hex codes)
- Typography (font family, sizes, weights)
- Spacing values (margins, paddings)
- Border radius values
- Component states (hover, active, disabled)
- Layout structure (flex, grid)

### Include in Jira Descriptions:
```
**UI Implementation** (from Figma):
- Component: [Name]
- Dimensions: [width]×[height]px
- Colors: [list hex codes]
- Typography: [font], [size]px, [weight]
- Spacing: [padding/margin values]
- Border Radius: [value]px
- States: [hover, active, etc.]

**Figma Reference:**
- File Key: Keh2M4DFkwxA1qGYfVaCvg
- Node ID: 1:1225
- Direct Link: https://www.figma.com/proto/Keh2M4DFkwxA1qGYfVaCvg/Untitled?node-id=1-1225
```

---

## Quality Standards

### Epic Quality Checklist:
- [ ] Clear, business-focused title
- [ ] Business value explicitly stated
- [ ] All relevant FRs mentioned
- [ ] Figma design reference included
- [ ] Technical feasibility noted
- [ ] High-level acceptance criteria defined
- [ ] Priority aligned with BRD

### User Story Quality Checklist:
- [ ] Follows "As a/I want/So that" format
- [ ] Acceptance criteria in Given/When/Then format
- [ ] UI implementation details from Figma
- [ ] Story points estimated
- [ ] Linked to parent Epic
- [ ] Definition of Done included
- [ ] Independent and testable
- [ ] Small enough for one sprint

---

## Error Handling

If Figma MCP calls fail:
- Proceed with Epic/Story creation using BRD information
- Note in description: "Figma design context pending"
- Include Figma link for manual review

If Jira API calls fail:
- Provide formatted output as markdown
- Include all content that would have been created
- Suggest manual creation steps

---

## Output Format

Provide a structured summary:

```markdown
## ✅ Jira Issues Created

### Epics Created: [X]
| Key | Title | Priority | Requirements | Link |
|-----|-------|----------|--------------|------|
| KAN-X | [Title] | [Priority] | FR-X, FR-Y | [URL] |

### User Stories Created: [X]
| Key | Title | Points | Epic | Link |
|-----|-------|--------|------|------|
| KAN-X | [Story] | X | KAN-Y | [URL] |

### Total Story Points: [X]

### Figma Integration:
- MCP Calls Used: X
- Design File: [URL]
- Key Components Extracted: [List]

### Traceability:
[Requirements → Epics → Stories mapping]

### Next Steps:
[Sprint planning recommendations]
```

---

## Usage

To trigger this agent in GitHub Copilot Chat:

```
@workspace Use the BRD to Jira agent to create all Epics and User Stories 
from requirements.md with Figma design integration
```

Or simply:

```
Run BRD to Jira automation
```

---

## Configuration

**Workspace Files Required:**
- `requirements.md` - BRD with functional requirements

**MCP Servers Required:**
- Figma MCP (for design context)
- Atlassian/Jira MCP (for issue creation)

**Jira Project Settings:**
- Project: KAN (Custom Jira dashboard 1)
- Cloud ID: <YOUR_JIRA_CLOUD_ID>
- Epic Issue Type ID: 10009
- Story Issue Type ID: 10013

**Figma Design:**
- File Key: Keh2M4DFkwxA1qGYfVaCvg
- Node ID: 1:1225
- URL: https://www.figma.com/proto/Keh2M4DFkwxA1qGYfVaCvg/Untitled?node-id=1-1225

---

## Agent Capabilities

✅ **Automated Requirements Analysis**: Parses BRD and groups into logical Epics
✅ **Live Figma Integration**: Extracts real design data via MCP
✅ **Jira Issue Creation**: Creates Epics and Stories with full details
✅ **Design-to-Code Bridge**: Includes implementation-ready UI specs
✅ **Complete Traceability**: Links Requirements → Epics → Stories
✅ **Sprint Ready**: Generates properly formatted, estimated, linked issues
✅ **Professional Quality**: Follows Agile best practices and INVEST criteria

---

## Limitations

- Figma MCP rate limits apply (6 calls/month for View/Starter seats)
- Requires active Jira project with Epic and Story issue types
- User Stories generated only for Epic 2 by default (can be modified)
- Manual deletion of issues if needed (no delete API available)

---

## Customization

To modify agent behavior, update:
- Epic grouping logic (Step 3)
- Number of User Stories per Epic (Step 5)
- Figma node IDs for different screens
- Jira project key and issue type IDs
- Story point estimation algorithm
- Priority mapping rules

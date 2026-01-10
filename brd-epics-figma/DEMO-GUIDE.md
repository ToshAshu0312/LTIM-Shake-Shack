# GitHub Copilot Demo Guide
## BRD → Epics → User Stories (Copy-Paste Prompts)

---

## Pre-Demo Checklist
- [ ] VS Code open with Copilot active
- [ ] Open `requirements.md` file
- [ ] Copilot Chat panel open
- [ ] Figma MCP connected (5 calls remaining)

---

## Demo Flow - Copy These Prompts

### **PROMPT 1: Generate Epics**

### **PROMPT 1: Generate Epics**

```
Analyze requirements.md and create Epics. Group functional requirements (FR-1 to FR-9) into logical Epics with:
- Epic title and description
- Business value
- Acceptance criteria
- Figma design references
- Priority (High/Medium/Low)
- Estimated effort (XS/S/M/L/XL)

Create epics.md file.
```

---

### **PROMPT 2: Get Figma Screenshot**

```
Get a screenshot from Figma.
fileKey: Keh2M4DFkwxA1qGYfVaCvg
nodeId: 1:1225

Describe the key UI elements visible.
```

---

### **PROMPT 3: Extract Design Context**

```
Get design context from Figma home screen.
fileKey: Keh2M4DFkwxA1qGYfVaCvg
nodeId: 1:1225

Enhance Epic 2 (Product Browsing) in epics.md by adding "Design Implementation Notes" section with:
- UI components from the Figma design
- Layout structure
- Interactive elements
- Component variants
- Required assets
```

---

### **PROMPT 4: Generate User Stories**

```
Break down Epic 2 (Product Browsing & Search) into detailed User Stories.

For each story include:
1. "As a [user], I want [goal], so that [benefit]"
2. Acceptance Criteria (Given/When/Then)
3. UI Implementation Details from Figma
4. Figma reference (fileKey + nodeId)
5. Story points (Fibonacci: 1,2,3,5,8)
6. Dependencies
7. Definition of Done

Create stories.md file.
```

---

### **PROMPT 5: Get Design Tokens (Optional)**

```
Get variable definitions from Figma.
fileKey: Keh2M4DFkwxA1qGYfVaCvg
nodeId: 1:1225

Create design-tokens.md with colors, spacing, and typography in CSS variable format.
```

---

### **PROMPT 6: Create GitHub Issues**

```
Convert stories in stories.md to GitHub issue format with:
- Issue title
- Full description
- Labels (feature, priority, epic-name)
- Checkboxes for acceptance criteria

Create github-issues.md file.
```

---

### **PROMPT 7: Generate Test Scenarios**

```
Create test scenarios for Epic 2 from epics.md:
- Happy path
- Edge cases
- Error conditions
- Accessibility tests

Use BDD format (Given/When/Then). Create test-scenarios.md file.
```

---

### **PROMPT 8: Create Traceability Matrix**

```
Create traceability-matrix.md mapping:
Requirements (FR-1 to FR-9) → Epics → User Stories

Show complete traceability.
```

---

## Quick Tips

**Time Saver:** "6 hours of BA work → 15 minutes"

**Figma Integration:** "Live design data eliminates translation gaps"

**Best Practices:** "Automatically follows Agile standards"

**MCP Calls Used:** 2 of 6 (Screenshot + Design Context)

---

## If Things Go Wrong

**Incomplete output?**
```
Continue generating the remaining epics/stories.
```

**Wrong format?**
```
Reformat using this template: [paste your template]
```

**Need refinement?**
```
Split the "Search functionality" story into: 1) Basic search, 2) Advanced filters
```

---

## Demo Files Created

✅ epics.md
✅ stories.md  
✅ github-issues.md OR test-scenarios.md
✅ design-tokens.md (optional)
✅ traceability-matrix.md (optional)

---

**End Demo - Time: ~20 minutes**

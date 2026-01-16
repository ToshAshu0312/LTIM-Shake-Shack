# 🎯 Demo Prompt: Release Notes Generator

## Copy and paste this into GitHub Copilot Chat:

---

### 🎯 PRIMARY DEMO PROMPT (Recommended)

```
@workspace Generate this week's release notes for version v2.5.0

Automatically:
- Fetch all closed issues from past 7 days in Jira project KAN
- Extract GitHub PR and commit links from those Jira issues
- Fetch PR descriptions, commit messages, and code changes for technical context
- Include issues from previous week for comparison
- Categorize by: New Features, Bug Fixes, Improvements, Breaking Changes, Security
- Use GitHub context to explain:
  ✓ Technical implementation details from PRs
  ✓ Migration steps from PR descriptions
  ✓ Before/after code from commits
  ✓ Performance metrics from PR benchmarks
- Communicate:
  ✓ What changed for users and stakeholders
  ✓ New features and how to use them
  ✓ Fixed bugs and their impact
  ✓ Required actions for breaking changes
  ✓ Week-over-week progress metrics
- Link both Jira issues AND GitHub PRs/commits for full traceability

Format: Professional markdown for GitHub, wiki, and customer announcements
```

---

### ⚡ QUICK VERSION (Even Simpler)

```
@workspace Generate weekly release notes v2.5.0 for Jira project KAN with GitHub context
```

Agent will automatically:
- Query past week's closed issues
- Extract and fetch GitHub PR/commit details
- Compare with previous week
- Generate stakeholder-ready release notes with full technical context
- Link Jira issues + PRs + commits

---

## 🎨 Customize for Specific Audience:

### For Developers:
```
@workspace Generate technical release notes for this week's v2.5.0 release

Fetch closed issues from past week in KAN project. Include:
- GitHub PR links and commit references
- API changes and breaking changes with code diffs from commits
- Performance metrics from PR benchmarks
- Database migrations and technical implementation from PR descriptions
- Configuration updates
```

### For Customers:
```
@workspace Generate customer-facing release notes for v2.5.0

Fetch this week's closed issues with GitHub context. Focus on:
- New features with simple explanations
- Bug fixes that improve user experience
- How to use new features
- Any actions users need to take
- Use non-technical language (hide GitHub technical details)
```

### For Leadership/Stakeholders:
```
@workspace Generate executive summary for v2.5.0 weekly release

Fetch closed issues from past week. Emphasize:
- Business impact and value delivered
- Key metrics and productivity trends from Jira + GitHub activity
- Week-over-week comparison
- Strategic achievements
- Risk items (breaking changes, security)
```

### For Specific Date Range:
```
@workspace Generate release notes for v2.5.0 from December 25, 2025 to January 1, 2026

Fetch all closed KAN issues in this custom date range.
```

---

## 📊 Expected Output Preview:

The agent will automatically fetch closed issues + GitHub PRs/commits and generate:

```markdown
# Release v2.5.0 | Week of January 3-10, 2026

## 📋 What's New
This week we delivered 7 improvements to Product Browsing & Discovery via 12 PRs,
fixed 3 critical bugs, and improved search performance by 74%.

## 🎯 Highlights
- ✨ New product search with autocomplete (74% faster - 350ms → 90ms) [KAN-24](link) | [PR #45](pr)
- 🎨 Category carousel for easy product navigation [KAN-23](link) | [PR #43](pr)
- 🔍 Advanced filtering by dietary preferences [KAN-28](link) | [PR #52](pr)
- 📱 Grid/list view toggle for flexible browsing [KAN-27](link) | [PR #50](pr)
- 🐛 Fixed cart total calculation bug [KAN-XX](link) | [Commit abc123](commit)

## 📊 Activity
- Issues: 7 (+2 from last week)
- Features: 5 | Bugs: 2 | Performance: 1
- PRs Merged: 12 | Commits: 47
- Velocity: Increasing 📈

---

## ✨ New Features

### Product Search with Autocomplete - [KAN-24](link)
**What:** Search now shows real-time suggestions as you type
**Why:** Users find products 60% faster without typing full names
**How to use:**
1. Tap search bar on home screen
2. Start typing (2+ characters)
3. Tap a suggestion to view product

**Technical:** [PR #45](pr-link) - Implemented debounced search with Trie data structure for O(k) lookup
- Files changed: `SearchBar.tsx`, `useSearchSuggestions.ts`, `search-api.ts`
- Performance: Response time 300ms → 90ms (74% improvement)
- Commit: [abc123](commit-link) - Added autocomplete index

**Links:** [KAN-24](jira) | [PR #45](pr) | [Commit abc123](commit)

---

[Continues with detailed sections enriched with GitHub context...]
```

---

## 🧪 Testing the Demo:

1. **Copy the primary prompt** above
2. **Paste into Copilot Chat** with `@workspace` prefix
3. **Watch the magic:**
   - ✅ Automatically calculates past 7 days
   - ✅ Queries Jira for closed issues in that period
   - ✅ Extracts GitHub PR and commit links from Jira issues
   - ✅ Fetches PR descriptions and commit messages
   - ✅ Fetches previous week for comparison
   - ✅ Categorizes by impact and type
   - ✅ Enriches with technical details from GitHub
   - ✅ Generates stakeholder-ready release notes with full traceability
4. **Review generated notes** with Jira + GitHub links and metrics
5. **Ask for modifications:** "Make this more technical with code diffs" or "Add migration steps from PRs"

---

## 💡 Pro Tips:

- **No manual linking** - Agent extracts PR/commit URLs from Jira issue descriptions automatically
- **Rich context** - Uses PR descriptions for migration guides, commit messages for technical details
- **Code diffs included** - Shows before/after code from actual commits for breaking changes
- **Performance metrics** - Pulls benchmark results from PR descriptions
- **Smart filtering** - Recognizes labels like `release-note-required`, `breaking-change`
- **Automatic comparison** - Shows week-over-week trends including code velocity
- **Action-focused** - Highlights what users/developers need to do
- **Multi-audience** - Can regenerate for different audiences with appropriate detail level
- **Flexible dates** - Can specify custom ranges: "from Dec 25 to Jan 1"
- **GitHub verification** - Can fetch actual PR/commit details to verify accuracy

---

## 🚀 Quick Demo Flow:

1. **Show the problem:** "We release every week, manually creating notes from Jira AND GitHub takes hours"
2. **Paste simple prompt:** `@workspace Generate weekly release notes v2.5.0 with GitHub context`
3. **Agent automatically:**
   - Queries Jira for past week's closed issues
   - Extracts GitHub PR/commit links from those issues
   - Fetches PR descriptions, commit messages, code changes
   - Compares to previous week (both Jira and GitHub metrics)
   - Categorizes by impact
   - Generates professional release notes with full technical depth
4. **Show the output:** Complete notes with Jira + GitHub links in 30 seconds
5. **Demonstrate flexibility:**
   - "Make this customer-facing only (hide GitHub details)"
   - "Show only breaking changes with code diffs from commits"
   - "Create a Slack announcement version"
   - "List all PRs and commits included in this release"
6. **Highlight time savings:** 2-3 hours → 30 seconds ⚡
7. **Show traceability:** Every change links to Jira issue + PR + specific commits

---

## ✅ What Makes This Demo Impressive:

- ⚡ **Zero manual effort** - No copying issue IDs, PRs, or calculating dates
- 🤖 **Fully automated** - Agent discovers issues AND linked GitHub activity
- 🔗 **Full traceability** - Every change linked to Jira issue + PR + commits
- 📊 **Intelligent analysis** - Week-over-week trends + code velocity metrics
- 🎯 **Action-focused** - Highlights what users must do
- 👥 **Multi-audience** - Same data, different formats (dev/customer/executive)
- 💻 **Technical depth** - Includes PR descriptions, commit messages, code diffs
- 🔍 **Smart filtering** - Includes only relevant customer-facing changes
- 📈 **Trend analysis** - Shows productivity, velocity, and code change metrics
- ⏰ **Massive time savings** - 2-3 hours → 30 seconds
- 📝 **Professional output** - Ready to publish immediately

---

## 📝 After Demo, Show These Follow-ups:

```
// Show breaking changes with actual code diffs
"Show only breaking changes with before/after code from commits"

// Request different format
"Convert to HTML email for stakeholders"

// Focus on GitHub activity
"Show which PRs and commits went into this release"

// Customer communication
"Rewrite this for end-user customers (hide GitHub technical details)"

// Executive briefing
"Create a 3-bullet executive summary with business impact"

// Trend analysis
"Compare last 4 weeks of releases - show velocity and PR merge trends"

// Developer-focused
"Create technical changelog with all API changes and commit references"
```

---

**💾 Save this file for easy access during demos!**

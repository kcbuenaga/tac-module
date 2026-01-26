---
name: 'step-08-sidecar-update'
description: 'Update Patricia sidecar with lit review context for future session memory'

nextStepFile: './step-09-polish.md'
outputFile: '{thesis_artifacts}/literature-review-{date}.md'
patriciaSidecarFile: '{thesis_artifacts}/.patricia-sidecar.yaml'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 8: Update Patricia's Memory

## STEP GOAL:

To write literature review context to Patricia's sidecar file so she remembers this work in future sessions.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Patricia, updating your own memory
- ✅ This enables continuity across future interactions
- ✅ Student benefits from your remembering this work

### Step-Specific Rules:

- 🎯 Focus only on sidecar update
- 🚫 FORBIDDEN to modify literature review content
- 💬 Approach: Efficient memory update, brief confirmation
- 🎯 Simple write operation

## EXECUTION PROTOCOLS:

- 🎯 Extract key context from literature review
- 💾 Update or create sidecar file
- 📖 Confirm successful update
- 🚫 This is a simple, quick step

## CONTEXT BOUNDARIES:

- Available: Complete literature review with themes, patterns, gaps
- Focus: Memory update only
- Limits: No content generation
- Dependencies: Literature review synthesis complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Extract Literature Review Context

From {outputFile}, extract:
- Themes identified (names and descriptions)
- Key patterns found
- Gaps identified
- Source count used
- Completion date
- Research question

### 2. Update Patricia Sidecar

**Check if {patriciaSidecarFile} exists:**

**If exists:** Load, append new session entry
**If not exists:** Create new sidecar file

**Sidecar structure:**
```yaml
---
agent: patricia
type: research-librarian-memory
created: {first_created_date}
lastUpdated: {current_date}

sessions:
  - date: {previous_date}
    workflow: source-validation
    topic: {topic}
    sourcesFound: 28
    sourcesSelected: 12

  - date: {current_date}
    workflow: literature-review-builder
    topic: {topic}
    researchQuestion: {researchQuestion}
    themes:
      - name: {theme1}
        description: {description}
        sourcesCount: {count}
      - name: {theme2}
        description: {description}
        sourcesCount: {count}
    patterns:
      - {pattern1}
      - {pattern2}
    gaps:
      - {gap1}
      - {gap2}
    totalSourcesSynthesized: {count}
    outputFile: {outputFile}
    status: complete
---
```

### 3. Confirm Update

"**Patricia's Memory Updated ✅**

I've recorded this literature review session in my memory:
- Themes: {theme_count}
- Patterns identified: {count}
- Gaps identified: {count}
- Sources synthesized: {count}

This helps me maintain continuity in future sessions with you."

### 4. Present MENU OPTIONS

Display: "**[C] Continue to Polish**"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Update {outputFile} frontmatter stepsCompleted to add 'step-08-sidecar-update', then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Sidecar file updated or created successfully
- All key context recorded (themes, patterns, gaps)
- Session entry properly formatted
- Confirmation displayed
- Ready to proceed to polish

### ❌ SYSTEM FAILURE:

- Not creating/updating sidecar
- Missing key context in sidecar
- Malformed YAML structure
- Not confirming update
- Not updating frontmatter

**Master Rule:** Patricia remembers her work. Sidecar enables cross-session continuity.

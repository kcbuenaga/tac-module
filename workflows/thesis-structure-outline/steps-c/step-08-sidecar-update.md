---
name: 'step-08-sidecar-update'
description: 'Update João sidecar with session data for cross-workflow memory'

nextStepFile: './step-09-completion.md'
outputFile: '{thesis_artifacts}/outlines/thesis-outline-{date}.md'
joaoSidecarFile: '{thesis_artifacts}/.joao-sidecar.yaml'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 8: Update João's Memory

## STEP GOAL:

To write this session's data to João's sidecar file so he remembers this work in future sessions across workflows.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are João, updating your own memory
- ✅ This enables continuity across future interactions
- ✅ Student benefits from you remembering this work

### Step-Specific Rules:

- 🎯 Focus ONLY on sidecar update
- 🚫 FORBIDDEN to modify outline content
- 💬 Approach: Efficient memory update, brief confirmation
- 🎯 Simple write operation

## EXECUTION PROTOCOLS:

- 🎯 Extract key context from outline
- 💾 Update or create sidecar file
- 📖 Confirm successful update
- 🚫 This is a simple, quick step

## CONTEXT BOUNDARIES:

- Available: Complete thesis outline with all planning data
- Focus: Memory update only
- Limits: No content generation
- Dependencies: Outline must be complete through step-07

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`

### 2. Extract Outline Context

Load {outputFile} and extract from frontmatter and body:
- `topic`
- `researchQuestion`
- `thesisType`
- `chapters` array
- `totalSections`
- `methodologyDepth`
- `created` date

### 3. Check if Sidecar Exists

Check if {joaoSidecarFile} exists:

**If exists:** Load and append new session entry
**If not exists:** Create new sidecar file

### 4. Update Sidecar

**Sidecar structure:**

```yaml
---
agent: joao
type: writing-coach-memory
created: {first_created_date}
lastUpdated: {current_date}

sessions:
  - date: {previous_date}
    workflow: {previous_workflow}
    topic: {previous_topic}
    # ... previous sessions

  - date: {current_date}
    workflow: thesis-structure-outline
    topic: {topic}
    researchQuestion: {researchQuestion}
    thesisType: {thesisType}
    chaptersCount: {count}
    sectionsCount: {totalSections}
    methodologyDepth: {high-level/detailed}
    challenges: []  # To be filled if any challenges noted during workflow
    outlineFile: {outputFile}
    status: complete
---
```

**If this is a new sidecar (first session):**
- Set `created` to current date
- Create `sessions` array with this session

**If updating existing sidecar:**
- Update `lastUpdated` to current date
- Append this session to `sessions` array

### 5. Confirm Update

Display in {preferred_tac_language}:

"**João's Memory Updated ✅**

I've recorded this thesis outline session in my memory:
- Topic: {topic}
- Thesis Type: {thesisType}
- Chapters: {count}
- Sections: {totalSections}
- Methodology Depth: {high-level/detailed}

This helps me maintain continuity in future sessions with you - whether in this workflow, Writing Session Guide, or other interactions."

### 6. Present MENU OPTIONS

Display: **[C] Continue to Completion**

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
- All key context recorded (topic, thesis type, chapters, sections, methodology depth)
- Session entry properly formatted in YAML
- Confirmation displayed to user
- stepsCompleted updated
- Ready to proceed to completion

### ❌ SYSTEM FAILURE:

- Not creating/updating sidecar
- Missing key context in sidecar
- Malformed YAML structure
- Not confirming update
- Not updating stepsCompleted

**Master Rule:** João remembers his work. Sidecar enables cross-session and cross-workflow continuity. This is how João knows the student in future interactions.

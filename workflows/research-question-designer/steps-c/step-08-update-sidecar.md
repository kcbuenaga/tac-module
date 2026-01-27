---
name: 'step-08-update-sidecar'
description: 'Update Dr. Carla sidecar memory with research question session data'

nextStepFile: './step-09-completion.md'
outputFile: '{thesis_artifacts}/research-question/research-question-{date}.md'
carlaSidecarFile: '{thesis_artifacts}/.dr-carla-sidecar.yaml'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 8: Update Dr. Carla's Memory

## STEP GOAL:

To update Dr. Carla's sidecar memory file with this research question session data, enabling cross-workflow continuity and personalized guidance in future interactions.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, updating your own memory
- ✅ This enables continuity across future interactions
- ✅ Student benefits from you remembering this work

### Step-Specific Rules:

- 🎯 Focus ONLY on sidecar update
- 🚫 FORBIDDEN to modify output document content
- 💬 Approach: Efficient memory update, brief confirmation
- 🎯 Simple write operation

## EXECUTION PROTOCOLS:

- 🎯 Extract key context from output document
- 💾 Update or create sidecar file
- 📖 Confirm successful update
- 🚫 This is a simple, quick step

## CONTEXT BOUNDARIES:

- Available: Complete research question document with all session data
- Focus: Memory update only
- Limits: No content generation
- Dependencies: Research question refined and finalized in step-07

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`

### 2. Extract Session Context

Load {outputFile} and extract:
- `topic`
- `draftQuestion` (original from Topic Discovery)
- `alternativesCount`
- `selectedAlternative`
- `selectedQuestion` (before refinement)
- `finalQuestion` (after refinement)
- `regenerationAttempts` (if exists)
- `date` (session date)
- Evaluation notes (researchability, scope, contribution assessments)

### 3. Check if Sidecar Exists

Check if {carlaSidecarFile} exists:

**If exists:** Load and append new session entry
**If not exists:** Create new sidecar file

### 4. Update Sidecar

**Sidecar structure:**

```yaml
---
agent: dr-carla
type: academic-advisor-memory
created: {first_created_date}
lastUpdated: {current_date}

sessions:
  - date: {previous_date}
    workflow: {previous_workflow}
    # ... previous sessions

  - date: {current_date}
    workflow: research-question-designer
    topic: {topic}
    draftQuestion: {draftQuestion from Topic Discovery}
    alternativesGenerated: {count}
    regenerationAttempts: {number if > 0}
    selectedAlternative: {which alternative chosen}
    selectedQuestion: {selected question before refinement}
    finalQuestion: {refined final question}
    evaluationNotes:
      researchability: {assessment summary}
      scope: {assessment summary}
      contribution: {assessment summary}
    refinements: {brief note on what was refined}
    methodologyPreference: {inferred from evaluation discussion}
    decisionPattern: {how student approached decision - quick/deliberate/uncertain}
    confidenceLevel: {high/medium/low based on session interactions}
    outputFile: {outputFile}
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

"**Dr. Carla's Memory Updated ✅**

I've recorded this research question session in my memory:

**Session Summary:**
- Topic: {topic}
- Draft Question → {alternativesCount} alternatives → Evaluated → Selected → Refined
- Final Question: *{first 80 chars of finalQuestion}...*
- Regeneration attempts: {count if > 0, or 'none'}
- Methodology preference: {inferred preference}
- Decision confidence: {assessment}

**Why This Matters:**

When we work together in future workflows (Literature Review, Thesis Structure, or Writing Sessions), I'll remember:
- Your research question and its evolution
- How you approach research decisions
- Your methodology preferences and constraints
- What criteria matter most to you

This continuity helps me provide more personalized and contextual guidance throughout your thesis journey."

### 6. Update stepsCompleted

Update {outputFile} frontmatter:
```yaml
stepsCompleted: ['step-01-init', 'step-02-input-discovery', 'step-03-generate-alternatives', 'step-04-review-alternatives', 'step-05-evaluate-criteria', 'step-06-select-question', 'step-07-refine-question', 'step-08-update-sidecar']
lastStep: 'step-08-update-sidecar'
```

### 7. Present MENU OPTIONS

Display: **[C] Continue to Completion**

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Update frontmatter stepsCompleted, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#7-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Extracted all key context from output document
- Checked for existing sidecar and handled appropriately
- Created or updated sidecar with proper YAML structure
- Recorded complete session data (topic, questions, evaluations, decisions)
- Inferred methodology preferences and decision patterns
- Confirmed update to student with explanation of value
- stepsCompleted updated
- Ready to proceed to completion

### ❌ SYSTEM FAILURE:

- Not creating/updating sidecar
- Missing key context in sidecar (questions, evaluations)
- Malformed YAML structure
- Not inferring decision patterns or preferences
- Not confirming update
- Not explaining value of memory continuity
- Not updating stepsCompleted

**Master Rule:** Dr. Carla remembers her work with students. Sidecar enables cross-session and cross-workflow continuity. This is how Dr. Carla knows the student's research journey in future interactions. Record thoroughly and purposefully.

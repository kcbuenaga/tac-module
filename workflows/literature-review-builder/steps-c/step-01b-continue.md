---
name: 'step-01b-continue'
description: 'Resume Literature Review Builder workflow from previous session'

outputFile: '{thesis_artifacts}/literature-review-{date}.md'
workflowFile: '../workflow.md'

# Next step routing options
nextStepOptions:
  step-02: './step-02-handoff-load.md'
  step-03: './step-03-export-choice.md'
  step-04: './step-04-lit-review-decision.md'
  step-05: './step-05-thematic-organization.md'
  step-06: './step-06-lit-review-synthesis.md'
  step-07: './step-07-review-satisfaction.md'
  step-08: './step-08-sidecar-update.md'
  step-09: './step-09-polish.md'
  step-10: './step-10-completion.md'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 1b: Continue Workflow

## STEP GOAL:

To resume the Literature Review Builder workflow from where it was left off in a previous session.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ We resume collaborative work seamlessly
- ✅ You maintain context from previous session
- ✅ Student continues their literature review journey

### Step-Specific Rules:

- 🎯 Focus only on determining where to resume
- 🚫 FORBIDDEN to skip ahead or restart from beginning
- 💬 Approach: Welcoming continuation, efficient routing
- 🚪 Route to exact next step based on stepsCompleted

## EXECUTION PROTOCOLS:

- 🎯 Read stepsCompleted array to determine progress
- 💾 Load output file to restore context
- 📖 Route to correct next step based on last completed step
- 🚫 Never restart from step-01 - this IS the continuation step

## CONTEXT BOUNDARIES:

- Available: Output file with stepsCompleted, workflow state
- Focus: Resumption and routing
- Limits: No content work yet - just determine where to go
- Dependencies: Existing output file with valid stepsCompleted array

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `user_name`
- `communication_language`
- `preferred_tac_language`

### 2. Welcome Back

**In {preferred_tac_language}:**

"**Bem-vindo de volta, {user_name}!**

Welcome back! Let me check where we left off with your literature review..."

### 3. Search for Output File

Search {thesis_artifacts}/ for literature-review-*.md files.

**Find most recent file** (by date in filename or file modification time).

**If multiple files found:**
```
Found multiple literature review files:
[1] literature-review-2026-01-26.md (3 days ago) - Status: IN_PROGRESS
[2] literature-review-2026-01-20.md (9 days ago) - Status: COMPLETE

Which would you like to continue? [1/2]
```

**If no files found:**
```
❌ No existing literature review found.

It appears there's no workflow to continue. Would you like to start a new one?

[N] Start new Literature Review Builder
[X] Exit
```

### 4. Read stepsCompleted from Output File

Load {outputFile} and read frontmatter:
- `stepsCompleted` array
- `lastStep`
- `status`
- `topic`
- `citationFormat`

### 5. Display Progress Summary

Show what has been completed:

"**Progress Summary:**

📋 Topic: {topic}
📅 Started: {date}
✅ Steps Completed: {count} of 11

**Completed Steps:**
{list each completed step with checkmark}

**Status:** {status}
**Last Step:** {lastStep}"

### 6. Determine Next Step

**Based on stepsCompleted array, identify next step:**

**Routing Logic:**

- **If last completed = 'step-01-init':** → Load step-02-handoff-load.md
- **If last completed = 'step-02-handoff-load':** → Load step-03-export-choice.md
- **If last completed = 'step-03-export-choice':** → Load step-04-lit-review-decision.md
- **If last completed = 'step-04-lit-review-decision':**
  - Check if user chose to continue to lit review or skip
  - If skip: → Load step-10-completion.md
  - If continue: → Load step-05-thematic-organization.md
- **If last completed = 'step-05-thematic-organization':** → Load step-06-lit-review-synthesis.md
- **If last completed = 'step-06-lit-review-synthesis':** → Load step-07-review-satisfaction.md
- **If last completed = 'step-07-review-satisfaction':**
  - Check decision from step-07
  - If satisfied: → Load step-08-sidecar-update.md
  - If regenerate: → Load step-05-thematic-organization.md
  - Note: If user chose to exit to Source Validation or Carla, they won't be here
- **If last completed = 'step-08-sidecar-update':** → Load step-09-polish.md
- **If last completed = 'step-09-polish':** → Load step-10-completion.md
- **If status = 'COMPLETE':** Workflow already finished, offer to view or edit

### 7. Confirm Continuation Point

Display where we're resuming:

"**Ready to Continue!**

We'll pick up from: **{next_step_name}**

{Brief description of what happens next}"

### 8. Route to Next Step

**Auto-proceed to the appropriate step:**

Load the next step file based on the routing logic above.

**Example:**
```
"Proceeding to Step 02: Load Sources..."

→ Load, read entire file, then execute {nextStepOptions.step-02}
```

**CRITICAL:** No menu needed - this step auto-proceeds to the correct next step.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Output file located successfully
- stepsCompleted array read correctly
- Next step determined accurately
- User informed of progress
- Correct next step file loaded
- Seamless continuation (user doesn't feel workflow restarted)

### ❌ SYSTEM FAILURE:

- Not finding existing output file
- Restarting from step-01 instead of continuing
- Wrong next step loaded
- Not checking for branch decisions (step-04, step-07)
- Not handling edge cases (complete workflow, missing steps)

**Master Rule:** Continuation must be seamless. User should feel workflow never stopped.

---
name: 'step-01b-continue'
description: 'Handle workflow continuation from previous session'

outputFile: '{thesis_artifacts}/outlines/thesis-outline-{date}.md'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'

# Step routing options
nextStepOptions:
  step-02-input-discovery: './step-02-input-discovery.md'
  step-03-thesis-type: './step-03-thesis-type.md'
  step-04-chapter-planning: './step-04-chapter-planning.md'
  step-05-review-chapters: './step-05-review-chapters.md'
  step-06-section-breakdown: './step-06-section-breakdown.md'
  step-07-methodology-planning: './step-07-methodology-planning.md'
  step-08-sidecar-update: './step-08-sidecar-update.md'
  step-09-completion: './step-09-completion.md'
---

# Step 1b: Continue Workflow

## STEP GOAL:

To resume the thesis outline workflow from where it was left off in a previous session.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are João, the Teaching Assistant
- ✅ Student is returning to continue their outline
- ✅ Welcome them back professionally

### Step-Specific Rules:

- 🎯 Focus ONLY on continuation logic
- 🚫 FORBIDDEN to do actual outline work in this step
- 💬 Approach: Welcoming return, quick status update
- 🎯 This is routing - actual work continues in next step

## EXECUTION PROTOCOLS:

- 🎯 Read stepsCompleted to determine progress
- 💾 Route to correct next step based on state
- 📖 No menu - auto-route to next step
- 🚫 FORBIDDEN to skip routing logic

## CONTEXT BOUNDARIES:

- Available: Output file with stepsCompleted, TAC config
- Focus: Determine where to resume
- Limits: No actual outline work here
- Dependencies: Output file must exist (checked in step-01)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`

### 2. Welcome Back

Display in {preferred_tac_language}:

"**Welcome back, {user_name}!**

Let me check where we left off with your thesis outline..."

### 3. Read stepsCompleted from Output

Load {outputFile} and read frontmatter:
- `stepsCompleted` array
- `lastStep` value
- `topic` (if available)
- `thesisType` (if available)
- `status`

### 4. Determine Next Step

Based on the last completed step in `stepsCompleted`, route to the appropriate next step:

**Routing Logic:**

- IF last step is `step-01-init` → Route to {nextStepOptions.step-02-input-discovery}
- IF last step is `step-02-input-discovery` → Route to {nextStepOptions.step-03-thesis-type}
- IF last step is `step-03-thesis-type` → Route to {nextStepOptions.step-04-chapter-planning}
- IF last step is `step-04-chapter-planning` → Route to {nextStepOptions.step-05-review-chapters}
- IF last step is `step-05-review-chapters` → Route to {nextStepOptions.step-06-section-breakdown}
- IF last step is `step-06-section-breakdown` → Route to {nextStepOptions.step-07-methodology-planning}
- IF last step is `step-07-methodology-planning` → Route to {nextStepOptions.step-08-sidecar-update}
- IF last step is `step-08-sidecar-update` → Route to {nextStepOptions.step-09-completion}
- IF last step is `step-09-completion` OR status is `COMPLETE` → Display: "Your thesis outline is already complete! Check: {outputFile}"

### 5. Display Continuation Status

Before routing, display:

"**Continuing from:** {lastStep}

**Topic:** {topic if available, else 'Not set yet'}

**Progress:** {count of stepsCompleted} of 9 steps completed

**Resuming workflow...**"

### 6. Route to Next Step

Based on the routing logic above, immediately load, read entire file, then execute the determined next step file.

No menu - this is automatic routing.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- TAC config loaded
- Welcome back message displayed
- stepsCompleted read from output file
- Correct next step determined from routing logic
- Status displayed to user
- Routed to appropriate next step

### ❌ SYSTEM FAILURE:

- Not reading stepsCompleted array
- Wrong routing logic
- Not displaying continuation status
- Hardcoding next step instead of using routing logic
- Not loading entire next step file before execution

**Master Rule:** Continuation must route to the exact correct next step based on stepsCompleted. No guessing, no skipping.

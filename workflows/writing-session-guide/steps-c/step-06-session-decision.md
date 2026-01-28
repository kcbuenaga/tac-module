---
name: 'step-06-session-decision'
description: 'Decide what to do next - continue, switch, or end'

joaoSidecarFile: '{project-root}/_bmad/_memory/joao-sidecar/memories.md'
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 6: Session Decision

## STEP GOAL:

To help the student decide what to do next: continue with the same section, switch to a different section, or end the session.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are João, helping student decide next steps
- ✅ Present options clearly without pushing any choice
- ✅ Student controls pacing and direction
- ✅ This is the branching decision point - three possible routes

### Step-Specific Rules:

- 🎯 Focus ONLY on decision routing
- 🚫 FORBIDDEN to force a particular choice
- 💬 Present three options clearly
- 🎯 Route based on student selection

## EXECUTION PROTOCOLS:

- 🎯 Present three clear options
- 💾 Route based on selection
- 📖 Update session state appropriately
- 🚫 Branching menu [1/2/3]

## CONTEXT BOUNDARIES:

- Available: Current section, session history, João's sidecar
- Focus: Decision routing only
- Limits: No new guidance yet
- Dependencies: Progress tracked (step-05)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration and Session Context

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`

Load {joaoSidecarFile} to retrieve:
- Current section
- Session start date
- Progress logged

### 2. Present Decision Options

Display in {preferred_tac_language}:

"**What would you like to do next?**

**[1] Continue with same section**
Keep working on {current section} - I'll provide more prompts and guidance

**[2] Switch to different section**
Choose a different chapter/section from your outline to work on

**[3] End session**
Save your progress and exit - you can resume this session anytime

**Select:** [1] / [2] / [3]"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting options
- Route based on selection
- If unclear input, ask for clarification

#### Decision Routing Logic:

**IF 1 (Continue same section):**
- Display: "**Continuing with {current section}**"
- Keep currentSection in session state
- Load, read entire file, then execute `./step-04-writing-loop.md` (back to writing loop)

**IF 2 (Switch to different section):**
- Display: "**Switching to a different section**"
- Clear currentSection from session state (will be re-selected)
- Load, read entire file, then execute `./step-03-select-section.md` (back to section selection)

**IF 3 (End session):**
- Display: "**Ending session and saving progress**"
- Proceed to step 3 (Session End Summary)

**IF Any other input:**
- Display: "Please select [1], [2], or [3]"
- Wait for valid selection
- Loop until valid input received

### 3. Session End Summary (IF option 3 selected)

Update {joaoSidecarFile} session state:

```markdown
**Session Status:** COMPLETED
**Session End Date:** {current_date}
**Final Section Worked On:** {current section}
**Total Session Duration:** {calculate from sessionStartDate to current date}
**Steps Completed:** ['step-01-init', 'step-02-load-context', 'step-03-select-section', 'step-04-writing-loop', 'step-05-track-progress', 'step-06-session-decision']
**Last Step:** step-06-session-decision-end
```

Display in {preferred_tac_language}:

"**✅ Writing session complete!**

**Your session summary:**
- **Duration:** {from sessionStartDate to current date}
- **Section worked on:** {current section}
- **Progress:** Logged and saved

**What I remember:**
All your progress, the context we loaded, and the guidance I provided are saved in my memory. When you start your next writing session, I'll have all of this available to continue supporting you.

**What's next:**

You can:
- **Start another writing session** anytime (run this workflow again)
- **Continue from where you left off** (I'll remember your outline and context)
- **Switch to a different section** in your next session

**Your thesis writing is saved in your own document** - this workflow doesn't modify your files. All the writing you did today is in your thesis document where you control it.

**Great work today, {user_name}!** Every writing session builds momentum. Keep going!

_Writing Session Guide workflow complete._"

### 4. Workflow Ends (IF option 3 selected)

No further action. Session saved, workflow complete.

The student can invoke the workflow again anytime to start a new session (which will be detected as a new session since status = COMPLETED).

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Three options presented clearly
- Student selection received and validated
- Routing executed correctly based on selection:
  - [1] → step-04-writing-loop.md (same section)
  - [2] → step-03-select-section.md (different section)
  - [3] → Session end summary displayed, state saved
- Session state updated appropriately
- If ended: Complete summary provided
- Student understands what was saved and what's next

### ❌ SYSTEM FAILURE:

- Not presenting all three options
- Forcing a particular choice
- Routing incorrectly based on selection
- Not updating session state
- If ended: Not displaying session summary
- If ended: Not marking session as COMPLETED
- Continuing workflow after option [3] (should end)

**Master Rule:** This is the BRANCHING decision point. Three routes: [1] → step-04, [2] → step-03, [3] → END. Student controls which path. If [3], workflow ENDS with summary.

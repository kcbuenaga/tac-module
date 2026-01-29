---
name: 'step-02-idea-entry'
description: 'Collect idea text from user with validation'

nextStepFile: './step-03-optional-tag.md'
---

# Step 2: Idea Entry

## STEP GOAL:

To collect the user's idea text with clear instructions and validate it's not empty.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read first
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful idea capture assistant
- ✅ Professional but friendly
- ✅ Clear prompts for speed
- ✅ Validate input before proceeding

### Step-Specific Rules:

- 🎯 Focus ONLY on collecting idea text
- 🚫 FORBIDDEN to collect tag yet (that's step 03)
- 💬 Provide clear prompt
- ✅ Validate not empty before proceeding

## EXECUTION PROTOCOLS:

- 🎯 Prompt for idea text
- ✅ Validate input is not empty
- 💾 Store idea text for later steps
- ➡️ Auto-proceed after validation

## CONTEXT BOUNDARIES:

- Welcome complete (from step 01)
- File existence checked (from step 01)
- No idea collected yet
- This is the core input step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Request Idea Text

"**Enter your idea:**"

Wait for user input.

### 2. Validate Input

**If user provides text:**
Check that input is not empty or just whitespace.

**If input is NOT empty:**
Store idea text and proceed to step 3.

**If input IS empty or whitespace only:**
"**Please enter your idea.** (It cannot be empty)"

Return to step 1 and wait again.

### 3. Confirm Receipt (Optional)

**Briefly acknowledge:**
"**Got it!**"

### 4. Auto-Proceed to Optional Tag

Store the idea text in memory for use in step-04.

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Clear prompt displayed
- User provided idea text
- Input validated (not empty)
- Idea text stored for later use
- Auto-proceeded to step-03
- Total time: < 20 seconds

### ❌ SYSTEM FAILURE:

- Accepting empty input
- Not validating before proceeding
- Collecting tag in this step (belongs in step-03)
- Not storing idea text for step-04
- Being too verbose

**Master Rule:** Get the idea text, validate it, store it, move on. Speed is critical.

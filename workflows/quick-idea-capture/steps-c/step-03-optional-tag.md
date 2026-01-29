---
name: 'step-03-optional-tag'
description: 'Collect optional tag/category from user (can skip)'

nextStepFile: './step-04-save-confirm.md'
---

# Step 3: Optional Tag

## STEP GOAL:

To collect an optional tag or category for the idea (user can press Enter to skip).

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without user response (even if skipped)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read first
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful idea capture assistant
- ✅ Professional but friendly
- ✅ Clear instructions about optional field
- ✅ No pressure - user can skip

### Step-Specific Rules:

- 🎯 Focus ONLY on collecting optional tag
- 🚫 FORBIDDEN to save yet (that's step 04)
- 💬 Make it clear user can press Enter to skip
- ✅ Accept any input or no input

## EXECUTION PROTOCOLS:

- 🎯 Prompt for optional tag
- ✅ Accept tag OR skip (Enter)
- 💾 Store tag if provided (empty if skipped)
- ➡️ Auto-proceed to save step

## CONTEXT BOUNDARIES:

- Idea text collected (from step 02)
- No tag collected yet
- This is optional categorization
- User might want to skip

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Request Optional Tag

"**Add a tag/category (or press Enter to skip):**"

Wait for user input.

### 2. Handle Input

**If user provides tag text:**
Store the tag for use in step-04.

**If user presses Enter (empty input):**
Store empty string (no tag) for use in step-04.

**No validation needed** - any input is acceptable, including empty.

### 3. Auto-Proceed to Save

Store the tag (or empty string) in memory for use in step-04.

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Clear prompt with skip instructions
- User provided tag OR pressed Enter
- Tag stored (or empty if skipped)
- Auto-proceeded to step-04
- Total time: < 10 seconds

### ❌ SYSTEM FAILURE:

- Not making skip option clear
- Requiring tag input
- Saving in this step (belongs in step-04)
- Not storing tag for step-04
- Taking too long

**Master Rule:** This is optional. Make skip option obvious. Accept whatever user provides (or doesn't provide) and move on.

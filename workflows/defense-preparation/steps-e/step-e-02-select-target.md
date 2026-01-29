---
name: 'step-e-02-select-target'
description: 'User selects which document(s) to edit'

nextStepFile: './step-e-03-edit-content.md'
presentationFile: '{loaded_from_step_e_01}'
questionsFile: '{loaded_from_step_e_01}'
---

# Edit Mode - Step 2: Select Edit Target

## STEP GOAL:

To let the user choose whether to edit the presentation outline, anticipated questions, or both documents.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, in Edit mode
- ✅ Let user choose what to edit
- ✅ Be clear about each option

### Step-Specific Rules:

- 🎯 Focus ONLY on target selection
- 🚫 FORBIDDEN to make edits yet
- 💬 Present clear options
- 📋 Store user's choice for next step

## EXECUTION PROTOCOLS:

- 🎯 Present edit target options
- 💾 Store selection in frontmatter
- 🔀 Prepare for editing in next step
- 🚫 FORBIDDEN to skip selection

## CONTEXT BOUNDARIES:

- Documents loaded from step e-01
- This is routing decision
- Actual edits happen in next step
- User controls scope of edits

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Present Edit Target Options

"**What would you like to edit?**

**[P]** Presentation outline only
   - Modify presentation structure, key points, sections
   - Update talking points or emphasis areas

**[Q]** Anticipated questions only
   - Add, remove, or modify committee questions
   - Update question categories or roles

**[B]** Both documents
   - Edit presentation and questions together
   - Coordinated updates across both

Which do you want to edit?"

Wait for user selection (P, Q, or B).

### 2. Store Selection

**IF P (Presentation only):**

Update {presentationFile} frontmatter:
```yaml
editMode:
  editTarget: "presentation"
  editScope: "single"
```

**IF Q (Questions only):**

Update {questionsFile} frontmatter:
```yaml
editMode:
  editTarget: "questions"
  editScope: "single"
```

**IF B (Both):**

Update both files' frontmatter:
```yaml
editMode:
  editTarget: "both"
  editScope: "dual"
```

### 3. Confirm Selection

**IF P:**
"**Editing: Presentation outline**

You can modify any section of your defense presentation."

**IF Q:**
"**Editing: Anticipated questions**

You can add, remove, or modify questions from any committee role."

**IF B:**
"**Editing: Both documents**

You can modify your presentation outline and anticipated questions."

### 4. Update Frontmatter

Update appropriate document(s):
```yaml
lastStep: 'step-e-02-select-target'
lastModified: [current date]
```

### 5. Present MENU OPTIONS

Display: "**Select:** [C] Continue to Edit Content"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#5-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- User selected edit target clearly
- Selection stored in frontmatter
- Scope confirmed (single or dual)
- Ready for editing step

### ❌ SYSTEM FAILURE:

- Not presenting clear options
- Not storing selection
- Proceeding without user choice
- Skipping this step

**Master Rule:** Let user choose edit scope, store it, confirm it, proceed.

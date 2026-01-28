---
name: 'step-e-02-edit-remove'
description: 'Student selects citation to edit/remove, make changes'

nextStepFile: './step-e-03-confirm.md'
abntRulesData: '../data/abnt-rules.md'
apaRulesData: '../data/apa-rules.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step E-02: Edit or Remove Citation

## STEP GOAL:

To allow the student to select a citation to edit or remove, and make the requested changes.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ You help students edit their citations
- ✅ You maintain citation quality and formatting
- ✅ You are collaborative and supportive

### Step-Specific Rules:

- 🎯 Focus ONLY on editing or removing selected citation
- 🚫 FORBIDDEN to update bibliography file yet (that's step E-03)
- 💬 Let student choose: edit or remove
- 🎯 If editing, collaborate to update metadata and reformat

## EXECUTION PROTOCOLS:

- 🎯 Get student's selection (which citation)
- 💾 Get student's action (edit or remove)
- 📖 If edit: collaborate to update and reformat
- 🚫 FORBIDDEN to save changes yet (confirm first in step E-03)

## CONTEXT BOUNDARIES:

- Available: Citations array from step E-01, citation standard, formatting rules
- Focus: Editing or removing selected citation
- Limits: No saving yet
- Dependencies: Step E-01 (loaded citations)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Prompt for Citation Selection

Display:

"**Which citation would you like to edit or remove?**

Enter the number [1-{totalCitations}], or type 'X' to exit without changes:"

Wait for user input.

**If user enters a number:**
- Validate it's within range [1 to totalCitations]
- If valid: Store `selectedCitationNumber` = number
- If invalid: Display error, ask again

**If user enters 'X':**
- Display: "No changes made. Exiting Edit mode."
- Exit workflow

### 2. Display Selected Citation

Display the full text of the selected citation:

"**Selected Citation #{selectedCitationNumber}:**

{full text of citation}

---

**What would you like to do with this citation?**

[E] Edit metadata/formatting
[R] Remove this citation
[C] Cancel (choose a different citation)

Choose: [E/R/C]"

Wait for user input:

- **IF E:** Proceed to Section 3 (Edit Citation)
- **IF R:** Proceed to Section 4 (Remove Citation)
- **IF C:** Go back to Section 1 (select different citation)
- **IF any other:** Help user, then redisplay menu

### 3. Edit Citation (If E Selected)

**If user chose to edit:**

Display:

"**Editing Citation #{selectedCitationNumber}**

I'll help you update the citation information. I'll extract the current metadata and you can tell me what needs to change.

**Current citation:**
{full text of citation}

Let me parse the metadata from this citation..."

**A. Parse Current Metadata**

Attempt to extract metadata from the citation text:
- Author(s)
- Year
- Title
- Publication
- Other relevant fields

Display what was parsed:

"**Current Metadata:**

👤 Author: {author}
📅 Year: {year}
📖 Title: {title}
📰 Publication: {publication}
{other fields}

**Which field would you like to edit?**

[1] Author
[2] Year
[3] Title
[4] Publication
[5] Other field (specify)
[A] Edit multiple fields
[X] Cancel edit

Choose a number or letter:"

**B. Update Metadata Fields**

Wait for user selection:

- **If user selects a specific field:**
  Display: "**Current {field}:** {current value}
  **Enter new value:**"

  Wait for user input.
  Update that field.

  Then ask: "**Edit another field?** [Y] Yes / [N] No, reformat citation"
  - IF Y: Redisplay field selection menu
  - IF N: Proceed to Section 3.C (Reformat)

- **If user selects [A] (edit multiple):**
  For each metadata field:
    Display current value, ask if they want to change it
    If yes, get new value
  After all fields reviewed, proceed to Section 3.C

- **If user selects [X]:**
  Return to Section 2 (display selected citation menu)

**C. Reformat Citation**

Load formatting rules based on `citationStandard`:
- IF ABNT: Load {abntRulesData}
- IF APA: Load {apaRulesData}

Apply formatting rules to the updated metadata to create new formatted citation.

Display:

"**Updated Citation:**

{newly formatted citation}

**Is this correct?** [Y] Yes / [E] Edit more / [C] Cancel changes"

- **IF Y:** Store `updatedCitation` = new formatted citation, proceed to Section 5
- **IF E:** Go back to Section 3.B (edit more fields)
- **IF C:** Return to Section 2

### 4. Remove Citation (If R Selected)

**If user chose to remove:**

Display:

"⚠️ **Confirm Removal**

You're about to remove this citation:

{full text of citation}

**Are you sure you want to remove this citation from your bibliography?**

[Y] Yes, remove it
[N] No, keep it

Choose: [Y/N]"

Wait for user response:

- **IF Y:**
  Display: "✅ Citation will be removed."
  Store `action` = "remove"
  Store `selectedCitationNumber` = number to remove
  Proceed to Section 5

- **IF N:**
  Display: "Citation kept. No changes made."
  Return to Section 1 (select different citation)

### 5. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Store changes (updatedCitation or removal), then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#5-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Student selected a citation by number
- Student chose action (edit or remove)
- If edit: metadata updated and citation reformatted
- If remove: removal confirmed
- Changes stored for confirmation in step E-03
- No changes saved to file yet (waiting for confirmation)

### ❌ SYSTEM FAILURE:

- Not validating citation number is in range
- Not allowing cancellation at each step
- Saving changes before confirmation (should wait for E-03)
- Not reformatting citation after editing metadata
- Not parsing current metadata before editing

**Master Rule:** Allow editing or removal, but don't save to file yet. Step E-03 will confirm and save. Always allow cancellation.

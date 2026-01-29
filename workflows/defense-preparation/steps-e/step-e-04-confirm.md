---
name: 'step-e-04-confirm'
description: 'Confirm changes and offer validation'

presentationFile: '{loaded_from_step_e_01}'
questionsFile: '{loaded_from_step_e_01}'
validationStep: '../steps-v/step-v-01-assess-readiness.md'
---

# Edit Mode - Step 4: Confirm & Optional Validation

## STEP GOAL:

To confirm edits were applied correctly, save changes, and offer validation to check updated readiness.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, confirming edit completion
- ✅ Offer validation as next logical step
- ✅ Be clear about what was saved

### Step-Specific Rules:

- 🎯 Focus ONLY on confirmation and validation offer
- 🚫 FORBIDDEN to make additional edits
- 💬 Clearly state what was saved
- 🔀 Route to validation if requested

## EXECUTION PROTOCOLS:

- 🎯 Confirm changes saved
- 💬 Offer validation check
- 🔀 Route to validation or complete
- 🚫 FORBIDDEN to skip confirmation

## CONTEXT BOUNDARIES:

- Edits applied in step e-03
- This is final edit mode step
- Validation is optional cross-mode integration
- Can complete without validation

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Edit Configuration

Read `editMode` from frontmatter to determine what was edited.

### 2. Confirm Changes Saved

"**Edits saved successfully.**

{If presentation edited:}
**Presentation outline updated:**
- File: {presentationFile path}
- Last modified: {current date}

{If questions edited:}
**Anticipated questions updated:**
- File: {questionsFile path}
- Last modified: {current date}

Your defense preparation documents have been updated."

### 3. Offer Validation

"**Would you like to validate your updated documents?**

Validation will:
- Check presentation completeness
- Verify questions coverage across all committee roles
- Assess overall readiness based on updated content
- Generate readiness report

**[V]** Yes, run validation
**[N]** No, edits complete

What would you like to do?"

Wait for user choice (V or N).

### 4. Handle Validation Choice

**IF V (Run validation):**

"**Running validation on updated documents...**"

Load, read entire file, then execute {validationStep}

**IF N (Skip validation):**

Proceed to step 5.

### 5. Mark Edit Mode Complete (if validation skipped)

**IF validation was skipped:**

Update both documents' frontmatter:
```yaml
lastStep: 'step-e-04-confirm'
lastModified: [current date]
editMode: null
```

"**Edit mode complete.**

Your defense documents have been updated and saved.

**Next steps:**
- Review your updated documents
- Run validation when ready to check readiness
- Resume practice sessions if needed

Good luck with your defense preparation."

**STOP - Do not load next step.**

**IF validation chosen:**

The validation step will handle completion and routing.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Changes confirmed and saved
- File paths provided
- Validation offered as option
- Routed correctly based on choice
- Edit mode marked complete (if no validation)
- Clear next steps provided

### ❌ SYSTEM FAILURE:

- Not confirming what was saved
- Not offering validation
- Auto-running validation without asking
- Not marking edit mode complete
- Leaving workflow in unclear state

**Master Rule:** Confirm saves, offer validation, route appropriately, complete cleanly.

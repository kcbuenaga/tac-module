---
name: 'step-e-01-load-assess'
description: 'Load existing defense documents and assess compliance'

nextStepFile: './step-e-02-select-target.md'
presentationOutput: '{thesis_artifacts}/defense/presentation-*.md'
questionsOutput: '{thesis_artifacts}/defense/anticipated-questions-*.md'
---

# Edit Mode - Step 1: Load & Assess

## STEP GOAL:

To load existing defense documents, verify they exist and are properly formatted, and prepare for editing.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, in Edit mode
- ✅ Be direct about document status
- ✅ Verify before allowing edits

### Step-Specific Rules:

- 🎯 Focus ONLY on loading and assessment
- 🚫 FORBIDDEN to make edits yet
- 💬 Check for proper structure and frontmatter
- 🔍 Identify most recent documents if multiple exist

## EXECUTION PROTOCOLS:

- 🎯 Search for defense documents
- 💾 Load and verify structure
- ✅ Confirm documents are edit-ready
- 🚫 FORBIDDEN to proceed without valid documents

## CONTEXT BOUNDARIES:

- Edit mode entry point
- Documents should exist from Create mode
- Validation comes after editing
- This is pre-edit check

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Search for Defense Documents

Search `{thesis_artifacts}/defense/` folder for:
- Files matching pattern `presentation-*.md`
- Files matching pattern `anticipated-questions-*.md`

**If NO files found:**

"**No defense documents found.**

You need to create defense preparation documents first using Create mode.

Run the defense-preparation workflow in Create mode to generate:
- Presentation outline
- Anticipated questions

**Cannot edit what doesn't exist.**"

**STOP - Do not proceed. Exit workflow.**

**If files found:**

List all found files with dates.

**If multiple files exist:**

"**Multiple defense document sets found:**

{List files with dates}

**Which set do you want to edit?**

Provide the date of the documents (e.g., 2026-01-28)"

Wait for user to specify date.

Select the file pair matching that date.

**If single file pair exists:**

Use that pair.

### 2. Load Documents

Read both:
- Presentation outline
- Anticipated questions

Extract frontmatter from both.

### 3. Assess Document Compliance

**Check presentation document:**
- Has `workflowType: defense-preparation`?
- Has `stepsCompleted` array?
- Has required sections (Opening, Research Question, Methodology, etc.)?

**Check questions document:**
- Has `workflowType: defense-preparation`?
- Has all 5 committee role sections?

**If documents are NOT compliant (missing frontmatter or sections):**

"**Documents found but not properly formatted.**

These documents don't appear to be from the defense-preparation workflow or are incomplete.

**Options:**
- Create new defense documents using Create mode
- Manually fix these documents first

Cannot edit non-compliant documents."

**STOP - Do not proceed.**

**If documents are compliant:**

Proceed to step 4.

### 4. Display Document Status

"**Defense documents loaded.**

**Presentation outline:** {file path}
**Anticipated questions:** {file path}

**Document status:**
- Created: {created date from frontmatter}
- Last modified: {lastModified from frontmatter}
- Sessions completed: {sessionCount}
- Current readiness score: {currentReadinessScore}/10
- Workflow complete: {workflowComplete}

Ready to edit."

### 5. Update Frontmatter

Update both documents' frontmatter:
```yaml
lastStep: 'step-e-01-load-assess'
lastModified: [current date]
```

### 6. Present MENU OPTIONS

Display: "**Select:** [C] Continue to Select Edit Target"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#6-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Documents found in correct location
- Compliance verified
- Most recent or user-selected documents loaded
- Status displayed clearly
- Ready for editing

### ❌ SYSTEM FAILURE:

- Not checking if documents exist
- Accepting non-compliant documents
- Not handling multiple file sets
- Proceeding without verification
- Not displaying document status

**Master Rule:** Find documents, verify compliance, confirm status. Don't edit invalid or missing documents.

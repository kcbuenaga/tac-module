---
name: 'step-e-03-edit-content'
description: 'Apply user-specified modifications to selected document(s)'

nextStepFile: './step-e-04-confirm.md'
presentationFile: '{loaded_from_step_e_01}'
questionsFile: '{loaded_from_step_e_01}'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Edit Mode - Step 3: Edit Content

## STEP GOAL:

To display selected document(s), gather user's edit requests, and apply modifications while maintaining structure and frontmatter.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, helping refine documents
- ✅ Apply edits as requested
- ✅ Maintain document structure

### Step-Specific Rules:

- 🎯 Focus ONLY on applying edits
- 🚫 FORBIDDEN to suggest unrequested changes
- 💬 Apply user's modifications precisely
- 🔒 Preserve frontmatter and structure

## EXECUTION PROTOCOLS:

- 🎯 Display current content
- 💾 Apply user-requested modifications
- ✅ Verify edits maintain structure
- 🚫 FORBIDDEN to skip user confirmation

## CONTEXT BOUNDARIES:

- Edit target selected in step e-02
- This is the actual editing step
- Confirmation happens in next step
- Maintain document integrity

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Edit Configuration

Read `editMode` from frontmatter to determine:
- `editTarget` (presentation | questions | both)

### 2. Display Current Content

**IF editTarget == "presentation":**

"**Current Presentation Outline:**

{Display full presentation content from {presentationFile}, excluding frontmatter}

**What would you like to change?**

Examples:
- \"Add talking point about X in Methodology section\"
- \"Remove the third bullet under Findings\"
- \"Rewrite Introduction to emphasize Y\"
- \"Add new section for limitations discussion\"

Describe your edits:"

**IF editTarget == "questions":**

"**Current Anticipated Questions:**

{Display full questions content from {questionsFile}, organized by committee role, excluding frontmatter}

**What would you like to change?**

Examples:
- \"Add question about X to External Examiner section\"
- \"Remove question 3 from Advisor section\"
- \"Modify Chair question about Y to ask about Z instead\"
- \"Add new section for additional practice questions\"

Describe your edits:"

**IF editTarget == "both":**

"**I'll guide you through editing both documents.**

First, let's edit the presentation outline, then the questions.

**Current Presentation Outline:**

{Display presentation content}

**What would you like to change in the presentation?**

(We'll edit questions next)"

Wait for user to describe edits.

### 3. Apply Edits to Presentation (if applicable)

Based on user's description:

- Add content where requested
- Remove content where requested
- Modify existing content as specified
- Maintain section structure (keep ## Level 2 headers)
- Preserve frontmatter completely

**After applying edits:**

"**Presentation edits applied:**

{Summarize what was changed}

{If editTarget == "both":}
Next, let's edit the questions."

### 4. Display and Edit Questions (if applicable)

**IF editTarget == "questions" OR editTarget == "both":**

{If already displayed in step 2, skip display}

{If editTarget == "both", now display questions}

"**Current Anticipated Questions:**

{Display questions content}

**What would you like to change in the questions?**"

Wait for user to describe edits.

Apply edits to questions:
- Add questions to specified committee role section
- Remove questions as requested
- Modify questions as specified
- Maintain committee role structure
- Preserve frontmatter

**After applying edits:**

"**Questions edits applied:**

{Summarize what was changed}"

### 5. Update lastModified

Update frontmatter in edited document(s):
```yaml
lastModified: [current date]
editHistory:
  - date: [current date]
    changes: [brief description of edits]
```

### 6. Update Frontmatter

Update appropriate document(s):
```yaml
lastStep: 'step-e-03-edit-content'
lastModified: [current date]
```

### 7. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Confirm Changes"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#7-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Current content displayed clearly
- User described desired edits
- Edits applied as requested
- Document structure maintained
- Frontmatter preserved
- Changes summarized
- Ready for confirmation

### ❌ SYSTEM FAILURE:

- Not showing current content first
- Making unrequested changes
- Breaking document structure
- Modifying frontmatter incorrectly
- Not summarizing changes
- Skipping user input

**Master Rule:** Show content, get edit requests, apply precisely, maintain structure, summarize changes.

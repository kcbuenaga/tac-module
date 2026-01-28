---
name: 'step-02-text-input'
description: 'Collect English academic text from student'

nextStepFile: './step-03-analyze.md'
outputFile: '{thesis_artifacts}/source-explanations/explanation-{date}.md'
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 2: English Text Input

## STEP GOAL:

To collect the English academic text from the student and append it to the output document.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, collecting the text to analyze
- ✅ Be patient and clear with instructions
- ✅ Validate that text was received
- ✅ This is data collection - no analysis yet

### Step-Specific Rules:

- 🎯 Focus ONLY on collecting the English text
- 🚫 FORBIDDEN to analyze or explain yet
- 💬 Clear instructions for pasting text
- 🎯 Validate input received before proceeding

## EXECUTION PROTOCOLS:

- 🎯 Request English text from student
- 💾 Append received text to output document
- 📖 Confirm receipt and proceed
- 🚫 No analysis or explanation in this step

## CONTEXT BOUNDARIES:

- Available: Output document from step-01
- Focus: Text collection only
- Limits: No analysis yet
- Dependencies: Output document exists

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`

### 2. Request English Text

Display in {preferred_tac_language}:

"**Please paste your English academic text below.**

You can paste:
- An abstract
- An excerpt or section
- A full paper

**Just paste the text and I'll analyze it for you.**

[Waiting for your text...]"

### 3. Receive and Validate Text

Wait for student to provide text.

**If no text provided or empty:**
- Display: "I didn't receive any text. Please paste the English academic text you'd like me to explain."
- Wait again
- Loop until valid text received

**If text received:**
- Confirm: "**Text received!** I'll now analyze this and explain it in Portuguese."

### 4. Append Text to Output Document

Load {outputFile} and append to the "Original English Text" section:

```markdown
## Original English Text

**Source Type:** {determine if abstract/excerpt/full paper based on length}

**Text:**

{English text provided by student}

---
```

Update frontmatter:
```yaml
sourceType: '{abstract/excerpt/full paper}'
```

### 5. Present MENU OPTIONS

Display: **[C] Continue to Analysis**

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#5-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- English text collected from student
- Validated that text is not empty
- Appended text to "Original English Text" section
- Updated sourceType in frontmatter
- Confirmed receipt with student
- Ready to proceed to analysis

### ❌ SYSTEM FAILURE:

- Not waiting for text input
- Proceeding with empty/no text
- Starting analysis (forbidden in this step)
- Not appending to output document
- Not validating input

**Master Rule:** This is text collection only. Request text, validate received, append to document, confirm, proceed. No analysis yet.

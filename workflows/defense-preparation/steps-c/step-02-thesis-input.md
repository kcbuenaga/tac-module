---
name: 'step-02-thesis-input'
description: 'Gather thesis via file path or paste text'

nextStepFile: './step-03-thesis-review.md'
presentationOutput: '{thesis_artifacts}/defense/presentation-{currentDate}.md'
questionsOutput: '{thesis_artifacts}/defense/anticipated-questions-{currentDate}.md'
---

# Step 2: Thesis Input

## STEP GOAL:

To gather the student's completed thesis via file path OR pasted text, validate the input is substantial, and store it for committee review.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, a Defense Prep Coach
- ✅ Be direct - if thesis input is inadequate, say so
- ✅ Don't waste time with trivial input

### Step-Specific Rules:

- 🎯 Focus ONLY on gathering thesis input
- 🚫 FORBIDDEN to analyze thesis yet - that's next step
- 💬 Provide both input options clearly
- ✅ Validate input is substantial before proceeding

## EXECUTION PROTOCOLS:

- 🎯 Offer dual input method (file path OR paste)
- 💾 Store thesis content in frontmatter of both output files
- ✅ Validate thesis is substantial (not empty or trivial)
- 🚫 FORBIDDEN to proceed with invalid input

## CONTEXT BOUNDARIES:

- Output files created in step 01
- Thesis not yet analyzed
- This is data gathering only
- Analysis happens in next step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Request Thesis Input

"**I need your thesis to prepare you for defense.**

You have two options:

**[F]** Provide file path to your thesis document
**[P]** Paste your thesis text directly

Which method do you prefer?"

Wait for user to select F or P.

### 2. Handle File Path Input (if F selected)

"**Provide the full file path to your thesis document.**"

Wait for user to provide path.

Read the file at the provided path.

**If file not found or cannot be read:**
"**File not found or cannot be read.**

Please check the path and try again, or paste your thesis text instead."

Return to step 1.

**If file found:**
Extract the content.

### 3. Handle Paste Input (if P selected)

"**Paste your thesis text below.**

(This can be the full thesis or substantial excerpts including your introduction, methodology, key findings, and conclusions.)"

Wait for user to paste content.

### 4. Validate Thesis Input

Check thesis content:

**If content is empty or less than 500 characters:**
"**That's not substantial enough for defense preparation.**

I need your actual thesis content - introduction, research question, methodology, findings, conclusions. Not a summary or outline.

Please provide your full thesis or substantial excerpts."

Return to step 1.

**If content appears to be just a title or abstract:**
"**That's just the title/abstract.**

I need the full thesis content to prepare you. Provide the complete document or at least the core chapters (introduction, methodology, results, discussion, conclusion)."

Return to step 1.

**If content is substantial (500+ characters, appears to be thesis content):**
Proceed to step 5.

### 5. Store Thesis Content

Update frontmatter in {presentationOutput}:
```yaml
thesisContent: |
  [full thesis text]
thesisTitle: [extract title from content if identifiable, or leave empty for user to provide later]
```

Update frontmatter in {questionsOutput}:
```yaml
thesisContent: |
  [full thesis text]
thesisTitle: [extract title if identifiable]
```

### 6. Confirm Receipt

"**Thesis received.**

{If title was extracted:}
Title: {thesisTitle}

{If no clear title:}
I'll need your thesis title later.

Content length: approximately {word count} words.

Next, I'll review your thesis to understand your arguments, methodology, and findings. This will take a moment."

### 7. Update Frontmatter

Update `stepsCompleted` in both output files:
```yaml
stepsCompleted: ['step-01-init', 'step-02-thesis-input']
lastStep: 'step-02-thesis-input'
lastModified: [current date]
```

### 8. Present MENU OPTIONS

Display: "**Select:** [C] Continue to Thesis Review"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#8-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Thesis content gathered via file path OR paste
- Content validated as substantial (500+ characters)
- Thesis stored in frontmatter of both output files
- Title extracted if identifiable
- Ready to proceed to thesis review

### ❌ SYSTEM FAILURE:

- Accepting trivial or empty input
- Not offering both input methods
- Not validating content before proceeding
- Not storing thesis in frontmatter
- Analyzing thesis before next step

**Master Rule:** Get substantial thesis content, validate it, store it, proceed. Don't accept inadequate input.

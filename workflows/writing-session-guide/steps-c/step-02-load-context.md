---
name: 'step-02-load-context'
description: 'Load thesis outline and optional TAC context'

nextStepFile: './step-03-select-section.md'
joaoSidecarFile: '{project-root}/_bmad/_memory/joao-sidecar/memories.md'
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
thesisArtifacts: '{thesis_artifacts}'
---

# Step 2: Load Context

## STEP GOAL:

To load the student's thesis outline and optional prior TAC context (topic discovery, research question, literature review).

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are João, loading context to provide relevant guidance
- ✅ Outline is REQUIRED (João's workflow OR uploaded)
- ✅ TAC context is OPTIONAL but enhances prompts
- ✅ This is context loading - explanation comes in later steps

### Step-Specific Rules:

- 🎯 Focus ONLY on loading context
- 🚫 FORBIDDEN to start writing guidance yet
- 💬 Accept uploaded outline if João's not found
- 🎯 Log uploaded outlines in João's memory

## EXECUTION PROTOCOLS:

- 🎯 Load João's Thesis Structure & Outline OR accept upload
- 💾 Load optional TAC context (topic, research question, lit review)
- 📖 Log all loaded context in João's sidecar
- 🚫 Simple [C] Continue menu

## CONTEXT BOUNDARIES:

- Available: TAC config, thesis artifacts folder
- Focus: Context loading only
- Limits: No writing guidance yet
- Dependencies: Session initialized (step-01)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`
- `thesis_artifacts`

### 2. Attempt to Load João's Thesis Structure & Outline

Search for João's outline in:
`{thesis_artifacts}/thesis-outline/thesis-outline-*.md`

**If found:**
- Read the outline completely
- Display: "✓ **Thesis outline loaded** from João's Thesis Structure & Outline workflow"
- Note: "I have your complete thesis structure with coaching questions for each section"
- Proceed to step 3

**If NOT found:**
- Display: "I couldn't find João's Thesis Structure & Outline in your thesis artifacts."
- Proceed to step 2a (request upload)

### 2a. Request Outline Upload (If João's Not Found)

Display in {preferred_tac_language}:

"**No problem!** You can upload your thesis outline here.

Please paste your thesis outline below. Include:
- All chapters and sections
- Brief description of each section (if available)
- Any notes about what each section should cover

**Tip:** If you have an outline in another format, paste the text version here. I'll work with whatever structure you have.

[Waiting for your outline...]"

Wait for student to provide outline.

**If no outline provided or empty:**
- Display: "I need your thesis outline to provide contextual writing guidance. Please paste your outline."
- Wait again
- Loop until valid outline received

**If outline received:**
- Display: "**✓ Outline received!** I'll use this to provide contextual prompts for your writing."
- Log uploaded outline to {joaoSidecarFile} in "Uploaded Outlines" section with date
- Proceed to step 3

### 3. Load Optional TAC Context

Attempt to load prior TAC workflow outputs (these enhance prompts but are not required):

**A. Topic Discovery:**
Search for: `{thesis_artifacts}/topic-discovery/validation-*.md`
If found: Load and note key insights (selected topic, draft research question)

**B. Research Question:**
Search for: `{thesis_artifacts}/research-question/research-question-*.md`
If found: Load and note refined research question

**C. Literature Review:**
Search for: `{thesis_artifacts}/literature-review/literature-review-*.md`
If found: Load and note key themes and concepts

**Display loaded context:**

"**Context loaded:**

✓ **Thesis Outline:** [João's workflow OR uploaded]
{If topic discovery found:} ✓ **Topic:** {selected topic}
{If research question found:} ✓ **Research Question:** {refined question}
{If literature review found:} ✓ **Literature Review:** {theme count} themes, {source count} sources

{If only outline loaded:} ℹ️ **Optional context:** I didn't find topic discovery, research question, or literature review in your thesis artifacts. No problem - I can still provide guidance based on your outline!"

### 4. Update João's Sidecar with Loaded Context

Update {joaoSidecarFile} session state:

```markdown
**Context Loaded:**
- Outline Source: [João's workflow / Uploaded on {date}]
- Topic Discovery: [Yes/No]
- Research Question: [Yes/No]
- Literature Review: [Yes/No]
**Steps Completed:** ['step-01-init', 'step-02-load-context']
**Last Step:** step-02-load-context
```

### 5. Present MENU OPTIONS

Display: **[C] Continue to Section Selection**

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#5-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Outline loaded (João's OR uploaded)
- Optional TAC context loaded if available
- Uploaded outlines logged to João's sidecar
- Context summary displayed to student
- Session state updated with loaded context
- Ready to proceed to section selection

### ❌ SYSTEM FAILURE:

- Not attempting to load João's outline first
- Not offering outline upload option
- Proceeding without any outline
- Not logging uploaded outlines
- Not loading optional TAC context
- Not updating session state

**Master Rule:** Outline is REQUIRED (João's or uploaded). TAC context is OPTIONAL. Always try João's first, then offer upload as alternative.

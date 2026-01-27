---
name: 'step-02-input-discovery'
description: 'Discover and load Topic Discovery validation document with draft research question'

nextStepFile: './step-03-generate-alternatives.md'
outputFile: '{thesis_artifacts}/research-question/research-question-{date}.md'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'

# Input discovery
topicDiscoveryFolder: '{thesis_artifacts}/topic-discovery'
validationFilePattern: 'validation-*.md'
---

# Step 2: Input Discovery

## STEP GOAL:

To discover and load the Topic Discovery validation document containing the draft research question, extract key information, and present it to the student for refinement.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, an Academic Advisor specializing in research question formation
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You help students understand where their draft question came from
- ✅ Student brings their topic work, you guide refinement

### Step-Specific Rules:

- 🎯 Focus ONLY on finding and loading the draft question
- 🚫 FORBIDDEN to generate new research questions yet
- 💬 Approach: Detective work to find inputs, clear presentation of findings
- 🎯 This is input discovery - load existing work only

## EXECUTION PROTOCOLS:

- 🎯 Search for Topic Discovery validation document
- 💾 Extract draft question and context
- 📖 Append findings to output document
- 🚫 No question generation in this step

## CONTEXT BOUNDARIES:

- Available: TAC config, thesis artifacts folder, output document
- Focus: Finding and loading existing draft question
- Limits: No new content generation
- Dependencies: Topic Discovery workflow should be complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`
- `thesis_artifacts`

### 2. Search for Topic Discovery Validation Document

Search {topicDiscoveryFolder} for files matching {validationFilePattern}

**Pattern:** `{thesis_artifacts}/topic-discovery/validation-*.md`

**If multiple files found:**
- List files by date (most recent first)
- Display in {preferred_tac_language}:
  "**Found multiple Topic Discovery validation documents:**

  [1] validation-2026-01-20.md (6 days ago)
  [2] validation-2026-01-15.md (11 days ago)

  Which document should I use? [Enter number or 'q' to quit]"
- Wait for user selection
- Load selected file

**If exactly one file found:**
- Display in {preferred_tac_language}: "**Found Topic Discovery validation document:** {filename}"
- Load the file

**If NO files found:**
- Display in {preferred_tac_language}:
  "**No Topic Discovery validation document found.**

  I couldn't find a validation document in: {topicDiscoveryFolder}

  The Research Question Designer needs a draft research question from Topic Discovery as a starting point.

  **What would you like to do?**

  **[T]** Run Topic Discovery workflow first (recommended)
  **[M]** Manually provide a topic and draft question
  **[Q]** Quit and return later

  Please select: [T]opic Discovery / [M]anual / [Q]uit"
- Wait for selection
- **If T:** Display: "Please run the Topic Discovery & Validation workflow first using: `/tac:workflows:topic-discovery-validation` and then return to this workflow." STOP here.
- **If M:** Continue to step 3 (manual input)
- **If Q:** Display: "No problem! Return when you have a Topic Discovery validation document." STOP here.

### 3. Extract Key Information from Validation Document

**If document was found and loaded:**

Read the validation document and extract:
- `topic` (the validated topic title)
- `selectedAngle` (which angle was chosen)
- `draftResearchQuestion` (the draft question from the selected angle)
- `scope` (boundaries and focus)
- `field` (academic field or domain)
- `validationDate` (when topic was validated)

**If manual input ([M] was selected):**

Display in {preferred_tac_language}:
"**Manual Input Mode**

I'll need some information to get started. Please provide:

1. Your validated thesis topic (one sentence):
[Wait for input]

2. Your draft research question:
[Wait for input]

3. Your field of study:
[Wait for input]

4. Brief scope description (what's IN and OUT):
[Wait for input]"

Collect responses and use them as extracted information.

### 4. Append Draft Question to Output Document

Load {outputFile} and append to the "Draft Question (from Topic Discovery)" section:

```markdown
## Draft Question (from Topic Discovery)

**Topic:** {topic}

**Original Draft Question:**
{draftResearchQuestion}

**Source:** Topic Discovery & Validation completed on {validationDate}

**Field:** {field}

**Scope Context:**
{scope}

---
```

Update frontmatter:
```yaml
topic: '{topic}'
draftQuestion: '{draftResearchQuestion}'
```

### 5. Present Findings to Student

Display in {preferred_tac_language}:

"**Your Starting Point**

I've loaded your draft research question from Topic Discovery:

**Topic:** {topic}

**Draft Question:**
*{draftResearchQuestion}*

**Field:** {field}

This draft question gives us a solid starting point. In the next steps, I'll help you:
1. Generate 3-5 alternative formulations to explore different approaches
2. Evaluate each against research criteria (researchability, scope, contribution)
3. Select and refine the best formulation for your thesis

Ready to explore alternatives?"

### 6. Update stepsCompleted

Update {outputFile} frontmatter:
```yaml
stepsCompleted: ['step-01-init', 'step-02-input-discovery']
lastStep: 'step-02-input-discovery'
```

### 7. Present MENU OPTIONS

Display: **[C] Continue to Generate Alternatives**

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Update frontmatter stepsCompleted, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#7-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Searched for Topic Discovery validation document successfully
- Found and loaded validation document OR handled missing document gracefully
- Extracted all key information (topic, draft question, field, scope)
- Appended draft question section to output document
- Updated frontmatter with topic and draftQuestion
- Presented findings clearly to student
- stepsCompleted updated
- Ready to proceed to alternatives generation

### ❌ SYSTEM FAILURE:

- Not searching for validation document
- Crashing when document not found (should handle gracefully)
- Not extracting key information from validation document
- Not appending to output document
- Generating new research questions (forbidden in this step)
- Not updating frontmatter
- Not handling manual input option
- Not updating stepsCompleted

**Master Rule:** This is input discovery. Find and load existing draft question. Handle missing inputs gracefully. No content generation yet.

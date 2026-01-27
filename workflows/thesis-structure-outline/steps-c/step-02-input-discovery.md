---
name: 'step-02-input-discovery'
description: 'Discover handoff files from Carla/Patricia OR gather topic directly from student'

nextStepFile: './step-03-thesis-type.md'
outputFile: '{thesis_artifacts}/outlines/thesis-outline-{date}.md'

# Input discovery
handoffFolder: '{thesis_artifacts}/handoffs'
topicHandoffPattern: 'topic-discovery-handoff-*.md'
litReviewHandoffPattern: 'literature-review-handoff-*.md'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 2: Input Discovery

## STEP GOAL:

To discover handoff files from prior workflows (Carla's Topic Discovery and Patricia's Literature Review Builder) OR gather topic and research question directly from the student.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are João, a Teaching Assistant
- ✅ You need to understand the student's thesis topic before creating structure
- ✅ Students may have completed prior workflows with Carla/Patricia, or may be starting standalone

### Step-Specific Rules:

- 🎯 Focus ONLY on discovering/gathering topic and research question
- 🚫 FORBIDDEN to start creating outline structure yet
- 💬 Approach: Flexible - support workflow chaining OR standalone usage
- 🎯 This is input gathering - outline work starts in step-03

## EXECUTION PROTOCOLS:

- 🎯 Search for handoff files from prior workflows
- 💾 If found, load topic and research question from handoffs
- 📖 If not found, ask student to provide topic and research question
- 🚫 FORBIDDEN to proceed without topic and research question

## CONTEXT BOUNDARIES:

- Available: TAC config, handoff folder
- Focus: Discover or gather thesis topic and research question
- Limits: No outline creation yet
- Dependencies: None - this step establishes foundation for all future steps

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `thesis_artifacts`

### 2. Explain Input Options

Display in {preferred_tac_language}:

"**Let's start by understanding your thesis topic.**

I can work with you in two ways:

1. **Use your work from Carla and Patricia** - If you've completed Topic Discovery and Literature Review Builder, I can load that information
2. **Provide your topic directly** - If you already know your topic and research question, you can tell me now

Let me check if I can find your prior work..."

### 3. Search for Handoff Files

Search {handoffFolder} for:
- Topic Discovery handoff: Files matching {topicHandoffPattern}
- Literature Review handoff: Files matching {litReviewHandoffPattern}

**Display results:**

**If topic handoff found:**
"✅ I found your Topic Discovery work from Carla: [filename]"

**If lit review handoff found:**
"✅ I found your Literature Review from Patricia: [filename]"

**If neither found:**
"⚠️ I didn't find prior workflow files. That's fine - you can provide your topic directly."

### 4. Ask User Preference

Display choice in {preferred_tac_language}:

"**How would you like to proceed?**

**[U]se Prior Work** - Load from Carla/Patricia's workflows (if found)
**[P]rovide Own** - Tell me your topic and research question directly

Please select: [U]se Prior Work / [P]rovide Own"

**Wait for user response.**

### 5A. IF User Selects [U]se Prior Work

**Validate handoff files exist:**
- If topic handoff NOT found: "I can't find Carla's handoff file. Please select [P]rovide Own instead."
- If topic handoff found: Proceed to load

**Load topic handoff file:**
- Read frontmatter fields: `topic`, `researchQuestion`, `selectedAngle`
- Store mentally for next step

**Load lit review handoff (if exists):**
- Read frontmatter fields: `themes`, `sourcesCount`
- Note availability for Chapter 2 planning

**Confirm loaded information:**

"**Loaded from your prior work:**

**Topic:** [topic from handoff]
**Research Question:** [researchQuestion from handoff]
**Literature Review:** [Available/Not Available]

Does this look correct? [Y]es / [N]o - provide different topic"

**If Yes:** Proceed to step 6
**If No:** Go to 5B (gather directly)

### 5B. IF User Selects [P]rovide Own OR Loaded Info Incorrect

Ask student directly in {preferred_tac_language}:

"**Please provide your thesis information:**

**1. What is your thesis topic?**
(The general subject area you're researching)

**2. What is your research question?**
(The specific question your thesis will answer)

**Optional: Do you have a completed literature review?** [Y]es / [N]o"

**Wait for student responses.**

**Validate responses:**
- Topic must not be empty
- Research question must not be empty
- If student says they have lit review but no handoff file exists, note for later reference

### 6. Store Information in Output File

Update {outputFile} frontmatter with:
```yaml
topic: '[topic from handoff or user]'
researchQuestion: '[research question from handoff or user]'
litReviewAvailable: [true/false based on handoff existence]
inputSource: '[prior-workflows/user-provided]'
```

Write to output file body:
```markdown
## Thesis Topic

**Topic:** [topic]

**Research Question:** [research question]

**Input Source:** [Loaded from Carla's Topic Discovery / Provided by student]
```

Update frontmatter stepsCompleted:
```yaml
stepsCompleted: ['step-01-init', 'step-02-input-discovery']
lastStep: 'step-02-input-discovery'
```

### 7. Confirm and Preview Next Steps

Display in {preferred_tac_language}:

"**Topic Confirmed ✅**

**Your thesis topic:** [topic]

**Research question:** [research question]

**Next steps in this workflow:**
- Discover your thesis type (empirical research, case study, etc.)
- Plan chapter structure adapted to your thesis type
- Break down chapters into sections with coaching questions
- Plan your methodology approach

Ready to continue?"

### 8. Present MENU OPTIONS

Display: **[C] Continue to Thesis Type Discovery**

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Update frontmatter stepsCompleted, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Handoff files searched in correct folder
- User choice presented (Use Prior OR Provide Own)
- Topic and research question gathered (from handoff OR directly)
- Lit review availability determined
- Information stored in output file frontmatter AND body
- stepsCompleted updated
- User understands next steps

### ❌ SYSTEM FAILURE:

- Not searching for handoff files
- Not offering both options (prior work vs provide own)
- Proceeding without topic or research question
- Not storing information in output file
- Not updating stepsCompleted
- Hardcoding paths instead of using variables

**Master Rule:** Input discovery is flexible - support both workflow chaining AND standalone usage. Never assume which path student will take.

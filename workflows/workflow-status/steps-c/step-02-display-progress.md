---
name: 'step-02-display-progress'
description: 'Display thesis progress summary based on collected state data'
nextStepFile: './step-03-recommend.md'
---

# Step 2: Display Progress

## STEP GOAL:

To present a clear, structured summary of the user's thesis progress across all TAC workflows based on data collected in step 1.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a TAC workflow navigator presenting progress clearly
- ✅ Format data into readable, organized display
- ✅ Clear and concise communication style (utility workflow)

### Step-Specific Rules:

- 🎯 Focus ONLY on displaying progress data
- 🚫 FORBIDDEN to make recommendations yet - that's step 3
- 💬 Present structured, organized summary
- 🚫 FORBIDDEN to skip grouping by status

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Use state data from step 1 (in memory)
- 📖 This is an auto-proceed step (no user interaction)
- 🚫 FORBIDDEN to halt - immediately proceed to next step after display

## CONTEXT BOUNDARIES:

- Available context: State data from step 1
- Focus: Format and display progress clearly
- Limits: Display only, no analysis or recommendations yet
- Dependencies: Requires step 1 completion

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Handle Error States First

**If directory_status = "NO_DIRECTORY":**

Display:
```
**Thesis Progress Status**

No thesis artifacts directory found. Have you run any TAC workflows yet?

**Get started:** Run `/topic-discovery-validation` to begin your thesis journey - this is THE core workflow that breaks paralysis.
```

Then proceed to step 3.

**If directory_status = "EMPTY":**

Display:
```
**Thesis Progress Status**

No TAC workflow files detected. Your thesis journey hasn't started yet.

**Get started:** Run `/topic-discovery-validation` to begin - this validates your topic and confirms library access.
```

Then proceed to step 3.

### 2. Display Overall Progress Summary

**If workflows found:**

Display header:
```
**Thesis Progress Status**

📊 **Overall Progress:** Phase {X} of 5 - {Phase Name}
```

**Phase names:**
- Phase 0: Not started
- Phase 1: Topic & Question Definition
- Phase 2: Research & Literature
- Phase 3: Structure & Planning
- Phase 4: Writing
- Phase 5: Defense Preparation

**Example:**
```
📊 **Overall Progress:** Phase 2 of 5 - Research & Literature
```

### 3. Display Workflows by Status

Group workflows into three categories:

**✅ Completed Workflows**

List all completed workflows with completion date:
```
✅ **Completed:**
- Topic Discovery Validation (completed 2026-01-24)
- Research Question Designer (completed 2026-01-25)
```

**🔄 In Progress Workflows**

List workflows with partial completion:
```
🔄 **In Progress:**
- Literature Review Builder (Step 4 of 11) - last worked on 2026-01-26
```

**⭕ Not Started Workflows**

List core workflows not yet begun:
```
⭕ **Not Started:**
- Thesis Structure & Outline
- Writing Session Guide
- Defense Preparation
```

**Supporting workflows (if used):**
```
🛠️ **Supporting Workflows Used:**
- Source Explainer (used 3 times)
- Citation Helper (used 5 times)
```

### 4. Display Summary Statistics

Show quick stats:
```
**Summary:**
- Total core workflows: 6
- Completed: 2
- In progress: 1
- Remaining: 3
```

### 5. Auto-Proceed to Recommendation

Display: "**Analyzing next steps...**"

Immediately load, read entire file, then execute `{nextStepFile}`

#### Menu Handling Logic:

- This is an auto-proceed step with no user interaction
- After displaying progress, immediately load step 3 for recommendation
- Data continues to be available in memory for step 3

#### EXECUTION RULES:

- This is an autonomous display step with no user choices
- Proceed directly to next step after display
- No halting or menu display

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Error states handled appropriately
- Progress displayed in clear, structured format
- Workflows grouped by status (completed, in-progress, not-started)
- Overall phase displayed accurately
- Summary statistics provided
- Auto-proceeded to step 3

### ❌ SYSTEM FAILURE:

- Halting for user input (this is autonomous)
- Making recommendations in this step (that's step 3)
- Displaying unorganized data dump
- Not grouping by status
- Skipping error state handling

**Master Rule:** Display progress clearly and concisely, then immediately proceed to step 3 for intelligent recommendation.

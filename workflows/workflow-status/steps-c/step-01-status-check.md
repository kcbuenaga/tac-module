---
name: 'step-01-status-check'
description: 'Scan thesis_artifacts directory for all TAC workflow files and collect state data'
nextStepFile: './step-02-display-progress.md'
tacWorkflowSequence: '../data/tac-workflow-sequence.md'
---

# Step 1: Status Check

## STEP GOAL:

To scan the thesis_artifacts directory for all TAC workflow files, read their state (frontmatter, sidecars), and collect structured progress data.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a TAC workflow navigator and progress analyst
- ✅ You scan files autonomously and collect state data
- ✅ This is a read-only operation - no files modified

### Step-Specific Rules:

- 🎯 Focus ONLY on scanning and data collection
- 🚫 FORBIDDEN to display results yet - that's step 2
- 💬 Silent autonomous operation - collect data, proceed
- 🚫 FORBIDDEN to skip files or make assumptions

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Store collected data in memory for step 2
- 📖 This is an auto-proceed step (no user interaction)
- 🚫 FORBIDDEN to halt - immediately proceed to next step after completion

## CONTEXT BOUNDARIES:

- Available context: {thesis_artifacts} directory path from TAC config
- Focus: Read all TAC workflow files and extract state
- Limits: Read-only operations, no file modifications
- Dependencies: Requires TAC config loaded

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Verify thesis_artifacts Directory

Check if `{thesis_artifacts}` directory exists.

**If directory does not exist:**
- Store error state: "NO_DIRECTORY"
- Proceed to step 2 (will display error message)

**If directory exists:**
- Continue to file scanning

### 2. Scan for TAC Workflow Files

Search `{thesis_artifacts}` directory for all .md files using Glob:

```
{thesis_artifacts}/**/*.md
```

**Collect all markdown files that might be TAC workflow outputs.**

### 3. Extract State from Each File

For each .md file found:

**Read frontmatter YAML:**
- `workflowType` - Identifies which TAC workflow this is from
- `stepsCompleted` - Array of completed steps
- `lastStep` - Last step executed
- `date` - When last modified
- `status` - Workflow status (if present)

**Identify workflow:**
- topic-discovery-validation
- research-question-designer
- literature-review-builder
- thesis-structure-outline
- writing-session-guide
- defense-preparation
- source-explainer (supporting)
- citation-helper (supporting)

**Determine status:**
- **Completed:** Has completion marker or all steps finished
- **In Progress:** Has stepsCompleted but not complete
- **Unknown:** No frontmatter or can't determine

**Handle malformed files:**
- Skip files without frontmatter
- Skip files without workflowType
- Don't crash on parse errors

### 4. Check for Sidecar Files

Search `{thesis_artifacts}` for .sidecar.yaml files:

```
{thesis_artifacts}/**/*.sidecar.yaml
```

**If sidecar files found:**
- Read workflow state from sidecars
- Merge with frontmatter data

### 5. Compile Structured State Data

Organize collected data into structure:

```json
{
  "directory_status": "EXISTS" | "NO_DIRECTORY" | "EMPTY",
  "workflows_found": [
    {
      "name": "topic-discovery-validation",
      "status": "completed" | "in_progress" | "not_started",
      "steps_completed": 10,
      "total_steps": 10,
      "last_modified": "2026-01-24",
      "file_path": "..."
    },
    ...
  ],
  "total_workflows": 8,
  "completed_count": 2,
  "in_progress_count": 1,
  "not_started_count": 5,
  "core_workflows_completed": ["topic-discovery-validation", "research-question-designer"],
  "supporting_workflows_completed": []
}
```

### 6. Calculate Overall Thesis Phase

Based on core workflows completed:

- **Phase 0:** No workflows started
- **Phase 1:** Topic & Question (topic-discovery or research-question completed)
- **Phase 2:** Research (literature-review completed)
- **Phase 3:** Structure (thesis-structure completed)
- **Phase 4:** Writing (writing-session in progress or completed)
- **Phase 5:** Defense (defense-preparation in progress or completed)

Store phase in data structure.

### 7. Auto-Proceed to Next Step

Display: "**Proceeding to display progress...**"

Immediately load, read entire file, then execute `{nextStepFile}`

#### Menu Handling Logic:

- This is an auto-proceed step with no user interaction
- After data collection completes, immediately load next step
- State data is stored in memory for step 2 to access

#### EXECUTION RULES:

- This is an autonomous scanning step with no user choices
- Proceed directly to next step after completion
- No halting or menu display

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- thesis_artifacts directory checked
- All TAC workflow files scanned
- State data extracted from frontmatter and sidecars
- Malformed files handled gracefully
- Overall phase calculated
- Structured data compiled in memory
- Auto-proceeded to step 2

### ❌ SYSTEM FAILURE:

- Halting for user input (this is autonomous)
- Displaying results in this step (that's step 2)
- Crashing on malformed files
- Not proceeding to next step
- Modifying any files (read-only operation)

**Master Rule:** This is a silent, autonomous scanning step. Collect data and immediately proceed to step 2 for display.

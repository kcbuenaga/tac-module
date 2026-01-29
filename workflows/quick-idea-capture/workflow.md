---
name: quick-idea-capture
description: Quickly save random thoughts/insights before they're forgotten
web_bundle: true
---

# Quick Idea Capture

**Goal:** Ultra-fast idea capture workflow for thesis students - capture thoughts instantly before forgetting, append to running ideas file.

**Your Role:** In addition to your name, communication_style, and persona, you are also a helpful idea capture assistant supporting thesis students. This is a brief utility interaction focused on speed and minimal friction. You provide clear, prescriptive prompts to ensure fast idea capture.

---

## WORKFLOW ARCHITECTURE

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file executed one at a time
- **Just-In-Time Loading**: Only the current step file is loaded - never load future steps until directed
- **Sequential Enforcement**: Follow step sequences exactly, no skipping or optimization
- **Autonomous Flow**: Steps auto-proceed without menus (ultra-fast execution)
- **Non-Document Workflow**: No stepsCompleted tracking - ideas file persists across workflow runs

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all numbered sections in order, never deviate
3. **AUTO-PROCEED**: Most steps auto-proceed to next step
4. **WAIT FOR INPUT**: Only halt when explicitly required (idea text, optional tag)
5. **FILE OPERATIONS**: Use File I/O for reading/writing ideas file

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip steps or optimize the sequence
- 🎯 **ALWAYS** follow the exact instructions in the step file
- 🚀 **ALWAYS** maintain ultra-fast execution (< 2 minutes total)
- 📋 **NEVER** create mental todo lists from future steps

---

## INITIALIZATION SEQUENCE

### 1. TAC Module Configuration Loading

Load and read full config from {project-root}/_bmad/tac/config.yaml and resolve:

- `project_name`, `output_folder`, `user_name`, `communication_language`, `document_output_language`, `thesis_artifacts`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-init.md` to begin the idea capture workflow.

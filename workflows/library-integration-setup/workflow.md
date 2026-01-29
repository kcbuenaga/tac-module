---
name: library-integration-setup
description: Configure CAPES library credentials and database access for TAC workflows
web_bundle: true
---

# Library Integration Setup

**Goal:** Configure CAPES Portal de Periódicos credentials for first-time users to enable library database access in TAC workflows.

**Your Role:** In addition to your name, communication_style, and persona, you are also a helpful credential setup assistant guiding users through CAPES library configuration. This is a quick, focused setup process. You provide clear, prescriptive instructions to ensure successful credential configuration.

---

## WORKFLOW ARCHITECTURE

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file executed one at a time
- **Just-In-Time Loading**: Only the current step file is loaded - never load future steps until directed
- **Sequential Enforcement**: Follow step sequences exactly, no skipping or optimization
- **Autonomous Flow**: Steps auto-proceed without menus (except retry/exit in troubleshooting)
- **Non-Document Workflow**: No output file tracking - this is a configuration workflow

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all numbered sections in order, never deviate
3. **AUTO-PROCEED**: Most steps auto-proceed to next step
4. **WAIT FOR INPUT**: Only halt when explicitly required (credentials, retry decision)
5. **MCP INTEGRATION**: Use capes_test_connection tool with precise parameters
6. **ERROR HANDLING**: Route to troubleshooting on connection failure

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip steps or optimize the sequence
- 🎯 **ALWAYS** follow the exact instructions in the step file
- 🔧 **ALWAYS** use capes_test_connection MCP tool for testing credentials
- 📋 **NEVER** create mental todo lists from future steps

---

## INITIALIZATION SEQUENCE

### 1. TAC Module Configuration Loading

Load and read full config from {project-root}/_bmad/tac/config.yaml and resolve:

- `project_name`, `output_folder`, `user_name`, `communication_language`, `document_output_language`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-init.md` to begin the credential setup workflow.

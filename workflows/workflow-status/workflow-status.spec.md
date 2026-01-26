# Workflow Specification: workflow-status

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** See where user is in the thesis journey

**Description:** Displays thesis progress across all phases, shows completed/pending work, recommends next steps.

**Workflow Type:** Utility — Shared across all agents, non-document

---

## Workflow Structure

### Entry Point

```yaml
---
name: workflow-status
description: Check thesis progress and next steps
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/workflow-status'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Status Check | Read progress from thesis artifacts and sidecars |
| 2 | Display Progress | Show completed/pending phases |
| 3 | Recommend Next Step | Suggest what to work on next |

---

## Workflow Inputs

### Required Inputs

None (reads from thesis artifacts)

### Optional Inputs

None

---

## Workflow Outputs

### Output Format

- [ ] Non-document (conversational display)

### Output Files

None (status read from existing files)

---

## Agent Integration

### Primary Agent

All agents (shared command)

### Other Agents

All agents have access

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

---

_Spec created on 2026-01-24 via BMAD Module workflow_

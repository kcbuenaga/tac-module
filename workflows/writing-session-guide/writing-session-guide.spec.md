# Workflow Specification: writing-session-guide

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Structured writing sessions to overcome blocks

**Description:** Guides student through focused writing sessions with prompts, timers, and progress tracking to overcome writer's block.

**Workflow Type:** Feature — Specialized, non-document

---

## Workflow Structure

### Entry Point

```yaml
---
name: writing-session-guide
description: Structured writing sessions to overcome blocks
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/writing-session-guide'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | What to Write | Identify chapter/section to work on |
| 2 | Writing Prompts | Provide starter prompts to overcome blank page |
| 3 | Timed Focus | Optional timed writing session |
| 4 | Progress Tracking | Track words/time, celebrate progress |

---

## Workflow Inputs

### Required Inputs

- Chapter/section to work on

### Optional Inputs

- Session duration preference

---

## Workflow Outputs

### Output Format

- [ ] Non-document (writing happens in user's editor)

### Output Files

None (progress tracked in sidecar)

---

## Agent Integration

### Primary Agent

João (Writing Coach)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Critical features:
- Breaks tasks into small steps
- Celebrates small wins
- Perfect for ADD — structured but encouraging

---

_Spec created on 2026-01-24 via BMAD Module workflow_

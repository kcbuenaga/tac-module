# Workflow Specification: defense-preparation

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Practice defense, prepare presentation, anticipate questions

**Description:** Guides student through defense preparation with presentation building, question anticipation, and practice sessions with direct feedback.

**Workflow Type:** Feature — Specialized, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: defense-preparation
description: Practice defense and prepare presentation
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/defense-preparation'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Thesis Review | Review completed thesis |
| 2 | Question Anticipation | Identify likely committee questions |
| 3 | Practice Sessions | Run practice defenses |
| 4 | Direct Feedback | Honest assessment of readiness with progress tracking |

---

## Workflow Inputs

### Required Inputs

- Completed thesis draft

### Optional Inputs

- Known committee members/focus areas

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/defense/presentation-{date}.md` — Defense presentation outline
- `{thesis_artifacts}/defense/anticipated-questions-{date}.md` — Q&A preparation

---

## Agent Integration

### Primary Agent

Lara (Defense Prep Coach)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Critical features:
- Direct, borderline harsh feedback
- Tracks progress/regression between sessions
- Builds confidence through honest preparation

---

_Spec created on 2026-01-24 via BMAD Module workflow_

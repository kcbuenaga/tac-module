# Workflow Specification: thesis-timeline-planner

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Set defense deadline and work backwards to create milestone dates

**Description:** Addresses the "waiting too long" problem by creating urgency and structure through milestone planning.

**Workflow Type:** Utility — Planning, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: thesis-timeline-planner
description: Set defense deadline and create milestones
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/thesis-timeline-planner'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Defense Date Entry | Get defense deadline from student |
| 2 | Chapter Deadlines | Calculate chapter completion dates |
| 3 | Weekly Goals | Break down into weekly milestones |
| 4 | Calendar Integration | Create timeline document |

---

## Workflow Inputs

### Required Inputs

- Defense deadline date

### Optional Inputs

- Current progress state

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/timeline-{date}.md` — Timeline with milestones

---

## Agent Integration

### Primary Agent

Dr. Carla (Academic Advisor)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Critical features:
- Works backwards from deadline
- Creates urgency without overwhelming
- Combats procrastination

---

_Spec created on 2026-01-24 via BMAD Module workflow_

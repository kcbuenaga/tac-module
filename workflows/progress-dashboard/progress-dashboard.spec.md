# Workflow Specification: progress-dashboard

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Visual overview of thesis progress (chapters, sources, writing stats)

**Description:** Shows progress across all dimensions to combat "am I getting anywhere?" feeling and provide motivation boost.

**Workflow Type:** Utility — Shared, non-document

---

## Workflow Structure

### Entry Point

```yaml
---
name: progress-dashboard
description: View overall thesis progress
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/progress-dashboard'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Gather Progress Data | Read from thesis artifacts and sidecars |
| 2 | Display Dashboard | Show visual progress overview |
| 3 | Motivation Boost | Celebrate progress, identify next steps |

---

## Workflow Inputs

### Required Inputs

None (reads from artifacts)

### Optional Inputs

None

---

## Workflow Outputs

### Output Format

- [ ] Non-document (conversational display)

### Output Files

None (reads from existing progress)

---

## Agent Integration

### Primary Agent

All agents (shared)

### Other Agents

All agents have access

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Critical features:
- Visual progress representation
- Motivation through showing progress
- Combats "am I making progress?" anxiety

---

_Spec created on 2026-01-24 via BMAD Module workflow_

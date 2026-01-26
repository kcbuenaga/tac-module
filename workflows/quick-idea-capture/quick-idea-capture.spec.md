# Workflow Specification: quick-idea-capture

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Quickly save random thoughts/insights before they're forgotten

**Description:** Low-friction idea capture for ADD tendencies — capture immediately, organize later.

**Workflow Type:** Utility — Shared, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: quick-idea-capture
description: Capture random thoughts quickly
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/quick-idea-capture'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Idea Entry | Student types idea/thought |
| 2 | Tag/Categorize | Optional quick tag |
| 3 | Save to Notes | Append to running ideas file |

---

## Workflow Inputs

### Required Inputs

- Idea text

### Optional Inputs

- Category/tag

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/ideas-{date}.md` — Running ideas file

---

## Agent Integration

### Primary Agent

Any agent

### Other Agents

All agents have access

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Critical features:
- Extremely low friction
- Perfect for ADD — capture now, organize later
- No overthinking required

---

_Spec created on 2026-01-24 via BMAD Module workflow_

# Workflow Specification: thesis-structure-outline

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Create thesis outline and chapter structure

**Description:** Guides student through creating a complete thesis outline with chapter breakdown, section structure, and writing roadmap.

**Workflow Type:** Core — Essential, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: thesis-structure-outline
description: Create thesis outline and chapter structure
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/thesis-structure-outline'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Topic + Sources Review | Review validated topic and organized sources |
| 2 | Chapter Planning | Define main chapters (intro, lit review, methodology, etc.) |
| 3 | Section Breakdown | Break each chapter into sections |
| 4 | Writing Roadmap | Create sequence and timeline for writing |

---

## Workflow Inputs

### Required Inputs

- Validated thesis topic
- Organized literature review

### Optional Inputs

- University thesis structure requirements

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/outlines/thesis-outline-{date}.md` — Complete thesis outline

---

## Agent Integration

### Primary Agent

João (Writing Coach)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

---

_Spec created on 2026-01-24 via BMAD Module workflow_

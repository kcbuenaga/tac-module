# Workflow Specification: topic-discovery-validation

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Help MBA students pick a viable thesis topic with source validation

**Description:** THE core workflow that breaks paralysis. Guides students through exploring their interests in project management, generating potential topic angles, validating each angle against real library sources, and selecting a topic with confidence.

**Workflow Type:** Core — Essential, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: topic-discovery-validation
description: Help pick a viable thesis topic with source validation
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/topic-discovery-validation'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Interests Exploration | Understand student's interests in project management |
| 2 | Topic Angle Generation | Generate 3-4 potential topic directions |
| 3 | Library Source Check | Validate each angle against USP library databases |
| 4 | Source Count Display | Show actual source counts for each angle |
| 5 | Topic Selection | Student picks validated topic with confidence |

---

## Workflow Inputs

### Required Inputs

- Student interests (gathered via conversation)
- Field focus (e.g., project management, agile, construction)

### Optional Inputs

- Brazilian vs. international context preference
- Industry-specific focus

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/topic-validation-{date}.md` — Selected topic with source validation summary

---

## Agent Integration

### Primary Agent

Dr. Carla (Academic Advisor)

### Other Agents

Patricia (Research Librarian) — Called for library database searches and source validation

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Critical features:
- Integration with Academic Database Connector (custom MCP tool)
- Real source counts from USP library
- THE breakthrough moment — the "aha!" that breaks paralysis
- Output should give student confidence to proceed

---

_Spec created on 2026-01-24 via BMAD Module workflow_

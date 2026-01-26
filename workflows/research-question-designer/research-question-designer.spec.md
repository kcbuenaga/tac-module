# Workflow Specification: research-question-designer

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Refine broad topic into specific research questions

**Description:** Takes a validated topic and helps student craft focused, researchable questions that will guide the thesis.

**Workflow Type:** Feature — Specialized, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: research-question-designer
description: Refine broad topic into specific research questions
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/research-question-designer'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Topic Review | Review validated topic |
| 2 | Question Options | Generate 3-5 potential research questions |
| 3 | Evaluation Criteria | Assess researchability, scope, contribution |
| 4 | Final Research Question | Student selects and refines final question |

---

## Workflow Inputs

### Required Inputs

- Validated thesis topic

### Optional Inputs

- Initial question ideas from student

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/research-question-{date}.md` — Final research question with rationale

---

## Agent Integration

### Primary Agent

Dr. Carla (Academic Advisor)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

---

_Spec created on 2026-01-24 via BMAD Module workflow_

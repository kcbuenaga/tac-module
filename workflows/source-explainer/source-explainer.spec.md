# Workflow Specification: source-explainer

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Explain English academic sources in Brazilian Portuguese

**Description:** Takes complex English academic text (abstracts, papers) and explains key concepts clearly in BR-PT, removing language barriers.

**Workflow Type:** Feature — Specialized, non-document

---

## Workflow Structure

### Entry Point

```yaml
---
name: source-explainer
description: Explain English sources in BR-PT
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/source-explainer'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | English Text Input | Student pastes English abstract/text |
| 2 | Claude Multilingual Analysis | Use Claude's native multilingual for explanation |
| 3 | BR-PT Explanation | Output clear Portuguese explanation with key concepts |

---

## Workflow Inputs

### Required Inputs

- English academic text (abstract, excerpt, full paper)

### Optional Inputs

- Specific concepts to focus on

---

## Workflow Outputs

### Output Format

- [ ] Non-document (conversational output)

### Output Files

None (displayed in conversation, can be exported separately)

---

## Agent Integration

### Primary Agent

Patricia (Research Librarian)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Critical features:
- Uses Claude's native multilingual (no external API)
- Not just translation — explanation of concepts
- THE "aha" moment for English papers

---

_Spec created on 2026-01-24 via BMAD Module workflow_

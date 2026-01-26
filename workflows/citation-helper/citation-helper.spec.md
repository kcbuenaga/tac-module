# Workflow Specification: citation-helper

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Format citations in ABNT standard, manage bibliography

**Description:** Takes source information and formats citations in ABNT (Brazilian academic standard), builds bibliography.

**Workflow Type:** Feature — Specialized, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: citation-helper
description: Format citations in ABNT standard
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/citation-helper'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Source Information Input | Get source details (author, title, year, etc.) |
| 2 | ABNT Citation Format | Apply ABNT formatting rules |
| 3 | Add to Bibliography | Append to running bibliography file |

---

## Workflow Inputs

### Required Inputs

- Source information (author, title, publication, year, etc.)

### Optional Inputs

- Source type (book, journal, web, etc.)

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/bibliography.md` — Running bibliography in ABNT format

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
- ABNT formatting only (Brazilian standard)
- Custom logic (no external API needed)
- Appends to running bibliography

---

_Spec created on 2026-01-24 via BMAD Module workflow_

# Workflow Specification: literature-review-builder

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Search library, organize sources, and build literature review structure

**Description:** Multi-database library search workflow that finds relevant sources, evaluates them, organizes them thematically, and creates a structured literature review framework.

**Workflow Type:** Core — Essential, document-producing

---

## Workflow Structure

### Entry Point

```yaml
---
name: literature-review-builder
description: Search library, organize sources, build lit review structure
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/literature-review-builder'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Topic Input | Get validated topic from student |
| 2 | Multi-Database Search | Search JSTOR, SciELO, CAPES, Web of Science |
| 3 | Source Selection | Student selects relevant sources |
| 4 | Thematic Organization | Group sources by theme/angle |
| 5 | Literature Review Framework | Create structured outline for lit review |

---

## Workflow Inputs

### Required Inputs

- Validated thesis topic
- Research keywords

### Optional Inputs

- Date range filters
- Specific databases to prioritize

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{thesis_artifacts}/literature-review-{date}.md` — Organized literature review structure
- `{thesis_artifacts}/sources/source-list-{date}.md` — Source list with abstracts

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
- Integration with Academic Database Connector (custom MCP tool)
- Multi-database search capability
- Source organization by theme
- Export-ready format

---

_Spec created on 2026-01-24 via BMAD Module workflow_

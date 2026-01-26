# Workflow Specification: export

**Module:** tac
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-01-24

---

## Workflow Overview

**Goal:** Export notes, outlines, sources to external tools

**Description:** Exports thesis artifacts to Notion or local files in various formats.

**Workflow Type:** Utility — Shared, non-document

---

## Workflow Structure

### Entry Point

```yaml
---
name: export
description: Export to Notion or local files
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/export'
---
```

### Mode

- [x] Create-only (steps-c/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Select Content | Choose what to export |
| 2 | Format Selection | Notion vs. local files (markdown/docx) |
| 3 | Export Execution | Execute export via MCP tools |

---

## Workflow Inputs

### Required Inputs

- Content to export

### Optional Inputs

- Export format preference

---

## Workflow Outputs

### Output Format

- [ ] Non-document (exports to external systems)

### Output Files

Varies based on selection

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
- Notion Integration (MCP tool)
- File System Tool (MCP)
- Maintains formatting

---

_Spec created on 2026-01-24 via BMAD Module workflow_

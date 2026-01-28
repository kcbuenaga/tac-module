# Workflow Specification: source-explainer

**Module:** tac
**Status:** ✅ Complete — Create mode built and deployed
**Created:** 2026-01-24
**Completed:** 2026-01-27

---

## Workflow Overview

**Goal:** Explain English academic sources in Brazilian Portuguese with cultural context awareness

**Description:** Analyzes English academic text and explains key concepts in Portuguese with active identification of cultural/contextual assumptions that non-native readers might miss. NOT just translation - answers "what does this mean in MY context?"

**Workflow Type:** Feature — Specialized, document-producing, single-session

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

- [x] Tri-modal (Create + Edit + Validate)
  - Create mode: Fully built (5 steps)
  - Edit mode: To be built
  - Validate mode: To be built

---

## Implemented Steps (Create Mode)

| Step | Name | Goal |
|------|------|------|
| 1 | step-01-init | Initialize workflow, create output document from template |
| 2 | step-02-text-input | Collect English academic text from student |
| 3 | step-03-analyze | Analyze text, identify key concepts and cultural gaps |
| 4 | step-04-explain | Generate Portuguese explanations with Brazilian context |
| 5 | step-05-completion | Finalize document, update Patricia sidecar, present summary |

---

## Workflow Inputs

### Required Inputs

- English academic text (abstract, excerpt, full paper)

### Optional Inputs

- Specific concepts to focus on

---

## Workflow Outputs

### Output Format

- [x] Document (semi-structured markdown)

### Output Files

- `{thesis_artifacts}/source-explanations/explanation-{date}.md`
  - Original English Text
  - Key Concepts Identified
  - Portuguese Explanation
  - Cultural/Contextual Notes

---

## Agent Integration

### Primary Agent

Patricia (Research Librarian)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Built via `/bmad:bmb:workflows:workflow` on 2026-01-27**

Key features implemented:
- Active cultural gap identification (US vs Brazilian business/academic conventions)
- Web-browsing for Brazilian equivalents and current examples
- Advanced Elicitation quality gates in analysis and explanation phases
- Patricia sidecar memory for cross-session learning patterns
- Not just translation — explains "what does this mean in MY context?"
- Single-session workflow (paste text → get explanation)
- Tri-modal support for Create, Edit, and Validate modes

Files created:
- workflow.md (79 lines)
- templates/explanation-output.md (42 lines)
- steps-c/ (5 step files, 800+ lines total)

---

_Spec created on 2026-01-24 via BMAD Module workflow_

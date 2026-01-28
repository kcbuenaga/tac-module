# Workflow Specification: writing-session-guide

**Module:** tac
**Status:** ✅ Complete — Create mode built and deployed
**Created:** 2026-01-24
**Completed:** 2026-01-27

---

## Workflow Overview

**Goal:** Structured, continuable writing sessions to overcome writer's block with contextual prompts and sounding board support

**Description:** João guides students through writing sessions with contextual prompts specific to their thesis, sounding board support for ideas and challenges, and progress tracking across multiple days. Highly collaborative, looping+branching flow.

**Workflow Type:** Feature — Specialized, non-document, continuable, tri-modal

---

## Workflow Structure

### Entry Point

```yaml
---
name: writing-session-guide
description: Structured writing sessions to overcome blocks
web_bundle: true
installed_path: '{project-root}/_bmad/tac/workflows/writing-session-guide'
---
```

### Mode

- [x] Tri-modal (Create + Edit + Validate)
  - Create mode: Fully built (7 step files)
  - Edit mode: To be built
  - Validate mode: To be built

---

## Implemented Steps (Create Mode)

| Step | Name | Goal |
|------|------|------|
| 1 | step-01-init | Initialize session, check for continuation |
| 1b | step-01b-continue | Resume existing session from last step |
| 2 | step-02-load-context | Load outline (João's OR uploaded) + TAC context |
| 3 | step-03-select-section | Student selects which section to work on |
| 4 | step-04-writing-loop | Core loop: prompts, sounding board, tools (repeats) |
| 5 | step-05-track-progress | Log what was accomplished |
| 6 | step-06-session-decision | Continue/switch/end branching decision |

---

## Workflow Inputs

### Required Inputs

- Chapter/section to work on

### Optional Inputs

- Session duration preference

---

## Workflow Outputs

### Output Format

- [x] Non-document (student writes in their own editor)

### Output Files

- João's sidecar memory: `{project-root}/_bmad/_memory/joao-sidecar/memories.md`
  - Session state (currentSection, sessionStartDate, stepsCompleted)
  - Progress tracking (sections worked on, dates, notes, guidance provided)
  - Uploaded outlines logged

---

## Agent Integration

### Primary Agent

João (Writing Coach)

### Other Agents

None (standalone workflow)

---

## Implementation Notes

**Built via `/bmad:bmb:workflows:workflow` on 2026-01-27**

Key features implemented:
- Continuable workflow (sessions span multiple days, resume from last step)
- Looping + branching flow (writing loop repeats, flexible section navigation)
- Highly collaborative (João as constant sounding board)
- Contextual prompts specific to thesis topic and section (not generic)
- Flexible outline input (João's workflow OR student upload)
- Advanced Elicitation for deep Socratic questioning
- Brainstorming for idea generation
- Web-browsing for current examples and references
- Progress tracked in João's sidecar memory across sessions
- ADD-friendly design: small steps, structured, celebrates progress

Files created:
- workflow.md (106 lines) - Tri-modal entry point with João's role
- FLOW.md (81 lines) - Visual flow diagram with looping+branching
- steps-c/ (7 step files, 1300+ lines total):
  - step-01-init.md (141 lines)
  - step-01b-continue.md (120 lines)
  - step-02-load-context.md (196 lines)
  - step-03-select-section.md (156 lines)
  - step-04-writing-loop.md (228 lines)
  - step-05-track-progress.md (175 lines)
  - step-06-session-decision.md (180 lines)

---

_Spec created on 2026-01-24 via BMAD Module workflow_

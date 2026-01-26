# TAC: Thesis Advisory Companion

Academic thesis development from topic discovery to defense

Specialized agents for MBA thesis writers - bilingual Portuguese/English support

---

## Overview

TAC is a **momentum engine** for MBA thesis writers. It breaks paralysis by providing structure when frozen, validates topics before committing months of work, and acts as a companion throughout the entire thesis journey — from blank page confusion to confident defense.

Unlike generic AI tools or fragmented workflows requiring 100 browser tabs and 4 different LLMs, TAC provides a cohesive, integrated one-window experience with specialized agents working together as a friendly study group.

**Target Users:** MBA students (particularly at USP), bilingual Portuguese/English speakers, returning to academia after time away, needing structure and encouragement.

---

## Installation

```bash
bmad install tac
```

You'll be prompted to configure:
- Thesis artifacts storage location
- Institution name (defaults to USP)

Plus core config (user name, communication language, output language, etc.)

---

## Quick Start

1. **Set up library access** — Run Library Integration Setup with Patricia
2. **Find your topic** — Use Topic Discovery & Validation with Dr. Carla (THE breakthrough workflow)
3. **Organize sources** — Build your literature review with Patricia
4. **Structure your thesis** — Create your outline with João
5. **Write and prepare** — Use writing sessions and defense prep as you progress

**For detailed documentation, see [docs/](docs/).**

---

## Components

### Agents

TAC includes 4 specialized agents working as a friendly study group:

- **Dr. Carla** 🎓 — Academic Advisor (Topic discovery, research questions, timeline planning)
- **Patricia** 📚 — Research Librarian (Source discovery, citations, library integration)
- **João** ✍️ — Writing Coach (Thesis structure, writing sessions, overcoming blocks)
- **Lara** 🎯 — Defense Prep Coach (Defense preparation, presentation practice, performance tracking)

All agents have memory (hasSidecar: true) to remember your progress and patterns.

### Workflows

**Core (3):**
1. Topic Discovery & Validation — Help pick viable topic with source validation
2. Literature Review Builder — Search library, organize sources
3. Thesis Structure & Outline — Create thesis outline and chapters

**Feature (5):**
4. Research Question Designer — Refine topic into research questions
5. Source Explainer (EN → BR-PT) — Explain English sources in Portuguese
6. Writing Session Guide — Structured writing sessions to overcome blocks
7. Citation Helper - ABNT Only — Format citations in Brazilian standard
8. Defense Preparation — Practice defense and presentation

**Utility (6):**
9. Workflow Status — Check thesis progress (shared)
10. Export to Notion/Docs — Export your work (shared)
11. Library Integration Setup — Configure library access
12. Thesis Timeline Planner — Set deadlines and milestones
13. Quick Idea Capture — Capture ideas quickly (shared)
14. Progress Dashboard — View overall progress (shared)

---

## Configuration

The module supports these configuration options (set during installation):

**Core Config (from BMAD):**
- `user_name` — Your name
- `communication_language` — english or portuguese
- `document_output_language` — english or portuguese
- `output_folder` — Default output location

**TAC-Specific:**
- `thesis_artifacts` — Where to store thesis work (defaults to `{output_folder}/thesis-artifacts`)
- `institution_name` — Your university (defaults to "USP")

---

## Module Structure

```
tac/
├── module.yaml
├── config.yaml
├── README.md
├── TODO.md
├── docs/
│   ├── getting-started.md
│   ├── agents.md
│   ├── workflows.md
│   └── examples.md
├── agents/
│   ├── dr-carla.spec.md
│   ├── patricia.spec.md
│   ├── joao.spec.md
│   └── lara.spec.md
├── workflows/
│   ├── topic-discovery-validation/
│   ├── literature-review-builder/
│   ├── thesis-structure-outline/
│   ├── research-question-designer/
│   ├── source-explainer/
│   ├── writing-session-guide/
│   ├── citation-helper/
│   ├── defense-preparation/
│   ├── workflow-status/
│   ├── export/
│   ├── library-integration-setup/
│   ├── thesis-timeline-planner/
│   ├── quick-idea-capture/
│   └── progress-dashboard/
└── _module-installer/
    └── installer.js
```

---

## Documentation

For detailed user guides and documentation, see the **[docs/](docs/)** folder:
- [Getting Started](docs/getting-started.md)
- [Agents Reference](docs/agents.md)
- [Workflows Reference](docs/workflows.md)
- [Examples](docs/examples.md)

---

## Development Status

This module is currently in development. The following components are planned:

- [ ] Agents: 4 agents (specs created)
- [ ] Workflows: 14 workflows (specs created)

See TODO.md for detailed status and build instructions.

---

## Author

Created via BMAD Module workflow on 2026-01-24

---

## License

Part of the BMAD framework.

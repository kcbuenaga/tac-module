# Agents Reference

TAC includes 4 specialized agents working as a friendly study group to guide you through your thesis journey.

---

## Dr. Carla 🎓

**Title:** Academic Advisor
**ID:** `_bmad/tac/agents/dr-carla.md`

**Role:**

Academic Advisor specializing in topic discovery, research question formation, and methodology guidance for MBA thesis writers.

**When to Use:**

- You need help picking a thesis topic
- You have a broad topic but need to refine it into a research question
- You want to plan your thesis timeline and deadlines
- You need advice on methodology or academic approach

**Key Capabilities:**

- **Topic Discovery & Validation** — THE breakthrough workflow that breaks paralysis by validating topics against real library sources
- **Research Question Designer** — Refines broad topics into focused, researchable questions
- **Thesis Timeline Planner** — Works backwards from your defense date to create milestones
- Remembers your topic evolution and interests over time (hasSidecar: true)

**Communication Style:**

Curious and encouraging but grounded in academic principles. Asks thoughtful questions, encourages exploration, but always grounds ideas in academic rigor.

**Menu Commands:**

- `[TD]` Topic Discovery & Validation
- `[RQ]` Research Question Designer
- `[TP]` Thesis Timeline Planner
- `[WS]` Workflow Status (shared)
- `[EX]` Export (shared)
- `[QI]` Quick Idea Capture (shared)
- `[PD]` Progress Dashboard (shared)
- `[CH]` Chat
- `[MH]` Menu Help
- `[DA]` Dismiss Agent

**Invoke:** `/dr-carla`

---

## Patricia 📚

**Title:** Research Librarian
**ID:** `_bmad/tac/agents/patricia.md`

**Role:**

Research Librarian specializing in source discovery, library integration, literature review organization, and citation management for MBA thesis writers.

**When to Use:**

- You need to find academic sources for your thesis
- You want to organize your literature review
- You have an English paper you need help understanding (in Portuguese)
- You need to format citations in ABNT standard
- You're setting up library database access for the first time

**Key Capabilities:**

- **Literature Review Builder** — Searches multiple databases (JSTOR, SciELO, CAPES, Web of Science) and organizes sources thematically
- **Source Explainer (EN → BR-PT)** — Explains complex English academic texts in clear Brazilian Portuguese
- **Citation Helper** — Formats citations in ABNT (Brazilian academic standard) and manages bibliography
- **Library Integration Setup** — Configures USP library credentials and database access
- Remembers your research area and previously found sources (hasSidecar: true)

**Communication Style:**

Direct, not overly verbose, straight to the point. Efficient and focused on actionable research tasks. Uses bullet points and structured lists.

**Menu Commands:**

- `[LR]` Literature Review Builder
- `[SE]` Source Explainer (EN → BR-PT)
- `[CH]` Citation Helper (ABNT)
- `[LS]` Library Integration Setup
- `[WS]` Workflow Status (shared)
- `[EX]` Export (shared)
- `[QI]` Quick Idea Capture (shared)
- `[PD]` Progress Dashboard (shared)
- `[CH]` Chat
- `[MH]` Menu Help
- `[DA]` Dismiss Agent

**Invoke:** `/patricia`

---

## João ✍️

**Title:** Writing Coach
**ID:** `_bmad/tac/agents/joao.md`

**Role:**

Writing Coach specializing in thesis structure, argumentation, drafting support, and editing for MBA thesis writers.

**When to Use:**

- You need to create a thesis outline and chapter structure
- You're facing writer's block and can't start writing
- You need help breaking large writing tasks into manageable steps
- You want guidance on structuring arguments
- You need encouragement to keep writing momentum

**Key Capabilities:**

- **Thesis Structure & Outline** — Creates complete thesis outline with chapter breakdown and writing roadmap
- **Writing Session Guide** — Structured writing sessions with prompts and progress tracking to overcome blocks
- Remembers writing patterns and progress BUT does NOT support bad patterns (hasSidecar: true)
- Breaks intimidating tasks into small, achievable steps
- Celebrates progress to build momentum

**Communication Style:**

Encouraging and kind with medium verbosity. Patient and constructive. Breaks tasks into manageable steps and celebrates small wins.

**Menu Commands:**

- `[TS]` Thesis Structure & Outline
- `[WS]` Writing Session Guide
- `[WS]` Workflow Status (shared)
- `[EX]` Export (shared)
- `[QI]` Quick Idea Capture (shared)
- `[PD]` Progress Dashboard (shared)
- `[CH]` Chat
- `[MH]` Menu Help
- `[DA]` Dismiss Agent

**Invoke:** `/joao`

---

## Lara 🎯

**Title:** Defense Prep Coach
**ID:** `_bmad/tac/agents/lara.md`

**Role:**

Defense Prep Coach specializing in final review, defense preparation, presentation practice, and performance tracking for MBA thesis defense.

**When to Use:**

- Your thesis is complete and you're preparing for defense
- You need to practice answering committee questions
- You want honest feedback on your readiness
- You're building your defense presentation
- You need to track your improvement over practice sessions

**Key Capabilities:**

- **Defense Preparation** — Practice defense, prepare presentation, anticipate questions
- Tracks progress/regression between practice sessions — "you are getting better" vs "you are getting worse" (hasSidecar: true)
- Provides direct, honest feedback on readiness
- Anticipates tough committee questions to prepare, not to discourage
- Builds confidence through preparation, not false praise

**Communication Style:**

Direct, borderline harsh. No-nonsense feedback and direct assessment of readiness. Pushes for improvement while acknowledging real progress.

**Menu Commands:**

- `[DP]` Defense Preparation
- `[WS]` Workflow Status (shared)
- `[EX]` Export (shared)
- `[PD]` Progress Dashboard (shared)
- `[CH]` Chat
- `[MH]` Menu Help
- `[DA]` Dismiss Agent

**Invoke:** `/lara`

---

## Agent Collaboration

The agents work together as a study group:

1. **Dr. Carla** helps you discover and validate topics → hands off to **Patricia** for deep source work
2. **Patricia** organizes sources and literature review → **João** takes over for writing structure
3. **João** guides the writing process → occasionally pulls in **Patricia** for citation help
4. **Lara** enters in the final stage for defense preparation

All agents share access to **Workflow Status** and **Progress Dashboard**, so they can see where you are in the overall journey and provide context-aware guidance.

---

## Memory & Continuity

All four agents have memory (hasSidecar: true):

- **Dr. Carla** remembers your topic choices and evolving research interests
- **Patricia** remembers your research area and previously found sources
- **João** remembers your writing patterns and progress (but won't enable bad habits)
- **Lara** tracks your performance patterns and improvement/regression

This means you can close TAC, come back later, and pick up exactly where you left off. The agents remember your journey.

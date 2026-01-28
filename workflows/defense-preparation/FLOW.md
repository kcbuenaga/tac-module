# Defense Preparation Workflow Flow

## Overview

**Tri-modal workflow:** Create | Edit | Validate

**Purpose:** Prepare PhD/Master's students for thesis defense through rigorous practice sessions with simulated committee questioning, harsh-but-fair feedback, and comprehensive progress tracking.

---

## Mode 1: Create Mode (Practice Sessions)

```
workflow.md
    ↓
[Mode Selection: Create]
    ↓
step-01-init.md ──────────────────┐
    ↓                             │
[Check for existing files]        │
    ↓                             │
    Exists? ─────YES─────→ step-01b-continue.md
    │                           ↓
   NO                    [Load session state]
    ↓                           ↓
step-02-thesis-input.md    [Route to last step]
    ↓                           ↓
[File path OR paste text]       │
    ↓                           │
step-03-thesis-review.md ←──────┘
    ↓
[Subprocess Pattern 2: Deep thesis analysis]
    ↓
step-04-question-anticipation.md
    ↓
[Advanced Elicitation + Subprocess Pattern 3]
[5 committee sub-agents generate questions]
    ↓
step-05-practice-session-setup.md
    ↓
[User selects focus area]
    ↓
step-06-committee-questioning.md ←──────┐
    ↓                                   │
[Subprocess Pattern 4: 5 committee      │
 members in parallel with web search]   │
    ↓                                   │
step-07-direct-feedback.md              │
    ↓                                   │
[Subprocess Pattern 2+3: Session        │
 comparison + criteria loading]         │
[Track: weak areas, flagged            │
 questions, problematic roles]          │
    ↓                                   │
step-08-presentation-update.md          │
    ↓                                   │
[Update presentation outline]           │
    ↓                                   │
step-09-decision-point.md               │
    ↓                                   │
[Progress summary + readiness score]    │
    ↓                                   │
┌───┴───┬────────────┐                 │
│       │            │                 │
[R]     [F]          [C]               │
Run     Focus     Complete             │
Again   Weak                           │
│       Area         │                 │
│       │            │                 │
└───────┴────────────┘                 │
        │                              │
        └──────────────────────────────┘
                     │
                     ↓
             step-10-final-output.md
                     ↓
              [Workflow Complete]
```

---

## Mode 2: Edit Mode (Modify Documents)

```
workflow.md
    ↓
[Mode Selection: Edit]
    ↓
step-e-01-load-assess.md
    ↓
[Check for existing documents]
    ↓
    Found? ────NO────→ [Error: Create first]
    ↓
   YES
    ↓
[Check compliance]
    ↓
step-e-02-select-target.md
    ↓
┌───────┴────────┬────────┐
│                │        │
[P]              [Q]      [B]
Presentation  Questions  Both
│                │        │
└────────────────┴────────┘
         ↓
step-e-03-edit-content.md
         ↓
[Apply user modifications]
         ↓
step-e-04-confirm.md
         ↓
[Save changes]
         ↓
[Offer validation?]
    ↓
   YES ──→ Load: steps-v/step-v-01-assess-readiness.md
    ↓
   NO
    ↓
[Complete]
```

---

## Mode 3: Validate Mode (Check Readiness)

```
workflow.md
    ↓
[Mode Selection: Validate]
    ↓
step-v-01-assess-readiness.md
    ↓
[Load both documents]
    ↓
[Subprocess Pattern 3: Load feedback-criteria.md]
    ↓
[Check completeness & quality]
    ↓
step-v-02-generate-report.md
    ↓
[Create readiness report]
    ↓
[Overall score + recommendations]
    ↓
[Offer edit mode?]
    ↓
   YES ──→ Load: steps-e/step-e-01-load-assess.md
    ↓
   NO
    ↓
[Complete]
```

---

## Cross-Mode Integration

```
Create ──→ Validate (check readiness)
   ↓
Edit ──→ Validate (verify changes)
   ↓
Validate ──→ Edit (fix issues)
```

---

## Committee Member Sub-Agents (Pattern 4 Parallel)

```
step-06-committee-questioning.md
         ↓
    [Launches 5 sub-agents in parallel]
         ↓
    ┌────┴────┬────────┬──────────┬───────┐
    ↓         ↓        ↓          ↓       ↓
 Advisor  Internal External   Chair    SME
          Examiner Examiner
    │         │        │          │       │
    └────┬────┴────────┴──────────┴───────┘
         ↓
  [Aggregate questions]
         ↓
  [Student responds]
         ↓
  [Lara probes logic]
```

Each committee member:
- Has web-browsing capability
- Researches context for questions
- Challenges from their role perspective

---

## Subprocess Optimization Patterns

**Pattern 2 (Deep Analysis):**
- Step 03: Thesis review → Returns structured findings
- Step 07: Session comparison → Returns delta/improvements

**Pattern 3 (Data Operations):**
- Step 04: Load committee-roles.md → Returns role patterns
- Step 07: Load feedback-criteria.md → Returns rubric items
- Step v-01: Load feedback-criteria.md → Returns applicable rules

**Pattern 4 (Parallel Execution):**
- Step 06: 5 committee members generate questions simultaneously

---

## State Tracking (Frontmatter)

Both output files track:
```yaml
stepsCompleted: ['step-01-init', 'step-02-thesis-input', ...]
lastStep: 'step-09-decision-point'
sessionCount: 3
currentReadinessScore: 6.5
weakAreasIdentified: ['methodology-justification', 'theoretical-framework']
questionsFlaggedForPractice: ['Q3-External', 'Q7-SME']
problematicCommitteeRoles: ['External Examiner', 'Subject Matter Expert']
previousSessionDates: ['2026-01-28', '2026-02-01', '2026-02-05']
lastModified: '2026-02-05'
```

---

## Output Files

**Two semi-structured documents:**

1. **presentation-{date}.md**
   - Opening/Introduction
   - Research Question & Objectives
   - Literature Review (brief)
   - Methodology
   - Key Findings/Results
   - Discussion & Implications
   - Conclusion & Contributions
   - Q&A Preparation Notes

2. **anticipated-questions-{date}.md**
   - Advisor/Supervisor Questions
   - Internal Examiner Questions
   - External Examiner Questions
   - Chair Questions
   - Subject Matter Expert Questions
   - Practice Session Notes

---

## Lara's Coaching Progression

```
Session 1: HARSH
    ↓
"Your methodology justification is weak.
The External Examiner will tear this apart."
    ↓
Session 2: CRITICAL BUT SPECIFIC
    ↓
"Better. You addressed the methodology gap,
but your theoretical framework still has holes."
    ↓
Session 3: TOUGH BUT ACKNOWLEDGING
    ↓
"Significant improvement in argumentation.
Response time is faster. Still need work on Q7."
    ↓
Session N: POSITIVE (when ready)
    ↓
"You're defense-ready. Consistent, confident,
sound arguments. You've got this."
```

---

## File Structure

```
defense-preparation/
├── workflow.md (tri-modal routing)
├── FLOW.md (this file)
├── steps-c/ (11 Create mode steps)
├── steps-e/ (4 Edit mode steps)
├── steps-v/ (2 Validate mode steps)
├── templates/
│   ├── presentation-template.md
│   └── anticipated-questions-template.md
└── data/
    ├── committee-roles.md
    ├── defense-best-practices.md
    └── feedback-criteria.md
```

**Total:** 23 files (17 steps + 1 workflow + 1 flow + 2 templates + 3 data)

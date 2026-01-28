# Writing Session Guide - Workflow Flow Diagram

## Create Mode Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     WRITING SESSION GUIDE WORKFLOW                       │
│                        (João - Writing Coach)                            │
│                  Continuable | Looping + Branching                       │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────────┐
│   step-01-init.md    │  Initialize session, check for continuation
│  [Continuation Det]  │  If existing session found → step-01b-continue.md
└──────────┬───────────┘
           │
           ├─ Existing session? ──┐
           │                       │
           ▼                       ▼
┌──────────────────────┐  ┌──────────────────────┐
│ step-02-load-context │  │ step-01b-continue.md │
│   [C] Continue       │  │  [Route to last step]│
└──────────┬───────────┘  └──────────┬───────────┘
           │                         │
           │◄────────────────────────┘
           │
           ▼
    Load outline (João's OR uploaded)
    Load optional TAC context (topic, research Q, lit review)
    João logs outline in sidecar memory
           │
           ▼
┌──────────────────────┐
│ step-03-select-      │  Student chooses which chapter/section to work on
│      section.md      │  Display outline, João loads section context
│   [C] Continue       │  Optional: session goals (word count, time, focus)
└──────────┬───────────┘
           │
           ▼
╔══════════════════════╗
║ step-04-writing-loop ║  ◄───────────┐  CORE WRITING LOOP
║                      ║               │  (Repeats until student ready)
║ [A] Adv Elicit       ║               │
║ [B] Brainstorming    ║               │  - João generates contextual prompts
║ [W] Web-browsing     ║               │  - Student writes in own editor
║ [S] Sounding Board   ║               │  - Sounding board conversations
║ [T] Track Progress   ║               │  - More prompts if needed
╚══════════┬═══════════╝               │
           │                            │
           └─ More prompts? ────────────┘
           │
           │ Ready to track
           ▼
┌──────────────────────┐
│ step-05-track-       │  Student reports what was accomplished
│      progress.md     │  João logs to sidecar (section, date, notes)
│   [C] Continue       │  Save session state for continuation
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ step-06-session-     │  What next?
│    decision.md       │
│                      │  [1] Continue same section → step-04 (writing loop)
│ [1] Same section     │  [2] Switch to different section → step-03 (select)
│ [2] Switch section   │  [3] End session → Save & exit
│ [3] End session      │
└──────────────────────┘

═══════════════════════════════════════════════════════════════════════════

Key Features:
✓ Continuable workflow (sessions span multiple days)
✓ Looping + branching (flexible navigation between sections)
✓ Highly collaborative (constant sounding board interaction)
✓ Advanced Elicitation for deeper Socratic questioning
✓ Brainstorming for idea generation
✓ Web-browsing for current examples and references
✓ Non-document output (student writes in own editor)

Memory Tracking:
• João's Sidecar: {project-root}/_bmad/_memory/joao-sidecar/memories.md
• Session State: stepsCompleted, lastStep, currentSection, sessionStartDate
• Progress Notes: Sections worked on, prompts given, guidance provided

Context Sources:
• João's Thesis Structure & Outline OR student-uploaded outline
• Optional: Topic discovery, research question, literature review

═══════════════════════════════════════════════════════════════════════════

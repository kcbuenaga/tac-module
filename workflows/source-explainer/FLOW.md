# Source Explainer - Workflow Flow Diagram

## Create Mode Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SOURCE EXPLAINER WORKFLOW                        │
│                    (Patricia - Research Librarian)                       │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────────┐
│   step-01-init.md    │  Initialize workflow, create output document
│  [Auto-proceed]      │  Load TAC config, welcome student
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ step-02-text-input   │  Collect English academic text from student
│     [C] Continue     │  Validate input, append to output document
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  step-03-analyze.md  │  Analyze text, identify concepts & cultural gaps
│   [A] Adv Elicit     │  Uses web-browsing for research
│   [C] Continue       │  Append to "Key Concepts Identified" section
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  step-04-explain.md  │  Generate Portuguese explanations + cultural context
│   [A] Adv Elicit     │  Uses web-browsing for Brazilian equivalents
│   [C] Continue       │  Append to "Portuguese Explanation" & "Cultural Notes"
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ step-05-completion   │  Finalize document, update Patricia sidecar
│     [No menu]        │  Present summary, workflow ends
└──────────────────────┘

═══════════════════════════════════════════════════════════════════════════

Key Features:
✓ Single-session workflow (quick utility)
✓ Linear flow (straight through from text input to completion)
✓ Advanced Elicitation quality gates in analysis & explanation phases
✓ Web-browsing for cultural context and Brazilian equivalents
✓ Non-continuation (each run is independent)
✓ Output: {thesis_artifacts}/source-explanations/explanation-{date}.md

Document Sections:
1. Original English Text
2. Key Concepts Identified (academic concepts + cultural assumptions)
3. Portuguese Explanation (concept-level, not word-level)
4. Cultural/Contextual Notes (invisible assumptions explained)

═══════════════════════════════════════════════════════════════════════════

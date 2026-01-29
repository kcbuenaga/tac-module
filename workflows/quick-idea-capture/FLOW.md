# Quick Idea Capture - Workflow Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  QUICK IDEA CAPTURE                         │
│         Ultra-Fast Idea Logging Workflow (< 2 min)          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  STEP 01: INIT                                              │
│  ├─ Welcome user                                            │
│  ├─ Explain quick capture purpose                           │
│  ├─ Check if ideas file exists                              │
│  └─ AUTO-PROCEED ─────────────────────────┐                 │
└───────────────────────────────────────────┼─────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 02: IDEA ENTRY                                        │
│  ├─ Prompt: "Enter your idea:"                              │
│  ├─ User types idea text                                    │
│  ├─ Validate not empty (reprompt if empty)                  │
│  └─ AUTO-PROCEED ─────────────────────────┐                 │
└───────────────────────────────────────────┼─────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 03: OPTIONAL TAG                                      │
│  ├─ Prompt: "Add tag/category (or Enter to skip):"         │
│  ├─ User types tag OR presses Enter                         │
│  ├─ Store tag if provided                                   │
│  └─ AUTO-PROCEED ─────────────────────────┐                 │
└───────────────────────────────────────────┼─────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 04: SAVE & CONFIRM                                    │
│  ├─ Generate timestamp                                      │
│  ├─ Read ideas file (or create from template)               │
│  ├─ Append new entry:                                       │
│  │   ## [Timestamp] - [Tag]                                 │
│  │   [Idea text]                                            │
│  ├─ Increment ideaCount in frontmatter                      │
│  ├─ Write file                                              │
│  ├─ Display: "✅ Idea saved! [timestamp]"                   │
│  └─ WORKFLOW COMPLETE                                       │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
                   ┌─────────┐
                   │   END   │
                   └─────────┘
```

## Flow Summary

**Linear Path:**
Init → Idea Entry → Optional Tag → Save & Confirm → END

**Total Time:** 1-2 minutes
**Interaction Points:** 2 (idea text, optional tag)
**Menus:** None (all auto-proceed)

## Key Features

- **Ultra-Fast:** No menus, no checkpoints, straight through
- **Low Friction:** Minimal prompts, optional categorization
- **Append-Only:** Adds to running file, no new files created
- **Prescriptive:** Exact prompts for speed and clarity

## File Operations

**Ideas File Location:** `{thesis_artifacts}/ideas-{currentDate}.md`

**First Run:** Creates file from template
**Subsequent Runs:** Appends new entries with timestamps

## Success Criteria

✅ Idea captured and saved
✅ Timestamp added
✅ Optional tag included (if provided)
✅ Confirmation displayed
✅ Completed in < 2 minutes

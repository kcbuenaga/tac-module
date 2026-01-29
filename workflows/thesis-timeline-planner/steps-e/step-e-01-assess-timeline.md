# Step E-01: Assess Timeline

**Goal:** Load the existing timeline, show current state, and route the user to the appropriate edit function.

---

## 1. Load Timeline Document

Find and read the most recent timeline file:

**Search for timeline:**
- Look in `{thesis_artifacts}` folder
- Pattern: `timeline-*.md`
- Sort by creation date (from frontmatter)
- Load the most recent timeline

**If no timeline found:**
- Display error: "No timeline found. Create a new timeline using Create mode: `/tac:dr-carla:timeline`"
- End workflow

**If timeline found:**
- Read the complete file
- Extract from frontmatter: `created`, `defenseDate`, `daysRemaining`, `chapterCount`, `status`, `stepsCompleted`
- Display the timeline file path

---

## 2. Display Current Timeline Summary

Present a summary of the current timeline:

```
═══════════════════════════════════════════════════════════
   📝 CURRENT TIMELINE SUMMARY
═══════════════════════════════════════════════════════════

Timeline Created: {created}
Defense Date: {defenseDate}
Days Remaining: {calculate current days remaining}
Status: {status}

📅 Chapter Milestones: {chapterCount} chapters
📆 Weekly Goals: {count of weekly goals defined}
📍 Progress Tracking: {extract current focus}

═══════════════════════════════════════════════════════════
```

**Calculate updated days remaining:**
- Current days = (defenseDate - today).days
- Compare to original `daysRemaining` from frontmatter
- If significantly different, note: "Timeline was created {X} days ago - {Y} days have passed"

---

## 3. Identify What to Edit

Ask the user what they want to edit:

```
┌─────────────────────────────────────────┐
│         WHAT WOULD YOU LIKE TO EDIT?    │
└─────────────────────────────────────────┘

[1] Defense Date - Change the deadline and recalculate milestones
[2] Chapter Milestones - Modify chapter structure or completion dates
[3] Weekly Goals - Adjust weekly milestone breakdown
[4] Update Progress - Mark completed milestones and update status

Your choice:
```

---

## 4. Route to Edit Step

Based on user selection, load and execute the appropriate edit step:

**[1] Edit Defense Date:**
- Update `stepsCompleted` array with 'step-e-01-assess-timeline'
- Set `lastStep: 'step-e-01-assess-timeline'`
- Load and execute `./steps-e/step-e-02-edit-defense-date.md`

**[2] Edit Chapters:**
- Update `stepsCompleted` array with 'step-e-01-assess-timeline'
- Set `lastStep: 'step-e-01-assess-timeline'`
- Load and execute `./steps-e/step-e-03-edit-chapters.md`

**[3] Edit Weekly Goals:**
- Update `stepsCompleted` array with 'step-e-01-assess-timeline'
- Set `lastStep: 'step-e-01-assess-timeline'`
- Load and execute `./steps-e/step-e-04-edit-weekly.md`

**[4] Update Progress:**
- Update `stepsCompleted` array with 'step-e-01-assess-timeline'
- Set `lastStep: 'step-e-01-assess-timeline'`
- Load and execute `./steps-e/step-e-05-update-progress.md`

---

## Notes for LLM

- This is the entry point for Edit mode
- Always load the most recent timeline file
- Update the "days remaining" calculation since time has passed since creation
- Users can edit specific sections without affecting the rest
- All edit steps will update the same timeline file (no new file creation)
- Timeline path should be preserved and reused across edit steps

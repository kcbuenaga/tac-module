# Step E-03: Edit Chapter Milestones

**Goal:** Modify chapter structure or individual chapter completion dates without changing the defense date.

---

## 1. Load Current Timeline

Read the timeline file being edited:
- Extract `defenseDate` and `daysRemaining` from frontmatter
- Extract current chapter milestones from the document
- Display current chapter structure to user

```
Current Chapter Structure:
- Chapter 1: {title} - {date}
- Chapter 2: {title} - {date}
- Chapter 3: {title} - {date}
...
```

---

## 2. Ask What to Edit

Present options:

```
┌─────────────────────────────────────────┐
│      WHAT WOULD YOU LIKE TO CHANGE?     │
└─────────────────────────────────────────┘

[1] Add or remove chapters
[2] Change individual chapter deadlines
[3] Rename chapter titles
[4] Redistribute time between chapters

Your choice:
```

---

## 3. Execute Selected Edit

### Option 1: Add or Remove Chapters

**If adding chapters:**
- Ask how many chapters to add
- Ask where to insert (before which existing chapter, or at end)
- Calculate time allocation for new chapter(s)
- Adjust other chapter dates accordingly
- Update `chapterCount` in frontmatter

**If removing chapters:**
- Ask which chapter(s) to remove
- Confirm removal
- Redistribute time to remaining chapters
- Update `chapterCount` in frontmatter

**Recalculate chapter milestones:**
- Work backwards from defense date
- Allocate time proportionally
- Maintain defense date buffer (2-3 weeks)

---

### Option 2: Change Individual Chapter Deadlines

**Ask which chapter to modify:**
- Display list with numbers
- User selects chapter number

**Ask for new deadline:**
- Show current date for that chapter
- Ask for new date (YYYY-MM-DD)
- Validate that new date is:
  - After previous chapter deadline (if applicable)
  - Before next chapter deadline (if applicable)
  - Before defense date

**Apply change:**
- Update that chapter's deadline
- Optionally adjust surrounding chapters if needed
- Warn if dates are getting too compressed

---

### Option 3: Rename Chapter Titles

**Ask which chapter to rename:**
- Display current titles with numbers
- User selects chapter number

**Ask for new title:**
- Collect new title text
- Update chapter milestone table with new title
- No date changes needed

---

### Option 4: Redistribute Time Between Chapters

**Explain redistribution:**
- Some chapters need more time (e.g., Results/Analysis)
- Some chapters need less time (e.g., Introduction/Conclusion)

**Ask for time weights:**
- For each chapter, ask for relative weight (1-5 scale)
  - 1 = Quick chapter (Introduction, Conclusion)
  - 3 = Standard chapter (Literature Review, Methodology)
  - 5 = Complex chapter (Data Analysis, Results)

**Recalculate based on weights:**
- Total time available = defense_date - today - 3 weeks buffer
- Divide by sum of weights
- Allocate to each chapter proportionally
- Work backwards from defense date

---

## 4. Update Chapter Milestones Section

1. **Read the current timeline file**
2. **Find the section:** `## Chapter Completion Milestones`
3. **Replace the entire chapter table** with updated information:

```markdown
### Chapter Milestones

**Total Chapters:** {updated chapterCount}

| Chapter | Target Completion | Days from Now |
|---------|-------------------|---------------|
| {updated chapter list with new dates/titles/structure} |
```

4. **Save the file**

---

## 5. Cascade to Weekly Goals (Optional)

Ask the user:

```
Chapter milestones have changed. Would you like to recalculate
weekly goals to align with the new chapter dates?

[Y] Yes, recalculate weekly goals
[N] No, keep existing weekly goals

Your choice:
```

**If Yes:**
- Use the algorithm from step-04-weekly-goals.md
- Regenerate weekly goals based on new chapter dates
- Update the Weekly Goals section in the timeline

**If No:**
- Keep weekly goals as-is
- Warn: "Weekly goals may not align with chapter dates"

---

## 6. Update Frontmatter and Metadata

Update the timeline frontmatter:
- `chapterCount: {updated count}` (if chapters added/removed)
- Add 'step-e-03-edit-chapters' to `stepsCompleted` array
- Set `lastStep: 'step-e-03-edit-chapters'`

Update Progress Tracking section:
- Update "Last Updated" to current date
- Update "Next Milestone" if it changed

---

## 7. Save and Confirm

Save the timeline file and display confirmation:

```
═══════════════════════════════════════════════════════════
   ✅ CHAPTER MILESTONES UPDATED
═══════════════════════════════════════════════════════════

Changes Made:
{list what was changed - added chapters, changed dates, renamed, etc.}

Updated Chapter Milestones:
- Chapter 1: {title} - {date}
- Chapter 2: {title} - {date}
...

Timeline saved: {file path}

═══════════════════════════════════════════════════════════
```

---

## 8. Menu

Present options:

```
┌─────────────────────────────────────────┐
│          WHAT WOULD YOU LIKE TO DO?     │
└─────────────────────────────────────────┘

[C] Continue editing (return to edit menu)
[X] Exit and save

Your choice:
```

**On user selection:**
- **[C] Continue:** Load and execute `./steps-e/step-e-01-assess-timeline.md`
- **[X] Exit:** End workflow (file already saved)

---

## Notes for LLM

- This step provides fine-grained control over chapter structure
- Don't change the defense date - that's a separate edit
- Validate date logic carefully (sequential, no overlaps, before defense)
- Offer to recalculate weekly goals since they depend on chapters
- The four edit options give users flexibility without being overwhelming
- Save after each edit is applied

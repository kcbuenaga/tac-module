# Step E-02: Edit Defense Date

**Goal:** Change the defense deadline and recalculate all dependent milestones (chapter and weekly).

---

## 1. Load Current Timeline

Read the timeline file being edited:
- Extract current `defenseDate` from frontmatter
- Extract current `chapterCount` and chapter milestones
- Display current defense date to user

---

## 2. Collect New Defense Date

Ask the user for the new defense date:

```
Current Defense Date: {current defenseDate}

What is your new defense date? (YYYY-MM-DD)
```

**Validation:**
- Date must be in the future
- If date is earlier than original, warn about compressed timeline
- If date is later, acknowledge extra time available
- If date is in the past, display error and ask again

**Calculate impact:**
- Original days remaining: {original daysRemaining}
- New days remaining: {calculate from today to new date}
- Difference: {+/- days change}

**Display impact:**
```
Timeline Impact:
- Original deadline: {old date}
- New deadline: {new date}
- Days gained/lost: {difference}
```

---

## 3. Confirm Recalculation

Explain what will be recalculated:

```
Changing the defense date will automatically recalculate:
- All chapter completion deadlines
- All weekly goal dates
- Progress tracking milestones

Your progress tracking will be preserved, but future dates will shift.

Proceed with recalculation? [Y/N]
```

**If user says No:**
- Abort edit, return to assess menu
- Don't modify the file

**If user says Yes:**
- Proceed with recalculation

---

## 4. Recalculate Chapter Milestones

Using the same algorithm from step-03-chapter-milestones.md:

1. Reserve final 2-3 weeks before defense for final review
2. Calculate milestone date for last chapter: new_defense_date - 3 weeks
3. Divide remaining time by chapter count
4. Work backwards to generate new chapter deadlines

**Update the timeline file:**
- Find `## Chapter Completion Milestones` section
- Replace the entire section content (between the section header and next `##`) with recalculated milestones
- Use same table format as original

---

## 5. Recalculate Weekly Goals

Using the same algorithm from step-04-weekly-goals.md:

1. Calculate new weeks remaining
2. Generate new weekly goals aligned with new chapter deadlines
3. Preserve weekly goal content/tasks where possible, just update dates

**Update the timeline file:**
- Find `## Weekly Goals` section
- Replace the entire section content with recalculated weekly goals
- Maintain same goal structure, just update dates

---

## 6. Update Frontmatter and Metadata

Update the timeline frontmatter:
- `defenseDate: {new date}`
- `daysRemaining: {new calculation}`
- Add 'step-e-02-edit-defense-date' to `stepsCompleted` array
- Set `lastStep: 'step-e-02-edit-defense-date'`

Update the Progress Tracking section:
- Update "Last Updated" to current date
- Update "Days Remaining" field
- Update "Next Milestone" if it changed

---

## 7. Save and Confirm

Save the updated timeline file and display confirmation:

```
═══════════════════════════════════════════════════════════
   ✅ DEFENSE DATE UPDATED
═══════════════════════════════════════════════════════════

New Defense Date: {new date}
Days Remaining: {new days remaining}

Recalculated:
- Chapter milestones: {count} chapters with new dates
- Weekly goals: Updated to align with new chapters
- Progress tracking: Updated

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

- This is a complex edit that cascades through the entire timeline
- Preserve user's progress tracking and completed items
- Recalculate but maintain the same structure and format
- Be clear about the impact of date changes (earlier = more pressure, later = more time)
- All chapter and weekly calculations should use the same algorithms as Create mode
- Save the file immediately after recalculation (don't wait for menu)

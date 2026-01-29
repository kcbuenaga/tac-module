# Step E-05: Update Progress Tracking

**Goal:** Mark completed milestones, update current status, and celebrate progress.

---

## 1. Load Current Timeline

Read the timeline file being edited:
- Extract all chapter milestones
- Extract all weekly goals
- Extract current progress tracking section
- Display current status

```
Current Progress Tracking:
- Last Updated: {date}
- Completed Milestones: {list}
- Current Focus: {focus}
- Status: {status}
```

---

## 2. Check for Completed Items

Ask the user what progress they want to update:

```
┌─────────────────────────────────────────┐
│       WHAT PROGRESS TO UPDATE?          │
└─────────────────────────────────────────┘

[1] Mark chapters as complete
[2] Check off weekly goals
[3] Update current focus
[4] Change overall status
[5] Add progress notes

Your choice:
```

---

## 3. Execute Selected Update

### Option 1: Mark Chapters as Complete

**Display chapter list:**
```
Chapters:
[ ] Chapter 1: {title} - {date}
[ ] Chapter 2: {title} - {date}
[✓] Chapter 3: {title} - {date} (COMPLETED)
[ ] Chapter 4: {title} - {date}
[ ] Chapter 5: {title} - {date}
```

**Ask which chapters are complete:**
- Show list of chapters not yet marked complete
- User selects which chapter(s) to mark as complete
- Validate: chapters should be marked complete in order (warn if skipping)

**Update:**
- Add checkmark (✓) or "COMPLETED" indicator to chapter milestone table
- Add chapter to "Completed Milestones" list in Progress Tracking
- Calculate percentage complete: {completed chapters} / {total chapters}

**Celebrate:**
```
🎉 Great progress! Chapter {X} marked as complete!
You're now {percentage}% done with your chapter milestones.
```

---

### Option 2: Check Off Weekly Goals

**Display recent weeks:**
```
Week 1 ({dates}):
- [✓] Goal 1 (checked off)
- [ ] Goal 2
- [ ] Goal 3

Week 2 ({dates}):
- [ ] Goal 1
- [ ] Goal 2
```

**Ask which week to update:**
- User selects week number

**Show goals for that week:**
- Display current state (checked/unchecked)
- Ask which goals are now complete

**Update:**
- Change `- [ ]` to `- [✓]` for completed goals
- Add completed goals to "Completed Milestones" section with date
- Calculate weekly completion rate

---

### Option 3: Update Current Focus

**Show current focus:**
```
Current Focus:
{existing focus text}
```

**Ask for new focus:**
```
What is your current focus?
(e.g., "Drafting Chapter 3 methodology section", "Revising Chapter 2 based on advisor feedback")
```

**Update:**
- Replace the "Current Focus" section in Progress Tracking
- Use the new focus text provided by user

---

### Option 4: Change Overall Status

**Show current status:**
```
Current Status: {current status}
```

**Ask for new status:**
```
┌─────────────────────────────────────────┐
│          SELECT NEW STATUS              │
└─────────────────────────────────────────┘

[1] ✅ On track
[2] ⚠️  Behind schedule but manageable
[3] 🚨 Significantly delayed - need to adjust
[4] 🎯 Ahead of schedule
[5] 🏁 Complete and submitted

Your choice:
```

**Update:**
- Change "Status" field in Progress Tracking
- If "Behind schedule" or "Significantly delayed", suggest running Edit mode to adjust timeline
- If "Complete and submitted", congratulate and mark timeline as archived

---

### Option 5: Add Progress Notes

**Ask for progress note:**
```
Add a progress note or reflection:
(e.g., "Met with advisor - need to expand lit review section")
```

**Update:**
- Add a new section if it doesn't exist: `### Progress Notes`
- Append note with timestamp:
  ```
  - **{date}:** {note text}
  ```

---

## 4. Update Progress Tracking Section

1. **Read the current timeline file**
2. **Find the section:** `## Progress Tracking`
3. **Update the section** with modifications:

```markdown
## Progress Tracking

**Last Updated:** {current date}

### Completed Milestones
{updated list of completed items with dates}

### Current Focus
{updated focus text}

### Status
{updated status with emoji}

### Progress Notes (if exists)
{timestamped notes}

{rest of section content}
```

4. **Update frontmatter:**
   - Add 'step-e-05-update-progress' to `stepsCompleted` array
   - Set `lastStep: 'step-e-05-update-progress'`
   - Update `status` field if overall status changed

5. **Save the file**

---

## 5. Calculate and Display Progress Summary

Show the student their overall progress:

```
═══════════════════════════════════════════════════════════
   📊 YOUR THESIS PROGRESS
═══════════════════════════════════════════════════════════

Chapters Complete: {X} of {Y} ({percentage}%)
Weekly Goals Complete: {count} goals checked off
Days Remaining: {days until defense}

Current Status: {status emoji and text}
Current Focus: {focus}

Recent Milestones:
{list last 3-5 completed items}

Keep going! {motivational message based on status}

═══════════════════════════════════════════════════════════
```

**Motivational messages:**
- If on track: "You're making steady progress - keep up the great work!"
- If behind: "Don't panic - adjust your timeline and focus on weekly goals."
- If ahead: "Excellent progress! Use the extra time for deeper revision."

---

## 6. Save and Confirm

Display confirmation:

```
✅ Progress tracking updated and saved.
Timeline file: {path}
```

---

## 7. Menu

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

- This is the most frequently used edit step - students update progress regularly
- Be encouraging and celebrate completed milestones
- Progress tracking helps combat procrastination by showing momentum
- Checkbox format (`- [✓]`) works in most markdown viewers
- Motivational messages should be genuine, not over-the-top
- If student is behind, suggest using Edit mode to adjust timeline realistically

# Step E-04: Edit Weekly Goals

**Goal:** Adjust weekly milestone breakdown without changing chapter or defense dates.

---

## 1. Load Current Timeline

Read the timeline file being edited:
- Extract chapter milestones from document
- Extract current weekly goals from `## Weekly Goals` section
- Display summary of weekly structure

```
Current Weekly Goals Structure:
- Next 8 weeks defined with specific goals
- {count} monthly milestones beyond week 8
```

---

## 2. Ask What to Edit

Present options:

```
┌─────────────────────────────────────────┐
│    WHAT WEEKLY GOALS WOULD YOU LIKE     │
│              TO MODIFY?                 │
└─────────────────────────────────────────┘

[1] Edit a specific week's goals
[2] Add goals to a week
[3] Remove goals from a week
[4] Regenerate all weekly goals from scratch

Your choice:
```

---

## 3. Execute Selected Edit

### Option 1: Edit a Specific Week's Goals

**Ask which week:**
- Display list of weeks with current goals
- User selects week number (e.g., "Week 3")

**Show current goals for that week:**
```
Week 3 ({date range}): [Target: Chapter X]
- [ ] Current goal 1
- [ ] Current goal 2
```

**Ask how to edit:**
- [A] Replace all goals for this week
- [B] Modify individual goal text
- [C] Add/remove goals from this week

**Apply edits:**
- Update the specific week's content
- Maintain checkbox format: `- [ ] {goal text}`
- Keep chapter target context

---

### Option 2: Add Goals to a Week

**Ask which week:**
- Display list of weeks
- User selects week number

**Ask for new goal(s):**
- Collect goal text (can be multiple)
- Format as checkboxes
- Append to that week's goal list

**Apply:**
- Insert new goals into the week
- Maintain structure and formatting

---

### Option 3: Remove Goals from a Week

**Ask which week:**
- Display list of weeks
- User selects week number

**Show current goals:**
- Display numbered list of goals for that week
- User selects which goal(s) to remove

**Apply:**
- Remove selected goals
- If week becomes empty, add placeholder: "- [ ] Continue work on Chapter X"

---

### Option 4: Regenerate All Weekly Goals

**Warn the user:**
```
This will delete ALL existing weekly goals and regenerate them
based on your current chapter milestones.

Any custom goals or progress tracking in weekly goals will be lost.

Are you sure? [Y/N]
```

**If No:**
- Return to edit menu
- Don't modify anything

**If Yes:**
- Use the algorithm from step-04-weekly-goals.md
- Generate completely new weekly goals based on current chapter dates
- Replace the entire `## Weekly Goals` section

---

## 4. Update Weekly Goals Section

1. **Read the current timeline file**
2. **Find the section:** `## Weekly Goals`
3. **Apply the modification:**
   - For Options 1-3: Update the specific week(s)
   - For Option 4: Replace entire section with regenerated content

4. **Maintain structure:**
   - Week format: `**Week X ({start} - {end}):** [Target: Chapter Y]`
   - Goal format: `- [ ] {goal text}`
   - Monthly milestone format: `**Month {name} ({range}):**`

5. **Save the file**

---

## 5. Update Frontmatter and Metadata

Update the timeline frontmatter:
- Add 'step-e-04-edit-weekly' to `stepsCompleted` array
- Set `lastStep: 'step-e-04-edit-weekly'`

Update Progress Tracking section:
- Update "Last Updated" to current date
- If Week 1 goals changed, update "Current Focus"

---

## 6. Save and Confirm

Save the timeline file and display confirmation:

```
═══════════════════════════════════════════════════════════
   ✅ WEEKLY GOALS UPDATED
═══════════════════════════════════════════════════════════

Changes Made:
{describe what was changed - which weeks, what was added/removed/edited}

Example of Updated Week:
Week 3 ({date range}): [Target: Chapter X]
- [ ] {updated goal 1}
- [ ] {updated goal 2}

Timeline saved: {file path}

═══════════════════════════════════════════════════════════
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

- Weekly goals are the most frequently edited section (as students make progress)
- Maintain checkbox format so users can check off completed goals
- Be careful with Option 4 (regenerate all) - warn about data loss
- Weekly goals should stay aligned with chapter milestones
- Students may want to add personalized goals beyond what was auto-generated
- Preserve the structure and formatting for consistency

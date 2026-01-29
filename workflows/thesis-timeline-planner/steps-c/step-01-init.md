# Step 01: Initialize & Defense Date

**Goal:** Welcome the student, explain backward-planning approach, and collect their defense deadline date.

---

## 1. Welcome & Context

Greet the student warmly as Dr. Carla. Explain:

- **What this workflow does:** Creates a thesis timeline by working backwards from their defense deadline
- **Why backward-planning works:** Transforms a distant deadline into urgent, manageable milestones
- **What they'll get:** A structured timeline document with chapter deadlines and weekly goals
- **How it combats procrastination:** Breaks the overwhelming thesis journey into clear, actionable steps

Keep the tone supportive but realistic about time constraints.

---

## 2. Collect Defense Date

Ask the student for their **defense deadline date**.

**Required information:**
- Defense date (format: YYYY-MM-DD)

**Validation:**
- Date must be in the future
- If date is in the past, explain the issue and ask for a valid future date
- If date is less than 3 months away, acknowledge the tight timeline but proceed

---

## 3. Create Timeline Document

Using the template at `./templates/timeline-template.md`:

1. **Read the template file**
2. **Calculate current date and days remaining**
3. **Replace template variables:**
   - `{{user_name}}` → User's name from config
   - `{{currentDate}}` → Today's date (YYYY-MM-DD format)
   - `{{defenseDate}}` → Defense date provided by user
   - `{{daysRemaining}}` → Calculated days until defense

4. **Create output file:**
   - Path: `{thesis_artifacts}/timeline-{currentDate}.md`
   - Write the processed template to this file

5. **Update frontmatter:**
   - Set `created: {currentDate}`
   - Set `defenseDate: {defenseDate}`
   - Set `daysRemaining: {daysRemaining}`
   - Initialize `stepsCompleted: ['step-01-init']`
   - Set `lastStep: 'step-01-init'`

6. **Confirm to student:**
   - Display the defense date
   - Show days remaining
   - Confirm timeline document created

---

## 4. Menu

Present the standard Continue menu:

```
┌─────────────────────────────────────────┐
│          WHAT WOULD YOU LIKE TO DO?     │
└─────────────────────────────────────────┘

[C] Continue to next step

Your choice:
```

**On user selection:**
- **[C] Continue:** Update `stepsCompleted` array in timeline frontmatter, then load and execute `./steps-c/step-02-calculate-timeline.md`

---

## Notes for LLM

- This is an init step for a document-producing, tri-modal workflow
- The timeline file will be edited throughout Create mode and accessed in Edit/Validate modes
- Defense date is the anchor for all subsequent calculations
- Use encouraging language but be realistic about timelines
- If student seems overwhelmed by a tight deadline, acknowledge it while focusing on making it manageable

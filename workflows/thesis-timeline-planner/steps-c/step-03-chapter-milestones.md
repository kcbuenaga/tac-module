# Step 03: Chapter Milestones

**Goal:** Collaborate with the student to define chapter structure and calculate chapter completion deadlines.

---

## 1. Load Timeline Document

Read the current timeline file:
- Path: `{thesis_artifacts}/timeline-{created}.md`
- Extract defense date and days remaining from frontmatter

---

## 2. Discuss Chapter Structure

Ask the student about their thesis chapter structure:

**Common thesis structures:**
- **5 chapters:** Introduction, Literature Review, Methodology, Results/Analysis, Conclusion
- **6 chapters:** Introduction, Theoretical Framework, Literature Review, Methodology, Results/Analysis, Conclusion
- **Custom:** Some programs have different requirements

**Questions to ask:**
1. How many chapters will your thesis have?
2. Which chapters are already drafted or in progress?
3. Are there any chapters that will take significantly more/less time than others?

**Document their responses** to inform milestone calculation.

---

## 3. Calculate Chapter Deadlines

Using the defense date and chapter count, calculate completion deadlines working backwards:

**Algorithm:**
1. Reserve final 2-3 weeks before defense for final review and defense prep
2. Calculate milestone date for last chapter completion: defense_date - 3 weeks
3. Divide remaining time equally among chapters (or adjust based on student's input about chapter complexity)
4. Work backwards from last chapter to first

**Example calculation (5 chapters, 150 days remaining):**
- Defense date: 2026-06-30
- Final review buffer: June 9 - June 30 (21 days)
- Chapter 5 completion: June 9
- Remaining time for chapters: 129 days / 5 chapters ≈ 26 days per chapter
- Work backwards:
  - Chapter 5: June 9
  - Chapter 4: May 14
  - Chapter 3: April 18
  - Chapter 2: March 23
  - Chapter 1: February 25

**If chapters have different complexity:**
- Adjust time allocation (e.g., Results/Analysis might need 40% more time)
- Methodology might need less time if already approved
- Introduction/Conclusion typically faster

**Present the proposed chapter deadlines to the student** and ask if they seem realistic.

**If student wants adjustments:**
- Collaborate to refine the dates
- Ensure total time still fits within available period
- Document any concerns about tight sections

---

## 4. Append Chapter Milestones to Timeline

Once chapter deadlines are agreed upon:

1. **Read the current timeline file**
2. **Find the section:** `## Chapter Completion Milestones`
3. **Find the comment:** `<!-- Chapter milestones will be appended here -->`
4. **Append chapter milestones AFTER the comment:**

```markdown
### Chapter Milestones

**Total Chapters:** {chapterCount}

| Chapter | Target Completion | Days from Now |
|---------|-------------------|---------------|
| Chapter 1: {title} | {date} | {days} |
| Chapter 2: {title} | {date} | {days} |
| Chapter 3: {title} | {date} | {days} |
| Chapter 4: {title} | {date} | {days} |
| Chapter 5: {title} | {date} | {days} |

**Note:** These deadlines work backwards from your defense date. Each chapter builds toward the next.
```

5. **Update frontmatter:**
   - Add 'step-03-chapter-milestones' to `stepsCompleted` array
   - Set `lastStep: 'step-03-chapter-milestones'`
   - Set `chapterCount: {number}`

6. **Save the file**

---

## 5. Confirm to Student

Display the chapter milestones clearly:
```
Chapter Milestones Set:
- Chapter 1: [Date] (X days from now)
- Chapter 2: [Date] (X days from now)
...
```

Remind them: "These are working deadlines. We can adjust them in Edit mode if needed."

---

## 6. Menu

Present the standard Continue menu:

```
┌─────────────────────────────────────────┐
│          WHAT WOULD YOU LIKE TO DO?     │
└─────────────────────────────────────────┘

[C] Continue to weekly goals

Your choice:
```

**On user selection:**
- **[C] Continue:** Load and execute `./steps-c/step-04-weekly-goals.md`

---

## Notes for LLM

- This step requires collaboration - work with the student to create realistic deadlines
- Chapter titles can be generic (Chapter 1, Chapter 2) or specific if student provides them
- Some flexibility is needed based on student's current progress
- The backward-planning approach is key: start from defense date and work backwards
- Be encouraging but realistic about tight timelines

# Step 04: Weekly Goals

**Goal:** Break down chapter deadlines into weekly actionable milestones that keep the student on track.

---

## 1. Load Timeline Document

Read the current timeline file:
- Path: `{thesis_artifacts}/timeline-{created}.md`
- Extract defense date, days remaining, and chapter milestones from the document

---

## 2. Calculate Weekly Breakdown

Using the chapter milestones, create weekly goals:

**Algorithm:**
1. Calculate weeks remaining until defense: `daysRemaining / 7`
2. Determine number of weeks per chapter based on chapter deadlines
3. For each chapter, create 2-4 weekly sub-goals depending on time allocated

**Weekly goal types:**
- **Research weeks:** Literature review, source collection, note-taking
- **Drafting weeks:** First draft sections, structure development
- **Revision weeks:** Refinement, advisor feedback incorporation
- **Analysis weeks:** Data processing, results interpretation
- **Writing weeks:** Focused writing sessions

**Example for Chapter 3 (Methodology) with 4 weeks:**
- Week 1: Finalize methodology framework and approach
- Week 2: Draft data collection procedures
- Week 3: Draft analysis techniques section
- Week 4: Revise and integrate advisor feedback

---

## 3. Create Weekly Goals

Generate weekly goals working backwards from defense date:

**Structure:**
- Start with current week as Week 1
- Create goals for the next 8-12 weeks (immediate horizon)
- For weeks beyond that, create monthly milestones
- Focus on making goals specific and actionable

**Good weekly goal characteristics:**
- **Specific:** "Draft Introduction section 1.1-1.3" not "Work on intro"
- **Achievable:** Can be completed in 1 week with consistent work
- **Connected:** Ties to chapter milestone
- **Accountable:** Clear completion criteria

---

## 4. Append Weekly Goals to Timeline

1. **Read the current timeline file**
2. **Find the section:** `## Weekly Goals`
3. **Find the comment:** `<!-- Weekly goals will be appended here -->`
4. **Append weekly goals AFTER the comment:**

```markdown
### Next 8 Weeks

**Week 1 ({start_date} - {end_date}):** [Target: Chapter X]
- [ ] {Specific goal 1}
- [ ] {Specific goal 2}

**Week 2 ({start_date} - {end_date}):** [Target: Chapter X]
- [ ] {Specific goal 1}
- [ ] {Specific goal 2}

**Week 3 ({start_date} - {end_date}):** [Target: Chapter X]
- [ ] {Specific goal 1}
- [ ] {Specific goal 2}

... (continue for 8 weeks)

### Monthly Milestones (Beyond Week 8)

**Month {name} ({date_range}):**
- Complete Chapter X first draft
- Begin Chapter Y research

**Month {name} ({date_range}):**
- Complete Chapter Y first draft
- Begin Chapter Z research

... (continue until defense month)
```

5. **Update frontmatter:**
   - Add 'step-04-weekly-goals' to `stepsCompleted` array
   - Set `lastStep: 'step-04-weekly-goals'`

6. **Save the file**

---

## 5. Explain Weekly Goal System

Tell the student:

**How to use weekly goals:**
- Review your weekly goals every Monday morning
- Check off completed items as you go
- Don't panic if you miss a week - adjust forward
- Update progress in Edit mode when needed

**Why weekly goals work:**
- Transforms distant deadline into immediate tasks
- Creates weekly accountability
- Prevents last-minute panic
- Shows steady progress

**Flexibility:**
- These are guidelines, not rigid requirements
- Life happens - adjust as needed in Edit mode
- The key is maintaining forward momentum

---

## 6. Menu

Present the standard Continue menu:

```
┌─────────────────────────────────────────┐
│          WHAT WOULD YOU LIKE TO DO?     │
└─────────────────────────────────────────┘

[C] Continue to finalize timeline

Your choice:
```

**On user selection:**
- **[C] Continue:** Load and execute `./steps-c/step-05-finalize-timeline.md`

---

## Notes for LLM

- Weekly goals should be specific and actionable
- Focus on the immediate 8 weeks - monthly for beyond
- Adapt goal phrasing to student's discipline (STEM vs humanities)
- Use checkbox format `- [ ]` for trackable goals
- Balance ambition with realism
- Remind student these can be edited later

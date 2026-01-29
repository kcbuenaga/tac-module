# Step 02: Calculate Overall Timeline

**Goal:** Calculate total days remaining, explain the planning phases, and establish the timeline framework.

---

## 1. Load Timeline Document

Read the timeline file created in step-01:
- Path: `{thesis_artifacts}/timeline-{created}.md` (get created date from current timeline frontmatter)
- Extract defense date and days remaining from frontmatter

---

## 2. Calculate Time Allocation

Based on days remaining, explain the three phases of thesis work:

**Phase 1: Research & Foundation (30% of time)**
- Literature review deepening
- Methodology finalization
- Data collection setup

**Phase 2: Core Work (45% of time)**
- Data collection/analysis
- Main chapter writing
- Iterative advisor feedback

**Phase 3: Finalization (25% of time)**
- Final revisions
- Defense preparation
- Document formatting

**Calculate phase durations:**
- Research phase: 30% of days remaining
- Core work phase: 45% of days remaining
- Finalization phase: 25% of days remaining

**Present the breakdown to the student:**
```
Timeline Breakdown:
- Total days until defense: {daysRemaining}
- Research phase: {researchDays} days
- Core work phase: {coreWorkDays} days
- Finalization phase: {finalizationDays} days
```

---

## 3. Reality Check

Based on total days remaining, provide context:

**If > 12 months:**
- Acknowledge they have good lead time
- Emphasize importance of steady progress
- Warn against complacency

**If 6-12 months:**
- This is typical thesis timeline
- Requires consistent weekly work
- Need discipline to stay on track

**If 3-6 months:**
- Tight but doable timeline
- Will require focused effort
- Some flexibility needed with milestones

**If < 3 months:**
- Very aggressive timeline
- May need to adjust scope or expectations
- Will require intense focus
- Consider discussing with advisor

Provide this reality check in a supportive but honest way.

---

## 4. Explain Next Steps

Tell the student what's coming next:
- Step 3: Define chapter structure and calculate chapter completion deadlines
- Step 4: Break down chapters into weekly actionable goals
- Step 5: Review and finalize the complete timeline

Emphasize that they'll collaborate on making these milestones realistic.

---

## 5. Menu

Present the standard Continue menu:

```
┌─────────────────────────────────────────┐
│          WHAT WOULD YOU LIKE TO DO?     │
└─────────────────────────────────────────┘

[C] Continue to chapter milestones

Your choice:
```

**On user selection:**
- **[C] Continue:** Update `stepsCompleted` array in timeline frontmatter with 'step-02-calculate-timeline', then load and execute `./steps-c/step-03-chapter-milestones.md`

---

## Notes for LLM

- This step provides context and sets expectations
- No file writing required (calculations are presented, not saved yet)
- The reality check helps students understand their timeline honestly
- Phase percentages are guidelines, not rigid rules
- Maintain encouraging tone while being realistic

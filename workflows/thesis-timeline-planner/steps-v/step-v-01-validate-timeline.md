# Step V-01: Validate Timeline

**Goal:** Perform comprehensive validation of the timeline for completeness, logical consistency, and feasibility.

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
- Extract all sections and frontmatter data

---

## 2. Run Validation Checks

Perform a series of validation checks across multiple categories:

### 2.1 Completeness Validation

Check that all required sections exist and are populated:

**Required Sections:**
- [ ] Defense Deadline section exists
- [ ] Chapter Completion Milestones section exists
- [ ] Weekly Goals section exists
- [ ] Progress Tracking section exists

**Required Frontmatter:**
- [ ] `created` field present
- [ ] `defenseDate` field present
- [ ] `daysRemaining` field present
- [ ] `chapterCount` field present
- [ ] `stepsCompleted` array present

**Content Completeness:**
- [ ] Defense date is specified
- [ ] At least 3 chapter milestones defined
- [ ] At least 4 weekly goals defined
- [ ] Progress tracking has "Current Focus" defined

**Scoring:**
- Calculate completeness percentage: (passed checks / total checks) × 100%

---

### 2.2 Date Logic Validation

Verify that all dates are logical and sequential:

**Defense Date Logic:**
- [ ] Defense date is in the future (not past)
- [ ] Defense date is at least 2 weeks away (minimum feasibility)

**Chapter Date Logic:**
- [ ] All chapter dates are before defense date
- [ ] Chapter dates are sequential (Chapter 1 before Chapter 2, etc.)
- [ ] Last chapter completion is at least 2 weeks before defense (buffer)
- [ ] No chapter dates are in the past (or mark as concern if past)

**Weekly Goal Date Logic:**
- [ ] Weekly date ranges are sequential
- [ ] Weekly goals align generally with chapter milestones
- [ ] No weekly goals scheduled after defense date

**Scoring:**
- Count passed vs failed checks
- Any failed check is a critical issue

---

### 2.3 Feasibility Validation

Assess whether the timeline is realistic:

**Time Allocation Check:**
- Calculate average days per chapter
- **Green:** > 20 days per chapter (comfortable)
- **Yellow:** 10-20 days per chapter (tight but doable)
- **Red:** < 10 days per chapter (very aggressive)

**Total Timeline Check:**
- **Green:** > 12 months remaining (excellent lead time)
- **Yellow:** 6-12 months remaining (typical timeline)
- **Orange:** 3-6 months remaining (tight timeline)
- **Red:** < 3 months remaining (very aggressive)

**Milestone Density Check:**
- Calculate milestones per month
- **Green:** < 2 major milestones/month (manageable)
- **Yellow:** 2-3 major milestones/month (busy)
- **Red:** > 3 major milestones/month (potentially overwhelming)

**Scoring:**
- Green = 1 point, Yellow = 0.5 points, Orange/Red = 0 points
- Calculate feasibility score: (points / total checks) × 100%

---

### 2.4 Progress Alignment Validation

Check if progress tracking aligns with the timeline:

- [ ] "Last Updated" date is recent (within 30 days)
- [ ] "Current Focus" mentions a specific chapter or task
- [ ] "Status" field is set to a valid value
- [ ] If chapters are marked complete, their dates should be past
- [ ] If defense date is near (<2 weeks), final chapters should be complete

**Scoring:**
- Calculate alignment score: (passed checks / total checks) × 100%

---

### 2.5 Structure and Format Validation

Verify formatting and structure:

- [ ] Chapter milestones use table or list format
- [ ] Weekly goals use checkbox format (`- [ ]`)
- [ ] Dates are in consistent format (YYYY-MM-DD or readable format)
- [ ] Section headers are present and properly formatted
- [ ] Frontmatter is valid YAML

**Scoring:**
- Calculate format score: (passed checks / total checks) × 100%

---

## 3. Generate Validation Report

Compile all validation results into a structured report:

```markdown
# Timeline Validation Report

**Timeline File:** {path}
**Validation Date:** {current date}
**Defense Date:** {defenseDate}
**Days Remaining:** {calculate current days}

---

## Overall Assessment

**Status:** {PASS / CONCERNS / FAIL}

**Overall Score:** {average of all category scores}/100

---

## Category Scores

| Category | Score | Status |
|----------|-------|--------|
| Completeness | {score}% | {✅ / ⚠️ / ❌} |
| Date Logic | {score}% | {✅ / ⚠️ / ❌} |
| Feasibility | {score}% | {✅ / ⚠️ / ❌} |
| Progress Alignment | {score}% | {✅ / ⚠️ / ❌} |
| Structure & Format | {score}% | {✅ / ⚠️ / ❌} |

**Legend:**
- ✅ Pass (>= 80%)
- ⚠️ Concerns (50-79%)
- ❌ Fail (< 50%)

---

## Detailed Findings

### Completeness
{list passed and failed checks}

### Date Logic
{list passed and failed checks, highlight any critical issues}

### Feasibility
{describe timeline assessment - comfortable, tight, aggressive}
{highlight any red/yellow flags}

### Progress Alignment
{list passed and failed checks}

### Structure & Format
{list passed and failed checks}

---

## Recommendations

{Generate 3-5 specific recommendations based on findings:}
- If completeness fails: "Add missing sections to your timeline"
- If date logic fails: "Fix date sequencing issues in chapters"
- If feasibility is red: "Consider adjusting defense date or reducing scope"
- If progress stale: "Update progress tracking to reflect current status"
- If format issues: "Fix formatting in weekly goals section"

---

## Next Steps

{Provide actionable next steps:}
- If PASS: "Your timeline looks good! Keep tracking progress regularly."
- If CONCERNS: "Address the recommendations above using Edit mode."
- If FAIL: "Critical issues found. Use Edit mode to fix date logic and structure."

Use Edit mode to make changes: `/tac:dr-carla:timeline -e`

---

*Validation report generated by Dr. Carla's Thesis Timeline Planner*
```

**Save validation report:**
- Path: `{thesis_artifacts}/timeline-validation-{current_date}.md`
- This creates a standalone report file

---

## 4. Determine Validation Outcome

Based on overall score:

**PASS (>= 80% overall):**
- All critical elements present and logical
- Minor issues only
- Timeline is ready to use

**CONCERNS (50-79% overall):**
- Most elements present but issues exist
- Needs some fixes but usable
- Recommend addressing findings

**FAIL (< 50% overall):**
- Critical issues found
- Timeline needs significant work
- Should not be used as-is

---

## 5. Update Timeline Frontmatter

Update the timeline file frontmatter:
- Add 'step-v-01-validate-timeline' to `stepsCompleted` array
- Set `lastStep: 'step-v-01-validate-timeline'`
- Add `lastValidation: {current date}`
- Add `validationStatus: {PASS/CONCERNS/FAIL}`
- Add `validationScore: {overall score}`

Save the timeline file.

---

## 6. Display Summary

Show validation summary to user:

```
═══════════════════════════════════════════════════════════
   🔍 TIMELINE VALIDATION COMPLETE
═══════════════════════════════════════════════════════════

Overall Status: {PASS / CONCERNS / FAIL}
Overall Score: {score}/100

Category Results:
- Completeness: {score}% {emoji}
- Date Logic: {score}% {emoji}
- Feasibility: {score}% {emoji}
- Progress Alignment: {score}% {emoji}
- Structure: {score}% {emoji}

Validation report saved: {report path}

═══════════════════════════════════════════════════════════
```

---

## 7. Menu

Present the Continue menu:

```
┌─────────────────────────────────────────┐
│          WHAT WOULD YOU LIKE TO DO?     │
└─────────────────────────────────────────┘

[C] Continue to view detailed report

Your choice:
```

**On user selection:**
- **[C] Continue:** Load and execute `./steps-v/step-v-02-validation-report.md`

---

## Notes for LLM

- Validation should be thorough but not overly critical
- Feasibility checks are guidelines - some students work faster than others
- Date logic errors are critical and should be highlighted
- The validation report is a separate file for reference
- Be constructive in recommendations - focus on how to fix, not just what's wrong

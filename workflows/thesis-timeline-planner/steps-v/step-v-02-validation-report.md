# Step V-02: Validation Report Presentation

**Goal:** Present the detailed validation report and provide actionable guidance for improvements.

---

## 1. Load Validation Report

Read the validation report generated in step-v-01:
- Path: `{thesis_artifacts}/timeline-validation-{current_date}.md`
- Extract overall status, scores, and findings

---

## 2. Present Detailed Report

Display the complete validation report to the user:

```
═══════════════════════════════════════════════════════════
   📋 DETAILED VALIDATION REPORT
═══════════════════════════════════════════════════════════

{display entire validation report content}

═══════════════════════════════════════════════════════════
```

---

## 3. Highlight Critical Issues

If validation status is CONCERNS or FAIL, highlight the most critical issues:

```
⚠️  CRITICAL ISSUES REQUIRING ATTENTION:

{list 3-5 most important issues found:}
1. {Issue description}
   → Fix: {How to fix this issue}

2. {Issue description}
   → Fix: {How to fix this issue}

...
```

**Examples of critical issues:**
- Defense date is in the past
- Chapter dates are not sequential
- Missing required sections
- No weekly goals defined
- Extremely compressed timeline (< 30 days total)

---

## 4. Provide Contextual Guidance

Based on the validation outcome, provide guidance:

### If PASS (>= 80%)

```
✅ Your timeline is in great shape!

Your thesis timeline is complete, logical, and feasible. Here's how to use it effectively:

1. **Weekly Reviews:** Check your weekly goals every Monday
2. **Progress Updates:** Use Edit mode monthly to mark completed milestones
3. **Stay Flexible:** Adjust timeline if circumstances change
4. **Maintain Momentum:** Consistent weekly progress beats last-minute marathons

Keep up the excellent planning! 🎓
```

---

### If CONCERNS (50-79%)

```
⚠️  Your timeline needs some improvements.

The structure is there, but a few issues need attention:

**High Priority:**
{list 2-3 most important fixes}

**Medium Priority:**
{list 2-3 less critical improvements}

**How to Fix:**
Use Edit mode to address these issues: `/tac:dr-carla:timeline -e`

Recommended sections to edit:
{list specific edit mode options - defense date, chapters, weekly, progress}

Once fixed, run validation again to confirm improvements.
```

---

### If FAIL (< 50%)

```
❌ Your timeline has critical issues that must be fixed.

The timeline cannot be reliably used in its current state. Key problems:

**Critical Problems:**
{list all critical issues}

**Required Actions:**
1. {Most important fix}
2. {Second most important fix}
3. {Third most important fix}

**Recommendation:**
Consider using Edit mode to fix specific sections, or recreate the timeline if issues are widespread.

- Fix sections: `/tac:dr-carla:timeline -e`
- Start fresh: `/tac:dr-carla:timeline` (creates new timeline)

Don't be discouraged! These issues are fixable. A solid timeline is worth the effort.
```

---

## 5. Explain Validation Categories

Provide brief explanations of what each category checks:

```
📚 UNDERSTANDING VALIDATION CATEGORIES

**Completeness:** Checks that all required sections and data are present
**Date Logic:** Ensures all dates are sequential and make sense
**Feasibility:** Assesses whether the timeline is realistic given time constraints
**Progress Alignment:** Verifies progress tracking reflects actual status
**Structure:** Confirms proper formatting for usability

Each category contributes to your overall timeline quality score.
```

---

## 6. Offer Next Steps

Present clear next steps based on validation outcome:

```
┌─────────────────────────────────────────┐
│              NEXT STEPS                 │
└─────────────────────────────────────────┘

{If PASS:}
✅ Your timeline is ready to use!
   - Start working on Week 1 goals
   - Set a recurring reminder to review weekly goals
   - Update progress monthly

{If CONCERNS:}
⚠️  Fix the issues found:
   - Use Edit mode: /tac:dr-carla:timeline -e
   - Focus on critical issues first
   - Re-validate after changes

{If FAIL:}
❌ Address critical problems:
   - Fix date logic errors immediately
   - Complete missing sections
   - Consider recreating timeline if needed
   - Re-validate before using
```

---

## 7. Save Reference

Update the timeline frontmatter with validation completion:
- Add 'step-v-02-validation-report' to `stepsCompleted` array
- Set `lastStep: 'step-v-02-validation-report'`

Save the timeline file.

---

## 8. Closing Message

End with an encouraging message from Dr. Carla:

```
───────────────────────────────────────────────────────────

{If PASS:}
Excellent work! Your timeline is solid and ready to guide you
through your thesis journey. Remember: progress over perfection.

{If CONCERNS:}
You're on the right track. Address the issues above and you'll
have a solid timeline. Don't hesitate to adjust as you go.

{If FAIL:}
Don't worry - even great theses start with timeline revisions.
Take time to fix the issues, and you'll have a reliable roadmap.

A well-planned timeline is your best defense against procrastination.
You've got this! 🎓

— Dr. Carla

───────────────────────────────────────────────────────────

Validation complete. No further steps.
```

---

## 9. Workflow Complete

This is the final step of Validate mode - no menu needed.

**Workflow ends here.**

---

## Notes for LLM

- This step interprets and contextualizes the validation results
- Be supportive even if validation fails - focus on actionable fixes
- Provide clear, specific guidance on how to address issues
- The validation report file serves as a reference document
- Emphasize that validation is a tool for improvement, not judgment
- Students may need to iterate between Edit and Validate modes

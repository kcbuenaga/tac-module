---
name: 'step-v-02-generate-report'
description: 'Generate readiness report with recommendations and offer edit mode'

presentationFile: '{loaded_from_step_v_01}'
questionsFile: '{loaded_from_step_v_01}'
editModeEntry: '../steps-e/step-e-01-load-assess.md'
---

# Validate Mode - Step 2: Generate Readiness Report

## STEP GOAL:

To generate a comprehensive readiness report with scores, identified issues, and actionable recommendations, then offer edit mode to address issues.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, delivering validation results
- ✅ Be clear and direct about findings
- ✅ Provide actionable recommendations

### Step-Specific Rules:

- 🎯 Focus ONLY on reporting validation results
- 🚫 FORBIDDEN to make edits here
- 💬 Present findings clearly and honestly
- 🔀 Offer edit mode for addressing issues

## EXECUTION PROTOCOLS:

- 🎯 Generate comprehensive readiness report
- 💾 Write report to presentation Q&A notes
- 📊 Provide clear scores and recommendations
- 🔀 Offer edit mode if issues found

## CONTEXT BOUNDARIES:

- Validation results from step v-01
- This is final validation step
- Edit mode is cross-mode integration option
- Report is the deliverable

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Validation Results

Read `validationResults` compiled in step v-01.

### 2. Generate Readiness Report

Create comprehensive report:

"**Defense Preparation Validation Report**

Generated: {current date and time}

---

## Overall Readiness Assessment

**Status:** {readinessLevel}

{If defense-ready:}
\"Your defense documents are comprehensive and well-prepared. You appear ready for defense.\"

{If nearly-ready:}
\"Your defense documents are mostly complete with minor gaps. Address the issues below to be fully ready.\"

{If needs-work:}
\"Your defense documents have notable gaps that need attention before you're defense-ready.\"

{If not-ready:}
\"Your defense documents have significant gaps. Substantial work needed before defense.\"

---

## Presentation Outline Assessment

**Completeness Score:** {score}/10

**Status:**
- Total sections: 8 required
- Complete sections: {count}
- Incomplete sections: {count}
- Missing sections: {count}

{If missingSections:}
**Missing Sections:**
{List missing sections}

{If incompleteSections:}
**Incomplete Sections (present but empty):**
{List incomplete sections}

**Recommendations:**
{Specific recommendations for presentation improvements}

---

## Anticipated Questions Assessment

**Coverage Score:** {score}/10

**Status:**
- Total committee roles: 5
- Roles with adequate questions (3+): {count}
- Roles with insufficient questions: {count}
- Total questions: {count}

{If missingRoles:}
**Missing Committee Roles:**
{List roles with no questions}

{If insufficientRoles:}
**Insufficient Questions (<3):**
{List roles needing more questions}

**Recommendations:**
{Specific recommendations for questions improvements}

---

## Progress & Readiness

{If practice sessions completed:}

**Practice Sessions:** {sessionCount} completed

**Current Readiness Score:** {currentReadinessScore}/10

**Progress Trend:** {trend}

{If weakAreasIdentified:}
**Weak Areas Still Identified:**
{List weak areas}

**Recommendations:**
{Based on progress, recommend more practice sessions or focus areas}

{If no practice sessions:}
**No practice sessions completed yet.**

Validation can only assess document completeness. To assess actual defense readiness, run practice sessions in Create mode.

---

## Critical Issues

{If criticalIssues exist:}

**Issues requiring immediate attention:**

{List critical issues with priority}

1. {Issue 1}
2. {Issue 2}
...

{If no critical issues:}

No critical issues identified.

---

## Recommendations

{Provide 3-5 specific, actionable recommendations based on findings}

1. {Recommendation 1}
2. {Recommendation 2}
...

---

**Next Steps:**

{If defense-ready:}
- Review documents one final time
- Practice your presentation delivery
- You're ready to schedule your defense

{If not defense-ready:}
- Address critical issues above
- Run more practice sessions
- Use Edit mode to update documents
- Re-validate when ready

---

**Validation complete.**"

### 3. Write Report to Documents

Append report to {presentationFile} under Q&A Preparation Notes section:

```markdown
### Validation Report ({current date})

{Full report text from step 2}
```

Update frontmatter:
```yaml
lastValidation: [current date]
validationStatus: {readinessLevel}
```

### 4. Display Report to User

Display the full readiness report to the user.

### 5. Offer Edit Mode (if issues found)

**IF criticalIssues exist OR scores < 8:**

"**Issues identified that need attention.**

Would you like to edit your defense documents to address these issues?

**[E]** Yes, enter Edit mode to fix issues
**[N]** No, validation complete

What would you like to do?"

Wait for user choice (E or N).

**IF E selected:**

"**Loading Edit mode...**"

Load, read entire file, then execute {editModeEntry}

**IF N selected:**

Proceed to step 6.

**IF no significant issues (scores >= 8, no critical issues):**

Skip edit offer, proceed to step 6.

### 6. Mark Validation Complete

Update frontmatter:
```yaml
lastStep: 'step-v-02-generate-report'
lastModified: [current date]
```

"**Validation mode complete.**

Your readiness report has been added to your presentation document.

**Report location:**
`{presentationFile path}`

{If defense-ready:}
Good luck with your defense.

{If not defense-ready:}
Address the recommendations and re-validate when ready."

**STOP - Do not load next step.**

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Comprehensive readiness report generated
- Scores provided for presentation and questions
- Progress assessed (if applicable)
- Critical issues identified
- Specific recommendations provided
- Report written to document
- Edit mode offered if issues exist
- Clear next steps provided

### ❌ SYSTEM FAILURE:

- Vague or incomplete report
- No scores or assessments
- Generic recommendations
- Not writing report to document
- Not offering edit mode when issues exist
- False reassurance about readiness

**Master Rule:** Generate honest, comprehensive report with scores and actionable recommendations. Write to document. Offer edit mode if issues need fixing.

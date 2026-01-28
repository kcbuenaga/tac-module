---
name: 'step-v-02-generate-report'
description: 'Present validation results, suggest fixes, offer auto-fix for common issues'

bibliographyFile: '{thesis_artifacts}/bibliography.md'
---

# Step V-02: Generate Validation Report

## STEP GOAL:

To present comprehensive validation results, suggest fixes for issues found, and offer to auto-fix common issues.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ You provide clear, actionable validation reports
- ✅ You help students understand and fix issues
- ✅ You celebrate quality bibliographies!

### Step-Specific Rules:

- 🎯 Focus ONLY on reporting and offering fixes
- 🚫 FORBIDDEN to fix without permission
- 💬 Present issues clearly with examples
- 🎯 Offer auto-fix for common, safe issues

## EXECUTION PROTOCOLS:

- 🎯 Present validation results clearly
- 💾 Offer auto-fix for common issues
- 📖 Provide specific guidance for manual fixes
- 🚫 FORBIDDEN to auto-fix without user confirmation

## CONTEXT BOUNDARIES:

- Available: Validation results from step V-01, bibliography file
- Focus: Reporting and fixing
- Limits: This is the final step
- Dependencies: Step V-01 (validation results)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Display Validation Report Header

Display:

"**📊 Bibliography Validation Report**

**Student:** {user_name}
**Bibliography:** {bibliographyFile}
**Citation Standard:** {citationStandard}
**Total Citations:** {totalCitations}
**Validation Date:** {current date}

---

**Overall Status:** {overallStatus emoji and text}

{If PASS:} ✅ **PASS** - Your bibliography looks great!
{If CONCERNS:} ⚠️ **CONCERNS** - Some minor issues found
{If FAIL:} ❌ **FAIL** - Critical issues need attention

---"

### 2. Report Compliance Check Results

Display:

"**1️⃣ ABNT/APA Compliance Check**

✅ **Passed:** {passed count} citations
{If failed > 0:} ❌ **Failed:** {failed count} citations

{If failed > 0:}
**Issues found:**

{For each compliance issue:}
- **Citation #{number}:** {issue description}
  - Current: {show problematic part}
  - Should be: {show correct format}
  - Fix: {explain how to fix}

{Example:}
- **Citation #3:** Author surname not in CAPS (ABNT requirement)
  - Current: "Silva, João. **Title**..."
  - Should be: "SILVA, João. **Title**..."
  - Fix: Capitalize author surname

---"

### 3. Report Duplicate Check Results

Display:

"**2️⃣ Duplicate Detection**

{If no duplicates:}
✅ **No duplicates found** - Each source is unique

{If duplicates found:}
⚠️ **{duplicate count} potential duplicate(s) found:**

{For each duplicate:}
- **Citations #{number1} and #{number2}:**
  - Citation #{number1}: {text}
  - Citation #{number2}: {text}
  - Assessment: {Exact duplicate / Similar but different edition}
  - Recommendation: {Remove duplicate / Keep both if different editions}

---"

### 4. Report Missing Fields Check

Display:

"**3️⃣ Missing or Incomplete Fields**

{If no missing fields:}
✅ **All required fields present** - Citations are complete

{If missing fields found:}
⚠️ **{count} citation(s) with missing fields:**

{For each citation with missing fields:}
- **Citation #{number}:** Missing {field list}
  - Severity: {Critical / Recommended}
  - Current: {show citation}
  - Needs: {explain what's missing and where to find it}

{Example:}
- **Citation #5:** Missing DOI (Recommended for journal articles)
  - Severity: Recommended
  - Current: "AUTHOR. Title. Journal, v. 1, n. 2, p. 3-4, 2020."
  - Needs: Add DOI at end if available (check journal website)

---"

### 5. Report Organization Check

Display:

"**4️⃣ Alphabetical Organization**

{If properly organized:}
✅ **Properly organized** - Citations are alphabetically sorted

{If organization issues:}
⚠️ **Organization issues found:**

{For each organization issue:}
- {Issue description}
  - Location: Citation #{number}
  - Problem: {explain}
  - Fix: {how to reorganize}

{Example:}
- Out of alphabetical order
  - Location: Citation #7
  - Problem: "TAYLOR" should come after "SILVA", not before
  - Fix: Move citation #7 to correct position in "## T" section

---"

### 6. Offer Auto-Fix for Common Issues

**Determine if auto-fix is possible and safe:**

Auto-fixable issues:
- ABNT author surname capitalization
- Missing section headers (## A, ## B, etc.)
- Alphabetical reordering
- Adding missing punctuation (safe cases)

**If auto-fixable issues exist:**

Display:

"**🛠️ Auto-Fix Available**

I can automatically fix these issues for you:

{List auto-fixable issues:}
- ✓ Capitalize author surnames in {count} citations (ABNT)
- ✓ Add missing section headers
- ✓ Reorganize {count} citations alphabetically
- ✓ Fix punctuation in {count} citations

**Would you like me to auto-fix these issues?**

[Y] Yes, fix them automatically
[N] No, I'll fix them manually
[P] Preview changes first

Choose: [Y/N/P]"

Wait for user response:

- **IF Y (Yes):**
  Apply auto-fixes:
  1. Load bibliography
  2. Apply fixes
  3. Write updated bibliography
  4. Display: "✅ Auto-fixes applied successfully! {count} issues corrected."
  Show summary of changes made.

- **IF P (Preview):**
  Display before/after for each auto-fix:
  "**Preview of changes:**

  Citation #3:
  - Before: silva, João. Title...
  - After: SILVA, João. Title...

  {Show all changes}

  **Apply these fixes?** [Y] Yes / [N] No"

  If Y: Apply fixes
  If N: Skip auto-fix

- **IF N (No):**
  Display: "Understood. You can use Edit mode to make manual corrections."

### 7. Provide Manual Fix Guidance

**For issues that cannot be auto-fixed:**

Display:

"**📝 Manual Fixes Needed**

These issues require manual correction:

{For each manual fix needed:}
**Issue:** {description}
**Citation #{number}:** {show citation}
**How to fix:**
1. {step-by-step instructions}
2. {specific guidance}
3. {what to look for}

**Use Edit mode to make these corrections.**

---"

### 8. Final Summary and Recommendations

Display:

"**📋 Validation Summary**

**Checks Performed:** 4 (Compliance, Duplicates, Missing Fields, Organization)
**Issues Found:** {total count}
- Critical: {count}
- Recommended: {count}

**Auto-Fixed:** {count if auto-fix was performed}
**Remaining Issues:** {count}

---

**🎯 Recommendations:**

{If PASS:}
✅ **Excellent work!** Your bibliography is well-formatted and complete.
- Keep adding citations using Create mode
- Periodically run Validate mode to maintain quality

{If CONCERNS:}
⚠️ **Good progress!** A few minor improvements needed:
- Address the recommended fixes when you have time
- Consider adding optional fields (DOI, URLs) for completeness
- Your bibliography is usable as-is, but can be enhanced

{If FAIL:}
❌ **Action needed:** Critical issues must be fixed:
- Use Edit mode to correct formatting errors
- Remove duplicate citations
- Add missing required fields
- Re-run Validate mode after making corrections

---

**What would you like to do next?**

- ✅ Use Edit mode to make corrections
- ✅ Use Create mode to add more citations
- ✅ Run Validate mode again after making fixes

**Great work maintaining your bibliography, {user_name}! 📚**"

### 9. Complete Workflow

**WORKFLOW COMPLETE** - No next step, this is the final step of Validate mode.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Validation results presented clearly
- All 4 check results reported with specific details
- Auto-fix offered for fixable issues (if applicable)
- Manual fix guidance provided for non-auto-fixable issues
- Overall status and recommendations displayed
- Student knows exactly what to do next

### ❌ SYSTEM FAILURE:

- Not reporting all validation results
- Vague issue descriptions without specifics
- Auto-fixing without user permission
- Not providing clear guidance on how to fix issues
- Not categorizing issues by severity
- Not giving actionable recommendations

**Master Rule:** Present validation results clearly and completely. Offer auto-fix for safe issues, provide guidance for manual fixes. Help student understand what's good and what needs work. This is the final step - give clear next steps.

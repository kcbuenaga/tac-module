---
name: 'step-v-01-check-bibliography'
description: 'Load bibliography, check each citation for ABNT/APA compliance, detect duplicates, identify missing fields'

nextStepFile: './step-v-02-generate-report.md'
bibliographyFile: '{thesis_artifacts}/bibliography.md'
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
abntRulesData: '../data/abnt-rules.md'
apaRulesData: '../data/apa-rules.md'
---

# Step V-01: Check Bibliography

## STEP GOAL:

To load the bibliography and check each citation for ABNT/APA compliance, detect duplicate citations, identify missing fields, and verify alphabetical organization.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ You perform thorough bibliography quality checks
- ✅ You identify issues without judgment
- ✅ You help students maintain citation quality

### Step-Specific Rules:

- 🎯 Focus ONLY on checking and analyzing
- 🚫 FORBIDDEN to fix issues yet (report in step V-02)
- 💬 Check systematically: compliance, duplicates, missing fields, organization
- 🎯 This is auto-proceed validation sequence

## EXECUTION PROTOCOLS:

- 🎯 Load TAC config and bibliography
- 💾 Load appropriate formatting rules
- 📖 Check each citation systematically
- 🚫 FORBIDDEN to make any changes yet (just collect findings)

## CONTEXT BOUNDARIES:

- Available: TAC config, bibliography file, ABNT/APA rules
- Focus: Validation and analysis
- Limits: No fixes yet, just reporting
- Dependencies: None (first step in Validate mode)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`
- `thesis_artifacts`

### 2. Welcome to Validate Mode

Display in {preferred_tac_language}:

"**Welcome to Citation Helper - Validate Mode, {user_name}!**

I'm Patricia. I'll check your bibliography for:
✓ ABNT/APA compliance
✓ Duplicate citations
✓ Missing fields
✓ Alphabetical organization

Let me load and analyze your bibliography..."

### 3. Check if Bibliography Exists

Check if {bibliographyFile} exists:

**If bibliography DOES NOT exist:**

Display: "❌ **No bibliography found**

I couldn't find a bibliography file at: {bibliographyFile}

You don't have any citations yet! Use **Create mode** to add your first citation."

**STOP WORKFLOW** - Exit here.

**If bibliography EXISTS:**

Proceed to Section 4.

### 4. Load Bibliography and Formatting Rules

**A. Load bibliography:**
- Read frontmatter: `citationStandard`, `lastUpdated`, `totalCitations`
- Parse all citations

**B. Load formatting rules:**

Based on `citationStandard`:
- IF ABNT: Load {abntRulesData}
- IF APA: Load {apaRulesData}

Display: "✅ Bibliography loaded: {totalCitations} citations using {citationStandard} standard"

### 5. Check #1: ABNT/APA Compliance

Display: "🔍 **Checking citation formatting compliance...**"

For each citation in the bibliography:

**Check against formatting rules:**

**For ABNT citations, check:**
- Author surname in CAPS
- Title formatting (article vs. publication)
- Bold formatting on publication name
- Volume, issue, pages format (v. X, n. Y, p. Z-ZZ)
- Punctuation (commas, periods)
- Order of elements

**For APA citations, check:**
- Author format (Lastname, F. I.)
- Year in parentheses after author
- Title capitalization (sentence case)
- Italics on book/journal titles
- DOI/URL format
- Order of elements

**For each citation, record:**
- Citation number
- Compliance status: PASS / FAIL
- If FAIL: List specific issues found
  - Example issues:
    - "Author surname not in CAPS (ABNT)"
    - "Publication name not in bold (ABNT)"
    - "Missing DOI (APA)"
    - "Incorrect title capitalization (APA)"
    - "Volume/issue format incorrect"
    - "Punctuation error"

Store all compliance issues in `complianceIssues` array.

### 6. Check #2: Duplicate Detection

Display: "🔍 **Checking for duplicate citations...**"

Compare all citations against each other:

**Duplicate criteria:**
- Same author(s) AND same year AND same title = likely duplicate

**For each potential duplicate found:**

Record:
- Citation numbers of duplicates (e.g., "Citation #5 and #12")
- Similarity assessment: "Exact duplicate" or "Similar (different edition/version)"
- Text of both citations for comparison

Store all duplicates in `duplicates` array.

### 7. Check #3: Missing Fields

Display: "🔍 **Checking for missing or incomplete fields...**"

For each citation, check if required fields are present:

**Required fields vary by source type:**

**For books:**
- Author, Year, Title, Publisher, Location

**For journal articles:**
- Author, Year, Title, Journal name, Volume, Issue (optional), Pages

**For websites:**
- Author (or organization), Year (or access date), Title, URL, Access date

**For each citation with missing fields:**

Record:
- Citation number
- Missing fields list
- Severity: "Critical" (required field) or "Recommended" (optional field)

Store all missing field issues in `missingFields` array.

### 8. Check #4: Alphabetical Organization

Display: "🔍 **Checking alphabetical organization...**"

**Check organization rules:**

1. **Sections exist for each starting letter**
   - If citations starting with "A" exist, should have "## A" section
   - If citations starting with "B" exist, should have "## B" section
   - etc.

2. **Citations within each section are alphabetically sorted**
   - By author surname
   - If same surname, by first name/initial
   - If same author, by year (oldest first)

**For each organization issue found:**

Record:
- Issue type: "Missing section header" or "Out of alphabetical order"
- Location: "Citation #{number}"
- Details: "Should be before/after citation #{other number}"

Store all organization issues in `organizationIssues` array.

### 9. Compile Validation Results

Compile all findings:

```
validationResults = {
  totalCitations: {count},
  citationStandard: {ABNT or APA},
  checksPerformed: {date/time},

  complianceCheck: {
    passed: {count of citations that passed},
    failed: {count of citations with issues},
    issues: [{complianceIssues array}]
  },

  duplicateCheck: {
    duplicatesFound: {count},
    details: [{duplicates array}]
  },

  missingFieldsCheck: {
    citationsWithMissingFields: {count},
    details: [{missingFields array}]
  },

  organizationCheck: {
    properlyOrganized: {true/false},
    issues: [{organizationIssues array}]
  },

  overallStatus: {PASS / CONCERNS / FAIL}
}
```

**Determine overall status:**
- **PASS:** No critical issues found
- **CONCERNS:** Minor issues found (optional fields missing, recommended improvements)
- **FAIL:** Critical issues found (formatting errors, duplicates, missing required fields)

### 10. Auto-Proceed to Report Generation

Display: "✅ **Validation complete. Generating report...**"

Store `validationResults` for next step.

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Bibliography loaded successfully
- All 4 checks performed: compliance, duplicates, missing fields, organization
- Issues recorded systematically
- Validation results compiled
- Overall status determined
- Auto-proceeded to report generation

### ❌ SYSTEM FAILURE:

- Skipping any of the 4 validation checks
- Not loading appropriate formatting rules
- Not recording specific issues found
- Not checking every citation
- Not auto-proceeding to report

**Master Rule:** Perform all 4 checks systematically. Record all issues found. Don't fix anything yet - just analyze and report. This is an auto-proceed validation step.

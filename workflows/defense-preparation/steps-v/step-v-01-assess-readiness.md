---
name: 'step-v-01-assess-readiness'
description: 'Load defense documents and assess readiness against criteria'

nextStepFile: './step-v-02-generate-report.md'
presentationFile: '{thesis_artifacts}/defense/presentation-*.md'
questionsFile: '{thesis_artifacts}/defense/anticipated-questions-*.md'
feedbackCriteria: '../data/feedback-criteria.md'
---

# Validate Mode - Step 1: Assess Readiness

## STEP GOAL:

To load defense documents, check completeness and quality against feedback criteria, and identify gaps or weaknesses.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are Lara, running validation
- ✅ Be objective and thorough
- ✅ Check against established criteria

### Step-Specific Rules:

- 🎯 Use subprocess Pattern 3 to load feedback criteria
- 💬 Check completeness and quality systematically
- 🚫 Don't make judgments without criteria
- 📋 Track all findings for report

## EXECUTION PROTOCOLS:

- 🎯 Load and verify documents exist
- 💾 Load feedback criteria via subprocess
- ✅ Assess against each criterion
- 🚫 FORBIDDEN to skip any checks

## CONTEXT BOUNDARIES:

- Validation mode entry point
- Documents exist (created or edited)
- Criteria defined in data file
- Report generation comes next

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Search for and Load Defense Documents

Search `{thesis_artifacts}/defense/` for:
- Presentation files (`presentation-*.md`)
- Questions files (`anticipated-questions-*.md`)

**If NO files found:**

"**No defense documents found.**

Cannot validate documents that don't exist.

Run defense-preparation in Create mode first."

**STOP - Exit validation.**

**If files found:**

{If multiple sets, use most recent based on lastModified date}

Load both:
- Presentation outline
- Anticipated questions

### 2. Load Feedback Criteria (Subprocess Pattern 3)

**WITH subprocess capability:**

Launch a subprocess that:
1. Loads {feedbackCriteria}
2. Extracts readiness assessment rubric
3. Returns criteria categories and scoring to parent

**Subprocess returns:**
```json
{
  "criteria": [
    {"category": "Logic Consistency", "checks": ["...", "..."]},
    {"category": "Argument Quality", "checks": ["...", "..."]},
    {"category": "Completeness", "checks": ["...", "..."]},
    {"category": "Question Coverage", "checks": ["...", "..."]},
    {"category": "Progress Evidence", "checks": ["...", "..."]}
  ]
}
```

**WITHOUT subprocess capability:**

Load {feedbackCriteria} in main thread.

### 3. Assess Presentation Completeness

"**Validating presentation outline...**"

**Check for required sections:**
- Opening/Introduction
- Research Question & Objectives
- Literature Review (brief)
- Methodology
- Key Findings/Results
- Discussion & Implications
- Conclusion & Contributions
- Q&A Preparation Notes

**Track:**
- Missing sections: [list]
- Incomplete sections (present but empty): [list]
- Well-developed sections: [list]

### 4. Assess Questions Coverage

"**Validating anticipated questions...**"

**Check for all committee roles:**
- Advisor/Supervisor Questions
- Internal Examiner Questions
- External Examiner Questions
- Chair Questions
- Subject Matter Expert Questions

**Track:**
- Roles missing questions: [list]
- Roles with insufficient questions (<3): [list]
- Total questions across all roles: [count]

### 5. Assess Progress Metrics (if applicable)

**IF frontmatter indicates practice sessions completed:**

Read from frontmatter:
- `sessionCount`
- `currentReadinessScore`
- `progressHistory`

**Track:**
- Sessions completed: [count]
- Current readiness score: [X/10]
- Score trend: [improving|stagnant|declining]
- Weak areas identified: [list]

**IF no practice sessions yet:**

"Note: No practice sessions completed. Cannot assess progress or readiness score."

### 6. Apply Feedback Criteria

For each criterion category, assess documents:

**Logic Consistency:**
- Review Q&A Preparation Notes for logic gap mentions
- Check for contradictions between presentation and thesis analysis

**Argument Quality:**
- Review emphasis points in presentation
- Check if weak areas are addressed

**Completeness:**
- All required sections present and populated
- All committee roles have questions

**Question Coverage:**
- Questions distributed across all roles
- Questions align with thesis vulnerabilities
- Questions are thesis-specific, not generic

**Progress Evidence:**
- Session history shows improvement
- Weak areas being addressed
- Readiness score trending up

### 7. Compile Validation Findings

Store assessment results:
```yaml
validationResults:
  presentationCompleteness:
    missingSections: [list]
    incompleteSections: [list]
    score: [0-10]
  questionsCoverage:
    missingRoles: [list]
    insufficientRoles: [list]
    totalQuestions: [count]
    score: [0-10]
  progressMetrics:
    sessionsCompleted: [count]
    currentScore: [X/10]
    trend: [improving|stagnant|declining|N/A]
  overallAssessment:
    readinessLevel: "defense-ready|nearly-ready|needs-work|not-ready"
    criticalIssues: [list]
    recommendations: [list]
```

### 8. Proceed to Report Generation

"**Assessment complete.**

Generating readiness report..."

Update frontmatter:
```yaml
lastStep: 'step-v-01-assess-readiness'
```

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Documents loaded successfully
- Feedback criteria loaded via subprocess (or main thread)
- All required checks performed
- Findings compiled systematically
- Assessment objective and thorough
- Ready for report generation

### ❌ SYSTEM FAILURE:

- Not loading feedback criteria
- Skipping completeness checks
- Not assessing all committee roles
- Ignoring progress metrics
- Subjective assessment without criteria
- Not compiling findings

**Master Rule:** Load documents, load criteria, check systematically, compile findings. Objective assessment only.

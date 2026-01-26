---
name: 'step-08-save-validation'
description: 'Save validation summary with selected topic'

nextStepFile: './step-09-completion.md'
validationTemplate: '../templates/validation-template.md'
---

# Step 8: Save Validation Summary

## STEP GOAL:

To create the final validation summary document that captures the selected topic, research question, scope, source validation results, and next steps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, an Academic Advisor specializing in topic discovery
- ✅ This is an auto-save step - documenting the final topic selection
- ✅ No user input required in this step - just save and proceed

### Step-Specific Rules:

- 🎯 This is a SIMPLE SAVE step - auto-proceed, no menu
- 💾 Create validation summary document using template
- 📝 Include: selected topic, all validation data, next workflow recommendations
- 🚫 Do NOT ask for user approval - just save and continue
- ✅ Update stepsCompleted array in frontmatter

## EXECUTION PROTOCOLS:

- 📁 Create file: {thesis_artifacts}/topic-discovery/validation-{YYYY-MM-DD}.md
- 📋 Use template: {validationTemplate}
- 📝 Populate with selected topic data from step-07 and validation data from step-06
- ✅ Mark step complete in stepsCompleted array
- ➡️ Auto-proceed to step-09 (completion)

## CONTEXT BOUNDARIES:

- Available context: Selected topic from step-07, validated angles document from step-06
- Focus: Document creation with selected topic and validation summary
- Limits: No new validation - just save what was selected
- Dependencies: Requires step-07 completion with confirmed topic selection

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Check Prerequisites

Verify that step-07 produced required data:

**Required data from step-07:**
- Selected topic (one angle chosen from validated options)
- Explicit confirmation from student

**If selection is not clear:**
- "⚠️ I notice a topic wasn't selected in step-07. Let's go back to complete the selection process."
- **STOP** - Do not create document
- Return user to step-07

**If selection is confirmed:**
- Proceed to step 2

### 2. Load Selected Topic Data

**Read the validated angles document:**

```
Location: {thesis_artifacts}/topic-discovery/angles-*.md
```

**Extract data for the SELECTED angle:**
- Title
- Focus
- Research Question
- Rationale
- Scope (IN/OUT)
- Source Validation results (count, quality, sample sources)

**Also preserve data for NON-SELECTED angles** (for reference section in validation doc)

### 3. Create Validation Summary Document

**File location:**
- Create folder if needed: {thesis_artifacts}/topic-discovery/
- Filename: validation-{YYYY-MM-DD}.md (use today's date)

**Document structure (from template):**

```yaml
---
workflowName: topic-discovery-validation
documentType: validation-summary
stepsCompleted: ['step-01-init', 'step-02-interests-exploration', 'step-03-save-interests', 'step-04-topic-angles', 'step-05-save-angles', 'step-06-library-validation', 'step-07-topic-selection', 'step-08-save-validation']
lastStep: 'step-08-save-validation'
date: '{YYYY-MM-DD}'
user_name: '{user_name}'
selectedTopic: '{selected_angle_title}'
---

# Thesis Topic Validation Summary

**Date:** {YYYY-MM-DD}
**Student:** {user_name}
**Field:** Project Management (MBA)
**Institution:** {institution_name}

---

## ✅ Selected Topic

**{Selected Angle Title}**

### Research Question

*{Research Question from selected angle}*

### Focus

{Focus description from selected angle}

### Why This Topic

{Rationale from selected angle - why interesting AND researchable}

### Scope Definition

**IN Scope:**
{IN scope items from selected angle}

**OUT of Scope:**
{OUT of scope items from selected angle}

---

## 📚 Source Validation Results

### Academic Sources Available

**Count:** {source_count} academic sources identified

**Quality Assessment:** {quality_rating}

{Quality explanation from step-06 validation}

### Sample Sources

Below are {3-5} sample sources you can start with. Full search results are available through {Academic Database Connector or Google Scholar}.

1. **{Source 1 Title}**
   {Source 1 URL}
   *Relevance: {Source 1 relevance description}*

2. **{Source 2 Title}**
   {Source 2 URL}
   *Relevance: {Source 2 relevance description}*

3. **{Source 3 Title}**
   {Source 3 URL}
   *Relevance: {Source 3 relevance description}*

[Include sources 4-5 if available]

---

## 🎯 Why This Topic Works

**Interest Alignment:**
{Connect to original interests from step-02 exploration}

**Research Feasibility:**
{Explain why scope and timeline are realistic}

**Source Support:**
{Explain source availability and quality}

**Academic Contribution:**
{Brief note on what makes this topic worthwhile for academic research}

---

## 📋 Other Angles Considered

*For reference, here are the other angles you explored:*

### {Angle 2 Title}
- **Research Question:** {question}
- **Sources:** {count} ({quality})
- **Why considered:** {brief rationale}

### {Angle 3 Title}
- **Research Question:** {question}
- **Sources:** {count} ({quality})
- **Why considered:** {brief rationale}

[Include Angle 4 if applicable]

*You can always revisit these angles if your research direction evolves.*

---

## 🚀 Recommended Next Steps

Now that you have a validated topic, here are the recommended next workflows:

### 1. Literature Review Builder
**Workflow:** `literature-review-builder`
**Purpose:** Structure your literature review using the validated sources
**When:** Start within 1-2 weeks of topic selection

### 2. Thesis Structure & Outline
**Workflow:** `thesis-structure-outline`
**Purpose:** Create your thesis outline and chapter structure
**When:** After initial literature review (2-4 weeks)

### 3. Research Methodology Design
**Workflow:** `research-methodology-design`
**Purpose:** Design your research approach and data collection methods
**When:** Concurrent with literature review

**To launch these workflows:**
Use Dr. Carla (your Academic Advisor agent) and ask to start the specific workflow by name.

---

## 📁 Your Topic Discovery Artifacts

All documents from this workflow are saved in:
`{thesis_artifacts}/topic-discovery/`

- **interests-{date}.md** - Your interests exploration
- **angles-{date}.md** - All topic angles with validation results
- **validation-{date}.md** - This summary document

**Keep these files** - they document your decision-making process and provide references you'll need throughout your thesis journey.

---

**Validation Complete!** ✅

You now have a validated thesis topic with confirmed source availability. You're no longer paralyzed by choice - you're ready to start researching with confidence.

**Document saved:** {thesis_artifacts}/topic-discovery/validation-{YYYY-MM-DD}.md
```

**Populate the template with actual data from step-06 and step-07.**

### 4. Display Confirmation

After creating the document, display:

"**✅ Validation Summary Saved**

Your thesis topic validation is complete and documented at:

`{thesis_artifacts}/topic-discovery/validation-{YYYY-MM-DD}.md`

**Your Selected Topic:**
**{Selected Angle Title}**

**Research Question:**
*{Research Question}*

**Source Support:** {source_count} academic sources ({quality_rating})

---

**What's saved:**
- ✅ Your selected topic with research question
- ✅ Scope definition (IN/OUT)
- ✅ Source validation results with sample links
- ✅ Other angles considered (for reference)
- ✅ Recommended next workflows

**You're ready to move forward with confidence!**

**Proceeding to completion...**"

**Note:** No menu in this step - auto-proceed after brief confirmation.

### 5. Auto-Proceed to Next Step

**CRITICAL:** This is a Simple Save step - NO menu, NO user input required.

After displaying confirmation (step 4), immediately:

**Load, read the entire file, then execute {nextStepFile}**

Do NOT wait for user response. Do NOT present menu options.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Document created at correct location with correct filename
- All template sections populated with data from steps 06-07
- stepsCompleted array includes all steps through step-08
- Selected topic clearly identified in frontmatter and document body
- Source validation results included (count, quality, sample sources with URLs)
- Other angles preserved for reference
- Recommended next workflows included
- Auto-proceeded to step-09 without menu or waiting

### ❌ SYSTEM FAILURE:

- Document not created
- Asking user for approval or input (this is auto-save)
- Presenting menu options (no menu in simple save steps)
- Waiting for user response before proceeding
- Missing selected topic data
- Missing source validation results
- No sample source links provided
- Not updating stepsCompleted array
- Proceeding to next step before document is created

**Master Rule:** This is the final save step - create comprehensive validation summary, confirm briefly, auto-proceed to completion. No conversation, no menu, no waiting.

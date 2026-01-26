---
name: 'step-03-save-interests'
description: 'Save interests exploration to document'

nextStepFile: './step-04-topic-angles.md'
interestsTemplate: '../templates/interests-template.md'
---

# Step 3: Save Interests Document

## STEP GOAL:

To persist the interests exploration conversation from step-02 into a semi-structured document that will inform topic angle generation in step-04.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, an Academic Advisor specializing in topic discovery
- ✅ This is an auto-save step - you are documenting what was collaboratively discovered
- ✅ No user input required in this step - just save and proceed

### Step-Specific Rules:

- 🎯 This is a SIMPLE SAVE step - auto-proceed, no menu
- 💾 Create document using template and conversation data
- 📝 Semi-structured output - fill template sections with discovered interests
- 🚫 Do NOT ask for user approval - just save and continue
- ✅ Update stepsCompleted array in frontmatter

## EXECUTION PROTOCOLS:

- 📁 Create file: {thesis_artifacts}/topic-discovery/interests-{YYYY-MM-DD}.md
- 📋 Use template: {interestsTemplate}
- 📝 Populate all sections with data from step-02 conversation
- ✅ Mark step complete in stepsCompleted array
- ➡️ Auto-proceed to step-04

## CONTEXT BOUNDARIES:

- Available context: All conversation data from step-02 (interest areas, context preferences, problems/questions)
- Focus: Document creation and persistence
- Limits: No new exploration - only save what was discovered
- Dependencies: Requires step-02 completion with 2-3 interest areas identified

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Check Prerequisites

Verify that step-02 produced the required data:

**Required data from step-02:**
- Field Focus (Project Management, or specific subfield if narrowed)
- 2-3 distinct interest areas with specifics
- Context preferences (geographic, industry, methodology if discussed)
- Problems/questions that emerged

**If data is incomplete:**
- "⚠️ I notice the interests exploration (step-02) didn't capture enough detail. We need 2-3 distinct interest areas before saving. Let's go back to complete the exploration."
- **STOP** - Do not create document
- Return user to step-02

**If data is complete:**
- Proceed to step 2

### 2. Create Interests Document

**File location:**
- Create folder if needed: {thesis_artifacts}/topic-discovery/
- Filename: interests-{YYYY-MM-DD}.md (use today's date)

**Document structure (from template):**

```yaml
---
workflowName: topic-discovery-validation
documentType: interests-exploration
stepsCompleted: ['step-01-init', 'step-02-interests-exploration', 'step-03-save-interests']
lastStep: 'step-03-save-interests'
date: '{YYYY-MM-DD}'
user_name: '{user_name}'
---

# Topic Interests Exploration

**Date:** {YYYY-MM-DD}
**Student:** {user_name}
**Field:** Project Management (MBA)

---

## Field Focus

[Write 1-2 sentences about the general field and any subfield focus that emerged]

Examples:
- "Project management in general, with particular interest in agile methodologies"
- "Project management in construction industry, focusing on sustainability challenges"
- "Project management theory and practice, with emphasis on stakeholder dynamics"

---

## Interest Areas

[Document 2-3 distinct interest areas discovered in step-02. For each area, include:]

### Interest Area 1: [Title]

**What interests you:** [Describe the specific aspect, not generic statements]

**Why it matters to you:** [The authentic curiosity or problem that drives interest]

**Context:** [Industry, geography, methodology preferences if mentioned]

**Specifics noted:** [Any particular examples, cases, or angles discussed]

---

### Interest Area 2: [Title]

**What interests you:** [Describe the specific aspect]

**Why it matters to you:** [The authentic curiosity or problem]

**Context:** [Industry, geography, methodology preferences if mentioned]

**Specifics noted:** [Any particular examples, cases, or angles discussed]

---

### Interest Area 3: [Title] *(if applicable)*

**What interests you:** [Describe the specific aspect]

**Why it matters to you:** [The authentic curiosity or problem]

**Context:** [Industry, geography, methodology preferences if mentioned]

**Specifics noted:** [Any particular examples, cases, or angles discussed]

---

## Context Preferences

[Document any patterns that emerged regarding preferred contexts:]

**Geographic context:**
- [Brazilian market / International / Both / Not specified]

**Industry focus:**
- [Specific industry if one dominated conversation / Multiple industries / No specific industry]

**Project types:**
- [IT projects / Construction / Healthcare / Government / Mixed / Not specified]

**Research approach preference:**
- [Qualitative ("why does this happen") / Quantitative ("how much impact") / Mixed / Not discussed]

---

## Problems & Questions

[List the problems, challenges, or questions that came up in conversation - these will inform research questions in topic angles]

Examples:
- "Why do agile teams in Brazilian companies struggle with sprint retrospectives?"
- "What makes some construction projects consistently deliver on time while others don't?"
- "How do project managers balance stakeholder expectations when resources are constrained?"

---

## Next Steps

**Status:** Interests exploration complete ✅

**Next phase:** Topic angle generation (step-04)

In the next step, I'll use these interest areas to generate 3-4 specific topic angles, each with:
- A focused research question
- Scope definition
- Rationale for why it's researchable
- Preliminary source validation

---

**Document saved:** {thesis_artifacts}/topic-discovery/interests-{YYYY-MM-DD}.md
```

**Populate the template with actual data from step-02 conversation.**

### 3. Display Confirmation

After creating the document, display:

"**✅ Interests Document Saved**

I've documented your interests exploration at:

`{thesis_artifacts}/topic-discovery/interests-{YYYY-MM-DD}.md`

**What we captured:**
- Field focus: [Brief 1-line summary]
- Interest areas: [List the 2-3 area titles]
- Context preferences: [Key patterns if any]

**Next up:** I'll use these interests to generate 3-4 specific topic angles you can choose from. Each angle will have a focused research question and preliminary scope definition.

**Auto-proceeding to topic angle generation...**"

**Note:** No menu in this step - auto-proceed after brief confirmation.

### 4. Auto-Proceed to Next Step

**CRITICAL:** This is a Simple Save step - NO menu, NO user input required.

After displaying confirmation (step 3), immediately:

**Load, read the entire file, then execute {nextStepFile}**

Do NOT wait for user response. Do NOT present menu options.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Document created at correct location with correct filename
- All template sections populated with actual data from step-02
- stepsCompleted array includes: step-01-init, step-02-interests-exploration, step-03-save-interests
- 2-3 interest areas documented with specifics (not vague generalities)
- Context preferences captured (even if "not specified")
- Problems/questions listed
- Auto-proceeded to step-04 without menu or waiting

### ❌ SYSTEM FAILURE:

- Document not created
- Asking user for approval or input (this is auto-save)
- Presenting menu options (no menu in simple save steps)
- Waiting for user response before proceeding
- Generic interests captured ("project management is important") instead of specifics
- Missing required frontmatter fields
- Not updating stepsCompleted array
- Proceeding to next step before document is created

**Master Rule:** This is a silent save step - create document, confirm briefly, auto-proceed. No conversation, no menu, no waiting.

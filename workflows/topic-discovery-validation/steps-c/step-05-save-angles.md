---
name: 'step-05-save-angles'
description: 'Save topic angles to document'

nextStepFile: './step-05b-passive-check.md'
anglesTemplate: '../templates/angles-template.md'
---

# Step 5: Save Topic Angles Document

## STEP GOAL:

To persist the topic angles from step-04 into a semi-structured document that will be used for source validation in step-06 and topic selection in step-07.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, an Academic Advisor specializing in topic discovery
- ✅ This is an auto-save step - you are documenting the angles collaboratively created
- ✅ No user input required in this step - just save and proceed

### Step-Specific Rules:

- 🎯 This is a SIMPLE SAVE step - auto-proceed, no menu
- 💾 Create document using template and angle data from step-04
- 📝 Semi-structured output - fill template sections with generated angles
- 🚫 Do NOT ask for user approval - just save and continue
- ✅ Update stepsCompleted array in frontmatter

## EXECUTION PROTOCOLS:

- 📁 Create file: {thesis_artifacts}/topic-discovery/angles-{YYYY-MM-DD}.md
- 📋 Use template: {anglesTemplate}
- 📝 Populate all angle sections with data from step-04
- ✅ Mark step complete in stepsCompleted array
- ➡️ Auto-proceed to step-06

## CONTEXT BOUNDARIES:

- Available context: All angle data from step-04 (3-4 angles with Focus, Research Question, Rationale, Scope)
- Focus: Document creation and persistence
- Limits: No new generation - only save what was created in step-04
- Dependencies: Requires step-04 completion with 3-4 validated angles

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Check Prerequisites

Verify that step-04 produced the required data:

**Required data from step-04:**
- 3-4 topic angles
- Each angle has: Focus, Research Question, Rationale, Scope (IN/OUT)
- Student confirmed satisfaction with angles (selected 'C' to continue)

**If data is incomplete:**
- "⚠️ I notice the topic angle generation (step-04) didn't produce complete angles. We need 3-4 angles with all components before saving. Let's go back to complete the generation."
- **STOP** - Do not create document
- Return user to step-04

**If data is complete:**
- Proceed to step 2

### 2. Create Topic Angles Document

**File location:**
- Create folder if needed: {thesis_artifacts}/topic-discovery/
- Filename: angles-{YYYY-MM-DD}.md (use today's date)

**Document structure (from template):**

```yaml
---
workflowName: topic-discovery-validation
documentType: topic-angles
stepsCompleted: ['step-01-init', 'step-02-interests-exploration', 'step-03-save-interests', 'step-04-topic-angles', 'step-05-save-angles']
lastStep: 'step-05-save-angles'
date: '{YYYY-MM-DD}'
user_name: '{user_name}'
---

# Topic Angles for Research

**Date:** {YYYY-MM-DD}
**Student:** {user_name}
**Field:** Project Management (MBA)

---

## Overview

This document contains {3 or 4} topic angles generated from your interests exploration. Each angle represents a specific, researchable direction you could take for your thesis.

**Next step:** Source validation - I'll check academic library availability for each angle to help you make an informed choice.

---

## Angle 1: [Title from step-04]

**Focus:**
[1-2 sentence description from step-04]

**Research Question:**
*[Specific research question from step-04]*

**Why this works:**
[Rationale from step-04 - why interesting AND researchable]

**Scope:**
- **IN scope:** [What you'd study - from step-04]
- **OUT of scope:** [What you'd exclude - from step-04]

**Source Validation:** *(To be completed in step-06)*
- Academic sources: [Pending]
- Quality assessment: [Pending]
- Sample sources: [Pending]

---

## Angle 2: [Title from step-04]

**Focus:**
[1-2 sentence description from step-04]

**Research Question:**
*[Specific research question from step-04]*

**Why this works:**
[Rationale from step-04]

**Scope:**
- **IN scope:** [What you'd study - from step-04]
- **OUT of scope:** [What you'd exclude - from step-04]

**Source Validation:** *(To be completed in step-06)*
- Academic sources: [Pending]
- Quality assessment: [Pending]
- Sample sources: [Pending]

---

## Angle 3: [Title from step-04]

**Focus:**
[1-2 sentence description from step-04]

**Research Question:**
*[Specific research question from step-04]*

**Why this works:**
[Rationale from step-04]

**Scope:**
- **IN scope:** [What you'd study - from step-04]
- **OUT of scope:** [What you'd exclude - from step-04]

**Source Validation:** *(To be completed in step-06)*
- Academic sources: [Pending]
- Quality assessment: [Pending]
- Sample sources: [Pending]

---

## Angle 4: [Title from step-04] *(if applicable)*

**Focus:**
[1-2 sentence description from step-04]

**Research Question:**
*[Specific research question from step-04]*

**Why this works:**
[Rationale from step-04]

**Scope:**
- **IN scope:** [What you'd study - from step-04]
- **OUT of scope:** [What you'd exclude - from step-04]

**Source Validation:** *(To be completed in step-06)*
- Academic sources: [Pending]
- Quality assessment: [Pending]
- Sample sources: [Pending]

---

## Next Steps

**Status:** Topic angles defined ✅

**Next phase:** Source validation (step-06)

In the next step, I'll validate source availability for ALL angles using academic library search (or Google Scholar if library isn't connected). You'll get:
- **Source counts** for each angle (how many academic sources are available)
- **Quality assessment** (peer-reviewed journals, recent publications, relevance)
- **Sample source links** (actual sources you could use)

This is THE breakthrough moment - you'll know which angles have strong research support before you commit.

---

**Document saved:** {thesis_artifacts}/topic-discovery/angles-{YYYY-MM-DD}.md
```

**Populate the template with actual data from step-04.**

### 3. Display Confirmation

After creating the document, display:

"**✅ Topic Angles Document Saved**

I've documented your topic angles at:

`{thesis_artifacts}/topic-discovery/angles-{YYYY-MM-DD}.md`

**Angles saved:**
{List the angle titles}

**Next up: Source Validation** 🔍

This is the critical step - I'll validate source availability for ALL your angles so you can make an informed decision. You'll get:
- Actual source counts (not guesses)
- Quality assessment (peer-reviewed, recent, relevant)
- Sample source links you can review

**Auto-proceeding to source validation...**"

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
- All template sections populated with actual data from step-04
- stepsCompleted array includes all steps through step-05
- 3-4 angles documented with all components (Focus, Research Question, Rationale, Scope)
- Source Validation sections marked as "Pending" (to be filled in step-06)
- Auto-proceeded to step-06 without menu or waiting

### ❌ SYSTEM FAILURE:

- Document not created
- Asking user for approval or input (this is auto-save)
- Presenting menu options (no menu in simple save steps)
- Waiting for user response before proceeding
- Incomplete angles saved (missing Focus, Rationale, or Scope)
- Missing required frontmatter fields
- Not updating stepsCompleted array
- Proceeding to next step before document is created
- Filling in Source Validation sections (that's step-06's job)

**Master Rule:** This is a silent save step - create document, confirm briefly, auto-proceed. No conversation, no menu, no waiting. Source validation happens in step-06, not here.

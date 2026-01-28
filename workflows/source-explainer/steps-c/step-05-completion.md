---
name: 'step-05-completion'
description: 'Finalize document, update Patricia sidecar, present summary'

outputFile: '{thesis_artifacts}/source-explanations/explanation-{date}.md'
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
patriciaSidecarFile: '{project-root}/_bmad/_memory/patricia-sidecar/memories.md'
---

# Step 5: Completion

## STEP GOAL:

To finalize the explanation document, update Patricia's sidecar memory with session data, and present a summary to the student.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, completing the explanation workflow
- ✅ You help students feel confident they understand the source
- ✅ You record session data to personalize future explanations
- ✅ This is completion - provide closure and summary

### Step-Specific Rules:

- 🎯 Focus on finalizing and summarizing
- 🚫 FORBIDDEN to reopen analysis or explanation
- 💬 Clear summary of what was explained
- 🎯 This is the FINAL step - workflow ends here

## EXECUTION PROTOCOLS:

- 🎯 Finalize output document
- 💾 Update Patricia's sidecar memory
- 📖 Present summary to student
- 🚫 No menu - workflow ends

## CONTEXT BOUNDARIES:

- Available: Complete explanation document
- Focus: Finalization and summary
- Limits: No more content work
- Dependencies: All sections complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Configuration and Complete Document

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`

Load {outputFile} and read all sections:
- Original English Text
- Key Concepts Identified
- Portuguese Explanation
- Cultural/Contextual Notes

### 2. Finalize Output Document

Update {outputFile} frontmatter:
```yaml
status: 'COMPLETE'
completionDate: {current_date}
```

### 3. Update Patricia's Sidecar Memory

Create or update {patriciaSidecarFile}:

Extract from the session:
- Source type explained (abstract/excerpt/paper)
- Key concepts encountered
- Cultural gaps identified
- Domain/field of the source

Append to Patricia's sidecar:

```markdown
## Source Explanation Session - {date}

**Student:** {user_name}
**Source Type:** {sourceType}
**Concepts Explained:**
- {List key concepts}

**Cultural Gaps Identified:**
- {List cultural assumptions spotted}

**Domain:** {Infer academic domain from text}

**Patterns:**
{Note any patterns - e.g., student frequently encounters US business case studies, struggles with Western methodology assumptions, etc.}

---
```

### 4. Present Completion Summary

Display in {preferred_tac_language}:

"**✅ Explanation Complete!**

I've analyzed and explained your English source in Portuguese.

**What I did:**

✓ **Identified {count} key concepts** and explained each one clearly
✓ **Spotted {count} cultural assumptions** that might not be obvious
✓ **Provided Brazilian context** to help you understand the differences
✓ **Saved this explanation** for future reference

**Your explanation document:**
`{outputFile}`

**This document contains:**
1. The original English text
2. Key concepts identified
3. Portuguese explanation of each concept
4. Cultural/contextual notes explaining assumptions

**How to use this:**
- Reference it while writing your thesis
- Use the Portuguese explanations to understand the source
- Use the cultural notes to critically analyze the text
- Compare Brazilian and Western perspectives

**What's next?**

You can:
- Run Source Explainer again for another English source
- Use this explanation as reference in your thesis writing
- Validate or edit this explanation later using Source Explainer's Validate/Edit modes

**I've also recorded this session in my memory** so I can personalize future explanations based on what you encounter most often.

Thank you for using Source Explainer! Good luck with your thesis!"

### 5. Workflow Complete

This is the final step. No menu is presented. Workflow execution ends here.

The student has their explanation document and can exit naturally.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Output document finalized with status COMPLETE
- Patricia's sidecar updated with session data
- Session patterns recorded (concepts, cultural gaps, domain)
- Completion summary displayed clearly
- Student knows where to find the document
- Student understands how to use the explanation
- Workflow completed gracefully (no menu, natural end)

### ❌ SYSTEM FAILURE:

- Not finalizing output document status
- Not updating Patricia's sidecar memory
- Incomplete summary
- Missing document location
- Presenting a menu (this is final step - no menu)
- Not explaining how to use the output
- Continuing workflow beyond this point

**Master Rule:** This is completion. Finalize document, update memory, provide comprehensive summary, explain usage, and END gracefully. No menu. Workflow complete.

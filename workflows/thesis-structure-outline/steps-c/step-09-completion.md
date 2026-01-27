---
name: 'step-09-completion'
description: 'Final review, generate DOCX, provide summary, offer Writing Session Guide launch'

outputFile: '{thesis_artifacts}/outlines/thesis-outline-{date}.md'
docxOutputFile: '{thesis_artifacts}/outlines/thesis-outline-{date}.docx'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
---

# Step 9: Completion

## STEP GOAL:

To complete the thesis outline workflow with final quality review, dual format output generation, comprehensive summary, and optional launch of Writing Session Guide.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are João, completing the thesis outline workflow
- ✅ Student has accomplished significant planning work
- ✅ Celebrate the work while being professional

### Step-Specific Rules:

- 🎯 Focus on completion, summary, and next steps guidance
- 🚫 FORBIDDEN to generate new outline content
- 💬 Approach: Congratulatory but professional, comprehensive summary
- 🎯 This is the FINAL step - no next step after this

## EXECUTION PROTOCOLS:

- 🎯 Offer Advanced Elicitation for final quality gate
- 💾 Generate DOCX from MD via Pandoc (TAC standard)
- 📖 Provide comprehensive summary of deliverables
- 🚫 No next step - workflow ends here

## CONTEXT BOUNDARIES:

- Available: Complete thesis outline from all previous steps
- Focus: Completion and summary
- Limits: No more outline work
- Dependencies: All previous steps complete

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`

### 2. Load Complete Outline

Load {outputFile} and read:
- `topic`
- `researchQuestion`
- `thesisType`
- `chapters` array
- `totalSections`
- `methodologyDepth`
- `created` date

### 3. Offer Final Quality Gate

Display in {preferred_tac_language}:

"**Final Review**

Before we complete, I can do a final quality check on your thesis outline using Advanced Elicitation. This will:
- Review outline completeness
- Check that coaching questions are clear and specific
- Ensure chapter structure aligns with thesis type
- Verify methodology planning is appropriate

**Would you like a final quality review?**

**[A]** Advanced Elicitation - Yes, review the outline
**[S]** Skip - No, I'm ready to complete

Please select: [A]dvanced Elicitation / [S]kip"

**Wait for selection.**

**If [A] selected:**
Execute {advancedElicitationTask} with context: "Review the complete thesis outline for completeness, clarity, and alignment with thesis type. Check that coaching questions guide writing effectively."

When Advanced Elicitation completes, return to this step and continue.

**If [S] selected:**
Proceed to step 4.

### 4. Update Final Status

Update {outputFile} frontmatter:
```yaml
stepsCompleted: ['step-01-init', 'step-02-input-discovery', 'step-03-thesis-type', 'step-04-chapter-planning', 'step-05-review-chapters', 'step-06-section-breakdown', 'step-07-methodology-planning', 'step-08-sidecar-update', 'step-09-completion']
lastStep: 'step-09-completion'
status: 'COMPLETE'
completionDate: {current_date}
workflowComplete: true
```

### 5. Generate DOCX Output (TAC Standard - Dual Format)

**Check if Pandoc is available:**

Attempt to run:
```bash
pandoc {outputFile} -o {docxOutputFile}
```

**If Pandoc succeeds:**

Display in {preferred_tac_language}:

"✅ **Dual Format Output Generated**

**Markdown:** {outputFile}
**Word Document:** {docxOutputFile}

Both files saved to: {thesis_artifacts}/outlines/"

**If Pandoc fails or unavailable:**

Display in {preferred_tac_language}:

"✅ **Outline Complete**

**Markdown:** {outputFile}

📄 **Note:** Pandoc not available for automatic DOCX conversion. You can:
- Install Pandoc for future conversions
- Use an online Markdown to DOCX converter
- Open the .md file in most text editors

File saved to: {thesis_artifacts}/outlines/"

### 6. Present Completion Summary

Display in {preferred_tac_language}:

"**🎉 Congratulations, {user_name}!**

Your Thesis Structure & Outline is complete!

---

## 📚 What You've Accomplished

**✅ Thesis Outline Created**
- **Topic:** {topic}
- **Research Question:** {researchQuestion}
- **Thesis Type:** {thesisType}
- **Chapters:** {chapters count}
- **Sections:** {totalSections count}
- **Methodology Depth:** {methodologyDepth}

**✅ Chapter Structure Planned**
- Each chapter has PURPOSE explanation contextualized to your topic
- Structure adapted for {thesisType} research
- Ready to guide your writing

**✅ Section Breakdown Complete**
- {totalSections} sections across all chapters
- Coaching questions for each section
- Specific guidance for your research

**✅ Methodology Planned**
- Research approach: {methodologyDepth} detail
- Appropriate methodology for your thesis type
- Implementation guidance included

---

## 📄 Your Deliverable

**Location:** {thesis_artifacts}/outlines/

**Files:**
- `thesis-outline-{date}.md` - Markdown with frontmatter
- `thesis-outline-{date}.docx` - Word document (if Pandoc available)

---

## 🎯 Next Steps for Your Thesis

**Immediate:**
1. Review your outline to internalize the structure
2. Share with your advisor for feedback
3. Adjust if advisor suggests modifications (you can use Edit mode for this)

**Writing Phase:**
When you're ready to start writing, I can help you with the Writing Session Guide workflow. This provides:
- Section-by-section writing coaching
- Review and conceptual feedback on your drafts
- Brainstorming support when you get stuck
- Iterative improvement of your writing

**Would you like to start the Writing Session Guide now, or come back later?**

**[W]** Launch Writing Session Guide - Start writing with João's coaching
**[L]** Later - I'll come back when ready to write

Please select: [W]rite now / [L]ater"

**Wait for selection.**

### 7A. IF [W] Launch Writing Session Guide

Display in {preferred_tac_language}:

"**Launching Writing Session Guide...**

I'll help you write your thesis chapter by chapter, section by section, with coaching and feedback throughout.

Let me hand you off to the Writing Session Guide workflow."

**Note:** This would launch the writing-session-guide workflow. For now, display:

"**Note:** Writing Session Guide workflow is not yet built. You can invoke it when ready using:
`/tac:workflows:writing-session-guide`

For now, you have your complete outline to guide your writing!"

**Proceed to step 8 (final status).**

### 7B. IF [L] Later

Display in {preferred_tac_language}:

"**No problem!**

When you're ready to start writing, you can invoke the Writing Session Guide:
`/tac:workflows:writing-session-guide`

I'll remember our work together and can reference this outline when you're ready.

Good luck with your thesis, {user_name}!"

**Proceed to step 8 (final status).**

### 8. Final Status Display

Display in {preferred_tac_language}:

```
═══════════════════════════════════════════════════
         THESIS STRUCTURE & OUTLINE COMPLETE
═══════════════════════════════════════════════════

Workflow:    Thesis Structure & Outline
Agent:       João (Writing Coach)
Student:     {user_name}
Topic:       {topic}
Thesis Type: {thesisType}
Started:     {created date}
Completed:   {current_date}
Status:      ✅ COMPLETE

Deliverable: {outputFile}
Chapters:    {count}
Sections:    {totalSections}
Methodology: {methodologyDepth}

═══════════════════════════════════════════════════
```

### 9. No Menu - Workflow Ends

**This is the FINAL step. No menu is presented.**

The workflow execution completes here. Student has their deliverable and can exit naturally.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Advanced Elicitation offered for final quality gate
- Frontmatter updated with COMPLETE status
- DOCX generation attempted via Pandoc
- Appropriate message shown (success or fallback if Pandoc unavailable)
- Comprehensive summary provided
- All deliverables listed with locations
- Writing Session Guide launch offered
- Next steps guidance provided
- Appropriate celebration and acknowledgment
- Student understands what they accomplished
- Clear sense of completion
- No next step (this IS the end)

### ❌ SYSTEM FAILURE:

- Not offering Advanced Elicitation quality gate
- Not attempting Pandoc DOCX generation
- Not updating status to COMPLETE
- Incomplete summary
- Missing deliverable locations
- Not offering Writing Session Guide launch
- No next steps guidance
- Continuing workflow beyond this point
- Not acknowledging student's accomplishment

**Master Rule:** This is completion. Offer final quality gate, generate dual format output, celebrate the work, summarize deliverables, offer next workflow, provide guidance, and END gracefully. No more steps.

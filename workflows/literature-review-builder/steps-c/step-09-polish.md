---
name: 'step-09-polish'
description: 'Final polish - optimize literature review for flow, coherence, and readability'

nextStepFile: './step-10-completion.md'
outputFile: '{thesis_artifacts}/literature-review-{date}.md'
litReviewDocxOutput: '{thesis_artifacts}/literature-review-{date}.docx'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 9: Final Polish

## STEP GOAL:

To optimize the complete literature review document for flow, coherence, and readability while preserving all essential content.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian and editing expert
- ✅ You bring expertise in academic document optimization
- ✅ Student trusts you to improve readability without changing meaning

### Step-Specific Rules:

- 🎯 Focus on flow, coherence, and polish
- 🚫 FORBIDDEN to remove essential content or change themes
- 💬 Approach: Optimize while preserving student's work and voice
- 🎯 Final quality check before completion

## EXECUTION PROTOCOLS:

- 🎯 Load entire document for holistic review
- 💾 Optimize and save polished version
- 📖 Regenerate DOCX from polished MD
- 🚫 Preserve all key content and citations

## CONTEXT BOUNDARIES:

- Available: Complete literature review with synthesis
- Focus: Polish and optimization only
- Limits: No content changes, just improvements
- Dependencies: Synthesis complete, sidecar updated

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Complete Document

Load {outputFile} entirely to review holistically.

### 2. Announce Polish Phase

"**Final Polish**

Let me optimize your literature review for:
- Flow and coherence between sections
- Proper ## Level 2 headers
- Smooth transitions between themes
- Removal of any duplication
- Overall readability

This will take a moment..."

### 3. Document Optimization

Review entire document for:

**1. Flow and Coherence:**
- Ensure logical progression between sections
- Check that themes connect naturally
- Verify cross-theme analysis makes sense

**2. Duplication:**
- Remove redundant content
- Consolidate repeated ideas
- Preserve all unique insights

**3. Headers:**
- Ensure all section headers are ## Level 2 format
- Check hierarchy is consistent
- Verify theme sections are parallel structure

**4. Transitions:**
- Add smooth transitions between themes where needed
- Ensure cross-theme analysis connects well
- Check introduction flows into themes

**5. Readability:**
- Break up overly long paragraphs
- Improve sentence flow where awkward
- Maintain academic tone throughout

**CRITICAL - Preserve:**
- All themes and their content
- All citations and references
- All patterns and gaps identified
- Student's voice and interpretation
- Essential information and insights

### 4. Save Polished Version

Update {outputFile} with optimized content.

**Update frontmatter:**
```yaml
polished: true
polishDate: {current_date}
status: 'POLISHED'
```

### 5. Regenerate DOCX

**If Pandoc available:**
```bash
pandoc {outputFile} -o {litReviewDocxOutput}
```

Display:
```
"✅ Literature review polished and finalized!

📄 Updated: literature-review-{date}.md
📄 Updated: literature-review-{date}.docx

Final documents saved to: {thesis_artifacts}/"
```

**If Pandoc NOT available:**
```
"✅ Literature review polished!

📄 Updated: literature-review-{date}.md

Use online converter for updated .docx if needed."
```

### 6. Summarize Improvements

"**Polish Complete ✅**

**Improvements made:**
- Flow optimized between {theme_count} themes
- Transitions smoothed
- Duplication removed
- Headers standardized
- Readability enhanced

**Preserved:**
- All themes and synthesis content
- All citations and references
- All patterns and gaps identified
- Your voice and interpretation

Your literature review is now ready for final use!"

### 7. Present MENU OPTIONS

Display: "**[C] Continue to Completion**"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Update frontmatter stepsCompleted to add 'step-09-polish', then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Entire document loaded for holistic review
- Flow and coherence optimized
- Duplication removed
- Headers standardized (## Level 2)
- Transitions improved
- Readability enhanced
- All essential content preserved
- DOCX regenerated
- Frontmatter updated
- Student has polished final document

### ❌ SYSTEM FAILURE:

- Not loading complete document
- Removing essential content
- Changing themes or meanings
- Not standardizing headers
- Missing obvious flow issues
- Not regenerating DOCX
- Not updating frontmatter

**Master Rule:** Polish improves presentation, not content. Preserve all essential information while enhancing readability.

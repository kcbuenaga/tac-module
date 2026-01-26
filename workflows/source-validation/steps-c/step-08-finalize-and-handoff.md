---
name: 'step-08-finalize-and-handoff'
description: 'Finalize Source Validation document, update Patricia sidecar, offer Literature Review handoff'

outputFile: '{output_folder}/source-validation-{topic_slug}.md'
patriciaSidecar: '{project-root}/_bmad/_memory/patricia-sidecar/'
literatureReviewWorkflow: '{project-root}/_bmad/tac/workflows/literature-review/workflow.md'
---

# Step 8: Finalize & Handoff

## STEP GOAL:

To finalize the Source Validation document, update Patricia's sidecar memory with session summary, and offer the option to launch the Literature Review workflow with the selected sources.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: This is the FINAL STEP - no next step file to load
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Patricia, a research librarian specializing in academic source discovery
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring expertise in database search strategies and source quality assessment
- ✅ Students bring their research topics and domain knowledge
- ✅ Together we validate thesis topics through comprehensive source searches

### Step-Specific Rules:

- 🎯 Focus on finalization and handoff - this is the workflow exit point
- 🚫 FORBIDDEN to proceed without offering Literature Review handoff
- 💬 Approach: Celebrate completion, provide clear summary, offer next steps
- 🔍 Update Patricia sidecar with session summary for long-term memory
- ⚙️ Custom menu: [L]iterature Review / [D]one (NO A/P - final step)

## EXECUTION PROTOCOLS:

- 🎯 Mark workflowStatus: 'complete' in frontmatter
- 💾 Polish and finalize document formatting
- 📖 Update Patricia sidecar with session summary
- 🚫 Offer Literature Review workflow handoff
- ✅ Custom menu: [L] or [D] only (no Advanced Elicitation/Party Mode)

## CONTEXT BOUNDARIES:

- Available: Complete Source Validation document, selected sources, all metadata
- Focus: Document finalization, sidecar update, Literature Review handoff
- Limits: This is the final step - workflow ends here
- Dependencies: Step-07 completed (sources selected)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Final State

Read {outputFile} to extract:

- `topic` and `researchQuestion` from frontmatter
- `totalSourcesFound` from frontmatter
- `customSourcesAdded` from frontmatter
- `selectedSources` array from frontmatter
- `selectedSourcesCount` from frontmatter
- `thresholdStatus` from frontmatter
- `refinementCount` from frontmatter
- `databasesSearched` from frontmatter
- `workflowMode` from frontmatter
- All sections of the document

Display brief confirmation:

"**Finalization & Handoff** 🎉

**Topic:** {topic}
**Sources Found:** {totalSourcesFound}
**Sources Selected:** {selectedSourcesCount}
**Workflow Mode:** {workflowMode}
**Refinement Iterations:** {refinementCount}

Finalizing your Source Validation document..."

### 2. Polish and Finalize Document

#### Update Frontmatter (Final):

```yaml
---
stepsCompleted: ['step-01-init', 'step-02-handoff-confirmation', 'step-03-parallel-search', 'step-04-score-and-rank', 'step-05-threshold-analysis', 'step-06-refinement-loop', 'step-07-source-selection', 'step-08-finalize-and-handoff']
lastStep: 'step-08-finalize-and-handoff'
lastContinued: '{current_date}'
workflowStatus: 'complete'
completedDate: '{current_date}'
# ... all other frontmatter fields preserved
---
```

#### Append Next Steps Section:

```markdown
## Next Steps

**Source Validation Complete!** ✅

**Session Summary:**
- **Topic:** {topic}
- **Research Question:** {researchQuestion}
- **Total Sources Found:** {totalSourcesFound}
- **Custom Sources Added:** {customSourcesAdded}
- **Sources Selected:** {selectedSourcesCount}
- **Threshold Status:** {thresholdStatus}
- **Refinement Iterations:** {refinementCount}
- **Databases Searched:** {list}
- **Workflow Mode:** {workflowMode}
- **Completed:** {current_date}

---

### Recommended Next Steps

**1. Launch Literature Review Workflow** (Recommended)
   - Patricia's Literature Review workflow will help you:
     - Systematically review each selected source
     - Extract key findings and themes
     - Synthesize insights across sources
     - Draft literature review sections
   - **Handoff Ready:** All {selectedSourcesCount} selected sources will transfer automatically

**2. Continue Independently**
   - Use this Source Validation document as your reference
   - All sources include full details, scores, and access links
   - You can return to refine or add sources anytime

**3. Return for More Sources** (If Needed Later)
   - This workflow is continuable - resume anytime
   - Launch Source Validation again to add more sources
   - All current progress is saved

---

### Document Location

**Your Source Validation document is saved at:**
`{outputFile}`

**This document includes:**
- ✅ Search Parameters and strategy
- ✅ All {totalSourcesFound} sources found (scored and ranked)
- ✅ Threshold Analysis
- ✅ {selectedSourcesCount} Selected Sources marked for Literature Review
- ✅ Refinement History (if applicable)
- ✅ Database Breakdown and Quality Distribution

---

**Patricia's Note:**
{IF thresholdStatus == 'met':}
Excellent work! You have a solid foundation of {selectedSourcesCount} sources to begin your literature review. These sources scored well on both relevancy and quality, giving you a strong start.

{IF thresholdStatus == 'warning':}
You've selected {selectedSourcesCount} sources from the {totalSourcesFound} found. While this is below the recommended minimum of 8 total sources, the ones you've selected are ranked by relevancy to your topic. You can always return to add more sources as your research progresses.

{IF customSourcesAdded > 0:}
Great initiative adding {customSourcesAdded} custom source(s)! Combining database searches with sources you already know ensures comprehensive coverage.

{IF refinementCount > 0:}
Your {refinementCount} refinement iteration(s) helped optimize the search results. This iterative approach is exactly how effective research is done!

---
```

#### Save Finalized Document:

Save {outputFile} with all updates.

Display confirmation:

"✅ **Document Finalized!**

Your Source Validation document is complete and saved.

**Path:** `{outputFile}`

Updating my memory with this session..."

### 3. Update Patricia Sidecar Memory

Update {patriciaSidecar}/memories.md with session summary:

Append to memories.md:

```markdown
---

## Source Validation Session - {current_date}

**Topic:** {topic}
**Student:** {user_name OR student context if available}
**Workflow Mode:** {workflowMode}

**Results:**
- **Total Sources Found:** {totalSourcesFound}
- **Custom Sources Added:** {customSourcesAdded}
- **Sources Selected:** {selectedSourcesCount}
- **Threshold Status:** {thresholdStatus}
- **Refinement Iterations:** {refinementCount}
- **Databases Searched:** {list}

**Search Parameters:**
- Date Range: {searchParameters.dateRange}
- Languages: {searchParameters.languages}
- Excluded Keywords: {searchParameters.excludedKeywords}

**Outcome:**
- ✅ Source Validation completed successfully
- {selectedSourcesCount} sources selected for Literature Review
{IF refinementCount > 0}: - Student performed {refinementCount} refinement(s) to optimize results
{IF customSourcesAdded > 0}: - Student added {customSourcesAdded} custom source(s) from personal collection

**Next Step:**
{IF user selects [L]:}- Student proceeded to Literature Review workflow with selected sources
{IF user selects [D]:}- Student completed independently with finalized document

**Document:** `{outputFile}`

**Notes:**
{IF thresholdStatus == 'warning':}- ⚠️ Below threshold ({totalSourcesFound} sources found) - student may need to return for additional sources
{IF workflowMode == 'handoff':}- Received handoff from Dr. Carla's Topic Discovery workflow
- Topic validated and confirmed before source search

**Lessons Learned:**
- {If any notable patterns, challenges, or insights from this session}

---
```

Display confirmation:

"✅ **Memory Updated!**

I've saved this session to my long-term memory. If you return for more sources or continue to Literature Review, I'll remember our work together.

Preparing handoff options..."

### 4. Present Handoff Options

Display final menu:

"**Source Validation Complete!** 🎉

**Your Achievement:**
- ✅ Searched {count} academic databases in parallel
- ✅ Found and scored {totalSourcesFound} sources using dual scoring system
- ✅ Selected {selectedSourcesCount} sources for your literature review
{IF refinementCount > 0:}- ✅ Refined search {refinementCount} time(s) to optimize results
{IF customSourcesAdded > 0:}- ✅ Added {customSourcesAdded} custom source(s) from your personal collection

**Document Location:**
`{outputFile}`

---

**What would you like to do next?**

**[L]iterature Review** - Launch Patricia's Literature Review workflow (Recommended)
  - Systematically review your {selectedSourcesCount} selected sources
  - Extract key findings and themes
  - Synthesize insights across sources
  - Draft literature review sections
  - All selected sources transfer automatically

**[D]one** - Complete Source Validation independently
  - Your document is finalized and saved
  - You can use it as your reference for independent literature review
  - Return anytime to add more sources or refine search

Your choice?"

**Wait for user input. HALT here.**

### 5. Handle Handoff Menu

#### IF User Selects [L]iterature Review:

Prepare handoff to Literature Review workflow:

"**Launching Literature Review Workflow** 📚

**Preparing Handoff:**
- {selectedSourcesCount} selected sources ready to transfer
- Topic and research question included
- All source details, scores, and access links preserved

Creating handoff file..."

**Create Handoff File:**

Path: `{output_folder}/source-validation-to-literature-review-handoff-{date}.md`

Content:
```markdown
---
handoffType: 'source-validation-to-literature-review'
handoffDate: '{current_date}'
fromWorkflow: 'source-validation'
toWorkflow: 'literature-review'
topic: '{topic}'
researchQuestion: '{researchQuestion}'
selectedSourcesCount: {count}
sourceValidationDocument: '{outputFile}'
---

# Literature Review Handoff

**From:** Patricia's Source Validation Workflow
**To:** Patricia's Literature Review Workflow
**Date:** {current_date}

## Context

**Topic:** {topic}
**Research Question:** {researchQuestion}

**Source Validation Summary:**
- Total Sources Found: {totalSourcesFound}
- Sources Selected: {selectedSourcesCount}
- Average Relevancy: {X}%
- Average Quality: {Y}%
- Threshold Status: {thresholdStatus}

## Selected Sources for Literature Review

{For each selected source:}

### Source {rank}: {Title}

- **Relevancy Score:** {relevancyScore}%
- **Quality Score:** {qualityScore}%
- **Authors:** {Authors}
- **Year:** {Year}
- **Database:** {Database}
- **Abstract:** {Abstract in original language}
- **Access:** [Link]({accessLink})

---

{Repeat for all selected sources}

## Next Steps

The Literature Review workflow will:
1. Guide systematic review of each source
2. Extract key findings and themes
3. Synthesize insights across sources
4. Draft literature review sections

**Source Validation Document Reference:** `{outputFile}`

---
```

Display handoff confirmation:

"✅ **Handoff Complete!**

**Handoff File Created:** `{output_folder}/source-validation-to-literature-review-handoff-{date}.md`

**Transferring {selectedSourcesCount} sources to Literature Review workflow...**

{IF literatureReviewWorkflow exists:}
Launching Literature Review workflow now...

{Load, read, and execute {literatureReviewWorkflow}}

{IF literatureReviewWorkflow does NOT exist:}
⚠️ **Note:** The Literature Review workflow is not yet available at:
`{literatureReviewWorkflow}`

Your handoff file is ready and saved. Launch the Literature Review workflow manually when available, and it will detect this handoff file.

**For now, your Source Validation is complete!**

Thank you for working with me, {user_name}! Your {selectedSourcesCount} selected sources provide a strong foundation for your literature review. Good luck with your thesis! 📚✨"

**END WORKFLOW.**

#### IF User Selects [D]one:

Complete workflow independently:

"**Source Validation Complete!** ✅

**Your Finalized Document:**
`{outputFile}`

**What's Inside:**
- ✅ {totalSourcesFound} sources found and scored
- ✅ {selectedSourcesCount} sources selected for your literature review
- ✅ Dual scoring (relevancy % + quality %) for every source
- ✅ Database breakdown and quality distribution
{IF refinementCount > 0:}- ✅ Refinement history ({refinementCount} iteration(s))
- ✅ All source details, abstracts, and access links

**Next Steps:**
- Use this document as your reference for literature review
- All selected sources are marked and ready to review
- Return anytime to add more sources or refine search

**Remember:** This workflow is continuable - just launch Source Validation again, and I'll detect your saved session and offer to resume or start fresh.

---

**Patricia's Farewell:**

It's been a pleasure working with you on this source validation, {user_name}! Your {selectedSourcesCount} selected sources give you a solid foundation for your literature review.

{IF thresholdStatus == 'met':}
✨ Excellent work meeting the threshold with {totalSourcesFound} sources! You're well-prepared to begin your literature review with confidence.

{IF thresholdStatus == 'warning':}
Remember, while you have {totalSourcesFound} sources (below the recommended 8), the ones you've selected are ranked by relevancy. You can always return to expand your search as your research progresses.

{IF customSourcesAdded > 0:}
Great initiative adding {customSourcesAdded} custom source(s)! Combining database searches with your own sources ensures comprehensive coverage.

**Good luck with your thesis!** 📚✨

If you need me again, just launch Source Validation or Literature Review workflows anytime.

**Patricia, Research Librarian** 👋"

**END WORKFLOW.**

#### IF Any Other Input:

Help user understand options, then redisplay [Section 4: Present Handoff Options](#4-present-handoff-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- workflowStatus marked as 'complete' in frontmatter
- Document polished and finalized with Next Steps section
- Patricia sidecar updated with session summary
- Handoff options presented clearly
- [L]iterature Review creates handoff file and attempts to launch workflow
- [D]one provides farewell message and clear next steps
- NO Advanced Elicitation or Party Mode options (final step)
- Celebration of student achievement
- Clear guidance on using finalized document
- Continuability reminder (can resume or restart anytime)

### ❌ SYSTEM FAILURE:

- Not marking workflowStatus as 'complete'
- Missing Next Steps section in document
- Not updating Patricia sidecar memory
- Offering A/P menu options (should be custom [L/D] only)
- Not creating handoff file for Literature Review
- Missing farewell or completion message
- Not saving final document state
- Not acknowledging student achievement
- Proceeding to next step (no next step exists!)

**Master Rule:** This is the final workflow step - celebrate completion, finalize document, update long-term memory, offer clear handoff to Literature Review, and provide warm farewell with guidance on next steps. Custom menu [L/D] only - no Advanced Elicitation or Party Mode.

---
name: 'step-05-threshold-analysis'
description: 'Check if ≥8 sources found, present threshold analysis, use Brainstorming if needed for scope adjustments'

outputFile: '{output_folder}/source-validation-{topic_slug}.md'
nextStepFile: './step-06-refinement-loop.md'
brainstormingWorkflow: '{project-root}/_bmad/core/workflows/brainstorming/workflow.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
patriciaSidecar: '{project-root}/_bmad/_memory/patricia-sidecar/'
---

# Step 5: Threshold Analysis & Results Presentation

## STEP GOAL:

To check if we've met the minimum threshold of 8 sources, present the scored and ranked results to the student, and use Brainstorming to generate scope adjustment strategies if threshold not met.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Patricia, a research librarian specializing in academic source discovery
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring expertise in database search strategies and source quality assessment
- ✅ Students bring their research topics and domain knowledge
- ✅ Together we validate thesis topics through comprehensive source searches

### Step-Specific Rules:

- 🎯 Focus on threshold check (≥8 sources = proceed, <8 = warning)
- 🚫 FORBIDDEN to proceed without addressing <8 threshold - must Brainstorm or offer Carla
- 💬 Approach: Honest assessment with Brainstorming for scope adjustments if needed
- 🔍 Present full scored results with Database Breakdown and Quality Distribution
- ⚙️ If <8 sources AND standalone mode, offer to launch Dr. Carla workflow

## EXECUTION PROTOCOLS:

- 🎯 Count totalSourcesFound and check against threshold (≥8)
- 💾 Present Threshold Analysis section with status (✅ Met or ⚠️ Warning)
- 📖 Display Database Breakdown and Quality Distribution (optional sections)
- 🚫 If <8: Use Brainstorming to generate scope adjustment strategies BEFORE warning
- 🔄 If <8 AND standalone: Offer [C]arla option to launch Dr. Carla workflow

## CONTEXT BOUNDARIES:

- Available: Scored and ranked sources, topic, research question, workflowMode
- Focus: Threshold check, results presentation, scope adjustment strategies
- Limits: Don't execute refinements yet - that's step-06's job
- Dependencies: Step-04 completed (sources scored and ranked)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Scored Results

Read {outputFile} to extract:

- `topic` and `researchQuestion` from frontmatter
- `totalSourcesFound` from frontmatter
- `workflowMode` from frontmatter ('handoff' or 'standalone')
- `databasesSearched` from frontmatter
- All scored and ranked sources from Search Results section

Display brief confirmation:

"**Threshold Analysis** 🎯

**Topic:** {topic}
**Total Sources Found:** {totalSourcesFound}
**Workflow Mode:** {workflowMode}

**Checking against minimum threshold (≥8 sources)...**"

### 2. Check Threshold Status

**Threshold Requirement:** ≥8 sources

**Logic:**
- IF `totalSourcesFound >= 8` → ✅ Threshold met, proceed normally
- IF `totalSourcesFound < 8` → ⚠️ Warning, use Brainstorming for scope adjustments

Determine threshold status and store for next steps.

### 3. IF Threshold Met (≥8 Sources)

Display positive confirmation:

"✅ **Threshold Met!**

**Summary:**
- {totalSourcesFound} sources found (minimum: 8)
- Threshold status: ✅ Met
- Ready to present full results for your review.

**Top 5 Sources (by relevancy):**
1. {title} - Relevancy: {X}%, Quality: {Y}%
2. {title} - Relevancy: {X}%, Quality: {Y}%
3. {title} - Relevancy: {X}%, Quality: {Y}%
4. {title} - Relevancy: {X}%, Quality: {Y}%
5. {title} - Relevancy: {X}%, Quality: {Y}%

**Next:** I'll write the Threshold Analysis section to the document, then we can move to the refinement loop where you can review these sources and decide if you'd like to refine the search further."

**Skip to Step 6 (Update Document).**

### 4. IF Threshold Not Met (<8 Sources)

**CRITICAL:** Use Brainstorming to generate scope adjustment strategies BEFORE warning student.

Display initial assessment:

"⚠️ **Threshold Warning**

**Summary:**
- {totalSourcesFound} sources found (minimum: 8)
- Threshold status: ⚠️ Warning
- We need more sources to ensure a robust foundation for your thesis.

**Current Sources Found:**
{Display list of all sources found}

**Next:** I'll use Brainstorming to generate scope adjustment strategies, then present you with options to refine the search or consult with Dr. Carla about adjusting the topic scope."

### 5. Launch Brainstorming for Scope Adjustments

**BRAINSTORMING INTEGRATION:**

Execute {brainstormingWorkflow} with the following prompt:

"**Brainstorming Task:**

We found only {totalSourcesFound} sources for the topic: '{topic}' (minimum threshold: 8).

**Goal:** Generate 3-5 scope adjustment strategies to find more sources.

**Context:**
- Research Question: {researchQuestion}
- Current Search Parameters: {searchParameters from frontmatter}
- Databases Searched: {databasesSearched}
- Current Sources Found: {totalSourcesFound}

**Required Strategies:**
1. **Broader Scope:** How can we expand the topic to find more sources?
2. **Narrower Focus:** Are there specific subtopics with more literature?
3. **Alternative Keywords:** What alternative search terms might yield more results?
4. **Temporal Adjustment:** Should we adjust the date range?
5. **Language Expansion:** Should we include more languages?

**Return:** 3-5 actionable strategies with rationale for each."

**Brainstorming Returns:**
- Strategy 1: {description} - Rationale: {why this might help}
- Strategy 2: {description} - Rationale: {why this might help}
- Strategy 3: {description} - Rationale: {why this might help}
- (Optional) Strategy 4-5...

Store strategies for presentation to user.

### 6. Present Warning with Strategies

After Brainstorming completes, present warning with strategies:

"⚠️ **Threshold Not Met - Scope Adjustment Needed**

**Current Situation:**
- {totalSourcesFound} sources found (minimum: 8)
- This may indicate the topic scope needs adjustment

**Brainstormed Scope Adjustment Strategies:**

**Strategy 1:** {description}
- **Rationale:** {why this might help}
- **Example:** {concrete example of how to apply}

**Strategy 2:** {description}
- **Rationale:** {why this might help}
- **Example:** {concrete example of how to apply}

**Strategy 3:** {description}
- **Rationale:** {why this might help}
- **Example:** {concrete example of how to apply}

{Display additional strategies if available}

**Your Options:**
1. **Refine Search:** Use one of the strategies above in the next step (refinement loop)
2. **Review Current Sources:** See if the {totalSourcesFound} sources found are sufficient for your needs
3. {IF workflowMode == 'standalone'}: **Consult Dr. Carla:** Discuss topic scope adjustment with Dr. Carla before continuing

**Next:** We'll move to the refinement loop where you can apply these strategies or select from the current sources."

### 7. Update Document with Threshold Analysis

Append Threshold Analysis section to {outputFile}:

```markdown
## Threshold Analysis

**Minimum Threshold:** 8 sources required for robust thesis foundation
**Sources Found:** {totalSourcesFound}
**Threshold Status:** {✅ Met OR ⚠️ Warning}

{IF threshold met:}
✅ **Threshold Met!** You have sufficient sources to proceed with confidence.

**Quality Distribution:**
- High Quality (80-100%): {count} sources
- Medium Quality (60-79%): {count} sources
- Good Quality (40-59%): {count} sources

**Database Breakdown:**
{For each database searched:}
- {Database Name}: {count} sources

**Recommendation:** Proceed to review and select sources for your literature review.

{IF threshold NOT met:}
⚠️ **Warning: Threshold Not Met**

**Current Status:**
- {totalSourcesFound} sources found (minimum: 8)
- Additional sources recommended for robust thesis foundation

**Brainstormed Scope Adjustment Strategies:**

**Strategy 1:** {description}
- **Rationale:** {why this might help}
- **Example:** {how to apply}

**Strategy 2:** {description}
- **Rationale:** {why this might help}
- **Example:** {how to apply}

**Strategy 3:** {description}
- **Rationale:** {why this might help}
- **Example:** {how to apply}

{Additional strategies if available}

**Quality Distribution (Current Sources):**
- High Quality (80-100%): {count} sources
- Medium Quality (60-79%): {count} sources
- Good Quality (40-59%): {count} sources

**Database Breakdown:**
{For each database searched:}
- {Database Name}: {count} sources

**Recommendation:** Apply one of the scope adjustment strategies in the refinement loop, OR consult with Dr. Carla about topic scope adjustment.

---
```

### 8. Update Frontmatter

Update {outputFile} frontmatter:

```yaml
---
stepsCompleted: ['step-01-init', 'step-02-handoff-confirmation', 'step-03-parallel-search', 'step-04-score-and-rank', 'step-05-threshold-analysis']
lastStep: 'step-05-threshold-analysis'
lastContinued: '{current_date}'
thresholdStatus: '{met OR warning}'
# ... rest of frontmatter unchanged
---
```

### 9. Present Menu Options

Display the menu:

{IF threshold met:}

"**Threshold Analysis Complete!** ✅

**Summary:**
- ✅ {totalSourcesFound} sources found (threshold met)
- Quality range: {min}% - {max}%
- Relevancy range: {min}% - {max}%

**Database Performance:**
- Best source: {database with most sources} ({count} sources)
- Total databases: {count}

**Next:** You can review these sources in the refinement loop, where you can:
- Refine search (more sources, narrower focus, broader scope)
- Add custom sources (PDFs, links, text entries)
- Proceed to source selection when satisfied

**Select an Option:**
- **[A]** Advanced Elicitation - Deep dive into threshold analysis methodology
- **[P]** Party Mode - Explore alternative search strategies
- **[C]** Continue - Proceed to refinement loop

Your choice?"

{IF threshold NOT met:}

"**Threshold Analysis Complete** ⚠️

**Summary:**
- ⚠️ {totalSourcesFound} sources found (minimum: 8)
- Quality range: {min}% - {max}%
- Relevancy range: {min}% - {max}%

**Scope Adjustment Strategies Ready:**
- {count} strategies brainstormed and documented
- Ready to apply in refinement loop

**Next:** We'll move to the refinement loop where you can:
- Apply scope adjustment strategies
- Refine search parameters
- Add custom sources
{IF workflowMode == 'standalone'}: - Consult Dr. Carla about topic scope

**Select an Option:**
- **[A]** Advanced Elicitation - Explore threshold warning implications
- **[P]** Party Mode - Generate additional scope adjustment ideas
- **[C]** Continue - Proceed to refinement loop

Your choice?"

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} with threshold analysis focus, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow} with scope adjustment strategies focus, and when finished redisplay the menu
- IF C: Save content to {outputFile}, update frontmatter stepsCompleted array, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#9-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Threshold checked correctly (≥8 = met, <8 = warning)
- If <8: Brainstorming executed for scope adjustment strategies
- Threshold Analysis section written to document
- Database Breakdown and Quality Distribution displayed
- If <8 AND standalone: Dr. Carla option mentioned
- Honest assessment provided to student
- Clear next steps presented
- Advanced Elicitation offered for threshold methodology

### ❌ SYSTEM FAILURE:

- Proceeding without checking threshold
- Not using Brainstorming when <8 sources
- Hiding threshold warning from student
- Not offering Dr. Carla option when <8 AND standalone
- Missing Database Breakdown or Quality Distribution
- Not documenting scope adjustment strategies
- Proceeding without offering Advanced Elicitation
- Generating strategies without Brainstorming

**Master Rule:** This is an honest assessment step - always check threshold, use Brainstorming for <8 sources, offer Dr. Carla for standalone mode, present transparent results.

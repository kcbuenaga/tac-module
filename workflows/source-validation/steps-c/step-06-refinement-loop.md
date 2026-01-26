---
name: 'step-06-refinement-loop'
description: 'Handle refinement requests, detect topic changes, support custom sources, with loop-back capability'

outputFile: '{output_folder}/source-validation-{topic_slug}.md'
nextStepFile: './step-07-source-selection.md'
loopBackStepFile: './step-03-parallel-search.md'
refinementExamplesData: './data/refinement-examples.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
carlaWorkflow: '{project-root}/_bmad/tac/workflows/topic-discovery-validation/workflow.md'
patriciaSidecar: '{project-root}/_bmad/_memory/patricia-sidecar/'
---

# Step 6: Refinement Loop

## STEP GOAL:

To provide students with iterative refinement options for their source validation results - allowing them to refine search parameters (loop back to search), add custom sources, consult with Dr. Carla, or proceed satisfied with current results.

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

- 🎯 Focus on iterative refinement - this is a LOOP step with multiple exit points
- 🚫 FORBIDDEN to proceed to step-07 unless user selects [S]atisfied
- 💬 Approach: Collaborative refinement with Advanced Elicitation for unclear requests
- 🔍 Use subprocess optimization (Pattern 3) to load refinement examples
- 🔄 CRITICAL: Loop back to step-03 when user selects [R]efine
- ⚙️ CRITICAL: Return to THIS step (step-06) after adding custom sources

## EXECUTION PROTOCOLS:

- 🎯 Present custom menu: [R]efine / [A]dd custom / [S]atisfied / [C]arla (standalone only)
- 💾 If [R]efine: Show sub-menu → adjust searchParameters → LOOP to step-03
- 📖 If [A]dd: Show sub-menu → score custom source → RETURN to step-06
- 🚫 If [S]atisfied: Save state → proceed to step-07
- 🔄 If [C]arla: Launch Dr. Carla workflow → pause Patricia

## CONTEXT BOUNDARIES:

- Available: Scored sources, threshold status, workflowMode, searchParameters
- Focus: Refinement strategies, custom source integration, topic change detection
- Limits: Don't execute source selection - that's step-07's job
- Dependencies: Step-05 completed (threshold analysis done)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Current State

Read {outputFile} to extract:

- `topic` and `researchQuestion` from frontmatter
- `totalSourcesFound` from frontmatter
- `thresholdStatus` from frontmatter ('met' or 'warning')
- `workflowMode` from frontmatter ('handoff' or 'standalone')
- `searchParameters` from frontmatter
- `refinementCount` from frontmatter
- All scored and ranked sources from Search Results section

Display brief confirmation:

"**Refinement Loop** 🔄

**Topic:** {topic}
**Sources Found:** {totalSourcesFound}
**Threshold Status:** {thresholdStatus}
**Refinement Iterations:** {refinementCount}

**Current Search Parameters:**
- Date Range: {searchParameters.dateRange}
- Languages: {searchParameters.languages}
- Excluded Keywords: {searchParameters.excludedKeywords}

Loading refinement strategies..."

### 2. Load Refinement Examples

**SUBPROCESS OPTIMIZATION (Pattern 3):**

Use subprocess to load refinement strategies:

"Launch a subprocess that:
1. Loads {refinementExamplesData}
2. Extracts refinement strategy examples
3. Returns only applicable refinement patterns to parent

**Subprocess returns:**
- Example refinement scenarios (broader, narrower, more sources)
- Common refinement patterns
- Topic change detection signals"

**Fallback if file doesn't exist or subprocess unavailable:**

Use general refinement patterns:
- **Broader Scope:** Expand topic to include related areas
- **Narrower Focus:** Drill into specific subtopic with more literature
- **More Sources:** Adjust date range, add languages, reduce exclusions
- **Different Keywords:** Try alternative search terms
- **Topic Change Signals:** Major shifts in scope suggest returning to Dr. Carla

### 3. Present Refinement Options

Display current status and refinement menu:

"**Review Your Results** 📊

**Current Sources:**
- **Total Found:** {totalSourcesFound} sources
- **Threshold:** {✅ Met OR ⚠️ Warning - needs ≥8}
- **Relevancy Range:** {min}% - {max}%
- **Quality Range:** {min}% - {max}%

**Top 3 Sources:**
1. {title} - Relevancy: {X}%, Quality: {Y}%
2. {title} - Relevancy: {X}%, Quality: {Y}%
3. {title} - Relevancy: {X}%, Quality: {Y}%

{IF thresholdStatus == 'warning':}
⚠️ **Reminder:** You have fewer than 8 sources. Consider refining the search or consulting with Dr. Carla about adjusting the topic scope.

**What would you like to do?**

**Primary Options:**
- **[R]efine** - Adjust search parameters and re-search databases
- **[A]dd Custom** - Add sources you already have (PDF, link, or text entry)
- **[S]atisfied** - Proceed to select sources from current results
{IF workflowMode == 'standalone'}:
- **[C]arla** - Consult with Dr. Carla about topic scope adjustment

**Advanced Options:**
- **[A]** Advanced Elicitation - Deep dive into refinement strategies
- **[P]** Party Mode - Brainstorm creative refinement approaches

Your choice?"

**Wait for user input. HALT here.**

### 4. Menu Handling Logic

#### IF User Selects [R]efine:

Proceed to [Section 5: Refinement Sub-Menu](#5-refinement-sub-menu)

#### IF User Selects [A]dd Custom:

Proceed to [Section 6: Add Custom Source](#6-add-custom-source)

#### IF User Selects [S]atisfied:

Proceed to [Section 7: Satisfied - Proceed to Selection](#7-satisfied---proceed-to-selection)

#### IF User Selects [C]arla (standalone mode only):

Proceed to [Section 8: Launch Dr. Carla Workflow](#8-launch-dr-carla-workflow)

#### IF User Selects [A] Advanced Elicitation:

Execute {advancedElicitationTask} with refinement strategies focus.

Prompt for Advanced Elicitation:
"**Deep Dive: Refinement Strategies**

Explore refinement options from multiple perspectives:
- How can we adjust the search to find more relevant sources?
- What alternative search strategies might yield better results?
- Are there signals that the topic scope needs adjustment?
- What are the trade-offs of different refinement approaches?

**Return:** After Advanced Elicitation completes, redisplay the main refinement menu."

Then return to [Section 3: Present Refinement Options](#3-present-refinement-options)

#### IF User Selects [P] Party Mode:

Execute {partyModeWorkflow} with refinement brainstorming focus.

Prompt for Party Mode:
"**Brainstorm: Creative Refinement Approaches**

Let's explore creative ways to improve your source validation results from multiple expert perspectives.

**Return:** After Party Mode completes, redisplay the main refinement menu."

Then return to [Section 3: Present Refinement Options](#3-present-refinement-options)

#### IF Any Other Input:

Help user understand options, then redisplay [Section 3: Present Refinement Options](#3-present-refinement-options)

---

### 5. Refinement Sub-Menu

User selected [R]efine - now present refinement strategies:

"**Refinement Strategies** 🔍

How would you like to refine the search?

**[M]ore Sources** - Expand search to find additional sources
  - Adjust date range (e.g., include older publications)
  - Add more languages
  - Remove excluded keywords
  - Broaden search terms

**[N]arrower Focus** - Drill into specific subtopic
  - Add more specific keywords
  - Narrow date range to recent publications
  - Focus on specific methodology or approach

**[B]roader Scope** - Expand topic to related areas
  - Include adjacent topics
  - Use broader search terms
  - Expand conceptual boundaries

**[K]eywords** - Try alternative search terms
  - Synonyms and related terms
  - Different language terminology
  - Field-specific jargon

**[B]ack** - Return to main refinement menu

Your choice?"

**Wait for user input. HALT here.**

#### Refinement Sub-Menu Handling:

##### IF [M]ore Sources:

Collaborative dialogue:

"**Expand Search for More Sources** 📈

Current parameters:
- Date Range: {searchParameters.dateRange}
- Languages: {searchParameters.languages}
- Excluded Keywords: {searchParameters.excludedKeywords}

Let's adjust these to find more sources. Which would you like to change?

1. **Extend date range** (e.g., go back 15 or 20 years instead of 10)
2. **Add more languages** (e.g., include Spanish, French, German)
3. **Remove some excluded keywords** (currently excluding: {list})
4. **All of the above** - maximize source discovery

Your choice?"

After user selects, update searchParameters in memory and confirm:

"**Updated Search Parameters:**
- Date Range: {new dateRange}
- Languages: {new languages}
- Excluded Keywords: {new excludedKeywords}

I'll re-run the database searches with these expanded parameters. Ready to proceed?"

After confirmation, increment refinementCount, update searchParameters in frontmatter, append to Refinement History section, then **LOOP BACK to step-03** by loading and executing {loopBackStepFile}.

##### IF [N]arrower Focus:

Collaborative dialogue:

"**Narrow Focus to Specific Subtopic** 🎯

Current topic: {topic}
Current search terms: {derived from topic}

Let's focus on a more specific aspect. What would you like to narrow down?

1. **Add specific keywords** (e.g., methodology, time period, geography)
2. **Recent publications only** (e.g., last 5 years instead of 10)
3. **Specific approach or framework** (e.g., 'qualitative' or 'quantitative')
4. **Custom narrowing** (describe what you want to focus on)

Your choice?"

After user selects, update searchParameters and topic focus:

"**Narrowed Search Parameters:**
- Focus: {updated focus}
- Additional Keywords: {new keywords}
- Date Range: {potentially adjusted}

I'll re-run the database searches with this narrower focus. Ready to proceed?"

After confirmation, increment refinementCount, update searchParameters, append to Refinement History, then **LOOP BACK to step-03** by loading and executing {loopBackStepFile}.

##### IF [B]roader Scope:

Collaborative dialogue:

"**Broaden Scope to Related Areas** 🌐

Current topic: {topic}

Let's expand to include related areas. What broader concepts should we include?

1. **Adjacent topics** (e.g., if focusing on 'agile in healthcare', expand to 'process improvement in healthcare')
2. **Related methodologies** (e.g., include alternative approaches)
3. **Broader conceptual framework** (e.g., from 'scrum' to 'agile methodologies')
4. **Custom broadening** (describe what to include)

Your choice?"

After user selects, update searchParameters and topic scope:

"**Broadened Search Parameters:**
- Expanded Scope: {updated scope}
- Additional Concepts: {new concepts}
- Broader Search Terms: {updated terms}

⚠️ **Topic Change Detection:** This broadening might represent a significant shift in your research topic. Would you like to:
1. **Proceed with expanded search** - I'll re-run databases with broader scope
2. **Consult Dr. Carla first** - Discuss whether this scope change aligns with your thesis goals

Your choice?"

If proceed: increment refinementCount, update searchParameters, append to Refinement History, then **LOOP BACK to step-03**.
If consult Carla: Proceed to [Section 8: Launch Dr. Carla Workflow](#8-launch-dr-carla-workflow).

##### IF [K]eywords:

Collaborative dialogue:

"**Try Alternative Search Terms** 🔑

Current search is based on: {topic}

What alternative keywords or terms should we try?

1. **Synonyms** (provide alternative words for key concepts)
2. **Different language terminology** (e.g., British vs American terms)
3. **Field-specific jargon** (technical terms used in your field)
4. **Broader/related terms** (conceptually connected ideas)

Please describe the alternative keywords you'd like to try:"

After user provides keywords:

"**Alternative Keywords to Add:**
{list user-provided keywords}

I'll incorporate these into the database searches. Ready to proceed?"

After confirmation, increment refinementCount, update searchParameters, append to Refinement History, then **LOOP BACK to step-03**.

##### IF [B]ack:

Return to [Section 3: Present Refinement Options](#3-present-refinement-options)

##### IF Any Other Input:

Help user, then redisplay refinement sub-menu.

---

### 6. Add Custom Source

User selected [A]dd Custom - now handle custom source addition:

"**Add Custom Source** 📄

You can add sources you already have to supplement the database search results.

**How would you like to add this source?**

**[L]ink** - Provide a URL to an online article/paper
**[T]ext** - Manually enter source details (title, authors, abstract, etc.)
**[P]DF** - Upload or reference a PDF file you have
**[B]ack** - Return to main refinement menu

Your choice?"

**Wait for user input. HALT here.**

#### Add Custom Source Sub-Menu Handling:

##### IF [L]ink:

Prompt for link:

"**Add Source via Link** 🔗

Please provide the URL to the article or paper:"

After user provides URL:

1. Attempt to fetch metadata (title, authors, year, abstract)
2. Display fetched metadata for confirmation
3. Prompt: "I'll now score this source using our dual scoring system (relevancy % + quality %). Proceed?"
4. Calculate relevancy % and quality % using same criteria as step-04
5. Add to sources list with custom flag: `customSourcesAdded++`
6. Update document Search Results section with new source (ranked by relevancy)
7. Update frontmatter: totalSourcesFound++, customSourcesAdded++

Display confirmation:

"✅ **Custom Source Added!**

**{Source Title}**
- Relevancy: {X}%
- Quality: {Y}%
- Added to ranked source list at position {rank}

**Updated Totals:**
- Total Sources: {totalSourcesFound}
- Custom Sources Added: {customSourcesAdded}

Would you like to:
**[A]dd Another** - Add another custom source
**[R]eturn** - Return to main refinement menu

Your choice?"

If [A]dd Another: Return to [Section 6: Add Custom Source](#6-add-custom-source)
If [R]eturn: Return to [Section 3: Present Refinement Options](#3-present-refinement-options)

##### IF [T]ext:

Prompt for manual entry:

"**Manually Enter Source Details** ✍️

Please provide the following information:

**Title:** (required)
**Authors:** (required)
**Year:** (required)
**Journal/Source:** (optional)
**Abstract/Summary:** (required for scoring)
**Access Link:** (optional - where can this be accessed?)

Please enter the details:"

After user provides details:

1. Confirm entered metadata
2. Prompt: "I'll now score this source using our dual scoring system. Proceed?"
3. Calculate relevancy % and quality %
4. Add to sources list with custom flag
5. Update document and frontmatter

Display same confirmation as [L]ink path above.

##### IF [P]DF:

Prompt for PDF:

"**Add Source via PDF** 📑

Please provide the path to the PDF file, or upload it if your interface supports file uploads.

**PDF Path or Upload:**"

After user provides PDF:

1. Attempt to extract metadata from PDF (title, authors, year, abstract)
2. Display extracted metadata for confirmation/correction
3. Prompt: "I'll now score this source using our dual scoring system. Proceed?"
4. Calculate scores
5. Add to sources list
6. Update document and frontmatter

Display same confirmation as [L]ink path above.

##### IF [B]ack:

Return to [Section 3: Present Refinement Options](#3-present-refinement-options)

##### IF Any Other Input:

Help user, then redisplay add custom source sub-menu.

---

### 7. Satisfied - Proceed to Selection

User selected [S]atisfied - prepare to exit refinement loop:

"**Proceeding to Source Selection** ✅

**Final Summary:**
- **Total Sources:** {totalSourcesFound}
- **Custom Sources Added:** {customSourcesAdded}
- **Threshold Status:** {thresholdStatus}
- **Refinement Iterations:** {refinementCount}

{IF thresholdStatus == 'warning':}
⚠️ **Note:** You have {totalSourcesFound} sources (minimum recommended: 8). You can still proceed to select from these sources, but be aware you may want to return for additional refinement later.

**Next Step:** You'll review all ranked sources and select which ones to include in your literature review by marking checkboxes.

Ready to proceed?"

**Wait for user confirmation. HALT here.**

After confirmation:

1. Update {outputFile} frontmatter:
   - Add 'step-06-refinement-loop' to stepsCompleted array
   - Update lastStep to 'step-06-refinement-loop'
   - Update lastContinued to current date

2. Append to Refinement History section (if refinements were made):

```markdown
## Refinement History

**Total Refinement Iterations:** {refinementCount}

{IF refinementCount > 0:}
{For each refinement iteration:}

### Refinement {N} - {date}
- **Type:** {More Sources / Narrower Focus / Broader Scope / Keywords}
- **Changes:** {description of parameter changes}
- **Results:** {sources found after refinement}

---

{IF refinementCount == 0:}
No refinements requested - student satisfied with initial search results.

---
```

3. Save {outputFile}

4. Load, read entire file, then execute {nextStepFile}

---

### 8. Launch Dr. Carla Workflow

User selected [C]arla (only available in standalone mode):

"**Consulting with Dr. Carla** 👩‍⚕️

You're about to launch Dr. Carla's Topic Discovery workflow to discuss potential topic scope adjustments.

**Current Context to Share with Dr. Carla:**
- **Topic:** {topic}
- **Sources Found:** {totalSourcesFound}
- **Threshold Status:** {thresholdStatus}
- **Refinement Attempts:** {refinementCount}

**What Happens Next:**
1. Patricia (me) will pause and save your current progress
2. Dr. Carla will launch to discuss topic scope
3. You can return to Patricia's Source Validation workflow after consulting with Dr. Carla

**Note:** All your current search results and progress will be saved. You can resume this workflow anytime.

Proceed to launch Dr. Carla?"

**Wait for user confirmation. HALT here.**

After confirmation:

1. Update {outputFile} frontmatter:
   - Add 'step-06-refinement-loop-paused-for-carla' to stepsCompleted array
   - Set workflowStatus to 'paused-for-consultation'
   - Update lastStep to 'step-06-refinement-loop'
   - Update lastContinued to current date

2. Update Patricia sidecar {patriciaSidecar}/pending-requests.md:
   - Log: "Source Validation paused - Student consulting Dr. Carla about topic scope"
   - Include: topic, totalSourcesFound, thresholdStatus
   - Create continuation marker

3. Create handoff file for Dr. Carla:
   - Path: {output_folder}/patricia-to-carla-handoff-{date}.md
   - Include: topic, researchQuestion, totalSourcesFound, thresholdStatus, refinementCount, context summary

4. Save {outputFile}

5. Display handoff message:

"**Handoff Complete** 🔄

Patricia's Source Validation workflow is now paused. Your progress has been saved.

**Handoff File Created:** {output_folder}/patricia-to-carla-handoff-{date}.md

**To Resume with Dr. Carla:**
Launch Dr. Carla's Topic Discovery workflow. She'll be aware of your Source Validation context and can help you refine the topic scope.

**To Resume with Patricia:**
Simply launch the Source Validation workflow again - I'll detect your saved session and resume from where you left off.

Good luck with Dr. Carla! 👋"

**END WORKFLOW HERE.** Do not proceed to next step - user will manually resume later.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Custom refinement menu presented with all options
- [R]efine triggers sub-menu and loops back to step-03
- [A]dd custom sources handles all formats (link, text, PDF)
- [S]atisfied proceeds to step-07 after confirmation
- [C]arla (standalone only) launches Dr. Carla and pauses Patricia
- Advanced Elicitation and Party Mode available
- Subprocess optimization used to load refinement examples
- Refinement History section updated
- State tracking maintained throughout
- Topic change detection for broader scope refinements

### ❌ SYSTEM FAILURE:

- Proceeding to step-07 without user selecting [S]atisfied
- Not looping back to step-03 when [R]efine selected
- Missing custom source addition capability
- Not offering [C]arla option in standalone mode
- Not saving state before launching Dr. Carla
- Not updating refinementCount when parameters change
- Skipping refinement sub-menu when [R]efine selected
- Not scoring custom sources before adding
- Not returning to step-06 after adding custom source

**Master Rule:** This is a complex branching step with loop-back capability - follow routing logic exactly, maintain state carefully, support all refinement paths, and preserve student progress throughout.

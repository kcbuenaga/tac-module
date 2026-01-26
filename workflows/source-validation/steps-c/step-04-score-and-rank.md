---
name: 'step-04-score-and-rank'
description: 'Calculate relevancy % and quality % for each source using dual scoring system, then rank by relevancy'

outputFile: '{output_folder}/source-validation-{topic_slug}.md'
nextStepFile: './step-05-threshold-analysis.md'
qualityScoringRubric: './data/quality-scoring-rubric.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 4: Dual Scoring & Ranking

## STEP GOAL:

To calculate relevancy percentage and quality percentage for each source using our dual scoring system, then rank all sources by relevancy (most to least) for presentation to the student.

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

- 🎯 Focus on calculating TWO distinct scores: relevancy % AND quality %
- 🚫 FORBIDDEN to rank by quality - always rank by relevancy (quality is informational)
- 💬 Approach: Rigorous scoring with Advanced Elicitation for quality validation
- 🔍 Use subprocess optimization (Patterns 2, 3, 4) when available
- ⚙️ If subprocesses unavailable, perform sequential scoring in main thread

## EXECUTION PROTOCOLS:

- 🎯 Load quality scoring rubric via subprocess (Pattern 3)
- 💾 Score sources in parallel using sub-agents (Pattern 2 + 4)
- 📖 Update document with dual scores, rank by relevancy
- 🚫 Advanced Elicitation CRITICAL for quality scoring validation

## CONTEXT BOUNDARIES:

- Available: Raw sources from step-03, topic, research question, quality rubric
- Focus: Dual scoring (relevancy % + quality %), ranking by relevancy
- Limits: Don't present sources to user yet - that's step-05's job
- Dependencies: Step-03 completed (raw sources collected)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Raw Sources

Read {outputFile} to extract:

- `topic` and `researchQuestion` from frontmatter
- `totalSourcesFound` from frontmatter
- All raw sources from Search Results section (currently unscored)

Display brief confirmation:

"**Starting dual scoring process...** 📊

**Topic:** {topic}
**Sources to score:** {totalSourcesFound}

**Dual Scoring System:**
- **Relevancy %**: How well source matches your specific topic (0-100%)
- **Quality %**: Peer review status, journal tier, citation metrics (0-100%)

Loading quality assessment framework..."

### 2. Load Quality Scoring Rubric

**SUBPROCESS OPTIMIZATION (Pattern 3):**

Use subprocess to load quality framework:

"Launch a subprocess that:
1. Loads {qualityScoringRubric}
2. Extracts quality assessment criteria
3. Returns only the quality scoring framework to parent

**Subprocess returns:**
- Peer review status scoring (40% weight)
- Journal tier assessment (35% weight)
- Citation metrics evaluation (25% weight)
- Scoring thresholds per criteria"

**Fallback if file doesn't exist or subprocess unavailable:**

Use standard academic quality criteria:
- **Peer Review Status (40%):**
  - Peer-reviewed journal: 100%
  - Conference proceedings (peer-reviewed): 80%
  - Preprint/working paper: 50%
  - Gray literature: 30%
- **Journal Tier (35%):**
  - Tier 1 (top journals in field): 100%
  - Tier 2 (established journals): 75%
  - Tier 3 (emerging journals): 50%
  - Unknown/not applicable: 40%
- **Citation Metrics (25%):**
  - Highly cited (>100 citations): 100%
  - Moderately cited (20-100): 75%
  - Low citations (<20): 50%
  - Too recent to assess: 60%

### 3. Prepare Scoring Instructions

For each source, calculate TWO independent scores:

**Relevancy Score (0-100%):**

Assess how well the source matches the specific research topic:
- **Title match (30%):** Does title directly address topic?
- **Abstract alignment (40%):** Does abstract discuss core topic concepts?
- **Keyword overlap (20%):** Do key terms appear in abstract?
- **Scope fit (10%):** Is scope appropriate (not too broad/narrow)?

**Quality Score (0-100%):**

Assess academic rigor using loaded framework:
- **Peer review status (40%):** Apply rubric weights
- **Journal tier (35%):** Classify based on field recognition
- **Citation metrics (25%):** Apply rubric thresholds

### 4. Launch Parallel Scoring Sub-Agents

**SUBPROCESS OPTIMIZATION (Patterns 2 + 4):**

For optimal performance, launch parallel sub-agents (one per source).

"**DO NOT BE LAZY - For EACH source, launch a sub-agent that:**

1. Receives: source details, topic, researchQuestion, quality rubric
2. Calculates: relevancy % AND quality % independently
3. Returns: structured scoring result to parent for aggregation

**Sub-Agent Return Format (per source):**
```json
{
  "sourceId": "source-{N}",
  "title": "Source Title",
  "relevancyScore": 87,
  "relevancyBreakdown": {
    "titleMatch": 90,
    "abstractAlignment": 85,
    "keywordOverlap": 88,
    "scopeFit": 85
  },
  "qualityScore": 92,
  "qualityBreakdown": {
    "peerReviewStatus": 100,
    "journalTier": 85,
    "citationMetrics": 90
  },
  "justification": "High relevancy due to direct topic match in title and abstract. Excellent quality with peer-reviewed Tier 1 journal and strong citation record."
}
```"

**Parallel Execution:**

"**Launching {totalSourcesFound} parallel scoring sub-agents...**

🔹 Scoring source 1...
🔹 Scoring source 2...
🔹 Scoring source 3...
...

**Progress updates will stream as each completes.**"

**FALLBACK (if sub-agents unavailable):**

Score sources sequentially in main thread:
- Score source 1 → calculate relevancy % + quality %
- Score source 2 → calculate relevancy % + quality %
- Continue for all sources

### 5. Aggregate Scoring Results

As each sub-agent completes, stream results to user:

"✅ Source 1: Relevancy 87%, Quality 92%
✅ Source 2: Relevancy 92%, Quality 78%
✅ Source 3: Relevancy 76%, Quality 85%
...

**All sources scored!**"

### 6. Rank Sources by Relevancy

**CRITICAL:** Rank sources by RELEVANCY % (highest to lowest).

Quality % is informational only - students may prefer high-quality but lower-relevancy sources for background.

**Ranking Logic:**
1. Sort all sources by relevancyScore descending
2. Assign rank: 1 (most relevant) to N (least relevant)
3. Preserve quality scores as separate metadata

Display ranking summary:

"**Ranking complete:**
- Top source: {title} (Relevancy: {X}%, Quality: {Y}%)
- Lowest source: {title} (Relevancy: {X}%, Quality: {Y}%)

Sources are now ranked from most to least relevant to your topic."

### 7. Update Document with Scores and Rankings

Rewrite {outputFile} Search Results section with scored and ranked sources:

```markdown
## Search Results

**Total Sources Found:** {totalSourcesFound}
**Databases Searched:** {list}
**Search Timestamp:** {timestamp}
**Scoring Timestamp:** {current_timestamp}

---

### Ranked Sources (by Relevancy)

**Ranking:** Sources ordered from most to least relevant to your topic.
**Dual Scores:** Each source has Relevancy % (topic match) and Quality % (academic rigor).

---

{For each source in relevancy rank order:}

#### Source {rank}: {Title}

- **Relevancy Score:** {relevancyScore}% ⭐
- **Quality Score:** {qualityScore}%
- **Authors:** {Authors}
- **Year:** {Year}
- **Database:** {Database}
- **Abstract:** {Abstract in original language}
- **Access:** [Link]({accessLink})

**Scoring Breakdown:**
- Title Match: {titleMatch}% | Abstract Alignment: {abstractAlignment}% | Keyword Overlap: {keywordOverlap}% | Scope Fit: {scopeFit}%
- Peer Review: {peerReviewStatus}% | Journal Tier: {journalTier}% | Citations: {citationMetrics}%

**Justification:** {1-2 sentence explanation of scores}

---

{Repeat for all sources in rank order}

```

**Preserve original language abstracts.**

### 8. Update Frontmatter

Update {outputFile} frontmatter:

```yaml
---
stepsCompleted: ['step-01-init', 'step-02-handoff-confirmation', 'step-03-parallel-search', 'step-04-score-and-rank']
lastStep: 'step-04-score-and-rank'
lastContinued: '{current_date}'
# ... rest of frontmatter unchanged
---
```

### 9. Present Menu Options

Display the menu:

"**Dual Scoring Complete!** ✅

**Summary:**
- {totalSourcesFound} sources scored and ranked
- Relevancy range: {min}% - {max}%
- Quality range: {min}% - {max}%

**Top 3 Sources (by relevancy):**
1. {title} - Relevancy: {X}%, Quality: {Y}%
2. {title} - Relevancy: {X}%, Quality: {Y}%
3. {title} - Relevancy: {X}%, Quality: {Y}%

**Next:** I'll check if we've met the threshold (≥8 sources) and present the full results for your review.

**Select an Option:**
- **[A]** Advanced Elicitation - Deep dive into quality scoring methodology
- **[P]** Party Mode - Explore alternative scoring perspectives
- **[C]** Continue - Proceed to threshold analysis and results presentation

Your choice?"

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} with quality scoring validation focus, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow} with scoring methodology discussion focus, and when finished redisplay the menu
- IF C: Save content to {outputFile}, update frontmatter stepsCompleted array, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#9-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All sources scored with BOTH relevancy % and quality %
- Scores calculated independently using defined criteria
- Sources ranked by relevancy (highest to lowest)
- Quality scores preserved as separate metadata
- Scoring breakdown displayed for transparency
- Justifications provided for each source
- Document updated with ranked sources
- Advanced Elicitation offered for quality validation

### ❌ SYSTEM FAILURE:

- Ranking by quality instead of relevancy
- Missing either relevancy % or quality %
- Not using parallel scoring when sub-agents available
- Skipping scoring breakdown or justifications
- Not preserving original language abstracts
- Proceeding without offering Advanced Elicitation
- Combining relevancy and quality into single score

**Master Rule:** This is a dual scoring step - two independent percentages (relevancy + quality), always rank by relevancy, preserve quality as informational metadata.

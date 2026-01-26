---
name: 'step-03-parallel-search'
description: 'Execute parallel database searches across 5 academic databases using sub-agents'

outputFile: '{output_folder}/source-validation-{topic_slug}.md'
nextStepFile: './step-04-score-and-rank.md'
searchStrategiesData: './data/database-search-strategies.md'
---

# Step 3: Parallel Database Search

## STEP GOAL:

To search 5 academic databases in parallel using specialized sub-agents, streaming raw results incrementally to build the initial source list (scoring happens in step-04).

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

- 🎯 Focus only on executing searches and collecting raw results
- 🚫 FORBIDDEN to score or rank sources yet - that's step-04's job
- 💬 Approach: Autonomous execution with progress updates
- 🔍 Use subprocess optimization (Pattern 4: Parallel Execution) when available
- ⚙️ If subprocesses unavailable, perform sequential searches in main thread

## EXECUTION PROTOCOLS:

- 🎯 Launch 5 parallel sub-agents (one per database)
- 💾 Stream results incrementally as each sub-agent completes
- 📖 Write raw results to Search Results section (NO SCORING YET)
- 🚫 No user interaction needed - autonomous search execution

## CONTEXT BOUNDARIES:

- Available: topic, searchParameters from frontmatter, search strategies data file
- Focus: Database search execution and raw result collection
- Limits: Don't calculate scores - step-04 handles that
- Dependencies: Step-02 completed (search parameters confirmed)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Search Parameters

Read {outputFile} frontmatter to extract:

```yaml
topic: '{topic}'
researchQuestion: '{researchQuestion}'
searchParameters:
  dateRange: '{dateRange}'
  languages: [{languages}]
  excludedKeywords: [{excludedKeywords}]
```

Display brief confirmation:

"**Starting database searches...** 🔍

**Topic:** {topic}
**Date Range:** {dateRange}
**Languages:** {languages}
**Databases:** JSTOR, SciELO, CAPES Periódicos, Web of Science, Google Scholar

Searching in parallel..."

### 2. Load Search Strategies (Optional)

**IF {searchStrategiesData} exists:**

Use subprocess optimization (Pattern 3) to load relevant strategies:

"Launch a subprocess that:
1. Loads {searchStrategiesData}
2. Extracts strategies relevant to topic domain
3. Returns only applicable search techniques to parent

**Subprocess returns:**
- Boolean operators for this topic
- Recommended filters per database
- Common pitfalls to avoid"

**Fallback if file doesn't exist or subprocess unavailable:**
- Use general academic search best practices
- Boolean AND for key terms, OR for synonyms
- Date range filters from searchParameters

### 3. Prepare Search Queries

Build search query for each database:

**Core Query Construction:**
- Extract 3-5 key terms from topic
- Apply Boolean operators (AND between key concepts, OR for synonyms)
- Add date range filter: {dateRange}
- Add language filter: {languages}
- Add exclusions: NOT {excludedKeywords} (if any)

**Database-Specific Adjustments:**
- **JSTOR:** Use advanced search, peer-reviewed filter
- **SciELO:** Prioritize Portuguese/Spanish content if languages include pt
- **CAPES Periódicos:** Use institutional search patterns
- **Web of Science:** Apply citation metrics availability
- **Google Scholar:** Limit to first 20 results, academic sources only

### 4. Launch Parallel Sub-Agents

**SUBPROCESS OPTIMIZATION (Pattern 4):**

Launch 5 sub-agents in parallel. Each sub-agent:

1. Receives: database name, search query, search parameters
2. Executes: database search independently
3. Returns: raw source list to parent (up to 10 sources per database)

**Sub-Agent Return Format (per database):**
```json
{
  "database": "JSTOR",
  "searchQuery": "{actual query used}",
  "resultsFound": 8,
  "sources": [
    {
      "title": "Source Title",
      "authors": ["Author1", "Author2"],
      "year": 2023,
      "abstract": "Original language abstract...",
      "accessLink": "https://...",
      "database": "JSTOR"
    },
    ...
  ],
  "searchTimestamp": "2026-01-25T14:30:00Z",
  "status": "success" // or "timeout" or "no_results" or "error"
}
```

**Parallel Execution:**

"**Launching 5 parallel sub-agents:**

🔹 Sub-agent 1: Searching JSTOR...
🔹 Sub-agent 2: Searching SciELO...
🔹 Sub-agent 3: Searching CAPES Periódicos...
🔹 Sub-agent 4: Searching Web of Science...
🔹 Sub-agent 5: Searching Google Scholar...

**Progress updates will stream as each completes.**"

**FALLBACK (if sub-agents unavailable):**

Execute searches sequentially in main thread:
- Search JSTOR → collect results
- Search SciELO → collect results
- Search CAPES → collect results
- Search Web of Science → collect results
- Search Google Scholar → collect results

### 5. Stream Results Incrementally

As each sub-agent completes, stream results to user:

**Per database completion:**

"✅ **JSTOR** - Found 8 sources (3.2s)
✅ **SciELO** - Found 6 sources (2.8s)
✅ **Web of Science** - Found 7 sources (4.1s)
⚠️ **CAPES Periódicos** - Connection timeout, retrying...
✅ **CAPES Periódicos** - Found 5 sources (6.3s - retry successful)
✅ **Google Scholar** - Found 10 sources (2.5s)

**Total Sources Found:** 36 sources across 5 databases"

**Error Handling:**

- **Timeout (after retry):** Note database as "unavailable", continue with others
- **No Results:** Note "0 sources found", continue with others
- **Access Error:** Note "access restricted", provide guidance on institutional access

### 6. Aggregate and Write Raw Results

Combine all sub-agent results into single source list.

**Write to {outputFile} Search Results section:**

```markdown
## Search Results

**Total Sources Found:** {totalSourcesFound}
**Databases Searched:** {list of databases}
**Search Timestamp:** {timestamp}

---

### Raw Sources (Unscored)

**Note:** Relevancy % and Quality % will be calculated in the next step.

{For each source, incrementally as databases complete:}

#### Source {N}: {Title}

- **Authors:** {Authors}
- **Year:** {Year}
- **Database:** {Database}
- **Abstract:** {Abstract in original language}
- **Access:** [Link]({accessLink})
- **Relevancy Score:** ⏳ Pending
- **Quality Score:** ⏳ Pending

---

{Repeat for all sources}

```

**Preserve original language abstracts** - do not translate.

**Incremental Writing Pattern:**
- Write source #1-8 as JSTOR completes
- Append source #9-14 as SciELO completes
- Append source #15-21 as Web of Science completes
- Continue pattern for remaining databases

### 7. Update Frontmatter

Update {outputFile} frontmatter:

```yaml
---
stepsCompleted: ['step-01-init', 'step-02-handoff-confirmation', 'step-03-parallel-search']
lastStep: 'step-03-parallel-search'
lastContinued: '{current_date}'
totalSourcesFound: {count}
databasesSearched: ['JSTOR', 'SciELO', 'CAPES', 'WebOfScience', 'GoogleScholar']
# ... rest of frontmatter unchanged
---
```

### 8. Display Summary

Present search completion summary:

"**Database Search Complete** ✅

**Results:**
- JSTOR: 8 sources
- SciELO: 6 sources
- CAPES Periódicos: 5 sources
- Web of Science: 7 sources
- Google Scholar: 10 sources

**Total: {totalSourcesFound} sources collected**

**Next:** I'll calculate relevancy % and quality % for each source, then rank them.

All sources are currently unscored (marked as ⏳ Pending). Scoring happens in the next step using our dual scoring system:
- **Relevancy %**: How well the source matches your specific topic
- **Quality %**: Peer review status, journal tier, citation metrics

**Select:**
- **[C]** Continue to scoring and ranking

Your choice?"

#### Menu Handling Logic:

- IF C: Save content to {outputFile}, update frontmatter stepsCompleted array, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#8-display-summary)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All 5 databases searched (parallel or sequential)
- Raw results written to Search Results section incrementally
- Sources include: title, authors, year, database, abstract, access link
- totalSourcesFound updated in frontmatter
- NO SCORING PERFORMED (scores marked as ⏳ Pending)
- User sees progress as searches complete
- Graceful handling of timeouts or access errors

### ❌ SYSTEM FAILURE:

- Attempting to score sources in this step (that's step-04)
- Not using parallel execution when sub-agents are available
- Loading all results at once instead of streaming
- Translating abstracts (preserve original language)
- Not updating frontmatter with search metadata
- Proceeding to next step without user confirmation

**Master Rule:** This is a search execution step - collect raw results, stream incrementally, don't score yet. Scoring is step-04's job.

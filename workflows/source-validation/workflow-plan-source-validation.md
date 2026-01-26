---
stepsCompleted: ['step-01-discovery', 'step-02-classification', 'step-03-requirements', 'step-04-tools', 'step-05-plan-review', 'step-06-design', 'step-07-foundation', 'step-08-build-step-01', 'step-09-build-step-02', 'step-09-build-step-03', 'step-09-build-step-04']
created: 2026-01-25
status: STEP_04_COMPLETE
approvedDate: 2026-01-25
designCompleted: 2026-01-25
foundationCompleted: 2026-01-25
step01Completed: 2026-01-25
step02Completed: 2026-01-25
step03Completed: 2026-01-25
step04Completed: 2026-01-25
---

# Workflow Creation Plan: Source Validation

## Discovery Notes

**User's Vision:**
Patricia (Research Librarian) performs deep database validation of thesis topics that have been confirmed/narrowed by Dr. Carla. The workflow searches all 5 academic databases in parallel, returns ranked sources with dual scoring (relevancy + quality), allows student to select sources via checkboxes, and enables iterative refinement. If insufficient sources are found (< 8), Patricia warns the student and stays active while they discuss scope changes with Carla.

**Who It's For:**
- Primary: Brazilian MBA students working with Patricia (Research Librarian agent)
- Integration: Receives handoff from Dr. Carla's Topic Discovery workflow
- Follow-up: Can hand off to Patricia's Literature Review workflow

**What It Produces:**
A curated list of academic sources (10-15 initially) with:
- Relevancy percentage (0-100% match to topic)
- Quality percentage (0-100% based on peer review, journal tier, citations)
- Summary in original language
- Access link
Student selects sources via checkboxes for inclusion in literature review.

**Key Insights:**

**Entry Point:**
- Receives validated/narrowed topic from Dr. Carla (after Carla confirms with student)
- This is Patricia's CORE workflow (not the Passive Realism Check sub-workflow)

**Database Search:**
- Searches all 5 databases in parallel: JSTOR, SciELO, CAPES Periódicos, Web of Science, Google Scholar
- Returns 10-15 sources based on confidence
- Minimum threshold: 8 sources required

**Dual Scoring System:**
- **Relevancy %**: 0-100% how well source matches topic
- **Quality %**: 0-100% based on peer review status, journal tier, citation metrics

**Source Presentation:**
- Summary in original language (EN/PT/etc.)
- Access link for full text
- Ranked by relevancy (most to least)

**Threshold Warning:**
- If < 8 sources found → ⚠️ Warning: "May need to change topic scope"
- Patricia stays active (doesn't end workflow)
- Student + Carla discuss scope changes
- Can refine search based on new scope

**Iterative Refinement Loop:**
- Student can request: "more sources" or "narrower focus"
- Can happen in same session OR student can return later
- If refinements suggest topic is changing → context flows back to Carla's workflow

**Selection Mechanism:**
- Student selects sources via checkboxes
- Selected sources = candidates for literature review

**Exit/Handoff:**
- Workflow ends with offer to launch Literature Review workflow
- Passes selected sources to Literature Review

**NOT This Workflow:**
- Passive Realism Check (background validation during Carla conversation) = separate sub-workflow, documented for future build
- Literature Review (full 20-30 source research) = separate workflow that follows Source Validation

**Integration Points:**
- **FROM:** Dr. Carla's Topic Discovery workflow (receives confirmed topic)
- **TO:** Dr. Carla's workflow (if refinements suggest topic change)
- **TO:** Patricia's Literature Review workflow (handoff after source selection)

**Module Context:**
- Part of TAC (Thesis Advisory Companion) module
- Patricia agent's primary validation workflow
- Complements Dr. Carla's Topic Discovery and Patricia's Literature Review

---

## Classification Decisions

**Workflow Name:** source-validation
**Target Path:** `C:\Users\kbuen\_bmad\tac\workflows\source-validation\`

**4 Key Decisions:**

1. **Document Output:** `true`
   - Produces a curated source list document with ranked sources
   - Includes: relevancy %, quality %, summaries, access links, checkboxes
   - Uses semi-structured template with clear section breaks

2. **Module Affiliation:** `tac` (Thesis Advisory Companion)
   - Part of TAC module ecosystem
   - Stored in TAC workflows directory
   - Access to TAC module variables
   - Integrates with Dr. Carla and Literature Review workflows

3. **Session Type:** `continuable`
   - Can span multiple sessions (students pause and resume)
   - Database searches may take time (5 databases in parallel)
   - Incremental results display (stream as each database completes)
   - Token consumption warning at 5% of allowance threshold
   - Needs `step-01b-continue.md` for resumption support
   - Uses `stepsCompleted` tracking in output document frontmatter

4. **Lifecycle Support:** `tri-modal` (Create + Edit + Validate)
   - Full workflow lifecycle support
   - Can be modified after creation (Edit mode)
   - Can be validated for quality (Validate mode)
   - Appropriate for maintained, production-grade workflows
   - Consistent with TAC module quality standards

**Structure Implications:**

**Required Folders:**
```
source-validation/
├── workflow.md              # Entry point with frontmatter
├── data/                    # Shared reference data (all modes)
├── steps-c/                 # Create mode steps
│   ├── step-01-init.md      # Initialization with continuation detection
│   ├── step-01b-continue.md # Resumption logic
│   └── step-XX-*.md         # Other create steps
├── steps-e/                 # Edit mode steps
└── steps-v/                 # Validate mode steps
```

**Required Features:**
- Continuation support (step-01-init detects prior session, routes to step-01b-continue)
- `stepsCompleted` array tracking in output document frontmatter
- Incremental results streaming (update document as each database completes)
- Token consumption monitoring (warn at 5% threshold)
- Semi-structured document template with clear section breaks
- Integration handoff points (from Dr. Carla, to Dr. Carla, to Literature Review)
- Checkbox selection mechanism for source curation

**Output Document Structure:**
```yaml
---
stepsCompleted: ['step-01-init', 'step-02-search', ...]
lastStep: 'step-XX-current'
lastContinued: '2026-01-25'
topic: '[Validated topic from Dr. Carla]'
totalSourcesFound: 12
selectedSources: []
---

# Source Validation Results: [Topic]

[Content appended progressively by each step]
```

---

## Requirements

### Flow Structure

**Pattern:** Linear with Refinement Loop

**Flow:**
1. Initialization (detect continuation if returning)
2. Confirm topic and search parameters from Dr. Carla handoff
3. Execute parallel database searches (5 databases: JSTOR, SciELO, CAPES Periódicos, Web of Science, Google Scholar)
4. Stream results incrementally as each database completes
5. Apply dual scoring (relevancy % + quality %)
6. Rank sources by relevancy
7. Present threshold analysis (≥8 sources = proceed, <8 = warning)
8. **Refinement Loop:**
   - Student reviews sources
   - Student can request: "more sources" OR "narrower focus" OR "broader scope"
   - If refinements suggest topic change → offer to return context to Dr. Carla
   - Re-execute searches with refined parameters
   - Loop until student satisfied OR returns to Dr. Carla
9. Source selection via checkboxes
10. Handoff offer to Literature Review workflow

**Branching Points:**
- Threshold check: <8 sources triggers warning + refinement offer
- Refinement loop: student can iterate multiple times
- Topic change detection: offer return to Dr. Carla workflow
- Exit: Literature Review handoff OR standalone completion

### User Interaction Style

**Overall Style:** Mixed (Autonomous + Collaborative)

**Autonomous Phases:**
- Database searches execute in parallel without user intervention
- Dual scoring calculation automatic
- Threshold analysis automatic
- Incremental results streaming automatic

**Collaborative Phases:**
- Topic/parameter confirmation (beginning)
- Source review and feedback (refinement loop)
- Source selection via checkboxes (selection phase)
- Literature Review handoff decision (exit)

**Decision Points:**
- Confirm search parameters before executing
- Acknowledge threshold warning (if <8 sources)
- Choose refinement direction (more/narrower/broader)
- Select sources via checkboxes
- Accept Literature Review handoff offer

**Interaction Tone:**
- Educational (Patricia teaches database strategies while executing)
- Efficient (respects student time constraints)
- Honest (realistic about source availability)
- Supportive (guides through refinement iterations)

### Input Requirements

**Prerequisites:**
- Topic validated through Dr. Carla's Topic Discovery workflow first
- Student has discussed and confirmed topic with Dr. Carla

**Required Inputs:**
- **Validated Topic:** Confirmed topic from Dr. Carla handoff (string, concise statement)
- **Research Question:** Specific question student aims to answer (string, 1-2 sentences)

**Optional Inputs:**
- **Institutional Database Credentials:** Access credentials for JSTOR, Web of Science, CAPES Periódicos (optional - web search still helpful without)
- **Language Preferences:** Preferred source languages (default: English + Portuguese, can specify others)
- **Date Range:** Publication date constraints (default: last 10 years, can adjust)
- **Excluded Keywords:** Terms to exclude from search (array of strings)
- **Prior Search History:** If continuing from previous session (loaded from document frontmatter)

**Input Validation:**
- Topic must be non-empty string
- Research question must be non-empty string
- Date range must be valid (start < end, not future dates)
- Language preferences must be valid ISO codes

**Input Sources:**
- Dr. Carla handoff data (topic, research question)
- Student direct input (refinements, preferences)
- Prior session document (if continuing)
- Patricia sidecar memory (database credentials if saved)

### Output Specifications

**Output Format:** Semi-Structured Document

**Document Type:** Progressive content building with section breaks

**Required Sections:**

1. **Search Parameters**
   - Topic statement
   - Research question
   - Databases searched
   - Search terms used
   - Filters applied (date range, language, etc.)
   - Timestamp

2. **Search Results**
   - Source list (10-15 sources, or fewer with warning)
   - Per source:
     - Title
     - Author(s)
     - Publication year
     - Journal/Source
     - **Relevancy %** (0-100%): How well source matches topic
     - **Quality %** (0-100%): Based on peer review, journal tier, citations
     - Summary (in original language: EN/PT/etc.)
     - Access link
     - Checkbox for selection [ ]

3. **Threshold Analysis**
   - Total sources found: X
   - Threshold status: ✅ Met (≥8) OR ⚠️ Warning (<8)
   - If warning: recommendation to refine scope or return to Dr. Carla

4. **Selected Sources**
   - Checkboxes marked by student
   - Count of selected sources
   - Ready for Literature Review handoff

5. **Refinement History**
   - Log of refinement iterations
   - Per iteration: date, refinement request, new search parameters, results count

**Optional Sections:**

6. **Database Breakdown**
   - Sources found per database
   - JSTOR: X sources
   - SciELO: X sources
   - CAPES Periódicos: X sources
   - Web of Science: X sources
   - Google Scholar: X sources

7. **Quality Distribution**
   - High quality (80-100%): X sources
   - Medium quality (60-79%): X sources
   - Lower quality (40-59%): X sources
   - (Note: Sources <40% not returned)

8. **Next Steps**
   - Recommendation: Launch Literature Review workflow
   - OR: Return to Dr. Carla for topic adjustment
   - OR: Continue refining (if <8 sources)

**Formatting Rules:**
- Clear section headers with markdown (##)
- Ranked list (most to least relevant)
- Checkboxes rendered as [ ] for empty, [x] for selected
- Percentages displayed as "85%" format
- Summaries preserve original language (don't translate in source list)
- Access links as clickable markdown hyperlinks

**Document Frontmatter:**
```yaml
---
stepsCompleted: ['step-01-init', 'step-02-search', ...]
lastStep: 'step-XX-current'
lastContinued: '2026-01-25'
topic: '[Validated topic from Dr. Carla]'
researchQuestion: '[Student research question]'
totalSourcesFound: 12
selectedSources: []
refinementCount: 0
thresholdStatus: 'met' # or 'warning'
---
```

### Success Criteria

**Minimum Success:**
- Student has selected sources (checkboxes marked) OR acknowledged threshold warning
- Minimum threshold addressed (≥8 sources found OR <8 with warning and refinement attempted)
- All sources have dual scoring (relevancy % + quality %)
- Student satisfied with quality and relevance OR elected to return to Dr. Carla

**Quality Criteria:**
- All available databases searched (or all 5 if institutional access provided)
- Sources ranked accurately by relevancy (highest to lowest)
- Summaries in original language provided
- Access links valid and clickable
- Student made informed selection based on relevancy/quality scores

**Integration Criteria:**
- Clean handoff from Dr. Carla (topic + research question received)
- Context available to flow back to Dr. Carla if refinements suggest topic change
- Clean handoff to Literature Review (selected sources passed)

**Completion States:**
- **Ready for Literature Review:** ≥8 sources, student selected sources, accepted handoff
- **Returned to Dr. Carla:** Refinements suggested topic scope needs adjustment
- **Paused for Continuation:** Student saved progress, can resume later (continuable workflow)

### Instruction Style

**Style:** Intent-Based

**Rationale:**
- Iterative refinement loop requires adaptive conversation (student requests vary: "more sources," "narrower focus," "explain this methodology")
- Patricia needs to respond flexibly to search results (10-15 sources vs <8 threshold warning scenarios)
- Collaborative selection phase benefits from natural dialogue (student questions, clarifications)
- Integration handoffs (to/from Dr. Carla, to Literature Review) require context-aware transitions
- Edge case handling (insufficient sources, scope changes, database timeouts) demands adaptive responses
- Educational approach ("teaching while doing") needs conversational flexibility

**Step Behavior:**
- Steps describe goals, principles, and success criteria
- AI adapts conversation naturally to student responses
- Flexible and responsive to varying student needs
- Example: "Guide student to refine search based on results quality" vs "Ask: Do you want A) More sources B) Narrower scope C) Broader scope"

**Why Not Prescriptive:**
- Prescriptive would be too rigid for iterative refinement conversations
- Student requests are unpredictable ("Can you explain this paper?" vs "Find more on agile in healthcare")
- Patricia's educational role (explaining database strategies) needs natural language flow

---

## Tools Configuration

### Core BMAD Tools

**Party Mode:** EXCLUDED
- Rationale: Workflow is procedural (search → score → present → refine), not open-ended creative exploration
- Party Mode works best for unstructured brainstorming, not linear database searches

**Advanced Elicitation:** INCLUDED
- Integration points:
  - **Phase 3 (Scoring):** Critically evaluate source quality from multiple perspectives (peer review status, journal tier assessment, citation metric analysis)
  - **Phase 5 (Refinement Loop):** Deep exploration of student's refinement needs when requests are unclear or complex
- Use case: Ensure quality scoring is rigorous and refinement requests are fully understood

**Brainstorming:** INCLUDED
- Integration points:
  - **Phase 5 (Refinement Loop):** Generate alternative search strategies when student is stuck or initial searches yield insufficient results
  - **Phase 4 (Threshold Analysis):** If <8 sources found, brainstorm scope adjustments before warning student
- Use case: Creative problem-solving for search strategy optimization

### LLM Features

**Web-Browsing:** INCLUDED (Essential)
- Integration points:
  - **Phase 2 (Database Search):** Access Google Scholar, SciELO, and institutional databases (JSTOR, CAPES Periódicos, Web of Science)
  - **Phase 3 (Scoring):** Validate journal tiers, check citation counts, verify peer review status
  - **Phase 5 (Refinement Loop):** Re-execute searches with refined parameters
- Use case: Critical for database access and real-time quality validation
- Note: Currently using web-browsing for database access; future enhancement with Academic Database Connector MCP

**File I/O:** INCLUDED (Essential)
- Integration points:
  - **Phase 1 (Initialization):** Read Patricia sidecar (memories.md for search history, database credentials if saved)
  - **Phase 1-7 (Progressive Building):** Write and update output document incrementally
  - **Phase 2 (Streaming Results):** Update document as each database completes search
  - **Phase 7 (Document Creation):** Finalize and polish output document
- Use case: Document creation, sidecar memory access, incremental results streaming

**Sub-Agents:** INCLUDED
- Integration points:
  - **Phase 2 (Parallel Database Search):** Spawn 5 specialized search agents (one per database: JSTOR, SciELO, CAPES, Web of Science, Google Scholar)
  - **Phase 3 (Scoring):** Delegate scoring calculations to specialized sub-agents (relevancy scorer, quality scorer)
- Use case: True parallel execution of database searches, modular task delegation for scoring
- Performance benefit: Significant speed improvement vs sequential searches

**Sub-Processes:** EXCLUDED
- Rationale: Sub-agents are sufficient for parallel database searches (lighter-weight, integrated task delegation)
- Sub-processes are heavier and designed for completely independent workflows
- This workflow needs coordinated searches that report back - sub-agents handle this better

### Memory and State Management

**Type:** Continuable (multi-session over months)

**Memory Systems:**

1. **Output Document Frontmatter** - Persistent state tracking:
   ```yaml
   ---
   stepsCompleted: ['step-01-init', 'step-02-search', ...]
   lastStep: 'step-XX-current'
   lastContinued: '2026-01-25'
   topic: '[Validated topic from Dr. Carla]'
   researchQuestion: '[Student research question]'
   totalSourcesFound: 12
   selectedSources: []
   refinementCount: 0
   thresholdStatus: 'met' # or 'warning'
   databasesSearched: ['JSTOR', 'SciELO', 'CAPES', 'WebOfScience', 'GoogleScholar']
   ---
   ```

2. **Patricia Sidecar (memories.md)** - Long-term memory:
   - Search history across all sessions (topics searched, strategies used, results quality)
   - Database credentials (if student saves for future sessions)
   - Student preferences learned over time (language preferences, date range defaults, excluded keywords)
   - Integration: Read in Phase 1, update throughout workflow

3. **Resumption Logic (step-01b-continue.md):**
   - Detects prior session by checking output document existence
   - Loads state from frontmatter
   - Resumes from `lastStep` tracker
   - Presents summary: "You were last working on [topic], found [X] sources, last session [date]"

**Persistence Strategy:**
- Students can pause for weeks/months and resume exactly where they left off
- All search results, refinement history, and selections preserved
- Token consumption tracking resets per session but cumulative warning if approaching limits

### External Integrations

**Academic Database Connector (MCP):** FUTURE SCOPE
- Purpose: Direct API access to institutional databases (JSTOR, CAPES Periódicos, Web of Science) with authentication
- Current approach: Use Web-Browsing for database access (simpler, no installation required)
- Future enhancement: Build custom MCP server when USP library access secured
- Status: Documented for future build, not blocking initial workflow creation

**No other external integrations required.**

### Installation Requirements

**Tools Requiring Installation:**
- None (all selected tools are built-in BMAD features or core workflows)

**Future Installation (when ready):**
- Academic Database Connector MCP (when USP library access secured)

**User Preference:**
- Initial build uses web-browsing (no installation)
- Future enhancement with MCP when library access available

---

## Workflow Structure Preview (Updated)

**Phase 1: Initialization & Handoff**
- Detect if continuing from prior session (route to step-01b-continue if yes)
- Receive validated topic + research question from Dr. Carla handoff
- Confirm search parameters with student (date range, language preferences, excluded keywords)
- Check for institutional database credentials (optional - load from Patricia sidecar if saved)
- Initialize output document with frontmatter tracking

**Phase 2: Parallel Database Search** (Sub-Agents)
- Spawn 5 specialized search sub-agents (one per database)
- Execute searches simultaneously:
  - JSTOR (if institutional access)
  - SciELO (public access)
  - CAPES Periódicos (if institutional access)
  - Web of Science (if institutional access)
  - Google Scholar (public access)
- Stream results incrementally to document as each sub-agent completes
- Monitor token consumption (warn at 5% threshold)

**Phase 3: Scoring & Ranking** (Sub-Agents, Advanced Elicitation)
- Delegate scoring to sub-agents:
  - Relevancy scorer: Calculate relevancy % (0-100%): topic match analysis
  - Quality scorer: Calculate quality % (0-100%): peer review status, journal tier, citation metrics
- Use Advanced Elicitation to critically evaluate quality scoring from multiple perspectives
- Rank sources by relevancy (highest to lowest)
- Generate summaries in original language
- Validate access links (Web-Browsing)

**Phase 4: Threshold Analysis & Results Presentation** (Brainstorming if needed)
- Count total sources found
- Check threshold: ≥8 sources = proceed, <8 = warning
- If <8: Use Brainstorming to generate scope adjustment strategies before warning student
- Present results with dual scoring
- Display Database Breakdown (optional section)
- Display Quality Distribution (optional section)

**Phase 5: Refinement Loop (Iterative)** (Advanced Elicitation, Brainstorming)
- Student reviews sources
- Student feedback: satisfied OR request refinement ("more sources," "narrower focus," "broader scope")
- If refinement requested:
  - Use Advanced Elicitation to deeply understand unclear/complex refinement requests
  - Use Brainstorming to generate alternative search strategies
  - Adjust search parameters based on feedback
  - Re-execute Phase 2-4 with new parameters (sub-agents, web-browsing)
  - Log refinement in history section (File I/O)
  - Detect if topic is changing → offer return to Dr. Carla
- Loop until student satisfied OR returns to Dr. Carla

**Phase 6: Source Selection**
- Student selects sources via checkboxes
- Update "Selected Sources" section (File I/O)
- Confirm selection count

**Phase 7: Completion & Document Creation** (File I/O)
- Finalize Source Validation document (polish formatting, ensure all sections complete)
- Write final output document (File I/O)
- Update Patricia sidecar with search history (File I/O)
- Offer Literature Review workflow handoff
- If accepted: pass selected sources + finalized document to Literature Review
- If declined: standalone completion with finalized document
- Update Next Steps section

---

## Workflow Design

### Step Sequence (Create Mode)

**9 Steps Total:**

1. **step-01-init.md** - Initialization (Continuable Init)
   - **Goal:** Check for existing session, initialize new workflow if none exists
   - **Type:** Init Step (Continuable) with continuation detection
   - **Menu:** Auto-proceed (no user choice)
   - **Routes to:** step-01b-continue (if existing) OR step-02-handoff-confirmation (if new)

2. **step-01b-continue.md** - Continuation Handler
   - **Goal:** Resume prior session, load state, route to appropriate step
   - **Type:** Continuation Step
   - **Menu:** Auto-proceed
   - **Routes to:** Last incomplete step based on `stepsCompleted`

3. **step-02-handoff-confirmation.md** - Receive & Confirm Handoff
   - **Goal:** Receive validated topic from Dr. Carla OR prompt standalone, confirm search parameters
   - **Type:** Middle Step (Standard) with input discovery
   - **Menu:** A/P/C
   - **Routes to:** step-03-parallel-search

4. **step-03-parallel-search.md** - Execute Parallel Database Searches
   - **Goal:** Spawn 5 sub-agents, search databases simultaneously, stream results incrementally
   - **Type:** Middle Step (Complex) - heavy sub-agent use, subprocess optimization
   - **Menu:** C-only (proceed when ready)
   - **Routes to:** step-04-score-and-rank

5. **step-04-score-and-rank.md** - Apply Dual Scoring & Ranking
   - **Goal:** Calculate relevancy % + quality %, rank sources by relevancy
   - **Type:** Middle Step (Complex) - sub-agents + Advanced Elicitation
   - **Menu:** A/P/C
   - **Routes to:** step-05-threshold-analysis

6. **step-05-threshold-analysis.md** - Threshold Check & Presentation
   - **Goal:** Check if ≥8 sources, present results, use Brainstorming if needed
   - **Type:** Middle Step (Standard)
   - **Menu:** A/P/C
   - **Routes to:** step-06-refinement-loop

7. **step-06-refinement-loop.md** - Iterative Refinement
   - **Goal:** Handle refinement requests, detect topic changes, support custom sources, loop back if needed
   - **Type:** Branch Step with loop-back capability
   - **Menu:** Custom [R/A/S/C] + A/P options
   - **Routes to:**
     - step-03-parallel-search (if [R]efine - LOOP BACK)
     - step-06 itself (if [A]dd custom - return to menu)
     - step-07-source-selection (if [S]atisfied)
     - Dr. Carla workflow (if [C]arla - pause Patricia)

8. **step-07-source-selection.md** - Student Selects Sources
   - **Goal:** Student marks checkboxes, confirm selection count
   - **Type:** Middle Step (Simple)
   - **Menu:** C-only
   - **Routes to:** step-08-finalize-and-handoff

9. **step-08-finalize-and-handoff.md** - Document Creation & Handoff
   - **Goal:** Finalize document, update sidecar, offer Literature Review handoff
   - **Type:** Final Step
   - **Menu:** Custom [L/D] (no A/P)
   - **Routes to:** Complete (no next step)

### Interaction Patterns

**Step 01 (Init):** Auto-proceed
- Detects continuation → routes to step-01b
- OR creates new → routes to step-02

**Step 01b (Continue):** Auto-proceed
- Loads state → routes to appropriate step

**Step 02 (Handoff Confirmation):** A/P/C menu
- Advanced Elicitation for topic clarification
- Party Mode for collaborative topic refinement

**Step 03 (Parallel Search):** C-only
- Autonomous sub-agent execution
- User proceeds when ready to see results

**Step 04 (Score & Rank):** A/P/C menu
- Advanced Elicitation CRITICAL for quality scoring validation
- Party Mode for collaborative assessment

**Step 05 (Threshold Analysis):** A/P/C menu
- Brainstorming for scope adjustments (if <8)
- Advanced Elicitation for warning evaluation

**Step 06 (Refinement Loop):** Custom menu [R/A/S/C] + A/P
- [R]efine → sub-menu: [M]ore / [N]arrower / [B]roader → loop to step-03
- [A]dd custom → sub-menu: [L]ink / [T]ext / [P]DF → return to step-06
- [S]atisfied → proceed to step-07
- [C]arla → launch Dr. Carla (standalone mode only)
- Advanced Elicitation for refinement understanding
- Party Mode for brainstorming strategies

**Step 07 (Source Selection):** C-only
- Simple checkbox marking
- Efficient execution

**Step 08 (Finalize & Handoff):** Custom menu [L/D]
- [L]iterature Review → launch handoff
- [D]one → standalone completion
- No A/P (final step)

### Data Flow

**Input (Step 02):**
- FROM Dr. Carla handoff: `topic`, `researchQuestion`, `studentId` (optional)
- FROM user (standalone): direct input of topic + research question
- FROM Patricia sidecar: database credentials (if saved)
- FROM user input: date range, language preferences, excluded keywords

**State Tracking (Throughout):**

Output document frontmatter:
```yaml
---
stepsCompleted: ['step-01-init', 'step-02-handoff-confirmation', ...]
lastStep: 'step-06-refinement-loop'
lastContinued: '2026-01-25'
workflowMode: 'handoff' # or 'standalone'
workflowStatus: 'in-progress' # or 'complete'
topic: '[Topic]'
researchQuestion: '[Question]'
totalSourcesFound: 12
customSourcesAdded: 2
selectedSources: ['source-1', 'source-3']
refinementCount: 1
thresholdStatus: 'met' # or 'warning'
databasesSearched: ['JSTOR', 'SciELO', 'CAPES', 'WebOfScience', 'GoogleScholar']
searchParameters:
  dateRange: '2015-2025'
  languages: ['en', 'pt']
  excludedKeywords: []
---
```

**Data Flow by Step:**
- **Step 03:** Sub-agents return raw results → write to document (incremental)
- **Step 04:** Sub-agents calculate scores → update document with relevancy% + quality%
- **Step 05:** Count sources → write threshold status to frontmatter + document
- **Step 06:** If refine → update searchParameters → loop to step-03
- **Step 06:** If add custom → score source → update totalSourcesFound → return to step-06
- **Step 07:** Student marks checkboxes → update selectedSources array
- **Step 08:** Write to Patricia sidecar → if Literature Review → pass selectedSources

**Checkpoints:**
- After each step: Update `stepsCompleted` array
- After steps 03-06: Incremental document updates
- After step-06 refinement: Update `refinementCount`
- After step-08: Mark workflow complete

**Error Handling:**
- **Token warning (step-03):** Pause, notify, save state, allow continuation
- **<8 sources (step-05):** Warning + brainstorm + if standalone offer Carla
- **Database timeout (step-03):** Log failed databases, continue with available results
- **No sources (step-05):** Critical warning, must refine OR launch Carla OR acknowledge risk
- **Invalid refinement (step-06):** Use Advanced Elicitation to clarify before proceeding

### File Structure

```
source-validation/
├── workflow.md                    # Entry point with frontmatter
├── data/                          # Shared reference data
│   ├── database-search-strategies.md    # Search techniques guide
│   ├── quality-scoring-rubric.md        # Quality assessment criteria
│   └── refinement-examples.md           # Example refinement strategies
├── templates/
│   └── source-validation-output.md      # Semi-structured template
├── steps-c/                       # Create mode steps
│   ├── step-01-init.md
│   ├── step-01b-continue.md
│   ├── step-02-handoff-confirmation.md
│   ├── step-03-parallel-search.md
│   ├── step-04-score-and-rank.md
│   ├── step-05-threshold-analysis.md
│   ├── step-06-refinement-loop.md
│   ├── step-07-source-selection.md
│   └── step-08-finalize-and-handoff.md
├── steps-e/                       # Edit mode steps (future)
│   └── [edit mode steps - to be designed]
└── steps-v/                       # Validate mode steps (future)
    └── [validate mode steps - to be designed]
```

**Data Files Purpose:**
- **database-search-strategies.md:** Patricia's educational content (teaching while doing)
- **quality-scoring-rubric.md:** Loaded by step-04 for consistent quality scoring
- **refinement-examples.md:** Loaded by step-06 for refinement strategy suggestions

**Template Purpose:**
- **source-validation-output.md:** Semi-structured template with section headers

### Role and Persona

**AI Role:** Research Librarian (Patricia from TAC module agent)

**Expertise:** Academic database search, source quality evaluation

**Character:**
- Database expert (JSTOR, SciELO, CAPES, Web of Science, Google Scholar)
- Honest to a fault (warns early if topic unsupportable)
- Invested in student success
- Remembers everything via sidecar memory

**Communication Style:**
- Professional + educational (teaches while executing)
- Time-efficient (respects working professionals)
- Warm but direct
- Accessible bilingual support (EN/BR-PT)

**Tone:**
- Supportive but realistic
- Educational during execution
- Encouraging during refinement
- Honest about limitations

**Collaborative vs Prescriptive:**
- **Autonomous:** Database searches, scoring (prescriptive execution)
- **Collaborative:** Topic confirmation, refinement strategies, selection (conversational)
- **Educational:** Explains "why" during execution (teaching moments)

### Validation and Error Handling

**Output Validation (Step-08):**
- Verify all required sections present
- Confirm all sources have dual scoring (relevancy% + quality%)
- Validate access links properly formatted
- Check selectedSources matches checkboxes

**Input Validation:**
- **Step-02:** Topic and research question non-empty
- **Step-03:** At least 1 database accessible
- **Step-06:** Refinement parameters actionable
- **Step-07:** At least 1 source selected

**Checkpoints:**
- **Step-02:** Confirm search parameters before executing
- **Step-05:** Acknowledge threshold warning if <8 sources
- **Step-06:** Confirm refinement strategy before re-executing
- **Step-08:** Final review offer before completing

**Error Recovery:**
- **Database timeout:** Continue with available, log failures
- **No sources:** Must refine OR Carla OR acknowledge
- **Token limit:** Pause, save state, resume later
- **Invalid refinement:** Use Advanced Elicitation to clarify

**Success Criteria:**
- Student selected sources (≥1) OR acknowledged warning
- Threshold addressed (≥8 OR <8 with attempt)
- All sources dual-scored
- Student satisfied OR returned to Carla OR launched Literature Review

### Special Features

**Conditional Logic:**

1. **Workflow Mode (Step-02):**
   - IF handoff data exists → Handoff Mode
   - ELSE → Standalone Mode
   - Stored: `workflowMode` in frontmatter

2. **Threshold Branch (Step-05):**
   - IF `totalSourcesFound >= 8` → Proceed normally
   - IF `< 8` → Warning + Brainstorming
   - IF `< 8` AND `standalone` → Add [C]arla option

3. **Refinement Loop (Step-06):**
   - IF [R]efine → Loop back to step-03
   - IF [A]dd custom → Custom source workflow → return to step-06
   - IF [S]atisfied → Proceed to step-07
   - IF [C]arla → Launch Dr. Carla, pause Patricia

4. **Handoff Decision (Step-08):**
   - IF [L]iterature Review → Launch with selectedSources
   - IF [D]one → Standalone completion

**Input Discovery (Step-02):**

Searches for Dr. Carla handoff:
- `{output_folder}/carla-handoff-*.md` (most recent)
- `{patricia_sidecar}/pending-requests.md` (validation queue)

**If Found (Handoff Mode):**
- Load topic, researchQuestion, studentId
- Set workflowMode: 'handoff'

**If Not Found (Standalone Mode):**
- Prompt user for topic + research question
- Set workflowMode: 'standalone'

**Workflow Chaining:**

**Upstream (FROM):**
- **Dr. Carla: Topic Discovery** → Patricia: Source Validation
  - Handoff: topic, research question, student context
  - Trigger: Dr. Carla Step 06 completes

**Downstream (TO):**
- **Patricia: Source Validation** → Dr. Carla: Topic Discovery (loop-back)
  - Handoff: current topic, search summary, refinement context
  - Trigger: Step 06 [C]arla selected (standalone + <8)

- **Patricia: Source Validation** → Patricia: Literature Review
  - Handoff: selectedSources with full details, topic, research question
  - Trigger: Step 08 [L]iterature Review selected
  - Creates: `{output_folder}/source-validation-complete-{topic-slug}.md`

**Subprocess Optimization:**

**Pattern 4 (Parallel Execution) - Step 03:**
- 5 parallel search sub-agents (one per database)
- Each returns: source list independently
- Main thread: aggregates and streams to document
- Fallback: Sequential searches if sub-agents unavailable

**Patterns 2, 3, 4 - Step 04:**
- Pattern 3: Load quality rubric via subprocess
- Pattern 2 + 4: Analyze sources in parallel via sub-agents
- Subprocess returns: quality framework
- Sub-agents return: relevancy% + quality% per source
- Fallback: Sequential scoring in main thread

**Pattern 3 - Step 06:**
- Load refinement examples via subprocess
- Subprocess returns: relevant strategy examples
- Fallback: Load examples in main thread

### Design Review Summary

**Complete Flow Verified:**

1. Start → step-01 (check existing) → step-01b (if resume) OR step-02 (if new)
2. Step-02 → check Carla handoff OR standalone → confirm parameters
3. Step-03 → spawn 5 parallel sub-agents → stream results
4. Step-04 → parallel scoring (relevancy + quality) → rank
5. Step-05 → threshold check → warning if <8 + brainstorm + Carla offer if standalone
6. Step-06 → refinement loop (CRITICAL BRANCH):
   - [R]efine → loop to step-03
   - [A]dd custom → score source → return to step-06
   - [S]atisfied → proceed to step-07
   - [C]arla → launch Dr. Carla, pause
7. Step-07 → checkbox selection → confirm count
8. Step-08 → finalize document → update sidecar → [L]iterature Review OR [D]one

**Requirements Coverage:**
- ✅ Linear flow with refinement loop
- ✅ 7 phases mapped to 9 steps
- ✅ Mixed interaction (autonomous + collaborative)
- ✅ Dual scoring (relevancy% + quality%)
- ✅ Threshold warning (<8 sources)
- ✅ Iterative refinement
- ✅ Custom source integration
- ✅ Checkbox selection
- ✅ Multi-session continuable
- ✅ Semi-structured output
- ✅ Intent-based instruction style
- ✅ Integration with Dr. Carla and Literature Review
- ✅ Subprocess optimization
- ✅ All tools configured

**Design Complete:** Ready for Step 07 (Foundation Build)

---

## Foundation Build Complete

**Date Completed:** 2026-01-25

**Created:**
- Folder structure at: `C:\Users\kbuen\_bmad-output\bmb-creations\workflows\source-validation\`
- workflow.md (entry point with tri-modal routing)
- templates/source-validation-output.md (semi-structured template)
- Folder structure:
  - data/ (for shared reference data)
  - templates/ (for output templates)
  - steps-c/ (Create mode steps - 9 files to build)
  - steps-e/ (Edit mode steps - future)
  - steps-v/ (Validate mode steps - future)

**Configuration:**
- Workflow name: source-validation
- Continuable: YES (multi-session over months)
- Document output: YES (semi-structured with required/optional sections)
- Mode: Tri-modal (Create + Edit + Validate)
- Module: TAC (Thesis Advisory Companion)
- Patricia sidecar integration: {project-root}/_bmad/_memory/patricia-sidecar/

**Output Template Structure:**

**Frontmatter Tracking:**
- stepsCompleted: [] (array of completed step names)
- lastStep: '' (current step name)
- lastContinued: '' (date of last session)
- workflowMode: '' ('handoff' or 'standalone')
- workflowStatus: '' ('in-progress' or 'complete')
- topic: '' (validated topic)
- researchQuestion: '' (student's research question)
- totalSourcesFound: 0 (count of sources)
- customSourcesAdded: 0 (count of user-provided sources)
- selectedSources: [] (array of selected source IDs)
- refinementCount: 0 (iteration count)
- thresholdStatus: '' ('met' or 'warning')
- databasesSearched: [] (array of database names)
- searchParameters: {dateRange, languages, excludedKeywords}

**Document Sections (Semi-Structured):**

Required Sections:
1. Search Parameters (Step 02)
2. Search Results (Steps 03-04)
3. Threshold Analysis (Step 05)
4. Selected Sources (Step 07)
5. Refinement History (Step 06)

Optional Sections:
6. Database Breakdown (Step 05)
7. Quality Distribution (Step 05)
8. Next Steps (Step 08)

**Next Steps:**
- Step 08: Build step-01-init.md and step-01b-continue.md (continuation support)
- Step 09: Build remaining steps 02-08 (repeatable process)

**Foundation Status:** ✅ COMPLETE - Ready for step file implementation

---

## Step 01 Build Complete

**Date Completed:** 2026-01-25

**Created:**
- `steps-c/step-01-init.md` - Initialization step with continuation detection
- `steps-c/step-01b-continue.md` - Continuation handler for resuming sessions

**Step Configuration:**

**step-01-init.md:**
- **Type:** Continuable Init Step
- **Goal:** Check for existing session, initialize new workflow if none exists
- **Menu:** Auto-proceed (no user choice)
- **Next Step:** step-02-handoff-confirmation (if new) OR step-01b-continue (if existing)
- **Key Logic:**
  - Searches {output_folder} for `source-validation-*.md` files
  - Checks frontmatter for incomplete sessions (workflowStatus != 'complete')
  - Routes to step-01b if prior session found
  - Proceeds to step-02 if no prior session
- **Variables Used:**
  - outputFile: `{output_folder}/source-validation-{topic_slug}.md`
  - templateFile: `../templates/source-validation-output.md`
  - patriciaSidecar: `{project-root}/_bmad/_memory/patricia-sidecar/`

**step-01b-continue.md:**
- **Type:** Continuation Step
- **Goal:** Resume workflow from where student left off in previous session
- **Menu:** Auto-proceed (displays summary, then routes)
- **Routing Logic:**
  - Reads `stepsCompleted` array from output frontmatter
  - Determines last completed step
  - Maps to next step file from nextStepOptions
  - Routes automatically after displaying summary
- **State Loaded:**
  - topic, lastStep, lastContinued
  - totalSourcesFound, refinementCount, thresholdStatus
  - selectedSources array
- **Next Step Options:**
  - step-02 → step-03 → step-04 → step-05 → step-06 → step-07 → step-08
  - step-06 can loop back to step-03 (refinement loop)

**Supporting Files:**
- None required for step-01/01b (uses existing template and output file)

**Subprocess Optimization:**
- Not applicable to step-01/01b (initialization steps, no data processing)

**Next Steps:**
- Step 09: Build step-02-handoff-confirmation.md (input discovery, handoff mode detection)
- Step 09 (repeated): Build remaining steps 03-08

**Remaining Step Files to Build:**
1. ✅ step-02-handoff-confirmation.md (Receive & Confirm Handoff) - COMPLETE
2. ✅ step-03-parallel-search.md (Execute Parallel Database Searches) - COMPLETE
3. ✅ step-04-score-and-rank.md (Apply Dual Scoring & Ranking) - COMPLETE
4. ⏳ step-05-threshold-analysis.md (Threshold Check & Presentation)
5. ⏳ step-06-refinement-loop.md (Iterative Refinement with loop-back)
6. ⏳ step-07-source-selection.md (Student Selects Sources)
7. ⏳ step-08-finalize-and-handoff.md (Document Creation & Handoff)

**Step 01 Status:** ✅ COMPLETE - Continuation support implemented

---

## Step 02 Build Complete

**Date:** 2026-01-25

**File Created:** `steps-c/step-02-handoff-confirmation.md`

**Configuration:**

**Step Details:**
- **Type:** Middle Step (Standard) with A/P/C menu
- **Goal:** Receive validated topic from Dr. Carla OR prompt standalone, confirm search parameters
- **Menu:** A/P/C (Advanced Elicitation for topic clarification, Party Mode for search strategy brainstorming)
- **Next Step:** step-03-parallel-search.md

**Frontmatter Variables Used:**
```yaml
name: 'step-02-handoff-confirmation'
description: 'Receive validated topic from Dr. Carla OR prompt standalone, confirm search parameters'
outputFile: '{output_folder}/source-validation-{topic_slug}.md'
nextStepFile: './step-03-parallel-search.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
patriciaSidecar: '{project-root}/_bmad/_memory/patricia-sidecar/'
moduleInputFolder: '{tac_output_folder}'
inputFilePatterns:
  - 'carla-handoff-*.md'
  - 'topic-discovery-*.md'
```

**Key Features:**

**Input Discovery:**
- Searches {tac_output_folder} for Dr. Carla handoff files (carla-handoff-*.md, topic-discovery-*.md)
- Checks Patricia sidecar for pending-requests.md
- Determines workflowMode: 'handoff' (if found) OR 'standalone' (if not found)

**Dual Mode Support:**
- **Handoff Mode:** Loads topic + researchQuestion from Dr. Carla's output, confirms with user
- **Standalone Mode:** Prompts user to provide topic directly, captures research question

**Search Parameters:**
- Date Range: Recent (5y) / Decade (10y) / All available / Custom range
- Languages: EN+PT (default) / EN only / PT only / Custom
- Excluded Keywords: User-specified terms to filter out

**Database Credentials:**
- Checks Patricia sidecar for saved database access credentials
- Displays available databases (JSTOR, SciELO, CAPES, WoS, Google Scholar)

**Output Document Creation:**
- Creates output file from template
- Populates frontmatter with workflowMode, topic, searchParameters
- Writes Search Parameters section with confirmed constraints

**State Tracking:**
- Updates stepsCompleted: ['step-01-init', 'step-02-handoff-confirmation']
- Tracks workflowMode, topic, researchQuestion, searchParameters

**Subprocess Optimization:**
- Not applicable (parameter setup step, no heavy processing)

**Step 02 Status:** ✅ COMPLETE - Input discovery and parameter setup implemented

---

## Step 03 Build Complete

**Date:** 2026-01-25

**File Created:** `steps-c/step-03-parallel-search.md`

**Configuration:**

**Step Details:**
- **Type:** Middle Step (Complex) - heavy sub-agent use, subprocess optimization
- **Goal:** Execute parallel database searches across 5 academic databases, stream raw results incrementally
- **Menu:** C-only (proceed when ready to score)
- **Next Step:** step-04-score-and-rank.md

**Frontmatter Variables Used:**
```yaml
name: 'step-03-parallel-search'
description: 'Execute parallel database searches across 5 academic databases using sub-agents'
outputFile: '{output_folder}/source-validation-{topic_slug}.md'
nextStepFile: './step-04-score-and-rank.md'
searchStrategiesData: './data/database-search-strategies.md'
```

**Key Features:**

**Subprocess Optimization (Pattern 4 - Parallel Execution):**
- Launches 5 parallel sub-agents (one per database)
- Each sub-agent independently searches: JSTOR, SciELO, CAPES Periódicos, Web of Science, Google Scholar
- Main thread aggregates results and streams to document
- Fallback: Sequential execution if sub-agents unavailable

**Search Strategy Loading (Pattern 3):**
- Optionally loads database-search-strategies.md via subprocess
- Returns only applicable search techniques (context savings)
- Fallback: Uses general academic search best practices

**Incremental Result Streaming:**
- Writes sources to document as each database completes
- Progress updates displayed to user in real-time
- Preserves original language abstracts (no translation)

**Raw Results Only:**
- Collects: title, authors, year, database, abstract, access link
- Does NOT calculate scores (marked as ⏳ Pending)
- Scoring deferred to step-04 for separation of concerns

**Error Handling:**
- Database timeouts: Retry once, then continue with available results
- No results: Note 0 sources, continue with other databases
- Access errors: Provide institutional access guidance

**Document Updates:**
- Appends Search Results section with raw sources
- Updates frontmatter: totalSourcesFound, databasesSearched
- Incremental writes per database completion

**State Tracking:**
- Updates stepsCompleted: [..., 'step-03-parallel-search']
- Tracks totalSourcesFound, databasesSearched array
- Records searchTimestamp per database

**Subprocess Optimization:**
- Pattern 4: Parallel sub-agents for database searches (significant speed improvement)
- Pattern 3: Load search strategies data file (if available)
- Graceful fallback for LLMs without subprocess capability

**Step 03 Status:** ✅ COMPLETE - Parallel database search with incremental streaming implemented

---

## Step 04 Build Complete

**Date:** 2026-01-25

**File Created:** `steps-c/step-04-score-and-rank.md`

**Configuration:**

**Step Details:**
- **Type:** Middle Step (Complex) - sub-agents + Advanced Elicitation
- **Goal:** Calculate relevancy % and quality % for each source using dual scoring system, rank by relevancy
- **Menu:** A/P/C (Advanced Elicitation CRITICAL for quality scoring validation, Party Mode for methodology exploration)
- **Next Step:** step-05-threshold-analysis.md

**Frontmatter Variables Used:**
```yaml
name: 'step-04-score-and-rank'
description: 'Calculate relevancy % and quality % for each source using dual scoring system, then rank by relevancy'
outputFile: '{output_folder}/source-validation-{topic_slug}.md'
nextStepFile: './step-05-threshold-analysis.md'
qualityScoringRubric: './data/quality-scoring-rubric.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
```

**Key Features:**

**Dual Scoring System:**
- **Relevancy Score (0-100%):** Title match 30%, Abstract alignment 40%, Keyword overlap 20%, Scope fit 10%
- **Quality Score (0-100%):** Peer review status 40%, Journal tier 35%, Citation metrics 25%
- Two independent scores calculated for each source

**Subprocess Optimization:**
- **Pattern 3:** Loads quality-scoring-rubric.md via subprocess (context savings, returns only framework)
- **Pattern 2 + 4:** Parallel sub-agents score each source independently (one sub-agent per source)
- Fallback: Sequential scoring in main thread if sub-agents unavailable

**Parallel Scoring Execution:**
- Launches one sub-agent per source for simultaneous scoring
- Each sub-agent returns: relevancyScore, qualityScore, breakdowns, justification
- Main thread aggregates results and updates document

**Ranking by Relevancy:**
- Sources ranked by relevancy % (highest to lowest)
- Quality % preserved as separate informational metadata
- Students may prefer high-quality but lower-relevancy sources for background

**Transparency Features:**
- Scoring breakdown displayed per source (title match, abstract alignment, etc.)
- Justification provided (1-2 sentences explaining scores)
- Full rubric criteria visible in breakdowns

**Advanced Elicitation Integration:**
- CRITICAL for quality scoring validation
- Allows deep dive into scoring methodology
- Ensures rigorous quality assessment

**Document Updates:**
- Rewrites Search Results section with scored and ranked sources
- Updates: relevancy %, quality %, scoring breakdowns, justifications
- Preserves original language abstracts

**State Tracking:**
- Updates stepsCompleted: [..., 'step-04-score-and-rank']
- Tracks scoring timestamp
- Preserves all source metadata

**Subprocess Optimization:**
- Pattern 3: Load quality rubric (returns only framework, not full file)
- Patterns 2 + 4: Parallel scoring sub-agents (significant performance improvement)
- Graceful fallback for LLMs without subprocess capability

**Step 04 Status:** ✅ COMPLETE - Dual scoring with parallel sub-agents and Advanced Elicitation integration implemented

# Workflows Reference

TAC includes 14 workflows organized into three categories: Core (essential), Feature (specialized), and Utility (support).

**Currently Documented:** 4 workflows (3 Core + 1 Feature) - see individual spec files for remaining workflows.

---

## Core Workflows

These are the essential workflows that define TAC's primary value.

### 1. Topic Discovery & Validation

**Agent:** Dr. Carla (Academic Advisor) + Patricia (Research Librarian, invoked as sub-agent)
**Command:** `/tac:workflows:topic-discovery-validation` or invoke from Dr. Carla

**Purpose:** Help MBA students pick a viable thesis topic with source validation - THE breakthrough workflow that breaks paralysis.

**When to Use:**
- You have no thesis topic and don't know where to start
- You have vague ideas but need to validate they're researchable
- You want to avoid picking a topic that has no academic support
- You need confidence that your topic has sufficient academic sources
- You're paralyzed by too many possibilities or fear of wrong choice

**What It Does:**
1. **Interests Exploration:** Dr. Carla conducts collaborative conversation about your interests
   - What excites you in project management?
   - What real-world problems matter to you?
   - Brazilian context considerations (when it matters vs doesn't)
   - Saves interests document for reference
2. **Topic Angle Generation:** Creates 3-4 researchable topic angles from your interests
   - Properly scoped (not too broad, not too narrow)
   - Aligned with MBA thesis requirements
   - Regeneration option if angles don't resonate
   - Saves angles document with rationales
3. **Library Source Validation:** Patricia validates each angle with actual source counts
   - Parallel validation using sub-agent (Pattern 4 optimization)
   - Real library database searches (or web search fallback)
   - Source quality assessment (peer-reviewed journals prioritized)
   - Actual source links provided (not just counts)
4. **Topic Selection:** Collaborative decision with Dr. Carla
   - Compare angles based on source availability
   - Decision criteria framework provided
   - Confidence-building through evidence
   - Saves validation summary with selected topic
5. **Completion & Handoff:** Ready for next workflow (Source Validation)

**THE Breakthrough Moment:**
- You see actual source counts and links for each angle
- You're no longer guessing if your topic is viable
- Paralysis breaks when you have evidence-based confidence

**Key Features:**
- Continuable (multi-session support for thinking time)
- 3 semi-structured documents produced at key decision points
- Library integration with web search fallback
- Parallel source validation for efficiency
- Backward navigation for regeneration
- Brazilian context guidance included
- Topic scope guidance (Goldilocks principle)
- 5 comprehensive data reference files

**Integration:**
- **Receives:** Nothing (starting point workflow)
- **Produces:** 3 documents in {thesis_artifacts}/topic-discovery/
  - interests-{date}.md
  - angles-{date}.md
  - validation-{date}.md
- **Next:** Source Validation (Patricia) → Literature Review Builder

---

### 2. Literature Review Builder

**Agent:** Patricia (Research Librarian)
**Command:** `/tac:workflows:literature-review-builder` or invoke from Patricia

**Purpose:** Transform selected sources into organized thematic literature review with professional citations.

**When to Use:**
- You've completed Source Validation and have 10-15 selected sources
- You need to organize sources thematically for your thesis
- You want a structured literature review framework to guide writing
- You need professional source lists in ABNT or APA format

**What It Does:**
1. **Mandatory:** Exports source list with professional citations (ABNT/APA)
   - Selected sources only OR all sources with selected at top
   - Complete abstracts and metadata
   - Both Markdown and Word formats

2. **Optional:** Creates literature review synthesis
   - Collaborative theme discovery (2-5 themes)
   - Parallel synthesis using sub-agents for efficiency
   - Pattern and gap analysis across sources
   - Framework outline for thesis chapter writing
   - Quality gates via Advanced Elicitation

**Key Features:**
- Continuable (multi-session support)
- Dual format output (MD + DOCX via Pandoc)
- ABNT (Brazilian) or APA citation formats
- Loop-back to Source Validation or Topic Discovery if needed
- Patricia remembers your work for future sessions

**Integration:**
- **Receives:** Source Validation handoff (10-15 selected sources)
- **Produces:** source-list.md/docx + literature-review.md/docx
- **Next:** Writing Guide (João)

---

### 3. Thesis Structure & Outline

**Agent:** João (Writing Coach - Teaching Assistant persona)
**Command:** `/tac:workflows:thesis-structure-outline` or invoke from João

**Purpose:** Create comprehensive thesis outline with chapter structure, section breakdown, and coaching questions - teaching students to write themselves.

**When to Use:**
- You've completed Literature Review and have your sources organized
- You need thesis structure and section-by-section guidance
- You want to understand WHY each chapter exists (not just WHAT to write)
- You need a framework to guide your writing with confidence
- You can also use standalone if you already have topic and sources

**What It Does:**
1. **Input Discovery:** Uses Literature Review handoff OR accepts user-provided topic
2. **Thesis Type Discovery:** Educational conversation to identify your thesis type
   - Empirical Research, Case Study, Literature-Based, Mixed-Methods, or Action Research
   - Chapter structure adapts based on type (not one-size-fits-all)
3. **Chapter Planning:** Explains PURPOSE of each chapter contextualized to your specific topic
4. **Section Breakdown:** Creates section-level detail with coaching questions
   - Questions guide YOU to write (not templates that do it for you)
   - Review loops with conceptual feedback
   - Brainstorming support when you get stuck
5. **Methodology Planning:** Special focus on research approach
   - Choose depth: High-level overview OR detailed protocol
   - Appropriate methodology for your thesis type
6. **Quality Gates:** Advanced Elicitation for final review before completion
7. **Dual Format Output:** Generates both MD and DOCX (via Pandoc)

**Key Features:**
- Teaching-focused: João is a serious TA, not a cheerleader
- Coaching questions (not templates) - you remain the author
- Conceptual feedback only (no text corrections except grammar)
- Thesis type adaptation (5 types with different structures)
- Methodology depth choice (high-level OR detailed)
- Continuable (multi-session support)
- Revisable (regeneration loops at review points)
- João's memory (remembers your work across sessions)
- Tri-modal support (Create + Edit + Validate modes)

**Integration:**
- **Receives:** Literature Review handoff from Patricia (optional)
- **Produces:** thesis-outline-{date}.md/docx with chapters, sections, coaching questions
- **Next:** Writing Session Guide (João) - offered at completion

---

## Feature Workflows

### 4. Research Question Designer

**Agent:** Dr. Carla (Academic Advisor)
**Command:** `/tac:workflows:research-question-designer` or invoke from Dr. Carla

**Purpose:** Refine draft research questions from Topic Discovery into final, evaluated questions using research methodology frameworks.

**When to Use:**
- You've completed Topic Discovery and have a draft research question
- You need to refine the draft into a clear, precise, properly scoped question
- You want to explore alternative formulations before committing
- You need rigorous evaluation against research criteria
- You're uncertain if your question is researchable within thesis constraints

**What It Does:**
1. **Input Discovery:** Loads draft research question from Topic Discovery validation document
   - Extracts topic, draft question, field, scope context
   - Handles manual input if validation document not found
2. **Generate Alternatives:** Creates 3-5 alternative research question formulations
   - Collaborative preference discussion before generation
   - Varies focus, scope, approach, context across alternatives
   - Each alternative has title, full question, rationale, scope (IN/OUT)
   - Uses question formulation patterns for guidance
3. **Review & Regeneration Loop:** Student decides to accept or regenerate
   - Unlimited regeneration attempts with preference adjustments
   - No forced acceptance until student is satisfied
4. **Evaluate Against Criteria:** Rigorous assessment of each alternative
   - **Researchability:** Data access, methods, resources, timeframe
   - **Scope:** Appropriate for MBA thesis (not too broad/narrow)
   - **Contribution:** Novel context, theoretical advance, practical relevance
   - Socratic questioning to guide collaborative evaluation
   - Web-browsing access for methodology frameworks
5. **Select Question:** Student chooses preferred alternative based on evaluation
   - Informed decision-making with evaluation summary
   - Advanced Elicitation for decision support if needed
6. **Refine Question:** Collaborative refinement conversation
   - Polish for clarity, precision, appropriate wording
   - Incremental refinement (not complete rewrite)
   - Preserves student's core intent
7. **Dr. Carla's Memory Update:** Records session for cross-workflow continuity
8. **Completion:** Summary and recommendation for Literature Review Builder

**Key Features:**
- Continuable (multi-session support for thinking time)
- Regeneration loops (explore until satisfied)
- Rigorous evaluation framework with 3 criteria
- Collaborative refinement (not dictated)
- Question formulation patterns (618 lines) - types, examples, MBA considerations
- Research criteria framework (568 lines) - evaluation guidelines, red flags, trade-offs
- Dr. Carla sidecar memory for personalization
- Workflow chaining to Literature Review Builder
- Advanced Elicitation at key decision points
- Tri-modal support (Create + Edit + Validate modes)

**Integration:**
- **Receives:** Topic Discovery validation document (draft question + topic context)
- **Produces:** research-question-{date}.md in {thesis_artifacts}/research-question/
  - Draft question from Topic Discovery
  - All alternatives explored with rationales
  - Complete evaluation against criteria
  - Selected question with rationale
  - Refined final question with improvement notes
- **Next:** Literature Review Builder (recommended) or Thesis Structure & Outline

---

### 5-8. [Other specialized workflows - see workflow specs for details]

---

## Utility Workflows

### 9-14. [Support workflows - see workflow specs for details]

---

See individual workflow spec files in `workflows/` folder for complete details.

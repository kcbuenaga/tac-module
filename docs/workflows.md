# Workflows Reference

TAC includes 14 workflows organized into three categories: Core (essential), Feature (specialized), and Utility (support).

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

### 4-8. [Specialized workflows - see workflow specs for details]

---

## Utility Workflows

### 9-14. [Support workflows - see workflow specs for details]

---

See individual workflow spec files in `workflows/` folder for complete details.

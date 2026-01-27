# Workflows Reference

TAC includes 14 workflows organized into three categories: Core (essential), Feature (specialized), and Utility (support).

---

## Core Workflows

These are the essential workflows that define TAC's primary value.

### 1. Topic Discovery & Validation

**Agent:** Dr. Carla (Academic Advisor) + Patricia (for source validation)
**Command:** `[TD]` from Dr. Carla

**Purpose:** Help MBA students pick a viable thesis topic with source validation.

**When to Use:**
- You have no thesis topic and don't know where to start
- You have vague ideas but need to validate they're researchable
- You want to avoid picking a topic that has no academic support

**What It Does:**
1. Explores your interests in project management through conversation
2. Generates 3-4 potential topic angles based on what excites you
3. Validates each angle against USP library databases
4. Shows you actual source counts for each angle
5. Helps you select a topic with confidence

**This is THE breakthrough workflow that breaks paralysis.**

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

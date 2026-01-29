# TAC Workflow Sequence

**Purpose:** Reference for workflow-status to understand thesis journey progression and recommend next steps.

---

## Core Thesis Journey Sequence

The primary path through the TAC thesis journey:

**Phase 1: Topic & Question Definition**
1. **topic-discovery-validation** (THE core workflow - breaks paralysis)
   - Validates topic feasibility
   - Confirms library access
   - Output: Validated topic brief
   - Next: research-question-designer

2. **research-question-designer**
   - Refines topic into precise research question
   - Output: Research question document
   - Next: literature-review-builder

**Phase 2: Research & Literature**
3. **literature-review-builder**
   - Systematic literature review
   - Source organization and analysis
   - Output: Literature review document
   - Next: thesis-structure-outline

**Phase 3: Structure & Planning**
4. **thesis-structure-outline**
   - Creates thesis outline and structure
   - Plans chapter breakdown
   - Output: Thesis structure document
   - Next: writing-session-guide

**Phase 4: Writing**
5. **writing-session-guide**
   - Guided writing sessions
   - Chapter drafting support
   - Output: Writing session notes
   - Next: defense-preparation (when thesis draft complete)

**Phase 5: Defense Preparation**
6. **defense-preparation**
   - Practice defense sessions
   - Committee simulation
   - Output: Defense readiness report
   - Next: Thesis complete!

---

## Supporting Workflows (Can Run Anytime)

These workflows support the core journey but don't block progression:

**source-explainer**
- Explains academic sources in user's preferred language
- Bilingual support (English papers → Portuguese explanations)
- Can run during literature review phase or anytime
- Non-blocking utility

**citation-helper**
- Formats citations (ABNT/APA)
- Dual input methods (paste text or link)
- Can run during writing phase or anytime
- Non-blocking utility

**workflow-status** (this workflow)
- Displays current progress
- Recommends next step
- Can run anytime
- Non-blocking utility

---

## Recommendation Logic

**If no workflows completed:**
→ "Start with /topic-discovery-validation - the core workflow that breaks paralysis"

**If topic-discovery-validation completed, but not research-question-designer:**
→ "Run /research-question-designer to refine your topic into a precise research question"

**If research-question-designer completed, but not literature-review-builder:**
→ "Run /literature-review-builder to begin systematic literature review"

**If literature-review-builder completed, but not thesis-structure-outline:**
→ "Run /thesis-structure-outline to plan your thesis structure and chapters"

**If thesis-structure-outline completed, but not writing-session-guide:**
→ "Run /writing-session-guide to begin writing your thesis chapters"

**If writing-session-guide completed, but not defense-preparation:**
→ "Run /defense-preparation when your thesis draft is complete to practice your defense"

**If defense-preparation completed:**
→ "Congratulations! You've completed the TAC thesis journey. You're ready to defend!"

**If workflow in-progress (stepsCompleted exists but not complete):**
→ "Continue your [workflow-name] - you're currently at step X of Y"

---

## Status Display Guidelines

**Group workflows by status:**
- ✅ **Completed:** Workflows with all steps finished
- 🔄 **In Progress:** Workflows with some steps completed
- ⭕ **Not Started:** Core workflows not yet begun

**Calculate overall progress:**
- Count core workflows completed (1-6)
- Display as "Phase X of 5" (Topic → Research → Structure → Writing → Defense)

**Handle edge cases:**
- If only supporting workflows run (source-explainer, citation-helper): "You haven't started the core thesis journey yet"
- If multiple workflows in-progress: Recommend completing the earliest one first
- If user skipped workflows (e.g., did literature-review before research-question): Note this but still recommend next logical step

---

**Use this reference to generate intelligent, context-aware recommendations based on user's actual progress.**

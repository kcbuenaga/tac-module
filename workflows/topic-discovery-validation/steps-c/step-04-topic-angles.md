---
name: 'step-04-topic-angles'
description: 'Generate researchable topic angles from student interests'

nextStepFile: './step-05-save-angles.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
brainstormingTask: '{project-root}/_bmad/core/workflows/brainstorming/workflow.xml'
---

# Step 4: Topic Angle Generation

## STEP GOAL:

To transform the 3-5 broad interest areas from step-02 into 5-8 specific, researchable topic angles, each with a focused research question, clear scope, and rationale. Multiple angles provide options for passive validation and narrowing in subsequent steps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, an Academic Advisor specializing in topic discovery
- ✅ This is a generative step - you will propose topic angles, but student confirms/refines
- ✅ Balance expertise with collaboration - suggest angles that are both interesting AND researchable
- ✅ Avoid academic jargon - speak clearly about why each angle works

### Step-Specific Rules:

- 🎯 Generate 5-8 topic angles (more angles = better options for passive validation)
- 📊 Each angle must be DIFFERENT - different focus, question, or context
- ✅ Each angle must pass the "researchability test" - specific enough to study, broad enough to have depth
- 🚫 Do NOT generate angles that are too broad ("all of agile") or too narrow ("one tool's button layout")
- 💬 Explain WHY each angle is interesting and researchable
- 🔄 Support regeneration - if student doesn't like angles, ask what to adjust and regenerate
- 📈 More angles now = better filtering after passive source check (step 05b)

## EXECUTION PROTOCOLS:

- 📖 Read interests document from step-03
- 🎯 Generate angles that map to student's authentic interests (not what "should" interest them)
- 📝 Each angle needs: Focus statement, Research question, Rationale, Scope
- 🔄 [R] menu option regenerates angles with student's refinement input
- 🎨 [B] menu option launches brainstorming for creative angle exploration
- ✅ Generate 5-8 angles (provides options for passive validation narrowing)
- 📈 Distribute angles across the 3-5 interest areas from step-02

## CONTEXT BOUNDARIES:

- Available context: Interests document from step-03 (field focus, 2-3 interest areas, context preferences, problems/questions)
- Focus: Generating angles that are specific, researchable, and aligned with student interests
- Limits: No source validation yet (that's step-06) - just define the angles
- Dependencies: Requires interests document from step-03

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Interests Document

**Find and read the most recent interests document:**

```
Location: {thesis_artifacts}/topic-discovery/interests-*.md
```

**Read the document and extract:**
- Field focus
- Interest areas (3-5 areas with specifics)
- Context preferences (geographic, industry, methodology)
- Problems/questions that emerged

**If interests document not found:**
- "⚠️ I can't find the interests document from step-03. Let me check if we need to go back and complete interests exploration first."
- **STOP** - Do not generate angles
- Return user to step-02

**If interests document found:**
- Proceed to step 2

### 2. Generate Initial Topic Angles

**Goal:** Create 5-8 topic angles that:
- Map to the student's authentic interests from step-02
- Distribute across the 3-5 interest areas (1-2 angles per area)
- Are specific enough to be researchable
- Are broad enough to have academic depth
- Are DIFFERENT from each other (different focus, question, or context)

**Distribution Strategy:**
- If 3 interest areas → generate 6 angles (2 per area)
- If 4 interest areas → generate 6-8 angles (1-2 per area)
- If 5 interest areas → generate 5-8 angles (1-2 per area)
- Ensures breadth while keeping manageable

**Angle Generation Guidelines:**

**For each angle, create:**

1. **Focus:** A 1-2 sentence description of what this angle is about
2. **Research Question:** A specific, answerable research question (not vague)
3. **Rationale:** Why this is interesting AND researchable (2-3 sentences)
4. **Scope:** What's IN scope and what's OUT of scope (prevents scope creep)

**Diversity:** Ensure angles are different. If student has 3 interest areas, consider:
- Angle 1: Based on interest area 1
- Angle 2: Based on interest area 2
- Angle 3: Based on interest area 3
- Angle 4: Combination or alternative take on interest area 1 or 2

**Quality checks (apply to each angle):**

✅ **Good scope:**
- Specific enough to study in 3-6 months
- Broad enough to find 15-30 academic sources
- Focused on one clear question

❌ **Too broad:**
- "How does agile methodology work?" (entire methodology)
- "What makes projects successful?" (too general)
- "Project management in healthcare" (no specific question)

❌ **Too narrow:**
- "How does Jira's sprint board differ from Asana's?" (tool comparison)
- "The color scheme of Kanban boards" (trivial)
- "One company's project process" (case study, not research question)

**Example Good Angles:**

*Example 1 (Agile Interest):*
- **Focus:** How Brazilian software companies adapt Scrum ceremonies to local work culture
- **Research Question:** What adaptations do Brazilian software teams make to Scrum retrospectives, and how do these adaptations affect team satisfaction and sprint outcomes?
- **Rationale:** This is researchable (can survey teams, analyze adaptations, measure outcomes), relevant (Brazil context matters), and specific (focuses on retrospectives, not all of Scrum). It addresses a real problem: global methodologies may not fit local cultures perfectly.
- **Scope:** IN: Scrum retrospectives, Brazilian software companies, team satisfaction metrics, cultural adaptations. OUT: Other Scrum ceremonies, non-software industries, international teams.

*Example 2 (Construction Interest):*
- **Focus:** Risk management strategies in sustainable construction projects
- **Research Question:** What risk management strategies do project managers use in LEED-certified construction projects, and how do these differ from traditional construction projects?
- **Rationale:** Sustainable construction is growing, LEED certification adds complexity, risk management is teachable/researchable. Comparing LEED vs traditional gives concrete analysis framework.
- **Scope:** IN: LEED-certified projects, risk management strategies, project manager perspectives. OUT: Non-certified projects (except as comparison), building operations post-construction, financing/budget details.

*Example 3 (Stakeholder Interest):*
- **Focus:** Stakeholder communication patterns in remote project teams
- **Research Question:** How do project managers adjust stakeholder communication strategies when managing remote teams, and what impact do these adjustments have on stakeholder satisfaction?
- **Rationale:** Remote work is current and relevant, communication is critical in PM, stakeholder satisfaction is measurable. This is specific to remote context (not all stakeholder management).
- **Scope:** IN: Remote teams, stakeholder communication strategies, project manager practices, satisfaction metrics. OUT: Co-located teams (except as comparison), internal team communication, technical tools deep-dive.

### 3. Present Topic Angles to Student

Display the angles in a clear, structured format:

"**🎯 Topic Angles Generated**

Based on your interests exploration, I've created {3 or 4} topic angles for you to consider. Each angle is designed to be specific enough to research deeply, but broad enough to have academic substance.

---

## Angle 1: [Title - Short, catchy description]

**Focus:** [1-2 sentence description of what this angle is about]

**Research Question:**
*[Specific, answerable research question]*

**Why this works:**
[2-3 sentences explaining why this is interesting AND researchable - connect to student's interests from step-02]

**Scope:**
- **IN scope:** [What you'd study - be specific]
- **OUT of scope:** [What you'd exclude - prevents scope creep]

---

## Angle 2: [Title]

**Focus:** [1-2 sentence description]

**Research Question:**
*[Specific, answerable research question]*

**Why this works:**
[2-3 sentences explaining interest + researchability]

**Scope:**
- **IN scope:** [What you'd study]
- **OUT of scope:** [What you'd exclude]

---

## Angle 3: [Title]

**Focus:** [1-2 sentence description]

**Research Question:**
*[Specific, answerable research question]*

**Why this works:**
[2-3 sentences explaining interest + researchability]

**Scope:**
- **IN scope:** [What you'd study]
- **OUT of scope:** [What you'd exclude]

---

## Angle 4: [Title] *(if applicable)*

**Focus:** [1-2 sentence description]

**Research Question:**
*[Specific, answerable research question]*

**Why this works:**
[2-3 sentences explaining interest + researchability]

**Scope:**
- **IN scope:** [What you'd study]
- **OUT of scope:** [What you'd exclude]

---

**These angles are different enough to give you real choice, but all are connected to the interests you shared in our exploration.**

**What do you think?** Do any of these angles excite you? Do you want me to adjust or regenerate any of them?"

**Wait for student response.**

### 4. Handle Student Feedback

**If student likes the angles:**
- "Great! Which angle(s) are you most drawn to? You don't have to pick one yet - in the next step I'll validate all of them to see which have the best source availability."
- Proceed to menu (step 5)

**If student wants adjustments:**
- "Tell me what to adjust - should I make any angle more specific? Broader? Change the focus? Add or remove an angle?"
- Listen to feedback
- Regenerate angles based on input
- Return to step 3 (present revised angles)

**If student is unsure or stuck:**
- "What's making you hesitate? Is it that none of these feel exciting, or that you're worried about feasibility?"
- Probe gently to understand the concern
- If excitement issue: Return to step-02 exploration or use Advanced Elicitation
- If feasibility concern: Reassure that next step validates sources
- If scope concern: Offer to adjust scope on specific angles

**If student says "none of these work":**
- "Okay, let me understand what's not working. Is it:
  - The angles don't match your interests from step-02?
  - They're too broad or too narrow?
  - They're not exciting enough?
  - Something else?"
- Get specific feedback
- Consider returning to step-02 if interests weren't well captured
- If interests were good but angles missed the mark, regenerate with new direction

### 5. Present MENU OPTIONS

Display: **Select an Option:** [R] Regenerate Angles [B] Brainstorm [A] Advanced Elicitation [C] Continue to Save Angles

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF R: "What would you like me to adjust?" → Get student input → Regenerate angles using feedback → Redisplay angles (step 3) → Return to this menu
- IF B: Execute {brainstormingTask} for creative topic angle exploration → When complete, regenerate angles incorporating brainstorming insights → Redisplay angles (step 3) → Return to this menu
- IF A: Execute {advancedElicitationTask} to dig deeper into interests and motivations → When complete, regenerate angles with new insights → Redisplay angles (step 3) → Return to this menu
- IF C: Confirm student is satisfied with angles, then proceed to {nextStepFile} (step-05 will save angles document)
- IF Any other: help user, then [Redisplay Menu Options](#5-present-menu-options)

**Note on [R]:** This is the internal loop - student can regenerate angles multiple times within this step until satisfied.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- 3-4 topic angles generated (not 2, not 5)
- Each angle is DIFFERENT (different focus, question, or context)
- Each angle maps to student's authentic interests from step-02
- Each angle has all 4 components: Focus, Research Question, Rationale, Scope
- Research questions are specific and answerable (not vague)
- Scope is realistic (not too broad, not too narrow)
- Rationale explains both interest AND researchability
- Student understands why each angle works
- Student feels they have real choice between angles
- [R] regeneration works if student wants adjustments
- Angles are ready for source validation in step-06

### ❌ SYSTEM FAILURE:

- Generated fewer than 3 or more than 4 angles
- Angles are too similar (not enough diversity)
- Angles don't connect to student's interests from step-02
- Research questions are vague ("How does X work?")
- Scope is too broad ("all of agile") or too narrow ("one button in Jira")
- Missing components (no rationale, no scope definition)
- Used academic jargon without explanation
- Proceeded to step-05 without student confirmation
- Regeneration doesn't incorporate student feedback
- Student feels angles are imposed, not collaborative

**Master Rule:** Generate angles that are specific, researchable, diverse, and authentically connected to student interests. Support refinement through [R] loop. Only proceed when student is satisfied.

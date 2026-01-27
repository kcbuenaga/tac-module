---
name: 'step-07-refine-question'
description: 'Collaborative refinement conversation to polish selected research question'

nextStepFile: './step-08-update-sidecar.md'
outputFile: '{thesis_artifacts}/research-question/research-question-{date}.md'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'

# Tasks
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
---

# Step 7: Refine Research Question

## STEP GOAL:

To collaboratively refine the selected research question through focused conversation, ensuring it is clear, precise, properly scoped, and effectively worded to guide the thesis research.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, an Academic Advisor specializing in research question formation
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You guide refinement with expertise in question clarity and precision
- ✅ Student retains ownership - refinements emerge from dialogue

### Step-Specific Rules:

- 🎯 Focus on clarity, precision, and appropriate wording
- 🚫 FORBIDDEN to completely rewrite question (this is refinement, not replacement)
- 💬 Approach: Collaborative wordsmithing, precision enhancement
- 🎯 Preserve student's intent while improving expression

## EXECUTION PROTOCOLS:

- 🎯 Review selected question for refinement opportunities
- 💾 Work collaboratively on word choice, structure, and precision
- 📖 Append refined final question to output document
- 🚫 Refinements must preserve student's core intent

## CONTEXT BOUNDARIES:

- Available: Selected question from step-06
- Focus: Polish and refine for clarity and precision
- Limits: Not a complete rewrite - incremental improvements
- Dependencies: Question selected in step-06

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration and Selected Question

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `user_name`

Load {outputFile} and read:
- `selectedAlternative`
- `selectedQuestion` (full text from body)
- Evaluation notes for this alternative

### 2. Introduce Refinement Process

Display in {preferred_tac_language}:

"**Refining Your Research Question**

You've selected:
*{selectedQuestion}*

This is a strong foundation. Now let's refine it together to ensure it's:

**1. Clear:** Unambiguous and easy to understand
**2. Precise:** Specific terms and well-defined concepts
**3. Properly Scoped:** Clear boundaries (what's IN and OUT)
**4. Effectively Worded:** Guides your research and reads professionally

This is collaborative refinement - NOT a rewrite. Your intent and direction stay the same. We're just polishing the expression.

Ready to refine?"

Wait for confirmation.

### 3. Identify Refinement Opportunities

Analyze the selected question for:

**Clarity Issues:**
- Ambiguous terms or jargon
- Complex sentence structure
- Unclear relationships between concepts

**Precision Issues:**
- Vague terms ("factors," "aspects," "things")
- Broad concepts that could be more specific
- Missing context or scope indicators

**Scope Issues:**
- Overly broad language
- Missing boundaries or constraints
- Unclear level of analysis (micro, meso, macro)

**Wording Issues:**
- Awkward phrasing
- Unnecessary words
- Passive voice
- Non-standard research question format

### 4. Facilitate Refinement Conversation

Display in {preferred_tac_language}:

"**Let's Refine**

I've reviewed your question and have some thoughts. Let's work through potential refinements together:

**Current Question:**
*{selectedQuestion}*

**Potential Refinements:**

[For EACH refinement opportunity identified, present ONE AT A TIME:]

**Refinement {N}: {Clarity/Precision/Scope/Wording}**

**Current wording:**
*[Highlight specific part of question]*

**Consideration:**
{Explain the issue or opportunity - e.g., \"The term 'factors' is quite vague. What specific factors are you thinking about? For example, organizational factors, technological factors, environmental factors?\"}

**What do you think?** Would you like to make this more specific, or does the current wording capture your intent?"

**Wait for student response.** Engage in dialogue:
- Understand student's intent
- Suggest specific alternatives
- Collaborate on wording
- Test refined version together

**Work through ALL refinement opportunities this way.**

### 5. Build Refined Question Collaboratively

As you work through refinements with the student, build the refined version incrementally:

Display in {preferred_tac_language}:

"**Refined Version (Draft):**
*{refined question with changes incorporated}*

**Changes Made:**
- {List specific refinements}

**Does this capture your intent better than the original? Any adjustments needed?"

**Iterate until student is satisfied with the refined version.**

### 6. Final Refinement Check

Display in {preferred_tac_language}:

"**Final Refinement Check**

Let's do a final review of your refined question:

**Original Selected Question:**
*{original selectedQuestion}*

**Refined Final Question:**
*{refined version}*

**Refinements Made:**
1. {Refinement 1 explanation}
2. {Refinement 2 explanation}
[etc.]

**Quality Check:**
- ✅ Clear and unambiguous?
- ✅ Precise and well-defined?
- ✅ Properly scoped for thesis?
- ✅ Professionally worded?
- ✅ Preserves your original intent?

Are you satisfied with this refined version as your final research question?"

Wait for confirmation.

**If yes:**
- Continue to step 7 (append)

**If no:**
- Display: "No problem! What would you like to adjust?"
- Return to collaborative refinement
- Iterate until satisfied

### 7. Append Refined Final Question to Output Document

Load {outputFile} and update the "Selected Research Question" section by adding:

```markdown
## Selected Research Question

[Existing content remains]

---

**Refinement Notes:**

Through collaborative refinement, the selected question was polished for clarity, precision, and effective wording:

**Refinements Applied:**
1. {Refinement 1: description}
2. {Refinement 2: description}
[etc.]

**Final Research Question:**

*{refined final question}*

**Why These Refinements:**
{2-3 sentences explaining how refinements improve the question while preserving intent}

---
```

Update frontmatter:
```yaml
finalQuestion: '{refined final question}'
```

### 8. Present Completion Summary

Display in {preferred_tac_language}:

"**Research Question Refined**

Your final research question is:

*{refined final question}*

This question is now:
- Clear and professionally worded
- Precise in scope and focus
- Ready to guide your thesis research
- Properly positioned for your field and methodology

**What's Next:**

I'll update my memory with our work together, and then we'll complete the Research Question Designer workflow. Your final question is documented and ready to use for your Literature Review and Thesis Structure."

### 9. Update stepsCompleted

Update {outputFile} frontmatter:
```yaml
stepsCompleted: ['step-01-init', 'step-02-input-discovery', 'step-03-generate-alternatives', 'step-04-review-alternatives', 'step-05-evaluate-criteria', 'step-06-select-question', 'step-07-refine-question']
lastStep: 'step-07-refine-question'
```

### 10. Present MENU OPTIONS

Display: **[A] Advanced Elicitation [C] Continue to Completion**

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} with context: "Review the refined research question for clarity, precision, scope appropriateness, and professional wording.", and when finished redisplay the menu
- IF C: Update frontmatter stepsCompleted, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#10-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Loaded selected question from step-06
- Introduced refinement process clearly
- Identified specific refinement opportunities (clarity, precision, scope, wording)
- Facilitated collaborative refinement conversation (not dictating)
- Presented refinements ONE AT A TIME for student input
- Built refined version incrementally with student
- Conducted final quality check with student
- Appended refined final question to output document
- Documented specific refinements made and rationale
- Updated frontmatter with finalQuestion
- Preserved student's core intent while improving expression
- Student satisfied with refined version
- stepsCompleted updated
- Advanced Elicitation offered

### ❌ SYSTEM FAILURE:

- Completely rewriting question without student input
- Not identifying specific refinement opportunities
- Dictating refinements without dialogue
- Presenting all refinements at once (overwhelming)
- Not checking student satisfaction before finalizing
- Not documenting what refinements were made
- Not appending to output document
- Not updating frontmatter
- Changing student's core intent
- Not offering Advanced Elicitation

**Master Rule:** This is collaborative refinement. Work incrementally. Present opportunities one at a time. Build refined version with student input. Preserve intent. Polish expression. Ensure satisfaction.

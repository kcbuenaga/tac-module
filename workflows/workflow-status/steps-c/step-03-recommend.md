---
name: 'step-03-recommend'
description: 'Provide intelligent next-step recommendation based on thesis progress'
tacWorkflowSequence: '../data/tac-workflow-sequence.md'
---

# Step 3: Recommend Next Step

## STEP GOAL:

To analyze the user's current thesis progress and provide an intelligent, context-aware recommendation for the next logical step in their journey.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a TAC workflow navigator providing intelligent guidance
- ✅ Analyze context and recommend wisely
- ✅ Clear rationale for recommendations

### Step-Specific Rules:

- 🎯 Focus ONLY on providing next-step recommendation
- 🚫 FORBIDDEN to run the recommended workflow - user decides
- 💬 Provide recommendation with clear rationale
- 🚫 FORBIDDEN to overwhelm with multiple options

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Use state data from steps 1-2 (in memory)
- 📖 Load {tacWorkflowSequence} for recommendation logic
- 🚫 FORBIDDEN to auto-proceed - this is the final step

## CONTEXT BOUNDARIES:

- Available context: State data from step 1, TAC workflow sequence
- Focus: Intelligent next-step recommendation
- Limits: Recommend, don't execute
- Dependencies: Requires steps 1-2 completion

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Workflow Sequence Reference

Load `{tacWorkflowSequence}` to understand:
- Core workflow progression (Topic → Question → Literature → Structure → Writing → Defense)
- Supporting workflows (source-explainer, citation-helper)
- Recommendation logic for each state

### 2. Analyze Current State

Based on state data from steps 1-2:

**Identify where user is in core sequence:**
- Which core workflows completed?
- Which core workflow in progress?
- Which is the next logical core workflow?

**Check for in-progress workflows:**
- If workflow has partial completion, prioritize continuing it
- If multiple in-progress, recommend earliest in sequence

**Handle edge cases:**
- User skipped workflows (e.g., did literature-review before research-question)
- Only supporting workflows run (no core progress)
- All workflows complete (thesis journey finished)

### 3. Generate Recommendation

**Display recommendation header:**
```
**Recommended Next Step:**
```

**Apply recommendation logic:**

**Scenario 1: No workflows started**
```
**Recommended Next Step:**

Start with `/topic-discovery-validation`

**Why:** This is THE core workflow that breaks paralysis. It validates your topic feasibility, confirms library access, and produces a validated topic brief. Everything else builds on this foundation.
```

**Scenario 2: Workflow in progress**
```
**Recommended Next Step:**

Continue your literature review workflow - you're currently at Step 4 of 11.

**Why:** You've made good progress. Completing this workflow will give you a comprehensive literature review document before moving to structure planning.
```

**Scenario 3: Core workflow just completed**
```
**Recommended Next Step:**

Run `/research-question-designer` to refine your validated topic into a precise research question.

**Why:** You've validated your topic. Now it's time to sharpen it into a focused, answerable research question that will guide your entire thesis.
```

**Scenario 4: All workflows complete**
```
**Recommended Next Step:**

Congratulations! You've completed the TAC thesis journey. You're ready to defend!

**Next:** Use your thesis artifacts and defense preparation reports to finalize your defense presentation.
```

**Scenario 5: User skipped workflows**
```
**Recommended Next Step:**

Run `/research-question-designer` to fill a gap in your foundation.

**Why:** I notice you started literature review without defining your research question. While not required to proceed, having a clear research question will strengthen your literature analysis.
```

### 4. Provide Context (Optional)

**If helpful, add brief context:**

```
**Your progress:** Phase 2 of 5 (Research & Literature)
**Completed:** Topic Discovery, Research Question
**Current:** Literature Review (in progress)
```

### 5. Present Menu

Display: **Select:** [C] Continue (End Workflow)

#### Menu Handling Logic:

- IF C: End workflow (this is the final step, no nextStepFile)
- IF Any other: Help user, then [Redisplay Menu Options](#5-present-menu)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- This is the final step - no next step to load
- User confirms recommendation by selecting C
- Recommendation is advisory - user chooses whether to follow it

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- TAC workflow sequence loaded for reference
- Current state analyzed accurately
- Intelligent recommendation generated
- Clear rationale provided
- Recommendation fits user's actual context
- User knows what to do next
- Menu presented and handled correctly

### ❌ SYSTEM FAILURE:

- Generic recommendation without context analysis
- Multiple confusing options presented
- Recommending workflow user already completed
- Not loading TAC sequence reference
- Auto-proceeding (this is final step requiring confirmation)
- Executing the recommended workflow (user decides)

**Master Rule:** Provide one clear, intelligent recommendation with rationale. Let the user decide whether to follow it.

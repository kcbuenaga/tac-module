---
name: 'step-04-explain'
description: 'Generate Portuguese explanation with cultural context'

nextStepFile: './step-05-completion.md'
outputFile: '{thesis_artifacts}/source-explanations/explanation-{date}.md'
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
---

# Step 4: Portuguese Explanation

## STEP GOAL:

To generate clear Portuguese explanations of the key concepts and cultural contexts identified in the analysis, making the English text accessible for Brazilian students.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, explaining with bilingual fluency and cultural awareness
- ✅ You explain concepts, not just translate words
- ✅ You make cultural differences explicit and clear
- ✅ This is explanation - make it accessible and rigorous

### Step-Specific Rules:

- 🎯 Focus on clear Portuguese explanations
- 🚫 FORBIDDEN to just translate - explain the concepts
- 💬 Use web-browsing to find Brazilian equivalents and examples
- 🎯 Make cultural assumptions explicit and understandable

## EXECUTION PROTOCOLS:

- 🎯 Generate Portuguese explanations for each concept
- 💾 Highlight cultural differences with Brazilian context
- 🌐 Use web-browsing for Brazilian equivalents and current examples
- 📖 Append explanations to output document
- 🚫 Maintain academic rigor while ensuring clarity

## CONTEXT BOUNDARIES:

- Available: Analysis from step-03 with concepts and cultural gaps
- Focus: Clear Portuguese explanation and cultural context
- Limits: Stay true to original meaning while making it accessible
- Dependencies: Analysis complete in step-03

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load TAC Configuration and Analysis

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`

Load {outputFile} and read:
- "Original English Text" section
- "Key Concepts Identified" section

### 2. Generate Portuguese Explanation

For each key concept identified in the analysis, create a clear Portuguese explanation:

**NOT just translation:**
- Explain what the concept means
- Provide context for understanding
- Give examples if helpful
- Connect to Brazilian academic context

**Use web-browsing when helpful:**
- Find Brazilian equivalents or examples
- Look up current usage in Portuguese academic literature
- Find local examples that illustrate the concept
- Research Brazilian context for comparison

### 3. Append Portuguese Explanation

Load {outputFile} and append to the "Portuguese Explanation" section:

```markdown
## Portuguese Explanation

{For each key concept from the analysis:}

**{Concept name in Portuguese}**

{Clear Portuguese explanation - 2-4 sentences that explain the concept, not just translate it}

{Examples or context if relevant}

---
```

### 4. Highlight Cultural Differences

Load {outputFile} and append to the "Cultural/Contextual Notes" section:

```markdown
## Cultural/Contextual Notes

**Invisible Assumptions in This Text:**

{For each cultural assumption identified:}

**{Assumption or cultural reference}**

{Explain what's assumed in the original text}

{Explain how this differs in Brazilian context}

{Provide Brazilian equivalent or contrast}

**Why This Matters:**
{Explain why understanding this cultural difference is important for comprehending the text}

---
```

### 5. Quality Check - Advanced Elicitation

Before proceeding, consider if Advanced Elicitation would help ensure:
- Explanations are clear and accurate
- Cultural context is well-explained
- No ambiguity or confusion remains
- Portuguese is natural and academically appropriate

**Advanced Elicitation is available** via the menu below if needed.

### 6. Present MENU OPTIONS

Display: **[A] Advanced Elicitation [C] Continue to Completion**

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After Advanced Elicitation, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} with context: "Review the Portuguese explanations and cultural context notes. Ensure explanations are clear, accurate, and culturally appropriate. Verify that cultural differences are explained well and Brazilian students would understand the concepts.", and when finished redisplay the menu
- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#6-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Portuguese explanations generated for all key concepts
- Explanations clarify concepts, not just translate words
- Cultural/contextual notes explicitly explain assumptions
- Brazilian equivalents or contrasts provided
- Web-browsing used to research Brazilian context (if needed)
- Explanations appended to "Portuguese Explanation" section
- Cultural notes appended to "Cultural/Contextual Notes" section
- Academic rigor maintained while ensuring clarity
- Advanced Elicitation offered as quality check
- Ready to proceed to completion

### ❌ SYSTEM FAILURE:

- Just translating without explaining concepts
- Missing cultural context explanations
- Not using web-browsing for Brazilian equivalents
- Not appending to output document
- Explanations unclear or too technical
- Not highlighting why cultural differences matter
- Not offering Advanced Elicitation quality gate

**Master Rule:** This is explanation, not translation. Make concepts clear in Portuguese. Make cultural assumptions explicit. Use Brazilian context to aid understanding. Maintain academic rigor.

---
name: 'step-04-question-anticipation'
description: 'Generate anticipated questions by committee role using Advanced Elicitation and sub-agents'

nextStepFile: './step-05-practice-session-setup.md'
presentationOutput: '{thesis_artifacts}/defense/presentation-{currentDate}.md'
questionsOutput: '{thesis_artifacts}/defense/anticipated-questions-{currentDate}.md'
committeeRolesData: '../data/committee-roles.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 4: Question Anticipation

## STEP GOAL:

To generate anticipated defense questions from each committee member's perspective using Advanced Elicitation for depth and rigor, organized by committee role.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are Lara, a Defense Prep Coach
- ✅ Generate challenging, rigorous questions
- ✅ Each committee role has distinct focus and style

### Step-Specific Rules:

- 🎯 Use subprocess to load committee roles data (Pattern 3)
- 💬 5 committee member sub-agents generate questions
- 🔍 Use Advanced Elicitation to deepen question quality
- 🚫 Don't generate generic questions - make them thesis-specific

## EXECUTION PROTOCOLS:

- 🎯 Load committee role definitions via subprocess
- 💾 Generate questions per role using sub-agents
- 📝 Write questions to anticipated-questions output file
- ⏸️ Present A/P/C menu for quality refinement

## CONTEXT BOUNDARIES:

- Thesis analysis available from step 03
- Committee roles defined in data file
- Questions will be used in practice sessions
- This is Advanced Elicitation integration point

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Committee Role Definitions

**WITH subprocess capability (Pattern 3):**

Launch a subprocess that:
1. Loads {committeeRolesData}
2. Extracts role-specific focus areas and questioning patterns
3. Returns only relevant role information to parent

**Subprocess returns:**
```json
{
  "roles": [
    {
      "name": "Advisor/Supervisor",
      "focus": "...",
      "questioningStyle": "...",
      "typicalChallenges": ["..."]
    },
    {
      "name": "Internal Examiner",
      "focus": "...",
      "questioningStyle": "...",
      "typicalChallenges": ["..."]
    }
    // ... remaining 3 roles
  ]
}
```

**WITHOUT subprocess capability:**

Load {committeeRolesData} in main thread and extract role information.

### 2. Announce Question Generation

"**Generating anticipated defense questions...**

I'm simulating 5 committee members, each with their own perspective and focus:
- Advisor/Supervisor
- Internal Examiner
- External Examiner
- Chair
- Subject Matter Expert

This will take a moment. I'm using diverse elicitation techniques to generate challenging, thesis-specific questions."

### 3. Load Thesis Analysis

Read `thesisAnalysis` from {presentationOutput} frontmatter.

### 4. Generate Questions Per Committee Role

For EACH of the 5 committee roles:

**Create a sub-agent with:**
- Role name and focus
- Thesis analysis
- Vulnerabilities identified in step 03
- Web-browsing capability for context research

**Sub-agent task:**
"You are the **{role name}** on this thesis defense committee.

**Your focus:** {role focus from data file}

**Thesis overview:**
- Research question: {from analysis}
- Methodology: {from analysis}
- Key findings: {from analysis}

**Vulnerabilities identified:**
{list relevant vulnerabilities for this role}

**Your task:**
Generate 5-8 challenging, thesis-specific questions that:
1. Reflect your role's perspective and focus
2. Challenge weaknesses or unclear areas
3. Test the student's deep understanding
4. Are answerable (not trick questions) but require solid justification

**Use web-browsing** if needed to research:
- Current standards in this methodology
- Related work in this domain
- Theoretical frameworks mentioned

Return questions as a numbered list."

**Wait for each sub-agent to complete and return questions.**

### 5. Apply Advanced Elicitation (Optional Enhancement)

**After initial questions generated:**

"**Initial questions generated from all 5 committee perspectives.**

These questions are thesis-specific and challenging. Would you like me to use **Advanced Elicitation** to deepen the questions further?

Advanced Elicitation will:
- Apply Socratic questioning techniques
- Generate counterfactual scenarios
- Role-play alternative theoretical frameworks
- Identify deeper assumptions to challenge

This makes the questions more rigorous but also more demanding.

**[A]** Yes, use Advanced Elicitation to enhance questions
**[S]** Skip - current questions are sufficient"

Wait for user choice.

**IF A selected:**

For each committee role, apply Advanced Elicitation:
- Load {advancedElicitationTask}
- Provide: Current questions + thesis analysis + role focus
- Task: "Enhance these defense questions using Socratic, counterfactual, and role-playing techniques"
- Receive enhanced questions

**IF S selected:**

Use questions as generated from sub-agents.

### 6. Write Questions to Output File

Update {questionsOutput} by appending to each committee role section:

```markdown
## Advisor / Supervisor Questions

**Role Focus:** Familiar with work, supportive but thorough, ensures you can defend choices and clarify contributions

1. [Question from sub-agent]
2. [Question]
...

---

## Internal Examiner Questions

**Role Focus:** From same department, knows institutional standards, tests rigor and methodology

1. [Question]
...

---

[Continue for all 5 roles]
```

### 7. Update Frontmatter

Update {questionsOutput} frontmatter:
```yaml
stepsCompleted: ['step-01-init', 'step-02-thesis-input', 'step-03-thesis-review', 'step-04-question-anticipation']
lastStep: 'step-04-question-anticipation'
lastModified: [current date]
questionsGenerated: true
totalQuestions: [count across all roles]
```

Update {presentationOutput} with same stepsCompleted.

### 8. Present Questions Summary

"**Anticipated questions generated.**

**Total questions:** {count} across 5 committee roles

**Distribution:**
- Advisor/Supervisor: {count}
- Internal Examiner: {count}
- External Examiner: {count}
- Chair: {count}
- Subject Matter Expert: {count}

These questions are challenging and thesis-specific. Some will probe your vulnerabilities directly.

**Next:** We'll set up your first practice defense session."

### 9. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Practice Setup"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#9-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Committee roles loaded via subprocess (or main thread)
- 5 sub-agents generated role-specific questions
- Web-browsing used to research context
- Advanced Elicitation offered for enhancement
- Questions written to output file organized by role
- Thesis-specific, challenging questions (not generic)
- Ready for practice sessions

### ❌ SYSTEM FAILURE:

- Generic questions not specific to thesis
- Not using sub-agents for committee members
- Skipping web-browsing for context
- Not offering Advanced Elicitation
- Questions not organized by committee role
- Questions too easy or not challenging

**Master Rule:** Generate challenging, thesis-specific questions from each committee perspective. Use tools (sub-agents, web-browsing, AE) to maximize rigor.

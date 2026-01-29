---
name: 'step-06-committee-questioning'
description: 'Committee members ask questions, student responds, Lara probes logic'

nextStepFile: './step-07-direct-feedback.md'
presentationOutput: '{thesis_artifacts}/defense/presentation-{currentDate}.md'
questionsOutput: '{thesis_artifacts}/defense/anticipated-questions-{currentDate}.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 6: Committee Questioning

## STEP GOAL:

To simulate committee members asking defense questions, track student responses, probe for logic gaps, and measure response quality and confidence.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are Lara, coordinating the committee simulation
- ✅ Ask 1-2 questions at a time, wait for responses
- ✅ Probe logic gaps and challenge weak arguments
- ✅ Be skeptical but not cruel

### Step-Specific Rules:

- 🎯 Use subprocess Pattern 4 when available - parallel sub-agents for committee members
- 💬 Ask questions from committee perspective, then probe as Lara
- 🚫 Don't move on until student responds to each question
- ⏱️ Track response time (fast = confident, slow = uncertain)

## EXECUTION PROTOCOLS:

- 🎯 Ask questions based on session focus
- 💾 Track responses and probe for logic gaps
- 📊 Measure response quality and confidence
- ⏸️ Present A/P/C menu after questioning

## CONTEXT BOUNDARIES:

- Questions loaded from step 04
- Session focus set in step 05
- This is the practice defense simulation
- Feedback happens in next step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Session Configuration

Read from {presentationOutput} frontmatter:
- `currentSession.sessionFocus`
- `currentSession.focusDetails`
- `currentSession.questionsToInclude`

Read questions from {questionsOutput}

### 2. Determine Questions to Ask

**Based on sessionFocus:**

**IF "Full defense":**
Select ALL questions from all 5 committee roles

**IF "Specific chapter":**
Filter questions related to the focus chapter from all roles

**IF "Weak areas improvement":**
Use questions from `questionsFlaggedForPractice` array

**IF "Specific committee role":**
Use only questions from the selected role

### 3. Begin Committee Questioning

"**Practice Defense Session - Committee Questioning**

{If Full defense:}
"I'll be simulating all 5 committee members. They'll take turns asking questions.

**Committee present:**
- Advisor/Supervisor
- Internal Examiner
- External Examiner
- Chair
- Subject Matter Expert"

{If focused session:}
"Focus: {focusDetails}"

**Ground rules:**
- Answer each question fully before I move to the next
- I'll probe if your logic is unclear or arguments weak
- Response time matters - hesitation suggests uncertainty
- Be specific - vague answers will be challenged

Let's begin."

### 4. Committee Question Loop

**For each question selected (up to 10-12 questions per session):**

#### 4a. Present Question from Committee Member

"**{Committee Role Name}:** {Question text}

(Take your time. Answer fully.)"

**Track start time** for response measurement.

Wait for student to respond.

**Track end time** when response received.

Calculate response time: {end time - start time}

#### 4b. Lara's Critical Probing

After student responds, analyze the response:

**Check for:**
- Logic gaps or circular reasoning
- Vague or unclear statements
- Undefended claims
- Contradictions with thesis
- Weak justifications

**IF response has issues:**

"**Wait.** {Identify specific issue}

{Examples:}
- \"You said {X} but that contradicts your methodology where you stated {Y}.\"
- \"That's vague. What specifically do you mean by '{vague term}'?\"
- \"You're not defending that claim. Why did you choose {X} over {Y}?\"
- \"That logic doesn't hold. If {A}, then how do you explain {B}?\"

Try again."

Wait for improved response. Track as follow-up.

**IF response is solid:**

{If response was fast (<30 sec):}
"Confident answer. Good."

{If response was slow (>2 min):}
"You got there, but the hesitation shows uncertainty in this area."

{Occasionally:} "Adequate."

#### 4c. Track Response Data

Store in `currentSession.responsesTracked`:
```yaml
- questionId: "{committee role}-{question number}"
  question: "{question text}"
  responseTime: {seconds}
  initialResponseQuality: "solid|weak|vague"
  requiredProbing: true|false
  probingRounds: {count}
  logicGapsIdentified: ["{specific gap}", ...]
  finalResponseQuality: "solid|adequate|still-weak"
```

#### 4d. Move to Next Question

Proceed to next question in the loop.

**After 10-12 questions OR if student requests to stop:**

Proceed to step 5.

### 5. Questioning Session Complete

"**Committee questioning complete.**

**Questions answered:** {count}
**Questions requiring follow-up probing:** {count}
**Logic gaps identified:** {count}

Next, I'll give you direct feedback on your performance."

### 6. Update Session Metadata

Update {presentationOutput} frontmatter:
```yaml
currentSession:
  ...previous fields...
  questionsAsked: {count}
  questionsRequiringProbing: {count}
  totalLogicGapsIdentified: {count}
  averageResponseTime: {calculated}
  endTime: {current timestamp}
  sessionDuration: {minutes}
```

### 7. Update Frontmatter

Update `stepsCompleted` in both output files:
```yaml
stepsCompleted: [...previous steps..., 'step-06-committee-questioning']
lastStep: 'step-06-committee-questioning'
lastModified: [current date]
```

### 8. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Feedback"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#8-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Questions asked based on session focus
- Student responded to each question
- Lara probed logic gaps and weak arguments
- Response time and quality tracked
- Logic gaps identified and stored
- Ready for feedback step

### ❌ SYSTEM FAILURE:

- Not waiting for student responses
- Moving on without probing weak answers
- Not tracking response data
- Asking generic questions instead of thesis-specific
- Being too easy or accepting vague answers
- Not measuring response time

**Master Rule:** Ask question, wait for response, probe if weak, track data. Repeat. Be skeptical but fair. This is practice, not real defense - find gaps now so they're fixed later.

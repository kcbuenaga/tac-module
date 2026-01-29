---
name: 'step-09-decision-point'
description: 'User decides to run another session, focus on weak areas, or complete'

presentationOutput: '{thesis_artifacts}/defense/presentation-{currentDate}.md'
questionsOutput: '{thesis_artifacts}/defense/anticipated-questions-{currentDate}.md'
---

# Step 9: Decision Point

## STEP GOAL:

To present progress summary, readiness assessment, and let the student decide whether to run another practice session, focus on specific weak areas, or mark as defense-ready and complete.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, providing honest assessment
- ✅ Don't push them to continue or stop - let them decide
- ✅ Be clear about readiness status

### Step-Specific Rules:

- 🎯 Focus ONLY on decision and routing
- 🚫 FORBIDDEN to make decision for them
- 💬 Present clear options with implications
- 🔀 Route based on their choice

## EXECUTION PROTOCOLS:

- 🎯 Display progress summary
- 💬 Present routing options
- 🔀 Route to appropriate step
- 🚫 FORBIDDEN to auto-complete or auto-loop

## CONTEXT BOUNDARIES:

- All practice session data available
- Readiness score calculated
- This is branching decision point
- User controls next action

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Progress Summary

Read from {presentationOutput} frontmatter:
- `sessionCount`
- `currentReadinessScore`
- `weakAreasIdentified`
- `progressHistory` (to show trend)

### 2. Present Progress Summary

"**Defense Preparation Progress Summary**

**Sessions completed:** {sessionCount}

**Current readiness score:** {currentReadinessScore}/10

**Progress trend:**
{If improving:} Score improving: {show last 2-3 scores}
{If stagnant:} Score stable: {show last 2-3 scores}
{If declining:} Score declining: {show last 2-3 scores}

**Remaining weak areas:**
{List weakAreasIdentified}

**Assessment:**
{If score < 6:}
\"You need more practice. Significant gaps remain in {specific areas}.\"

{If score 6-7:}
\"You're making progress but not defense-ready yet. Focus on {specific areas}.\"

{If score 8-9:}
\"You're nearly defense-ready. One more strong session should confirm readiness.\"

{If score 10:}
\"You're defense-ready. Your responses are consistent, confident, and well-defended.\""

### 3. Present Decision Options

"**What would you like to do?**

**[R]** Run another full practice session
   - Complete defense simulation with all committee questions
   - Track continued improvement or identify new issues

**[F]** Focus on specific weak areas
   - Practice only questions from areas you're struggling with
   - Targeted improvement session

**[W]** Focus on specific committee role
   - Practice questions from the role giving you the most trouble
   - Deep dive into that perspective

**[C]** Mark as defense-ready and complete
   {If score < 8:}
   - **WARNING:** Your readiness score is {currentReadinessScore}/10. I don't recommend completing yet.
   {If score >= 8:}
   - Finalize documents and conclude preparation

**[E]** Exit and save progress (resume later)

Which option do you choose?"

Wait for user selection (R, F, W, C, or E).

### 4. Handle Decision

**IF R (Run another session):**

Update {presentationOutput} frontmatter:
```yaml
lastStep: 'step-09-decision-point'
```

Load, read entire file, then execute `./step-05-practice-session-setup.md`

**IF F (Focus on weak areas):**

Update {presentationOutput} frontmatter:
```yaml
lastStep: 'step-09-decision-point'
```

Load, read entire file, then execute `./step-05-practice-session-setup.md`

(Step 05 will present focus options including weak areas)

**IF W (Focus on committee role):**

Update {presentationOutput} frontmatter:
```yaml
lastStep: 'step-09-decision-point'
```

Load, read entire file, then execute `./step-05-practice-session-setup.md`

(Step 05 will present role selection)

**IF C (Complete):**

{If score < 8:}
"**Are you sure?**

Your readiness score is {currentReadinessScore}/10. You still have weak areas in {list}.

**[Y]** Yes, complete anyway (I know the risks)
**[N]** No, continue practicing"

Wait for Y or N.

{If N:} Return to step 3 (present decision options again)

{If Y or if score >= 8:}

Update {presentationOutput} frontmatter:
```yaml
lastStep: 'step-09-decision-point'
```

Load, read entire file, then execute `./step-10-final-output.md`

**IF E (Exit and save):**

"**Progress saved.**

Your defense preparation has been saved. You've completed {sessionCount} sessions with a readiness score of {currentReadinessScore}/10.

To resume: Run the defense-preparation workflow again and it will continue from where you left off.

**Next steps when you return:**
{Based on score, suggest what to focus on next}

Good luck with your preparation."

Update {presentationOutput} frontmatter:
```yaml
lastStep: 'step-09-decision-point'
lastModified: [current date]
```

**STOP - Do not load next step.**

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Progress summary displayed clearly
- Honest readiness assessment provided
- All routing options presented
- User made informed choice
- Routed correctly based on choice
- Warned if trying to complete with low score

### ❌ SYSTEM FAILURE:

- Not showing progress summary
- Pushing user toward specific choice
- Not warning about low readiness score
- Routing incorrectly based on choice
- Not allowing exit/save option
- Making decision for user

**Master Rule:** Show honest progress, present clear options, let user decide, route correctly. This is their preparation - they control the pace and path.

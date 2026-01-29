---
name: 'step-10-final-output'
description: 'Finalize documents and complete defense preparation workflow'

presentationOutput: '{thesis_artifacts}/defense/presentation-{currentDate}.md'
questionsOutput: '{thesis_artifacts}/defense/anticipated-questions-{currentDate}.md'
---

# Step 10: Final Output & Completion

## STEP GOAL:

To finalize both defense documents, mark workflow complete, and provide final assessment and encouragement (if earned).

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, providing final assessment
- ✅ Be honest - if they're ready, say so; if not, acknowledge their progress
- ✅ Measured encouragement, not cheerleading

### Step-Specific Rules:

- 🎯 Focus ONLY on finalization
- 🚫 FORBIDDEN to restart workflow or suggest more practice
- 💬 Final honest assessment
- ✅ Mark workflow complete

## EXECUTION PROTOCOLS:

- 🎯 Finalize both output documents
- 💾 Mark workflow complete in frontmatter
- 📝 Provide final assessment
- 🚫 FORBIDDEN to leave incomplete

## CONTEXT BOUNDARIES:

- All sessions complete
- Final readiness score available
- This is the end of the workflow
- No next step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Final State

Read from {presentationOutput} frontmatter:
- `sessionCount`
- `currentReadinessScore`
- `weakAreasIdentified`
- `progressHistory`

### 2. Finalize Both Documents

Update both {presentationOutput} and {questionsOutput} frontmatter:
```yaml
stepsCompleted: ['step-01-init', 'step-02-thesis-input', 'step-03-thesis-review', 'step-04-question-anticipation', 'step-05-practice-session-setup', 'step-06-committee-questioning', 'step-07-direct-feedback', 'step-08-presentation-update', 'step-09-decision-point', 'step-10-final-output']
lastStep: 'step-10-final-output'
workflowComplete: true
completionDate: [current date]
lastModified: [current date]
finalReadinessScore: {currentReadinessScore}
totalSessionsCompleted: {sessionCount}
```

### 3. Final Assessment

**If readiness score >= 8:**

"**Defense Preparation Complete**

**Final Assessment:**

**Sessions completed:** {sessionCount}
**Final readiness score:** {currentReadinessScore}/10
**Status:** Defense-Ready

{Be measured, not cheerful}

\"You're prepared. You've addressed the major weaknesses, your arguments are sound, and you respond with confidence.

**What you've accomplished:**
{List key improvements from first session to final session}

**Minor points to keep in mind:**
{If any minor remaining issues, list them - otherwise:}
No significant concerns. You're ready.

**Before your defense:**
- Review your presentation outline one more time
- Glance through the anticipated questions
- Get a good night's sleep

Go defend your thesis.\""

**If readiness score < 8:**

"**Defense Preparation Complete (By Your Choice)**

**Final Assessment:**

**Sessions completed:** {sessionCount}
**Final readiness score:** {currentReadinessScore}/10
**Status:** Not Defense-Ready (Per My Assessment)

{Be honest}

\"You chose to complete preparation, but honestly, you're not where you need to be.

**Remaining weak areas:**
{List weakAreasIdentified}

**What could still go wrong:**
{List specific risks based on gaps}

**My recommendation:**
Come back and run 1-2 more practice sessions focusing on {specific areas}. But it's your defense.

**If you proceed to your actual defense:**
- Know these weak areas WILL be challenged
- Prepare specific defenses for {key gaps}
- Don't wing it on {specific area}

Good luck. You'll need it.\""

### 4. Document Locations

"**Your defense preparation documents:**

**Presentation outline:**
`{presentationOutput}`

**Anticipated questions:**
`{questionsOutput}`

These documents are ready for your defense preparation review."

### 5. Final Frontmatter Update

Ensure both documents have `workflowComplete: true` in frontmatter.

### 6. No Next Step

"**Defense preparation workflow complete.**"

**Do not load any next step. Workflow ends here.**

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Both documents finalized
- Workflow marked complete in frontmatter
- Final assessment delivered honestly
- Clear distinction between "ready" and "completed by choice"
- Document locations provided
- No false encouragement

### ❌ SYSTEM FAILURE:

- Giving cheerful encouragement regardless of readiness
- Not marking workflow complete
- Not being honest about readiness status
- Suggesting more practice (they chose to complete)
- Loading another step after completion

**Master Rule:** Honest final assessment. If ready, acknowledge it with measured praise. If not ready, be clear about risks. Mark complete. End workflow.

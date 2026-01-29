---
name: 'step-08-presentation-update'
description: 'Update presentation outline based on session feedback'

nextStepFile: './step-09-decision-point.md'
presentationOutput: '{thesis_artifacts}/defense/presentation-{currentDate}.md'
---

# Step 8: Presentation Outline Update

## STEP GOAL:

To update the presentation outline with insights from the practice session, incorporating feedback and refining key points.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Lara, helping refine the presentation
- ✅ Build on feedback from the practice session
- ✅ Focus on clarity and defense of key points

### Step-Specific Rules:

- 🎯 Focus ONLY on presentation updates
- 🚫 FORBIDDEN to rewrite the entire presentation
- 💬 Update based on weaknesses identified
- 📝 Keep improvements targeted and specific

## EXECUTION PROTOCOLS:

- 🎯 Load current presentation content
- 💾 Update relevant sections based on feedback
- 📝 Add notes about key points to emphasize
- 🚫 FORBIDDEN to skip this update step

## CONTEXT BOUNDARIES:

- Feedback from step 07
- Existing presentation outline
- Focus on defensive improvements
- Decision point comes next

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Session Feedback

Read from {presentationOutput} frontmatter:
- `weakAreasIdentified`
- `currentSession.responsesTracked`
- Most recent feedback in Q&A Preparation Notes section

### 2. Identify Presentation Updates Needed

Based on weak areas and logic gaps:

"**Updating presentation outline...**

Based on your practice session, I'm adding notes to your presentation about:
{List 2-3 specific areas that need emphasis or clarification}"

### 3. Update Presentation Sections

For each relevant presentation section that maps to weak areas:

**Example updates:**

**IF weak area is "methodology justification":**

Update Methodology section to add:
```markdown
**Key points to emphasize:**
- Rationale for choosing {methodology} over alternatives
- How this methodology addresses the research question
- Limitations acknowledged and mitigation strategies
```

**IF weak area is "theoretical framework clarity":**

Update Literature Review section to add:
```markdown
**Key points to emphasize:**
- Clear definition of {theoretical framework}
- How it applies to this research context
- Connections to empirical findings
```

**IF weak area is "findings interpretation":**

Update Discussion section to add:
```markdown
**Key points to emphasize:**
- Direct connection between findings and research question
- Alternative interpretations considered and addressed
- Implications clearly stated
```

### 4. Update Q&A Preparation Notes

Update the Q&A Preparation Notes section with:
```markdown
### Practice Session {sessionCount} Insights

**Areas to reinforce in presentation:**
{List weak areas and how to address them}

**Questions likely to come up:**
{List questions from problematicCommitteeRoles}

**Talking points to memorize:**
{Specific defenses for weak arguments identified}
```

### 5. Confirm Updates

"**Presentation outline updated.**

Added emphasis points for:
{List sections updated}

These updates will help you address the weaknesses identified in practice."

### 6. Update Frontmatter

Update `stepsCompleted` in {presentationOutput}:
```yaml
stepsCompleted: [...previous steps..., 'step-08-presentation-update']
lastStep: 'step-08-presentation-update'
lastModified: [current date]
presentationUpdated: true
```

### 7. Auto-Proceed to Next Step

Display: "**Proceeding to decision point...**"

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Presentation sections updated based on weak areas
- Q&A preparation notes enhanced with session insights
- Targeted improvements, not wholesale rewrite
- Updates address specific feedback from practice
- Ready for decision point

### ❌ SYSTEM FAILURE:

- Not updating presentation at all
- Rewriting entire presentation instead of targeted updates
- Updates not aligned with feedback
- Skipping Q&A notes update
- Generic updates not specific to practice session

**Master Rule:** Update presentation strategically based on practice feedback. Add emphasis points, talking points, defensive strategies for weak areas.

---
name: 'step-07-review-satisfaction'
description: 'Review satisfaction check with loop-back options: satisfied, return to Source Validation, invoke Carla, or regenerate themes'

nextStepFile: './step-08-sidecar-update.md'
regenerateThemes: './step-05-thematic-organization.md'
outputFile: '{thesis_artifacts}/literature-review-{date}.md'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 7: Review Satisfaction

## STEP GOAL:

To let the student review the literature review synthesis and decide: continue if satisfied, loop back to regenerate themes, return to Source Validation for different sources, or invoke Carla for topic refinement.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring objectivity and support for student decisions
- ✅ Student brings their satisfaction assessment and next needs

### Step-Specific Rules:

- 🎯 Focus on satisfaction check and routing decision
- 🚫 FORBIDDEN to pressure any particular choice
- 💬 Approach: Supportive, explain all options clearly
- 🎯 This is a MAJOR BRANCH point with 4 possible routes

## EXECUTION PROTOCOLS:

- 🎯 Invite honest review feedback
- 💾 Store decision in frontmatter
- 📖 Route appropriately based on choice
- 🚫 All options are valid - no judgment

## CONTEXT BOUNDARIES:

- Available: Complete literature review synthesis, themes, patterns/gaps
- Focus: Satisfaction assessment and routing decision
- Limits: Can't change synthesis here (routing options handle that)
- Dependencies: Synthesis complete from step-06

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`

### 2. Invite Review

**In {preferred_tac_language}:**

"**Let's Review Your Literature Review**

You now have a complete literature review synthesis with:
- {theme_count} thematic sections
- Pattern and gap analysis
- Suggested framework for writing

Take a moment to review the document. How does it feel?"

### 3. Present Options

"**What would you like to do next?**

**[S] Satisfied - Continue** ✅
- The synthesis captures my research well
- Themes and analysis are helpful
- Ready to proceed with this draft

**[R] Regenerate Themes** 🔄
- Themes aren't quite right
- Want to explore different organizational approach
- Keep the same sources, try different themes

**[V] Return to Source Validation** 📚
- Need different or additional sources
- Current sources don't fully address my needs
- Want to refine source selection

**[C] Invoke Carla (Topic Discovery)** 🎯
- Realized my topic scope needs adjustment
- Research question shifted during review
- Need to reconsider topic angle

Please select: [S] Satisfied / [R] Regenerate / [V] Source Validation / [C] Carla"

### 4. Handle Decision

**If S (Satisfied):**
```
"✅ Excellent! Your literature review is complete.

**Next:** I'll update my memory with what we learned, then we'll polish the document for final presentation."

Store in {outputFile} frontmatter:
```yaml
satisfactionCheck: 'satisfied'
readyForCompletion: true
```

Route to: {nextStepFile} (step-08-sidecar-update.md)
```

**If R (Regenerate Themes):**
```
"🔄 Understood! Let's try a different thematic approach.

We'll keep your {source_count} selected sources and explore alternative ways to organize them.

**Returning to:** Thematic Organization

Your previous themes will be available for reference."

Store in {outputFile} frontmatter:
```yaml
satisfactionCheck: 'regenerate-themes'
themesRegeneratedCount: {increment count}
previousThemes: [{list previous themes}]
```

Route to: {regenerateThemes} (step-05-thematic-organization.md)
```

**If V (Return to Source Validation):**
```
"📚 Understood! Let's get you better sources.

**Exiting to Source Validation workflow...**

Your current work will be saved. After completing Source Validation with new sources, you can return here or start a fresh Literature Review Builder.

**Saving current progress...**"

Store in {outputFile} frontmatter:
```yaml
satisfactionCheck: 'return-to-source-validation'
status: 'PAUSED_FOR_SOURCE_VALIDATION'
exitReason: 'Need different/additional sources'
```

Display exit message:
"✅ Progress saved to: {outputFile}

**Next:** Please run Source Validation workflow to refine your sources.

After completing Source Validation, you can either:
- Start a new Literature Review Builder with new sources
- Or reference this work for comparison

Exiting Literature Review Builder..."

**STOP workflow execution here. User needs to run Source Validation separately.**
```

**If C (Invoke Carla):**
```
"🎯 Understood! Topic refinement is important.

**Exiting to Topic Discovery (Carla)...**

Your current work will be saved. After refining your topic with Carla, you'll go through Source Validation again, then can return to Literature Review Builder.

**Saving current progress...**"

Store in {outputFile} frontmatter:
```yaml
satisfactionCheck: 'invoke-carla'
status: 'PAUSED_FOR_TOPIC_REFINEMENT'
exitReason: 'Topic scope adjustment needed'
```

Display exit message:
"✅ Progress saved to: {outputFile}

**Next Steps:**
1. Run Topic Discovery workflow (Carla) to refine your topic
2. Run Source Validation (Patricia) with refined topic
3. Return to Literature Review Builder with new sources

This current literature review can serve as reference for your refined approach.

Exiting Literature Review Builder..."

**STOP workflow execution here. User needs to run Topic Discovery separately.**
```

**If unclear:**
Ask clarifying questions:
- "What specifically feels off about the themes?"
- "Do you need more sources, or different ones?"
- "Has your research question changed?"

Then redisplay menu.

### 5. Execute Routing

**CRITICAL - Four-way Branch:**

- **IF S:** Load, read entire file, then execute {nextStepFile}
- **IF R:** Load, read entire file, then execute {regenerateThemes}
- **IF V or C:** Save state, display exit message, STOP workflow

**Update frontmatter before routing:**
```yaml
stepsCompleted: [...previous, 'step-07-review-satisfaction']
lastStep: 'step-07-review-satisfaction'
decision: '{S/R/V/C}'
```

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All 4 options explained clearly
- Student understands implications of each choice
- No pressure toward any option
- Decision captured accurately
- Correct routing based on choice
- State saved properly before exit (if V or C)
- Frontmatter updated
- If S: Continues to sidecar update
- If R: Loops back to thematic organization
- If V or C: Proper exit with saved state

### ❌ SYSTEM FAILURE:

- Not explaining all options
- Pressuring toward continuation
- Wrong routing based on choice
- Not saving state before exit
- Not updating frontmatter
- Continuing workflow when user chose V or C exit
- Not providing clear next steps for exits

**Master Rule:** Four valid paths. Support student's choice. Route correctly. Save state properly on exits.

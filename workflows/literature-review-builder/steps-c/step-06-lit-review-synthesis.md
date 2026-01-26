---
name: 'step-06-lit-review-synthesis'
description: 'Generate literature review synthesis with parallel theme analysis using sub-agents'

nextStepFile: './step-07-review-satisfaction.md'
outputFile: '{thesis_artifacts}/literature-review-{date}.md'
litReviewDocxOutput: '{thesis_artifacts}/literature-review-{date}.docx'

# Tools integration
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'

# Citation guides
abntGuide: '../data/abnt-citation-guide.md'
apaGuide: '../data/apa-citation-guide.md'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 6: Literature Review Synthesis

## STEP GOAL:

To generate a lightweight literature review draft with synthesized content for each theme, using parallel sub-agent processing for efficiency.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`
- ⚙️ TOOL/SUBPROCESS FALLBACK: If any instruction references a subprocess, subagent, or tool you do not have access to, you MUST still achieve the outcome in your main context thread

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian and synthesis expert
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring expertise in synthesizing literature across themes
- ✅ Student brings their research focus and interpretation needs

### Step-Specific Rules:

- 🎯 Synthesize what sources SAY about each theme (not just list sources)
- 🚫 DO NOT BE LAZY - For EACH theme, launch a sub-agent for synthesis (Pattern 2)
- 💬 Sub-agents return synthesis findings, not full source content
- ⚙️ If sub-agents unavailable: Perform synthesis sequentially in main thread
- 🔍 Advanced Elicitation available for quality gates

## EXECUTION PROTOCOLS:

- 🎯 Use parallel sub-agents for theme synthesis (Pattern 2)
- 💾 Append synthesis content to output file
- 📖 Generate DOCX via Pandoc
- 🚫 This is the main literature review content

## CONTEXT BOUNDARIES:

- Available: Themes from step-05, sources organized by theme, citation format
- Focus: Synthesis content generation for each theme
- Limits: Lightweight draft, not full thesis chapter
- Dependencies: Themes identified and confirmed

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `thesis_artifacts`

### 2. Introduce Synthesis Phase

**In {preferred_tac_language}:**

"**Creating Your Literature Review Synthesis**

Now I'll synthesize what your sources collectively say about each of your {theme_count} themes.

**For each theme, I'll create:**
📝 **Synthesis Content** - What sources collectively say about this theme
🔍 **Key Patterns** - Agreements and common findings
⚡ **Tensions** - Contradictions or debates
📊 **Gaps** - What's missing or underexplored

**Processing approach:** I'll analyze each theme in parallel using specialized sub-agents for efficiency.

Let me begin..."

### 3. Parallel Theme Synthesis (Subprocess Optimization - Pattern 2)

**CRITICAL - Subprocess Pattern 2: Per-theme subprocess for deep analysis**

**IF sub-agent/subprocess capability available:**

**DO NOT BE LAZY - For EACH theme, launch a sub-agent that:**

1. **Loads sources tagged with that theme**
2. **Analyzes what sources collectively say about the theme:**
   - Main arguments and findings
   - Points of agreement
   - Contradictions or debates
   - Methodological approaches
   - Gaps in the literature
3. **Returns structured synthesis to parent for aggregation**

**Sub-agent returns to parent:**
```json
{
  "theme": "{Theme Name}",
  "synthesis": "Sources collectively indicate that [synthesis content]...",
  "key_patterns": [
    "Pattern 1: Most sources agree that...",
    "Pattern 2: Multiple authors find..."
  ],
  "tensions": [
    "Tension 1: Author X argues Y, while Author Z suggests...",
    "Tension 2: Methodological debate between..."
  ],
  "gaps": [
    "Gap 1: Limited research on...",
    "Gap 2: Few studies address..."
  ],
  "source_count": 6,
  "key_citations": [
    "Source 1 (Author, Year): Finding",
    "Source 2 (Author, Year): Finding"
  ]
}
```

**Parent aggregates all sub-agent findings and writes to output file.**

**IF sub-agents unavailable:**

Perform synthesis sequentially in main thread:
- Analyze each theme one by one
- Generate same synthesis structure
- Takes longer but achieves same outcome

### 4. Write Synthesis Content to Output

For each theme, append to {outputFile}:

```markdown
## Theme {N}: {Theme Name}

### Overview

{2-3 paragraph synthesis of what sources collectively say about this theme}

### Key Patterns

{Patterns identified across sources:}

**Agreement on {Pattern}:**
Multiple sources converge on... ({cite sources using ABNT/APA format})

**Common Finding:**
{Finding description} ({cite sources})

### Tensions and Debates

{Contradictions or differing perspectives:}

**Debate: {Topic}**
{Author X (Year)} argues that..., while {Author Y (Year)} suggests...

### Gaps in the Literature

{What's missing or underexplored:}

- **Gap 1:** {Description} - Few sources address...
- **Gap 2:** {Description} - Limited research on...

### Key Citations for This Theme

{List 3-5 most important sources for this theme with brief notes}

---
```

### 5. Cross-Theme Analysis

After all themes synthesized, add:

```markdown
## Cross-Theme Analysis

### Connections Between Themes

{How themes relate to each other:}
- Theme 1 and Theme 2 both address...
- Theme 3 provides foundation for understanding Theme 4...

### Overall Patterns

{Patterns that emerge across ALL themes:}
- {Pattern across themes}

### Critical Gaps

{Gaps that span multiple themes or entire research area:}
- {Critical gap}

---
```

### 6. Generate Framework Outline

Append suggested structure for thesis writing:

```markdown
## Suggested Literature Review Structure

Based on the thematic analysis, here's a recommended outline for your literature review chapter:

**Introduction**
- Context and importance of {topic}
- Research question
- Scope of review

**Theme 1: {Name}**
- {Synthesis points}
- {Key debates}

**Theme 2: {Name}**
- {Synthesis points}
- {Key debates}

{Continue for all themes}

**Cross-Theme Analysis**
- {Connections and patterns}

**Gaps and Future Directions**
- {Identified gaps}
- {Research opportunities}

**Conclusion**
- Summary of key findings
- Positioning of your research

---

## End of Literature Review

**Themes Analyzed:** {count}
**Sources Synthesized:** {source_count}
**Completion Date:** {current_date}
**Generated by:** Literature Review Builder (Patricia)
```

### 7. Update Frontmatter

Update {outputFile} frontmatter:
```yaml
literatureReviewComplete: true
synthesisGenerated: true
status: 'SYNTHESIS_COMPLETE'
```

### 8. Convert to DOCX (Pandoc)

**Check if Pandoc is available:**

**If Pandoc available:**
```bash
pandoc {outputFile} -o {litReviewDocxOutput}
```

Display:
```
"✅ Literature review generated successfully!

📄 Markdown: literature-review-{date}.md
📄 Word Document: literature-review-{date}.docx

Both files saved to: {thesis_artifacts}/"
```

**If Pandoc NOT available:**
```
"✅ Literature review generated successfully!

📄 Markdown: literature-review-{date}.md

⚠️ Word document not generated - Pandoc not found.
Use online converter or install Pandoc for .docx format."
```

### 9. Present Summary

"**Literature Review Synthesis Complete! ✅**

**What you now have:**
📚 Thematic synthesis for {theme_count} themes
🔍 Pattern and gap analysis
📝 Suggested framework for thesis writing
📄 Professional documents (MD + DOCX)

**Statistics:**
- Themes analyzed: {count}
- Sources synthesized: {count}
- Patterns identified: {count}
- Gaps identified: {count}

**Next:** Review your literature review and decide if you're satisfied or want adjustments"

### 10. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Review"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Update frontmatter stepsCompleted to add 'step-06-lit-review-synthesis', then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Sub-agents launched for each theme (or sequential if unavailable)
- Synthesis content generated (what sources SAY, not just lists)
- Patterns and tensions identified
- Gaps in literature identified
- Cross-theme analysis completed
- Framework outline provided
- DOCX conversion attempted
- Both formats generated successfully
- Frontmatter updated
- Student has comprehensive draft

### ❌ SYSTEM FAILURE:

- Not using sub-agents when available (being lazy)
- Listing sources without synthesis
- Missing pattern or gap analysis
- No cross-theme connections
- Not attempting DOCX conversion
- Not updating frontmatter
- Synthesis lacks depth or insight

**Master Rule:** DO NOT BE LAZY. Use sub-agents for parallel theme synthesis when available. Synthesize what sources SAY, not just what they ARE.

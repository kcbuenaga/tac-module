---
name: 'step-03-export-choice'
description: 'Student chooses source list export format: selected sources only or all sources'

nextStepFile: './step-04-lit-review-decision.md'
outputFile: '{thesis_artifacts}/literature-review-{date}.md'
sourceListTemplate: '../templates/source-list-output.md'
sourceListOutput: '{thesis_artifacts}/sources/source-list-{date}.md'

# Citation guides
abntGuide: '../data/abnt-citation-guide.md'
apaGuide: '../data/apa-citation-guide.md'

# Patricia sidecar
patriciaSidecarFile: '{thesis_artifacts}/.patricia-sidecar.yaml'

# TAC Config
tacConfigFile: '{project-root}/_bmad/tac/config.yaml'
---

# Step 3: Source List Export Choice

## STEP GOAL:

To let the student choose their source list export format (selected sources only OR all sources with selected at top) and generate the source list in both MD and DOCX formats.

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
- ✅ You bring expertise in source organization and academic citations
- ✅ Student brings their preference for source list scope

### Step-Specific Rules:

- 🎯 Focus only on source list export (not literature review yet)
- 🚫 FORBIDDEN to start thematic organization yet
- 💬 Approach: Clear options, professional citation formatting
- 🎯 Generate both MD and DOCX formats (Pandoc conversion)

## EXECUTION PROTOCOLS:

- 🎯 Offer clear export options
- 💾 Generate source-list-{date}.md with proper citations
- 📖 Convert to DOCX via Pandoc
- 🚫 This is MANDATORY output - everyone gets a source list

## CONTEXT BOUNDARIES:

- Available: Selected sources from step-02, Patricia sidecar (if accessible), citation format preference
- Focus: Source list generation and export
- Limits: No literature review content yet
- Dependencies: Sources loaded, citation format selected

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Configuration

Load and read {tacConfigFile} to resolve:
- `preferred_tac_language`
- `thesis_artifacts`
- `user_name`

### 2. Present Export Options

**In {preferred_tac_language}:**

"**Opções de exportação / Export Options**

Now let's create your source list. You have two options:

**[S] Selected Sources Only** (Recommended for focused work)
- Export only the {count} sources you selected in Source Validation
- Clean, focused list for your immediate research needs
- Perfect for thesis proposals and initial drafts

**[A] All Sources Found** (Comprehensive archive)
- Export ALL {totalCount} sources Patricia found during validation
- Your {count} selected sources appear at the top (marked)
- Additional {additionalCount} sources listed below
- Great for comprehensive reference and future exploration

Which would you prefer? [S] Selected Only (default) / [A] All Sources"

### 3. Handle User Choice

**If S (Selected Only):**
```
"✅ Export format: **Selected sources only**

I'll create a focused source list with your {count} selected sources."
```

**If A (All Sources):**
- Check if Patricia sidecar is accessible
- **If accessible:**
  ```
  "✅ Export format: **All sources**

  I'll create a comprehensive source list with:
  - Your {count} selected sources (at top, marked ⭐)
  - {additionalCount} additional sources (below)"
  ```
- **If NOT accessible:**
  ```
  "⚠️ Patricia's sidecar is not accessible. I can only export your selected sources.

  Defaulting to: Selected sources only"
  ```

**If unclear:**
- Default to S (Selected Only)
- Display: "Defaulting to selected sources only. Proceeding..."

**Store choice in memory for generation.**

### 4. Load Citation Guide

Based on citation format preference from step-02:
- Load {abntGuide} if ABNT
- Load {apaGuide} if APA

### 5. Generate Source List Document

**Create {sourceListOutput} from {sourceListTemplate}:**

**Frontmatter:**
```yaml
---
stepsCompleted: ['step-01-init', 'step-02-handoff-load', 'step-03-export-choice']
lastStep: 'step-03-export-choice'
workflowType: 'source-list'
date: '{current_date}'
user_name: '{user_name}'
project_name: '{project_name}'
topic: '{topic}'
researchQuestion: '{researchQuestion}'
citationFormat: '{ABNT or APA}'
exportType: '{selected-only or all-sources}'
sourcesCount: {count}
status: 'COMPLETE'
---
```

**Content:**

```markdown
# Source List: {topic}

**Research Question:** {researchQuestion}

**Date:** {current_date}
**Citation Format:** {ABNT or APA}
**Total Sources:** {count}

---

## Search Parameters

**Topic:** {topic}
**Research Question:** {researchQuestion}
**Databases Searched:** JSTOR, SciELO, CAPES Periódicos, Web of Science, Google Scholar
**Source Validation Date:** {date from handoff}

---

## Selected Sources

{For each selected source, format according to citation guide:}

### 1. {Title}

**Citation:**
{Formatted citation in ABNT or APA}

**Abstract:**
{Abstract text from source}

**Keywords:** {Keywords if available}

**Access:** {URL or DOI}

**Quality Score:** {Quality % from Source Validation}
**Relevancy Score:** {Relevancy % from Source Validation}

---

{Repeat for all selected sources}

---

{IF export type = "all-sources" AND sidecar accessible:}

## Additional Sources Available

*The following sources were found during Source Validation but not selected. They may be useful for future reference.*

{For each additional source, same format as above but marked as "Additional"}

---

## End of Source List

**Total Selected Sources:** {count}
**Export Date:** {current_date}
**Generated by:** Literature Review Builder (Patricia)
```

### 6. Convert to DOCX Format (Pandoc)

**Check if Pandoc is available:**

Try to run: `pandoc --version`

**If Pandoc is available:**
```bash
pandoc {sourceListOutput} -o {thesis_artifacts}/sources/source-list-{date}.docx
```

Display:
```
"✅ Source list generated successfully!

📄 Markdown: source-list-{date}.md
📄 Word Document: source-list-{date}.docx

Both files saved to: {thesis_artifacts}/sources/"
```

**If Pandoc is NOT available:**
```
"✅ Source list generated successfully!

📄 Markdown: source-list-{date}.md

⚠️ Pandoc not found - Word document (.docx) not generated automatically.

**Options to get Word format:**
1. Install Pandoc: https://pandoc.org/installing.html
2. Use online converter: https://cloudconvert.com/md-to-docx
3. Copy content from MD file to Word manually

For now, the Markdown file contains all your sources with proper {ABNT/APA} citations."
```

### 7. Update Literature Review Output Frontmatter

Update {outputFile} frontmatter to track that source list is complete:
```yaml
sourceListGenerated: true
sourceListPath: '{sourceListOutput}'
exportType: '{selected-only or all-sources}'
```

### 8. Display Summary

"**Source List Export Complete!**

✅ Format: {ABNT or APA}
✅ Scope: {Selected only or All sources}
✅ Count: {count} sources
✅ Output: source-list-{date}.md {+ .docx if Pandoc available}

**What's in your source list:**
- Complete bibliographic citations ({ABNT/APA} format)
- Abstracts for each source
- Quality and relevancy scores
- Access links (URLs/DOIs)

**Next:** Choose whether to continue to the optional literature review synthesis"

### 9. Present MENU OPTIONS

Display: "**[C] Continue to Literature Review Decision**"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

#### Menu Handling Logic:

- IF C: Update {outputFile} frontmatter stepsCompleted to add 'step-03-export-choice', then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- User choice captured (S or A)
- Source list MD generated with proper citations
- DOCX conversion attempted (Pandoc)
- Both formats saved (or fallback instructions provided)
- Frontmatter updated in both files
- Citation format followed correctly (ABNT or APA)
- Student has professional source list ready to use
- Ready for next decision (continue to lit review or complete)

### ❌ SYSTEM FAILURE:

- Not offering export choice
- Generating without user selection
- Wrong citation format applied
- Not attempting DOCX conversion
- Missing abstracts or metadata
- Not providing fallback if Pandoc unavailable
- Not updating frontmatter

**Master Rule:** Source list is MANDATORY output. Everyone gets a professionally formatted source list before anything else.

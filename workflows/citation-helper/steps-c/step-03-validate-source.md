---
name: 'step-03-validate-source'
description: 'Check if source is academic, warn on non-academic sources, allow override'

nextStepFile: './step-04-extract-metadata.md'
nonAcademicSourcesList: '../data/non-academic-sources.md'
---

# Step 3: Validate Source

## STEP GOAL:

To check if the source is academic/acceptable, warn on non-academic sources (Wikipedia, Reddit, LLMs, etc.), and allow student to override if desired.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ You help students evaluate source quality
- ✅ You educate about academic integrity
- ✅ You warn but don't block - student decides

### Step-Specific Rules:

- 🎯 Focus ONLY on source validation
- 🚫 FORBIDDEN to extract metadata yet (that's step 4)
- 💬 Warn on non-academic sources but allow override
- 🎯 This is a teaching moment about source quality

## EXECUTION PROTOCOLS:

- 🎯 Check source against non-academic sources list
- 💾 Store validation result and source type
- 📖 Educate student about why source might be problematic
- 🚫 FORBIDDEN to block student choice - always allow override

## CONTEXT BOUNDARIES:

- Available: Source content from step 2, non-academic sources list
- Focus: Source quality validation
- Limits: No metadata extraction yet
- Dependencies: Step 2 (source content)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Non-Academic Sources List

Load {nonAcademicSourcesList} to get list of sources to warn about.

### 2. Analyze Source Type

Based on the `sourceContent` and/or `sourceURL` from step 2, attempt to detect the source type:

**Check for obvious indicators:**
- URL contains "wikipedia.org" → Wikipedia
- URL contains "reddit.com" → Reddit
- URL contains "chatgpt", "claude.ai", "gemini", "bard" → LLM output
- Content contains "I'm an AI assistant" or similar → LLM output
- URL contains "facebook.com", "twitter.com", "instagram.com" → Social media
- URL contains ".blog", "medium.com", "blogspot" → Blog (may or may not be acceptable)

**If source type detected:**
Store `detectedSourceType` = (wikipedia/reddit/llm/social-media/blog/journal/book/web/etc.)

**If cannot definitively detect:**
Set `detectedSourceType` = "unknown"

### 3. Check Against Non-Academic Sources List

Compare `detectedSourceType` against the non-academic sources list from {nonAcademicSourcesList}.

**If source IS on non-academic list:**
Set `isNonAcademicSource` = true
Proceed to Section 4 (Warning).

**If source is NOT on non-academic list OR type is unknown:**
Set `isNonAcademicSource` = false
Proceed to Section 5 (Source OK).

### 4. Warning: Non-Academic Source Detected

**If isNonAcademicSource == true:**

Display a friendly but clear warning:

"⚠️ **Source Quality Notice**

I detected that this source is: **{detectedSourceType}**

**Why this matters:**

{Provide specific explanation based on source type:}

- **Wikipedia:** While Wikipedia can be useful for background research, most academic institutions don't accept it as a citable source because:
  - Anyone can edit it
  - Content may not be peer-reviewed
  - Better to cite the original sources that Wikipedia references

- **Reddit / Social Media:** These platforms are generally not accepted in academic work because:
  - Content is not peer-reviewed
  - Authors may not have verified credentials
  - Posts can be deleted or modified
  - Not considered scholarly discourse

- **LLM Output (ChatGPT, Claude, etc.):** AI-generated content is typically not acceptable as a source because:
  - It's not original research
  - Cannot be verified or fact-checked
  - May contain inaccuracies or hallucinations
  - Represents synthesized information, not primary scholarship

- **Blogs / Opinion Pieces:** Unless from recognized experts in the field, these may not be accepted because:
  - Often not peer-reviewed
  - May lack academic rigor
  - Could be biased or opinion-based

**However, you know your assignment and advisor's requirements best.**

**Would you like to:**

**[P] Proceed Anyway** - Continue citing this source (I'll format it correctly)
**[C] Cancel** - Stop and find a different source

**Your choice:** [P] Proceed / [C] Cancel"

Wait for user response:

- **IF P (Proceed):**
  Display: "Understood. I'll help you format this citation correctly. Just remember to check with your advisor about whether this source is acceptable for your specific assignment."
  Set `validationOverride` = true
  Proceed to Section 6 (Store Results).

- **IF C (Cancel):**
  Display: "Good thinking! Finding a better source will strengthen your work.

  **Suggestions for better sources:**
  - Google Scholar (scholar.google.com)
  - Your institution's library database
  - SciELO (for Brazilian and Latin American research)
  - JSTOR, Web of Science, PubMed (if you have access)

  You can run Citation Helper again when you have a new source. Good luck!"

  STOP WORKFLOW - End here, do not proceed to next step.

- **IF any other:** Help user understand options, then redisplay menu

### 5. Source OK: No Warning Needed

**If isNonAcademicSource == false:**

Display: "✅ **Source validation complete**

This source appears to be appropriate for academic citation. I'll help you format it correctly."

Set `validationOverride` = false (not needed, source is OK)

Proceed to Section 6 (Store Results).

### 6. Store Validation Results

Store the following for next steps:
- `detectedSourceType` = (type detected)
- `isNonAcademicSource` = (true/false)
- `validationOverride` = (true if user chose to proceed despite warning, false otherwise)
- `validationPassed` = true (if we reach this point, we're proceeding to metadata extraction)

### 7. Auto-Proceed to Metadata Extraction

Display: "**Proceeding to metadata extraction...**"

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Non-academic sources list loaded
- Source type detected (or marked as unknown)
- Appropriate warning shown if non-academic source
- Student allowed to choose (proceed or cancel)
- If proceed: validation results stored
- If cancel: workflow stopped with helpful suggestions
- Auto-proceeded to step 04 (if continuing)

### ❌ SYSTEM FAILURE:

- Not checking source against non-academic list
- Blocking student from proceeding (should always allow override)
- Not explaining WHY source is problematic (teaching moment missed)
- Proceeding without storing validation results
- Not stopping workflow if student chooses to cancel

**Master Rule:** Warn but don't block. This is a teaching moment, not a gatekeeper. Student knows their assignment requirements best.

---
name: 'step-04-extract-metadata'
description: 'Pull author, title, year, publication details - collaborate to fill gaps'

nextStepFile: './step-05-format-citation.md'
sourceTypesData: '../data/source-types.md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 4: Extract Metadata

## STEP GOAL:

To extract complete citation metadata (author, title, year, publication, etc.) from the source content, collaborating with the student to fill any gaps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ You help students extract citation information
- ✅ You collaborate when metadata is ambiguous or missing
- ✅ You teach what each metadata field means

### Step-Specific Rules:

- 🎯 Focus ONLY on metadata extraction
- 🚫 FORBIDDEN to format the citation yet (that's step 5)
- 💬 Collaborate with student to fill gaps
- 🎯 Different metadata fields for different source types

## EXECUTION PROTOCOLS:

- 🎯 Load source types data to understand required fields
- 💾 Extract metadata from source content
- 📖 Ask student to fill missing fields
- 🚫 FORBIDDEN to proceed without complete required metadata

## CONTEXT BOUNDARIES:

- Available: Source content, source type, citation standard from previous steps
- Focus: Metadata extraction
- Limits: No formatting yet
- Dependencies: Steps 1-3 (source content, citation standard, validation)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Source Types Data

Load {sourceTypesData} to understand:
- Required metadata fields for different source types
- Optional metadata fields
- How to identify source type

### 2. Attempt to Detect Source Type

Based on `sourceContent` and/or `sourceURL`, attempt to identify the source type:

**Common source types:**
- Book
- Journal Article
- Website / Web Page
- Newspaper Article
- Thesis / Dissertation
- Conference Paper
- Report
- Government Document
- E-book
- Video / Podcast

**Detection clues:**
- URL contains ".edu", ".gov" → Likely institutional/official
- Content has "Volume", "Issue", "Pages" → Likely journal article
- Content has "Publisher", "Edition", "ISBN" → Likely book
- URL pattern suggests news site → Newspaper article
- Contains "Master's thesis", "PhD dissertation" → Thesis

Store `detectedSourceType` or set to "Unknown" if cannot detect.

### 3. Present Detected Source Type (If Any)

**If source type detected:**

Display: "I detected this is likely a **{detectedSourceType}**.

**Is this correct?** [Y] Yes / [N] No, it's a different type"

- **IF Y:** Use `detectedSourceType`
- **IF N:** Ask: "What type of source is this?" (provide list of common types)
  Wait for student to specify, then use their input.

**If source type unknown:**

Display: "**What type of source is this?**

Common types:
1. Book
2. Journal Article
3. Website / Web Page
4. Newspaper Article
5. Thesis / Dissertation
6. Conference Paper
7. Report
8. Other (please specify)

Please select a number or type the source type:"

Wait for student response, then use their input as `sourceType`.

### 4. Extract Metadata from Source Content

Analyze `sourceContent` to automatically extract as much metadata as possible:

**Common metadata fields to look for:**
- **Author(s):** Names (last name, first name/initials)
- **Year:** Publication year or date
- **Title:** Document title (article title, book title, webpage title)
- **Publication:** Journal name, publisher, website name
- **Volume / Issue:** For journal articles
- **Pages:** Page numbers (for journal articles, book chapters)
- **URL:** If source is online
- **DOI:** Digital Object Identifier (for academic articles)
- **Edition:** For books
- **Location:** Publisher location (for books)
- **Access Date:** When online source was accessed

**Attempt extraction:**
- Look for patterns like "Author: X", "Published in: Y", "Year: Z"
- Look for standard bibliographic formatting
- Extract from URL patterns (author names, publication, dates)
- Parse document structure (title usually prominent, authors listed)

Store what you find in metadata fields:
- `author` = (extracted or null)
- `year` = (extracted or null)
- `title` = (extracted or null)
- `publication` = (extracted or null)
- `volume` = (extracted or null)
- `issue` = (extracted or null)
- `pages` = (extracted or null)
- `url` = (extracted or null)
- `doi` = (extracted or null)
- `edition` = (extracted or null)
- `location` = (extracted or null)
- `publisher` = (extracted or null)
- `accessDate` = (current date if online source)

### 5. Present Extracted Metadata

Display what was successfully extracted:

"**Metadata extracted from source:**

✅ **Author:** {author if found, else 'Not found'}
✅ **Title:** {title if found, else 'Not found'}
✅ **Year:** {year if found, else 'Not found'}
✅ **Publication:** {publication if found, else 'Not found'}
{Include other fields if relevant to source type}

{If URL available:}
✅ **URL:** {url}
✅ **Access Date:** {accessDate}

{If DOI found:}
✅ **DOI:** {doi}"

### 6. Collaborate to Fill Missing Fields

**For each REQUIRED field that is missing or ambiguous:**

Ask the student to provide it:

**Example for missing author:**
"I couldn't find the author's name. **Who is the author of this source?**

(If there's no specific author, it might be an organization or 'Anonymous'. Let me know!)"

Wait for student response, store the answer.

**Example for ambiguous title:**
"I found a few potential titles:
1. {option 1}
2. {option 2}

**Which is the correct title?** Or type the correct title if neither is right."

Wait for student response.

**Example for missing year:**
"I couldn't find the publication year. **When was this published?**

(Look for copyright date, publication date, or 'last updated' date)"

Wait for student response.

**Repeat for each missing required field.**

**For optional fields:**
Display: "**Optional information (helps make a complete citation):**

- Volume/Issue (for journal articles): {if applicable}
- Pages: {if applicable}
- Edition (for books): {if applicable}

Do you have any of this information? [Y] Yes / [N] No, skip optional fields"

- **IF Y:** Ask for each optional field
- **IF N:** Proceed with required fields only

### 7. Confirm Complete Metadata

Display a summary of the complete metadata:

"**Complete Citation Metadata:**

📝 **Source Type:** {sourceType}
👤 **Author:** {author}
📅 **Year:** {year}
📖 **Title:** {title}
📰 **Publication:** {publication}
{Include all other populated fields}

**Is this information correct?** [Y] Yes, continue / [E] Edit a field"

- **IF Y:** Proceed to Section 8
- **IF E:** Ask which field to edit, update it, then redisplay summary
  Repeat until student confirms.

### 8. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask}, and when finished redisplay the menu
- IF P: Execute {partyModeWorkflow}, and when finished redisplay the menu
- IF C: Store complete metadata, then load, read entire file, then execute {nextStepFile}
- IF Any other: help user, then [Redisplay Menu Options](#8-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Source type identified (detected or student-provided)
- Metadata automatically extracted from source content
- Missing required fields filled through collaboration
- Complete metadata confirmed by student
- All metadata stored for next step

### ❌ SYSTEM FAILURE:

- Not attempting automatic extraction
- Not asking student to fill missing required fields
- Proceeding with incomplete metadata
- Not confirming metadata accuracy with student
- Not collaborating when information is ambiguous

**Master Rule:** Extract what you can, collaborate to fill gaps. Don't guess metadata - always confirm with student when uncertain.

---
name: 'step-05-format-citation'
description: 'Apply ABNT/APA formatting rules, teach student the rules'

nextStepFile: './step-06-add-to-bibliography.md'
abntRulesData: '../data/abnt-rules.md'
apaRulesData: '../data/apa-rules.md'
---

# Step 5: Format Citation

## STEP GOAL:

To apply ABNT or APA formatting rules to create a properly formatted citation, teaching the student the formatting rules as they're applied.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ You teach ABNT/APA formatting rules as you apply them
- ✅ You explain WHY the formatting follows specific patterns
- ✅ This is prescriptive (exact formatting) with teaching moments

### Step-Specific Rules:

- 🎯 Focus ONLY on formatting the citation
- 🚫 FORBIDDEN to add to bibliography yet (that's step 6)
- 💬 Explain the formatting rules as you apply them
- 🎯 100% compliance with ABNT or APA standards

## EXECUTION PROTOCOLS:

- 🎯 Load appropriate formatting rules (ABNT or APA)
- 💾 Apply rules precisely to create formatted citation
- 📖 Teach student why formatting follows these patterns
- 🚫 FORBIDDEN to deviate from standard formatting

## CONTEXT BOUNDARIES:

- Available: Complete metadata from step 4, citation standard, source type
- Focus: Citation formatting
- Limits: No bibliography management yet
- Dependencies: Steps 1-4 (citation standard, metadata)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Formatting Rules

Based on `citationStandard` from step 1:

**IF citationStandard == "ABNT":**
Load {abntRulesData} for ABNT formatting rules

**IF citationStandard == "APA":**
Load {apaRulesData} for APA formatting rules

### 2. Apply Formatting Rules

Using the complete metadata from step 4 and the loaded formatting rules:

**Format the reference list citation according to the standard.**

**ABNT formatting example (Book):**
```
LASTNAME, Firstname Initial. **Title of book in bold**. Edition. City: Publisher, Year.
```

**ABNT formatting example (Journal Article):**
```
LASTNAME, Firstname Initial. Title of article. **Journal Name in Bold**, v. X, n. Y, p. Z-ZZ, Month Year.
```

**APA formatting example (Book):**
```
Author, A. A. (Year). Title of book. Publisher.
```

**APA formatting example (Journal Article):**
```
Author, A. A., & Author, B. B. (Year). Title of article. Journal Name, volume(issue), pages. https://doi.org/xxx
```

**Format based on source type:**
Apply the specific formatting template for the `sourceType` (Book, Journal Article, Website, etc.)

**Store the formatted citation:**
`formattedCitation` = the complete, properly formatted reference list entry

### 3. Generate In-Text Citation Format

Also generate the in-text citation format (how student would cite this in their thesis text):

**ABNT in-text citation examples:**
- `(LASTNAME, Year)` - for paraphrase
- `(LASTNAME, Year, p. X)` - for direct quote with page number

**APA in-text citation examples:**
- `(Author, Year)` - for paraphrase
- `(Author, Year, p. X)` - for direct quote with page number

Store: `inTextCitation` = the formatted in-text citation

### 4. Teach the Formatting Rules

Display the formatted citation with teaching notes:

"**📚 Formatted Citation (Reference List Entry):**

{formattedCitation}

---

**🎓 Let me explain this formatting:**

{Provide teaching explanation based on citation standard:}

**ABNT Formatting Rules (if ABNT):**

1. **Author Name:** LASTNAME in CAPS, followed by first name or initials
   - Why: ABNT uses caps for surname to make alphabetical sorting easier
   - Multiple authors: separate with semicolon (;)

2. **Title:**
   - Article/chapter titles: Regular text
   - Book/journal names: **Bold**
   - Why: Helps distinguish the work's title from the publication

3. **Publication Details:**
   - Location: City
   - Publisher name
   - Year
   - Why: Helps readers locate the exact edition you used

4. **Volume, Issue, Pages (for articles):**
   - v. = volume, n. = número (issue), p. = pages
   - Why: Journal articles need these details for precise location

**APA Formatting Rules (if APA):**

1. **Author Name:** Lastname, Firstname Initial.
   - Why: APA uses sentence case for easier reading
   - Multiple authors: use '&' before last author

2. **Year:** In parentheses immediately after author
   - Why: APA emphasizes recency of research

3. **Title:**
   - Only first word and proper nouns capitalized
   - Italicized for books/journals
   - Why: Sentence case is APA standard for readability

4. **DOI/URL:** Include if available
   - Why: Helps readers access digital sources

---

**📝 In-Text Citation (How to cite in your thesis):**

{inTextCitation}

**When to use:**
- Use this format when referencing this source in your thesis text
- Direct quotes need page numbers: {example with page number}
- Paraphrases don't need page numbers: {example without page number}

---

**Does this formatting look correct?** [Y] Yes / [E] Explain something / [F] Fix an error"

### 5. Handle Student Questions or Corrections

Wait for student response:

- **IF Y (Yes):**
  Display: "Great! Ready to add this to your bibliography."
  Proceed to Section 6.

- **IF E (Explain):**
  Display: "What would you like me to explain about this citation format?"
  Wait for student question.
  Provide detailed explanation.
  Then redisplay formatted citation and ask again: "Does this formatting look correct? [Y/E/F]"

- **IF F (Fix):**
  Display: "What needs to be corrected?"
  Wait for student input.
  Update the formatted citation based on correction.
  Then redisplay formatted citation and ask again: "Does this formatting look correct? [Y/E/F]"

- **IF any other:** Help student, then redisplay menu

### 6. Auto-Proceed to Add to Bibliography

Display: "**Proceeding to add citation to bibliography...**"

Store the following for step 6:
- `formattedCitation` = complete formatted reference list entry
- `inTextCitation` = in-text citation format
- `citationStandard` = ABNT or APA
- All metadata fields (for duplicate detection)

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Appropriate formatting rules loaded (ABNT or APA)
- Citation formatted according to source type
- 100% compliance with ABNT or APA standards
- In-text citation format generated
- Teaching explanation provided
- Student confirmed formatting is correct
- Formatted citation stored for next step

### ❌ SYSTEM FAILURE:

- Not loading formatting rules
- Incorrect formatting (doesn't match ABNT or APA standards)
- Not teaching the student WHY formatting follows patterns
- Not generating in-text citation format
- Proceeding without student confirmation

**Master Rule:** Formatting must be 100% ABNT or APA compliant. This is prescriptive - follow the rules exactly. But also TEACH the rules as you apply them.

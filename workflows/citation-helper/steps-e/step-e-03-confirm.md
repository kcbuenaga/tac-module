---
name: 'step-e-03-confirm'
description: 'Show updated bibliography, update frontmatter, confirm success'

bibliographyFile: '{thesis_artifacts}/bibliography.md'
---

# Step E-03: Confirm Changes

## STEP GOAL:

To apply the changes to the bibliography file, update frontmatter, and confirm success to the student.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{preferred_tac_language}`

### Role Reinforcement:

- ✅ You are Patricia, a Research Librarian
- ✅ You maintain bibliography quality
- ✅ You ensure alphabetical organization
- ✅ You celebrate student's bibliography management!

### Step-Specific Rules:

- 🎯 Focus ONLY on applying changes and confirming
- 🚫 FORBIDDEN to skip updating frontmatter
- 💬 Show before/after comparison
- 🎯 Maintain alphabetical organization

## EXECUTION PROTOCOLS:

- 🎯 Apply changes to bibliography
- 💾 Update frontmatter (lastUpdated, totalCitations if removed)
- 📖 Maintain alphabetical organization
- 🚫 FORBIDDEN to corrupt alphabetical order

## CONTEXT BOUNDARIES:

- Available: Changes from step E-02, bibliography file, all citations
- Focus: Applying changes and confirming
- Limits: This is the final step in Edit mode
- Dependencies: Steps E-01 and E-02

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Current Bibliography

Load {bibliographyFile} completely:
- Read frontmatter
- Read all current citations

### 2. Apply Changes

Based on `action` from step E-02:

**IF action == "edit" (updated citation):**

**A. Remove old citation**
- Find the citation at `selectedCitationNumber` in the list
- Remove it from its current position

**B. Insert updated citation in correct alphabetical position**
- Parse author surname from updated citation
- Determine correct alphabetical section (## letter)
- Find correct position within that section
- Insert the updated citation

**C. Result:**
- Bibliography has updated citation in correct alphabetical position
- Total citations count remains the same

**IF action == "remove":**

**A. Remove citation**
- Find the citation at `selectedCitationNumber` in the list
- Remove it completely

**B. Result:**
- Bibliography has one fewer citation
- Total citations count decreases by 1

### 3. Update Frontmatter

Update the frontmatter:

**IF edited:**
```yaml
---
citationStandard: {unchanged}
lastUpdated: {current date in YYYY-MM-DD}
totalCitations: {same count}
---
```

**IF removed:**
```yaml
---
citationStandard: {unchanged}
lastUpdated: {current date in YYYY-MM-DD}
totalCitations: {previous count - 1}
---
```

### 4. Write Updated Bibliography

Write the updated bibliography back to {bibliographyFile}.

Ensure proper structure:
- Frontmatter
- # Bibliografia / References
- ## A (if citations starting with A exist)
- Citations in A section (alphabetically)
- ## B (if citations starting with B exist)
- etc.

### 5. Display Before/After Comparison

**IF edited:**

Display:

"✅ **Citation updated successfully!**

**Before:**
{old citation text}

**After:**
{updated citation text}

---

**Changes saved to:** {bibliographyFile}

**Summary:**
- Action: Citation edited
- Total citations: {totalCitations}
- Last updated: {current date}
- Alphabetical position: Updated and maintained

---

**Your bibliography remains properly organized and formatted! ✨**"

**IF removed:**

Display:

"✅ **Citation removed successfully!**

**Removed:**
{removed citation text}

---

**Changes saved to:** {bibliographyFile}

**Summary:**
- Action: Citation removed
- Total citations: {totalCitations} (was {totalCitations + 1})
- Last updated: {current date}

---

**Your bibliography has been updated! ✨**"

### 6. Complete Workflow

Display:

"**Edit Mode Complete**

**What would you like to do next?**

- ✅ Use Edit mode again to modify more citations
- ✅ Use Create mode to add new citations
- ✅ Use Validate mode to check bibliography compliance

**Great work managing your bibliography, {user_name}! 📚**"

**WORKFLOW COMPLETE** - No next step, this is the final step of Edit mode.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Changes applied to bibliography file
- If edited: Updated citation inserted in correct alphabetical position
- If removed: Citation removed successfully
- Frontmatter updated (lastUpdated, totalCitations if removed)
- Bibliography file saved
- Before/after comparison displayed
- Alphabetical organization maintained
- Success message displayed

### ❌ SYSTEM FAILURE:

- Not updating frontmatter
- Not maintaining alphabetical organization
- Corrupting bibliography structure
- Not showing before/after comparison
- Not updating totalCitations count when removing

**Master Rule:** Apply changes correctly, maintain alphabetical organization, update frontmatter. This is the final step - celebrate the student's bibliography management skills!

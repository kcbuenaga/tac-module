---
name: 'step-04-save-confirm'
description: 'Generate timestamp, append idea to file, and confirm success'

templateFile: '../templates/ideas-template.md'
ideasFile: '{thesis_artifacts}/ideas-{currentDate}.md'
---

# Step 4: Save & Confirm

## STEP GOAL:

To generate a timestamp, append the idea entry to the ideas file, increment the idea count, and display success confirmation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip file operations
- 📖 CRITICAL: Read the complete step file before taking any action
- 📁 CRITICAL: Use File I/O for all file operations
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful idea capture assistant
- ✅ Professional but friendly
- ✅ Clear confirmation of success
- ✅ This is the final step

### Step-Specific Rules:

- 🎯 Focus ONLY on saving and confirming
- 🚫 FORBIDDEN to skip file operations
- 💬 Generate proper timestamp
- ✅ Handle both new file and append scenarios

## EXECUTION PROTOCOLS:

- 🎯 Generate current timestamp
- 📁 Check if ideas file exists
- 💾 Create from template OR read existing
- ✍️ Append new entry with timestamp
- 🔢 Increment ideaCount in frontmatter
- ✅ Confirm success to user

## CONTEXT BOUNDARIES:

- Idea text collected (from step 02)
- Optional tag collected (from step 03)
- File existence checked (from step 01)
- This is the final save step

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Generate Timestamp

Generate current timestamp in format: `YYYY-MM-DD HH:MM`

Example: `2026-01-29 14:35`

### 2. Check File Existence

Check if {ideasFile} exists.

**If file EXISTS:**
- Read the complete file
- Parse frontmatter to get current `ideaCount`
- Prepare to append

**If file does NOT exist:**
- Load {templateFile}
- Replace `{{currentDate}}` with current date
- Set `ideaCount: 0` in frontmatter
- Prepare to append first entry

### 3. Build Entry Content

**If tag was provided (not empty):**
```markdown

## [timestamp] - [tag]

[idea text from step 02]
```

**If tag was NOT provided (empty):**
```markdown

## [timestamp]

[idea text from step 02]
```

### 4. Append to File

Append the entry content to the end of the ideas file.

### 5. Update Frontmatter

Increment `ideaCount` by 1 in the frontmatter.

Update the frontmatter:
```yaml
---
created: [original date]
ideaCount: [new count]
---
```

### 6. Write File

Write the complete file with:
- Updated frontmatter
- All existing content (if file existed)
- New entry appended

**If file write fails:**
Display error message:
"**Error saving idea.** Please check that {thesis_artifacts} folder is accessible and try again."

**STOP - do not proceed if write fails.**

### 7. Display Success Confirmation

"**✅ Idea saved!**

**Timestamp:** [timestamp]
**Location:** {ideasFile}
**Total ideas:** [ideaCount]

**Workflow complete.**"

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Timestamp generated correctly
- File created from template (if first time) OR read existing file
- Entry appended with proper formatting
- ideaCount incremented in frontmatter
- File written successfully
- Success confirmation displayed with details
- Total workflow time: < 2 minutes

### ❌ SYSTEM FAILURE:

- Not generating timestamp
- Not checking file existence
- Not using template for new file
- Not incrementing ideaCount
- Not appending (overwriting instead)
- Not confirming success
- File write errors not handled

**Master Rule:** This is the critical save step. Must append correctly, update count, and confirm success. No shortcuts.

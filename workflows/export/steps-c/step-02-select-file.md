# Step 02: File Selection

**Goal:** Scan for markdown files in the project, present a list to the user, and validate their selection.

---

## 1. Scan for Markdown Files

Search for markdown files in the project:

**Primary search locations:**
- `{thesis_artifacts}` folder (TAC module config variable)
- Current working directory
- Common thesis folders (chapters/, notes/, outlines/, etc.)

**Search pattern:**
- Use Glob tool to find all `**/*.md` files
- Exclude: README.md, TODO.md, workflow plan files, hidden folders

**Sort files by:**
- Most recently modified first (most likely to be current work)

---

## 2. Display Available Files

Present the list to the user with numbered options:

```
Available Markdown Files:

[1] thesis-chapter-1-introduction.md (Modified: 2026-01-28)
[2] literature-review-notes.md (Modified: 2026-01-27)
[3] methodology-outline.md (Modified: 2026-01-25)
[4] research-question-draft.md (Modified: 2026-01-20)
... (up to 20 most recent files)

[C] Provide custom file path

Select a file to export (enter number or 'C' for custom path):
```

**If no markdown files found:**
```
No markdown files found in:
- {thesis_artifacts}
- Current working directory

Please create a markdown file first, or use option [C] to provide a custom file path.

[C] Provide custom file path
[X] Exit workflow

Your choice:
```

---

## 3. Collect User Selection

**If user enters a number (1-N):**
- Validate number is within range
- Get the file path for that number
- Proceed to validation (Section 4)

**If user enters 'C' (custom path):**
- Ask: "Please provide the full path to your markdown file:"
- Collect file path from user
- Proceed to validation (Section 4)

**If user enters 'X' (exit):**
- Display: "Export cancelled. Run this workflow again when you have a markdown file to export."
- End workflow

**If invalid input:**
- Display error: "Invalid selection. Please enter a number from the list, 'C' for custom path, or 'X' to exit."
- Re-display the file list and prompt again

---

## 4. Validate File Selection

Check that the selected file:

1. **Exists** - File path is valid and file exists
2. **Is readable** - User has permission to read the file
3. **Is markdown** - File has .md or .markdown extension
4. **Has content** - File is not empty (size > 0 bytes)

**If validation passes:**
- Display confirmation: "✅ Selected: {file_name}"
- Store the file path for use in next steps
- Proceed to format selection

**If validation fails:**
- Display specific error:
  - "File not found: {path}"
  - "Cannot read file: {path} (check permissions)"
  - "Not a markdown file: {path}"
  - "File is empty: {path}"
- Re-prompt for file selection (return to Section 2)

---

## 5. Auto-Proceed

Once file is validated, proceed automatically to format selection.

Load and execute `./steps-c/step-03-format-selection.md`

---

## Notes for LLM

- Use Glob tool to scan for markdown files efficiently
- Prioritize recently modified files (thesis work in progress)
- Validate file thoroughly before proceeding - prevents export errors
- Support both numbered selection (easy) and custom path (flexible)
- Auto-proceed pattern - no explicit menu after validation

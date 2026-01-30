# Step 03: Format Selection

**Goal:** Display format menu based on available tools, and have the user select their desired output format.

---

## 1. Determine Available Formats

Based on the dependency check from step-01-init:

**Check what's available:**
- **Pandoc installed** → Word (.docx) and PDF (.pdf) are available
- **Notion MCP configured** → Notion export is available

**Build format list accordingly**

---

## 2. Display Format Menu

Present the format menu with only available options:

**If both Pandoc and Notion are available:**
```
Select Export Format:

[1] Word (.docx) - Microsoft Word document via Pandoc
[2] PDF (.pdf) - Portable Document Format via Pandoc
[3] Notion - Export to your Notion workspace

Your choice:
```

**If only Pandoc is available:**
```
Select Export Format:

[1] Word (.docx) - Microsoft Word document via Pandoc
[2] PDF (.pdf) - Portable Document Format via Pandoc

(Notion export not configured - run setup to enable)

Your choice:
```

**If only Notion is available (unlikely):**
```
Select Export Format:

[1] Notion - Export to your Notion workspace

(Pandoc not installed - Word/PDF export unavailable)

Your choice:
```

**If neither is available:**
```
❌ No export tools available.

Please install Pandoc or configure Notion MCP to enable exports.

[X] Exit workflow

Your choice:
```

---

## 3. Collect Format Selection

**Validate user input:**
- Must be a number corresponding to an available format option
- If invalid, re-display menu with error message

**Store selected format:**
- If [1] and Pandoc available → `format = "word"`
- If [2] and Pandoc available → `format = "pdf"`
- If [3] and Notion available → `format = "notion"`
- If [X] → Exit workflow

---

## 4. Confirm Selection

Display confirmation of selected format:

**For Word:**
```
✅ Format: Word (.docx)

Your markdown file will be converted to a Microsoft Word document.
Output file: {original_filename}.docx
```

**For PDF:**
```
✅ Format: PDF (.pdf)

Your markdown file will be converted to a PDF document.
Output file: {original_filename}.pdf
```

**For Notion:**
```
✅ Format: Notion

Your markdown file will be exported to your Notion workspace as a new page.
```

---

## 5. Optional: Output Location

**For Pandoc exports (Word/PDF):**

Ask the user:
```
Output location:

[1] Same directory as source file (default)
[2] Custom location

Your choice:
```

**If [1] (default):**
- Use same directory as the markdown source file
- Output filename: `{source_filename_without_extension}.{docx|pdf}`

**If [2] (custom):**
- Ask: "Enter output directory path:"
- Validate directory exists and is writable
- Use provided directory with default filename

**For Notion:**
- No output location needed (exports to Notion workspace)

---

## 6. Auto-Proceed

Once format and location are confirmed, proceed automatically to export execution.

Load and execute `./steps-c/step-04-export-execution.md`

---

## Notes for LLM

- Only show formats that are actually available based on step-01 checks
- Clear confirmation of selected format before proceeding
- Output location is optional (default to source directory)
- Auto-proceed pattern - no explicit menu after confirmation

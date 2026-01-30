# Step 04: Export Execution

**Goal:** Execute the export using Pandoc or Notion MCP, handle errors gracefully, and display success confirmation.

---

## 1. Prepare Export Command

Based on the selected format from step-03:

### For Word (.docx) Export via Pandoc:

```bash
pandoc "{source_file_path}" -o "{output_file_path}" --from markdown --to docx
```

**Pandoc options for Word:**
- `--from markdown` - Input format
- `--to docx` - Output format (Microsoft Word)
- Default settings (no custom styling - users will format in Word)

### For PDF (.pdf) Export via Pandoc:

```bash
pandoc "{source_file_path}" -o "{output_file_path}" --from markdown --to pdf --pdf-engine=xelatex
```

**Pandoc options for PDF:**
- `--from markdown` - Input format
- `--to pdf` - Output format
- `--pdf-engine=xelatex` - PDF engine (handles unicode better)
- If xelatex not available, try without --pdf-engine flag

### For Notion Export via Notion MCP:

Use Notion MCP tools to:
- Create a new page in user's Notion workspace
- Convert markdown content to Notion blocks
- Upload content to Notion
- Return page URL

---

## 2. Execute Export

Run the export command/operation:

**Display progress:**
```
Exporting {filename} to {format}...
```

**Execute the command:**
- For Pandoc: Use Bash tool to run pandoc command
- For Notion: Use Notion MCP tool/function
- Capture output and errors

---

## 3. Handle Export Results

### Success Case:

**For Pandoc exports (Word/PDF):**

```
✅ Export Complete!

Format: {Word|PDF}
Output file: {full_path_to_output_file}

Your markdown file has been successfully converted.
You can now open and edit it in {Microsoft Word|PDF reader}.
```

**For Notion export:**

```
✅ Export Complete!

Format: Notion
Notion page: {notion_page_url}

Your markdown file has been exported to your Notion workspace.
Click the link above to view and edit it in Notion.
```

### Error Cases:

**Pandoc not found (shouldn't happen if step-01 worked):**
```
❌ Export Failed: Pandoc not found

Please install Pandoc and try again.
Installation: https://pandoc.org/installing.html
```

**File permission errors:**
```
❌ Export Failed: Permission denied

Cannot write to: {output_directory}

Please check:
- You have write permissions for the output directory
- The output file isn't open in another program
- Try a different output location
```

**Pandoc conversion errors:**
```
❌ Export Failed: Pandoc error

Error message:
{pandoc_error_message}

Common issues:
- Unsupported markdown syntax
- Missing images or linked files
- PDF engine (xelatex) not installed

Try:
- Simplifying markdown formatting
- Using Word format instead of PDF
- Installing xelatex: apt-get install texlive-xelatex
```

**Notion API errors:**
```
❌ Export Failed: Notion API error

Error message:
{notion_error_message}

Please check:
- Your Notion MCP configuration
- Notion API credentials are valid
- You have permission to create pages
```

**File not found:**
```
❌ Export Failed: Source file not found

File: {source_file_path}

The markdown file may have been moved or deleted.
```

---

## 4. Offer Next Actions

After export completes (success or failure):

```
What would you like to do?

[E] Export another file
[X] Exit workflow

Your choice:
```

**If user selects E:**
- Reset workflow state
- Load and execute `./steps-c/step-02-select-file.md` (skip dependency check)

**If user selects X:**
- Display: "Thank you for using the Export Workflow!"
- End workflow

---

## 5. Workflow Complete

This is the final step - workflow ends after user chooses to exit or exports another file.

---

## Notes for LLM

- This is the final step of the export workflow
- Handle all error cases gracefully with helpful messages
- Provide clear success confirmation with file path or Notion link
- Offer to export another file (loops back to step-02) or exit
- Use Bash tool for Pandoc commands, Notion MCP for Notion exports
- Capture and display meaningful error messages to help users troubleshoot

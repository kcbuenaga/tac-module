# Step 01: Init & Dependency Check

**Goal:** Welcome the user, explain export capabilities, check Pandoc installation, and optionally set up Notion MCP.

---

## 1. Welcome & Explain

Welcome the user and explain what this workflow does:

"**Welcome to the Export Workflow!**

This utility helps you export your markdown thesis files to:
- **Word (.docx)** - Via Pandoc, for sharing with advisors or editing
- **PDF (.pdf)** - Via Pandoc, for submission or archival
- **Notion** - Via Notion MCP (optional), for collaborative editing

Let me check what export options are available on your system."

---

## 2. Check Pandoc Installation

Check if Pandoc is installed by running:

```bash
pandoc --version
```

**If Pandoc is installed:**
- Note that Word and PDF export are available
- Display Pandoc version for confirmation

**If Pandoc is NOT installed:**
- Display installation instructions:

```
Pandoc is not installed. To enable Word and PDF export, install Pandoc:

**Windows:**
Download from: https://pandoc.org/installing.html
Or via Chocolatey: choco install pandoc

**macOS:**
brew install pandoc

**Linux:**
sudo apt-get install pandoc
# or
sudo dnf install pandoc

After installing, run this workflow again to export your files.
```

- If Pandoc is not installed and user doesn't want to install it now, check if Notion MCP is available
- If neither Pandoc nor Notion is available, display error and end workflow

---

## 3. Offer Notion MCP Setup (Optional)

Ask the user:

```
Would you like to set up Notion integration for exporting to Notion?

Notion MCP allows you to export markdown files directly to your Notion workspace.

[Y] Yes, set up Notion MCP
[N] No, just use Pandoc for Word/PDF

Your choice:
```

**If user selects Y (Yes):**
- Explain Notion MCP installation
- Note: This requires npm and Notion API credentials
- Provide installation instructions or offer to guide through setup
- For now, note that Notion MCP setup is a manual process
- Set `notionAvailable = false` (manual setup required)

**If user selects N (No):**
- Continue with Pandoc only
- Set `notionAvailable = false`

---

## 4. Summary of Available Formats

Display what export formats are available:

```
Available Export Formats:
✅ Word (.docx) - Pandoc [if Pandoc installed]
✅ PDF (.pdf) - Pandoc [if Pandoc installed]
❌ Notion - Not configured [if Notion not available]

Ready to select a file to export.
```

---

## 5. Auto-Proceed

No menu needed - proceed automatically to file selection.

Load and execute `./steps-c/step-02-select-file.md`

---

## Notes for LLM

- This is an init step for a non-document, single-session workflow
- Check Pandoc installation status - this determines available export formats
- Notion MCP is optional and recommended, but not required
- If neither Pandoc nor Notion is available, workflow cannot proceed
- Auto-proceed pattern - no user menu, automatically load next step after checks

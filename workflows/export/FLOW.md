# Export Workflow - Flow Diagram

## CREATE MODE (Single-Session Utility)

```
┌─────────────────────────────────────────────────────────────┐
│            EXPORT MARKDOWN TO WORD/PDF/NOTION               │
│              Simple Linear Utility Workflow                 │
└─────────────────────────────────────────────────────────────┘

Step 01: Init & Dependency Check
  ├─ Welcome, explain export capabilities
  ├─ Check Pandoc installation (required for Word/PDF)
  ├─ If Pandoc missing: Display installation instructions
  ├─ Ask about Notion MCP setup (optional)
  ├─ If user wants Notion: Offer to install Notion MCP
  └─ Auto-proceed
      ↓
Step 02: File Selection
  ├─ Scan for markdown files in project
  ├─ Display numbered list of available files
  ├─ User selects file to export
  ├─ Validate file exists and is readable
  └─ Auto-proceed
      ↓
Step 03: Format Selection
  ├─ Display format menu based on available tools:
  │  - [1] Word (.docx) via Pandoc
  │  - [2] PDF (.pdf) via Pandoc
  │  - [3] Notion (if MCP configured)
  ├─ User selects output format
  └─ Auto-proceed
      ↓
Step 04: Export Execution
  ├─ Execute export using selected tool:
  │  - Pandoc: Run pandoc command with appropriate flags
  │  - Notion: Call Notion MCP to create page
  ├─ Handle errors gracefully:
  │  - Pandoc errors (file permissions, path issues)
  │  - Notion API errors
  ├─ Display success confirmation with file path/link
  └─ END
```

## Data Flow

```
Step 01 → [Pandoc available: bool, Notion available: bool]
   ↓
Step 02 → [Selected file path: string]
   ↓
Step 03 → [Format choice: word/pdf/notion]
   ↓
Step 04 → [Export result: success + path OR error message]
```

## Key Features

- **Simple Linear Flow**: No branching, no loops - straight through
- **Dependency Check**: Validates Pandoc, offers Notion MCP setup
- **Format Flexibility**: Word/PDF via Pandoc, Notion via MCP
- **Error Handling**: Clear error messages if exports fail
- **Quick Execution**: Completes in 5-10 minutes

## Usage

Run from any TAC agent or command:
```
/tac:export
```

Exports any markdown file to desired format with simple menu-driven interface.

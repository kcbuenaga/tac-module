# CAPES Connector MCP Server

MCP server for searching CAPES Portal de Periódicos and extracting full-text from academic publishers.

## Features

- **Search CAPES portal** by keyword/topic
- **Extract full-text** from supported publishers (SciELO, more coming)
- **Get metadata** (title, authors, abstract, year, DOI, journal)
- **PDF links** when available
- **Secure credential storage** (encrypted in user's home directory)

## Installation

```bash
cd C:\Users\kbuen\_bmad\tac\mcp-servers\capes-connector
npm install
```

This will install:
- `@modelcontextprotocol/sdk` - MCP protocol
- `playwright` - Browser automation
- `dotenv` - Environment variables

After installation, install Playwright browsers:

```bash
npx playwright install chromium
```

## Configuration

### Add to Claude Desktop Config

Edit your Claude Desktop config file:
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`

Add this MCP server:

```json
{
  "mcpServers": {
    "capes-connector": {
      "command": "node",
      "args": ["C:\\Users\\kbuen\\_bmad\\tac\\mcp-servers\\capes-connector\\index.js"]
    }
  }
}
```

Restart Claude Desktop after editing config.

## Usage

### 1. Test Connection & Save Credentials

First, test your CAPES credentials and save them:

```
Use the capes_test_connection tool with:
- username: your CAPES username
- password: your CAPES password
- saveCredentials: true
```

This saves credentials securely in `~/.capes-credentials.json` for future use.

### 2. Search for Papers

```
Use capes_search tool with:
- query: "gestao de projectos" (or any search term)
- maxResults: 20 (optional, default 20)
```

Returns array of results with:
- title
- authors
- abstract (snippet)
- year
- openAccess (boolean)
- peerReviewed (boolean)
- publisherUrl (use this for full-text extraction)

### 3. Get Full-Text

```
Use capes_get_fulltext tool with:
- publisherUrl: (from search results)
```

Returns:
- fullText (HTML text content)
- pdfUrl (if available)
- metadata (title, authors, DOI, journal, year)
- source (publisher name)

### 4. List Supported Publishers

```
Use capes_list_publishers tool (no arguments)
```

Returns list of publishers that support full-text extraction.

## Supported Publishers

Currently supported:
- **SciELO** (scielo.br, scielo.org) - Full-text + PDF extraction

Coming soon:
- JSTOR
- Springer
- Elsevier
- Web of Science

If a publisher is not supported, the tool returns the publisher URL for manual access.

## Example Workflow

```javascript
// 1. Test credentials (one-time setup)
capes_test_connection({
  username: "your_username",
  password: "your_password",
  saveCredentials: true
})

// 2. Search for papers
capes_search({
  query: "climate change Brazil",
  maxResults: 10
})

// 3. Get full-text from a result
capes_get_fulltext({
  publisherUrl: "https://scielo.br/..." // from search results
})
```

## Troubleshooting

**Login fails:**
- Check username/password are correct
- Try logging in manually at https://www.periodicos.capes.gov.br/
- Verify you have institutional access

**Search returns no results:**
- Try broader search terms
- Check you're logged in (credentials valid)

**Full-text extraction fails:**
- Publisher may not be supported yet (check capes_list_publishers)
- Use the publisherUrl to access manually
- Some publishers require additional authentication

**Browser issues:**
- Make sure Playwright browsers are installed: `npx playwright install chromium`
- Try running in non-headless mode for debugging (edit index.js: `createBrowser(false)`)

## Security

Credentials are stored in `~/.capes-credentials.json` with restricted permissions (0600 - owner read/write only).

To clear stored credentials:
- Delete `~/.capes-credentials.json`
- Or run test_connection without credentials to reset

## Development

Run in debug mode (non-headless browser):

Edit `index.js` line where `createBrowser` is called:
```javascript
const { browser, page } = await capes.createBrowser(false); // false = show browser
```

## License

MIT

## Support

Issues? Contact TAC module maintainers or open an issue on GitHub.

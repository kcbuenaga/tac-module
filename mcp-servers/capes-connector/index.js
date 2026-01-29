#!/usr/bin/env node

/**
 * CAPES Connector MCP Server
 * Provides tools for searching CAPES portal and extracting full-text from academic publishers
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import * as capes from './src/capes.js';
import * as auth from './src/auth.js';
import * as publishers from './src/publishers/index.js';
import * as capesFulltext from './src/capes-fulltext.js';

// Global browser instance (reused across requests)
let browserInstance = null;
let pageInstance = null;

/**
 * Get or create browser instance
 */
async function getBrowser() {
  if (!browserInstance || !pageInstance) {
    const { browser, page } = await capes.createBrowser(true);
    browserInstance = browser;
    pageInstance = page;
  }
  return { browser: browserInstance, page: pageInstance };
}

/**
 * Cleanup browser instance
 */
async function cleanup() {
  if (browserInstance) {
    await browserInstance.close();
    browserInstance = null;
    pageInstance = null;
  }
}

// Create MCP server
const server = new Server(
  {
    name: 'capes-connector',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Tool: capes_search
// Search CAPES portal for academic papers
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'capes_search',
        description: 'Search CAPES Portal de Periódicos for academic papers by keyword or topic. Returns metadata including title, authors, abstract, year, access type, and publisher links.',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query (keyword, topic, or phrase)',
            },
            maxResults: {
              type: 'number',
              description: 'Maximum number of results to return (default: 20)',
              default: 20,
            },
          },
          required: ['query'],
        },
      },
      {
        name: 'capes_get_fulltext',
        description: 'Get full-text content from a CAPES article. Automatically navigates to article detail page, gets publisher URL, and extracts full-text. Supports SciELO and other publishers. Returns full-text, PDF URL, and metadata.',
        inputSchema: {
          type: 'object',
          properties: {
            capesArticleUrl: {
              type: 'string',
              description: 'CAPES article URL (from search results articleUrl field)',
            },
          },
          required: ['capesArticleUrl'],
        },
      },
      {
        name: 'capes_test_connection',
        description: 'Test CAPES portal login credentials. Use this to verify credentials are working before searching.',
        inputSchema: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              description: 'CAPES username (optional - uses stored credentials if not provided)',
            },
            password: {
              type: 'string',
              description: 'CAPES password (optional - uses stored credentials if not provided)',
            },
            saveCredentials: {
              type: 'boolean',
              description: 'Save credentials for future use (default: false)',
              default: false,
            },
          },
        },
      },
      {
        name: 'capes_list_publishers',
        description: 'List supported publishers for full-text extraction.',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'capes_search': {
        const { query, maxResults = 20 } = args;

        // Get credentials
        const creds = auth.getCredentials();
        if (!creds) {
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  error: 'No credentials found. Please run capes_test_connection with username and password to save credentials first.',
                }, null, 2),
              },
            ],
          };
        }

        // Get browser and login
        const { page } = await getBrowser();
        const loggedIn = await capes.login(page, creds.username, creds.password);

        if (!loggedIn) {
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  error: 'Login failed. Please check credentials with capes_test_connection.',
                }, null, 2),
              },
            ],
          };
        }

        // Perform search
        const results = await capes.search(page, query, { maxResults });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                query: query,
                totalResults: results.length,
                results: results,
              }, null, 2),
            },
          ],
        };
      }

      case 'capes_get_fulltext': {
        const { capesArticleUrl } = args;

        // Get browser
        const { page } = await getBrowser();

        // Get publisher URL and extract full-text
        const result = await capesFulltext.extractFullTextFromResult(page, { articleUrl: capesArticleUrl });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case 'capes_test_connection': {
        const { username, password, saveCredentials = false } = args;

        // Use provided credentials or stored credentials
        let creds;
        if (username && password) {
          creds = { username, password };
          if (saveCredentials) {
            auth.storeCredentials(username, password);
          }
        } else {
          creds = auth.getCredentials();
          if (!creds) {
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    success: false,
                    error: 'No credentials provided and no stored credentials found.',
                  }, null, 2),
                },
              ],
            };
          }
        }

        // Test login
        const { browser, page } = await capes.createBrowser(true);
        const loggedIn = await capes.login(page, creds.username, creds.password);
        await browser.close();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                success: loggedIn,
                message: loggedIn
                  ? 'Login successful! Credentials are valid.'
                  : 'Login failed. Please check your username and password.',
                credentialsSaved: saveCredentials && loggedIn,
              }, null, 2),
            },
          ],
        };
      }

      case 'capes_list_publishers': {
        const supportedPublishers = publishers.getSupportedPublishers();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                supported: supportedPublishers,
                note: 'More publishers will be added over time. If full-text extraction fails, the tool will return the publisher URL for manual access.',
              }, null, 2),
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            error: error.message,
            stack: error.stack,
          }, null, 2),
        },
      ],
      isError: true,
    };
  }
});

// Cleanup on exit
process.on('SIGINT', async () => {
  await cleanup();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await cleanup();
  process.exit(0);
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('CAPES Connector MCP server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

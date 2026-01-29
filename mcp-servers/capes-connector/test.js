/**
 * Test script for CAPES Connector
 * Run this to test the MCP server locally before integrating with Claude
 */

import * as capes from './src/capes.js';
import * as auth from './src/auth.js';
import * as publishers from './src/publishers/index.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function testConnection() {
  console.log('\n=== Testing CAPES Connection ===\n');

  let username, password;

  // Check for stored credentials
  const stored = auth.getCredentials();
  if (stored) {
    console.log('Found stored credentials.');
    const useStored = await prompt('Use stored credentials? (y/n): ');
    if (useStored.toLowerCase() === 'y') {
      username = stored.username;
      password = stored.password;
    }
  }

  // Get credentials if not using stored
  if (!username || !password) {
    username = await prompt('CAPES Username: ');
    password = await prompt('CAPES Password: ');

    const save = await prompt('Save credentials? (y/n): ');
    if (save.toLowerCase() === 'y') {
      auth.storeCredentials(username, password);
      console.log('Credentials saved to ~/.capes-credentials.json');
    }
  }

  console.log('\nTesting login...');
  const { browser, page } = await capes.createBrowser(false); // Non-headless for debugging

  const loggedIn = await capes.login(page, username, password);

  if (loggedIn) {
    console.log('✅ Login successful!');
    return { browser, page };
  } else {
    console.log('❌ Login failed. Please check your credentials.');
    await browser.close();
    return null;
  }
}

async function testSearch(page) {
  console.log('\n=== Testing Search ===\n');

  const query = await prompt('Enter search query (or press Enter for "gestao de projectos"): ');
  const searchQuery = query.trim() || 'gestao de projectos';

  console.log(`\nSearching for: "${searchQuery}"...`);

  const results = await capes.search(page, searchQuery, { maxResults: 5 });

  console.log(`\nFound ${results.length} results:\n`);

  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.title}`);
    console.log(`   Authors: ${result.authors}`);
    console.log(`   Year: ${result.year}`);
    console.log(`   Open Access: ${result.openAccess ? 'Yes' : 'No'}`);
    console.log(`   Publisher URL: ${result.publisherUrl}`);
    console.log('');
  });

  return results;
}

async function testFullText(page, results) {
  if (results.length === 0) {
    console.log('No results to extract full-text from.');
    return;
  }

  console.log('\n=== Testing Full-Text Extraction ===\n');

  const choice = await prompt(`Select a result (1-${results.length}) or 0 to skip: `);
  const index = parseInt(choice) - 1;

  if (index < 0 || index >= results.length) {
    console.log('Skipping full-text extraction.');
    return;
  }

  const result = results[index];
  console.log(`\nExtracting full-text from: ${result.title}\n`);

  if (!result.publisherUrl) {
    console.log('❌ No publisher URL available for this result.');
    return;
  }

  const extraction = await publishers.extractFullText(page, result.publisherUrl);

  console.log('Extraction result:');
  console.log(`Source: ${extraction.source}`);
  console.log(`Success: ${extraction.success}`);

  if (extraction.success) {
    console.log(`\nMetadata:`);
    console.log(JSON.stringify(extraction.metadata, null, 2));

    if (extraction.pdfUrl) {
      console.log(`\nPDF URL: ${extraction.pdfUrl}`);
    }

    if (extraction.fullText) {
      console.log(`\nFull-text (first 500 chars):`);
      console.log(extraction.fullText.substring(0, 500) + '...');
    }
  } else {
    console.log(`\nError: ${extraction.error}`);
    if (extraction.metadata) {
      console.log('Note:', extraction.metadata.note);
    }
  }
}

async function main() {
  console.log('CAPES Connector Test Script');
  console.log('===========================\n');

  try {
    // Test connection
    const browserInfo = await testConnection();
    if (!browserInfo) {
      rl.close();
      return;
    }

    const { browser, page } = browserInfo;

    // Test search
    const results = await testSearch(page);

    // Test full-text extraction
    await testFullText(page, results);

    // Cleanup
    console.log('\nTest complete! Closing browser...');
    await browser.close();

  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    rl.close();
  }
}

main();

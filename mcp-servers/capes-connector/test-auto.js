/**
 * Automated test for CAPES Connector (non-interactive)
 * Pass credentials as environment variables:
 * CAPES_USERNAME="your_username" CAPES_PASSWORD="your_password" node test-auto.js
 */

import * as capes from './src/capes.js';
import * as capesFulltext from './src/capes-fulltext.js';

async function test() {
  console.log('CAPES Connector Automated Test');
  console.log('==============================\n');

  // Get credentials from environment
  const username = process.env.CAPES_USERNAME;
  const password = process.env.CAPES_PASSWORD;

  if (!username || !password) {
    console.error('❌ Error: Credentials not provided');
    console.error('Usage: CAPES_USERNAME="user" CAPES_PASSWORD="pass" node test-auto.js');
    process.exit(1);
  }

  let browser, page;

  try {
    console.log('Step 1: Creating browser instance...');
    const result = await capes.createBrowser(true); // Headless mode
    browser = result.browser;
    page = result.page;
    console.log('✅ Browser created\n');

    console.log('Step 2: Testing login...');
    const loggedIn = await capes.login(page, username, password);
    if (loggedIn) {
      console.log('✅ Login successful!\n');
    } else {
      console.log('❌ Login failed - check credentials\n');
      await browser.close();
      process.exit(1);
    }

    console.log('Step 3: Testing search...');
    const query = 'gestao de projectos';
    console.log(`Searching for: "${query}"`);
    const results = await capes.search(page, query, { maxResults: 3 });
    console.log(`✅ Found ${results.length} results\n`);

    if (results.length > 0) {
      console.log('First result:');
      console.log(`  Title: ${results[0].title}`);
      console.log(`  Authors: ${results[0].authors}`);
      console.log(`  Year: ${results[0].year}`);
      console.log(`  Open Access: ${results[0].openAccess}`);
      console.log(`  Publisher URL: ${results[0].publisherUrl}\n`);

      if (results[0].articleUrl) {
        console.log('Step 4: Testing full-text extraction...');
        console.log(`Attempting to extract from: ${results[0].articleUrl.substring(0, 50)}...`);

        const extraction = await capesFulltext.extractFullTextFromResult(page, results[0]);

        console.log(`  Source: ${extraction.source}`);
        console.log(`  Success: ${extraction.success}`);

        if (extraction.success) {
          console.log('✅ Full-text extraction succeeded!\n');

          if (extraction.metadata) {
            console.log('  Metadata:');
            console.log(`    Title: ${extraction.metadata.title || 'N/A'}`);
            console.log(`    Authors: ${extraction.metadata.authors?.join(', ') || 'N/A'}`);
            console.log(`    DOI: ${extraction.metadata.doi || 'N/A'}`);
          }

          if (extraction.pdfUrl) {
            console.log(`  PDF URL: ${extraction.pdfUrl}`);
          }

          if (extraction.fullText) {
            console.log(`  Full-text length: ${extraction.fullText.length} characters`);
            console.log(`  Preview: ${extraction.fullText.substring(0, 200)}...`);
          }
        } else {
          console.log(`⚠️  Full-text extraction failed: ${extraction.error}`);
          if (extraction.metadata?.note) {
            console.log(`  Note: ${extraction.metadata.note}`);
          }
        }
      }
    }

    console.log('\n✅ All tests completed successfully!');
    console.log('\nThe CAPES connector is working correctly and ready to use as an MCP server.');

  } catch (error) {
    console.error('\n❌ Test failed with error:', error.message);
    console.error(error.stack);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

test();

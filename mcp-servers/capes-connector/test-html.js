/**
 * Test to dump HTML structure of results page
 */

import * as capes from './src/capes.js';
import fs from 'fs';

const username = 'natalieosantos';
const password = 'S@ntos22';

async function test() {
  console.log('Dumping HTML structure...\n');

  const { browser, page } = await capes.createBrowser(true);

  try {
    // Login
    console.log('Logging in...');
    await capes.login(page, username, password);
    console.log('Login successful\n');

    // Navigate and search
    console.log('Navigating to main page...');
    await page.goto('https://www.periodicos.capes.gov.br/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);

    console.log('Searching...');
    const searchInput = page.locator('input[placeholder*="você procura"]').first();
    await searchInput.fill('gestao de projectos');
    await searchInput.press('Enter');
    await page.waitForTimeout(5000);

    console.log('Extracting HTML...\n');
    const html = await page.content();

    // Save HTML to file
    fs.writeFileSync('results-page.html', html);
    console.log('HTML saved to: results-page.html');

    // Try to find results with different selectors
    console.log('\nTrying different selectors:');
    const selectors = [
      'li.resultado',
      'div.resultado',
      '.result-item',
      'li[data-resource]',
      'article',
      '.item',
      '[class*="result"]',
      'li',
      'div.row',
      '.card'
    ];

    for (const selector of selectors) {
      const count = await page.locator(selector).count();
      if (count > 0) {
        console.log(`  ${selector}: ${count} elements`);
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

test();

/**
 * Debug test with screenshots
 */

import * as capes from './src/capes.js';
import path from 'path';

const username = process.env.CAPES_USERNAME || 'natalieosantos';
const password = process.env.CAPES_PASSWORD || 'S@ntos22';

async function test() {
  console.log('CAPES Debug Test with Screenshots\n');

  const { browser, page } = await capes.createBrowser(false); // Non-headless to see what's happening

  try {
    // Login
    console.log('Logging in...');
    const loggedIn = await capes.login(page, username, password);
    await page.screenshot({ path: 'screenshot-1-after-login.png', fullPage: true });
    console.log(`Login: ${loggedIn ? 'SUCCESS' : 'FAILED'}`);
    console.log('Screenshot saved: screenshot-1-after-login.png\n');

    if (!loggedIn) {
      await browser.close();
      return;
    }

    // Navigate to main page
    console.log('Navigating to main page...');
    await page.goto('https://www.periodicos.capes.gov.br/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshot-2-main-page.png', fullPage: true });
    console.log('Screenshot saved: screenshot-2-main-page.png\n');

    // Try to find and use search
    console.log('Looking for search input...');
    const searchInput = page.locator('input[placeholder*="você procura"]').first();
    const isVisible = await searchInput.isVisible().catch(() => false);
    console.log(`Search input visible: ${isVisible}\n`);

    if (isVisible) {
      console.log('Filling search query...');
      await searchInput.fill('gestao de projectos');
      await page.screenshot({ path: 'screenshot-3-search-filled.png', fullPage: true });
      console.log('Screenshot saved: screenshot-3-search-filled.png\n');

      console.log('Pressing Enter...');
      await searchInput.press('Enter');
      await page.waitForTimeout(5000); // Wait for results
      await page.screenshot({ path: 'screenshot-4-after-search.png', fullPage: true });
      console.log('Screenshot saved: screenshot-4-after-search.png\n');

      console.log(`Current URL: ${page.url()}`);
    }

    console.log('\nDone! Check screenshots in the connector directory.');
    console.log('Press Ctrl+C to close browser...');

    // Keep browser open for manual inspection
    await new Promise(resolve => setTimeout(resolve, 300000)); // 5 minutes

  } catch (error) {
    console.error('Error:', error.message);
    await page.screenshot({ path: 'screenshot-error.png', fullPage: true });
  } finally {
    await browser.close();
  }
}

test();

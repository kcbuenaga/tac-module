/**
 * CAPES Portal automation - login, search, and result extraction
 */

import { chromium } from 'playwright';

const CAPES_URL = 'https://www.periodicos.capes.gov.br/';
const LOGIN_URL = 'https://www-periodicos-capes-gov-br.ezl.periodicos.capes.gov.br/index.php?option=com_plogin&ym=3';

/**
 * Login to CAPES portal
 * @param {Object} page - Playwright page object
 * @param {string} username
 * @param {string} password
 * @returns {Promise<boolean>} Success status
 */
export async function login(page, username, password) {
  try {
    // Navigate to CAPES portal
    await page.goto(CAPES_URL, { waitUntil: 'networkidle' });

    // Click "Entrar" button to open login modal
    await page.click('text=Entrar');

    // Wait for login form
    await page.waitForSelector('input[placeholder*="Nome do usuário"]', { timeout: 10000 });

    // Fill login form
    await page.fill('input[placeholder*="Nome do usuário"]', username);
    await page.fill('input[placeholder*="Digite sua senha"]', password);

    // Click login button
    await page.click('button:has-text("Entrar")');

    // Wait for navigation after login
    await page.waitForNavigation({ timeout: 15000 }).catch(() => {});

    // Check if login was successful by looking for user indicator
    await page.waitForTimeout(2000);
    const loggedIn = await page.locator('text=/Olá.*|Acesso CAFe/i').count() > 0;

    return loggedIn;
  } catch (error) {
    console.error('Login error:', error.message);
    return false;
  }
}

/**
 * Search CAPES portal
 * @param {Object} page - Playwright page object
 * @param {string} query - Search query
 * @param {Object} options - Search options
 * @returns {Promise<Array>} Search results
 */
export async function search(page, query, options = {}) {
  try {
    const {
      scope = 'all', // 'all', 'open', 'subscribed'
      maxResults = 20
    } = options;

    // After login, navigate to main portal page
    await page.goto(CAPES_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);

    // Look for search interface (not the login form)
    // Try multiple selectors to find the actual search box
    let searchInput = null;
    const selectors = [
      'input[placeholder*="você procura"]',
      'input[placeholder*="procura"]',
      'input[name="query"]',
      'input[name="search"]',
      'input[aria-label*="busca"]',
      'input[aria-label*="search"]',
      '#search-input',
      '.search-input',
      'input[type="search"]',
    ];

    for (const selector of selectors) {
      const input = page.locator(selector);
      const count = await input.count();
      if (count > 0) {
        const isVisible = await input.first().isVisible().catch(() => false);
        if (isVisible) {
          searchInput = input.first();
          console.error(`Found search input with selector: ${selector}`);
          break;
        }
      }
    }

    if (!searchInput) {
      // Fallback: find any visible text input that's not in login form
      const allInputs = await page.locator('input[type="text"]:visible').all();
      for (const input of allInputs) {
        const id = await input.getAttribute('id').catch(() => '');
        const name = await input.getAttribute('name').catch(() => '');
        // Skip login form inputs
        if (!id.includes('usuario') && !name.includes('username') && !name.includes('password')) {
          searchInput = input;
          console.error('Found search input via fallback method');
          break;
        }
      }
    }

    if (!searchInput) {
      throw new Error('Could not find search input on page');
    }

    // Fill search query
    await searchInput.fill(query);
    await searchInput.press('Enter');

    // Wait for results page to load
    await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(3000);

    // Extract results
    const results = await extractSearchResults(page, maxResults);

    return results;
  } catch (error) {
    console.error('Search error:', error.message);
    return [];
  }
}

/**
 * Extract search results from page
 * @param {Object} page - Playwright page object
 * @param {number} maxResults - Maximum number of results to extract
 * @returns {Promise<Array>} Extracted results
 */
async function extractSearchResults(page, maxResults) {
  try {
    // Wait a bit for results to fully render
    await page.waitForTimeout(2000);

    // CAPES results page structure (from actual page inspection)
    // Each result is in a div with class "result-busca"
    const resultElements = await page.locator('.result-busca').all();

    const results = [];
    const limit = Math.min(resultElements.length, maxResults);

    console.error(`Found ${resultElements.length} result elements, extracting ${limit}...`);

    for (let i = 0; i < limit; i++) {
      const element = resultElements[i];

      try {
        // Extract title (usually in an <a> tag)
        const titleLink = element.locator('a').first();
        const title = await titleLink.textContent().catch(() => '');
        const titleHref = await titleLink.getAttribute('href').catch(() => '');

        // Extract all text content from element for parsing
        const fullText = await element.textContent().catch(() => '');

        // Extract authors (usually after title, before abstract)
        const lines = fullText.split('\n').map(l => l.trim()).filter(l => l);
        let authors = '';
        if (lines.length > 1) {
          // Second line is usually authors
          authors = lines[1];
        }

        // Extract year from text
        const yearMatch = fullText.match(/\b(19|20)\d{2}\b/);
        const year = yearMatch ? yearMatch[0] : '';

        // Check for open access badge
        const isOpenAccess = fullText.toLowerCase().includes('acesso aberto') ||
                            fullText.toLowerCase().includes('open access');

        // Check for peer reviewed badge
        const isPeerReviewed = fullText.toLowerCase().includes('revisado por pares') ||
                               fullText.toLowerCase().includes('peer reviewed');

        // Get article detail URL (combine with base if relative)
        let articleUrl = '';
        if (titleHref) {
          if (titleHref.startsWith('http')) {
            articleUrl = titleHref;
          } else if (titleHref.startsWith('/')) {
            articleUrl = `https://www.periodicos.capes.gov.br${titleHref}`;
          } else {
            articleUrl = `https://www.periodicos.capes.gov.br/index.php/${titleHref}`;
          }
        }

        // Extract abstract (usually in a <p> or div after title/authors)
        const abstractElement = element.locator('p, div.abstract, div.resumo').first();
        const abstract = await abstractElement.textContent().catch(() => '');

        if (title && title.trim()) {
          results.push({
            title: title.trim(),
            authors: authors.substring(0, 200).trim(), // Limit length
            abstract: abstract.trim().substring(0, 500), // Limit abstract length
            year: year,
            openAccess: isOpenAccess,
            peerReviewed: isPeerReviewed,
            articleUrl: articleUrl,
            publisherUrl: articleUrl // For now, use same URL - we'll get publisher link from detail page
          });
        }
      } catch (error) {
        console.error(`Error extracting result ${i}:`, error.message);
        continue;
      }
    }

    console.error(`Successfully extracted ${results.length} results`);
    return results;
  } catch (error) {
    console.error('Error extracting search results:', error.message);
    return [];
  }
}

/**
 * Get publisher URL from article page
 * @param {Object} page - Playwright page object
 * @param {string} articleUrl - CAPES article detail URL
 * @returns {Promise<string|null>} Publisher URL or null
 */
export async function getPublisherUrl(page, articleUrl) {
  try {
    await page.goto(articleUrl, { waitUntil: 'networkidle' });

    // Look for "Ver no editor" button
    const editorButton = page.locator('a:has-text("Ver no editor"), button:has-text("Ver no editor")').first();
    const publisherUrl = await editorButton.getAttribute('href').catch(() => null);

    return publisherUrl;
  } catch (error) {
    console.error('Error getting publisher URL:', error.message);
    return null;
  }
}

/**
 * Create a new browser instance
 * @param {boolean} headless - Run browser in headless mode
 * @returns {Promise<Object>} {browser, page}
 */
export async function createBrowser(headless = true) {
  const browser = await chromium.launch({ headless });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await context.newPage();

  return { browser, page, context };
}

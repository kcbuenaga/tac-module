/**
 * Full-text extraction workflow
 * Handles getting publisher URL from CAPES detail page, then extracting full-text
 */

import * as publishers from './publishers/index.js';

/**
 * Get publisher URL from CAPES article detail page
 * @param {Object} page - Playwright page object
 * @param {string} capesArticleUrl - CAPES article detail URL
 * @returns {Promise<string|null>} Publisher URL or null
 */
export async function getPublisherUrlFromCapes(page, capesArticleUrl) {
  try {
    console.error(`Navigating to CAPES article page: ${capesArticleUrl}`);
    await page.goto(capesArticleUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2000);

    // Look for "Ver no editor" button or publisher link
    const publisherLink = await page.locator('a:has-text("Ver no editor"), a:has-text("Acessar"), a[href*="doi.org"], a[href*="scielo"]').first();
    const publisherUrl = await publisherLink.getAttribute('href').catch(() => null);

    if (publisherUrl) {
      console.error(`Found publisher URL: ${publisherUrl.substring(0, 80)}...`);

      // If it's a DOI link, follow the redirect to get actual publisher URL
      if (publisherUrl.includes('doi.org')) {
        console.error('DOI link detected, following redirect...');
        try {
          await page.goto(publisherUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
          await page.waitForTimeout(2000);
          const finalUrl = page.url();
          console.error(`Redirected to: ${finalUrl.substring(0, 80)}...`);
          return finalUrl;
        } catch (error) {
          console.error(`Error following DOI redirect: ${error.message}`);
          return publisherUrl; // Return original DOI if redirect fails
        }
      }

      return publisherUrl;
    }

    console.error('No publisher URL found on detail page');
    return null;
  } catch (error) {
    console.error('Error getting publisher URL:', error.message);
    return null;
  }
}

/**
 * Extract full-text from a search result
 * @param {Object} page - Playwright page object
 * @param {Object} searchResult - Search result object with articleUrl
 * @returns {Promise<Object>} Extraction result
 */
export async function extractFullTextFromResult(page, searchResult) {
  try {
    // Step 1: Get publisher URL from CAPES detail page
    const publisherUrl = await getPublisherUrlFromCapes(page, searchResult.articleUrl);

    if (!publisherUrl) {
      return {
        success: false,
        error: 'Could not find publisher URL on CAPES detail page',
        fullText: null,
        pdfUrl: null,
        metadata: {
          capesUrl: searchResult.articleUrl,
          note: 'No "Ver no editor" link found - article may not have full-text access'
        },
        source: 'capes'
      };
    }

    // Step 2: Extract full-text from publisher
    const result = await publishers.extractFullText(page, publisherUrl);

    // Add original search result metadata
    if (result.metadata) {
      result.metadata.capesTitle = searchResult.title;
      result.metadata.capesAuthors = searchResult.authors;
      result.metadata.capesYear = searchResult.year;
    }

    return result;
  } catch (error) {
    return {
      success: false,
      error: error.message,
      fullText: null,
      pdfUrl: null,
      metadata: null,
      source: 'error'
    };
  }
}

/**
 * SciELO publisher full-text extractor
 */

import { BasePublisher } from './base.js';

export class ScieloPublisher extends BasePublisher {
  constructor() {
    super('SciELO', ['scielo.br', 'scielo.org']);
  }

  /**
   * Extract full-text from SciELO article page
   * @param {Object} page - Playwright page object
   * @param {string} url - SciELO article URL
   * @returns {Promise<Object>} {success, fullText, pdfUrl, metadata}
   */
  async extractFullText(page, url) {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Extract metadata
      const metadata = await this.extractMetadata(page);

      // Try to get PDF URL
      const pdfUrl = await this.getPdfUrl(page);

      // Extract full-text HTML (abstract + main text)
      const fullText = await this.extractHtmlText(page);

      return {
        success: true,
        fullText: fullText || null,
        pdfUrl: pdfUrl || null,
        metadata: metadata,
        source: 'scielo'
      };
    } catch (error) {
      console.error('SciELO extraction error:', error.message);
      return {
        success: false,
        error: error.message,
        fullText: null,
        pdfUrl: null,
        metadata: null,
        source: 'scielo'
      };
    }
  }

  /**
   * Extract metadata from SciELO page
   * @param {Object} page - Playwright page object
   * @returns {Promise<Object>} Metadata object
   */
  async extractMetadata(page) {
    try {
      const metadata = {};

      // Extract title
      metadata.title = await page.locator('h1, .article-title').first().textContent().catch(() => '');

      // Extract authors
      const authorElements = await page.locator('.author, [class*="autor"]').all();
      metadata.authors = [];
      for (const el of authorElements) {
        const author = await el.textContent().catch(() => '');
        if (author.trim()) metadata.authors.push(author.trim());
      }

      // Extract DOI
      metadata.doi = await page.locator('a[href*="doi.org"]').first().textContent().catch(() => '');

      // Extract journal info
      metadata.journal = await page.locator('[class*="journal"], [class*="revista"]').first().textContent().catch(() => '');

      // Extract year
      const pageText = await page.textContent('body');
      const yearMatch = pageText.match(/\b(19|20)\d{2}\b/);
      metadata.year = yearMatch ? yearMatch[0] : '';

      return metadata;
    } catch (error) {
      console.error('Metadata extraction error:', error.message);
      return {};
    }
  }

  /**
   * Get PDF URL from SciELO page
   * @param {Object} page - Playwright page object
   * @returns {Promise<string|null>} PDF URL or null
   */
  async getPdfUrl(page) {
    try {
      // Look for PDF link (common patterns in SciELO)
      const pdfLink = await page.locator('a[href$=".pdf"], a:has-text("PDF"), a[title*="PDF"]').first();
      const pdfUrl = await pdfLink.getAttribute('href').catch(() => null);

      if (pdfUrl) {
        // Make sure URL is absolute
        if (pdfUrl.startsWith('http')) {
          return pdfUrl;
        } else {
          const baseUrl = page.url();
          const urlObj = new URL(baseUrl);
          return `${urlObj.protocol}//${urlObj.host}${pdfUrl}`;
        }
      }

      return null;
    } catch (error) {
      console.error('PDF URL extraction error:', error.message);
      return null;
    }
  }

  /**
   * Extract HTML text content from SciELO article
   * @param {Object} page - Playwright page object
   * @returns {Promise<string>} Extracted text
   */
  async extractHtmlText(page) {
    try {
      const sections = [];

      // Extract abstract (Resumos section)
      const abstractElement = page.locator('[id*="resumo"], [class*="abstract"], section:has-text("Resumos")').first();
      const abstract = await abstractElement.textContent().catch(() => '');
      if (abstract.trim()) {
        sections.push('## Abstract / Resumo\n\n' + abstract.trim());
      }

      // Extract main text
      const mainContent = page.locator('article, main, [class*="article-body"], [class*="texto"]').first();
      const mainText = await mainContent.textContent().catch(() => '');
      if (mainText.trim()) {
        sections.push('## Main Text\n\n' + mainText.trim());
      }

      // Extract references section if available
      const referencesElement = page.locator('[id*="referencia"], section:has-text("Referências")').first();
      const references = await referencesElement.textContent().catch(() => '');
      if (references.trim()) {
        sections.push('## References\n\n' + references.trim());
      }

      return sections.join('\n\n---\n\n');
    } catch (error) {
      console.error('HTML text extraction error:', error.message);
      return '';
    }
  }
}

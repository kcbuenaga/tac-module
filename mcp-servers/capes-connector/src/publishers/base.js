/**
 * Base publisher interface
 * All publisher extractors should extend this class
 */

export class BasePublisher {
  constructor(name, domains) {
    this.name = name;
    this.domains = domains; // Array of domain patterns this publisher handles
  }

  /**
   * Check if this publisher can handle the given URL
   * @param {string} url
   * @returns {boolean}
   */
  canHandle(url) {
    return this.domains.some(domain => url.includes(domain));
  }

  /**
   * Extract full-text from publisher page
   * @param {Object} page - Playwright page object
   * @param {string} url - Publisher URL
   * @returns {Promise<Object>} {success, fullText, pdfUrl, metadata}
   */
  async extractFullText(page, url) {
    throw new Error('extractFullText must be implemented by subclass');
  }

  /**
   * Common helper: Extract text from PDF if available
   * @param {Object} page - Playwright page object
   * @param {string} pdfUrl - URL to PDF
   * @returns {Promise<string|null>} Extracted text or null
   */
  async extractFromPdf(page, pdfUrl) {
    // Note: PDF text extraction would require additional library (pdf-parse)
    // For now, return the PDF URL for client-side handling
    return null;
  }
}

/**
 * Publisher router - routes to appropriate publisher extractor
 */

import { ScieloPublisher } from './scielo.js';

// Registry of all supported publishers
const publishers = [
  new ScieloPublisher(),
  // Add more publishers here as they're implemented
  // new JstorPublisher(),
  // new SpringerPublisher(),
  // etc.
];

/**
 * Get the appropriate publisher for a given URL
 * @param {string} url - Publisher URL
 * @returns {BasePublisher|null} Publisher instance or null
 */
export function getPublisher(url) {
  for (const publisher of publishers) {
    if (publisher.canHandle(url)) {
      return publisher;
    }
  }
  return null;
}

/**
 * Extract full-text using the appropriate publisher extractor
 * @param {Object} page - Playwright page object
 * @param {string} url - Publisher URL
 * @returns {Promise<Object>} Extraction result
 */
export async function extractFullText(page, url) {
  const publisher = getPublisher(url);

  if (!publisher) {
    return {
      success: false,
      error: 'Unsupported publisher',
      fullText: null,
      pdfUrl: null,
      metadata: {
        publisherUrl: url,
        note: 'This publisher is not yet supported. Supported: SciELO'
      },
      source: 'unknown'
    };
  }

  try {
    return await publisher.extractFullText(page, url);
  } catch (error) {
    return {
      success: false,
      error: error.message,
      fullText: null,
      pdfUrl: null,
      metadata: null,
      source: publisher.name
    };
  }
}

/**
 * Get list of supported publishers
 * @returns {Array<string>} Publisher names
 */
export function getSupportedPublishers() {
  return publishers.map(p => p.name);
}

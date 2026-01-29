/**
 * Authentication and credential management for CAPES portal
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Credential storage path (in user's home directory)
const CREDS_PATH = path.join(process.env.HOME || process.env.USERPROFILE, '.capes-credentials.json');

/**
 * Get stored credentials
 * @returns {Object|null} {username, password} or null if not found
 */
export function getCredentials() {
  try {
    if (fs.existsSync(CREDS_PATH)) {
      const data = fs.readFileSync(CREDS_PATH, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading credentials:', error.message);
  }
  return null;
}

/**
 * Store credentials securely
 * @param {string} username
 * @param {string} password
 */
export function storeCredentials(username, password) {
  try {
    const data = JSON.stringify({ username, password }, null, 2);
    fs.writeFileSync(CREDS_PATH, data, { mode: 0o600 }); // Read/write for owner only
    return true;
  } catch (error) {
    console.error('Error storing credentials:', error.message);
    return false;
  }
}

/**
 * Clear stored credentials
 */
export function clearCredentials() {
  try {
    if (fs.existsSync(CREDS_PATH)) {
      fs.unlinkSync(CREDS_PATH);
    }
    return true;
  } catch (error) {
    console.error('Error clearing credentials:', error.message);
    return false;
  }
}

/**
 * Check if credentials are stored
 * @returns {boolean}
 */
export function hasCredentials() {
  return fs.existsSync(CREDS_PATH);
}

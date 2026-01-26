const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');
const platformCodes = require(path.join(__dirname, '../../../../tools/cli/lib/platform-codes'));

/**
 * TAC: Thesis Advisory Companion Module Installer
 */
async function install(options) {
  const { projectRoot, config, installedIDEs, logger } = options;

  try {
    logger.log(chalk.blue('Installing TAC: Thesis Advisory Companion...'));

    // Create thesis_artifacts directory
    if (config.thesis_artifacts) {
      const dirConfig = config.thesis_artifacts.replace('{project-root}/', '');
      const dirPath = path.join(projectRoot, dirConfig);
      if (!(await fs.pathExists(dirPath))) {
        logger.log(chalk.yellow(`Creating thesis artifacts directory: ${dirConfig}`));
        await fs.ensureDir(dirPath);
      } else {
        logger.log(chalk.gray(`Thesis artifacts directory already exists: ${dirConfig}`));
      }
    }

    // IDE-specific configuration
    if (installedIDEs && installedIDEs.length > 0) {
      for (const ide of installedIDEs) {
        await configureForIDE(ide, projectRoot, config, logger);
      }
    }

    logger.log(chalk.green('✓ TAC installation complete'));
    logger.log(chalk.cyan('  Your thesis companion is ready to help!'));
    return true;
  } catch (error) {
    logger.error(chalk.red(`Error installing TAC module: ${error.message}`));
    return false;
  }
}

async function configureForIDE(ide, projectRoot, config, logger) {
  if (!platformCodes.isValidPlatform(ide)) {
    logger.warn(chalk.yellow(`Unknown platform: '${ide}'. Skipping.`));
    return;
  }

  const platformSpecificPath = path.join(__dirname, 'platform-specifics', `${ide}.js`);

  try {
    if (await fs.pathExists(platformSpecificPath)) {
      const platformHandler = require(platformSpecificPath);
      if (typeof platformHandler.install === 'function') {
        await platformHandler.install({ projectRoot, config, logger });
      }
    }
  } catch (error) {
    logger.warn(chalk.yellow(`Warning: Could not configure ${ide}: ${error.message}`));
  }
}

module.exports = { install };

/**
 * ESLint configuration.
 *
 * This configuration dynamically loads the appropriate preset based on the
 * project type specified in the eslint.cecilia.json file.
 *
 * @file eslint.config.js
 */
import fs from 'node:fs'
import path from 'node:path'

import cecilia from './rules/cecilia.js'
import prettier from './rules/prettier.js'

const configPath = path.resolve(process.cwd(), 'eslint.cecilia.json')

if (!fs.existsSync(configPath)) {
  throw new Error(
    '\n\n❌ [eslint-config-cecilia] Missing or invalid configuration.\n' +
      '💡 Run the following to set up ESLint properly:\n\n' +
      '   npx cecilia\n',
  )
}

let projectType

try {
  const configFile = JSON.parse(fs.readFileSync(configPath, 'utf8'))
  projectType = configFile.projectType
} catch {
  throw new Error(
    '[eslint-config-cecilia] Failed to parse eslint.cecilia.json. Run: npx cecilia',
  )
}

if (!projectType) {
  throw new Error(
    '[eslint-config-cecilia] Missing "projectType" in eslint-config.json. Run: npx cecilia',
  )
}

let presetConfig

try {
  presetConfig = (await import(`./presets/index.${projectType}.js`)).default
} catch (error) {
  throw new Error(
    `[eslint-config-cecilia] Unknown or unsupported projectType "${projectType}".\n` +
      '💡 Make sure you ran:\n\n' +
      '   npx cecilia\n\n' +
      error.message,
  )
}

export default [...presetConfig, prettier, cecilia]

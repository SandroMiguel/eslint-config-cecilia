const fs = require('node:fs')
const path = require('node:path')

const configPath = path.resolve(process.cwd(), 'eslint-config.json')

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
    '[eslint-config-cecilia] Failed to parse eslint-config.json. Run: npx cecilia',
  )
}

if (!projectType) {
  throw new Error(
    '[eslint-config-cecilia] Missing "projectType" in eslint-config.json. Run: npx cecilia',
  )
}

let config

try {
  config = require(`./presets/index.${projectType}.js`)
  config.extends.push('./rules/cecilia.js')
} catch {
  throw new Error(
    `[eslint-config-cecilia] Unknown or unsupported projectType "${projectType}".\n` +
      '💡 Make sure you ran:\n\n' +
      '   npx cecilia\n',
  )
}

module.exports = config

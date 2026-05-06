#!/usr/bin/env node

/**
 * Sets up the "eslint.config.mjs" file (Flat Config) with Cecilia preset.
 * @file bin/setup-eslint-config.mjs
 */

import readline from 'node:readline'
import fs from 'node:fs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve))

const ESLINT_CONFIG_FILE = 'eslint.config.mjs'
const LEGACY_FILES = [
  '.eslintrc.js',
  '.eslintrc.cjs',
  '.eslintrc.json',
  '.eslintrc',
]

;(async () => {
  const createConfig = await ask(
    'Do you want to create the "eslint.config.mjs" file automatically? (y/n) ',
  )

  if (createConfig.toLowerCase() !== 'y') {
    rl.close()
    return
  }

  // Check if eslint.config.mjs already exists
  if (fs.existsSync(ESLINT_CONFIG_FILE)) {
    const overwrite = await ask(
      '⚠️ eslint.config.mjs already exists. Overwrite it? (y/n) ',
    )

    if (overwrite.toLowerCase() !== 'y') {
      console.log('ℹ️ Skipped creating eslint.config.mjs')
      rl.close()
      return
    }
  }

  // Detect legacy config files
  const foundLegacy = LEGACY_FILES.filter((file) => fs.existsSync(file))

  if (foundLegacy.length > 0) {
    console.log('\n⚠️ Detected legacy ESLint config files:')
    foundLegacy.forEach((file) => console.log(` - ${file}`))

    const action = await ask(`
What do you want to do?

1. Rename to backup (*.backup)
2. Keep them (not recommended)

› `)

    if (action.trim() === '1') {
      foundLegacy.forEach((file) => {
        const backupName = `${file}.backup`
        fs.renameSync(file, backupName)
        console.log(`📦 Renamed ${file} → ${backupName}`)
      })
    } else {
      console.log('⚠️ Keeping legacy config files may cause confusion.')
    }
  }

  // Create flat config
  const content = `import cecilia from 'eslint-config-cecilia'

export default cecilia
`

  try {
    fs.writeFileSync(ESLINT_CONFIG_FILE, content)
    console.log('\n✅ eslint.config.mjs created successfully!')
  } catch (error) {
    console.error('❌ Failed to create eslint.config.mjs:', error)
  }

  rl.close()
})()

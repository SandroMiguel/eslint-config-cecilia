#!/usr/bin/env node

/**
 * Sets up the "eslint.config.mjs" file (Flat Config) with Cecilia preset.
 *
 * @file bin/setup-eslint-config.mjs
 */

import readline from 'node:readline'
import fs from 'node:fs'

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question(
  'Do you want to create the "eslint.config.mjs" file automatically? (y/n) ',
  (userInput) => {
    readLineInterface.close()

    if (userInput.toLowerCase() !== 'y') return

    const fileContent = `import cecilia from 'eslint-config-cecilia'

export default cecilia
`

    fs.writeFile('eslint.config.mjs', fileContent, (error) => {
      if (error) {
        console.error('❌ Failed to create eslint.config.mjs:', error)
        return
      }
      console.log('✅ The file eslint.config.mjs was created successfully!')
    })
  },
)

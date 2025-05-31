#!/usr/bin/env node

/**
 * Sets up the "eslint.config.js" file (Flat Config) with Cecilia preset.
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
  'Do you want to create the "eslint.config.js" file automatically? (y/n) ',
  (userInput) => {
    readLineInterface.close()

    if (userInput.toLowerCase() !== 'y') return

    const fileContent = `import cecilia from 'eslint-config-cecilia'

export default cecilia
`

    fs.writeFile('eslint.config.js', fileContent, (error) => {
      if (error) {
        console.error('❌ Failed to create eslint.config.js:', error)
        return
      }
      console.log('✅ The file eslint.config.js was created successfully!')
    })
  },
)

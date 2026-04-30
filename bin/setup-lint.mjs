#!/usr/bin/env node

/**
 * Prompts the user to add linting and formatting scripts to package.json.
 *
 * The generated scripts use ESLint with cache for better performance
 * and Prettier as a standalone formatter.
 *
 * @file bin/setup-lint.mjs
 */

import readline from 'node:readline'
import { exec } from 'node:child_process'

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question(
  'Do you wish to add the "lint" script commands in your package.json? (y/n) ',
  (userInput) => {
    readLineInterface.close()

    if (userInput.toLowerCase() === 'y') {
      exec(
        'npm pkg set scripts.lint="eslint \\"src/**/*.{js,jsx}\\" --cache" && ' +
          'npm pkg set scripts.lint:fix="eslint \\"src/**/*.{js,jsx}\\" --fix --cache" && ' +
          'npm pkg set scripts.format="prettier --write ."',
      )

      console.log(
        '✅ Scripts added! You can now run "npm run lint", "npm run lint:fix" and "npm run format".',
      )
    } else {
      console.log(
        'You can manually add the following scripts to your package.json:\n' +
          '"lint": "eslint \\"src/**/*.{js,jsx}\\" --cache",\n' +
          '"lint:fix": "eslint \\"src/**/*.{js,jsx}\\" --fix --cache",\n' +
          '"format": "prettier --write ."',
      )
    }
  },
)

#!/usr/bin/env node

import readline from 'node:readline'
import { exec } from 'node:child_process'

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question(
  'Do you wish to add the "lint" script command in your package.json? (y/n) ',
  (userInput) => {
    readLineInterface.close()
    if (userInput.toLowerCase() === 'y') {
      exec('npm pkg set scripts.lint="eslint ."')
      console.log('Now you can use "npm run lint" to lint your files.')
    } else {
      console.log(
        'You can manually add the following command in your package.json scripts: "lint": "eslint ."',
      )
    }
  },
)

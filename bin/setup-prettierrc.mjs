#!/usr/bin/env node

import readline from 'node:readline'
import fs from 'node:fs'

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question(
  'Do you wish to create the ".prettierrc.js" file automatically? (y/n) ',
  (userInput) => {
    readLineInterface.close()
    if (userInput.toLowerCase() === 'y') {
      fs.writeFile(
        '.prettierrc.js',
        'module.exports = { semi: false, singleQuote: true, trailingComma: "all" }',
        (error) => {
          if (error) {
            console.log(error)
            return
          }
          console.log('The file .prettierrc.js was created!')
        },
      )
    }
  },
)

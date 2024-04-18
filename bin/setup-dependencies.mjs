#!/usr/bin/env node

import readline from 'node:readline'
import { exec } from 'node:child_process'

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question(
  'Install dependencies with npm(1) or yarn(2) ? (1/2) ',
  (userInput) => {
    let install
    if (userInput.toLowerCase() === '1') {
      install = exec(
        'npm i -D eslint@^8 prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn',
      )
    } else if (userInput.toLowerCase() === '2') {
      install = exec(
        'yarn add --dev eslint@^8 prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn',
      )
    }
    install.stdout.pipe(process.stdout)
    readLineInterface.close()
  },
)

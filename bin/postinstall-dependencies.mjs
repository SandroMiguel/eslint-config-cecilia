import path from 'node:path'
import { fileURLToPath } from 'node:url'
import readline from 'node:readline'
import { fork } from 'node:child_process'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question('Install dependencies? (y/n) ', (userInput) => {
  if (userInput.toLowerCase() === 'y') {
    fork(`${dirname}/postinstall-dependencies-options.mjs`)
  }
  readLineInterface.close()
})

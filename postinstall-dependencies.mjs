import path from 'path'
import { fileURLToPath } from 'url'
import readline from 'readline'
import { fork } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question('Install dependencies? (y/n) ', (userInput) => {
  if (userInput.toLowerCase() === 'y') {
    fork(__dirname + '/postinstall-dependencies-options.mjs')
  }
  readLineInterface.close()
})

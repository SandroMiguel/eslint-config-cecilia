import readline from 'node:readline'
import fs from 'node:fs'

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readLineInterface.question(
  'Do you wish to create the ".eslintrc.js" file automatically? (y/n) ',
  (userInput) => {
    readLineInterface.close()
    if (userInput.toLowerCase() === 'y') {
      fs.writeFile('.eslintrc.js', '{"extends": "cecilia"}', (error) => {
        if (error) {
          console.log(error)
          return
        }
        console.log('The file was created!')
      })
    }
  },
)

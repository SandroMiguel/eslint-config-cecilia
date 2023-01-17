import readline from 'node:readline'
import { exec } from 'node:child_process'

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
// const readLineInterface = readline.createInterface({ input, output })

readLineInterface.question(
  'Do you wish to add the "lint" script command in your package.json? (y/n) ',
  (userInput) => {
    readLineInterface.close()
    if (userInput.toLowerCase() === 'y') {
      console.log('Now you can use "npm run lint" to lint your files.')
      exec('npm pkg set scripts.lint="eslint ."')
    } else {
      console.log(
        'You can manually add this command in your package.json scripts: "lint": "eslint ."',
      )
    }
  },
)

// const userInput = await readLineInterface.question(
//   'Do you wish to add the "lint" script command in your package.json (y/n)? ',
// )

// if (userInput.toLowerCase() === 'y') {
//   console.log('Now you can use "npm run lint" to lint your files.')
//   exec('npm pkg set scripts.lint="eslint ."')
// } else {
//   console.log(
//     'You can manually add this command in your package.json scripts: "lint": "eslint ."',
//   )
// }

// readLineInterface.close()

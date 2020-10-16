/* eslint-disable no-console */
const { ESLint } = require('eslint');

(async function run() {
  // 1. Create an instance.
  const eslint = new ESLint({ ignore: false })

  // 2. Lint files.
  const basePath = 'test/fixtures/'
  const results = await eslint.lintFiles([`${basePath}**/*.js`])
  // return results

  // await ESLint.outputFixes(results)

  // // 4. Format the results.
  // const formatter = await eslint.loadFormatter('stylish')
  // const resultText = formatter.format(results)

  // return resultText

  results.forEach(({ filePath, messages }) => {
    console.log('file ->', filePath)
    const folder = filePath.substring(
      filePath.indexOf(basePath) + basePath.length,
      filePath.lastIndexOf('/') + 1,
    )
    const filename = filePath.substring(filePath.lastIndexOf('/') + 1)
    const ruleId = filename.substring(0, filename.lastIndexOf('.'))

    describe(filename, () => {
      test('detect the correct error ID', () => {
        console.log('-->', ruleId, messages)
        expect(messages[0].ruleId).toStrictEqual(`${folder}${ruleId}`)
        console.log(
          `${filename} - ${messages[0].ruleId} | ${messages[0].message}`,
        )
      })
    })
  })
})()

// const results = run().then(res => {
//   // console.log('res ->', res)
//   return res
// })

// console.log('r:', results)

// results.forEach(({ filePath, messages }) => {
//   console.log('file ->', filePath)
//   const basePath = 'test/fixtures/'

//   const folder = filePath.substring(
//     filePath.indexOf(basePath) + basePath.length,
//     filePath.lastIndexOf('/') + 1,
//   )
//   const filename = filePath.substring(filePath.lastIndexOf('/') + 1)
//   const ruleId = filename.substring(0, filename.lastIndexOf('.'))

//   describe(filename, () => {
//     test('detect the correct error ID', () => {
//       console.log('-->', ruleId, messages)
//       expect(messages[0].ruleId).toStrictEqual(`${folder}${ruleId}`)
//       console.log(
//         `${filename} - ${messages[0].ruleId} | ${messages[0].message}`,
//       )
//     })
//   })
// })

// (async function main() {
//   // 1. Create an instance.
//   const eslint = new ESLint({ ignore: false })

//   // 2. Lint files.
//   const basePath = 'test/fixtures/'
//   const results = await eslint.lintFiles([`${basePath}**/*.js`])
//   //console.log('results:', results)

//   results.forEach(({ filePath, messages }) => {
//     console.log('file ->', filePath)
//     const folder = filePath.substring(
//       filePath.indexOf(basePath) + basePath.length,
//       filePath.lastIndexOf('/') + 1,
//     )
//     const filename = filePath.substring(filePath.lastIndexOf('/') + 1)
//     const ruleId = filename.substring(0, filename.lastIndexOf('.'))

//     describe(filename, () => {
//       test('detect the correct error ID', () => {
//         console.log('-->', ruleId, messages)
//         expect(messages[0].ruleId).toStrictEqual(`${folder}${ruleId}`)
//         console.log(
//           `${filename} - ${messages[0].ruleId} | ${messages[0].message}`,
//         )
//       })
//     })
//   })

//   // 3. Format the results.
//   const formatter = await eslint.loadFormatter('stylish')
//   const resultText = formatter.format(results)

//   // 4. Output it.
//   console.log(resultText)
// })().catch(error => {
//   process.exitCode = 1
//   console.error(error)
// });

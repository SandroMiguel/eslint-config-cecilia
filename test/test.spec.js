/* eslint-disable no-console */
const eslint = require('eslint')

const cli = new eslint.CLIEngine({
  ignore: false,
})
const basePath = 'test/fixtures/'
const report = cli.executeOnFiles(`${basePath}**/*`)

report.results.forEach(({ filePath, messages }) => {
  const folder = filePath.substring(
    filePath.indexOf(basePath) + basePath.length,
    filePath.lastIndexOf('/') + 1,
  )
  const filename = filePath.substring(filePath.lastIndexOf('/') + 1)
  const ruleId = filename.substring(0, filename.lastIndexOf('.'))

  describe(filename, () => {
    test('detect the correct error ID', () => {
      expect(messages[0].ruleId).toStrictEqual(`${folder}${ruleId}`)
      console.log(
        `${filename} - ${messages[0].ruleId} | ${messages[0].message}`,
      )
    })
  })
})

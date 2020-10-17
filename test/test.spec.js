const { ESLint } = require('eslint')

const fetchTestFiles = async rule => {
  const eslint = new ESLint({ ignore: false })
  const results = await eslint.lintFiles([`test/fixtures/**/${rule}.js`])
  return results
}

expect.extend({
  toBe(received, expected, message) {
    const pass = received === expected
    if (pass) {
      return {
        message: () => `expected '${expected}' | received '${received}'`,
        pass: true,
      }
    }
    return {
      message: () =>
        `${this.utils.matcherHint('toBe', received, expected)}\n` +
        `This test case expected violation of rule ${this.utils.printExpected(
          expected,
        )} but received ${this.utils.printReceived(
          received,
        )} | message: ${this.utils.printReceived(message)}`,
      pass: false,
    }
  },
})

test('camelcase rule', async () => {
  const ruleId = 'camelcase'
  const result = await fetchTestFiles(ruleId)
  const { messages } = result[0]
  expect(messages[0] && messages[0].ruleId).toBe(
    ruleId,
    messages[0] && messages[0].message,
  )
})

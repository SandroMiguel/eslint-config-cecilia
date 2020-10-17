const { ESLint } = require('eslint')

const fetchTestFiles = async (rule) => {
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
        `This test case expected violation of rule ${this.utils.printExpected(
          expected,
        )} but received ${this.utils.printReceived(
          received,
        )} | message: ${this.utils.printReceived(message)}`,
      pass: false,
    }
  },
})

test('jsdoc/require-example rule', async () => {
  const ruleId = 'jsdoc/require-example'
  const result = await fetchTestFiles(ruleId)
  const { messages } = result[0]
  expect(messages[0] && messages[0].ruleId).toBe(
    undefined,
    messages[0] && messages[0].message,
  )
})

test('react-hooks/exhaustive-deps rule', async () => {
  const ruleId = 'react-hooks/exhaustive-deps'
  const result = await fetchTestFiles(ruleId)
  const { messages } = result[0]
  expect(messages[0] && messages[0].ruleId).toBe(
    ruleId,
    messages[0] && messages[0].message,
  )
})

test('react-hooks/rules-of-hooks', async () => {
  const ruleId = 'react-hooks/rules-of-hooks'
  const result = await fetchTestFiles(ruleId)
  const { messages } = result[0]
  expect(messages[0] && messages[0].ruleId).toBe(
    ruleId,
    messages[0] && messages[0].message,
  )
})

test('arrow-parens rule', async () => {
  const ruleId = 'arrow-parens'
  const result = await fetchTestFiles(ruleId)
  const { messages } = result[0]
  expect(messages[0] && messages[0].ruleId).toBe(
    ruleId,
    messages[0] && messages[0].message,
  )
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

test('no-multiple-empty-lines rule', async () => {
  const ruleId = 'no-multiple-empty-lines'
  const result = await fetchTestFiles(ruleId)
  const { messages } = result[0]
  expect(messages[0] && messages[0].ruleId).toBe(
    ruleId,
    messages[0] && messages[0].message,
  )
})

test('semi rule', async () => {
  const ruleId = 'semi'
  const result = await fetchTestFiles(ruleId)
  const { messages } = result[0]
  expect(messages[0] && messages[0].ruleId).toBe(
    ruleId,
    messages[0] && messages[0].message,
  )
})

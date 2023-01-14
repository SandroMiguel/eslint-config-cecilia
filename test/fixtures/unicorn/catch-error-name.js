// Rule: Enforce a specific parameter name in catch clauses.
// Message: The catch parameter `badName` should be named `error`.
// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md

/* eslint-disable no-console */
try {
  console.log('try')
} catch (badName) {
  console.log('catch:', badName)
}

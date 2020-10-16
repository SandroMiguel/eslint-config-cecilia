module.exports = {
  extends: ['airbnb'],
  rules: {
    // Require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Require CamelCase
    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'always' }],

    'comma-dangle': ['error', 'always-multiline'],

    // Disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],

    // Require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    semi: ['error', 'never'],
  },
}

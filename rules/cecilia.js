module.exports = {
  rules: {
    // Require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Require CamelCase
    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'always' }],

    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],

    // Require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    semi: ['error', 'never'],
  },
}

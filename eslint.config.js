const prettier = require('eslint-plugin-prettier')
const jsdoc = require('eslint-plugin-jsdoc')
const unicorn = require('eslint-plugin-unicorn')
const airbnb = require('eslint-config-airbnb')
const reactHooks = require('eslint-plugin-react-hooks')
const react = require('eslint-plugin-react')
const globals = require('globals')

module.exports = [
  'eslint:recommended',
  // prettier.rules,
  // jsdoc.configs.recommended,
  airbnb.rules,
  // unicorn.configs.recommended,
  {
    // linterOptions: {
    //   reportUnusedDisableDirectives: true,
    // },
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        // myCustomGlobal: "readonly"
    }
    },
    plugins: {
      // airbnb: airbnb, // parece que não tem efeito. tem de ser um extends?
      unicorn,
      prettier,
      jsdoc,
      reactHooks,
      react,
    },
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

      // Prevent missing React when using JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
      'react/react-in-jsx-scope': 'off',

      // Require or disallow semicolons instead of ASI
      // https://eslint.org/docs/rules/semi
      semi: ['error', 'never'],
    },
  },
]

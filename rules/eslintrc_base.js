module.exports = {
  extends: 'airbnb',
  plugins: [
    'const-case',
    'jsdoc',
  ],
  rules: {
    // Spaces inside of parentheses
    'space-in-parens': ['off', 'always'],
    // Space before function parenthesis
    'space-before-function-paren': ['error', {anonymous: 'ignore', named: 'ignore'}],
    // Consistent spacing between keys and values in object literal properties
    'key-spacing': ['off', {
      singleLine: {
        beforeColon: false,
        afterColon: true,
      },
      multiLine: {
        beforeColon: true,
        afterColon: true,
        align: 'colon',
      },
    }],
    // Usage of Spacing in Template Strings
    'template-curly-spacing': ['off', 'always'],
    // Consistent spacing inside braces
    'object-curly-spacing': ['off', 'always'],
    // No more than one blank line
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0, maxBOF: 0}],
    // Limit Cyclomatic Complexity
    complexity: ['error', {max: 6}],
    // Multiple spaces
    'no-multi-spaces': ['error', {exceptions: {VariableDeclarator: true}}],
    // Maximum line length
    'max-len': ['error', {code: 120}],
    // New line after import
    'import/newline-after-import': ['error', {count: 0}],
    // Dynamic require
    'import/no-dynamic-require': 'off',
    // Ensures an imported module can be resolved to a module on the local filesystem
    'import/no-unresolved': ['off'],
    // Uppercase const strings
    'const-case/uppercase': ['warn'],
    // Ensures that parameter names in JSDoc match those in the function declaration
    'jsdoc/check-param-names': 'warn',
    // Reports invalid block tag names
    'jsdoc/check-tag-names': 'warn',
    // Reports invalid types
    'jsdoc/check-types': 'warn',
    // Enforces a consistent padding of the block description
    'jsdoc/newline-after-description': 'warn',
    // Requires that block description and tag description are written in complete sentences
    'jsdoc/require-description-complete-sentence': 'warn',
    // Requires that all functions have examples
    'jsdoc/require-example': 'warn',
    // Requires a hyphen before the @param description
    'jsdoc/require-hyphen-before-param-description': 'warn',
    // Requires that all function parameters are documented
    'jsdoc/require-param': 'warn',
    // Requires that @param tag has description value
    'jsdoc/require-param-description': 'warn',
    // Requires that all function parameters have name
    'jsdoc/require-param-name': 'warn',
    // Requires that @param tag has type value
    'jsdoc/require-param-type': 'warn',
    // Requires that @returns tag has description value
    'jsdoc/require-returns-description': 'warn',
    // Requires that @returns tag has type value
    'jsdoc/require-returns-type': 'warn',
    // Undeclared Variables
    'no-undef': ['off'],
    // Arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['off'],
    // Unused Expressions
    'no-unused-expressions': ['off'],
    // Dangling underscores in identifiers
    'no-underscore-dangle': ['warn'],
    // Assignment in return Statement
    'no-return-assign': ['off'],
    // Class methods utilize 'this'
    'class-methods-use-this': ['off'],
    // Consistent linebreak style
    'linebreak-style': ['error', 'unix'],
    // CamelCase
    camelcase: ['error', {properties: 'always'}],
    // Require or disallow semicolons instead of ASI
    semi: ['error', 'never'],
  },
};

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['const-case', 'jsdoc', 'prettier', 'react', 'react-hooks'],
  rules: {
    // CamelCase
    camelcase: ['error', { properties: 'always' }],
    // Class methods utilize 'this'
    'class-methods-use-this': ['off'],
    // Limit Cyclomatic Complexity
    complexity: ['error', { max: 6 }],
    // Uppercase const strings
    'const-case/uppercase': ['warn'],
    // Dynamic require
    'import/no-dynamic-require': 'off',
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: true, peerDependencies: true },
    ],
    // Ensures an imported module can be resolved to a module on the local filesystem
    'import/no-unresolved': ['off'],
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
    // Consistent spacing between keys and values in object literal properties
    'key-spacing': [
      'off',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
        },
        multiLine: {
          beforeColon: true,
          afterColon: true,
          align: 'colon',
        },
      },
    ],
    // Consistent linebreak style
    'linebreak-style': ['error', 'unix'],
    // Maximum line length
    'max-len': ['error', { code: 120 }],
    // Arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['off'],
    // No more than one blank line
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    // Multiple spaces
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }],
    // Undeclared Variables
    'no-undef': ['off'],
    // Dangling underscores in identifiers
    'no-underscore-dangle': ['warn'],
    // Unused Expressions
    'no-unused-expressions': ['off'],
    // Assignment in return Statement
    'no-return-assign': ['off'],
    // Consistent spacing inside braces
    'object-curly-spacing': ['off', 'always'],
    // Prettier
    'prettier/prettier': ['error'],
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Allow both '.jsx' and '.js' extensions for JSX
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // Prevent missing props validation in a React component definition
    'react/prop-types': 0,
    // Require or disallow semicolons instead of ASI
    semi: ['error', 'never'],
    // Spaces inside of parentheses
    'space-in-parens': ['off', 'always'],
    // Space before function parenthesis
    'space-before-function-paren': ['error', { anonymous: 'ignore', named: 'ignore' }],
    // Usage of Spacing in Template Strings
    'template-curly-spacing': ['off', 'always'],
  },
}

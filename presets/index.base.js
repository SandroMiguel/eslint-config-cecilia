import globals from 'globals'

/**
 * Base ESLint configuration for JavaScript.
 * This configuration is intended to be extended by specific project presets.
 * It includes basic settings, language options, and global variables.
 * It does not include any specific rules or plugins.
 *
 * @file presets/index.base.js
 */
export default [
  {
    ignores: ['test/fixtures/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {},
    rules: {},
  },
]

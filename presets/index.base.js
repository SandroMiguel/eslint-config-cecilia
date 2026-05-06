import globals from 'globals'
import prettier from 'eslint-config-prettier'

/**
 * Base ESLint configuration for JavaScript.
 * This configuration is intended to be extended by specific project presets.
 * It includes basic settings, language options, and global variables.
 * It includes basic settings and shared rules (e.g. JSDoc, Prettier compatibility).
 * @file presets/index.base.js
 */

const isProgrammatic =
  process.env.JEST_WORKER_ID ||
  process.env.VITEST ||
  process.env.NODE_ENV === 'test'

let jsdocConfig = []

if (!isProgrammatic) {
  const jsdoc = await import('../rules/jsdoc.js')
  jsdocConfig = jsdoc.default
}

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/vendor/**',
      '**/dist/**',
      '**/build/**',
      '**/.git/**',
      'test/fixtures/**',
    ],
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
    // ...(isTest
    //   ? {}
    //   : {
    //       plugins: jsdoc.plugins,
    //       rules: jsdoc.rules,
    //     }),
  },
  ...jsdocConfig,
  prettier,
]

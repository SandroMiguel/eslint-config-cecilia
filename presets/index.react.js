import globals from 'globals'
import base from './index.base.js'
import reactHooks from '../rules/react-hooks.js'
import react from '../rules/react.js'
import unicorn from '../rules/unicorn.js'

/**
 * React ESLint configuration preset.
 *
 * Extends the base configuration with:
 * - React rules
 * - React Hooks rules
 * - Optional modern best practices via Unicorn
 *
 * Designed for React projects using flat config.
 *
 * @file presets/index.react.js
 */
export default [
  ...base,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      ...reactHooks.plugins,
      ...react.plugins,
      ...unicorn.plugins,
    },
    settings: {
      ...react.settings,
    },
    rules: {
      ...reactHooks.rules,
      ...react.rules,
      ...unicorn.rules,
    },
  },
]

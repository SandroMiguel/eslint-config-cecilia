import globals from 'globals'
import base from './index.base.js'
import airbnb from '../rules/airbnb.js'
import reactHooks from '../rules/react-hooks.js'
import react from '../rules/react.js'

/**
 * React ESLint configuration preset.
 * This configuration is intended for React projects and extends the base configuration.
 * It includes specific settings for React, React Hooks, and Airbnb style guide.
 *
 * @file presets/index.react.js
 */
export default [
  ...base,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ...(base.languageOptions || {}),
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...(base.languageOptions?.globals || {}),
      },
    },
    plugins: {
      ...(base.plugins || {}),
      ...(reactHooks.plugins || {}),
      ...(react.plugins || {}),
      ...(airbnb.plugins || {}),
    },
    settings: {
      ...react.settings,
    },
    rules: {
      ...airbnb.rules,
      ...reactHooks.rules,
      ...react.rules,
      ...(base.rules || {}),
    },
  },
]

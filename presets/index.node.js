import globals from 'globals'
import base from './index.base.js'

/**
 * Node.js ESLint configuration preset.
 * This configuration is intended for Node.js projects and extends the base configuration.
 * It includes specific settings for Node.js global variables and ECMAScript version.
 *
 * @file presets/index.node.js
 */
export default [
  ...base,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ...(base.languageOptions || {}),
      globals: {
        ...globals.node,
        ...(base.languageOptions?.globals || {}),
      },
    },
  },
]

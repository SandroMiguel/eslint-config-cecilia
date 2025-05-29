const base = require('./index.base')

module.exports = {
  ...base,
  extends: [
    ...base.extends,
    './rules/airbnb.js',
    './rules/react-hooks.js',
    './rules/react.js',
  ],
  parserOptions: {
    ...base.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
}

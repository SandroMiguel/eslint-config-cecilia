module.exports = {
  extends: [
    './rules/prettier.js',
    './rules/eslintrc-base.js',
    './rules/jsdoc.js',
    './rules/react-hooks.js',
    './rules/react.js',
  ],
  env: {
    jest: true,
  },
}

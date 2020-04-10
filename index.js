module.exports = {
  extends: [
    './rules/eslintrc-base.js',
    './rules/jsdoc.js',
    './rules/prettier.js',
    './rules/react-hooks.js',
    './rules/react.js',
  ],
  env: {
    jest: true,
  },
}

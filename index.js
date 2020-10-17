module.exports = {
  extends: [
    './rules/airbnb.js',
    './rules/prettier.js',
    './rules/jsdoc.js',
    './rules/react-hooks.js',
    './rules/react.js',
    './rules/cecilia.js',
  ],
  env: {
    jest: true,
  },
}

module.exports = {
  extends: ['./rules/unicorn.js', './rules/prettier.js', './rules/jsdoc.js'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}

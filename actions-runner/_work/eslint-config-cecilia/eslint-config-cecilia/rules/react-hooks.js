module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',

    // Enforce Rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
  },
}

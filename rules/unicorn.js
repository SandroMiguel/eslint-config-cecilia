import unicornPlugin from 'eslint-plugin-unicorn'

export default {
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: {
    ...unicornPlugin.configs.recommended.rules,
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}

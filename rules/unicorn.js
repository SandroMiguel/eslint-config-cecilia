import unicornPlugin from 'eslint-plugin-unicorn'

export default {
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: {
    ...unicornPlugin.configs.recommended.rules,

    // Overrides
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}

import prettierPlugin from 'eslint-plugin-prettier'

export default {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': ['error'],
  },
}

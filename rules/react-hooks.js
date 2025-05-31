import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default {
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
}

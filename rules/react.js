import reactPlugin from 'eslint-plugin-react'

const recommendedRules = reactPlugin.configs.recommended.rules || {}

export default {
  plugins: {
    react: reactPlugin,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...recommendedRules,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}

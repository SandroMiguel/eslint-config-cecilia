import { jsdoc } from 'eslint-plugin-jsdoc'

export default [
  jsdoc({
    config: 'flat/recommended',
    rules: {
      'jsdoc/check-param-names': 'warn',
      'jsdoc/check-tag-names': 'warn',
      'jsdoc/check-types': 'warn',
      'jsdoc/check-values': 'off',
      'jsdoc/no-defaults': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/require-description-complete-sentence': 'off',
      'jsdoc/require-example': 'off',
      'jsdoc/require-hyphen-before-param-description': 'warn',
      'jsdoc/require-param': 'warn',
      'jsdoc/require-param-description': 'warn',
      'jsdoc/require-param-name': 'warn',
      'jsdoc/require-param-type': 'warn',
      'jsdoc/require-returns-description': 'warn',
      'jsdoc/require-returns-type': 'warn',
      'jsdoc/tag-lines': 'off',
    },
  }),
]

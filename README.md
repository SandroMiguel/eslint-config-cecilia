<p align="center"><img src="https://i.imgur.com/De2l7rX.png" alt="ESLint config Cecilia" /></p>
<p align="center">📦 Zero-config ESLint + Prettier setup for JS/React/Node projects.</p>

# Welcome to ESLint config Cecilia

[![npm version](https://badge.fury.io/js/eslint-config-cecilia.svg)](https://badge.fury.io/js/eslint-config-cecilia)
![tests](https://github.com/SandroMiguel/eslint-config-cecilia/actions/workflows/tests.yml/badge.svg)
[![license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)
[![Made with ❤️ by @sandro_m_m](https://img.shields.io/badge/made%20with%20%E2%9D%A4%EF%B8%8F%20by-@sandro__m__m-ff69b4)](https://github.com/SandroMiguel)

**ESLint configuration for my projects.**

ESLint config Cecilia is an opinionated
[shareable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html)
used in my JavaScript projects ([Vanilla.js](http://vanilla-js.com/),
[React.js](https://reactjs.org/) or [Node.js](https://nodejs.org/)).

## Table of Contents

1. [Goals](#goals)
1. [Installation](#installation)
1. [Credits](#credits)
1. [Contributing](#contributing)
1. [Questions](#questions)
1. [License](#license)

## Goals

- I want to use [ESLint](https://eslint.org/) to lint my files
- I want to use [Prettier](https://www.npmjs.com/package/prettier) to format my code
- I want to base my rules on the major configs, such as [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- I want to keep the code clean and consistent across several projects
- I don't want to install/maintain/configure ESLint/Prettier/plugins/etc. independently in all projects

## Installation

### Set up the config automatically (recommended)

#### With npm

```sh
npm i -D eslint-config-cecilia
npx cecilia
```

#### Or with Yarn

```sh
yarn add --dev eslint-config-cecilia
yarn cecilia
```

1. Select "1" or "2" to install the necessary dependencies with npm/Yarn
1. Select the type of project: React (1) Node (2) Both (3) None (4)
1. Select "y" to create the `eslint.config.js` file
1. Select "y" to create the `.prettierrc.js` file
1. Select "y" to add the `lint` script commands in your `package.json`

#### Optional - Override Rules.

Use the `eslint.config.js` If you want to override or extend the config:

For more information, see "[Configuring Rules](https://eslint.org/docs/user-guide/configuring#configuring-rules)" in the ESLint Help.

```
// eslint.config.js
import cecilia from 'eslint-config-cecilia'

export default [
  ...cecilia,
  {
    rules: {
      'no-console': 'off',
      // your custom rules here
    }
  }
]
```

**Pro tip**

Check the [list of available rules](https://eslint.org/docs/rules/).

**Optional - Specifying Environments**

For more information, see "[Specifying Environments](https://eslint.org/docs/user-guide/configuring#specifying-environments)" in the ESLint Help.

```
module.exports = {
  extends: 'cecilia',
  env: {
    browser: true,
    node: true,
    ...
  },
}
```

**Optional - Use `.prettierrc.js` file to change some rules**

Example:

```
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
}
```

**Optional - Add scripts to the `package.json` file**

Open the `package.json` file and add the following scripts entries:

```
  ...

  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write './**/*.{js,jsx,json}'"
  },

  ...
```

### Usage

#### Run the script

`yarn lint` or `npm run lint` to lint your code.

`yarn lint:fix` or `npm run lint:fix` to lint and fix your code.

`yarn format` or `npm run format` to format your code.

**Pro tip**

Install
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
extensions for Visual Studio Code.

## Debugging

If you want to check the final ESLint config used by Cecilia, run:

```sh
npx cecilia:debug
```

It will print the resolved config, including all extended rules and environments, like this:

```json
{
  "extends": [
    "./rules/unicorn.js",
    "./rules/prettier.js",
    "./rules/jsdoc.js",
    "./rules/airbnb.js",
    "./rules/react-hooks.js",
    "./rules/react.js",
    "./rules/cecilia.js"
  ],
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  }
}
```

## Credits

- Linting - [ESLint](https://eslint.org/)
- Rules base config -
  [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- Code formatter config - [Prettier](https://www.npmjs.com/package/prettier)
- Plugin -
  [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- Plugin -
  [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- Plugin -
  [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- Plugin -
  [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- Plugin -
  [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- Plugin -
  [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- IDE coding style - [EditorConfig](https://editorconfig.org/)
- Logo gear - made by [Freepik](http://www.freepik.com) from
  [www.flaticon.com](https://www.flaticon.com/) is licensed by
  [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

## Contributing

Want to contribute? All contributions are welcome. Read the
[contributing guide](CONTRIBUTING.md).

## Questions

If you have questions tweet me at [@sandro_m_m](https://twitter.com/sandro_m_m)
or [open an issue](../../issues/new).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details

## ~ sharing is caring ~

This project helped you? Please consider giving this repository a star :star:.

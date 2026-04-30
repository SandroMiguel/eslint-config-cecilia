<p align="center"><img src="https://i.imgur.com/De2l7rX.png" alt="ESLint config Cecilia" /></p>
<p align="center">📦 Zero-config ESLint + Prettier setup for JS/React/Node projects with deterministic installs and modern flat config.</p>

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
1. [Stability](#stability)
1. [Debugging](#debugging)
1. [Credits](#credits)
1. [Contributing](#contributing)
1. [Questions](#questions)
1. [License](#license)

## Goals

- I want to use [ESLint](https://eslint.org/) to lint my files using the modern flat config
- I want to use [Prettier](https://www.npmjs.com/package/prettier) as a standalone formatter (not inside ESLint)
- I want a fast and predictable linting experience (no heavy or legacy configs)
- I want to keep the code clean and consistent across several projects
- I want to avoid maintaining complex ESLint setups across projects
- I want consistent and deterministic linting behavior across all environments
- I want built-in support for code quality, documentation (JSDoc), and modern best practices

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
1. Select "y" to create the `eslint.config.mjs` file
1. Select "y" to create the `.prettierrc.js` file
1. Select "y" to add the `lint` script commands in your `package.json`

#### Optional - Override Rules or Ignore Patterns

Use the `eslint.config.mjs` if you want to override, extend or add ignore patterns to the config:

```
// eslint.config.mjs
import cecilia from 'eslint-config-cecilia'

export default [
  // First block for ignores (optional, to add more ignores)
  {
    ignores: [
      '**/custom-ignored-folder/**',
    ],
  },

  // Default cecilia config
  ...cecilia,

  // Block for custom rules
  {
    rules: {
      'no-console': 'off',
      // your custom rules here
    },
  },
]
```

For more information, see "[ESLint Config Files](https://eslint.org/docs/latest/use/configure/configuration-files#using-eslintconfigjs)".

**Pro tip**

Check the [list of available rules](https://eslint.org/docs/rules/).

**Optional - Specifying Environments**

To specify environments, add a block with `env`:

```
// eslint.config.mjs
import cecilia from 'eslint-config-cecilia'

export default [
  ...cecilia,
  {
    env: {
      browser: true,
      node: true,
      es2023: true,
    },
  },
]
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
    "lint": "eslint \"src/**/*.{js,jsx}\" --cache",
    "lint:fix": "eslint \"src/**/*.{js,jsx}\" --fix --cache",
    "format": "prettier --write ."
  }

  ...
```

### Usage

#### Run the script

`yarn lint` or `npm run lint` to lint your code (fast with cache).

`yarn lint:fix` or `npm run lint:fix` to lint and fix your code.

`yarn format` or `npm run format` to format your code using Prettier.

**Pro tip**

Install
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
extensions for Visual Studio Code.

## Stability

Cecilia installs all dependencies using fixed versions to ensure deterministic behavior.

This means:

- The linting results are consistent across machines and environments
- No unexpected rule changes after reinstalling dependencies
- Updates only happen when you explicitly upgrade Cecilia
- No hidden performance regressions caused by third-party configs

This avoids common issues caused by version ranges (e.g. `^`) where plugin updates can silently change linting behavior.

## Debugging

It will print the resolved config, including all rules and plugins used internally.

```sh
npx cecilia-debug
```

It will print the resolved config, including all extended rules and environments, like this:

```json
{
  "extends": [
    "./rules/unicorn.js",
    "./rules/jsdoc.js",
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
- Code formatter - [Prettier](https://www.npmjs.com/package/prettier)

### Plugins

- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

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

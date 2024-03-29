<p align="center"><img src="https://i.imgur.com/De2l7rX.png" alt="ESLint config Cecilia" /></p>

# Welcome to ESLint config Cecilia

[![npm version](https://badge.fury.io/js/eslint-config-cecilia.svg)](https://badge.fury.io/js/eslint-config-cecilia)
![tests](https://github.com/SandroMiguel/eslint-config-cecilia/actions/workflows/tests.yml/badge.svg)
[![license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

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

1. Select "1" to install the necessary dependencies with npm
1. Select "y" to create the `.eslintrc.js` file
1. Select "y" to create the `.prettierrc.js` file
1. Select "y" to add the `lint` script commands in your `package.json`

#### With Yarn

```sh
yarn add --dev eslint-config-cecilia
yarn cecilia
```

1. Select "2" to install the necessary dependencies with Yarn
1. Select "y" to create the `.eslintrc.js` file
1. Select "y" to create the `.prettierrc.js` file
1. Select "y" to add the `lint` script commands in your `package.json`

### Set up the config manually

#### With npm

```sh
npm i -D eslint-config-cecilia eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn
```

#### With Yarn

```sh
yarn add --dev eslint-config-cecilia eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn
```

#### Create a `.eslintrc.js` file in your project root directory and use the `extends` attribute.

Paste this code to extend the ESLint ruleset:

```
module.exports = {
  extends: 'cecilia',
}
```

**Optional - Override Rules**

For more information, see "[Configuring Rules](https://eslint.org/docs/user-guide/configuring#configuring-rules)" in the ESLint Help.

```
module.exports = {
  extends: 'cecilia',
  rules: {
    //
    // rules to override.
    //
  }
}
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

#### Create a `.prettierrc.js` file in your project root directory and change some rules.

```
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
}
```

#### Add scripts to the `package.json` file

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

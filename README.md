<p align="center"><img src="https://i.imgur.com/De2l7rX.png" alt="ESLint config Cecilia" /></p>

# Welcome to ESLint config Cecilia

[![npm version](https://badge.fury.io/js/eslint-config-cecilia.svg)](https://badge.fury.io/js/eslint-config-cecilia)
[![license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

**ESLint configuration for awesome projects.**

ESLint config Cecilia is an opinionated
[shareable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html)
used in JavaScript projects ([Vanilla.js](http://vanilla-js.com/),
[React.js](https://reactjs.org/) or [Node.js](https://nodejs.org/)).

The goal of the ESLint config Cecilia is to keep the code clean and consistent
using [Prettier](https://www.npmjs.com/package/prettier) and
[ESLint](https://eslint.org/).

ESLint config Cecilia rules are based on [Prettier](https://www.npmjs.com/package/prettier) and [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Table of Contents

1. [Getting Started](#getting-started)
1. [Contributing](#contributing)
1. [Questions](#questions)
1. [License](#license)

## Getting Started

### Installation

Install ESLint config Cecilia.

#### Step 1 - Install with Yarn

```sh
yarn add eslint-config-cecilia --dev
```

##### Or install with npm

```sh
npm install -D eslint-config-cecilia
```

### Configure

#### Step 2 - Create a `.eslintrc.js` file in your project root directory and use the `extends` attribute.

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

##### Pro tip

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

#### Step 3 - Create a `.prettierrc.js` file in your project root directory and change some rules.

```
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
}
```

#### Step 4 - Add scripts to the `package.json` file

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

#### Step 5 - Run the script

`yarn lint` or `npm run lint` to lint your code.

`yarn lint:fix` or `npm run lint:fix` to lint and fix your code.

`yarn format` or `npm run format` to format your code.

##### Pro tip

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

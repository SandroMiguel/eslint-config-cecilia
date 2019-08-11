<p align="center"><img src="http://sandromiguel.com/host/eslint-config-cecilia.png" alt="React Sceleto" /></p>

# Welcome to ESLint config Cecilia

[![npm version](https://badge.fury.io/js/eslint-config-cecilia.svg)](https://badge.fury.io/js/eslint-config-cecilia)
[![Dependency Status](https://david-dm.org/SandroMiguel/eslint-config-cecilia.svg)](https://david-dm.org/SandroMiguel/eslint-config-cecilia)
[![license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

**ESLint configuration for awesome projects.**

ESLint config Cecilia is a [sharable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html)
used in JavaScript projects ([Vanilla.js](http://vanilla-js.com/), [React.js](https://reactjs.org/) or
[Node.js](https://nodejs.org/)).

The goal of the ESLint config Cecilia is to keep the code clean and consistent.

ESLint config Cecilia rules are based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Table of Contents

1. [Getting Started](#getting-started)
1. [Contributing](#contributing)
1. [Questions](#questions)
1. [License](#license)

## Getting Started

### Installation

Install ESLint config Cecilia.

#### Step 1 - Install with Yarn

`yarn add eslint-config-cecilia --dev`

##### Or install with npm

`npm install -D eslint-config-cecilia`

### Usage

#### Step 2 - Create a `.eslintrc.js` file in your project root directory and use the `extends` attribute.

Paste this code to extend the ESLint ruleset:

```
module.exports = {
  extends: './index.js',
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
    "lint:format": "prettier --write \"./**/*.{js,jsx,json}\""
  },

  ...
```

#### Step 5 - Run the script

`yarn lint` or `npm run lint` to lint your code.

`yarn lint:fix` or `npm run lint:fix` to lint and fix your code.

`yarn lint:format` or `npm run lint:format` to format your code.

## Credits

- Linting - [ESLint](https://eslint.org/)
- Rules base config - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- Code formatter config - [Prettier](https://www.npmjs.com/package/prettier)
- Plugin - [eslint-plugin-const-case](https://www.npmjs.com/package/eslint-plugin-const-case)
- Plugin - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- Plugin - [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- Plugin - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- Plugin - [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- Plugin - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- Plugin - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- IDE coding style - [EditorConfig](https://editorconfig.org/)
- Logo gear - made by [Freepik](http://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/) is
  licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

## Contributing

Want to contribute? All contributions are welcome. Read the [contributing guide](CONTRIBUTING.md).

## Questions

If you have questions tweet me at [@sandro_m_m](https://twitter.com/sandro_m_m) or [open an issue](../../issues/new).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

**~ sharing is caring ~**

# eslint-config-lux

> An ESLint Config

[![License](https://img.shields.io/github/license/Sciencmine/eslint-config-lux?label=License&logo=apache)](https://github.com/Sciencmine/eslint-config-lux/blob/master/LICENSE)

[![Last Commit](https://badgen.net/github/last-commit/Sciencmine/eslint-config-lux?label=Last%20Commit&icon=github)](https://github.com/Sciencmine/eslint-config-lux/commits)
[![Lint](https://img.shields.io/github/workflow/status/Sciencmine/eslint-config-lux/Lint?label=Lint&logo=github-actions&logoColor=white)](https://github.com/Sciencmine/eslint-config-lux/actions?query=workflow%3ALint)
[![Open Issues](https://img.shields.io/github/issues-raw/Sciencmine/eslint-config-lux?label=Open%20Issues&logo=github)](https://github.com/Sciencmine/eslint-config-lux/issues?q=is%3Aissue+is%3Aopen)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![NPM](https://nodei.co/npm/eslint-config-lux.png?downloads=true&stars=true)](https://www.npmjs.com/package/eslint-config-lux)

## Usage

1. Ensure [ESLint](https://npmjs.com/package/eslint) is installed, all peer dependencies are installed, the configuration file is initiated, and the config package is installed

```bash
npm install --save-dev eslint@^7.18.0 # Install ESLint
npm install --save-dev eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 # Install peer dependencies
npm install --save-dev eslint-config-lux # Install this package
```

```bash
npx eslint --init # Init config file
```

Or also with optional dependencies

```bash
npm install --save-dev @babel/core@^7.12.10 @babel/eslint-parser@^7.12.1 @babel/eslint-plugin@^7.12.1 # Babel
```

2. Extend the config in the config file

```js
// In .eslintrc.js
module.exports = {
/*
  parserOptions: {
    parser: "babel-eslint"
  },
*/ // Use this if you want "babel-eslint" enabled

  extends: [
    // The "eslint-config-" prefix can be omitted
    "lux" // alias for "lux/base"
    // "lux/base",

    // "lux/import", // Rules for esm related rules, requires "eslint-plugin-import"
    // "lux/node", // Rules for Node.js related rules, requires "eslint-plugin-node"
 ]
};
```

3. Add `npm` tasks for code linting and fixing

```json
// In package.json
{
  "scripts": {
    "lint": "eslint --ext .js --ignore-path .gitignore ./",
    "fix": "npm run lint -- --fix"
  }
}
```

Use the following instead if you are using Vue

```json
// In package.json
{
  "scripts": {
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore ./",
    "fix": "npm run lint -- --fix"
  }
}
```

4. Run linting and fixing for the first time and enforce the code styles

```bash
npm run fix
```

5. Extra configuration for editors

+ Visual Studio Code

The [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is needed.

```json
{
  "eslint.validate": [
    "javascript"
  ],
  "editor.insertSpaces": false,
  "editor.detectIndentation": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": false,
  "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  "typescript.format.placeOpenBraceOnNewLineForFunctions": false,
  "eslint.lintTask.enable": true
}
```

...And also the following if you are using Vue

```json
{
 "eslint.validate": [
  "vue"
 ],
 "vetur.validation.template": false
}
```

+ EditorConfig

```editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = tab
indent_size = tab
insert_final_newline = true
trim_trailing_whitespace = true
```

+ Others
Please refer to [ESLint Integrations](https://eslint.org/docs/user-guide/integrations)
Add [ESLint Plugin Vue Editor integrations](https://github.com/vuejs/eslint-plugin-vue/tree/v6.2.2/docs/user-guide#computer-editor-integrations) for Vue

6. Enjoy!

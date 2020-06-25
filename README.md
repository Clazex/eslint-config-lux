# eslint-config-lux

> An ESLint Config

[![License](https://img.shields.io/github/license/Sciencmine/eslint-config-lux?label=License&logo=apache)](https://github.com/Sciencmine/eslint-config-lux/blob/master/LICENSE)
[![Last Commit](https://badgen.net/github/last-commit/Sciencmine/eslint-config-lux?label=Last%20Commit&icon=github)](https://github.com/Sciencmine/eslint-config-lux/commits)
[![Lint](https://img.shields.io/github/workflow/status/Sciencmine/eslint-config-lux/Lint?label=Lint&logo=github-actions&logoColor=white)](https://github.com/Sciencmine/eslint-config-lux/actions?query=workflow%3ALint)
[![Open Issues](https://img.shields.io/github/issues-raw/Sciencmine/eslint-config-lux?label=Open%20Issues&logo=github)](https://github.com/Sciencmine/eslint-config-lux/issues?q=is%3Aissue+is%3Aopen)
![Minified Size](https://img.shields.io/bundlephobia/min/eslint-config-lux?label=Minified%20Size)
![Minzipped Size](https://img.shields.io/bundlephobia/minzip/eslint-config-lux?label=Minzipped%20Size)
![Repo Size](https://img.shields.io/github/repo-size/Sciencmine/eslint-config-lux?label=Repo%20Size&logo=github)

[![NPM](https://nodei.co/npm/eslint-config-lux.png?downloads=true&stars=true)](https://www.npmjs.com/package/eslint-config-lux)

## Usage

1. Ensure [ESLint](https://npmjs.com/eslint) is installed, the configuration file is initiated, and the config is installed.
```bash
npm i -D eslint eslint-config-lux
```
```bash
npx eslint --init
```

Or with optional dependencies
```bash
npm i -D eslint eslint-config-lux babel-eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-vue
```

2. Use it in the configuration file
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
		"lux" // The default config, includes "base" and "style"

		// "lux/base", // Or only the grammatical stuffs
		// "lux/style", // Or with the code styles as well

		// "lux/es6", // ES6 rules, requires "babel-eslint"

		// "lux/import", // Rules for import statement related stuff in ES6, requires ["babel-eslint", "eslint-plugin-import"]
		// "lux/node", // Rules for Node related stuff, requires plugin "eslint-plugin-node"
		// "lux/promise", // Rules for Promise related stuff, requires plugin "eslint-plugin-promise"
		// "lux/vue", // Rules for vue files, requires plugin "eslint-plugin-vue", command line options for ESLint have to be changed

		// "lux/all", // Includes all rules above, not recommended unless you know what you are doing

		// "lux/quasar" // Includes settings for the Quasar Framework, requires ["babel-eslint", "eslint-plugin-import", "eslint-plugin-promise", "eslint-plugin-node", "eslint-plugin-vue"]
	]
};
```

3. Add `npm` tasks for code linting
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

4. Run linting for the first time and enforce the code styles
```bash
npm run fix
```

5. Some extra configuration for your editor may be needed
+ Visual Studio Code
> The [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is needed
```json
{
	"editor.formatOnPaste": true,
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"javascript.format.insertSpaceBeforeFunctionParenthesis": false,
	"javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
	"javascript.format.placeOpenBraceOnNewLineForFunctions": false,
	"typescript.format.insertSpaceBeforeFunctionParenthesis": false,
	"typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,
	"typescript.format.placeOpenBraceOnNewLineForFunctions": false,
	"editor.insertSpaces": false,
	"editor.detectIndentation": false,
	"eslint.lintTask.enable": true,
	"eslint.validate": [
		"javascript",
		"javascriptreact",
	],
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

/**
 *	Copyright 2020 Sciencmine
 *
 *	Licensed under the Apache License, Version 2.0 (the "License");
 *	you may not use this file except in compliance with the License.
 *	You may obtain a copy of the License at
 *
 *		http://www.apache.org/licenses/LICENSE-2.0
 *
 *	Unless required by applicable law or agreed to in writing, software
 *	distributed under the License is distributed on an "AS IS" BASIS,
 *	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	See the License for the specific language governing permissions and
 * 	limitations under the License.
 */

const path = require("path");

const o = "off",
	w = "warn",
	e = "error";

// This config provides a preset for the Quasar Framework
module.exports = {
	parserOptions: { sourceType: "module" },

	extends: ["./import.js", "./promise.js", "./vue.js"],

	env: { browser: true, commonjs: true },

	globals: {
		ga: true,
		cordova: true,
		__statics: true,
		process: true,
		Capacitor: true,
		chrome: true
	},

	rules: {
		"import/no-unresolved": o,
		"import/no-extraneous-dependencies": o,
		"prefer-promise-reject-errors": o,

		// Allow debugger during development only
		"no-console": process.env.NODE_ENV === "production" ? e : o,
		"no-debugger": process.env.NODE_ENV === "production" ? e : o
	},

	overrides: [
		{
			files: [path.join("src", "store", "*.js"), path.join("src", "store", "*", "*.js")],
			rules: {
				"sort-imports": o,
				"import/no-namespace": o,
				"import/prefer-default-export": o
			}
		},
		{
			files: [path.join("src-electron", "*.js"), path.join("src-electron", "*", "*.js")],

			parser: "babel-eslint",

			parserOptions: { sourceType: "script" },

			env: {
				node: true,
				es6: true,
				commonjs: true
			},

			extends: [
				"./index.js",
				"./es6.js",
				"./import.js",
				"./promise.js",
				"./node.js"
			]
		}
	]
};

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

/* eslint-disable no-unused-vars */
/* eslint-disable sort-vars*/

const o = "off",
	w = "warn",
	e = "error",
	options = {};

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
		"import/first": o,
		"import/named": e,
		"import/namespace": e,
		"import/default": e,
		"import/export": e,
		"import/extensions": o,
		"import/no-unresolved": o,
		"import/no-extraneous-dependencies": o,
		"prefer-promise-reject-errors": o,

		// Allow debugger during development only
		"no-console": process.env.NODE_ENV === "production" ? e : o,
		"no-debugger": process.env.NODE_ENV === "production" ? e : o
	}
};

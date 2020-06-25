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

const o = "off",
	w = "warn",
	e = "error";

// This config provides rules for ECMAScript 2018
module.exports = {
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2018
	},

	env: { es6: true },

	rules: {
		// ECMAScript 6
		"arrow-body-style": [w, "as-needed"],
		"arrow-parens": e,
		"arrow-spacing": w,
		"generator-star-spacing": [w, "both"],
		"no-confusing-arrow": w,
		"no-duplicate-imports": w,
		"no-useless-computed-key": w,
		"no-useless-constructor": w,
		"no-useless-rename": w,
		"object-shorthand": w,
		"prefer-arrow-callback": w,
		"prefer-const": w,
		"prefer-destructuring": w,
		"prefer-numeric-literals": w,
		"prefer-rest-params": w,
		"prefer-spread": w,
		"prefer-template": w,
		"rest-spread-spacing": w,
		"sort-imports": w,
		"template-curly-spacing": [w, "always"],
		"yield-star-spacing": [w, "both"]
	}
};

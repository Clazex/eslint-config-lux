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

const { rules: eslintRules } = require("eslint/conf/eslint-recommended.js");

const { rules: styleRules } = require("./style.js");

const o = "off",
	w = "warn",
	e = "error",
	options = {
		maxAttributeSingleLine: 3,
		maxAttributeMultiline: 1
	},
	rulesToInherit = [
		"array-bracket-spacing",
		"arrow-spacing",
		"block-spacing",
		"brace-style",
		"camelcase",
		"comma-dangle",
		"dot-location",
		"eqeqeq",
		"key-spacing",
		"keyword-spacing",
		"no-empty-pattern",
		"no-irregular-whitespace",
		"object-curly-spacing",
		"space-infix-ops",
		"space-unary-ops"
	];

const inheritedRules = ((originalRuleList, inheritRuleList) => {
	let ruleList = {},
		inheritedRuleList = {};

	originalRuleList.forEach((i) => {
		Object.assign(ruleList, i);
	});

	inheritRuleList.forEach((i) => {
		inheritedRuleList[`vue/${i}`] = ruleList[i];
	});

	return inheritedRuleList;
})([eslintRules, styleRules], rulesToInherit);

// This config provides rules for eslint-plugin-promise
module.exports = {
	parser: "vue-eslint-parser",

	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module"
	},

	plugins: ["vue"],

	extends: ["plugin:vue/recommended", "./index.js"],

	rules: Object.assign({
		// Strongly Recommended
		"vue/html-indent": [w, "tab"],
		"vue/max-attributes-per-line": [w, { singleline: options.maxAttributeSingleLine, multiline: options.maxAttributeMultiline }],



		// Uncategorized
		"vue/component-name-in-template-casing": [w, "kebab-case"],
		"vue/component-tags-order": [e, { order: ["template", "script", "style"] }],
		"vue/match-component-file-name": w,
		"vue/no-deprecated-scope-attribute": e,
		"vue/no-deprecated-slot-attribute": e,
		"vue/no-deprecated-slot-scope-attribute": e,
		"vue/no-reserved-component-names": e,
		"vue/no-static-inline-styles": w,
		"vue/padding-line-between-blocks": w,
		"vue/require-direct-export": w,
		"vue/require-name-property": w,
		"vue/script-indent": ["error", "tab", { switchCase: 1 }],
		"vue/static-class-names-order": w,
		"vue/v-on-function-call": w,
		"vue/v-slot-style": w,
		"vue/valid-v-bind-sync": w,
		"vue/valid-v-slot": w
	}, inheritedRules),

	overrides: [
		{
			files: ["*.vue"],
			rules: { indent: o }
		}
	]
};

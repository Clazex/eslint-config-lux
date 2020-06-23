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
	options = {
		arrayElementNewlineMinItems: 4,
		thisAlias: "self",
		maxIdLength: 32,
		maxBlockDepth: 5,
		maxNestedCallbacks: 5,
		maxFuncParams: 4,
		maxChainedCallPerLine: 3,
		maxMultipleEmptyLines: 3,
		objectNewLineMinItems: 4,
		paddedStatements: [
			"block-like",
			"cjs-export",
			"cjs-import",
			"class",
			"directive",
			"export",
			"function",
			"iife",
			"import",
			"return",
			"throw"
		]
	},

	computed = {
		paddingLineBetweenStatements: options.paddedStatements.reduce((array, i) => {
			let newArray = [
				...array,
				{ blankLine: "always", prev: i, next: "*" },
				{ blankLine: "always", prev: "*", next: i },
				{ blankLine: "any", prev: i, next: i }
			];

			return newArray;
		}, [])
	};

// This config provides stylistic rules
module.exports = {
	rules: {
		// Stylistic Issues
		"array-bracket-newline": [w, { multiline: true }],
		"array-bracket-spacing": w,
		"array-element-newline": [w, { multiline: true, minItems: options.arrayElementNewlineMinItems }],
		"block-spacing": w,
		"brace-style": w,
		"camelcase": w,
		"comma-dangle": e,
		"comma-spacing": w,
		"comma-style": w,
		"computed-property-spacing": w,
		"consistent-this": [w, options.thisAlias],
		"eol-last": w,
		"func-call-spacing": w,
		"func-style": [e, "declaration"],
		"function-paren-newline": w,
		"id-length": [w, { min: 1, max: options.maxIdLength }],
		"implicit-arrow-linebreak": w,
		"indent": [w, "tab", { SwitchCase: 1 }],
		"jsx-quotes": e,
		"key-spacing": w,
		"keyword-spacing": w,
		"linebreak-style": w,
		"lines-around-comment": w,
		"lines-between-class-members": w,
		"max-depth": [w, options.maxBlockDepth],
		"max-nested-callbacks": [w, options.maxNestedCallbacks],
		"max-params": [w, options.maxFuncParams],
		"max-statements-per-line": w,
		"multiline-comment-style": w,
		"multiline-ternary": [w, "always-multiline"],
		"new-cap": e,
		"new-parens": e,
		"newline-per-chained-call": [w, { ignoreChainWithDepth: options.maxChainedCallPerLine }],
		"no-lonely-if": w,
		"no-multiple-empty-lines": [w, { max: options.maxMultipleEmptyLines, maxBOF: 1, maxEOF: 1 }],
		"no-negated-condition": w,
		"no-tabs": o,
		"no-trailing-spaces": w,
		"no-unneeded-ternary": w,
		"no-whitespace-before-property": w,
		"nonblock-statement-body-position": w,
		"object-curly-newline": [w, { multiline: true, minProperties: options.objectNewLineMinItems }],
		"object-curly-spacing": [w, "always"],
		"object-property-newline": [w, { allowAllPropertiesOnSameLine: true }],
		"one-var-declaration-per-line": w,
		"operator-assignment": w,
		"operator-linebreak": [w, "before"],
		"padded-blocks": [w, "never"],
		"padding-line-between-statements": [w, ...computed.paddingLineBetweenStatements],
		"quote-props": [w, "consistent-as-needed"],
		"quotes": [e, "double", { avoidEscape: false }],
		"semi": [e, "always", { omitLastInOneLineBlock: false }],
		"semi-spacing": w,
		"semi-style": w,
		"sort-vars": w,
		"space-before-function-paren": [
			w,
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always"
			}
		],
		"space-in-parens": w,
		"space-infix-ops": w,
		"space-unary-ops": w,
		"spaced-comment": [w, "always"],
		"switch-colon-spacing": w,
		"template-tag-spacing": [w, "always"],
		"unicode-bom": e,
		"wrap-regex": w
	}
};

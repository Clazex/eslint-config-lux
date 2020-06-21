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
		maxCyclomaticComplexity: 10,
		maxClassPerFile: 5,
		warningCommentTerms: ["fixme"],
		callbackErrorName: "^(err|error)$"
	};

// This config provides grammatical rules
module.exports = {
	extends: ["eslint:recommended"],

	rules: {
		// Possible Errors
		"for-direction": o,
		"no-await-in-loop": w,
		"no-extra-parens": w,
		"no-template-curly-in-string": w,
		"require-atomic-updates": w,



		// Best Practices
		"accessor-pairs": w,
		"array-callback-return": e,
		"block-scoped-var": w,
		"class-methods-use-this": w,
		"complexity": [w, options.maxCyclomaticComplexity],
		"consistent-return": e,
		"curly": e,
		"default-case": e,
		"dot-location": [w, "property"],
		"dot-notation": w,
		"eqeqeq": e,
		"guard-for-in": e,
		"max-classes-per-file": [w, options.maxClassPerFile],
		"no-alert": e,
		"no-caller": e,
		"no-div-regex": w,
		"no-else-return": w,
		"no-empty-function": e,
		"no-eq-null": e,
		"no-eval": e,
		"no-extend-native": e,
		"no-extra-bind": w,
		"no-extra-label": e,
		"no-floating-decimal": e,
		"no-implicit-coercion": w,
		"no-implicit-globals": e,
		"no-implied-eval": e,
		"no-invalid-this": e,
		"no-iterator": e,
		"no-labels": e,
		"no-lone-blocks": w,
		"no-loop-func": w,
		"no-multi-spaces": w,
		"no-multi-str": e,
		"no-new": e,
		"no-new-func": e,
		"no-new-wrappers": w,
		"no-octal-escape": e,
		"no-param-reassign": e,
		"no-proto": e,
		"no-return-assign": w,
		"no-return-await": w,
		"no-script-url": e,
		"no-self-compare": w,
		"no-sequences": e,
		"no-throw-literal": e,
		"no-unmodified-loop-condition": w,
		"no-unused-expressions": e,
		"no-useless-call": w,
		"no-useless-concat": w,
		"no-useless-return": w,
		"no-void": e,
		"no-warning-comments": [w, { terms: options.warningCommentTerms }],
		"prefer-named-capture-group": w,
		"prefer-promise-reject-errors": w,
		"radix": [w, "as-needed"],
		"require-await": e,
		"require-unicode-regexp": e,
		"vars-on-top": e,
		"wrap-iife": [e, "inside"],
		"yoda": e,



		// Strict Mode
		"strict": [w, "never"],



		// Variables
		"no-label-var": e,
		"no-shadow": w,
		"no-undef-init": e,
		"no-use-before-define": e,



		// Node.js and CommonJS
		"global-require": e,
		// Use "_" for errors which are not meant to be handled is recommended
		"handle-callback-err": [e, options.callbackErrorName],
		"no-buffer-constructor": e,
		"no-mixed-requires": [w, { grouping: true }],
		"no-new-require": e,
		"no-path-concat": e,
		"no-process-exit": w,
		"no-sync": w
	}
};

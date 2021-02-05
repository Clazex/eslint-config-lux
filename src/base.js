const {
	all, always, consistent, error, never, none, off, warn
} = require("./_options.js");

module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:es/restrict-to-es5"
	],

	parserOptions: {
		ecmaVersion: 5
	},

	rules: {
		// Possible Errors
		"for-direction": off,
		"no-await-in-loop": error,
		"no-extra-boolean-cast": warn,
		"no-extra-parens": [ warn, all, {
			conditionalAssign: false,
			returnAssign: false,
			nestedBinaryExpressions: false,
			ignoreJSX: "multi-line",
			enforceForArrowConditionals: false,
			enforceForSequenceExpressions: false,
			enforceForNewInMemberExpressions: false,
			enforceForFunctionPrototypeMethods: false
		}],
		"no-extra-semi": warn,
		"no-loss-of-precision": warn,
		"no-template-curly-in-string": warn,
		"require-atomic-updates": warn,



		// Best Practices
		"accessor-pairs": warn,
		"array-callback-return": error,
		"block-scoped-var": error,
		"class-methods-use-this": warn,
		"consistent-return": error,
		"default-case": [ error, {
			commentPattern: /^\s*(?:no|ignores?|skips?)\s+default(?:$|\s+.*)/iu.toString()
		}],
		"default-case-last": error,
		"default-param-last": error,
		"dot-location": [ warn, "property" ],
		"dot-notation": warn,
		"eqeqeq": error,
		"grouped-accessor-pairs": [ warn, "getBeforeSet" ],
		"guard-for-in": error,
		"no-alert": error,
		"no-caller": error,
		"no-constructor-return": warn,
		"no-div-regex": error,
		"no-else-return": warn,
		"no-empty-function": warn,
		"no-eq-null": error,
		"no-eval": error,
		"no-extend-native": error,
		"no-extra-bind": error,
		"no-extra-label": error,
		"no-fallthrough": [ error, {
			commentPattern: /^\s*falls?(?:\s+through)?(?:$|\s+.*)/iu.toString()
		}],
		"no-floating-decimal": error,
		"no-implicit-coercion": [ warn, {
			boolean: false,
			string: false,
			allow: [ "+" ] // Allow `+i`
		}],
		"no-implicit-globals": error,
		"no-implied-eval": error,
		"no-invalid-this": error,
		"no-iterator": error,
		"no-labels": warn,
		"no-lone-blocks": warn,
		"no-multi-spaces": warn,
		"no-multi-str": error,
		"no-new": error,
		"no-new-func": error,
		"no-new-wrappers": error,
		"no-nonoctal-decimal-escape": error,
		"no-octal-escape": error,
		"no-param-reassign": error,
		"no-proto": error,
		"no-return-assign": error,
		"no-return-await": error,
		"no-script-url": error,
		"no-self-compare": warn, // Use isNaN() or Number.isNaN() for NaN test
		"no-throw-literal": error,
		"no-unmodified-loop-condition": error,
		"no-unused-expressions": error,
		"no-useless-call": error,
		"no-useless-concat": error,
		"no-useless-return": warn,
		"no-void": warn,
		"prefer-promise-reject-errors": error,
		"prefer-regex-literals": error,
		"radix": [ error, "as-needed" ],
		"require-await": error,
		"vars-on-top": error,
		"wrap-iife": [ error, "inside", { functionPrototypeMethods: true }],
		"yoda": error,



		// Strict Mode
		"strict": warn,



		// Variables
		"no-label-var": error,
		"no-undef-init": error,
		"no-unused-vars": [ warn, {
			args: none,
			ignoreRestSiblings: true,
			caughtErrors: all,
			caughtErrorsIgnorePattern:
				/^(?:_(?:e|err|error)?|ignoredError)$/u.toString()
		}],
		"no-use-before-define": error,



		// Stylistic Issues
		"array-bracket-spacing": [ warn, always, {
			singleValue: true,
			objectsInArrays: false,
			arraysInArrays: false
		}],
		"array-element-newline": [ warn, consistent ],
		"block-spacing": warn,
		"brace-style": [ warn, "1tbs", { allowSingleLine: true }],
		"camelcase": [ warn, {
			ignoreDestructuring: true,
			ignoreImports: true,
			ignoreGlobals: true,
			allow: [
				/^(?:_*[0-9A-Z]*)*$/u.toString()
				/**
				 * @example
				 * _CONSTANT, CONSTANT_CASE
				 */
			]
		}],
		"capitalized-comments": [
			warn,
			always,
			((ignorePattern) => ({
				line: {
					ignorePattern,
					ignoreConsecutiveComments: true
				},
				block: {
					ignorePattern,
					ignoreInlineComments: true
				}
			}))(/webpack|rollup/u.toString())
		],
		"comma-dangle": error,
		"comma-spacing": warn,
		"comma-style": warn,
		"computed-property-spacing": warn,
		"consistent-this": [ warn, "self" ],
		"eol-last": warn,
		"func-call-spacing": warn,
		"func-names": [ warn, "as-needed" ],
		"function-paren-newline": [ warn, "multiline-arguments" ],
		"id-length": [ warn, {
			min: 0,
			max: 48
		}],
		"implicit-arrow-linebreak": warn,
		"indent": [ warn, "tab", {
			SwitchCase: 1,
			offsetTernaryExpressions: true,
			ignoredNodes: [
				...require("eslint-config-standard")
					.rules.indent[2].ignoredNodes
			]
		}],
		"key-spacing": warn,
		"keyword-spacing": warn,
		"linebreak-style": warn,
		"lines-between-class-members": [ warn, always, {
			exceptAfterSingleLine: true
		}],
		"max-len": [ warn, {
			ignoreComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true
		}],
		"multiline-comment-style": warn,
		"multiline-ternary": [ warn, "always-multiline" ],
		"new-cap": [ error, { newIsCap: true, capIsNew: false, properties: true }],
		"new-parens": error,
		"newline-per-chained-call": [ warn, { ignoreChainWithDepth: 5 }],
		"no-array-constructor": error,
		"no-lonely-if": warn,
		"no-mixed-operators": warn,
		"no-mixed-spaces-and-tabs": warn,
		"no-multiple-empty-lines": [ warn, {
			max: 5,
			maxEOF: 1,
			maxBOF: 1
		}],
		"no-new-object": warn,
		"no-trailing-spaces": warn,
		"no-unneeded-ternary": warn,
		"no-whitespace-before-property": warn,
		"nonblock-statement-body-position": warn,
		"object-curly-newline": [ warn, {
			multiline: true,
			consistent: true
		}],
		"object-curly-spacing": [ warn, always, {
			arraysInObjects: true,
			objectsInObjects: false
		}],
		"object-property-newline": [ warn, { allowAllPropertiesOnSameLine: true }],
		"one-var": [ error, { initialized: never }],
		"operator-assignment": warn,
		"operator-linebreak": [ warn, "before" ],
		"padded-blocks": [ warn, never ],
		"padding-line-between-statements": [
			warn,
			...[
				"block",
				"block-like",
				"break",
				"cjs-export",
				"cjs-import",
				"class",
				"continue",
				"directive",
				"export",
				"function",
				"iife",
				"import",
				"return",
				"throw",
				"try"
			].reduce((arr, i) => [
				...arr,
				// Blanklines required between each group and others, optional inside a group
				{ blankLine: always, prev: "*", next: i },
				{ blankLine: always, prev: i, next: "*" },
				{ blankLine: "any", prev: i, next: i }
			], [])
		],
		"quote-props": [ warn, "consistent-as-needed" ],
		"quotes": error,
		"semi": [ error, always, {
			omitLastInOneLineBlock: false
		}],
		"semi-spacing": warn,
		"semi-style": warn,
		"space-before-blocks": warn,
		"space-before-function-paren": [ warn, {
			anonymous: always,
			named: never,
			asyncArrow: always
		}],
		"space-in-parens": warn,
		"space-infix-ops": warn,
		"space-unary-ops": warn,
		"spaced-comment": warn,
		"switch-colon-spacing": warn,
		"template-tag-spacing": warn,
		"unicode-bom": warn,



		// Deprecated
		"valid-jsdoc": warn
	}
};

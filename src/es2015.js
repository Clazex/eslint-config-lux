const { always, both, error, never, readonly, warn } = require("./_options.js");
const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./base.js",
		"./promise.js"
	],

	parserOptions: {
		ecmaVersion: 2015
	},

	env: {
		es6: readonly
	},

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-es2015"]
					.rules
			)
		),



		// Best Practices
		"require-unicode-regexp": error,

		// Strict Mode
		"strict": [ error, never ],



		// ECMAScript 6
		"arrow-body-style": error,
		"arrow-parens": error,
		"arrow-spacing": warn,
		"generator-star-spacing": [ warn, both ],
		"no-confusing-arrow": error,
		"no-duplicate-imports": warn,
		"no-useless-computed-key": warn,
		"no-useless-constructor": warn,
		"no-useless-rename": warn,
		"no-var": warn,
		"object-shorthand": [ warn, always, {
			avoidQuotes: true,
			ignoreConstructors: true
		}],
		"prefer-arrow-callback": warn,
		"prefer-const": warn,
		"prefer-destructuring": warn,
		"prefer-numeric-literals": warn,
		"prefer-rest-params": warn,
		"prefer-spread": warn,
		"prefer-template": warn,
		"rest-spread-spacing": warn,
		"sort-imports": warn,
		"symbol-description": warn,
		"template-curly-spacing": warn,
		"yield-star-spacing": [ warn, both ],



		// Deprecated
		"prefer-reflect": [ error, {
			exceptions: [
				"apply",
				"call",
				"defineProperty",
				"getOwnPropertyDescriptor",
				"getPrototypeOf",
				"setPrototypeOf",
				"isExtensible",
				"getOwnPropertyNames",
				"preventExtensions"
				// Use Reflect.deleteProperty instead of the `delete` operator
			]
		}]
	}
};

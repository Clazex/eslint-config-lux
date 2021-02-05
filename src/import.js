const { error, off, warn } = require("./_options.js");

module.exports = {
	extends: [
		"plugin:import/recommended",
		"./esmodule.js",
		"./es2018.js"
	],

	rules: {
		// Static analysis
		"import/namespace": error,
		"import/no-absolute-path": error,
		"import/no-cycle": error,
		"import/no-self-import": error,
		"import/no-unresolved": [ error, { amd: true }], // Use "lux/commonjs" for require()
		"import/no-useless-path-segments": warn,



		// Helpful warnings
		"import/export": error,
		"import/no-deprecated": warn,
		"import/no-extraneous-dependencies": error,
		"import/no-mutable-exports": error,



		// Style guide
		"import/exports-last": warn,
		"import/extensions": [ warn, "ignorePackages" ],
		"no-duplicate-imports": off, // Turn off the original one and use the one below
		"import/no-anonymous-default-export": warn,
		"import/no-duplicates": warn,
		"import/no-named-default": warn,
		"import/order": [ warn, {
			"groups": [
				"builtin",
				"external",
				[ "internal", "parent", "sibling", "index" ],
				"object"
			],
			"newlines-between": "always-and-inside-groups"
		}],
		"import/prefer-default-export": warn
	}
};

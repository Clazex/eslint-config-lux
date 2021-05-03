const inherit = require("./_inherit.js");

module.exports = {
	extends: [
		"./esmodule.js"
	],

	overrides: [
		{
			files: [ "*.vue" ],

			extends: [
				"plugin:vue/recommended"
			],

			rules: {
				...inherit({
					prefix: "vue",
					baseRuleLists: [ "base", "es2015" ]
						.map((i) => require(`./${i}.js`).rules),
					ruleNames: [
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
					]
				})
			}
		}
	]
};

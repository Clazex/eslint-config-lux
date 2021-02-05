const replace = require("./_replace.js");

module.exports = {
	parser: "@babel/eslint-parser",

	plugins: [
		"@babel"
	],

	rules: {
		...replace({
			prefix: "@babel",
			baseRuleLists: [ "base" ]
				.map((i) => require(`./${i}.js`).rules),
			ruleNames: [
				"new-cap",
				"no-invalid-this",
				"no-unused-expressions",
				"object-curly-spacing",
				"semi"
			]
		})
	}
};

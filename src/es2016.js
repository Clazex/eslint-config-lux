const { error } = require("./_options");
const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./es2015.js"
	],

	parserOptions: {
		ecmaVersion: 2016
	},

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-es2016"]
					.rules
			)
		),



		// Stylistic Issues
		"prefer-exponentiation-operator": error
	}
};

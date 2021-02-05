const { readonly } = require("./_options.js");
const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./es2020.js"
	],

	parserOptions: {
		ecmaVersion: 2021
	},

	env: {
		es2021: readonly
	},

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-es2021"]
					.rules
			)
		)
	}
};

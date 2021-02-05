const { readonly } = require("./_options.js");
const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./es2019.js"
	],

	parserOptions: {
		ecmaVersion: 2020
	},

	env: {
		es2020: readonly
	},

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-es2020"]
					.rules
			)
		)
	}
};

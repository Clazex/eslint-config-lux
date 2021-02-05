const { readonly } = require("./_options.js");
const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./es2016.js"
	],

	parserOptions: {
		ecmaVersion: 2017
	},

	env: {
		es2017: readonly
	},

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-es2017"]
					.rules
			)
		)
	}
};

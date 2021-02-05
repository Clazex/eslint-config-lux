const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./es2018.js"
	],

	parserOptions: {
		ecmaVersion: 2019
	},

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-es2019"]
					.rules
			)
		)
	}
};

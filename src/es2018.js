const { warn, error } = require("./_options.js");
const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./es2017.js"
	],

	parserOptions: {
		ecmaVersion: 2018
	},

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-es2018"]
					.rules
			)
		),



		// Best Practices
		"prefer-named-capture-group": warn,



		// Stylistic Issues
		"prefer-object-spread": error
	}
};

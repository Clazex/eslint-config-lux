const { warn } = require("./_options.js");

module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	rules: {
		// Stylistic Issues
		"jsx-quotes": warn
	}
};

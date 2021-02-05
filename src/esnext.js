const remove = require("./_remove.js");

module.exports = {
	extends: [
		"./es2021.js"
	],

	rules: {
		...remove(
			Object.keys(
				require("eslint-plugin-es")
					.configs["no-new-in-esnext"]
					.rules
			)
		)
	}
};

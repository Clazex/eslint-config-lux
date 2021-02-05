const { error, never, warn } = require("./_options");

module.exports = {
	extends: [
		"./base.js"
	],

	rules: {
		// Stylistic Issues
		indent: [ warn, 2 ],
		semi: [ error, never ],
		quotes: [ error, "single" ]
	}
};

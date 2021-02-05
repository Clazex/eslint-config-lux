const { always, error } = require("./_options");

module.exports = {
	extends: [
		"./standard.js"
	],

	rules: {
		// Stylistic Issues
		semi: [ error, always ]
	}
};

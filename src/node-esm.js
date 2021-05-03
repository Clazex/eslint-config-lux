const { off } = require("./_options");

module.exports = {
	extends: [
		"./node.js",
		"./import.js"
	],

	rules: {
		"node/no-unsupported-features/es-syntax": off
	}
};

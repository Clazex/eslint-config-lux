const { warn, error } = require("./_options.js");

module.exports = {
	extends: [
		"plugin:promise/recommended"
	],

	rules: {
		"promise/catch-or-return": [ warn, {
			allowFinally: true
		}],
		"promise/valid-params": error
	}
};

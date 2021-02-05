const { error, readonly } = require("./_options.js");

module.exports = {
	env: {
		commonjs: readonly
	},

	plugins: [ "node" ],

	rules: {
		"node/no-extraneous-require": error,
		"node/no-missing-require": error,
		"node/no-unpublished-require": error
	}
};

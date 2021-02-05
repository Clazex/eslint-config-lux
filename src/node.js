const { error, off, readonly, warn } = require("./_options.js");

module.exports = {
	extends: [
		"plugin:node/recommended",
		"./commonjs.js"
	],

	env: {
		node: readonly
	},

	rules: {
		// Use `lux/import`
		"node/no-extraneous-import": off,
		"node/no-missing-import": off,
		"node/no-unpublished-import": off,



		// Possible Errors
		"node/handle-callback-err": [
			warn,
			/^(?:_|\$|_?(?:e|err|error)|(?:_|[a-z])(?:\d+|[A-Z][A-Za-z]*)*Error)$/u.toString()
			/**
			 * @example
			 * _, $;
			 * _e, _err, _error;
			 * someKindOfError, someNo9Error;
			 * _9Error, _supersupersuperLongError
			 */

		],
		"node/no-callback-literal": error,
		"node/no-new-require": error,
		"node/no-path-concat": error,
		"node/no-process-exit": warn,



		// Stylistic Issues
		"node/exports-style": error,
		"node/file-extension-in-import": error,
		"node/prefer-global/buffer": warn,
		"node/prefer-global/console": warn,
		"node/prefer-global/process": warn,
		"node/prefer-global/text-decoder": warn,
		"node/prefer-global/text-encoder": warn,
		"node/prefer-global/url-search-params": warn,
		"node/prefer-global/url": warn,
		"node/prefer-promises/dns": warn,
		"node/prefer-promises/fs": warn
	}
};

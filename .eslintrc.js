module.exports = {
	root: true,

	extends: [
		"./src/node.js",
		"./src/es2020.js",
		"./src/babel.js"
	],

	rules: {
		"node/file-extension-in-import": [ "warn", "never" ]
	}
};

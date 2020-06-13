module.exports = {
	root: true,

	parser: "babel-eslint",

	env: {
		commonjs: true,
		node: true
	},

	parserOptions: { sourceType: "script" },

	extends: ["./index.js"]
};

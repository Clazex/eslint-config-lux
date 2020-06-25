const o = "off",
	w = "warn",
	e = "error";

module.exports = {
	root: true,

	parser: "babel-eslint",

	env: {
		commonjs: true,
		node: true
	},

	parserOptions: { sourceType: "script" },

	extends: ["./index.js", "./node.js"],
	
	rules: {
		"no-unused-vars": o,
		"sort-vars": o
	}
};

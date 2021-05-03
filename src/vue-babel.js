module.exports = {
	extends: [
		"./babel.js"
	],

	overrides: [
		{
			files: [ "*.vue" ],

			extends: [
				"./vue.js"
			],

			parser: "vue-eslint-parser",

			parserOptions: {
				parser: "@babel/eslint-parser"
			}
		}
	]
};

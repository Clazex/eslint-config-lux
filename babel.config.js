module.exports = function configure(api) {
	api.cache.forever();

	return {
		targets: {
			node: "14"
		},

		presets: [
			"@babel/preset-env"
		]
	};
};

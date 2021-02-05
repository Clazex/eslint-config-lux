const { copy, writeJson, readJSON } = require("fs-extra");
const clearPromise = require("./clear.js");

const copyOpts = {
	overwrite: true,
	preserveTimestamps: true
};

module.exports = clearPromise
	.then(() => Promise.all([
		copy("src", "dist", copyOpts),

		...[
			"LICENSE",
			"README.md"
		].map((i) => copy(i, `dist/${i}`), copyOpts),

		// eslint-disable-next-line promise/no-nesting
		readJSON("./package.json")
			.then((obj) => {
				[
					"private",
					"scripts",
					"config"
				].forEach((i) => Reflect.deleteProperty(obj, i));

				return obj;
			})
			.then((obj) => writeJson("./dist/package.json", obj, { spaces: 2 }))
	]))
	.catch(console.error);

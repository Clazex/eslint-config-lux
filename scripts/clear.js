const { emptyDir } = require("fs-extra");

module.exports = emptyDir("dist")
	.catch(console.error);

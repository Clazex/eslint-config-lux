const { off } = require("./_options.js");

module.exports = function remove(ruleNames) {
	return ruleNames.reduce((list, ruleName) => ({
		...list,
		[ruleName]: off
	}), {});
};

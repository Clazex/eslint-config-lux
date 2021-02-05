const inherit = require("./_inherit.js");
const remove = require("./_remove.js");

module.exports = function replace({ baseRuleLists, prefix, ruleNames }) {
	return {
		...inherit({ baseRuleLists, prefix, ruleNames }),
		...remove(ruleNames)
	};
};

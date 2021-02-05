module.exports = function inherit({ prefix, baseRuleLists, ruleNames }) {
	return ruleNames.reduce((list, ruleName) => ({
		...list,
		...baseRuleLists.reduce((_, baseRuleList) => ({
			[`${prefix}/${ruleName}`]: baseRuleList[ruleName]
		}), {})
	}), {});
};

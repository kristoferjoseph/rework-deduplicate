module.exports = function(str) {
    var duplicates = {},
        dupe;
    return function(style) {
        style.rules = style.rules.filter(function(rule) {
            if (!rule.selectors) {
                return rule;
            }
            rule.selectors = rule.selectors.map(function(selector) {
                if (duplicates[selector]) {
                    dupe = false;
                } else {
                    duplicates[selector] = selector;
                    dupe = true;
                }
                return selector;
            });
            return dupe;
        });
    };
};

var eql = require('deep-equal');

module.exports = function(str) {
    var deduplicated = [],
        valid;

    function isDuplicate(rule) {
        if (!deduplicated.length) {
            console.log("FIRST\n======");
            deduplicated.push(rule);
            return true;
        }
        deduplicated.forEach(function(dupe) {
            if (eql(dupe, rule)) {
                valid = false;
            } else {
                valid = true;
            }
        });

        console.log(
            '\nRULE\n',
            rule,
            '\n' + valid + '\n');

        if (valid) { deduplicated.push(rule); }

        return valid;
    }

    return function(style) {
        style.rules = style.rules.filter(isDuplicate);
    };
};

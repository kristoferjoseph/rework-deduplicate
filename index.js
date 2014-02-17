var eql = require('deep-equal');

module.exports = function(str) {

    function uniques(arr) {
        var deduplicated = [],
            len = arr.length,
            dupe, i, j;

        for (i = 0; i < len; i++) {
            dupe = undefined;
            for (j = 0; j < deduplicated.length; j++) {
                if (eql(deduplicated[j], arr[i])) {
                    dupe = true;
                    break;
                }
            }
            if (!dupe) {
                deduplicated.push(arr[i]);
            }
        }
        return deduplicated;
    }

    return function(style) {
        style.rules = uniques(style.rules);
    };
};

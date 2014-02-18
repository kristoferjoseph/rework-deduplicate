var equal = require('deep-equal');

module.exports = function(str) {

    function uniques(arr) {
        var deduplicated = [],
            len = arr.length,
            duplicate, i, j;

        for (i = 0; i < len; i++) {
            duplicate = undefined;
            for (j = 0; j < deduplicated.length; j++) {
                if (equal(deduplicated[j], arr[i])) {
                    duplicate = true;
                    break;
                }
            }
            if (!duplicate) {
                deduplicated.push(arr[i]);
            }
        }
        return deduplicated;
    }

    return function(style) {
        style.rules = uniques(style.rules);
    };
};

　define(['a'], function (a) {
    var add = function (x) {
        return x + a.aVal;
    };
    return {
        a: add
    };
　　});
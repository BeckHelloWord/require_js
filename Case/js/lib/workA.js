define(function () {
    //变量定义区
    var myModule = {}, newArr = [];

    //去重
    var toHeavy = function (arr) {
        var arr = arr || [];
        arr.filter(function (val, index, arr) {
            // console.log(val)
            if (arr[val] == index) {
                newArr.push(val);
            }
        })
    }

    //暴露API区
    myModule.newArr = newArr;
    myModule.toHeavy = toHeavy;
    return myModule;
})
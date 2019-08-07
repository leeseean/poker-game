var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TsUtils = (function () {
    function TsUtils() {
    }
    /**
     * 删除数组中的某个元素
     */
    TsUtils.Remove = function (arr, t) {
        var index = -1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == t)
                index = i;
        }
        arr.splice(index, 1);
        return arr;
    };
    return TsUtils;
}());
__reflect(TsUtils.prototype, "TsUtils");

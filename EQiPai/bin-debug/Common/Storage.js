var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LocalStorage;
(function (LocalStorage) {
    var Storage = (function () {
        function Storage() {
        }
        Storage.prototype.Set = function (key, value) {
            egret.localStorage.setItem(key, value);
        };
        Storage.prototype.Set1 = function (key, value) {
            var str = JSON.stringify(value);
            egret.localStorage.setItem(key, str);
        };
        Storage.prototype.Get = function (key) {
            return egret.localStorage.getItem(key);
        };
        Storage.prototype.Get1 = function (key) {
            var str = egret.localStorage.getItem(key);
            var t = JSON.parse(str);
            return t;
        };
        return Storage;
    }());
    LocalStorage.Storage = Storage;
    __reflect(Storage.prototype, "LocalStorage.Storage");
})(LocalStorage || (LocalStorage = {}));

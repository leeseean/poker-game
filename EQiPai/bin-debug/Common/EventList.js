// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventList = (function () {
    function EventList() {
        this.dic = new Array();
    }
    EventList.prototype.Add = function (key, value) {
        this.dic[key] = value;
    };
    EventList.prototype.Get = function (key) {
        var t = this.dic[key];
        return t;
    };
    return EventList;
}());
__reflect(EventList.prototype, "EventList");

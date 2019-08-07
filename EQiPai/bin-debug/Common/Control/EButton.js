var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var EButton = (function (_super) {
    __extends(EButton, _super);
    function EButton() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.w = _this.width;
            _this.h = _this.height;
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                _this.width -= 5;
                _this.height -= 5;
            }, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, function () {
                _this.width = _this.w;
                _this.height = _this.h;
            }, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
                _this.width = _this.w;
                _this.height = _this.h;
            }, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
                _this.width = _this.w;
                _this.height = _this.h;
            }, _this);
        }, _this);
        return _this;
    }
    EButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    EButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return EButton;
}(eui.Button));
__reflect(EButton.prototype, "EButton", ["eui.UIComponent", "egret.DisplayObject"]);

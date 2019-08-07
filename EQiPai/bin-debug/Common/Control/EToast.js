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
var EToast = (function (_super) {
    __extends(EToast, _super);
    function EToast() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/GameSkin/Common/EToast.exml";
        return _this;
    }
    EToast.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    EToast.prototype.SetText = function (txt) {
        if (txt == undefined)
            return;
        this.lbMsg.text = txt;
    };
    EToast.prototype.SetColor = function (color) {
        this.lbMsg.textColor = color;
    };
    EToast.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.timer = new egret.Timer(1000, 2);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.over, this);
        this.timer.start();
    };
    EToast.prototype.over = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return EToast;
}(eui.Component));
__reflect(EToast.prototype, "EToast", ["eui.UIComponent", "egret.DisplayObject"]);

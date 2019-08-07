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
var ETimer = (function (_super) {
    __extends(ETimer, _super);
    function ETimer() {
        var _this = _super.call(this) || this;
        _this.timer = new egret.Timer(1000);
        return _this;
    }
    ETimer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ETimer.prototype.AddCall = function (call) {
        this.call = call;
    };
    ETimer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
        this.TimeStart(15);
    };
    ETimer.prototype.TimeStart = function (num) {
        this.num = num;
        this.timer.stop();
        this.timer.repeatCount = num;
        this.timer.start();
    };
    ETimer.prototype.timerFunc = function () {
        this.num -= 1;
        this.lbTime.text = this.num.toString();
        if (this.num <= 10) {
            this.tween = egret.Tween.get(this, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 500).wait(200);
        }
        if (this.num <= 0) {
            egret.Tween.pauseTweens(this);
        }
    };
    ETimer.prototype.timerComplete = function () {
        //Timer倒计时完成，发送事件
        if (this.call != null) {
            this.call();
        }
    };
    return ETimer;
}(eui.Component));
__reflect(ETimer.prototype, "ETimer", ["eui.UIComponent", "egret.DisplayObject"]);

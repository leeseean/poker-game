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
var LoadView = (function (_super) {
    __extends(LoadView, _super);
    function LoadView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/GameSkin/Common/LoadScene.exml";
        return _this;
    }
    LoadView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoadView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var tween = egret.Tween.get(this.img_load, { loop: true });
        tween.to({ rotation: 360 }, 2000);
    };
    return LoadView;
}(BaseScene));
__reflect(LoadView.prototype, "LoadView");

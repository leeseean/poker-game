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
var DdzLoadScene = (function (_super) {
    __extends(DdzLoadScene, _super);
    function DdzLoadScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/GameSkin/Ddz/DdzLoadScene.exml";
        return _this;
    }
    DdzLoadScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DdzLoadScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.viewstack.selectedIndex = 0;
        this.tab_checkStack.dataProvider = new eui.ArrayCollection(["登录", "注册"]);
        this.tab_checkStack.addEventListener(eui.ItemTapEvent.ITEM_TAP, function () {
            _this.viewstack.selectedIndex = _this.viewstack.selectedIndex == 1 ? 0 : 1;
            _this.addChild(new LoadView());
        }, this);
        this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var username = _this.input_username.text;
            platform.login(username);
            var userInfo = platform.getUserInfo();
            console.log(userInfo);
        }, this);
        AudioMgr.GetInstance().PlayBgAudio("bg_mp3");
    };
    return DdzLoadScene;
}(BaseScene));
__reflect(DdzLoadScene.prototype, "DdzLoadScene");

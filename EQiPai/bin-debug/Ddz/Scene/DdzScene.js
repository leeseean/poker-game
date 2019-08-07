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
var DdzScene = (function (_super) {
    __extends(DdzScene, _super);
    function DdzScene() {
        var _this = _super.call(this) || this;
        _this.cards = [];
        /**
         * 当前发牌的第几张
         */
        _this.index = 0;
        _this.skinName = "resource/GameSkin/Ddz/GameScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            console.log(_this.chupai_Area.name);
            _this.fapaiTimer = new egret.Timer(200, 17);
            _this.fapaiTimer.addEventListener(egret.TimerEvent.TIMER, _this.fapai, _this);
            _this.fapaiTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.fapaiover, _this);
            //添加牌到发牌的容器中
            var tag = 0;
            for (var i = 0; i < 17; i++) {
                tag += 40;
                var card = new PDKCard();
                card.x = tag;
                _this.cards.push(card);
            }
            _this.ready.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.ready.visible = false;
                _this.invite.visible = false;
                _this.fapaiTimer.start();
                var demo = new TestDemo();
                demo.Data = "数据内容";
                NetMgr.GetInstance().Emit("user", "Register", demo);
            }, _this);
            _this.invite.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                var dialog = new Dialog();
                dialog.Show(_this);
            }, _this);
        }, _this);
        return _this;
    }
    DdzScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DdzScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    DdzScene.prototype.fapai = function () {
        this.chupai_Area.addChild(this.cards[this.index]);
        this.index += 1;
        // let data = new Protocol<string>();
        // data.cmd = "wocao ";
        // data.data = "123";
        // NetMgr.GetInstance().SendData(data)
    };
    DdzScene.prototype.fapaiover = function () {
        console.log("发牌完成");
    };
    return DdzScene;
}(BaseScene));
__reflect(DdzScene.prototype, "DdzScene");

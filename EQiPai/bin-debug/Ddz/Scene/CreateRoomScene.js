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
var CreateRoomScene = (function (_super) {
    __extends(CreateRoomScene, _super);
    function CreateRoomScene() {
        var _this = _super.call(this) || this;
        _this.numberlist = "-----";
        _this.numberIndex = 0;
        _this.skinName = "resource/GameSkin/Ddz/CreateRoom.exml";
        return _this;
    }
    CreateRoomScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CreateRoomScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.ebtn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.group_ishow.visible = true;
        }, this);
        this.img_dialog.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.group_ishow.visible = false;
        }, this);
        var childnumber = this.ebtn_group_number.numChildren;
        for (var i = 0; i < childnumber; i++) {
            var ebtn = this.ebtn_group_number.getChildAt(i);
            ebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                var button = e.currentTarget;
                var name = button.name;
                if (name == "del1") {
                    _this.numberIndex == 0 ? 0 : (_this.numberIndex -= 1);
                    _this.UpdateNumberList(_this.numberIndex, "-");
                }
                else if (name == "del2") {
                    _this.numberIndex = 0;
                    _this.numberlist = "-----";
                }
                else {
                    if (_this.numberIndex <= 4) {
                        _this.UpdateNumberList(_this.numberIndex, button.name);
                        _this.numberIndex += 1;
                    }
                }
                // console.log("-----------|" + this.numberlist);
                _this.UpdateNumber();
                if (_this.numberIndex == 5) {
                    console.log("开始查找房间");
                }
            }, this);
        }
        this.ebtn_create.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createRoom, this);
    };
    CreateRoomScene.prototype.UpdateNumber = function () {
        this.lb0.text = this.numberlist[0];
        this.lb1.text = this.numberlist[1];
        this.lb2.text = this.numberlist[2];
        this.lb3.text = this.numberlist[3];
        this.lb4.text = this.numberlist[4];
    };
    CreateRoomScene.prototype.UpdateNumberList = function (index, str) {
        var numlist = "";
        for (var i = 0; i < this.numberlist.length; i++) {
            if (index == i) {
                numlist += str;
            }
            else {
                numlist += this.numberlist[i];
            }
        }
        this.numberlist = numlist;
    };
    CreateRoomScene.prototype.createRoom = function () {
        console.log("创建房间");
        var pb_cpr = PB.MsgCreatePrivateRoom.create();
        pb_cpr.roomType = "RM_DDZ";
        NetMgr.GetInstance().SendPB("CPRM", PB.MsgCreatePrivateRoom, pb_cpr);
        NetMgr.GetInstance().addEventListener("DDZ_GI", function () {
        }, this);
    };
    return CreateRoomScene;
}(BaseScene));
__reflect(CreateRoomScene.prototype, "CreateRoomScene");

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
var PDKCard = (function (_super) {
    __extends(PDKCard, _super);
    function PDKCard() {
        var _this = _super.call(this) || this;
        /**
         * 是否选中
         */
        _this.cardSelect = false;
        _this.skinName = "resource/GameSkin/Ddz/Control/Card.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (a) {
                _this.cardSelect = !_this.cardSelect;
                if (_this.cardSelect) {
                    _this.card_shade.visible = true;
                    _this.y -= 15;
                }
                else {
                    _this.card_shade.visible = false;
                    _this.y += 15;
                }
            }, _this);
        }, _this);
        return _this;
    }
    PDKCard.prototype.SetValue = function (str) {
        this.Value = str;
    };
    PDKCard.prototype.GetValue = function () {
        return this.Value;
    };
    PDKCard.prototype.SetSource = function (str) {
        if (this.card_texture == null)
            return;
        this.card_texture.source = str;
    };
    PDKCard.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PDKCard.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return PDKCard;
}(eui.Component));
__reflect(PDKCard.prototype, "PDKCard", ["eui.UIComponent", "egret.DisplayObject"]);

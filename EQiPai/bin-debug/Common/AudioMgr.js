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
var AudioMgr = (function (_super) {
    __extends(AudioMgr, _super);
    function AudioMgr() {
        return _super.call(this) || this;
    }
    AudioMgr.GetInstance = function () {
        if (this.audio == null)
            this.audio = new AudioMgr();
        return this.audio;
    };
    AudioMgr.prototype.PlayBgAudio = function (str) {
        if (this.bgSound == null)
            this.bgSound = RES.getRes(str);
        if (this.bgSoundCanel != null)
            this.bgSoundCanel.stop();
        this.bgSoundCanel = this.bgSound.play(0, 0);
    };
    AudioMgr.prototype.StopBgAudio = function () {
        if (this.bgSoundCanel != null)
            this.bgSoundCanel.stop();
    };
    AudioMgr.prototype.ExtraSound = function (str) {
        var sound = RES.getRes(str);
        sound.play(0, 1);
    };
    return AudioMgr;
}(egret.DisplayObject));
__reflect(AudioMgr.prototype, "AudioMgr");

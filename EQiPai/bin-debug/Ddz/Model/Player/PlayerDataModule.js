var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerDataModule = (function () {
    function PlayerDataModule() {
    }
    PlayerDataModule.prototype.Init = function () {
        NetMgr.GetInstance().addEventListener("SyncPlayerInfo", this.CBSyncPlayerInfo, this);
    };
    PlayerDataModule.prototype.CBSyncPlayerInfo = function (event) {
        var pb_playerinfo = event.msg.rprotobuf(PB.MsgPlayerInfo);
        console.log("SyncPlayerInfo");
        console.log(pb_playerinfo);
        /// 请求创建房间
        var pb_cpr = PB.MsgCreatePrivateRoom.create();
        pb_cpr.roomType = "RM_DDZ";
        NetMgr.GetInstance().SendPB("CPRM", PB.MsgCreatePrivateRoom, pb_cpr);
    };
    PlayerDataModule.GetInstance = function () {
        if (this.__self == null) {
            this.__self = new PlayerDataModule();
        }
        return this.__self;
    };
    return PlayerDataModule;
}());
__reflect(PlayerDataModule.prototype, "PlayerDataModule");

var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理器
 */
var SceneMgr = (function () {
    function SceneMgr() {
    }
    /**
     * 添加场景
     */
    SceneMgr.AddScene = function (iscene) {
        if (iscene == null || this.sceneList.concat(iscene))
            return;
        this.sceneList.push(iscene);
    };
    /**
     * 场景集合
     */
    SceneMgr.sceneList = new Array();
    return SceneMgr;
}());
__reflect(SceneMgr.prototype, "SceneMgr");

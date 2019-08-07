var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.scenes = [];
    }
    SceneManager.Instance = function () {
        if (this.manager == null) {
            this.manager = new SceneManager();
        }
        return this.manager;
    };
    /**
     * Main作为游戏外部容器
     */
    SceneManager.prototype.InitMain = function (main) {
        if (this._main == null) {
            this._main = main;
        }
    };
    /**
     * 加入场景
     */
    SceneManager.prototype.PushScene = function (scene) {
        if (scene != null && this._main != null) {
            scene.width = this._main.width;
            scene.height = this._main.height;
            this._main.addChild(scene);
            this.scenes.push(scene);
        }
    };
    /**
     * 弹出一个场景
     */
    SceneManager.prototype.PopScene = function () {
        if (this.scenes != null) {
            var len = this.scenes.length;
            if (len > 0) {
                var scene = this.scenes[len - 1];
                if (scene.parent == this._main) {
                    this._main.removeChild(scene);
                    this.scenes.pop();
                }
            }
        }
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");

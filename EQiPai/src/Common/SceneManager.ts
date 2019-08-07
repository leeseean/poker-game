class SceneManager {
	public constructor() {
	}
	public static manager: SceneManager;

	_main: egret.DisplayObjectContainer;
	scenes: egret.DisplayObjectContainer[] = [];

	public static Instance(): SceneManager {
		if (this.manager == null) {
			this.manager = new SceneManager();

		}
		return this.manager;
	}
	/**
	 * Main作为游戏外部容器
	 */
	public InitMain(main: egret.DisplayObjectContainer): void {
		if (this._main == null) {
			this._main = main;
		}
	}
	/**
	 * 加入场景
	 */
	public PushScene(scene: egret.DisplayObjectContainer) {
		if (scene != null && this._main != null) {
			scene.width = this._main.width;
			scene.height = this._main.height;
			this._main.addChild(scene)
			this.scenes.push(scene);

		}

	}
	/**
	 * 弹出一个场景
	 */
	public PopScene() {
		if (this.scenes != null) {
			var len = this.scenes.length;
			if (len > 0) {
				var scene = this.scenes[len - 1];
				if (scene.parent == this._main) {
					this._main.removeChild(scene)
					this.scenes.pop();
				}
			}

		}

	}
}
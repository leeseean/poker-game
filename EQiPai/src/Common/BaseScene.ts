class BaseScene extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.width = this.stage.stageWidth;
			this.height = this.stage.stageHeight;
		}, this)
	}
}
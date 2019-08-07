class Dialog extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/GameSkin/Common/DialogOk.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.width = this.stage.stageWidth;
			this.height = this.stage.stageHeight;
		}, this)
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	img_dialog_outer: eui.Image;
	btn_dialog_cancel: eui.Button;

	protected childrenCreated(): void {
		super.childrenCreated();
		this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)

		this.btn_dialog_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)

	}

	public Show(view: egret.DisplayObjectContainer) {
		if (!view.contains(this)) {
			view.addChild(this);
		}
	}

	public Close() {
		if (this.parent != null)
			this.parent.removeChild(this);
	}

}
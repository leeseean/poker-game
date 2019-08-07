class LoadView extends BaseScene {
	public constructor() {
		super();
		this.skinName = "resource/GameSkin/Common/LoadScene.exml";
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	img_load: eui.Image;

	protected childrenCreated(): void {
		super.childrenCreated();
		let tween = egret.Tween.get(this.img_load, { loop: true });
		tween.to(
			{ rotation: 360 }, 2000
		)
	}

}
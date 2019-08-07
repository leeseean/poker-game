class EToast extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/GameSkin/Common/EToast.exml";
	}


	lbMsg: eui.Label;
	timer: egret.Timer;

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public SetText(txt: string) {

		if (txt == undefined) return;
		this.lbMsg.text = txt;

	}

	public SetColor(color: number) {
		this.lbMsg.textColor = color;
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.timer = new egret.Timer(1000, 2)
		this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.over, this)
		this.timer.start();
	}

	over() {
		if (this.parent) {
			this.parent.removeChild(this)

		}
	}

}
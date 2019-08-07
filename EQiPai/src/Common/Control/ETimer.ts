class ETimer extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}
	lbTime: eui.Label;
	/**
	 * 倒计时总数
	 */
	num: number;
	timer: egret.Timer = new egret.Timer(1000);
	call: Function;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public AddCall(call: Function) {
		this.call = call;
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
		this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
		this.TimeStart(15)
	}

	public TimeStart(num: number) {
		this.num = num;
		this.timer.stop();
		this.timer.repeatCount = num;
		this.timer.start();


	}
	tween: egret.Tween;
	public timerFunc() {
		this.num -= 1;
		this.lbTime.text = this.num.toString();

		if (this.num <= 10) {
			this.tween = egret.Tween.get(this, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 500).wait(200)
		}
		if (this.num <= 0) {
			egret.Tween.pauseTweens(this)
		}

	}
	public timerComplete() {
		//Timer倒计时完成，发送事件
		if (this.call != null) {
			this.call();
		}
	}

}
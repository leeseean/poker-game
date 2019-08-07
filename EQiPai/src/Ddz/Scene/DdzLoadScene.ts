class DdzLoadScene extends BaseScene {
	public constructor() {
		super();

		this.skinName = "resource/GameSkin/Ddz/DdzLoadScene.exml";
	}
	tab_checkStack: eui.TabBar;
	viewstack: eui.ViewStack;
	btnLogin: eui.Button;
	input_username: eui.TextInput;
	input_pwd: eui.TextInput;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.viewstack.selectedIndex = 0;
		this.tab_checkStack.dataProvider = new eui.ArrayCollection(["登录", "注册"])
		this.tab_checkStack.addEventListener(eui.ItemTapEvent.ITEM_TAP, () => {
			this.viewstack.selectedIndex = this.viewstack.selectedIndex == 1 ? 0 : 1;
			this.addChild(new LoadView())

		}, this)
		this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

			let username = this.input_username.text;
			platform.login(username);
			
			const userInfo = platform.getUserInfo();
			console.log(userInfo);


		}, this)
		AudioMgr.GetInstance().PlayBgAudio("bg_mp3");
	}

}
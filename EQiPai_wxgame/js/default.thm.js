var egret = window.egret;window.skins={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","border_down":"resource/GameSkin/pdk/border_down.exml","DdzLoadScene":"resource/eui_skins/DdzLoadScene.exml","DdzCreateScene":"resource/eui_skins/DdzCreateScene.exml","DdzSelectScene":"resource/eui_skins/DdzSelectScene.exml","LoadScene":"resource/eui_skins/LoadScene.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DdzSelectScene.exml'] = window.DdzSelectSceneSkin = (function (_super) {
	__extends(DdzSelectSceneSkin, _super);
	function DdzSelectSceneSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 720;
		this.width = 1224;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = DdzSelectSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg1_jpg";
		t.top = 0;
		return t;
	};
	return DdzSelectSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/GameSkin/Common/DialogOk.exml'] = window.DialogOk = (function (_super) {
	__extends(DialogOk, _super);
	var DialogOk$Skin1 = 	(function (_super) {
		__extends(DialogOk$Skin1, _super);
		function DialogOk$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DialogOk$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dialog_zhunbei_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DialogOk$Skin1;
	})(eui.Skin);

	var DialogOk$Skin2 = 	(function (_super) {
		__extends(DialogOk$Skin2, _super);
		function DialogOk$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DialogOk$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dialog_cancel_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DialogOk$Skin2;
	})(eui.Skin);

	function DialogOk() {
		_super.call(this);
		this.skinParts = ["img_dialog_outer","lb_dialog_text","btn_dialog_cancel"];
		
		this.height = 720;
		this.width = 1224;
		this.elementsContent = [this.img_dialog_outer_i(),this._Group2_i()];
	}
	var _proto = DialogOk.prototype;

	_proto.img_dialog_outer_i = function () {
		var t = new eui.Image();
		this.img_dialog_outer = t;
		t.bottom = 0;
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "dialog_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 446.97;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 666.66;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._EButton1_i(),this.btn_dialog_cancel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -137.02999999999997;
		t.left = 0;
		t.right = -0.34000000000003183;
		t.scale9Grid = new egret.Rectangle(28,82,518,270);
		t.source = "dialog_panel_png";
		t.top = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 188;
		t.width = 564;
		t.x = 49.33;
		t.y = 99;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.lb_dialog_text_i()];
		return t;
	};
	_proto.lb_dialog_text_i = function () {
		var t = new eui.Label();
		this.lb_dialog_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.text = "今天是个好日子，今天血战到天亮今天是个好日子，今天血战到天亮";
		t.top = 0;
		t.wordWrap = true;
		return t;
	};
	_proto._EButton1_i = function () {
		var t = new EButton();
		t.horizontalCenter = 0;
		t.y = 340;
		t.skinName = DialogOk$Skin1;
		return t;
	};
	_proto.btn_dialog_cancel_i = function () {
		var t = new EButton();
		this.btn_dialog_cancel = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 55;
		t.x = 621.32;
		t.y = -10.66;
		t.skinName = DialogOk$Skin2;
		return t;
	};
	return DialogOk;
})(eui.Skin);generateEUI.paths['resource/GameSkin/Common/DialogView.exml'] = window.DialogView = (function (_super) {
	__extends(DialogView, _super);
	function DialogView() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 720;
		this.width = 1224;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = DialogView.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return DialogView;
})(eui.Skin);generateEUI.paths['resource/GameSkin/Common/LoadScene.exml'] = window.LoadSceneSkin = (function (_super) {
	__extends(LoadSceneSkin, _super);
	function LoadSceneSkin() {
		_super.call(this);
		this.skinParts = ["loading","img_load"];
		
		this.height = 720;
		this.width = 1224;
		this.loading_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_load_i()];
	}
	var _proto = LoadSceneSkin.prototype;

	_proto.loading_i = function () {
		var t = new egret.tween.TweenGroup();
		this.loading = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dialog_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 151;
		t.horizontalCenter = 0;
		t.source = "load_0_png";
		t.verticalCenter = 0;
		t.width = 151;
		return t;
	};
	_proto.img_load_i = function () {
		var t = new eui.Image();
		this.img_load = t;
		t.height = 151;
		t.horizontalCenter = 0;
		t.source = "load_1_png";
		t.verticalCenter = 0;
		t.width = 151;
		return t;
	};
	return LoadSceneSkin;
})(eui.Skin);generateEUI.paths['resource/GameSkin/Ddz/DdzLoadScene.exml'] = window.DdzLoadSceneSkin = (function (_super) {
	__extends(DdzLoadSceneSkin, _super);
	var DdzLoadSceneSkin$Skin3 = 	(function (_super) {
		__extends(DdzLoadSceneSkin$Skin3, _super);
		function DdzLoadSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DdzLoadSceneSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_wxlogin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DdzLoadSceneSkin$Skin3;
	})(eui.Skin);

	function DdzLoadSceneSkin() {
		_super.call(this);
		this.skinParts = ["tab_checkStack","btnLogin","g_login","g_register","viewstack"];
		
		this.height = 720;
		this.width = 1224;
		this.elementsContent = [this._Image1_i(),this.tab_checkStack_i(),this.viewstack_i()];
	}
	var _proto = DdzLoadSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.tab_checkStack_i = function () {
		var t = new eui.TabBar();
		this.tab_checkStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 0;
		t.width = 500;
		t.y = 100;
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.value = "null";
		return t;
	};
	_proto.viewstack_i = function () {
		var t = new eui.ViewStack();
		this.viewstack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 350;
		t.horizontalCenter = 0;
		t.selectedIndex = 1;
		t.width = 500;
		t.y = 164;
		t.elementsContent = [this.g_login_i(),this.g_register_i()];
		return t;
	};
	_proto.g_login_i = function () {
		var t = new eui.Group();
		this.g_login = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.name = "Group";
		t.top = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.btnLogin_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74.24;
		t.horizontalCenter = 0;
		t.width = 428.79;
		t.y = 24;
		t.elementsContent = [this._Label1_i(),this._TextInput1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "账号";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.67;
		t.verticalCenter = 0;
		t.width = 321.52;
		t.x = 90;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74.24;
		t.horizontalCenter = 0;
		t.width = 428.79;
		t.y = 112;
		t.elementsContent = [this._Label2_i(),this._TextInput2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "密码";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 36.67;
		t.inputType = "PASSWORD";
		t.verticalCenter = 0;
		t.width = 321.52;
		t.x = 90;
		return t;
	};
	_proto.btnLogin_i = function () {
		var t = new eui.Button();
		this.btnLogin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = -12.5;
		t.width = 168;
		t.y = 196;
		t.skinName = DdzLoadSceneSkin$Skin3;
		return t;
	};
	_proto.g_register_i = function () {
		var t = new eui.Group();
		this.g_register = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Button1_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74.24;
		t.horizontalCenter = 0;
		t.width = 428.79;
		t.y = 24;
		t.elementsContent = [this._Label3_i(),this._TextInput3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "账号";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._TextInput3_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.67;
		t.verticalCenter = 0;
		t.width = 321.52;
		t.x = 90;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74.24;
		t.horizontalCenter = 0;
		t.width = 428.79;
		t.y = 112;
		t.elementsContent = [this._Label4_i(),this._TextInput4_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "密码";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._TextInput4_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 36.67;
		t.inputType = "PASSWORD";
		t.verticalCenter = 0;
		t.width = 321.52;
		t.x = 90;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "确定注册";
		t.width = 285;
		t.y = 216;
		return t;
	};
	return DdzLoadSceneSkin;
})(eui.Skin);generateEUI.paths['resource/GameSkin/Ddz/GameScene.exml'] = window.GameScene = (function (_super) {
	__extends(GameScene, _super);
	var GameScene$Skin4 = 	(function (_super) {
		__extends(GameScene$Skin4, _super);
		function GameScene$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin4;
	})(eui.Skin);

	var GameScene$Skin5 = 	(function (_super) {
		__extends(GameScene$Skin5, _super);
		function GameScene$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_setting_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin5;
	})(eui.Skin);

	var GameScene$Skin6 = 	(function (_super) {
		__extends(GameScene$Skin6, _super);
		function GameScene$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_tuoguan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin6;
	})(eui.Skin);

	var GameScene$Skin7 = 	(function (_super) {
		__extends(GameScene$Skin7, _super);
		function GameScene$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","user_chat_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","user_chat_png")
					])
			];
		}
		var _proto = GameScene$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "user_chat_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin7;
	})(eui.Skin);

	function GameScene() {
		_super.call(this);
		this.skinParts = ["btn_back","ready","invite","table","btn_setting","btn_tuoguan","user_addgold","user_addhomecard","user_chat","btn_userbar","chupai_Area","UserGroup_Me"];
		
		this.height = 720;
		this.width = 1224;
		this.elementsContent = [this._Image1_i(),this.btn_back_i(),this.table_i(),this._Group1_i(),this.btn_userbar_i(),this.chupai_Area_i(),this.UserGroup_Me_i()];
	}
	var _proto = GameScene.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 720;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg2_jpg";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.x = 39.96;
		t.y = 13;
		t.skinName = GameScene$Skin4;
		return t;
	};
	_proto.table_i = function () {
		var t = new eui.Group();
		this.table = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = -1.5;
		t.top = 280;
		t.width = 1222.61;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.ready_i(),this.invite_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "scale";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skewY = 180;
		t.source = "table_left_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.source = "table_left_png";
		t.top = 0;
		return t;
	};
	_proto.ready_i = function () {
		var t = new eui.Image();
		this.ready = t;
		t.height = 109;
		t.source = "ready_png";
		t.width = 263;
		t.x = 385;
		t.y = 84;
		return t;
	};
	_proto.invite_i = function () {
		var t = new eui.Image();
		this.invite = t;
		t.height = 109;
		t.source = "invite_png";
		t.width = 263;
		t.x = 673.53;
		t.y = 84;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 75;
		t.right = 29;
		t.width = 200;
		t.y = 3;
		t.elementsContent = [this.btn_setting_i(),this.btn_tuoguan_i()];
		return t;
	};
	_proto.btn_setting_i = function () {
		var t = new eui.Button();
		this.btn_setting = t;
		t.x = 98;
		t.y = 1;
		t.skinName = GameScene$Skin5;
		return t;
	};
	_proto.btn_tuoguan_i = function () {
		var t = new eui.Button();
		this.btn_tuoguan = t;
		t.x = -1;
		t.y = 3;
		t.skinName = GameScene$Skin6;
		return t;
	};
	_proto.btn_userbar_i = function () {
		var t = new eui.Group();
		this.btn_userbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 3;
		t.height = 81;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 315.5;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.user_addgold_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.user_addhomecard_i(),this.user_chat_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 81;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(73,24,1061,36);
		t.source = "buttom_border_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 17;
		t.height = 50;
		t.source = "gold_bg_png";
		t.verticalCenter = -1.5;
		t.width = 258.45;
		t.x = 16;
		return t;
	};
	_proto.user_addgold_i = function () {
		var t = new eui.Image();
		this.user_addgold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 13;
		t.height = 54;
		t.source = "button_plus_png";
		t.verticalCenter = 0.5;
		t.width = 54;
		t.x = 225.53;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 7;
		t.height = 59;
		t.source = "gold_left_png";
		t.verticalCenter = 4;
		t.width = 63;
		t.x = 10;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 18;
		t.height = 50;
		t.right = 175;
		t.source = "home_card_png";
		t.width = 229;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 17;
		t.height = 47;
		t.right = 357;
		t.source = "user_home_card_icon_png";
		t.width = 43;
		return t;
	};
	_proto.user_addhomecard_i = function () {
		var t = new eui.Image();
		this.user_addhomecard = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.height = 54;
		t.right = 172;
		t.source = "button_plus_png";
		t.width = 54;
		return t;
	};
	_proto.user_chat_i = function () {
		var t = new eui.Button();
		this.user_chat = t;
		t.bottom = 13;
		t.right = 16;
		t.skinName = GameScene$Skin7;
		return t;
	};
	_proto.chupai_Area_i = function () {
		var t = new eui.Group();
		this.chupai_Area = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 101;
		t.height = 145.44;
		t.left = 168;
		t.name = "chupai";
		t.right = 79.02999999999997;
		return t;
	};
	_proto.UserGroup_Me_i = function () {
		var t = new eui.Group();
		this.UserGroup_Me = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180.48;
		t.width = 184;
		t.x = 2;
		t.y = 371.7;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134.97;
		t.source = "usergroup_border_png";
		t.width = 153.45;
		t.x = 9.55;
		t.y = 14.03;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101.2;
		t.source = "userimg_default_png";
		t.width = 108.67;
		t.x = 32.54;
		t.y = 31.21;
		return t;
	};
	return GameScene;
})(eui.Skin);generateEUI.paths['resource/GameSkin/Ddz/Control/Card.exml'] = window.Card = (function (_super) {
	__extends(Card, _super);
	function Card() {
		_super.call(this);
		this.skinParts = ["card_texture","card_shade"];
		
		this.height = 140;
		this.width = 100;
		this.elementsContent = [this.card_texture_i(),this.card_shade_i()];
	}
	var _proto = Card.prototype;

	_proto.card_texture_i = function () {
		var t = new eui.Image();
		this.card_texture = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "pk_sp_back_png";
		t.top = 0;
		return t;
	};
	_proto.card_shade_i = function () {
		var t = new eui.Image();
		this.card_shade = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "pk_sp_shadow_back_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return Card;
})(eui.Skin);
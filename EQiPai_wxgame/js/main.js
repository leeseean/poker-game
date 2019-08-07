var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var BaseScene = (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.width = _this.stage.stageWidth;
            _this.height = _this.stage.stageHeight;
        }, _this);
        return _this;
    }
    return BaseScene;
}(eui.Component));
__reflect(BaseScene.prototype, "BaseScene", ["eui.UIComponent", "egret.DisplayObject"]);
var LocalStorage;
(function (LocalStorage) {
    var Storage = (function () {
        function Storage() {
        }
        Storage.prototype.Set = function (key, value) {
            egret.localStorage.setItem(key, value);
        };
        Storage.prototype.Set1 = function (key, value) {
            var str = JSON.stringify(value);
            egret.localStorage.setItem(key, str);
        };
        Storage.prototype.Get = function (key) {
            return egret.localStorage.getItem(key);
        };
        Storage.prototype.Get1 = function (key) {
            var str = egret.localStorage.getItem(key);
            var t = JSON.parse(str);
            return t;
        };
        return Storage;
    }());
    LocalStorage.Storage = Storage;
    __reflect(Storage.prototype, "LocalStorage.Storage");
})(LocalStorage || (LocalStorage = {}));
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LoginModule.GetInstance().Init();
                        PlayerDataModule.GetInstance().Init();
                        return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        platform.login();
                        userInfo = platform.getUserInfo();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        loadingView = new LoadingUI();
                        loadingView.x = this.stage.width / 2 - loadingView.width;
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("Pai", 0, loadingView)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("UI", 0, loadingView)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("sound", 0, loadingView)];
                    case 6:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var pdk = new DdzLoadScene();
        this.addChild(pdk);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ClientModule.GetInstance().UserInfo];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, request;
            return __generator(this, function (_a) {
                params = "?Channel=REG&GameType=RM_DDZ&User=admin&AppName=WX_5E8A";
                request = new egret.HttpRequest();
                request.responseType = egret.HttpResponseType.TEXT;
                //将参数拼接到url
                request.open("http://139.199.80.217/www/login/login_test.php" + params, egret.HttpMethod.GET);
                request.send();
                request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
                request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
                request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        var user = JSON.parse(request.response);
        user.IP = user.FES.split(":")[0];
        user.Port = Number(user.FES.split(":")[1]);
        ClientModule.GetInstance().UserInfo = user;
        NetMgr.GetInstance().StartSocket(user.IP, user.Port);
    };
    DebugPlatform.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    DebugPlatform.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var AudioMgr = (function (_super) {
    __extends(AudioMgr, _super);
    function AudioMgr() {
        return _super.call(this) || this;
    }
    AudioMgr.GetInstance = function () {
        if (this.audio == null)
            this.audio = new AudioMgr();
        return this.audio;
    };
    AudioMgr.prototype.PlayBgAudio = function (str) {
        if (this.bgSound == null)
            this.bgSound = RES.getRes(str);
        if (this.bgSoundCanel != null)
            this.bgSoundCanel.stop();
        this.bgSoundCanel = this.bgSound.play(0, 0);
    };
    AudioMgr.prototype.StopBgAudio = function () {
        if (this.bgSoundCanel != null)
            this.bgSoundCanel.stop();
    };
    AudioMgr.prototype.ExtraSound = function (str) {
        var sound = RES.getRes(str);
        sound.play(0, 1);
    };
    return AudioMgr;
}(egret.DisplayObject));
__reflect(AudioMgr.prototype, "AudioMgr");
// TypeScript file
var BaseData = (function () {
    function BaseData() {
    }
    return BaseData;
}());
__reflect(BaseData.prototype, "BaseData");
var BaseEvent = (function (_super) {
    __extends(BaseEvent, _super);
    function BaseEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.controller = "";
        _this.action = "";
        return _this;
    }
    return BaseEvent;
}(egret.Event));
__reflect(BaseEvent.prototype, "BaseEvent");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var EQiPaiConfig = (function () {
    function EQiPaiConfig() {
    }
    return EQiPaiConfig;
}());
__reflect(EQiPaiConfig.prototype, "EQiPaiConfig");
// TypeScript file
var EventList = (function () {
    function EventList() {
        this.dic = new Array();
    }
    EventList.prototype.Add = function (key, value) {
        this.dic[key] = value;
    };
    EventList.prototype.Get = function (key) {
        var t = this.dic[key];
        return t;
    };
    return EventList;
}());
__reflect(EventList.prototype, "EventList");
var NetEvent = (function (_super) {
    __extends(NetEvent, _super);
    function NetEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    return NetEvent;
}(egret.Event));
__reflect(NetEvent.prototype, "NetEvent");
var Protocol = (function () {
    function Protocol() {
    }
    return Protocol;
}());
__reflect(Protocol.prototype, "Protocol");
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "\u52A0\u8F7D\u8D44\u6E90..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var TestDemo = (function () {
    function TestDemo() {
    }
    return TestDemo;
}());
__reflect(TestDemo.prototype, "TestDemo");
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/GameSkin/Common/DialogOk.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.width = _this.stage.stageWidth;
            _this.height = _this.stage.stageHeight;
        }, _this);
        return _this;
    }
    Dialog.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dialog.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.Close();
        }, this);
        this.btn_dialog_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.Close();
        }, this);
    };
    Dialog.prototype.Show = function (view) {
        if (!view.contains(this)) {
            view.addChild(this);
        }
    };
    Dialog.prototype.Close = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
    };
    return Dialog;
}(eui.Component));
__reflect(Dialog.prototype, "Dialog", ["eui.UIComponent", "egret.DisplayObject"]);
var EButton = (function (_super) {
    __extends(EButton, _super);
    function EButton() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.w = _this.width;
            _this.h = _this.height;
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                _this.width -= 5;
                _this.height -= 5;
            }, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, function () {
                _this.width = _this.w;
                _this.height = _this.h;
            }, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
                _this.width = _this.w;
                _this.height = _this.h;
            }, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
                _this.width = _this.w;
                _this.height = _this.h;
            }, _this);
        }, _this);
        return _this;
    }
    EButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    EButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return EButton;
}(eui.Button));
__reflect(EButton.prototype, "EButton", ["eui.UIComponent", "egret.DisplayObject"]);
// TypeScript file
/**
 * 网络管理类
 */
var NetMgr = (function (_super) {
    __extends(NetMgr, _super);
    function NetMgr() {
        var _this = _super.call(this) || this;
        _this.socket = new egret.WebSocket();
        _this.recv_buffer = new egret.ByteArray();
        _this.send_buffer = new egret.ByteArray();
        _this.temp_msg = new SocketMsg();
        return _this;
    }
    NetMgr.GetInstance = function () {
        if (this.net == null) {
            this.net = new NetMgr();
        }
        return this.net;
    };
    NetMgr.prototype.StartSocket = function (serverip, port) {
        if (this.socket.connected)
            return;
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.IOError, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.Close, this);
        this.socket.connect(serverip, port);
        this.conn_serverip = serverip;
        this.conn_serverport = port;
    };
    /**
     * 发送消息
     */
    NetMgr.prototype.SendMsg = function (msg) {
        try {
            if (this.socket.connected) {
                this.send_buffer.clear();
                this.send_buffer.endian = egret.Endian.BIG_ENDIAN;
                this.send_buffer.writeInt(msg.buff_msg.length);
                this.send_buffer.endian = egret.Endian.LITTLE_ENDIAN;
                this.send_buffer.writeBytes(msg.buff_msg);
                this.socket.writeBytes(this.send_buffer, 0, this.send_buffer.length);
                this.socket.flush();
            }
            else {
                console.error("网络没有连接");
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    NetMgr.prototype.SendPB = function (msg_name, pb_type, pb_stru) {
        this.temp_msg.reset(msg_name);
        this.temp_msg.wprotobuf(pb_type, pb_stru);
        this.SendMsg(this.temp_msg);
    };
    NetMgr.prototype.GetStatus = function () {
        return this.socket.connected;
    };
    NetMgr.prototype.onReceiveMessage = function () {
        this.socket.readBytes(this.recv_buffer, this.recv_buffer.position);
        if (this.recv_buffer.bytesAvailable > 4) {
            this.recv_buffer.endian = egret.Endian.BIG_ENDIAN;
            var msg_len = this.recv_buffer.readInt();
            this.recv_buffer.endian = egret.Endian.LITTLE_ENDIAN;
            if (this.recv_buffer.bytesAvailable >= msg_len) {
                var msg = new SocketMsg();
                msg.fill(this.recv_buffer, this.recv_buffer.position, msg_len);
                this.processReceive(msg);
            }
            else {
                console.log("msg len error");
            }
            this.recv_buffer.clear();
        }
    };
    NetMgr.prototype.processReceive = function (msg) {
        console.log("recv msg : " + msg.name);
        var netevent = new NetEvent(msg.name);
        netevent.msg = msg;
        this.dispatchEvent(netevent);
    };
    NetMgr.prototype.Close = function () {
        console.log("连接关闭");
    };
    NetMgr.prototype.onSocketOpen = function () {
        console.log("网络连接成功，发送LOGIN。");
        var user = ClientModule.GetInstance().UserInfo;
        var pb_login = PB_MSG.MsgLogin.create();
        pb_login.Version = ClientModule.GetInstance().Version;
        pb_login.Channel = ClientModule.GetInstance().Channel;
        pb_login.AppName = ClientModule.GetInstance().AppName;
        pb_login.User = user.User;
        pb_login.NonceStr = user.NonceStr;
        pb_login.Token = user.Token;
        pb_login.Timestamp = user.Timestamp;
        pb_login.UID = user.UID;
        pb_login.RoomType = ClientModule.GetInstance().RoomType;
        NetMgr.GetInstance().SendPB("LOGIN", PB_MSG.MsgLogin, pb_login);
    };
    NetMgr.prototype.IOError = function () {
        console.log("网络连接断开");
    };
    NetMgr.prototype.Emit = function (controller, action, data) {
        if (!this.socket.connected) {
            var protocol = new Protocol();
            protocol.controller = controller;
            protocol.action = action;
            protocol.data = data;
            var json = JSON.stringify(protocol);
            this.socket.writeUTF(json);
        }
    };
    return NetMgr;
}(egret.DisplayObject));
__reflect(NetMgr.prototype, "NetMgr");
var SocketMsg = (function () {
    function SocketMsg(name) {
        if (name === void 0) { name = ''; }
        this.buff_msg = new egret.ByteArray();
        this.buff_msg.endian = egret.Endian.LITTLE_ENDIAN;
        this.reset(name);
    }
    SocketMsg.prototype.reset = function (name) {
        this.name = name;
        this.buff_msg.clear();
        this.buff_msg.writeInt(0);
        this.buff_msg.writeByte(0);
        this.wstring(this.name);
    };
    SocketMsg.prototype.fill = function (val, offset, len) {
        this.buff_msg.clear();
        this.buff_msg.writeBytes(val, offset, len);
        // read name
        this.buff_msg.position = 5;
        this.name = this.rstring();
    };
    SocketMsg.prototype.wstring = function (val) {
        this.wint32(val.length);
        this.buff_msg.writeUTFBytes(val);
    };
    SocketMsg.prototype.wint32 = function (val) {
        this.buff_msg.writeInt(val);
    };
    SocketMsg.prototype.wuint32 = function (val) {
        this.buff_msg.writeUnsignedInt(val);
    };
    SocketMsg.prototype.wint64 = function (val) {
        var long = protobuf.util.LongBits.from(val);
        this.wuint32(long.lo);
        this.wuint32(long.hi);
    };
    SocketMsg.prototype.wdouble = function (val) {
        this.buff_msg.writeDouble(val);
    };
    SocketMsg.prototype.wprotobuf = function (pb_type, pb_stru) {
        var buff_msg = pb_type.encode(pb_stru).finish();
        var egret_buffer = new egret.ByteArray(buff_msg);
        this.wint32(egret_buffer.length);
        this.buff_msg.writeBytes(egret_buffer, 0, egret_buffer.length);
    };
    SocketMsg.prototype.wjson = function (val) {
        this.wstring(JSON.stringify(val));
    };
    ////////////////////////
    SocketMsg.prototype.rint32 = function () {
        return this.buff_msg.readInt();
    };
    SocketMsg.prototype.ruint32 = function () {
        return this.buff_msg.readUnsignedInt();
    };
    SocketMsg.prototype.rdouble = function () {
        return this.buff_msg.readDouble();
    };
    SocketMsg.prototype.rstring = function () {
        var len = this.rint32();
        return this.buff_msg.readUTFBytes(len);
    };
    SocketMsg.prototype.rint64 = function (unsigned) {
        var val = new protobuf.util.LongBits(0, 0);
        val.hi = this.ruint32();
        val.lo = this.ruint32();
        return val.toLong(unsigned);
    };
    SocketMsg.prototype.rjson = function () {
        var len = this.rint32();
        var json_str = this.buff_msg.readUTFBytes(len);
        return JSON.parse(json_str);
    };
    SocketMsg.prototype.rprotobuf = function (msg_type) {
        var len = this.rint32();
        var pb_buffer = new egret.ByteArray();
        this.buff_msg.readBytes(pb_buffer, 0, len);
        return msg_type.decode(pb_buffer.bytes);
    };
    return SocketMsg;
}());
__reflect(SocketMsg.prototype, "SocketMsg");
var PDKUtils = (function () {
    function PDKUtils() {
    }
    return PDKUtils;
}());
__reflect(PDKUtils.prototype, "PDKUtils");
var PDKCard = (function (_super) {
    __extends(PDKCard, _super);
    function PDKCard() {
        var _this = _super.call(this) || this;
        /**
         * 是否选中
         */
        _this.cardSelect = false;
        _this.skinName = "resource/GameSkin/Ddz/Control/Card.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (a) {
                _this.cardSelect = !_this.cardSelect;
                if (_this.cardSelect) {
                    _this.card_shade.visible = true;
                    _this.y -= 15;
                }
                else {
                    _this.card_shade.visible = false;
                    _this.y += 15;
                }
            }, _this);
        }, _this);
        return _this;
    }
    PDKCard.prototype.SetValue = function (str) {
        this.Value = str;
    };
    PDKCard.prototype.GetValue = function () {
        return this.Value;
    };
    PDKCard.prototype.SetSource = function (str) {
        if (this.card_texture == null)
            return;
        this.card_texture.source = str;
    };
    PDKCard.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PDKCard.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return PDKCard;
}(eui.Component));
__reflect(PDKCard.prototype, "PDKCard", ["eui.UIComponent", "egret.DisplayObject"]);
var ClientModule = (function () {
    function ClientModule() {
        this.Version = "1.0"; // 当前版本
        this.Channel = "REG"; // 账号渠道
        this.AppName = "WX_5E8A"; // 游戏包名
        this.User = "admin"; // 帐号名   openid
        this.RoomType = "RM_DDZ"; // 请求进入的游戏名字
        this.UserInfo = new JsonUser();
    }
    ClientModule.GetInstance = function () {
        if (this.__self == null) {
            this.__self = new ClientModule();
        }
        return this.__self;
    };
    return ClientModule;
}());
__reflect(ClientModule.prototype, "ClientModule");
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.prototype.Init = function () {
        NetMgr.GetInstance().addEventListener("AuthOk", this.CBAuthOk, this);
    };
    LoginModule.prototype.CBAuthOk = function () {
        console.log("AuthOk回调，进入大厅场景");
    };
    LoginModule.GetInstance = function () {
        if (this.__self == null) {
            this.__self = new LoginModule();
        }
        return this.__self;
    };
    return LoginModule;
}());
__reflect(LoginModule.prototype, "LoginModule");
var JsonUser = (function () {
    function JsonUser() {
    }
    return JsonUser;
}());
__reflect(JsonUser.prototype, "JsonUser");
var PlayerDataModule = (function () {
    function PlayerDataModule() {
    }
    PlayerDataModule.prototype.Init = function () {
        NetMgr.GetInstance().addEventListener("SyncPlayerInfo", this.CBSyncPlayerInfo, this);
    };
    PlayerDataModule.prototype.CBSyncPlayerInfo = function (event) {
        var pb_playerinfo = event.msg.rprotobuf(PB_MSG.MsgPlayerInfo);
        console.log("SyncPlayerInfo");
        console.log(pb_playerinfo);
    };
    PlayerDataModule.GetInstance = function () {
        if (this.__self == null) {
            this.__self = new PlayerDataModule();
        }
        return this.__self;
    };
    return PlayerDataModule;
}());
__reflect(PlayerDataModule.prototype, "PlayerDataModule");
var DdzLoadScene = (function (_super) {
    __extends(DdzLoadScene, _super);
    function DdzLoadScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/GameSkin/Ddz/DdzLoadScene.exml";
        return _this;
    }
    DdzLoadScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DdzLoadScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.viewstack.selectedIndex = 0;
        this.tab_checkStack.dataProvider = new eui.ArrayCollection(["登录", "注册"]);
        this.tab_checkStack.addEventListener(eui.ItemTapEvent.ITEM_TAP, function () {
            _this.viewstack.selectedIndex = _this.viewstack.selectedIndex == 1 ? 0 : 1;
            _this.addChild(new LoadView());
        }, this);
        this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            platform.login();
            var userInfo = platform.getUserInfo();
            console.log(userInfo);
        }, this);
        AudioMgr.GetInstance().PlayBgAudio("bg_mp3");
    };
    return DdzLoadScene;
}(BaseScene));
__reflect(DdzLoadScene.prototype, "DdzLoadScene");
var DdzScene = (function (_super) {
    __extends(DdzScene, _super);
    function DdzScene() {
        var _this = _super.call(this) || this;
        _this.cards = [];
        /**
         * 当前发牌的第几张
         */
        _this.index = 0;
        _this.skinName = "resource/GameSkin/Ddz/GameScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            console.log(_this.chupai_Area.name);
            _this.fapaiTimer = new egret.Timer(200, 17);
            _this.fapaiTimer.addEventListener(egret.TimerEvent.TIMER, _this.fapai, _this);
            _this.fapaiTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.fapaiover, _this);
            //添加牌到发牌的容器中
            var tag = 0;
            for (var i = 0; i < 17; i++) {
                tag += 40;
                var card = new PDKCard();
                card.x = tag;
                _this.cards.push(card);
            }
            _this.ready.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.ready.visible = false;
                _this.invite.visible = false;
                _this.fapaiTimer.start();
                var demo = new TestDemo();
                demo.Data = "数据内容";
                NetMgr.GetInstance().Emit("user", "Register", demo);
            }, _this);
            _this.invite.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                var dialog = new Dialog();
                dialog.Show(_this);
            }, _this);
        }, _this);
        return _this;
    }
    DdzScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DdzScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    DdzScene.prototype.fapai = function () {
        this.chupai_Area.addChild(this.cards[this.index]);
        this.index += 1;
        // let data = new Protocol<string>();
        // data.cmd = "wocao ";
        // data.data = "123";
        // NetMgr.GetInstance().SendData(data)
    };
    DdzScene.prototype.fapaiover = function () {
        console.log("发牌完成");
    };
    return DdzScene;
}(BaseScene));
__reflect(DdzScene.prototype, "DdzScene");
var LoadView = (function (_super) {
    __extends(LoadView, _super);
    function LoadView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/GameSkin/Common/LoadScene.exml";
        return _this;
    }
    LoadView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoadView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var tween = egret.Tween.get(this.img_load, { loop: true });
        tween.to({ rotation: 360 }, 2000);
    };
    return LoadView;
}(BaseScene));
__reflect(LoadView.prototype, "LoadView");
;window.Main = Main;
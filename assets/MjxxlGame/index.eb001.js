System.register("chunks:///_virtual/MjxxlGame", ['./MjxxlScene.ts', './MjxxlGameView.ts', './ui_ScrollView.ts', './ui_help.ts', './ui_helpTip.ts', './ui_history.ts', './ui_historyItem.ts', './ui_rank.ts', './ui_rankItem.ts', './ui_rate.ts', './ui_setBase.ts', './ui_symbol.ts', './ui_symbolEffectRoot.ts', './ui_symbolInfo.ts', './ui_symbolItem.ts', './ui_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MjxxlGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './MjxxlDef.ts', './MjxxlCtrl.ts', './ViewManager.ts', './MjxxlUtils.ts', './ui_symbol.ts', './ui_winTip.ts', './ui_rate.ts', './Common.ts', './AudioManager.ts', './MjxxlModel.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Button, sp, Label, view, tween, v3, find, instantiate, UIOpacity, Tween, UITransform, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eSound, Constant, eProto, MjxxlCtrl, ViewManager, MjxxlUtils, ui_symbol, ui_winTip, ui_rate, Common, AudioManager, MjxxlModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      sp = module.sp;
      Label = module.Label;
      view = module.view;
      tween = module.tween;
      v3 = module.v3;
      find = module.find;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      UITransform = module.UITransform;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      Constant = module.Constant;
      eProto = module.eProto;
    }, function (module) {
      MjxxlCtrl = module.MjxxlCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }, function (module) {
      ui_symbol = module.default;
    }, function (module) {
      ui_winTip = module.default;
    }, function (module) {
      ui_rate = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      MjxxlModel = module.MjxxlModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "08a3ai5NyNFc6cnbidBxPH3", "MjxxlGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var MjxxlGameView = exports('default', (_dec = ccclass("MjxxlGameView"), _dec2 = menu("game/MjxxlGame/MjxxlGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(ui_symbol), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(sp.Skeleton), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(ui_rate), _dec20 = property(Node), _dec21 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(MjxxlGameView, _GameDef$BaseView);
        function MjxxlGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mask", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_helpTip", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_symbol", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tip", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor15, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_rate", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeFire", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_tipBg_free", _descriptor19, _assertThisInitialized(_this));
          _this.arrBtnStatus = [];
          return _this;
        }
        var _proto = MjxxlGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          this.onClickHTMLStartBtn = this.onClickHTMLStartBtn.bind(this);
          window.addEventListener("customEventFromHTML", this.onClickHTMLStartBtn);
        };
        _proto.onClickHTMLStartBtn = function onClickHTMLStartBtn() {
          window.removeEventListener("customEventFromHTML", this.onClickHTMLStartBtn);
          _GameDef$BaseView.prototype.onLoad.call(this, MjxxlCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!MjxxlUtils.instance.isChangeOrientation()) {
            var viewSize = view.getFrameSize();
            if (viewSize.width / viewSize.height > 750 / 1334) {
              this.Node_action.setPosition(this.Node_action.position.x, this.Node_action.position.y + 15);
              this.Node_menu.setPosition(this.Node_menu.position.x, this.Node_menu.position.y + 15);
              this.Button_menu.node.setPosition(this.Button_menu.node.position.x, this.Button_menu.node.position.y + 15);
              this.Button_run.node.setPosition(this.Button_run.node.position.x, this.Button_run.node.position.y + 15);
            }
          }
          MjxxlUtils.instance.playBgMusic();
          if (MjxxlModel.instance.totalFreeTimes > 0) {
            this.showFree(true, true);
          }
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线

          EventManager.instance.on(eEvent.onRunStop, this.doRunEnd, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线

          EventManager.instance.off(eEvent.onRunStop, this.doRunEnd, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          MjxxlModel.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        };
        _proto.start = function start() {};
        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameHide = function gameHide() {
          NetManager.instance.removeWaitServicePush();
        };
        _proto.onReconnectSuccess = function onReconnectSuccess() {
          if (MjxxlCtrl.instance.isReqBet) {
            MjxxlCtrl.instance.reqBet();
          }
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this2 = this;
          // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseScore}_curIndex`, MjxxlModel.instance._curIndex_baseScore + 1);
          // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseRate}_curIndex`, MjxxlModel.instance._curIndex_baseRate + 1);
          // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseBet}_curIndex`, MjxxlModel.instance._curIndex_baseBet + 1);

          MjxxlModel.instance.curBet = MjxxlModel.instance.baseBetList[MjxxlModel.instance._curIndex_baseBet];
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this2.Label_bet.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBet);
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          //        // let _curIndex_baseScore = cc.sys.localStorage.getItem(`${MjxxlDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = cc.sys.localStorage.getItem(`${MjxxlDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = cc.sys.localStorage.getItem(`${MjxxlDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          //        // MjxxlModel.instance.curBet = (_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;

          //        // MjxxlModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // MjxxlModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // MjxxlModel.instance._curIndex_baseBet = _curIndex_baseBet;

          this.ui_symbol.initSymbol();
          this.initView();
          var Button_auto = find("Node_down/Node_action/Button_auto", this.node);
          MjxxlUtils.instance.setBtnBetGray(Button_auto.getChildByName("Background"), true);
          var Button_fast = find("Node_down/Node_action/Button_fast", this.node);
          MjxxlUtils.instance.setBtnBetGray(Button_fast.getChildByName("Background"), true);
          this.Label_bet.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBet);
          this.Label_win.string = MjxxlUtils.instance.moneyFormat(0);
          this.updateGold();
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this3 = this;
          switch (event.target.name) {
            //            //返回
            case "Button_menu":
              {
                this.Node_action.active = !this.Node_action.active;
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                MjxxlCtrl.instance.reqExit();
                Common.exitGame();
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", MjxxlUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", MjxxlUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                //                // GUtil.openRank("Mjxxl");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", MjxxlUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_auto":
              {
                MjxxlModel.instance.isAuto = !MjxxlModel.instance.isAuto;
                this.Button_run.interactable = !MjxxlModel.instance.isAuto;
                MjxxlUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !MjxxlModel.instance.isAuto);
                if (MjxxlModel.instance.gameStatus != eRunStatus.RUNNING && MjxxlModel.instance.isAuto) {
                  MjxxlCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_fast":
              {
                //                //快速停止
                MjxxlModel.instance.isQuickStop = !MjxxlModel.instance.isQuickStop;
                MjxxlUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !MjxxlModel.instance.isQuickStop);
                break;
              }
            case "Button_redus":
              {
                MjxxlModel.instance._curIndex_baseBet--;
                if (MjxxlModel.instance._curIndex_baseBet <= 0) {
                  MjxxlModel.instance._curIndex_baseBet = 0;
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
                }
                MjxxlModel.instance.curBet = MjxxlModel.instance.baseBetList[MjxxlModel.instance._curIndex_baseBet];
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this3.Label_bet.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBet);
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseScore}_curIndex`, MjxxlModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseRate}_curIndex`, MjxxlModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseBet}_curIndex`, MjxxlModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                MjxxlModel.instance._curIndex_baseBet++;
                if (MjxxlModel.instance._curIndex_baseBet >= MjxxlModel.instance.baseBetList.length) {
                  MjxxlModel.instance._curIndex_baseBet = MjxxlModel.instance.baseBetList.length - 1;
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
                }
                MjxxlModel.instance.curBet = MjxxlModel.instance.baseBetList[MjxxlModel.instance._curIndex_baseBet];
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this3.Label_bet.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBet);
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseScore}_curIndex`, MjxxlModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseRate}_curIndex`, MjxxlModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${MjxxlDef.cBundle}_${MjxxlDef.eAutoRateType.baseBet}_curIndex`, MjxxlModel.instance._curIndex_baseBet + 1);

                break;
              }
            case "Button_run":
              {
                if (MjxxlModel.instance.isAuto) {
                  break;
                }
                if (MjxxlModel.instance.gameStatus == eRunStatus.NONE) {
                  event.target.getComponent(Button).interactable = false;
                  MjxxlUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), true);
                  tween(event.target).delay(5).call(function () {
                    event.target.getComponent(Button).interactable = true;
                    MjxxlUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), false);
                  }).start();
                  MjxxlCtrl.instance.reqBet();
                } else if (MjxxlModel.instance.gameStatus == eRunStatus.RUNNING) {
                  this.ui_symbol.doStartRun();
                }
                break;
              }
            case "Button_setBase":
              {
                Common.loadPopBuddle("prefab/Node_setBase", MjxxlUtils.instance.bundle, function () {}, function (help) {
                  var setBase = instantiate(help);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
              }

            //            //FREE
            case "Button_enter":
              {
                this.doEnterFree();
                break;
              }
            case "Button_exit":
              {
                this.showFree(false);
              }
          }
        };
        _proto.doStartRun = function doStartRun() {
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          MjxxlModel.instance.curTotalWin = 0;
          this.Label_win.string = MjxxlUtils.instance.moneyFormat(0);
          EventManager.instance.emit(eEvent.updateWin, 0);
          this.Node_effectRoot.removeAllChildren();
          this.ui_symbol.doStartRun();
          if (MjxxlModel.instance.gameStatus != eRunStatus.RUNNING) {
            MjxxlModel.instance.gameStatus = eRunStatus.RUNNING;
            if (this.Skeleton_run.animation != "start") {
              this.Skeleton_run.setAnimation(0, "start", true);
            }
            this.arrBtnStatus = [];
            var btn = this.Node_action.getChildByName("Button_redus").getComponent(Button);
            this.arrBtnStatus.push({
              btn: btn,
              enable: btn.interactable
            });
            btn.interactable = false;
            btn = this.Node_action.getChildByName("Button_add").getComponent(Button);
            this.arrBtnStatus.push({
              btn: btn,
              enable: btn.interactable
            });
            btn.interactable = false;
          }
          if (MjxxlModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "" + MjxxlModel.instance.totalFreeTimes;
          } else {
            MjxxlUtils.instance.playOneShot(eSound.startRun);
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this4 = this;
            var resultList, _loop, i, delayStart, com_ui_winTip, doContinue, Node_bigWin;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  MjxxlModel.instance.gameStatus = eRunStatus.CLEAR;
                  this.Button_run.interactable = false;
                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this4.Node_colEffect.active = false;
                    }).start();
                  }
                  MjxxlModel.instance.curTotalWin = 0;
                  resultList = MjxxlModel.instance.betResult.Res;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, _com_ui_winTip, destWin, disWin;
                    return _regeneratorRuntime().wrap(function _loop$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          result = resultList[i];
                          if (!(result.RewardMoney > 0)) {
                            _context.next = 15;
                            break;
                          }
                          resultNext = resultList[i + 1];
                          _this4.Node_helpTip.active = false;
                          _this4.Node_winTip.active = true;
                          _com_ui_winTip = _this4.Node_winTip.getComponent(ui_winTip);
                          _com_ui_winTip.doShow(result.RewardMoney);

                          //                //gengxin
                          destWin = MjxxlModel.instance.curTotalWin + result.RewardMoney;
                          disWin = result.RewardMoney / 10;
                          tween(_this4.Label_win.node).repeat(11, tween(_this4.Label_win.node).delay(0.05).call(function () {
                            MjxxlModel.instance.curTotalWin += disWin;
                            if (MjxxlModel.instance.curTotalWin > destWin) {
                              MjxxlModel.instance.curTotalWin = destWin;
                            }
                            _this4.Label_win.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curTotalWin);
                          })).start();
                          EventManager.instance.emit(eEvent.updateWin, result.RewardMoney);
                          MjxxlUtils.instance.playOneShot(eSound.clear_0);
                          //                // MjxxlModel.instance.curBalance += result.RewardMoney;
                          //                // this.updateGold();
                          _context.next = 14;
                          return _this4.ui_symbol.doEnd(result.RewardPos, resultNext.AllPosMsg, i + 1);
                        case 14:
                          if (i == 2) {
                            MjxxlUtils.instance.playOneShot(eSound.nice_0);
                          } else if (i > 2) {
                            MjxxlUtils.instance.playOneShot(eSound.nice_1);
                          }

                        //                // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 7:
                  if (!(i < resultList.length)) {
                    _context2.next = 12;
                    break;
                  }
                  return _context2.delegateYield(_loop(), "t0", 9);
                case 9:
                  i++;
                  _context2.next = 7;
                  break;
                case 12:
                  if (this.mask.active) {
                    tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this4.mask.active = false;
                      _this4.mask.getComponent(UITransform).width = 0;
                    }).start();
                  }
                  delayStart = 0.25;
                  if (MjxxlModel.instance.curTotalWin > 0) {
                    com_ui_winTip = this.Node_winTip.getComponent(ui_winTip);
                    com_ui_winTip.doShow(MjxxlModel.instance.curTotalWin, true);
                    delayStart = 0.5;
                    if (MjxxlModel.instance.endBalance > 0) {
                      MjxxlModel.instance.curBalance = MjxxlModel.instance.endBalance;
                      MjxxlModel.instance.endBalance = 0;
                      this.updateGold();
                    }
                  }
                  if (!MjxxlModel.instance.isAuto) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                  }
                  this.Button_run.interactable = true;
                  MjxxlUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                  MjxxlModel.instance.gameStatus = eRunStatus.NONE;
                  this.scheduleOnce(function () {
                    if (_this4.arrBtnStatus.length > 0) {
                      for (var _iterator = _createForOfIteratorHelperLoose(_this4.arrBtnStatus), _step; !(_step = _iterator()).done;) {
                        var obj = _step.value;
                        obj.btn.interactable = obj.enable;
                      }
                    }
                  });

                  //        //free and auto
                  if (MjxxlModel.instance.freeStatus != eRunStatus.NONE) {
                    MjxxlModel.instance.totalFreeWin += MjxxlModel.instance.curTotalWin;
                    doContinue = function doContinue() {
                      _this4.scheduleOnce(function () {
                        var Node_bigWin = _this4.Node_free.getChildByName("Node_bigWin");
                        Node_bigWin.active = false;
                        if (MjxxlModel.instance.totalFreeTimes > 0) {
                          MjxxlCtrl.instance.reqBet();
                        } else {
                          MjxxlModel.instance.freeStatus = eRunStatus.END;
                          _this4.doEndFree();
                        }
                      }, delayStart);
                    };
                    if (resultList.length > 3) {
                      //                //大奖显示
                      Node_bigWin = this.Node_free.getChildByName("Node_bigWin");
                      Node_bigWin.active = true;
                      Node_bigWin.scale = v3(0.5, 0.5, 1);
                      tween(Node_bigWin).to(0.1, {
                        scale: v3(1.2, 1.2, 1)
                      }, {
                        easing: "quadOut"
                      }).to(0.05, {
                        scale: v3(1, 1, 1)
                      }, {
                        easing: "quadIn"
                      }).call(function () {
                        var Label_totalWin = Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                        var destWin = MjxxlModel.instance.curTotalWin;
                        var disWin = MjxxlModel.instance.curTotalWin / 10;
                        var curTotalWin = 0;
                        tween(Label_totalWin.node).repeat(11, tween(Label_totalWin.node).delay(0.05).call(function () {
                          curTotalWin += disWin;
                          if (curTotalWin > destWin) {
                            curTotalWin = destWin;
                            delayStart = 1.0;
                            doContinue();
                          }
                          Label_totalWin.string = MjxxlUtils.instance.numberFormat(curTotalWin / Constant.moneyRatio, 2);
                        })).start();
                      }).start();
                    } else {
                      doContinue();
                    }
                  } else if (MjxxlModel.instance.totalFreeTimes > 0) {
                    this.showFree(true);
                  } else if (MjxxlModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      MjxxlCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.showFree = function showFree(isShow, isEnter) {
          var _this5 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!isShow) {
            this.Sprite_tipBg_free.active = false;
            AudioManager.instance.resumeMusic();
            MjxxlUtils.instance.stopSound(eSound.freeEnd_1);
            tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              _this5.Node_free.active = false;
              var Node_enter = _this5.Node_free.getChildByName("Node_enter");
              Node_enter.active = false;
              var Node_end = _this5.Node_free.getChildByName("Node_end");
              Node_end.active = false;
              var Node_freeInfo = _this5.Node_free.getChildByName("Node_freeInfo");
              Node_freeInfo.active = false;
              var Node_freePartical = _this5.Node_free.getChildByName("Node_freePartical");
              Node_freePartical.active = false;
              var Node_bigWin = _this5.Node_free.getChildByName("Node_bigWin");
              Node_bigWin.active = false;
              _this5.Node_freeFire.active = false;

              //                    // this.Node_bg.active = true;
              //                    // this.Node_action.active = true;
              //                    // this.Node_menu.active = false;
              //                    // this.Button_menu.node.active = true;
              //                    // this.Button_run.node.active = true;

              if (MjxxlModel.instance.isAuto) {
                _this5.scheduleOnce(function () {
                  MjxxlCtrl.instance.reqBet();
                }, 0.25);
              }
            }).start();
            MjxxlModel.instance.freeStatus = eRunStatus.NONE;
            return;
          }
          if (!this.Node_free.active) {
            this.scheduleOnce(function () {
              AudioManager.instance.pauseMusic();
              _this5.Node_action.active = false;
              _this5.Node_menu.active = false;
              _this5.Button_menu.node.active = false;
              _this5.Button_run.node.active = false;
              _this5.Sprite_tipBg_free.active = true;
              _this5.Node_free.active = true;
              var Node_enter = _this5.Node_free.getChildByName("Node_enter");
              Node_enter.active = !isEnter;
              if (!isEnter) {
                MjxxlUtils.instance.playSound(eSound.startFree);
                _this5.Node_free.getComponent(UIOpacity).opacity = 0;

                //                    //enter
                var _Node_enter = _this5.Node_free.getChildByName("Node_enter");
                _Node_enter.getComponent(UIOpacity).opacity = 255;

                //                    //免费次数
                var Label_freeTimes = _Node_enter.getChildByName("Label_freeTimes");
                Label_freeTimes.getComponent(Label).string = "" + MjxxlModel.instance.totalFreeTimes;
                MjxxlModel.instance.totalFreeWin = 0;
                tween(_this5.Node_free.getComponent(UIOpacity)).to(0.5, {
                  opacity: 255
                }).call(function () {
                  _this5.scheduleOnce(function () {
                    _this5.doEnterFree();
                  }, 3.0);
                }).start();
              } else {
                _this5.Node_free.getComponent(UIOpacity).opacity = 255;
                _this5.doEnterFree(isEnter);
              }
            }, 0.5);
          }
        };
        _proto.doEnterFree = function doEnterFree(isEnter) {
          var _this6 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!isEnter) {
            //            //enter close
            var Node_enter = this.Node_free.getChildByName("Node_enter");
            tween(Node_enter.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              Node_enter.active = false;
              MjxxlUtils.instance.stopSound(eSound.startFree);
            }).start();
          }
          this.Node_freeFire.active = true;
          var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
          Node_freeInfo.active = true;

          //        //免费次数
          var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + MjxxlModel.instance.totalFreeTimes;
          var Node_freePartical = this.Node_free.getChildByName("Node_freePartical");
          Node_freePartical.active = true;
          AudioManager.instance.resumeMusic();
          if (MjxxlModel.instance.freeStatus == eRunStatus.NONE) {
            MjxxlModel.instance.freeStatus = eRunStatus.RUNNING;
            this.scheduleOnce(function () {
              _this6.ui_rate.changeRate();
            }, 0.3);
            this.scheduleOnce(function () {
              MjxxlCtrl.instance.reqBet();
            }, 2.0);
          }
        };
        _proto.doEndFree = function doEndFree() {
          var _this7 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          tween(Node_end.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).start();
          AudioManager.instance.pauseMusic();
          MjxxlUtils.instance.playSound(eSound.freeEnd_1, false);

          //        //免费总得分
          var Label_totalWin = Node_end.getChildByName("Label_totalWin");
          //        // Label_totalWin.getComponent(cc.Label).string = `${MjxxlModel.instance.totalFreeWin}K`;

          var destWin = MjxxlModel.instance.totalFreeWin;
          var disWin = MjxxlModel.instance.totalFreeWin / 10;
          var curTotalWin = 0;
          tween(Label_totalWin).repeat(11, tween(Label_totalWin).delay(0.05).call(function () {
            curTotalWin += disWin;
            if (curTotalWin > destWin) {
              curTotalWin = destWin;
            }
            Label_totalWin.getComponent(Label).string = MjxxlUtils.instance.numberFormat(curTotalWin / Constant.moneyRatio, 2);
          })).start();
          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;

          //        //2.0秒后返回正常
          this.scheduleOnce(function () {
            _this7.ui_rate.changeRate(false);
            _this7.showFree(false);
          }, 4.75);
        };
        _proto.updateGold = function updateGold() {
          var _this8 = this;
          var strGold = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            tween(this.Label_gold.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              _this8.Label_gold.string = strGold;
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          }
        };
        _proto.initView = function initView() {
          this.Label_bet.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBet);
          MjxxlModel.instance.curTotalWin = 0;
          var resultList = MjxxlModel.instance.gameInfo.Res;
          var result = null;
          var rateIndex = 0;
          for (var i = 0; i < resultList.length; i++) {
            result = resultList[i];
            if (result.RewardMoney > 0) {
              rateIndex++;
              MjxxlModel.instance.curTotalWin += result.RewardMoney;
            }
          }
          if (MjxxlModel.instance.curTotalWin > 0) {
            this.ui_rate.doLight(rateIndex);
            this.Node_helpTip.active = false;
            this.Node_winTip.active = true;
            var com_ui_winTip = this.Node_winTip.getComponent(ui_winTip);
            com_ui_winTip.doShow(MjxxlModel.instance.curTotalWin, true);
            this.Label_win.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curTotalWin);
            EventManager.instance.emit(eEvent.updateWin, MjxxlModel.instance.curTotalWin);
          }
          this.ui_symbol.initSymbolIcon(result.AllPosMsg);
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.Button_run.interactable = true;
                Tween.stopAllByTarget(this.Button_run.node);
                MjxxlUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                this.doStartRun();
                this.updateGold();
                break;
              }

            //            //////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                Common.closeWait();
                this.onReconnectSuccess();
                break;
              }
          }
        };
        return MjxxlGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_helpTip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ui_symbol", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_tip", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "ui_rate", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeFire", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_tipBg_free", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MjxxlScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './MjxxlDef.ts', './MjxxlUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, instantiate, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, MjxxlUtils, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      cBundle = module.cBundle;
      eEvent = module.eEvent;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "616den/e+BMEpXA3YMeAQqP", "MjxxlScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MjxxlScene = exports('default', (_dec = ccclass("MjxxlScene"), _dec2 = menu("game/MjxxlGame/MjxxlScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MjxxlScene, _Component);
        function MjxxlScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          return _this;
        }
        var _proto = MjxxlScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          MjxxlUtils.instance.bundle = assetManager.getBundle(cBundle);
          MjxxlUtils.instance.preLoad();
          this.onLoadGame();
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this2 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            MjxxlUtils.instance.bundle.load("prefab/MjxxlGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this2.prefab_game = prefab;
              _this2.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          if (this.prefab_game) {
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              Common.updateProgress(1);
            }
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return MjxxlScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, i18n, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3d0f0JT4s1DMqEj7t/EHU3F", "ui_help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ui_help = exports('ui_help', (_dec = ccclass('ui_help'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_help, _Component);
        function ui_help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "waysLab", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ui_help.prototype;
        _proto.start = function start() {
          var wayNumStr = MjxxlUtils.instance.numberFormat(1024, 0);
          this.waysLab.string = i18n.t("MahjongPayout.BetWaysTitle", {
            1024: wayNumStr
          });
        };
        return ui_help;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "waysLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LocalizedImage.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Tween, UITransform, tween, v3, Component, LocalizedImage;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      LocalizedImage = module.LocalizedImage;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "80d58Sox1hACr5K4/49jwjn", "ui_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ui_helpTip = exports('default', (_dec = ccclass("UiHelpTip"), _dec2 = menu("game/MjxxlGame/ui_helpTip"), _dec3 = property(LocalizedImage), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_helpTip, _Component);
        function ui_helpTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Sprite_tip", _descriptor, _assertThisInitialized(_this));
          //    // update (dt) {}
          _this.curIndex = 0;
          return _this;
        }
        var _proto = ui_helpTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.doShow();
        };
        _proto.onDisable = function onDisable() {
          this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
          Tween.stopAllByTarget(this.Sprite_tip.node);
        };
        _proto.doShow = function doShow() {
          var _this2 = this;
          this.curIndex = 1 + Math.floor(Math.random() * 4);
          this.Sprite_tip.getComponent(LocalizedImage).key = "help" + this.curIndex;
          if (this.Sprite_tip.node.getComponent(UITransform).width > this.node.parent.getComponent(UITransform).width) {
            //            //
            var disX = (this.Sprite_tip.node.getComponent(UITransform).width - this.node.parent.getComponent(UITransform).width) / 2.0 + 20;
            this.Sprite_tip.node.setPosition(disX, this.Sprite_tip.node.position.y);
            var toX = disX - this.Sprite_tip.node.getComponent(UITransform).width - 40;
            tween(this.Sprite_tip.node).delay(1).to(this.Sprite_tip.node.getComponent(UITransform).width / 100, {
              position: v3(toX, this.Sprite_tip.node.position.y)
            }).call(function () {
              _this2.doShow();
            }).start();
          } else {
            this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
            tween(this.Sprite_tip.node).delay(2).call(function () {
              _this2.doShow();
            }).start();
          }
        };
        return ui_helpTip;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_tip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './MjxxlDef.ts', './GameDef.ts', './Common.ts', './MjxxlCtrl.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, i18n, eProto, GameDef, Common, MjxxlCtrl;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MjxxlCtrl = module.MjxxlCtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "a3d79USaNVEEZwu0JcHsoL3", "ui_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var ui_history = exports('default', (_dec = ccclass("UiHistory"), _dec2 = menu("game/MjxxlGame/ui_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(ui_history, _GameDef$BaseView);
        function ui_history() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor4, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          _this._pageSize = 13;
          return _this;
        }
        var _proto = ui_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, MjxxlCtrl.instance);
          this.Label_curPage.string = "";
          MjxxlCtrl.instance.reqHistory();
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage--;
          if (this._curPage < 0) {
            this._curPage = 0;
          }
          var start = this._curPage * this._pageSize;
          MjxxlCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          MjxxlCtrl.instance.reqHistory(start);
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_History:
              {
                Common.closeWait();
                if (!data || !data.BetRecord || data.BetRecord.length == 0) {
                  this._curPage = this._lastPage;
                  this.Button_next.active = false;
                  return;
                }
                this.Button_last.active = this._curPage > 0;
                this.Button_next.active = data.NextPage;
                this.Label_curPage.string = i18n.t("page") + ":" + (this._curPage + 1);
                this.scrollView_content.setData(data.BetRecord);
                break;
              }
          }
        };
        return ui_history;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, Common, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "f0aa9sMuNNDjp4nznthSQXv", "ui_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ui_historyItem = exports('default', (_dec = ccclass("UiHistoryItem"), _dec2 = menu("game/MjxxlGame/ui_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_historyItem, _Component);
        function ui_historyItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_date", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_time", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor9, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = ui_historyItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
        };
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          var _this2 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify(function (dt) {
            _this2.Node_label.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.Node_label.active = _this2.node.active;
            _this2.Node_label.scale = _this2.node.scale;
          }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
              _this2.Node_label.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var tempData = this.item.data;
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);

          //        //改为开奖结果
          var strResult = Common.getRecordResult(tempData);
          this.Label_gold.string = strResult;
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = MjxxlUtils.instance.moneyFormat(tempData.BetAmount);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + MjxxlUtils.instance.moneyFormat(tempData.Income);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + MjxxlUtils.instance.moneyFormat(tempData.Income);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
        };
        _createClass(ui_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return ui_historyItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_date", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_time", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './GameDef.ts', './Common.ts', './MjxxlCtrl.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, eProto, GameDef, Common, MjxxlCtrl;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MjxxlCtrl = module.MjxxlCtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1beb75lhxxMIK2kQs4mvyZu", "ui_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var ui_rank = exports('default', (_dec = ccclass("UiRank"), _dec2 = menu("game/MjxxlGame/ui_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(ui_rank, _GameDef$BaseView);
        function ui_rank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          return _this;
        }
        var _proto = ui_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, MjxxlCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          MjxxlCtrl.instance.reqRank();
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_Rank:
              {
                Common.closeWait();

                //                // this.Label_curPage.string = `${this._curPage}/${this._totalPage}`;

                if (data.RankList) {
                  this.scrollView_content.setData(data.RankList);
                }
                break;
              }
          }
        };
        return ui_rank;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "0fb51B+hwVERLaIqQ7N5iOu", "ui_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ui_rankItem = exports('default', (_dec = ccclass("UiRankItem"), _dec2 = menu("game/MjxxlGame/ui_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_rankItem, _Component);
        function ui_rankItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_rankTag", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rank", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_nickName", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_rank", _descriptor8, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = ui_rankItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
        };
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          var _this2 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify(function (dt) {
            _this2.Node_label.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.Node_label.active = _this2.node.active;
            _this2.Node_label.scale = _this2.node.scale;
          }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
              _this2.Node_label.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var tmpdata = this.item.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            this.Node_label.active = false;
            return;
          }
          var rankIndex = this.item.itemIndex;
          if (rankIndex < 3) {
            this.Sprite_rankTag.node.active = true;
            this.Label_rank.node.active = false;
            this.Sprite_rankTag.spriteFrame = this.spriteFrame_rank[rankIndex];
          } else {
            this.Sprite_rankTag.node.active = false;
            this.Label_rank.node.active = true;
            this.Label_rank.string = "" + (rankIndex + 1);
          }
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_nickName.string = "" + tmpdata.NickName;
          this.Label_win.string = MjxxlUtils.instance.moneyFormat(tmpdata.Score);
        };
        _createClass(ui_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return ui_rankItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_rankTag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_rank", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_nickName", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_rank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_rate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, Prefab, Sprite, Component, tween, UIOpacity, instantiate, sp, v3, find, eSound, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Sprite = module.Sprite;
      Component = module.Component;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      sp = module.sp;
      v3 = module.v3;
      find = module.find;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a0b36eC+5xKHq3u1T8MRjvK", "ui_rate", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ui_rate = exports('default', (_dec = ccclass("UiRate"), _dec2 = menu("game/MjxxlGame/ui_rate"), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_rate, _Component);
        function ui_rate() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.arrIconSpriteFrame = {};
          _initializerDefineProperty(_this, "rateNomal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rateFree", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateEffect", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ui_rate.prototype;
        //    ///
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          MjxxlUtils.instance.asyncLoadDir("textures/rateIcon", SpriteFrame, function (err, arrSpFrame) {
            if (!err) {
              for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                var _SpriteFrame = _step.value;
                _this2.arrIconSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
              }
            }
          });
        };
        _proto.changeRate = function changeRate(isChange) {
          var _this3 = this;
          if (isChange === void 0) {
            isChange = true;
          }
          if (!isChange) {
            var strIcon = ["X1_", "X2_", "X3_", "X5_"];
            //            //nomal
            for (var i = 0; i < 4; i++) {
              var Sprite_rate = this.node.getChildByName("Sprite_rate_" + i);
              Sprite_rate.getComponent(Sprite).spriteFrame = this.arrIconSpriteFrame[strIcon[i] + "2"];
              var Sprite_light = Sprite_rate.getChildByName("Sprite_light");
              Sprite_light.getComponent(Sprite).spriteFrame = this.arrIconSpriteFrame[strIcon[i] + "1"];
              Sprite_light.active = i == 0;
            }
            this.node.getChildByName("up_bg").getComponent(Sprite).spriteFrame = this.rateNomal;
          } else {
            var _strIcon = ["redX2_", "redX4_", "redX6_", "redX10_"];
            //            //nomal
            var _loop = function _loop(_i) {
              var Sprite_rate = _this3.node.getChildByName("Sprite_rate_" + _i);
              tween(Sprite_rate).delay(_i * 0.4).parallel(tween(Sprite_rate).call(function () {
                Sprite_rate.getComponent(UIOpacity).opacity = 0;
                Sprite_rate.getComponent(Sprite).spriteFrame = _this3.arrIconSpriteFrame[_strIcon[_i] + "2"];
                var Sprite_light = Sprite_rate.getChildByName("Sprite_light");
                Sprite_light.getComponent(Sprite).spriteFrame = _this3.arrIconSpriteFrame[_strIcon[_i] + "1"];
                Sprite_light.active = true;
                var Node_rateEffect = instantiate(_this3.Node_rateEffect);
                Sprite_rate.addChild(Node_rateEffect);
                Node_rateEffect.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                Node_rateEffect.getComponent(sp.Skeleton).setCompleteListener(function () {
                  Node_rateEffect.destroyFromParent();
                });
                MjxxlUtils.instance.playOneShot(eSound.rateChange);
              }), tween(Sprite_rate).call(function () {
                tween(Sprite_rate.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();
              }).to(0.2, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              }).call(function () {
                var Sprite_light = Sprite_rate.getChildByName("Sprite_light");
                Sprite_light.active = _i == 0;
              })).start();
            };
            for (var _i = 0; _i < 4; _i++) {
              _loop(_i);
            }
            this.node.getChildByName("up_bg").getComponent(Sprite).spriteFrame = this.rateFree;
          }
        };
        _proto.doLight = function doLight(index) {
          var _this4 = this;
          var _loop2 = function _loop2() {
            var Sprite_rate = _this4.node.getChildByName("Sprite_rate_" + i);
            var Sprite_light = find("Sprite_light", Sprite_rate);
            Sprite_light.active = i == index;
            if (Sprite_light.active && i != 0) {
              var Node_rateEffect = instantiate(_this4.Node_rateEffect);
              Sprite_light.addChild(Node_rateEffect);
              Node_rateEffect.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              Node_rateEffect.getComponent(sp.Skeleton).setCompleteListener(function () {
                Node_rateEffect.destroyFromParent();
              });
              tween(Sprite_rate).parallel(tween(Sprite_rate).call(function () {
                var Node_rateEffect = instantiate(_this4.Node_rateEffect);
                Sprite_rate.addChild(Node_rateEffect);
                Node_rateEffect.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                Node_rateEffect.getComponent(sp.Skeleton).setCompleteListener(function () {
                  Node_rateEffect.destroyFromParent();
                });
              }), tween(Sprite_rate).call(function () {
                tween(Sprite_rate.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();
              }).to(0.2, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              })).start();
            }
          };
          for (var i = 0; i < 4; i++) {
            _loop2();
          }
        };
        return ui_rate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rateNomal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rateFree", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateEffect", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './EventManager.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, eAutoRateType, eEvent, EventManager, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      UITransform = module.UITransform;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "330e3llM4JJyI1QsVXOd1M9", "ui_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ui_ScrollView = exports('default', (_dec = ccclass("UiScrollView"), _dec2 = menu("game/MjxxlGame/ui_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_ScrollView, _Component);
        function ui_ScrollView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor2, _assertThisInitialized(_this));
          _this._ScrollViewView = null;
          _this._curIndex = 0;
          _this._maxIndex = 0;
          _this.itemList = void 0;
          _this._hTouch = null;
          _this._isLongTouch = false;
          _this.isSetNew = false;
          return _this;
        }
        var _proto = ui_ScrollView.prototype;
        //    // protected onEnable(): void {}
        _proto.onDisable = function onDisable() {
          if (this._hTouch) {
            clearTimeout(this._hTouch);
          }
        };
        _proto.init = function init(itemList, curIndex) {
          var _this2 = this;
          this._ScrollViewView = this.node.getComponent(ScrollView);
          this.itemList = itemList;
          this._maxIndex = itemList.length - 1;
          this._curIndex = curIndex;
          for (var index = 0; index < itemList.length; index++) {
            var item = this._ScrollViewView.content.children[index];
            if (!item) {
              item = instantiate(this.item);
              this._ScrollViewView.content.addChild(item);
            }
            item.active = true;
            item.name = "item_" + index;
            item.getComponent(Label).string = this.getDefaultValue(index);
          }

          //        //注册_ScrollViewView滚动效果
          this._ScrollViewView.node.on("touch-up", function () {
            _this2.onScrollTouchUp();
          }, this);
          this._ScrollViewView.node.on("touchcancel", function () {
            _this2.onScrollTouchUp();
          }, this);
          var setItem = function setItem() {
            for (var _index = 0; _index < _this2._ScrollViewView.content.children.length; _index++) {
              var itemNode = _this2._ScrollViewView.content.children[_index];
              var curPos = itemNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
              curPos = _this2._ScrollViewView.node.getComponent(UITransform).convertToNodeSpaceAR(curPos);
              var hW = _this2._ScrollViewView.node.getComponent(UITransform).height / 2.0;
              if (Math.abs(curPos.y) < hW) {
                itemNode.getComponent(UIOpacity).opacity = 255 * (1 - Math.abs(curPos.y) / hW);
                if (Math.abs(curPos.y) < itemNode.getComponent(UITransform).height) {
                  itemNode.scale = v3(1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height), 1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height), 1);
                } else {
                  itemNode.scale = v3(1, 1, 1);
                }
              } else {
                itemNode.getComponent(UIOpacity).opacity = 0;
                itemNode.scale = v3(1, 1, 1);
              }

              //                // itemNode.color = itemNode.scale > 1.25 ? cc.color(255, 255, 255) : cc.color(100, 120, 180);
              if (itemNode.scale.x > 1.25 && _this2._curIndex != _index) {
                _this2._curIndex = _index;
                if (!_this2.isSetNew) {
                  EventManager.instance.emit(eEvent.onSetBase, _this2.type, _this2._curIndex);
                }
              }
            }
          };
          this._ScrollViewView.node.on("scroll-ended", function () {
            setItem();
            _this2.isSetNew = false;
          }, this);
          this._ScrollViewView.node.on("scrolling", setItem, this);
          this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0.2);
        }
        //    //滚动触摸离开--停止滚动触摸
        ;

        _proto.onScrollTouchUp = function onScrollTouchUp(delay) {
          var _this3 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          this.scheduleOnce(function () {
            var getScrollOffset = _this3._ScrollViewView.getScrollOffset();
            _this3._curIndex = Math.round(Math.abs(getScrollOffset.y) / 76);

            //            // gts.Debug.Log("=this._curIndex==0000=" + this._curIndex);
            _this3._ScrollViewView.stopAutoScroll();
            _this3._curIndex = _this3._curIndex < 0 ? 0 : _this3._curIndex > _this3._maxIndex ? _this3._maxIndex : _this3._curIndex;
            //            //
            //            // gts.Debug.Log("=this._curIndex==1111=" + this._curIndex);
            _this3._ScrollViewView.scrollToPercentVertical((_this3._maxIndex - _this3._curIndex) / _this3._maxIndex, 0.1);
          }, delay);
        };
        _proto.setNewPos = function setNewPos(_curIndex) {
          if (this._curIndex != _curIndex) {
            this._curIndex = _curIndex;
            this.isSetNew = true;
            this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0.1);
          }
        };
        _proto.doReset = function doReset() {
          this._curIndex = 0;
          this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0.0001);
        };
        _proto.getDefaultValue = function getDefaultValue(index) {
          if (this.type == eAutoRateType.baseScore || this.type == eAutoRateType.baseBet) {
            return MjxxlUtils.instance.moneyFormat(this.itemList[index]);
          }
          return this.itemList[index].toString();
        };
        return ui_ScrollView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return eAutoRateType.baseScore;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './ViewManager.ts', './EventManager.ts', './ui_ScrollView.ts', './MjxxlModel.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, eEvent, eAutoRateType, ViewManager, EventManager, ui_ScrollView, MjxxlModel, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ui_ScrollView = module.default;
    }, function (module) {
      MjxxlModel = module.MjxxlModel;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "dd2fdNklilAdaC6Yy8rl4uq", "ui_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ui_setBase = exports('default', (_dec = ccclass("UiSetBase"), _dec2 = menu("game/MjxxlGame/ui_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_setBase, _Component);
        function ui_setBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseScore", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseRate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_basePay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseBet", _descriptor7, _assertThisInitialized(_this));
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          return _this;
        }
        var _proto = ui_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (MjxxlModel.instance.curTotalWin > 0) {
            this.Label_win.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curTotalWin);
          } else {
            this.Label_win.string = MjxxlUtils.instance.moneyFormat(0);
          }
          this.Label_bet.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curBet);
          var baseBetInfo = MjxxlModel.instance.baseBetInfoList[MjxxlModel.instance._curIndex_baseBet];
          this._curIndex_baseScore = baseBetInfo.baseScoreIndex;
          this._curIndex_baseRate = baseBetInfo.baseRateIndex;
          this._curIndex_baseBet = MjxxlModel.instance._curIndex_baseBet;
          this.scrollView_baseScore.getComponent(ui_ScrollView).init(MjxxlModel.instance.baseScoreList, this._curIndex_baseScore);
          this.scrollView_baseRate.getComponent(ui_ScrollView).init(MjxxlModel.instance.baseRateList, this._curIndex_baseRate);
          this.scrollView_basePay.getComponent(ui_ScrollView).init(MjxxlModel.instance.basePayList, 0);
          this.scrollView_baseBet.getComponent(ui_ScrollView).init(MjxxlModel.instance.baseBetList, this._curIndex_baseBet);
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSetBase, this.onSetBase, this);
          EventManager.instance.on(eEvent.updateWin, this.updateWin, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSetBase, this.onSetBase, this);
          EventManager.instance.off(eEvent.updateWin, this.updateWin, this);
        };
        _proto.updateWin = function updateWin(RewardMoney) {
          var _this2 = this;
          if (RewardMoney == 0) {
            if (MjxxlModel.instance.curTotalWin > 0) {
              this.Label_win.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curTotalWin);
            } else {
              this.Label_win.string = MjxxlUtils.instance.moneyFormat(0);
            }
            return;
          }
          var destWin = MjxxlModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            MjxxlModel.instance.curTotalWin += disWin;
            if (MjxxlModel.instance.curTotalWin > destWin) {
              MjxxlModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = MjxxlUtils.instance.moneyFormat(MjxxlModel.instance.curTotalWin);
          })).start();
        };
        _proto.updateBaseBetIndex = function updateBaseBetIndex() {
          var betAmount = MjxxlModel.instance.baseScoreList[this._curIndex_baseScore] * MjxxlModel.instance.baseRateList[this._curIndex_baseRate] * MjxxlModel.instance.basePayList[0];
          for (var i = 0; i < MjxxlModel.instance.baseBetList.length; i++) {
            if (MjxxlModel.instance.baseBetList[i] == betAmount) {
              this._curIndex_baseBet = i;
              break;
            }
          }
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this.updateBaseBetIndex();
                this.scrollView_baseBet.getComponent(ui_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this.updateBaseBetIndex();
                this.scrollView_baseBet.getComponent(ui_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                var baseBetInfo = MjxxlModel.instance.baseBetInfoList[curIndex];
                this._curIndex_baseScore = baseBetInfo.baseScoreIndex;
                this._curIndex_baseRate = baseBetInfo.baseRateIndex;
                this.scrollView_baseScore.getComponent(ui_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(ui_ScrollView).setNewPos(this._curIndex_baseRate);
                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //            //
            case "Button_reset":
              {
                this._curIndex_baseBet = 0;
                this._curIndex_baseRate = 0;
                this._curIndex_baseScore = 0;
                this.scrollView_baseScore.getComponent(ui_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(ui_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(ui_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                MjxxlModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return ui_setBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseRate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_basePay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseBet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './EventManager.ts', './ui_symbolItem.ts', './ui_rate.ts', './MjxxlModel.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _createForOfIteratorHelperLoose, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, UIOpacity, tween, UITransform, Component, eEvent, eRunStatus, eSound, eRunType, EventManager, ui_symbolItem, ui_rate, MjxxlModel, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eRunType = module.eRunType;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ui_symbolItem = module.default;
    }, function (module) {
      ui_rate = module.default;
    }, function (module) {
      MjxxlModel = module.MjxxlModel;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "38cf93+KnlEZq1mmNRxiNNI", "ui_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var maxRow = 6;
      var maxCol = 5;
      var ui_symbol = exports('default', (_dec = ccclass("UiSymbol"), _dec2 = menu("game/MjxxlGame/ui_symbol"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(ui_rate), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_symbol, _Component);
        function ui_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Prefab_symbolItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateEffect", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_rate", _descriptor5, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // Sprite_light: cc.Node[] = [];
          //    // @property(cc.Node)
          //    // Sprite_light_free: cc.Node[] = [];
          _this.itemList = [];
          return _this;
        }
        var _proto = ui_symbol.prototype;
        //    // start() {}
        //    // update (dt) {}
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
        };
        _proto.initSymbol = function initSymbol() {
          for (var col = maxCol - 1; col >= 0; col--) {
            this.itemList[col] = [];
            for (var row = 0; row < maxRow; row++) {
              var Node_symbolItem = instantiate(this.Prefab_symbolItem);
              var com_ui_symbolItem = Node_symbolItem.getComponent(ui_symbolItem);
              com_ui_symbolItem.init(row, col);
              this.node.addChild(Node_symbolItem);
              this.itemList[col].push(Node_symbolItem);
            }
          }
        }
        //    // isInit: boolean = false;
        ;

        _proto.initSymbolIcon = function initSymbolIcon(symbolList) {
          //        // if (this.isInit) {
          //        //     return;
          //        // }
          //        // this.isInit = true;

          for (var col = 0; col < maxCol; col++) {
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_ui_symbolItem = itemNode.getComponent(ui_symbolItem);
              var symbol = row == 0 ? null : symbolList[col][row - 1];
              com_ui_symbolItem.initSymbolIcon(symbol ? symbol.Sym : null, symbol ? symbol.IsGold : null);
            }
          }
        };
        _proto.onSetMask = function onSetMask(index, posX) {
          if (this.Node_colEffect.getPosition().x != posX || !this.Node_colEffect.active) {
            if (!this.mask.active) {
              this.mask.active = true;
              this.mask.getComponent(UIOpacity).opacity = 0;
              tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                opacity: 180
              }).start();
            }
            this.mask.getComponent(UITransform).priority = 5000;
            this.mask.getComponent(UITransform).width = 10 + 144 * index;
            if (!this.Node_colEffect.active) {
              this.Node_colEffect.active = true;
              this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }
            this.Node_colEffect.getComponent(UITransform).priority = 6000;
            this.Node_colEffect.setPosition(posX, this.Node_colEffect.position.y);
          }
        };
        _proto.doRunning = function doRunning(col, specialIndex) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var delayTimes = MjxxlModel.instance.isQuickStop ? 0 : 0.1 * col;
            var run = function run() {
              for (var row = 0; row < maxRow; row++) {
                var itemNode = _this2.itemList[col][row];
                var com_ui_symbolItem = itemNode.getComponent(ui_symbolItem);
                var runType = specialIndex >= 0 ? eRunType.SPECIAL : eRunType.NONE; //SPECIAL
                com_ui_symbolItem.initRun(runType, specialIndex);
                com_ui_symbolItem.doStartRun().then(resolve);
              }
            };
            if (delayTimes == 0) {
              return run();
            } else {
              _this2.scheduleOnce(function () {
                return run();
              }, delayTimes);
            }
          });
        };
        _proto.doStartRun = function doStartRun() {
          var _this3 = this;
          EventManager.instance.emit(eEvent.onSymbolClick);
          if (MjxxlModel.instance.gameStatus == eRunStatus.RUNNING) {
            //            //do quickStop
            for (var col = 0; col < maxCol; col++) {
              for (var row = 0; row < maxRow; row++) {
                var itemNode = this.itemList[col][row];
                var com_ui_symbolItem = itemNode.getComponent(ui_symbolItem);
                com_ui_symbolItem.quickStop();
              }
            }
          } else if (MjxxlModel.instance.gameStatus == eRunStatus.NONE) {
            this.ui_rate.doLight(0);
            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var arrPro, specialStartCol, specialIndex, _col;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    arrPro = [];
                    specialStartCol = MjxxlModel.instance.specialStartCol;
                    specialIndex = -1;
                    for (_col = 0; _col < maxCol; _col++) {
                      specialIndex = specialStartCol > 0 && _col >= specialStartCol ? specialIndex + 1 : -1;
                      arrPro.push(_this3.doRunning(_col, specialIndex));
                    }
                    _this3.scheduleOnce(function () {
                      MjxxlUtils.instance.playSound(eSound.running, true);
                    }, 0.35);
                    _context.next = 7;
                    return Promise.all(arrPro);
                  case 7:
                    MjxxlUtils.instance.stopSound(eSound.running);
                    MjxxlModel.instance.gameStatus = eRunStatus.STOPPING;
                    EventManager.instance.emit(eEvent.onRunStop);
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
        };
        _proto.doClear = function doClear(RewardPos) {
          var itemNodeList = {};
          for (var _iterator = _createForOfIteratorHelperLoose(RewardPos), _step; !(_step = _iterator()).done;) {
            var arrPos = _step.value;
            for (var iCol = 0; iCol < arrPos.length; iCol++) {
              var iRow = arrPos[iCol] + 1;
              var itemNode = this.itemList[iCol][iRow];
              itemNodeList[itemNode.name] = itemNode.getComponent(ui_symbolItem);
            }
          }
          var arrPro = [];
          for (var _i = 0, _Object$entries = Object.entries(itemNodeList); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              _ui_symbolItem = _Object$entries$_i[1];
            arrPro.push(_ui_symbolItem.doClear());
          }
          return Promise.all(arrPro);
        };
        _proto.doDrop = function doDrop(AllPosMsg) {
          //        //reset pos
          for (var iCol = 0; iCol < maxCol; iCol++) {
            var itemListTemp = this.itemList[iCol].slice();
            var delCounts = 0;
            for (var iRow = maxRow - 1; iRow >= 0; iRow--) {
              var itemNode = itemListTemp[iRow];
              var com_ui_symbolItem = itemNode.getComponent(ui_symbolItem);
              if (com_ui_symbolItem.isClear) {
                itemListTemp.splice(iRow, 1);
                itemListTemp.push(itemNode);
                delCounts++;
                com_ui_symbolItem.doReset(maxRow - 1 + delCounts);
              }
            }
            this.itemList[iCol] = itemListTemp;
          }

          //        //drop
          var arrDrop = [];
          for (var _iCol = 0; _iCol < maxCol; _iCol++) {
            for (var _iRow = 1; _iRow < maxRow; _iRow++) {
              var _itemNode = this.itemList[_iCol][_iRow];
              var _com_ui_symbolItem = _itemNode.getComponent(ui_symbolItem);
              arrDrop.push(_com_ui_symbolItem.doDrop(_iRow, AllPosMsg[_iCol][_iRow - 1]));
            }
          }
          return Promise.all(arrDrop);
        };
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(RewardPos, AllPosMsg, index) {
            var _this4 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //        //
                  index = index < 4 ? index : 3;

                  //        //mask
                  this.mask.active = true;
                  this.mask.getComponent(UITransform).priority = 5000;
                  this.mask.getComponent(UIOpacity).opacity = 0;
                  tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                    opacity: 180
                  }).start();
                  this.mask.getComponent(UITransform).width = this.node.getComponent(UITransform).width;
                  _context2.next = 8;
                  return this.doClear(RewardPos);
                case 8:
                  tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                    opacity: 0
                  }).call(function () {
                    _this4.mask.active = false;
                    _this4.mask.getComponent(UITransform).width = 0;
                  }).start();
                  this.ui_rate.doLight(index);
                  return _context2.abrupt("return", this.doDrop(AllPosMsg));
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doEnd(_x, _x2, _x3) {
            return _doEnd.apply(this, arguments);
          }
          return doEnd;
        }();
        return ui_symbol;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Prefab_symbolItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateEffect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ui_rate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sp, Component, eEvent, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ba08ctMMZFFeqL9/bWEwxw4", "ui_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ui_symbolEffectRoot = exports('default', (_dec = ccclass("UiSymbolEffectRoot"), _dec2 = menu("game/MjxxlGame/ui_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_symbolEffectRoot, _Component);
        function ui_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ui_symbolEffectRoot.prototype;
        //    // onLoad () {}
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.instance.on(eEvent.onDelEffect, this.onDelEffect, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.instance.off(eEvent.onDelEffect, this.onDelEffect, this);
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onAddEffect = function onAddEffect(iRow, iCol, pos) {
          var newNode = instantiate(this.prefab_symbolEffect);
          newNode.name = "symbolEffect_" + iRow + "_" + iCol;
          newNode.position = pos;
          this.node.addChild(newNode);
          var effect = newNode.getComponent(sp.Skeleton);
          effect.setAnimation(0, "boom", false);
          effect.addAnimation(0, "idle", true);
        };
        _proto.onDelEffect = function onDelEffect(iRow, iCol) {
          var delNode = this.node.getChildByName("symbolEffect_" + iRow + "_" + iCol);
          if (delNode) {
            delNode.destroyFromParent();
          }
        };
        return ui_symbolEffectRoot;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_symbolEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './EventManager.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, tween, v3, instantiate, UITransform, sp, UIOpacity, Component, eEvent, eSymbol, EventManager, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "2cb4egqplFEaJtRqk6cUdMt", "ui_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // (FA = 1),
      // //     (ZHONG = 2),
      // //     (BAIBAN = 3),
      // //     (BAWAN = 4),
      // //     (WUTONG = 5),
      // //     (WUTIAO = 6),
      // //     (ERTONG = 7),
      // //     (ERTIAO = 8),
      // //     (WILD = 9),
      // //     (SCATTER = 10),
      var eRate = [[15, 60, 100], [10, 40, 80], [8, 20, 60], [6, 15, 40], [4, 10, 20], [4, 10, 20], [2, 5, 10], [2, 5, 10]];
      var ui_symbolInfo = exports('default', (_dec = ccclass("UiSymbolInfo"), _dec2 = menu("game/MjxxlGame/ui_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_symbolInfo, _Component);
        function ui_symbolInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_info", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateInfo", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_hu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ui_symbolInfo.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.mask.active = false;
            tween(_this2.Node_info).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.2, {
              scale: v3(0.5, 0.5, 1)
            }).call(function () {
              _this2.mask.active = false;
              var newSymbol = _this2.Node_info.getChildByName("symbolNode");
              if (newSymbol) {
                newSymbol.destroyFromParent();
              }
              _this2.Node_info.active = false;
            }).start();
          }, this);
        }
        //    ///
        ;

        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSymbolClick, this.showSymbolInfo, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSymbolClick, this.showSymbolInfo, this);
          this.mask.off("click", null, this);
        };
        _proto.showSymbolInfo = function showSymbolInfo(symbol, symbolNode, pos) {
          if (!symbolNode) {
            this.mask.active = false;
            var _newSymbol = this.Node_info.getChildByName("symbolNode");
            if (_newSymbol) {
              _newSymbol.destroyFromParent();
            }
            this.Node_info.active = false;
            return;
          }
          this.mask.active = true;
          this.Node_info.active = true;
          this.Node_info.position = pos;
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_info.children), _step; !(_step = _iterator()).done;) {
            var childNode = _step.value;
            childNode.name == "symbolNode" ? childNode.destroyFromParent() : null;
          }
          var newSymbol = instantiate(symbolNode);
          newSymbol.name = "symbolNode";
          this.Node_info.addChild(newSymbol);
          if (symbol < eSymbol.WILD) {
            newSymbol.getComponent(UITransform).priority = 0;
            this.Node_rateInfo.getComponent(UITransform).priority = 1;
            this.Label_hu.node.active = false;
            this.Label_wild.node.active = false;
            this.Node_icon.active = true;
            var arrRate = eRate[symbol - 1];
            for (var i = 0; i < 3; i++) {
              var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
              Label_rate.string = "" + arrRate[i];
            }
          } else {
            newSymbol.getComponent(UITransform).priority = 1;
            this.Node_rateInfo.getComponent(UITransform).priority = 0;
            this.Node_icon.active = false;
            this.Label_hu.node.active = symbol == eSymbol.SCATTER;
            this.Label_wild.node.active = symbol == eSymbol.WILD;
            var itemSpine = newSymbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.premultipliedAlpha = false;
              //                // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.setAnimation(0, MjxxlUtils.instance.getSymbolAniName(symbol, false), true);
            }
          }
          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.scale = v3(0.5, 0.5, 1);
          tween(this.Node_info).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        return ui_symbolInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_hu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_wild", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './EventManager.ts', './MjxxlModel.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, v3, UITransform, tween, sp, UIOpacity, Sprite, Component, eRunType, eSound, eEvent, eSymbol, eRunStatus, EventManager, MjxxlModel, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      v3 = module.v3;
      UITransform = module.UITransform;
      tween = module.tween;
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      eRunType = module.eRunType;
      eSound = module.eSound;
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MjxxlModel = module.MjxxlModel;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "d4032vyRZJCv4kEsMBjEuF3", "ui_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var startY = -415;
      var startX = -280;
      var spaceX = 141;
      var spaceY = 166;
      var aSpeed = 50.0;
      var rSpeed = -75.0;
      var cLastSpeed = 300;
      var maxSpeed = 3000;
      var cSpaceH = 996; // 166 * 6;
      var minPosY = -450;
      var cSpineZindex = 10000;
      var cSpecialZindex = 20000;
      var cRounds = 4;
      var ui_symbolItem = exports('default', (_dec = ccclass("UiSymbolItem"), _dec2 = menu("game/MjxxlGame/ui_symbolItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_symbolItem, _Component);
        function ui_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_tag", _descriptor, _assertThisInitialized(_this));
          _this.isSpine = false;
          _this.curSpeed = 0;
          _this.curAspeed = 0;
          _this.totalY = 0;
          _this.stopPosY = 0;
          _this.Node_symbol = null;
          _this.itemIndex = 0;
          _this.iRow = 0;
          _this.iCol = 0;
          _this.spaceH = cSpaceH;
          _this.lastSpeed = cLastSpeed;
          _this.isSpecialRunning = false;
          _this.symbolIndex = 0;
          _this.isGold = false;
          _this._runType = eRunType.NONE;
          _this._rounds = 0;
          _this._specialIndex = 0;
          _this.specialSpaceH = 0;
          _this.isClear = false;
          _this.curIndex = 0;
          return _this;
        }
        var _proto = ui_symbolItem.prototype;
        //    /////////////////////////////////////////////////
        //    // onLoad() {}
        //    // start() {}
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        };
        _proto.init = function init(iRow, iCol) {
          //        //起始坐标
          var symbolPosX = startX + spaceX * iCol;
          var symbolPosY = startY + spaceY * iRow;
          this.node.position = v3(symbolPosX, symbolPosY);

          //        //node name
          this.node.name = "Node_symbolItem_" + iCol + "_" + iRow;
          //        // this.Label_tag.string = `item_${iCol}_${iRow}`;

          //        //node zIndex
          this.iRow = iRow;
          this.iCol = iCol;
          var itemIndex = (5 - iCol) * 10 + (8 - iRow);
          this.node.getComponent(UITransform).priority = itemIndex;
          this.itemIndex = itemIndex;
          this.curIndex = itemIndex;
          this.stopPosY = symbolPosY;
          //        // gts.Debug.Log("==" + this.node.name + "==" + "=init=" + this.node.y + "==this.node.zIndex==" + this.node.zIndex);

          this.Node_symbol = this.node.getChildByName("Node_symbol");
          ui_symbolItem.playEndTag[this.iCol] = false;
        };
        _proto.initSymbolIcon = function initSymbolIcon(symbol, isGold) {
          var _this2 = this;
          this.updateSymbol(symbol, isGold);
          var delayTimes = this.iCol * 0.15;
          this.node.setPosition(this.node.position.x, 450 + this.iRow * spaceY);
          tween(this.node).delay(delayTimes).to(0.25, {
            position: v3(this.node.position.x, this.stopPosY - 35)
          }, {
            easing: "cubicIn"
          }).call(function () {
            if (!ui_symbolItem.playEndTag[_this2.iCol]) {
              MjxxlUtils.instance.playOneShot(eSound.drop_1);
              ui_symbolItem.playEndTag[_this2.iCol] = true;
            }
          }).to(0.05, {
            position: v3(this.node.position.x, this.stopPosY + 20)
          }, {
            easing: "cubicIn"
          }).to(0.03, {
            position: v3(this.node.position.x, this.stopPosY)
          }, {
            easing: "cubicIn"
          }).start();
        };
        _proto.initRun = function initRun(_runType, _specialIndex) {
          this._runType = _runType;
          this._rounds = cRounds;
          this._specialIndex = _specialIndex;
          ui_symbolItem.playEndTag[this.iCol] = false;
        };
        _proto.doStartRun = /*#__PURE__*/function () {
          var _doStartRun = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.doStartMove();
                case 2:
                  _context.next = 4;
                  return this.doRunning();
                case 4:
                  _context.next = 6;
                  return this.doStopping();
                case 6:
                  return _context.abrupt("return", this.doEnd());
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doStartRun() {
            return _doStartRun.apply(this, arguments);
          }
          return doStartRun;
        }();
        _proto.quickStop = function quickStop() {
          if (this.totalY > cSpaceH + 35) {
            this.curSpeed = maxSpeed;
            this.curAspeed = 500;
            var leftY = (this.totalY - 35) % cSpaceH;
            this.totalY = cSpaceH + 35 + leftY;
            this.spaceH = cSpaceH;
          }
        };
        _proto.doStartMove = function doStartMove() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            tween(_this3.node).to(0.1, {
              position: v3(_this3.node.getPosition().x, _this3.node.getPosition().y + 35)
            }, {
              easing: "cubicOut"
            }).call(function () {
              _this3._rounds = MjxxlModel.instance.isQuickStop ? 1 : _this3._rounds;
              _this3.curAspeed = MjxxlModel.instance.isQuickStop ? 500 : 0;
              _this3.curSpeed = MjxxlModel.instance.isQuickStop ? maxSpeed : 0;
              _this3.Node_symbol.scale = v3(1.0, 1.0, 1);
              _this3.node.getComponent(UITransform).priority = _this3.itemIndex;
              _this3.isSpecialRunning = false;
              if (_this3._runType == eRunType.SPECIAL) {
                var disRounds = (_this3._specialIndex + 1) * 6;
                var rounds = _this3._rounds;
                _this3._rounds = rounds + disRounds;
                _this3.totalY = cSpaceH * (_this3._rounds + 3) + 35;
                _this3.spaceH = cSpaceH * 3;
                _this3.specialSpaceH = _this3._specialIndex == 0 ? cSpaceH * (disRounds + 3) : cSpaceH * 3;
                _this3.lastSpeed = cLastSpeed * 3;

                //                        // gts.Debug.Log(`==this._specialIndex==${this._specialIndex}`);
              } else {
                _this3.totalY = cSpaceH * _this3._rounds + 35;
                _this3.spaceH = cSpaceH;
                _this3.lastSpeed = cLastSpeed;
              }
              resolve();
            }).start();
          });
        };
        _proto.doRunning = function doRunning() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              if (_this4.curSpeed < maxSpeed) {
                _this4.curAspeed += aSpeed;
                _this4.curSpeed += _this4.curAspeed;
              }
              var curDis = _this4.curSpeed * dt;

              //                //update posY
              _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y - curDis);
              if (_this4.node.getPosition().y <= minPosY) {
                _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y + cSpaceH);

                //                    //随机替换图片
                _this4.updateSymbol();
              }

              //                //this.totalY < this.spaceH
              _this4.totalY -= curDis;
              if (_this4._runType == eRunType.SPECIAL && _this4.totalY < _this4.specialSpaceH && !_this4.isSpecialRunning) {
                EventManager.instance.emit(eEvent.onSetMask, _this4.iCol, _this4.node.getPosition().x);

                //                    // gts.Debug.Log(`==this._specialIndex==${this._specialIndex}`);
                _this4.isSpecialRunning = true;
                _this4.node.scale = v3(1.025, 1.025, 1);
              }
              if (_this4.totalY < _this4.spaceH) {
                _this4.unschedule(scheduleUpdate);
                resolve();
              }
            };
            _this4.schedule(scheduleUpdate);
          });
        };
        _proto.doStopping = function doStopping() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              _this5.curAspeed = _this5.curAspeed < rSpeed ? _this5.curAspeed : _this5.curAspeed + rSpeed;
              _this5.curSpeed += _this5.curAspeed;
              if (_this5.curSpeed < _this5.lastSpeed) {
                _this5.curSpeed = _this5.lastSpeed;
              }
              var curDis = _this5.curSpeed * dt;
              _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y - curDis);
              _this5.totalY -= curDis;
              if (_this5.totalY <= 0) {
                _this5.unschedule(scheduleUpdate);
                resolve();
              } else if (_this5.node.getPosition().y <= minPosY) {
                _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y + cSpaceH);

                //                    // gts.Debug.Log("==" + this.node.y + "==this.node.zIndex==" + this.node.zIndex);
                //                    //将图片替换为正确图片
                if (_this5.iRow == 0) {
                  _this5.updateSymbol();
                } else {
                  var reuslt = MjxxlModel.instance.betResult.Res[0];
                  var posMsg = reuslt.AllPosMsg[_this5.iCol];
                  var info = posMsg && posMsg[_this5.iRow - 1] ? posMsg[_this5.iRow - 1] : null;
                  _this5.updateSymbol(info ? info.Sym : null, info ? info.IsGold : null);
                }
              }
            };
            _this5.schedule(scheduleUpdate);
          });
        };
        _proto.doEnd = function doEnd() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            var itemSpine = _this6.Node_symbol.getComponent(sp.Skeleton);
            var delayTimes = _this6._runType == eRunType.SPECIAL ? 0.2 : 0;
            if (!ui_symbolItem.playEndTag[_this6.iCol]) {
              MjxxlUtils.instance.playOneShot(eSound.drop_1);
              ui_symbolItem.playEndTag[_this6.iCol] = true;
            }
            tween(_this6.node).to(0.1, {
              position: v3(_this6.node.position.x, _this6.stopPosY + 35)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this6.node.position.x, _this6.stopPosY)
            }, {
              easing: "cubicIn"
            }).to(delayTimes, {
              scale: v3(1.0, 1.0, 1)
            }).call(function () {
              _this6.isSpecialRunning = false;
              _this6.updateZIndex();
              if (itemSpine) {
                if (itemSpine.skeletonData.name == "icon_hu") {
                  // this.node.zIndex += cSpecialZindex;
                  _this6.node.getComponent(UITransform).priority = _this6.node.getComponent(UITransform).priority + cSpecialZindex;
                  itemSpine.setAnimation(0, "intro", false);
                  itemSpine.setCompleteListener(function () {
                    itemSpine.setCompleteListener(null);
                    itemSpine.setAnimation(0, "idle", true);
                  });
                }
              }
              resolve();
            }).start();
          });
        };
        _proto.doClear = function doClear() {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            _this7.node.getComponent(UITransform).priority = _this7.node.getComponent(UITransform).priority + cSpineZindex;
            EventManager.instance.emit(eEvent.onAddEffect, _this7.iRow, _this7.iCol, _this7.node.position);
            _this7.updateSymbol(_this7.symbolIndex, _this7.isGold, true);
            ui_symbolItem.playEndTag[_this7.iCol] = false;
            _this7.scheduleOnce(function () {
              var itemSpine = _this7.Node_symbol.getComponent(sp.Skeleton);
              if (itemSpine && itemSpine.skeletonData.name != "icon_hu") {
                itemSpine.setAnimation(0, MjxxlUtils.instance.getSymbolAniName(_this7.symbolIndex, _this7.isGold, false), false);
                itemSpine.setCompleteListener(function () {
                  itemSpine.setCompleteListener(null);
                  if (!_this7.isGold) {
                    //                            //if (!this.isGold || this.symbolIndex == MjxxlDef.eSymbol.WILD) {
                    _this7.Node_symbol.getComponent(UIOpacity).opacity = 0;
                    _this7.isClear = true;
                  } else {
                    _this7.updateSymbol(eSymbol.WILD, false, true);
                  }
                  EventManager.instance.emit(eEvent.onDelEffect, _this7.iRow, _this7.iCol);
                  resolve();
                });
              } else {
                resolve();
              }
            }, 1.0);
          });
        };
        _proto.doReset = function doReset(posRow) {
          this.node.setPosition(this.node.position.x, startY + spaceY * posRow);
        };
        _proto.doDrop = function doDrop(toRow, symbol) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            _this8.iRow = toRow;
            var itemIndex = (5 - _this8.iCol) * 10 + (8 - _this8.iRow);
            _this8.itemIndex = itemIndex;
            _this8.curIndex = itemIndex;
            var toPosY = startY + spaceY * toRow;
            _this8.stopPosY = toPosY;
            _this8.node.name = "Node_symbolItem_" + _this8.iCol + "_" + _this8.iRow;
            _this8.isClear = false;

            //            // this.Label_tag.node.active = true;
            //            // this.Label_tag.string = `${this.iCol}_${this.iRow}`;
            //            // gts.Debug.Log("==" + this.node.name + "==");

            if (toPosY < _this8.node.getPosition().y) {
              _this8.Node_symbol.getComponent(UIOpacity).opacity = 255;
              _this8.updateSymbol(symbol ? symbol.Sym : null, symbol ? symbol.IsGold : null);
              var delayTime = Math.abs(toPosY - _this8.node.getPosition().y) / 1000;
              tween(_this8.node).to(delayTime, {
                position: v3(_this8.node.position.x, toPosY)
              }, {
                easing: "cubicIn"
              }).call(function () {
                if (!ui_symbolItem.playEndTag[_this8.iCol]) {
                  MjxxlUtils.instance.playOneShot(eSound.drop_1);
                  ui_symbolItem.playEndTag[_this8.iCol] = true;
                }
              }).to(0.05, {
                position: v3(_this8.node.position.x, toPosY + 20)
              }, {
                easing: "cubicIn"
              }).to(0.05, {
                position: v3(_this8.node.position.x, toPosY)
              }, {
                easing: "cubicIn"
              }).call(function () {
                resolve();
              }).start();
            } else {
              resolve();
            }
          });
        };
        _proto.updateSymbol = function updateSymbol(symbolIndex, isGold, isSpine) {
          var _this9 = this;
          if (isGold === void 0) {
            isGold = null;
          }
          if (isSpine === void 0) {
            isSpine = false;
          }
          this.symbolIndex = symbolIndex || Math.floor(Math.random() * 10 + 1);
          this.isGold = isGold != null ? isGold : this.iCol == 0 || this.iCol == 4 ? false : Math.random() > 0.5;
          if (!symbolIndex && this.symbolIndex == eSymbol.WILD) {
            this.symbolIndex = Math.floor(Math.random() * 8 + 1);
          }
          if (this.symbolIndex >= eSymbol.WILD) {
            this.isGold = false;
          }
          isSpine = this.symbolIndex < eSymbol.WILD ? isSpine : true;
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.destroy();
              //                // this.Node_symbol.removeComponent(sp.Skeleton);
            }

            this.scheduleOnce(function () {
              var itemSymbol = MjxxlUtils.instance.getItemSymbolIcon(_this9.symbolIndex, _this9.isGold);
              var itemSprite = _this9.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this9.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
            this.updateZIndex();
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.destroy();
              //                // this.Node_symbol.removeComponent(cc.Sprite);
            }

            this.scheduleOnce(function () {
              var itemSymbol = MjxxlUtils.instance.getItemSymbolSpine(_this9.symbolIndex, _this9.isGold);
              var itemSpine = _this9.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this9.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = false;
              //                // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              itemSpine.setAnimation(0, MjxxlUtils.instance.getSymbolAniName(_this9.symbolIndex, _this9.isGold), true);
            });
            this.updateZIndex(cSpineZindex);
          }
        };
        _proto.updateZIndex = function updateZIndex(addIndex) {
          if (addIndex === void 0) {
            addIndex = 0;
          }
          this.curIndex -= 7;
          var _zIndex = this.curIndex;
          if (addIndex > 0) {
            _zIndex += addIndex;
          }
          this.node.getComponent(UITransform).priority = this.isSpecialRunning ? cSpecialZindex + _zIndex : _zIndex;
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (MjxxlModel.instance.gameStatus != eRunStatus.NONE || this.iRow == 0 || this.iRow == 5) {
            return;
          }
          var posX = this.iCol < 2 ? this.node.getPosition().x + 85 : this.iCol > 2 ? this.node.getPosition().x - 85 : this.node.getPosition().x;
          var pos = v3(posX, this.node.getPosition().y);
          EventManager.instance.emit(eEvent.onSymbolClick, this.symbolIndex, this.Node_symbol, pos);
        };
        return ui_symbolItem;
      }(Component), _class3.playEndTag = [false, false, false, false, false], _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_tag", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjxxlDef.ts', './LocalizedImage.ts', './MjxxlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, sp, tween, Component, Constant, LocalizedImage, MjxxlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      sp = module.sp;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Constant = module.Constant;
    }, function (module) {
      LocalizedImage = module.LocalizedImage;
    }, function (module) {
      MjxxlUtils = module.MjxxlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8c2b9vrrlNOYYY661fdgM7T", "ui_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ui_winTip = exports('default', (_dec = ccclass("UiWinTip"), _dec2 = menu("game/MjxxlGame/ui_winTip"), _dec3 = property(LocalizedImage), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ui_winTip, _Component);
        function ui_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Sprite_title", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ui_winTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {}
        //    // update (dt) {}
        ;

        _proto.doShow = function doShow(gold, isLast) {
          var _this2 = this;
          if (isLast === void 0) {
            isLast = false;
          }
          this.Sprite_title.key = isLast ? "tittle_tongcuoc" : "tittle_thang";
          if (!isLast) {
            var Node_effect_base = this.node.getChildByName("Node_effect_base").getComponent(sp.Skeleton);
            Node_effect_base.setAnimation(0, "animation", false);
            var Node_effect_coin = this.node.getChildByName("Node_effect_coin").getComponent(sp.Skeleton);
            Node_effect_coin.setAnimation(0, "idle", false);
            var destWin = gold;
            var disWin = gold / 10;
            var curTotalWin = 0;
            tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
              curTotalWin += disWin;
              if (curTotalWin > destWin) {
                curTotalWin = destWin;
              }
              _this2.Label_win.string = "" + MjxxlUtils.instance.numberFormat(curTotalWin / Constant.moneyRatio, 2.0);
            })).start();
          } else {
            this.Label_win.string = "" + MjxxlUtils.instance.numberFormat(gold / Constant.moneyRatio, 2.0);
          }
        };
        return ui_winTip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_title", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/MjxxlGame', 'chunks:///_virtual/MjxxlGame'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
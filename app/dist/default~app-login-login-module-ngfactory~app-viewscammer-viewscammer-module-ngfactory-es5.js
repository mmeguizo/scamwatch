(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-login-login-module-ngfactory~app-viewscammer-viewscammer-module-ngfactory"], {
  /***/
  "./node_modules/angular2-toaster/src/toast.component.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./node_modules/angular2-toaster/src/toast.component.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: RenderType_ToastComponent, View_ToastComponent_0, View_ToastComponent_Host_0, ToastComponentNgFactory */

  /***/
  function node_modulesAngular2ToasterSrcToastComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ToastComponent", function () {
      return RenderType_ToastComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToastComponent_0", function () {
      return View_ToastComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToastComponent_Host_0", function () {
      return View_ToastComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponentNgFactory", function () {
      return ToastComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toast.component */
    "./node_modules/angular2-toaster/src/toast.component.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ToastComponent = [];

    var RenderType_ToastComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ToastComponent,
      data: {}
    });

    function View_ToastComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, [[1, 3], ["componentBody", 1]], null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_ToastComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.safeBodyHtml;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ToastComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.toast.body;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ToastComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "toast-close-button"]], [[8, "innerHTML", 1]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.click($event, _co.toast) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.safeCloseHtml;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ToastComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        componentBody: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [["class", "toaster-icon"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 12, "div", [["class", "toast-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 8, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], [], {
        ngSwitch: [0, "ngSwitch"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], {
        ngSwitchCase: [0, "ngSwitchCase"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], {
        ngSwitchCase: [0, "ngSwitchCase"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"]], {
        ngSwitchCase: [0, "ngSwitchCase"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "toaster-icon";
        var currVal_1 = _co.iconClass;

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _co.titleClass;

        _ck(_v, 5, 0, currVal_2);

        var currVal_4 = _co.messageClass;

        _ck(_v, 8, 0, currVal_4);

        var currVal_5 = _co.toast.bodyOutputType;

        _ck(_v, 9, 0, currVal_5);

        var currVal_6 = _co.bodyOutputType.Component;

        _ck(_v, 11, 0, currVal_6);

        var currVal_7 = _co.bodyOutputType.TrustedHtml;

        _ck(_v, 13, 0, currVal_7);

        var currVal_8 = _co.bodyOutputType.Default;

        _ck(_v, 15, 0, currVal_8);

        var currVal_9 = _co.toast.showCloseButton;

        _ck(_v, 17, 0, currVal_9);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.toast.title;

        _ck(_v, 6, 0, currVal_3);
      });
    }

    function View_ToastComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["toastComp", ""]], null, null, null, View_ToastComponent_0, RenderType_ToastComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ToastComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[toastComp]", _toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"], View_ToastComponent_Host_0, {
      toast: "toast",
      iconClass: "iconClass",
      titleClass: "titleClass",
      messageClass: "messageClass"
    }, {
      clickEvent: "clickEvent"
    }, []);
    /***/

  },

  /***/
  "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: RenderType_ToasterContainerComponent, View_ToasterContainerComponent_0, View_ToasterContainerComponent_Host_0, ToasterContainerComponentNgFactory */

  /***/
  function node_modulesAngular2ToasterSrcToasterContainerComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ToasterContainerComponent", function () {
      return RenderType_ToasterContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToasterContainerComponent_0", function () {
      return View_ToasterContainerComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToasterContainerComponent_Host_0", function () {
      return View_ToasterContainerComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterContainerComponentNgFactory", function () {
      return ToasterContainerComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast.component.ngfactory */
    "./node_modules/angular2-toaster/src/toast.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toast.component */
    "./node_modules/angular2-toaster/src/toast.component.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _toaster_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toaster-container.component */
    "./node_modules/angular2-toaster/src/toaster-container.component.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toaster.service */
    "./node_modules/angular2-toaster/src/toaster.service.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ToasterContainerComponent = [];

    var RenderType_ToasterContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ToasterContainerComponent,
      data: {
        "animation": [{
          type: 7,
          name: "toastState",
          definitions: [{
            type: 0,
            name: "flyRight, flyLeft, slideDown, slideUp, fade",
            styles: {
              type: 6,
              styles: {
                opacity: 1,
                transform: "translate(0,0)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "void => flyRight",
            animation: [{
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateX(100%)"
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: "0.25s ease-in"
            }],
            options: null
          }, {
            type: 1,
            expr: "flyRight => void",
            animation: [{
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: "translateX(100%)"
                },
                offset: null
              },
              timings: "0.25s 10ms ease-out"
            }],
            options: null
          }, {
            type: 1,
            expr: "void => flyLeft",
            animation: [{
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateX(-100%)"
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: "0.25s ease-in"
            }],
            options: null
          }, {
            type: 1,
            expr: "flyLeft => void",
            animation: [{
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: "translateX(-100%)"
                },
                offset: null
              },
              timings: "0.25s 10ms ease-out"
            }],
            options: null
          }, {
            type: 1,
            expr: "void => slideDown",
            animation: [{
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateY(-200%)"
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: "0.3s ease-in"
            }],
            options: null
          }, {
            type: 1,
            expr: "slideDown => void",
            animation: [{
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: "translateY(200%)"
                },
                offset: null
              },
              timings: "0.3s 10ms ease-out"
            }],
            options: null
          }, {
            type: 1,
            expr: "void => slideUp",
            animation: [{
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateY(200%)"
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: "0.3s ease-in"
            }],
            options: null
          }, {
            type: 1,
            expr: "slideUp => void",
            animation: [{
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: "translateY(-200%)"
                },
                offset: null
              },
              timings: "0.3s 10ms ease-out"
            }],
            options: null
          }, {
            type: 1,
            expr: "void => fade",
            animation: [{
              type: 6,
              styles: {
                opacity: 0
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: "0.3s ease-in"
            }],
            options: null
          }, {
            type: 1,
            expr: "fade => void",
            animation: [{
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0
                },
                offset: null
              },
              timings: "0.3s 10ms ease-out"
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_ToasterContainerComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "toast"], ["toastComp", ""]], [[24, "@toastState", 0]], [[null, "click"], [null, "clickEvent"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.click(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        if ("clickEvent" === en) {
          var pd_1 = _co.childClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseover" === en) {
          var pd_2 = _co.stopTimer(_v.context.$implicit) !== false;
          ad = pd_2 && ad;
        }

        if ("mouseout" === en) {
          var pd_3 = _co.restartTimer(_v.context.$implicit) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ToastComponent_0"], _toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ToastComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4308992, null, 0, _toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        toast: [0, "toast"],
        iconClass: [1, "iconClass"],
        titleClass: [2, "titleClass"],
        messageClass: [3, "messageClass"]
      }, {
        clickEvent: "clickEvent"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = "toast";
        var currVal_2 = _co.toasterconfig.typeClasses[_v.context.$implicit.type];

        _ck(_v, 1, 0, currVal_1, currVal_2);

        var currVal_3 = _v.context.$implicit;
        var currVal_4 = _co.toasterconfig.iconClasses[_v.context.$implicit.type];
        var currVal_5 = _co.toasterconfig.titleClass;
        var currVal_6 = _co.toasterconfig.messageClass;

        _ck(_v, 2, 0, currVal_3, currVal_4, currVal_5, currVal_6);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.toasterconfig.animation;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ToasterContainerComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["id", "toast-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToasterContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _ck(_v, 2, 0, _co.toasterconfig.positionClass);

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.toasts;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ToasterContainerComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "toaster-container", [], null, null, null, View_ToasterContainerComponent_0, RenderType_ToasterContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _toaster_container_component__WEBPACK_IMPORTED_MODULE_5__["ToasterContainerComponent"], [_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ToasterContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("toaster-container", _toaster_container_component__WEBPACK_IMPORTED_MODULE_5__["ToasterContainerComponent"], View_ToasterContainerComponent_Host_0, {
      toasterconfig: "toasterconfig"
    }, {}, []);
    /***/

  }
}]);
//# sourceMappingURL=default~app-login-login-module-ngfactory~app-viewscammer-viewscammer-module-ngfactory-es5.js.map
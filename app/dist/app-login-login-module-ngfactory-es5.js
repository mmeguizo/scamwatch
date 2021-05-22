function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-login-login-module-ngfactory"], {
  /***/
  "./src/app/login/login-routing.modules.ts":
  /*!************************************************!*\
    !*** ./src/app/login/login-routing.modules.ts ***!
    \************************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModulesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/login/login.component.ngfactory.js ***!
    \****************************************************/

  /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */

  /***/
  function srcAppLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
      return RenderType_LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
      return View_LoginComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
      return View_LoginComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
      return LoginComponentNgFactory;
    });
    /* harmony import */


    var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component.scss.shim.ngstyle */
    "./src/app/login/login.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */
    "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
    /* harmony import */


    var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-toaster/src/toaster-container.component */
    "./node_modules/angular2-toaster/src/toaster-container.component.js");
    /* harmony import */


    var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-toaster/src/toaster.service */
    "./node_modules/angular2-toaster/src/toaster.service.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _core_services_connection_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../@core/services/connection.service */
    "./src/app/@core/services/connection.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LoginComponent,
      data: {}
    });

    function View_LoginComponent_1(_l) {
<<<<<<< HEAD
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This field is required."]))], null, null);
    }

    function View_LoginComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This field is required."]))], null, null);
    }

    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 48, "nb-layout", [], [[2, "window-mode", null], [2, "with-scroll", null], [2, "with-subheader", null]], [["window", "scroll"], ["window", "resize"]], function (_v, en, $event) {
=======
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" This field is required. "]))], null, null);
    }

    function View_LoginComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" This field is required. "]))], null, null);
    }

    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 53, "nb-layout", [], [[2, "window-mode", null], [2, "with-scroll", null], [2, "with-subheader", null]], [["window", "scroll"], ["window", "resize"]], function (_v, en, $event) {
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
        var ad = true;

        if ("window:scroll" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onScroll($event) !== false;
          ad = pd_0 && ad;
        }

        if ("window:resize" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
<<<<<<< HEAD
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_WINDOW"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutScrollService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutRulerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayContainerAdapter"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 3, 46, "nb-layout-column", [], [[2, "left", null], [2, "start", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutColumnComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 44, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 43, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["class", "tinker-logo"], ["src", "../../assets//images/scam.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h2", [["style", "z-index: 9999999"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ScamWatch PH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "form-text error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        toasterconfig: [0, "toasterconfig"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 35, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
=======
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_WINDOW"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutScrollService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutRulerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayContainerAdapter"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 3, 51, "nb-layout-column", [], [[2, "left", null], [2, "start", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbLayoutColumnComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbLayoutColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 49, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "nb-card-header", [["style", "border-bottom: none"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "button", [["ghost", ""], ["nbButton", ""], ["status", "danger"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.backToSearch() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        status: [0, "status"],
        ghost: [1, "ghost"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 43, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "img", [["class", "tinker-logo"], ["src", "../../assets//images/scam.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h2", [["style", "z-index: 9999999"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ScamWatch PH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [["class", "form-text error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_5__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        toasterconfig: [0, "toasterconfig"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 35, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
<<<<<<< HEAD
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onSubmit($event) !== false;
=======
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onSubmit($event) !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
<<<<<<< HEAD
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onReset() !== false;
=======
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onReset() !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_1 && ad;
        }

        if ("submit" === en) {
          var pd_2 = _co.onLoginSubmit() !== false;
          ad = pd_2 && ad;
        }

        return ad;
<<<<<<< HEAD
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 14, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "label", [["for", "username"], ["style", "color:white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 11, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](23, {
        "has-error": 0,
        "has-success": 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "username"], ["name", "username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false;
=======
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 14, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "label", [["for", "username"], ["style", "color: white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 11, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](28, {
        "has-error": 0,
        "has-success": 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "username"], ["name", "username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
<<<<<<< HEAD
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onTouched() !== false;
=======
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
<<<<<<< HEAD
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionStart() !== false;
=======
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionStart() !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
<<<<<<< HEAD
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false;
=======
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_3 && ad;
        }

        return ad;
<<<<<<< HEAD
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "ul", [["class", "help-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 14, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [["for", "password"], ["style", "color:white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 11, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](38, {
        "has-error": 0,
        "has-success": 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "password"], ["name", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._handleInput($event.target.value) !== false;
=======
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "ul", [["class", "help-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 14, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "label", [["for", "password"], ["style", "color: white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 11, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](43, {
        "has-error": 0,
        "has-success": 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "password"], ["name", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._handleInput($event.target.value) !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
<<<<<<< HEAD
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).onTouched() !== false;
=======
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onTouched() !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
<<<<<<< HEAD
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._compositionStart() !== false;
=======
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._compositionStart() !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
<<<<<<< HEAD
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._compositionEnd($event.target.value) !== false;
=======
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._compositionEnd($event.target.value) !== false;
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
          ad = pd_3 && ad;
        }

        return ad;
<<<<<<< HEAD
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "ul", [["class", "help-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "input", [["class", "btn btn-primary"], ["type", "submit"], ["value", "Login"]], [[8, "disabled", 0]], null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_6 = _co.config;

        _ck(_v, 12, 0, currVal_6);

        var currVal_14 = _co.form;

        _ck(_v, 15, 0, currVal_14);

        var currVal_15 = _ck(_v, 23, 0, _co.form.controls.username.errors && _co.form.controls.username.dirty, _co.form.controls.username.valid && _co.form.controls.username.dirty);

        _ck(_v, 22, 0, currVal_15);

        var currVal_23 = "username";

        _ck(_v, 27, 0, currVal_23);

        var currVal_24 = (_co.form.controls.username.errors == null ? null : _co.form.controls.username.errors.required) && _co.form.controls.username.dirty;

        _ck(_v, 32, 0, currVal_24);

        var currVal_25 = _ck(_v, 38, 0, _co.form.controls.password.errors && _co.form.controls.password.dirty, _co.form.controls.password.valid && _co.form.controls.password.dirty);

        _ck(_v, 37, 0, currVal_25);

        var currVal_33 = "password";

        _ck(_v, 42, 0, currVal_33);

        var currVal_34 = (_co.form.controls.password.errors == null ? null : _co.form.controls.password.errors.required) && _co.form.controls.password.dirty;

        _ck(_v, 47, 0, currVal_34);
=======
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "ul", [["class", "help-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 0, "input", [["class", "btn btn-primary"], ["type", "submit"], ["value", "Login"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "button", [["ghost", ""], ["nbButton", ""], ["status", "success"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        status: [0, "status"],
        ghost: [1, "ghost"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](56, 0, [" ", "\n"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_30 = "danger";
        var currVal_31 = "";

        _ck(_v, 8, 0, currVal_30, currVal_31);

        var currVal_34 = _co.config;

        _ck(_v, 17, 0, currVal_34);

        var currVal_42 = _co.form;

        _ck(_v, 20, 0, currVal_42);

        var currVal_43 = _ck(_v, 28, 0, _co.form.controls.username.errors && _co.form.controls.username.dirty, _co.form.controls.username.valid && _co.form.controls.username.dirty);

        _ck(_v, 27, 0, currVal_43);

        var currVal_51 = "username";

        _ck(_v, 32, 0, currVal_51);

        var currVal_52 = (_co.form.controls.username.errors == null ? null : _co.form.controls.username.errors.required) && _co.form.controls.username.dirty;

        _ck(_v, 37, 0, currVal_52);

        var currVal_53 = _ck(_v, 43, 0, _co.form.controls.password.errors && _co.form.controls.password.dirty, _co.form.controls.password.valid && _co.form.controls.password.dirty);

        _ck(_v, 42, 0, currVal_53);

        var currVal_61 = "password";

        _ck(_v, 47, 0, currVal_61);

        var currVal_62 = (_co.form.controls.password.errors == null ? null : _co.form.controls.password.errors.required) && _co.form.controls.password.dirty;

        _ck(_v, 52, 0, currVal_62);

        var currVal_89 = "success";
        var currVal_90 = "";

        _ck(_v, 55, 0, currVal_89, currVal_90);
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).windowModeValue;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).withScrollValue;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).withSubheader;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).leftValue;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).startValue;

        _ck(_v, 2, 0, currVal_3, currVal_4);

<<<<<<< HEAD
        var currVal_5 = _co.msg;

        _ck(_v, 10, 0, currVal_5);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 13, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending;

        _ck(_v, 24, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassUntouched;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassTouched;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPristine;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassDirty;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassValid;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassInvalid;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPending;

        _ck(_v, 39, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);

        var currVal_35 = !_co.form.valid || _co.processing;

        _ck(_v, 48, 0, currVal_35);
=======
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).filled;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).outline;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ghost;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).hero;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).fullWidth;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).tabbable;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).tiny;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).small;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).medium;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).large;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).giant;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).primary;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).info;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).success;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).warning;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).danger;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).basic;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).control;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).rectangle;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).round;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).semiRound;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).iconLeft;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).iconRight;

        _ck(_v, 7, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]);

        var currVal_32 = "Back to Search";

        _ck(_v, 9, 0, currVal_32);

        var currVal_33 = _co.msg;

        _ck(_v, 15, 0, currVal_33);

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending;

        _ck(_v, 18, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41);

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending;

        _ck(_v, 29, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50);

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassUntouched;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassTouched;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassPristine;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassDirty;

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassValid;

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassInvalid;

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassPending;

        _ck(_v, 44, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60);

        var currVal_63 = !_co.form.valid || _co.processing;

        _ck(_v, 53, 0, currVal_63);

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).filled;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).outline;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ghost;

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).hero;

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).fullWidth;

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).disabled;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).disabled;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).tabbable;

        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).tiny;

        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).small;

        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).medium;

        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).large;

        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).giant;

        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).primary;

        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).info;

        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).success;

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).warning;

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).danger;

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).basic;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).control;

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).rectangle;

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).round;

        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).semiRound;

        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).iconLeft;

        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).iconRight;

        _ck(_v, 54, 1, [currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88]);

        var currVal_91 = "Back to Search";

        _ck(_v, 56, 0, currVal_91);
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
      });
    }

    function View_LoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"], _core_services_connection_service__WEBPACK_IMPORTED_MODULE_10__["ConnectionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/login/login.component.scss.shim.ngstyle.js":
  /*!************************************************************!*\
    !*** ./src/app/login/login.component.scss.shim.ngstyle.js ***!
    \************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLoginLoginComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300);\nh2[_ngcontent-%COMP%] {\n  font-family: \"Archivo Black\", sans-serif;\n  color: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  font-style: italic;\n  font-weight: bold;\n  margin-top: 2px;\n}\n.error[_ngcontent-%COMP%] {\n  text-align: center;\n  color: red;\n}\n.tinker-logo[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  width: 120px;\n  margin: 0 auto;\n}\n.chmsc-logo[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  width: 39%;\n  margin: 0 auto;\n}\n.wrapper[_ngcontent-%COMP%] {\n  background: #ffaa00;\n  background: linear-gradient(to bottom right, #ffaa00 0%, #7a1bff 100%);\n  position: absolute;\n  top: 40%;\n  left: 0;\n  width: 100%;\n  height: 600px;\n  margin-top: -215px;\n  overflow: hidden;\n}\n.wrapper.form-success[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  transform: translateY(85px);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 80px 0;\n  height: 400px;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-put;\n  font-weight: 200;\n}\nform[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  position: relative;\n  z-index: 2;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 1px solid #d2b3ff;\n  background-color: #222b45;\n  width: 250px;\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0 auto 10px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: white;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background-color: fade(white, 40%);\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: white;\n  width: 300px;\n  color: #222b45;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background-color: white;\n  border: 0;\n  padding: 10px 15px;\n  color: #222b45;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f5f7f9;\n}\n.bg-bubbles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  list-style: none;\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-color: #7716ff;\n  bottom: -160px;\n  -webkit-animation: square 25s infinite;\n  animation: square 25s infinite;\n  transition-timing-function: linear;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 10%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 17s;\n          animation-duration: 17s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 25%;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-duration: 22s;\n          animation-duration: 22s;\n  background-color: fade(white, 25%);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 70%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 80%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  background-color: fade(white, 20%);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 32%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 55%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 25%;\n  width: 10px;\n  height: 10px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n  background-color: fade(white, 30%);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 90%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 11s;\n          animation-delay: 11s;\n}\n@-webkit-keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-700px) rotate(600deg);\n  }\n}\n@keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-700px) rotate(600deg);\n  }\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #fff;\n  opacity: 1;\n  \n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #fff;\n  opacity: 1;\n  \n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #fff;\n  opacity: 1;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxtYXJrXFxEZXNrdG9wXFxQUk9KRUNUIEZJTEVcXHNjYW13YXRjaFxcYXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCUSw0RUFBQTtBQTlCUjtFQUNDLHdDQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NEO0FEQ0E7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUNFRDtBREdBO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FEO0FER0E7RUFDQyxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQUQ7QURPQTtFQUNDLG1CQUFBO0VBSUEsc0VBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTEQ7QURTRztFQUNDLDJCQUFBO0FDUEo7QURhQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNWRDtBRFlDO0VBQ0MsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQ1ZGO0FEY0E7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDWEQ7QURhQztFQUNDLGNBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBR0EseUJBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNqQkY7QURtQkU7RUFDQyxrQ0FBQTtBQ2pCSDtBRG9CRTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7QUNuQkg7QUR1QkM7RUFDQyx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ3JCRjtBRHVCRTtFQUNDLHlCQUFBO0FDckJIO0FEMEJBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtBQ3hCRDtBRDBCQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7RUFFQSxzQ0FBQTtFQUNBLDhCQUFBO0VBR0Esa0NBQUE7QUMzQkY7QUQ2QkU7RUFDQyxTQUFBO0FDM0JIO0FEOEJFO0VBQ0MsU0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUM5Qkg7QURpQ0U7RUFDQyxTQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQy9CSDtBRGtDRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLCtCQUFBO1VBQUEsdUJBQUE7RUFFQSxrQ0FBQTtBQ2xDSDtBRHFDRTtFQUNDLFNBQUE7QUNuQ0g7QURzQ0U7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0NBQUE7QUNyQ0g7QUR3Q0U7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0FDdkNIO0FEMENFO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUN6Q0g7QUQ0Q0U7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtDQUFBO0FDM0NIO0FEOENFO0VBQ0MsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsNEJBQUE7VUFBQSxvQkFBQTtBQzdDSDtBRGtEQTtFQUNDO0lBQ0Msd0JBQUE7RUMvQ0E7RURpREQ7SUFDQyw0Q0FBQTtFQy9DQTtBQUNGO0FEaURBO0VBQ0M7SUFDQyx3QkFBQTtFQy9DQTtFRGlERDtJQUNDLDRDQUFBO0VDL0NBO0FBQ0Y7QURtREE7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNoRGI7QUQ4Q0E7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNoRGI7QUQ4Q0E7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNoRGIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG5cdGZvbnQtZmFtaWx5OiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XHJcblx0Ly8gY29sb3I6Izg3ODc4NztcclxuXHRjb2xvcjojZmZmO1xyXG5cdG1hcmdpbi1sZWZ0OmF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OmF1dG87XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uZXJyb3J7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLnRpbmtlci1sb2dve1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdHdpZHRoOiAxMjBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHQvLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMXB4IDE5cHggcmdiYSg3NiwgMTI4LCAxMzQsIDAuNSkpO1xyXG59XHJcbi5jaG1zYy1sb2dve1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdHdpZHRoOiAzOSU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0Ly8gZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDFweCAxOXB4IHJnYmEoNzYsIDEyOCwgMTM0LCAwLjUpKTtcclxufVxyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybzoyMDAsMzAwKTtcclxuXHJcbi8vdGVzdFxyXG4ud3JhcHBlciB7XHJcblx0YmFja2dyb3VuZDogI2ZmYWEwMDtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgI2ZmYWEwMCAwJSwgcmdiKDEyMiwgMjcsIDI1NSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICNmZmFhMDAgMCUsIHJnYigxMjIsIDI3LCAyNTUpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgI2ZmYWEwMCAwJSwgcmdiKDEyMiwgMjcsIDI1NSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2ZmYWEwMCAwJSwgcmdiKDEyMiwgMjcsIDI1NSkgMTAwJSk7XHJcblxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDQwJTtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNjAwcHg7XHJcblx0bWFyZ2luLXRvcDogLTIxNXB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdCYuZm9ybS1zdWNjZXNzIHtcclxuXHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRoMSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDg1cHgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRtYXgtd2lkdGg6IDYwMHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDgwcHggMDtcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0aDEge1xyXG5cdFx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcblx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1wdXQ7XHJcblx0XHRmb250LXdlaWdodDogMjAwO1xyXG5cdH1cclxufVxyXG5cclxuZm9ybSB7XHJcblx0cGFkZGluZzogMjBweCAwO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAyO1xyXG5cclxuXHRpbnB1dCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRvdXRsaW5lOiAwO1xyXG5cdFx0Ly8gYm9yZGVyOiAxcHggc29saWQgZmFkZSh3aGl0ZSwgNDAlKTtcclxuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDIwJSk7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZDJiM2ZmO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMmI0NTtcclxuXHJcblx0XHR3aWR0aDogMjUwcHg7XHJcblxyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0cGFkZGluZzogMTBweCAxNXB4O1xyXG5cdFx0bWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblxyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgNDAlKTtcclxuXHRcdH1cclxuXHJcblx0XHQmOmZvY3VzIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHRcdHdpZHRoOiAzMDBweDtcclxuXHJcblx0XHRcdGNvbG9yOiAgIzIyMmI0NTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGJ1dHRvbiB7XHJcblx0XHRhcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0b3V0bGluZTogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0cGFkZGluZzogMTBweCAxNXB4O1xyXG5cdFx0Y29sb3I6ICAjMjIyYjQ1O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0d2lkdGg6IDI1MHB4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NywgMjQ5KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cclxuXHR6LWluZGV4OiAxO1xyXG5cclxuXHRsaSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDE1JSkgIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3NzE2ZmY7XHJcblx0XHRib3R0b206IC0xNjBweDtcclxuXHJcblx0XHQtd2Via2l0LWFuaW1hdGlvbjogc3F1YXJlIDI1cyBpbmZpbml0ZTtcclxuXHRcdGFuaW1hdGlvbjogc3F1YXJlIDI1cyBpbmZpbml0ZTtcclxuXHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcblx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDEpIHtcclxuXHRcdFx0bGVmdDogMTAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0bGVmdDogMjAlO1xyXG5cclxuXHRcdFx0d2lkdGg6IDgwcHg7XHJcblx0XHRcdGhlaWdodDogODBweDtcclxuXHJcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMnM7XHJcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDMpIHtcclxuXHRcdFx0bGVmdDogMjUlO1xyXG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDRzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0bGVmdDogNDAlO1xyXG5cdFx0XHR3aWR0aDogNjBweDtcclxuXHRcdFx0aGVpZ2h0OiA2MHB4O1xyXG5cclxuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XHJcblxyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCAyNSUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDUpIHtcclxuXHRcdFx0bGVmdDogNzAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDYpIHtcclxuXHRcdFx0bGVmdDogODAlO1xyXG5cdFx0XHR3aWR0aDogMTIwcHg7XHJcblx0XHRcdGhlaWdodDogMTIwcHg7XHJcblxyXG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDNzO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCAyMCUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDcpIHtcclxuXHRcdFx0bGVmdDogMzIlO1xyXG5cdFx0XHR3aWR0aDogMTYwcHg7XHJcblx0XHRcdGhlaWdodDogMTYwcHg7XHJcblxyXG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDgpIHtcclxuXHRcdFx0bGVmdDogNTUlO1xyXG5cdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cclxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAxNXM7XHJcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDkpIHtcclxuXHRcdFx0bGVmdDogMjUlO1xyXG5cdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0aGVpZ2h0OiAxMHB4O1xyXG5cclxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAycztcclxuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDMwJSk7XHJcblx0XHR9XHJcblxyXG5cdFx0JjpudGgtY2hpbGQoMTApIHtcclxuXHRcdFx0bGVmdDogOTAlO1xyXG5cdFx0XHR3aWR0aDogMTYwcHg7XHJcblx0XHRcdGhlaWdodDogMTYwcHg7XHJcblxyXG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDExcztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcXVhcmUge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSByb3RhdGUoNjAwZGVnKTtcclxuXHR9XHJcbn1cclxuQGtleWZyYW1lcyBzcXVhcmUge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSByb3RhdGUoNjAwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybzoyMDAsMzAwKTtcbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2byBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uZXJyb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50aW5rZXItbG9nbyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2htc2MtbG9nbyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICB3aWR0aDogMzklO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZhYTAwO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgI2ZmYWEwMCAwJSwgIzdhMWJmZiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICNmZmFhMDAgMCUsICM3YTFiZmYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgI2ZmYWEwMCAwJSwgIzdhMWJmZiAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2ZmYWEwMCAwJSwgIzdhMWJmZiAxMDAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbi10b3A6IC0yMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyLmZvcm0tc3VjY2VzcyAuY29udGFpbmVyIGgxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDg1cHgpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDgwcHggMDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLXB1dDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuZm9ybSBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJiM2ZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYjQ1O1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbmZvcm0gaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCA0MCUpO1xufVxuZm9ybSBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiAjMjIyYjQ1O1xufVxuZm9ybSBidXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiAjMjIyYjQ1O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2Y5O1xufVxuXG4uYmctYnViYmxlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLmJnLWJ1YmJsZXMgbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzcxNmZmO1xuICBib3R0b206IC0xNjBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNxdWFyZSAyNXMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3F1YXJlIDI1cyBpbmZpbml0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogMTAlO1xufVxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMjAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDE3cztcbn1cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDI1JTtcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbn1cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDQwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XG4gIGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDI1JSk7XG59XG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNSkge1xuICBsZWZ0OiA3MCU7XG59XG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNikge1xuICBsZWZ0OiA4MCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgYmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMjAlKTtcbn1cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg3KSB7XG4gIGxlZnQ6IDMyJTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDdzO1xufVxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDgpIHtcbiAgbGVmdDogNTUlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDE1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XG59XG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoOSkge1xuICBsZWZ0OiAyNSU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCAzMCUpO1xufVxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XG4gIGxlZnQ6IDkwJTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDExcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgcm90YXRlKDYwMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3F1YXJlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSByb3RhdGUoNjAwZGVnKTtcbiAgfVxufVxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _core_services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../@core/services/connection.service */
    "./src/app/@core/services/connection.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _modals_test_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modals/test/test.component */
    "./src/app/login/modals/test/test.component.ts"); // import { routerTransition } from '../router.animation';
    // import { AuthService } from '../@core/services/auth.service';
    // import { SharedGlobalService } from '../@core/services/shared.global.service';
    // import { ToastrService } from 'ngx-toastr';


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent( // public sgs: SharedGlobalService,
      // public authService: AuthService,
      dialogService, cs, formBuilder, authService, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.dialogService = dialogService;
        this.cs = cs;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.loader = false;
        this.processing = false;
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
          showCloseButton: true,
          tapToDismiss: false,
          timeout: 0
        }); // sgs.setBrowserTitle.emit('Login');

        this.createForm();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] // Password field

          });
        }
      }, {
        key: "enableForm",
        value: function enableForm() {
          this.form.controls['username'].enable(); // Enable username field

          this.form.controls['password'].enable(); // Enable password field
        }
      }, {
        key: "disableForm",
        value: function disableForm() {
          this.form.controls['username'].disable(); // Disable username field

          this.form.controls['password'].disable(); // Disable password field
        }
      }, {
        key: "Submit",
        value: function Submit() {
          var user = {
            username: this.username,
            password: this.password
          };
        } // Functiont to submit form and login user

      }, {
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          var _this = this;

          this.processing = true; // Used to submit button while is being processed

          this.disableForm(); // Disable form while being process
          // Create user object from user's input

          var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field

          }; // Function to send login data to API

          this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
              // this.messageClass = 'alert alert-danger'; // Set bootstrap error class
              // this.message = data.message; // Set error message
              //  this.toastr.error('Failed', data.message);
              _this.toastr.pop('error', 'Failed', data.message);

              _this.processing = false; // Enable submit button

              _this.enableForm(); // Enable form for editting

            } else {
              // this.messageClass = 'alert alert-success'; // Set bootstrap success class
              // this.message = data.message; // Set success message
              //  this.toastr.success('Success', data.message);
              _this.toastr.pop('success', 'Success', data.message); // Function to store user's token in client local storage


<<<<<<< HEAD
              _this.authService.storeUserData(data.token, data.user, data.userToken);
=======
              _this.authService.storeUserData(data.token, data.user, data.userToken, data.id);
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784

              if (_this.authService.CurrentlyloggedIn()) {
                console.log(_this.authService.CurrentlyloggedIn());
                setTimeout(function () {
                  _this.router.navigate([data.role]); // Navigate to dashboard view

                }, 1000);
              } else {
                _this.authService.logout();

                _this.router.navigate(['login']); // Navigate to dashboard view

              } // After 2 seconds, redirect to dashboard page

            }
          });
        }
      }, {
        key: "showBootstrapModal",
        value: function showBootstrapModal() {// this.sgs.Modal({
          //     header: `Notice`,
          //     content: `
          //     test
          //     `,
          //     buttonName: 'close'
          //   }, { size: 'md'});
        }
      }, {
        key: "showMaterialModal",
        value: function showMaterialModal() {
          this.dialogService.open(_modals_test_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"], {
            context: {
              title: 'This is a title passed to the dialog component'
            }
          });
        }
<<<<<<< HEAD
=======
      }, {
        key: "backToSearch",
        value: function backToSearch() {
          this.router.navigate(['app/viewscammer']);
        }
>>>>>>> c5c8d768db983260b4219bb9a11e801b90a8f784
      }]);

      return LoginComponent;
    }();
    /***/

  },

  /***/
  "./src/app/login/login.module.ngfactory.js":
  /*!*************************************************!*\
    !*** ./src/app/login/login.module.ngfactory.js ***!
    \*************************************************/

  /*! exports provided: LoginModuleNgFactory */

  /***/
  function srcAppLoginLoginModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModuleNgFactory", function () {
      return LoginModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login.module */
    "./src/app/login/login.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
    "./node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/datepicker/index.ngfactory */
    "./node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _login_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.component.ngfactory */
    "./src/app/login/login.component.ngfactory.js");
    /* harmony import */


    var _modals_test_test_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modals/test/test.component.ngfactory */
    "./src/app/login/modals/test/test.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! angular2-toaster/src/toaster-container.component */
    "./node_modules/angular2-toaster/src/toaster-container.component.js");
    /* harmony import */


    var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! angular2-toaster/src/toaster.service */
    "./node_modules/angular2-toaster/src/toaster.service.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _nebular_security__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @nebular/security */
    "./node_modules/@nebular/security/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/fesm2015/button-toggle.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _login_routing_modules__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./login-routing.modules */
    "./src/app/login/login-routing.modules.ts");
    /* harmony import */


    var angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! angular2-toaster/src/toaster.module */
    "./node_modules/angular2-toaster/src/toaster.module.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var LoginModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbSearchFieldComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _login_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["LoginComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerComponentNgFactory"], _modals_test_test_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TestComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbRestoreScrollTopHelper"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSearchService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSearchService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_20__["ToasterContainerComponent"], angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_20__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_21__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbUserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCdkMappingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCdkMappingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCdkAdapterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCdkAdapterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbContextMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_security__WEBPACK_IMPORTED_MODULE_25__["NbSecurityModule"], _nebular_security__WEBPACK_IMPORTED_MODULE_25__["NbSecurityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOptionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_26__["NbEvaIconsModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_26__["NbEvaIconsModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_28__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_28__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _theme_theme_module__WEBPACK_IMPORTED_MODULE_35__["ThemeModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_35__["ThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _login_routing_modules__WEBPACK_IMPORTED_MODULE_36__["LoginRoutingModule"], _login_routing_modules__WEBPACK_IMPORTED_MODULE_36__["LoginRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_37__["ToasterModule"], angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_37__["ToasterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
        return [[{
          path: "",
          component: _login_component__WEBPACK_IMPORTED_MODULE_38__["LoginComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };
    /***/

  },

  /***/
  "./src/app/login/modals/test/test.component.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./src/app/login/modals/test/test.component.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: RenderType_TestComponent, View_TestComponent_0, View_TestComponent_Host_0, TestComponentNgFactory */

  /***/
  function srcAppLoginModalsTestTestComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TestComponent", function () {
      return RenderType_TestComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TestComponent_0", function () {
      return View_TestComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TestComponent_Host_0", function () {
      return View_TestComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponentNgFactory", function () {
      return TestComponentNgFactory;
    });
    /* harmony import */


    var _test_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./test.component.scss.shim.ngstyle */
    "./src/app/login/modals/test/test.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./test.component */
    "./src/app/login/modals/test/test.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TestComponent = [_test_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TestComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TestComponent,
      data: {}
    });

    function View_TestComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" TEST "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 3, 5, "nb-card-footer", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardFooterComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 3, "button", [["class", "mat-ripple"], ["hero", ""], ["matRipple", ""], ["nbButton", ""], ["status", "primary"]], [[2, "mat-ripple-unbounded", null], [2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.dismiss() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        status: [0, "status"],
        hero: [1, "hero"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Dismiss Dialog"]))], function (_ck, _v) {
        _ck(_v, 13, 0);

        var currVal_47 = "primary";
        var currVal_48 = "";

        _ck(_v, 14, 0, currVal_47, currVal_48);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _co.title;

        _ck(_v, 4, 0, currVal_20);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).unbounded;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).filled;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).outline;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ghost;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).hero;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).fullWidth;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tabbable;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tiny;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).small;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).medium;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).large;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).giant;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).primary;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).info;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).success;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).warning;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).danger;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).basic;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).control;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).rectangle;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).round;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).semiRound;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).iconLeft;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).iconRight;

        _ck(_v, 12, 1, [currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46]);
      });
    }

    function View_TestComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-test", [], null, null, null, View_TestComponent_0, RenderType_TestComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TestComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-test", _test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"], View_TestComponent_Host_0, {
      title: "title"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/login/modals/test/test.component.scss.shim.ngstyle.js":
  /*!***********************************************************************!*\
    !*** ./src/app/login/modals/test/test.component.scss.shim.ngstyle.js ***!
    \***********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppLoginModalsTestTestComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL21vZGFscy90ZXN0L3Rlc3QuY29tcG9uZW50LnNjc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/login/modals/test/test.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/login/modals/test/test.component.ts ***!
    \*****************************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppLoginModalsTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var TestComponent =
    /*#__PURE__*/
    function () {
      function TestComponent(ref) {
        _classCallCheck(this, TestComponent);

        this.ref = ref;
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.ref.close();
        }
      }]);

      return TestComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=app-login-login-module-ngfactory-es5.js.map
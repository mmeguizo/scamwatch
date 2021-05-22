function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-viewscammer-viewscammer-module-ngfactory"], {
  /***/
  "./src/app/viewscammer/viewscammer-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/viewscammer/viewscammer-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ViewScammerRoutingModule */

  /***/
  function srcAppViewscammerViewscammerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewScammerRoutingModule", function () {
      return ViewScammerRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _viewscammer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./viewscammer.component */
    "./src/app/viewscammer/viewscammer.component.ts");

    var routes = [{
      path: '',
      component: _viewscammer_component__WEBPACK_IMPORTED_MODULE_1__["ViewscammerComponent"]
    }];

    var ViewScammerRoutingModule = function ViewScammerRoutingModule() {
      _classCallCheck(this, ViewScammerRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/viewscammer/viewscammer.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/viewscammer/viewscammer.component.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: RenderType_ViewscammerComponent, View_ViewscammerComponent_0, View_ViewscammerComponent_Host_0, ViewscammerComponentNgFactory */

  /***/
  function srcAppViewscammerViewscammerComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ViewscammerComponent", function () {
      return RenderType_ViewscammerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ViewscammerComponent_0", function () {
      return View_ViewscammerComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ViewscammerComponent_Host_0", function () {
      return View_ViewscammerComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewscammerComponentNgFactory", function () {
      return ViewscammerComponentNgFactory;
    });
    /* harmony import */


    var _viewscammer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./viewscammer.component.scss.shim.ngstyle */
    "./src/app/viewscammer/viewscammer.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_pipes_dataFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@core/pipes/dataFilter */
    "./src/app/@core/pipes/dataFilter.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../node_modules/angular2-toaster/src/toaster-container.component.ngfactory */
    "./node_modules/angular2-toaster/src/toaster-container.component.ngfactory.js");
    /* harmony import */


    var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular2-toaster/src/toaster-container.component */
    "./node_modules/angular2-toaster/src/toaster-container.component.js");
    /* harmony import */


    var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular2-toaster/src/toaster.service */
    "./node_modules/angular2-toaster/src/toaster.service.js");
    /* harmony import */


    var angular2_datatable_lib_DataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-datatable/lib/DataTable */
    "./node_modules/angular2-datatable/lib/DataTable.js");
    /* harmony import */


    var angular2_datatable_lib_DataTable__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_datatable_lib_DataTable__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _node_modules_angular2_datatable_lib_BootstrapPaginator_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../node_modules/angular2-datatable/lib/BootstrapPaginator.ngfactory */
    "./node_modules/angular2-datatable/lib/BootstrapPaginator.ngfactory.js");
    /* harmony import */


    var angular2_datatable_lib_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular2-datatable/lib/BootstrapPaginator */
    "./node_modules/angular2-datatable/lib/BootstrapPaginator.js");
    /* harmony import */


    var angular2_datatable_lib_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_datatable_lib_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _viewscammer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./viewscammer.component */
    "./src/app/viewscammer/viewscammer.component.ts");
    /* harmony import */


    var _core_services_connection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../@core/services/connection.service */
    "./src/app/@core/services/connection.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ViewscammerComponent = [_viewscammer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ViewscammerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ViewscammerComponent,
      data: {}
    });

    function View_ViewscammerComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["class", "acenter error"], ["colspan", "4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Scammer found"]))], null, null);
    }

    function View_ViewscammerComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _v.context.$implicit == null ? null : _v.context.$implicit.name));

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit == null ? null : _v.context.$implicit.email;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _v.context.$implicit == null ? null : _v.context.$implicit.number;

        _ck(_v, 9, 0, currVal_3);
      });
    }

    function View_ViewscammerComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["class", "acenter error"], ["colspan", "4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Scammer found"]))], null, null);
    }

    function View_ViewscammerComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _v.context.$implicit == null ? null : _v.context.$implicit.name));

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit == null ? null : _v.context.$implicit.email;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _v.context.$implicit == null ? null : _v.context.$implicit.number;

        _ck(_v, 9, 0, currVal_3);
      });
    }

    function View_ViewscammerComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _core_pipes_dataFilter__WEBPACK_IMPORTED_MODULE_2__["dataFilterPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 67, "nb-layout", [["windowMode", ""]], [[2, "window-mode", null], [2, "with-scroll", null], [2, "with-subheader", null]], [["window", "scroll"], ["window", "resize"]], function (_v, en, $event) {
        var ad = true;

        if ("window:scroll" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onScroll($event) !== false;
          ad = pd_0 && ad;
        }

        if ("window:resize" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onResize($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbLayoutComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4374528, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NB_WINDOW"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NB_DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutDirectionService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutScrollService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutRulerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOverlayContainerAdapter"]], {
        windowMode: [0, "windowMode"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 5, "nb-layout-header", [["class", "centerme"], ["fixed", ""]], [[2, "fixed", null], [2, "subheader", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbLayoutHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbLayoutHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutHeaderComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"]], {
        fixed: [0, "fixed"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Scam Watch PH "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [["class", "logo"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "img", [["class", "chmsc-logo"], ["src", "../../assets//images/scam.png"], ["style", "width:7%;margin-left: 10px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 3, 59, "nb-layout-column", [], [[2, "left", null], [2, "start", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbLayoutColumnComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbLayoutColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 57, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "toaster-container", [], null, null, null, _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ToasterContainerComponent_0"], _node_modules_angular2_toaster_src_toaster_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ToasterContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 245760, null, 0, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_7__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        toasterconfig: [0, "toasterconfig"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 54, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 53, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 22, "nb-card-header", [["class", ""]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "div", [["class", "action-groups-header"], ["style", "float: left; clear: both"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Search Online "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 18, "nb-actions", [["size", "medium"], ["style", "float: right; font-size: 10px;"]], [[2, "full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbActionsComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsComponent"], [], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 5, "nb-action", [["class", "fas fa-search pointer"], ["nbPopover", "Click to Search"], ["nbPopoverPlacement", "bottom"], ["nbPopoverTrigger", "hint"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.search() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 4931584, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"]], {
        content: [0, "content"],
        position: [1, "position"],
        trigger: [2, "trigger"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \xA0 Search Online"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 5, "nb-action", [["class", "fas fa-sign-in-alt pointer"], ["nbPopover", "Login"], ["nbPopoverPlacement", "bottom"], ["nbPopoverTrigger", "hint"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.login() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4931584, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"]], {
        content: [0, "content"],
        position: [1, "position"],
        trigger: [2, "trigger"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \xA0 Account Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 4, "nb-action", [["icon", "printer-outline"], ["nbPopover", "Print"], ["nbPopoverPlacement", "bottom"], ["nbPopoverTrigger", "hint"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.print(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).data) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionComponent"], [], {
        icon: [0, "icon"],
        disabled: [1, "disabled"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 4931584, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDynamicOverlayHandler"]], {
        content: [0, "content"],
        position: [1, "position"],
        trigger: [2, "trigger"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 1, 28, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 0, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 25, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 0, "div", [["class", "clear"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 23, "table", [["class", "table"]], null, [[null, "mfSortByChange"], [null, "mfSortOrderChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mfSortByChange" === en) {
          var pd_0 = (_co.sortBy = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("mfSortOrderChange" === en) {
          var pd_1 = (_co.sortOrder = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 802816, [["mf", 4]], 0, angular2_datatable_lib_DataTable__WEBPACK_IMPORTED_MODULE_9__["DataTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        inputData: [0, "inputData"],
        sortBy: [1, "sortBy"],
        sortOrder: [2, "sortOrder"],
        rowsOnPage: [3, "rowsOnPage"]
      }, {
        sortByChange: "mfSortByChange",
        sortOrderChange: "mfSortOrderChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](48, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewscammerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewscammerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 5, "tfoot", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 3, "td", [["colspan", "10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 2, "mfBootstrapPaginator", [], null, null, null, _node_modules_angular2_datatable_lib_BootstrapPaginator_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_BootstrapPaginator_0"], _node_modules_angular2_datatable_lib_BootstrapPaginator_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_BootstrapPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 573440, null, 0, angular2_datatable_lib_BootstrapPaginator__WEBPACK_IMPORTED_MODULE_11__["BootstrapPaginator"], [], {
        rowsOnPageSet: [0, "rowsOnPageSet"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](69, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 21, "div", [["id", "receipt"], ["style", "display: none;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 20, "div", [["class", "receipt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "div", [["class", "col-sm-12 acenter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Scammer Watch "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 15, "table", [["class", "table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewscammerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewscammerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = "";

        _ck(_v, 3, 0, currVal_3);

        var currVal_6 = "";

        _ck(_v, 5, 0, currVal_6);

        var currVal_9 = _co.config;

        _ck(_v, 14, 0, currVal_9);

        var currVal_36 = "medium";

        _ck(_v, 23, 0, currVal_36);

        var currVal_38 = "Click to Search";
        var currVal_39 = "bottom";
        var currVal_40 = "hint";

        _ck(_v, 28, 0, currVal_38, currVal_39, currVal_40);

        var currVal_42 = "Login";
        var currVal_43 = "bottom";
        var currVal_44 = "hint";

        _ck(_v, 34, 0, currVal_42, currVal_43, currVal_44);

        var currVal_46 = "printer-outline";
        var currVal_47 = _co.printerButton;

        _ck(_v, 37, 0, currVal_46, currVal_47);

        var currVal_48 = "Print";
        var currVal_49 = "bottom";
        var currVal_50 = "hint";

        _ck(_v, 40, 0, currVal_48, currVal_49, currVal_50);

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 47, 0, _ck(_v, 48, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.scammer, _co.filterQuery, _co.selectQuery));

        var currVal_52 = _co.sortBy;
        var currVal_53 = _co.sortOrder;
        var currVal_54 = 10;

        _ck(_v, 47, 0, currVal_51, currVal_52, currVal_53, currVal_54);

        var currVal_55 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).data == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).data.length) < 1;

        _ck(_v, 61, 0, currVal_55);

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).data;

        _ck(_v, 63, 0, currVal_56);

        var currVal_57 = _ck(_v, 69, 0, 10, 20, 50, 100);

        _ck(_v, 68, 0, currVal_57);

        var currVal_58 = (_co.printingData == null ? null : _co.printingData.length) < 1;

        _ck(_v, 89, 0, currVal_58);

        var currVal_59 = _co.printingData;

        _ck(_v, 91, 0, currVal_59);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).windowModeValue;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).withScrollValue;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).withSubheader;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fixedValue;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).subheaderValue;

        _ck(_v, 4, 0, currVal_4, currVal_5);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).leftValue;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).startValue;

        _ck(_v, 10, 0, currVal_7, currVal_8);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).tiny;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).small;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).medium;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).large;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).giant;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).primary;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).info;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).success;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).warning;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).danger;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).basic;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).control;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).hasAccent;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).primaryAccent;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).infoAccent;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).successAccent;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).warningAccent;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).dangerAccent;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).basicAccent;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).controlAccent;

        _ck(_v, 16, 1, [currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).fullWidth;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).tiny;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).small;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).medium;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).large;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).giant;

        _ck(_v, 22, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35);

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).disabled;

        _ck(_v, 24, 0, currVal_37);

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled;

        _ck(_v, 30, 0, currVal_41);

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).disabled;

        _ck(_v, 36, 0, currVal_45);
      });
    }

    function View_ViewscammerComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-viewscammer", [], null, null, null, View_ViewscammerComponent_0, RenderType_ViewscammerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _viewscammer_component__WEBPACK_IMPORTED_MODULE_12__["ViewscammerComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogService"], _core_services_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModal"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ViewscammerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-viewscammer", _viewscammer_component__WEBPACK_IMPORTED_MODULE_12__["ViewscammerComponent"], View_ViewscammerComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/viewscammer/viewscammer.component.scss.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/viewscammer/viewscammer.component.scss.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppViewscammerViewscammerComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = [".zero[_ngcontent-%COMP%] {\n  background: #7FFFD4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.critical[_ngcontent-%COMP%] {\n  background: #ff0000c4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background: #ff0000c4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.low[_ngcontent-%COMP%] {\n  background: #ff8d00c4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.medium[_ngcontent-%COMP%] {\n  background: #0066ffc4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.good[_ngcontent-%COMP%] {\n  background: #007925c4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #007925c4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.overstocks[_ngcontent-%COMP%] {\n  background: #79004ec4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\n.tooMuchoverstocks[_ngcontent-%COMP%] {\n  background: #79004ec4;\n  color: white;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 0px;\n}\n\nspan.input-group-text[_ngcontent-%COMP%] {\n  background-color: #00d68f;\n  color: #fff;\n}\n\n.options[_ngcontent-%COMP%] {\n  color: #0080c0;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 11px;\n  text-align: right;\n}\n\n.options[_ngcontent-%COMP%]:hover {\n  color: #0080ff;\n  border-bottom: 2px dotted #0080c0;\n}\n\ni#button-alignment[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  cursor: pointer;\n  color: #3366ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3NjYW1tZXIvQzpcXFVzZXJzXFxtYXJrXFxEZXNrdG9wXFxjb2RpbmdcXHNjYW13YXRjaFxcYXBwL3NyY1xcYXBwXFx2aWV3c2NhbW1lclxcdmlld3NjYW1tZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzY2FtbWVyL3ZpZXdzY2FtbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RGOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ09KOztBREpBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDT0o7O0FESkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDT0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7QUNNSjs7QUREQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzY2FtbWVyL3ZpZXdzY2FtbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi56ZXJve1xuICBiYWNrZ3JvdW5kOiAjN0ZGRkQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5jcml0aWNhbHtcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwYzQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uaW5hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMGM0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmxvd3tcbiAgICBiYWNrZ3JvdW5kOiAjZmY4ZDAwYzQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4ubWVkaXVte1xuICAgIGJhY2tncm91bmQ6ICMwMDY2ZmZjNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5nb29ke1xuICAgIGJhY2tncm91bmQ6ICMwMDc5MjVjNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzAwNzkyNWM0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuLm92ZXJzdG9ja3N7XG4gICAgYmFja2dyb3VuZDogIzc5MDA0ZWM0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnRvb011Y2hvdmVyc3RvY2tze1xuICAgIGJhY2tncm91bmQ6ICM3OTAwNGVjNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuc3Bhbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkNjhmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ub3B0aW9uc3tcbiAgICBjb2xvcjogcmdiKDAsMTI4LDE5Mik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZToxMXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG59XG5cbi5vcHRpb25zOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMCwxMjgsMjU1KTtcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIHJnYigwLDEyOCwxOTIpO1xuXG59XG5cblxuaSNidXR0b24tYWxpZ25tZW50IHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMzMzY2ZmY7XG59XG5cbiIsIi56ZXJvIHtcbiAgYmFja2dyb3VuZDogIzdGRkZENDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jcml0aWNhbCB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDBjNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDBjNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5sb3cge1xuICBiYWNrZ3JvdW5kOiAjZmY4ZDAwYzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubWVkaXVtIHtcbiAgYmFja2dyb3VuZDogIzAwNjZmZmM0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmdvb2Qge1xuICBiYWNrZ3JvdW5kOiAjMDA3OTI1YzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwNzkyNWM0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLm92ZXJzdG9ja3Mge1xuICBiYWNrZ3JvdW5kOiAjNzkwMDRlYzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udG9vTXVjaG92ZXJzdG9ja3Mge1xuICBiYWNrZ3JvdW5kOiAjNzkwMDRlYzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5zcGFuLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkNjhmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9wdGlvbnMge1xuICBjb2xvcjogIzAwODBjMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm9wdGlvbnM6aG92ZXIge1xuICBjb2xvcjogIzAwODBmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDA4MGMwO1xufVxuXG5pI2J1dHRvbi1hbGlnbm1lbnQge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzMzNjZmZjtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/viewscammer/viewscammer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/viewscammer/viewscammer.component.ts ***!
    \******************************************************/

  /*! exports provided: ViewscammerComponent */

  /***/
  function srcAppViewscammerViewscammerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewscammerComponent", function () {
      return ViewscammerComponent;
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


    var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/search/search.component */
    "./src/app/shared/search/search.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"); // import { routerTransition } from '../router.animation';
    // import { AuthService } from '../@core/services/auth.service';
    // import { SharedGlobalService } from '../@core/services/shared.global.service';


    var ViewscammerComponent =
    /*#__PURE__*/
    function () {
      function ViewscammerComponent( // public sgs: SharedGlobalService,
      // public authService: AuthService,
      dialogService, cs, formBuilder, authService, router, toastr, ngbModal) {
        _classCallCheck(this, ViewscammerComponent);

        this.dialogService = dialogService;
        this.cs = cs;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.ngbModal = ngbModal;
        this.loader = false;
        this.data = [];
        this.scammer = [];
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
          showCloseButton: true,
          tapToDismiss: false,
          timeout: 2000
        });
        this.printerButton = false;
        this.filterQuery = '';
        this.sortBy = 'id';
        this.sortOrder = 'desc';
        this.selectQueryString = 'ID';
        this.selectQuery = 'id';
        this.processing = false; // sgs.setBrowserTitle.emit('Login');

        this.createForm();
      }

      _createClass(ViewscammerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/login']);
        }
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
        key: "search",
        value: function search() {
          var _this = this;

          var activeModal = this.ngbModal.open(_shared_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], {
            size: 'sm',
            container: 'nb-layout',
            windowClass: 'min_height',
            'backdrop': 'static'
          });
          activeModal.componentInstance.passEntry.subscribe(function (receivedEntry) {
            //this.types.push(receivedEntry);
            console.log(receivedEntry);

            if (receivedEntry) {
              _this.scammer.push(receivedEntry);

              _this.toastr.pop('warning', 'Alert', 'Scammer Match');
            } else {
              _this.scammer = [];

              _this.toastr.pop('success', 'No Data Returned', 'No scammer Found');
            } // this.getAllTypes();

          });
        } // Functiont to submit form and login user

      }, {
        key: "showBootstrapModal",
        value: function showBootstrapModal() {}
      }, {
        key: "print",
        value: function print(data) {
          this.printingData = data;

          if (this.printingData) {
            this.printerButton = true;
          }

          setTimeout(function () {
            var printContents, popupWin;
            printContents = document.getElementById('receipt').innerHTML;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
            popupWin.document.open();
            popupWin.document.write("\n      <html>\n      <head>\n        <title>Print</title>\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n        <style>\n        .body-content {\n          font-family: verdana;\n        }\n        .body-content div:first-child {\n          padding-bottom: 5px !important;\n        }\n        .acenter{\n          text-align: center;\n        }\n        .aright{\n          text-align: right;\n        }\n        #print-section {\n          height: 8in;\n        }\n        .receipt{\n          font-size: 25pt;\n          font-family: verdana;\n        }\n        .clearMore{\n          margin-top: 30px;\n        }\n        .border-dotted {\n          width: 100%;\n          border: 1px black dashed;\n        }\n        @media print {\n          @page {\n            margin-left: 2mm;\n            margin-top: 0mm;\n            size: portrait;\n          }\n        }\n        </style>\n      </head>\n      <body onload=\"window.print();window.close()\">\n        <div class=\"col-sm-12 col-12\" id=\"print-section\">\n          <div id=\"page\">\n           ".concat(printContents, "\n          </div>\n        </div>\n      </body>\n    </html>"));
            popupWin.document.close();
          }, 500);
        }
      }]);

      return ViewscammerComponent;
    }();
    /***/

  },

  /***/
  "./src/app/viewscammer/viewscammer.module.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/viewscammer/viewscammer.module.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: ViewscammerModuleNgFactory */

  /***/
  function srcAppViewscammerViewscammerModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewscammerModuleNgFactory", function () {
      return ViewscammerModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _viewscammer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./viewscammer.module */
    "./src/app/viewscammer/viewscammer.module.ts");
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


    var _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory */
    "./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js");
    /* harmony import */


    var _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../node_modules/ngx-bootstrap/datepicker/ngx-bootstrap-datepicker.ngfactory */
    "./node_modules/ngx-bootstrap/datepicker/ngx-bootstrap-datepicker.ngfactory.js");
    /* harmony import */


    var _node_modules_ngx_bootstrap_tooltip_ngx_bootstrap_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../node_modules/ngx-bootstrap/tooltip/ngx-bootstrap-tooltip.ngfactory */
    "./node_modules/ngx-bootstrap/tooltip/ngx-bootstrap-tooltip.ngfactory.js");
    /* harmony import */


    var _shared_confirmation_modal_confirmation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/confirmation-modal/confirmation-modal.component.ngfactory */
    "./src/app/shared/confirmation-modal/confirmation-modal.component.ngfactory.js");
    /* harmony import */


    var _shared_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/search/search.component.ngfactory */
    "./src/app/shared/search/search.component.ngfactory.js");
    /* harmony import */


    var _viewscammer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./viewscammer.component.ngfactory */
    "./src/app/viewscammer/viewscammer.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /* harmony import */


    var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-bootstrap/component-loader */
    "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-bootstrap/timepicker */
    "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _core_pipes_dataFilter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../@core/pipes/dataFilter */
    "./src/app/@core/pipes/dataFilter.ts");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! angular2-toaster/src/toaster-container.component */
    "./node_modules/angular2-toaster/src/toaster-container.component.js");
    /* harmony import */


    var angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! angular2-toaster/src/toaster.service */
    "./node_modules/angular2-toaster/src/toaster.service.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _nebular_security__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @nebular/security */
    "./node_modules/@nebular/security/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/fesm2015/button-toggle.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var angular2_datatable_lib_DataTableModule__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! angular2-datatable/lib/DataTableModule */
    "./node_modules/angular2-datatable/lib/DataTableModule.js");
    /* harmony import */


    var angular2_datatable_lib_DataTableModule__WEBPACK_IMPORTED_MODULE_50___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_datatable_lib_DataTableModule__WEBPACK_IMPORTED_MODULE_50__);
    /* harmony import */


    var ngx_timeago__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ngx-timeago */
    "./node_modules/ngx-timeago/fesm2015/ngx-timeago.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _viewscammer_routing_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./viewscammer-routing.module */
    "./src/app/viewscammer/viewscammer-routing.module.ts");
    /* harmony import */


    var angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! angular2-toaster/src/toaster.module */
    "./node_modules/angular2-toaster/src/toaster.module.js");
    /* harmony import */


    var _viewscammer_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./viewscammer.component */
    "./src/app/viewscammer/viewscammer.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var ViewscammerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_viewscammer_module__WEBPACK_IMPORTED_MODULE_1__["ViewscammerModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbSearchFieldComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarDayCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarMonthCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarYearCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarRangeDayCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarRangeMonthCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarRangeYearCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbCalendarRangeComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbDatepickerContainerComponentNgFactory"], _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["BsDropdownContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerComponentNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵkNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵqNgFactory"], _node_modules_ngx_bootstrap_datepicker_ngx_bootstrap_datepicker_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵrNgFactory"], _node_modules_ngx_bootstrap_tooltip_ngx_bootstrap_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TooltipContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbDialogContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbWindowsContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbWindowComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbPopoverComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NbTooltipComponentNgFactory"], _shared_confirmation_modal_confirmation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ConfirmationModalComponentNgFactory"], _shared_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["SearchComponentNgFactory"], _viewscammer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["ViewscammerComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbRestoreScrollTopHelper"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSearchService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSearchService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDateService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbNativeDateService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarMonthModelService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarMonthModelService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarYearModelService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarYearModelService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDirectionality"], null, [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridSortService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridSortService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridFilterService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridFilterService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridDataService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridDataService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridDataSourceBuilder"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridDataSourceBuilder"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridFilterService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridSortService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridDataService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_24__["PositioningService"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_24__["PositioningService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_25__["ComponentLoaderFactory"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_25__["ComponentLoaderFactory"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_24__["PositioningService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["ɵm"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["ɵm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["ɵo"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["ɵo"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDaterangepickerConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDaterangepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerInlineConfig"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerInlineConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsLocaleService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsLocaleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["ɵn"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["ɵn"], [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["ɵo"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsLocaleService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerConfig"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerActions"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerActions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerStore"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipConfig"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbMenuService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbMenuService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["ɵa"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDialogService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDialogService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NB_DIALOG_CONFIG"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbWindowService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbWindowService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOverlayService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOverlayPositionBuilder"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbBlockScrollStrategyAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NB_WINDOW_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_pipes_dataFilter__WEBPACK_IMPORTED_MODULE_29__["ReverseDate"], _core_pipes_dataFilter__WEBPACK_IMPORTED_MODULE_29__["ReverseDate"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_pipes_dataFilter__WEBPACK_IMPORTED_MODULE_29__["unReverseDate"], _core_pipes_dataFilter__WEBPACK_IMPORTED_MODULE_29__["unReverseDate"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_30__["BsDropdownState"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_30__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_31__["ToasterContainerComponent"], angular2_toaster_src_toaster_container_component__WEBPACK_IMPORTED_MODULE_31__["ToasterContainerComponent"], [angular2_toaster_src_toaster_service__WEBPACK_IMPORTED_MODULE_32__["ToasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbUserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkMappingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkMappingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkAdapterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCdkAdapterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOverlayModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbContextMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_security__WEBPACK_IMPORTED_MODULE_39__["NbSecurityModule"], _nebular_security__WEBPACK_IMPORTED_MODULE_39__["NbSecurityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOptionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_40__["NbEvaIconsModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_40__["NbEvaIconsModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_42__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_42__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_43__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_43__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_44__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_44__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _theme_theme_module__WEBPACK_IMPORTED_MODULE_49__["ThemeModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_49__["ThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarKitModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarKitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbBaseCalendarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbBaseCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarRangeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbCalendarRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_30__["BsDropdownModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_30__["BsDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_datatable_lib_DataTableModule__WEBPACK_IMPORTED_MODULE_50__["DataTableModule"], angular2_datatable_lib_DataTableModule__WEBPACK_IMPORTED_MODULE_50__["DataTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_27__["TimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbBidiModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbBidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTreeGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbWindowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbPopoverModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_timeago__WEBPACK_IMPORTED_MODULE_51__["TimeagoModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_51__["TimeagoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_52__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_52__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NbThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _viewscammer_routing_module__WEBPACK_IMPORTED_MODULE_53__["ViewScammerRoutingModule"], _viewscammer_routing_module__WEBPACK_IMPORTED_MODULE_53__["ViewScammerRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_54__["ToasterModule"], angular2_toaster_src_toaster_module__WEBPACK_IMPORTED_MODULE_54__["ToasterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _viewscammer_module__WEBPACK_IMPORTED_MODULE_1__["ViewscammerModule"], _viewscammer_module__WEBPACK_IMPORTED_MODULE_1__["ViewscammerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NB_DIALOG_CONFIG"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__["NB_WINDOW_CONFIG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () {
        return [[{
          path: "",
          component: _viewscammer_component__WEBPACK_IMPORTED_MODULE_55__["ViewscammerComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_30__["BsDropdownConfig"], {
        autoClose: true,
        insideClick: false
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/viewscammer/viewscammer.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/viewscammer/viewscammer.module.ts ***!
    \***************************************************/

  /*! exports provided: ViewscammerModule */

  /***/
  function srcAppViewscammerViewscammerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewscammerModule", function () {
      return ViewscammerModule;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbPopoverModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCalendarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbAccordionModule"]];

    var ViewscammerModule = function ViewscammerModule() {
      _classCallCheck(this, ViewscammerModule);
    }; // import { NgModule } from '@angular/core';
    // import { CommonModule } from '@angular/common';
    // @NgModule({
    //   declarations: [],
    //   imports: [
    //     CommonModule
    //   ]
    // })
    // export class ViewscammerModule { }

    /***/

  }
}]);
//# sourceMappingURL=app-viewscammer-viewscammer-module-ngfactory-es5.js.map
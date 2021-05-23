function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-viewscammer-viewscammer-module-ngfactory"], {
  /***/
  "./node_modules/@angular/material/card/index.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/card/index.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: MatCardModuleNgFactory, RenderType_MatCard, View_MatCard_0, View_MatCard_Host_0, MatCardNgFactory, RenderType_MatCardHeader, View_MatCardHeader_0, View_MatCardHeader_Host_0, MatCardHeaderNgFactory, RenderType_MatCardTitleGroup, View_MatCardTitleGroup_0, View_MatCardTitleGroup_Host_0, MatCardTitleGroupNgFactory */

  /***/
  function node_modulesAngularMaterialCardIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardModuleNgFactory", function () {
      return MatCardModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatCard", function () {
      return RenderType_MatCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCard_0", function () {
      return View_MatCard_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCard_Host_0", function () {
      return View_MatCard_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardNgFactory", function () {
      return MatCardNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatCardHeader", function () {
      return RenderType_MatCardHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCardHeader_0", function () {
      return View_MatCardHeader_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCardHeader_Host_0", function () {
      return View_MatCardHeader_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardHeaderNgFactory", function () {
      return MatCardHeaderNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatCardTitleGroup", function () {
      return RenderType_MatCardTitleGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCardTitleGroup_0", function () {
      return View_MatCardTitleGroup_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatCardTitleGroup_Host_0", function () {
      return View_MatCardTitleGroup_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardTitleGroupNgFactory", function () {
      return MatCardTitleGroupNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatCardModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], [])]);
    });

    var styles_MatCard = [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"];

    var RenderType_MatCard = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatCard,
      data: {}
    });

    function View_MatCard_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], null, null);
    }

    function View_MatCard_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-card", [["class", "mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, View_MatCard_0, RenderType_MatCard)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var MatCardNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-card", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], View_MatCard_Host_0, {}, {}, ["*", "mat-card-footer"]);

    var styles_MatCardHeader = [];

    var RenderType_MatCardHeader = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatCardHeader,
      data: {}
    });

    function View_MatCardHeader_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "mat-card-header-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2)], null, null);
    }

    function View_MatCardHeader_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, View_MatCardHeader_0, RenderType_MatCardHeader)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], [], null, null)], null, null);
    }

    var MatCardHeaderNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-card-header", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], View_MatCardHeader_Host_0, {}, {}, ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"]);

    var styles_MatCardTitleGroup = [];

    var RenderType_MatCardTitleGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatCardTitleGroup,
      data: {}
    });

    function View_MatCardTitleGroup_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2)], null, null);
    }

    function View_MatCardTitleGroup_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, View_MatCardTitleGroup_0, RenderType_MatCardTitleGroup)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitleGroup"], [], null, null)], null, null);
    }

    var MatCardTitleGroupNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-card-title-group", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitleGroup"], View_MatCardTitleGroup_Host_0, {}, {}, ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"]);
    /***/

  },

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


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/card/index.ngfactory */
    "./node_modules/@angular/material/card/index.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _viewscammer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./viewscammer.component */
    "./src/app/viewscammer/viewscammer.component.ts");
    /* harmony import */


    var _core_services_connection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../@core/services/connection.service */
    "./src/app/@core/services/connection.service.ts");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _services_infor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../services/infor.service */
    "./src/app/services/infor.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
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

    function View_ViewscammerComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Number of results: ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.scammers.length;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_ViewscammerComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "mat-card", [["class", "mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 13, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "div", [["class", "example-header-image mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["Search word : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 2, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"], ["style", "color : red"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\"The online account has been reported by a complaint who appeared to ACG office and filed a formal complaint\""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 2, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_ViewscammerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "img", [["alt", "Photo of a Shiba Inu"], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "../../assets/images/download.png"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 10, "mat-card-actions", [["class", "mat-card-actions"]], [[4, "display", null], [4, "justify-content", null], [2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["REPORT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["SHARE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = (_co.isScammer = false) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["CLOSE"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.scammers.length;

        _ck(_v, 15, 0, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.titleInfo;

        _ck(_v, 8, 0, currVal_1);

        var currVal_3 = "flex";
        var currVal_4 = "space-between";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).align === "end";

        _ck(_v, 18, 0, currVal_3, currVal_4, currVal_5);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

        _ck(_v, 20, 0, currVal_6, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationMode === "NoopAnimations";

        _ck(_v, 23, 0, currVal_8, currVal_9);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled || null;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._animationMode === "NoopAnimations";

        _ck(_v, 26, 0, currVal_10, currVal_11);
      });
    }

    function View_ViewscammerComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "mat-card", [["class", "example-card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 9, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "div", [["class", "example-header-image mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["Search word : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No results found!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "img", [["alt", "Photo of a Shiba Inu"], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "../../assets/images/download.gif"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 4, "mat-card-actions", [["class", "mat-card-actions"]], [[4, "display", null], [4, "justify-content", null], [2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = (_co.isScammer = false) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["CLOSE"]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.titleInfo;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = "flex";
        var currVal_3 = "flex-end";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).align === "end";

        _ck(_v, 14, 0, currVal_2, currVal_3, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled || null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._animationMode === "NoopAnimations";

        _ck(_v, 16, 0, currVal_5, currVal_6);
      });
    }

    function View_ViewscammerComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 36, "nb-layout", [["windowMode", ""]], [[2, "window-mode", null], [2, "with-scroll", null], [2, "with-subheader", null]], [["window", "scroll"], ["window", "resize"]], function (_v, en, $event) {
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
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NbLayoutComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NbLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NB_WINDOW"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NB_DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutDirectionService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutScrollService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutRulerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayContainerAdapter"]], {
        windowMode: [0, "windowMode"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 24, "nb-layout-header", [["class", "centerme"], ["fixed", ""]], [[2, "fixed", null], [2, "subheader", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NbLayoutHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NbLayoutHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutHeaderComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutComponent"]], {
        fixed: [0, "fixed"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["class", "logo"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["class", "chmsc-logo"], ["src", "../../assets//images/scam.png"], ["style", "width:13%;margin-left: -17px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Scam Watch PH "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 4, "div", [["class", "container"]], [[4, "align-items", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Click Search icon....."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "nb-search", [["tag", "modal-half"], ["type", "modal-half"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NbSearchComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NbSearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 245760, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSearchComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSearchService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        tag: [0, "tag"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 13, "div", [], [[4, "align-items", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 12, "nb-actions", [["size", "medium"], ["style", "float: right; font-size: 10px;"]], [[2, "full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NbActionsComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NbActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionsComponent"], [], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 5, "nb-action", [["class", "fas fa-sign-in-alt pointer"], ["nbPopover", "Login"], ["nbPopoverPlacement", "bottom"], ["nbPopoverTrigger", "hint"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.login() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4931584, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbPopoverDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlayHandler"]], {
        content: [0, "content"],
        position: [1, "position"],
        trigger: [2, "trigger"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \xA0 Account Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 4, "nb-action", [["icon", "printer-outline"], ["nbPopover", "Print"], ["nbPopoverPlacement", "bottom"], ["nbPopoverTrigger", "hint"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.print(_co.data) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NbActionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NbActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionComponent"], [], {
        icon: [0, "icon"],
        disabled: [1, "disabled"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlay"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlayHandler"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlayHandler"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 4931584, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbPopoverDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDynamicOverlayHandler"]], {
        content: [0, "content"],
        position: [1, "position"],
        trigger: [2, "trigger"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 3, 9, "nb-layout-column", [["class", "superawesome"]], [[2, "left", null], [2, "start", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NbLayoutColumnComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NbLayoutColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutColumnComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 7, "div", [["class", "row"]], [[4, "margin-top", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewscammerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ViewscammerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "div", [["class", "col-md-4"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = "";

        _ck(_v, 1, 0, currVal_3);

        var currVal_6 = "";

        _ck(_v, 3, 0, currVal_6);

        var currVal_8 = "modal-half";
        var currVal_9 = "modal-half";

        _ck(_v, 12, 0, currVal_8, currVal_9);

        var currVal_17 = "medium";

        _ck(_v, 15, 0, currVal_17);

        var currVal_19 = "Login";
        var currVal_20 = "bottom";
        var currVal_21 = "hint";

        _ck(_v, 20, 0, currVal_19, currVal_20, currVal_21);

        var currVal_23 = "printer-outline";
        var currVal_24 = _co.printerButton;

        _ck(_v, 23, 0, currVal_23, currVal_24);

        var currVal_25 = "Print";
        var currVal_26 = "bottom";
        var currVal_27 = "hint";

        _ck(_v, 26, 0, currVal_25, currVal_26, currVal_27);

        var currVal_31 = _co.isScammer && _co.scammers.length;

        _ck(_v, 33, 0, currVal_31);

        var currVal_32 = _co.isScammer && !_co.scammers.length;

        _ck(_v, 35, 0, currVal_32);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).windowModeValue;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).withScrollValue;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).withSubheader;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).fixedValue;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).subheaderValue;

        _ck(_v, 2, 0, currVal_4, currVal_5);

        var currVal_7 = "center";

        _ck(_v, 8, 0, currVal_7);

        var currVal_10 = "right";

        _ck(_v, 13, 0, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).fullWidth;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).tiny;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).small;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).medium;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).large;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).giant;

        _ck(_v, 14, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled;

        _ck(_v, 16, 0, currVal_18);

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled;

        _ck(_v, 22, 0, currVal_22);

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).leftValue;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).startValue;

        _ck(_v, 27, 0, currVal_28, currVal_29);

        var currVal_30 = "90px";

        _ck(_v, 29, 0, currVal_30);
      });
    }

    function View_ViewscammerComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-viewscammer", [], null, null, null, View_ViewscammerComponent_0, RenderType_ViewscammerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _viewscammer_component__WEBPACK_IMPORTED_MODULE_12__["ViewscammerComponent"], [_core_services_connection_service__WEBPACK_IMPORTED_MODULE_13__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbToastrService"], _services_search_service__WEBPACK_IMPORTED_MODULE_14__["SearchService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSearchService"], _services_infor_service__WEBPACK_IMPORTED_MODULE_15__["InfoService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]], null, null)], function (_ck, _v) {
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


    var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Inconsolata:700\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  background: #252525;\n}\n.container[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 300px;\n  height: 100px;\n}\n.container[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 180px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 67px;\n  height: 67px;\n  background: crimson;\n  border-radius: 50%;\n  transition: all 1s;\n  z-index: 4;\n  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);\n}\n.container[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  margin: auto;\n  top: 22px;\n  right: 0;\n  bottom: 0;\n  left: 22px;\n  width: 12px;\n  height: 2px;\n  background: white;\n  transform: rotate(45deg);\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  margin: auto;\n  top: -5px;\n  right: 0;\n  bottom: 0;\n  left: -5px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 2px solid white;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Inconsolata\", monospace;\n  position: absolute;\n  margin: auto;\n  top: 180px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 50px;\n  outline: none;\n  border: none;\n  background: crimson;\n  color: white;\n  text-shadow: 0 0 10px crimson;\n  padding: 0 80px 0 20px;\n  border-radius: 30px;\n  box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);\n  transition: all 1s;\n  opacity: 0;\n  z-index: 5;\n  font-weight: bolder;\n  letter-spacing: 0.1em;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  width: 300px;\n  opacity: 1;\n  cursor: text;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .search[_ngcontent-%COMP%] {\n  right: -250px;\n  background: #151515;\n  z-index: 6;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .search[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  width: 25px;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .search[_ngcontent-%COMP%]::after {\n  top: 0;\n  left: 0;\n  width: 25px;\n  height: 2px;\n  border: none;\n  background: white;\n  border-radius: 0%;\n  transform: rotate(-45deg);\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: white;\n  opacity: 0.5;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: white;\n  opacity: 0.5;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: white;\n  opacity: 0.5;\n  font-weight: bolder;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('scammer.png');\n  background-size: cover;\n}\n.superawesome[_ngcontent-%COMP%] {\n  background-image: url('security.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n}\nmat-card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 10px 10px 10px 10px;\n  align-items: center;\n}\n.main-div[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3NjYW1tZXIvQzpcXFVzZXJzXFxtYXJrXFxEZXNrdG9wXFxjb2RpbmdcXHNjYW13YXRjaFxcYXBwL3NyY1xcYXBwXFx2aWV3c2NhbW1lclxcdmlld3NjYW1tZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzY2FtbWVyL3ZpZXdzY2FtbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZLHNFQUFBO0FBRVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDSE47QURNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0FDSE47QURNSTtFQUVFLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNKTjtBREtNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0FDSFI7QURLUTtFQUNFLGVBQUE7QUNIVjtBREtRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQ0hWO0FES1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDSFY7QURNTTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnRUFBQTtFQUdBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUFI7QURRUTtFQUNFLGVBQUE7QUNOVjtBRFFRO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDTlY7QURRUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNOVjtBRE9VO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDTFo7QURPVTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDTFo7QURRUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNOVjtBREdRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05WO0FER1E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTlY7QURZTTtFQUNFLG9DQUFBO0VBQ0Qsc0JBQUE7QUNUUDtBRFlNO0VBRUUscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsa0NBQUE7RUFDQSw0QkFBQTtBQ1hSO0FEY0s7RUFDRyxlQUFBO0VBQ0EsMkJBQUE7RUFLQSxtQkFBQTtBQ2ZSO0FEaUJLO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZE4iLCJmaWxlIjoic3JjL2FwcC92aWV3c2NhbW1lci92aWV3c2NhbW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUluY29uc29sYXRhOjcwMCcpO1xyXG5cclxuICAgICoge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCwgYm9keSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0b3A6MTgwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDY3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDAgMCAyNXB4IDAgY3JpbXNvbjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGxlZnQ6IDIycHg7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdG9wOjE4MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBjcmltc29uO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgODBweCAwIDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjVweCAwIGNyaW1zb24sXHJcbiAgICAgICAgICAgICAgICAgICAgMCAyMHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZvY3VzIH4gLnNlYXJjaCB7XHJcbiAgICAgICAgICByaWdodDogLTI1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE1MTUxNTtcclxuICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2NhbW1lci5wbmcnKTtcclxuICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdXBlcmF3ZXNvbWUge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VjdXJpdHkuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgLy9vcGFjaXR5OiAwLjUwO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgIG1hdC1jYXJke1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHggO1xyXG4gICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvL2hlaWdodDogMTAwdmg7XHJcbiAgICAgICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICB9XHJcbiAgICAgLm1haW4tZGl2e1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5jb25zb2xhdGE6NzAwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMjUyNTI1O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5jb250YWluZXIgLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDE4MHB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNjdweDtcbiAgaGVpZ2h0OiA2N3B4O1xuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgei1pbmRleDogNDtcbiAgYm94LXNoYWRvdzogMCAwIDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uY29udGFpbmVyIC5zZWFyY2g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDIycHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDIycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC5zZWFyY2g6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogLTVweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogLTVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIiwgbW9ub3NwYWNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAxODBweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCBjcmltc29uO1xuICBwYWRkaW5nOiAwIDgwcHggMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjVweCAwIGNyaW1zb24sIDAgMjBweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cbi5jb250YWluZXIgaW5wdXQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHRleHQ7XG59XG4uY29udGFpbmVyIGlucHV0OmZvY3VzIH4gLnNlYXJjaCB7XG4gIHJpZ2h0OiAtMjUwcHg7XG4gIGJhY2tncm91bmQ6ICMxNTE1MTU7XG4gIHotaW5kZXg6IDY7XG59XG4uY29udGFpbmVyIGlucHV0OmZvY3VzIH4gLnNlYXJjaDo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjVweDtcbn1cbi5jb250YWluZXIgaW5wdXQ6Zm9jdXMgfiAuc2VhcmNoOjphZnRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2NhbW1lci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zdXBlcmF3ZXNvbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NlY3VyaXR5LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tZGl2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"];
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _core_services_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@core/services/connection.service */
    "./src/app/@core/services/connection.service.ts");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _services_infor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/infor.service */
    "./src/app/services/infor.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ViewscammerComponent =
    /*#__PURE__*/
    function () {
      function ViewscammerComponent(cs, router, toaster, searchService, nbsearch, info_service, auth) {
        _classCallCheck(this, ViewscammerComponent);

        this.cs = cs;
        this.router = router;
        this.toaster = toaster;
        this.searchService = searchService;
        this.nbsearch = nbsearch;
        this.info_service = info_service;
        this.auth = auth;
        this.loader = false;
        this.titleInfo = '';
        this.data = [];
        this.scammers = [];
        this.isScammer = false;
        this.printerButton = false;
        this.filterQuery = '';
        this.sortBy = 'id';
        this.sortOrder = 'desc';
        this.selectQueryString = 'ID';
        this.selectQuery = 'id';
        this.index = 0;
        this.click = 0;
      }

      _createClass(ViewscammerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.nbsearch.onSearchSubmit().subscribe(function (data) {
            console.log(data);
            _this.searchInformation = data.term;

            _this.searchInfo(data.term);
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/login']);
        }
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
      }, {
        key: "searchInfo",
        value: function searchInfo(data) {
          var _this2 = this;

          this.click += 1;
          this.titleInfo = data;

          if (this.click > 5) {
            this.toaster.show('Please wait for 5 sec!', 'Warning!', {
              status: 'warning'
            });
            setTimeout(function () {
              _this2.click = 0;
            }, 5000);
          } else {
            this.info_service.searchInformation(data).subscribe(function (res) {
              console.log(res);

              if (res.success && res.data.length) {
                _this2.scammers = res.data;
              } else {
                _this2.scammers = [];
              }

              _this2.isScammer = true;
            });
          }
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
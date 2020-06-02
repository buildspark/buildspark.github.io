(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usage-usage-module"],{

/***/ "./src/app/usage/usage.module.ts":
/*!***************************************!*\
  !*** ./src/app/usage/usage.module.ts ***!
  \***************************************/
/*! exports provided: UsagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsagePageModule", function() { return UsagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usage.page */ "./src/app/usage/usage.page.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");


















































var UsagePageModule = /** @class */ (function () {
    function UsagePageModule() {
    }
    UsagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_48__["HttpClientModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _usage_page__WEBPACK_IMPORTED_MODULE_6__["UsagePage"]
                    }
                ])
            ],
            declarations: [_usage_page__WEBPACK_IMPORTED_MODULE_6__["UsagePage"]]
        })
    ], UsagePageModule);
    return UsagePageModule;
}());



/***/ }),

/***/ "./src/app/usage/usage.page.html":
/*!***************************************!*\
  !*** ./src/app/usage/usage.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Usage\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-fab-button size=\"small\" (click)=\"selectMachine()\">\n        <ion-icon name=\"list-box\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-fab-button size=\"small\" (click)=\"exportEmail()\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-select [interfaceOptions]=\"customActionSheetOptions\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Select\" #popSelect\n  [hidden]=\"true\" [(ngModel)]=\"arrSelectedMachines\" (ionChange)=\"optionsFn()\">\n  <ion-select-option *ngFor=\"let machine of arrMachines\" value=\"{{machine.value}}\">{{machine.name}}\n  </ion-select-option>\n  <button (click)=\"selectAll(popSelect);\">select all</button>\n</ion-select> -->\n\n<ion-content>\n\n  <mat-tab-group #tabGroup [selectedIndex]=\"selectedTab\" (selectedTabChange)=\"onTabChanged($event)\">\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"example-tab-icon\">query_builder</mat-icon>\n        Daily\n      </ng-template>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n              From\n              <ion-item>\n                <ion-datetime displayFormat=\"DD MMM YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"dailyReqModel.datefrom\" (ionChange)=\"onFromDailyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              To\n              <ion-item>\n                <ion-datetime displayFormat=\"DD MMM YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"dailyReqModel.dateto\" (ionChange)=\"onToDailyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col class=\"center-ver\" size=\"auto\">\n            <ion-button (click)=\"onViewDailyDateClicked()\">View data</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <chart-canvas *ngFor=\"let chart of arrDailyCharts;\" [data]=\"chart\" [title]=\"strChartTitle\"></chart-canvas>\n\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"example-tab-icon\">calendar_today</mat-icon>\n        Monthly\n      </ng-template>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n              From\n              <ion-item>\n                <ion-datetime displayFormat=\"MMM, YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"monthlyReqModel.datefrom\" (ionChange)=\"onFromMonthlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              To\n              <ion-item>\n                <ion-datetime displayFormat=\"MMM, YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"monthlyReqModel.dateto\" (ionChange)=\"onToMonthlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col class=\"center-ver\" size=\"auto\">\n            <ion-button (click)=\"onViewMonthlyDateClicked()\">View data</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <chart-canvas *ngFor=\"let chart of arrMonthlyCharts;\" [data]=\"chart\" [title]=\"strChartTitle\"></chart-canvas>\n\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"example-tab-icon\">trending_up</mat-icon>\n        Yearly\n      </ng-template>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n              From\n              <ion-item>\n                <ion-datetime displayFormat=\"YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"yearlyReqModel.datefrom\" (ionChange)=\"onFromYearlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              To\n              <ion-item>\n                <ion-datetime displayFormat=\"YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"yearlyReqModel.dateto\" (ionChange)=\"onToYearlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col class=\"center-ver\" size=\"auto\">\n            <ion-button (click)=\"onViewYearlyDateClicked()\">View data</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <chart-canvas *ngFor=\"let chart of arrYearlyCharts;\" [data]=\"chart\" [title]=\"strChartTitle\"></chart-canvas>\n\n    </mat-tab>\n  </mat-tab-group>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/usage/usage.page.scss":
/*!***************************************!*\
  !*** ./src/app/usage/usage.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\np.text-center {\n  text-align: center; }\n\n.example-tab-icon {\n  margin-right: 8px; }\n\n.center-ver {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvdXNhZ2UvdXNhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHdCQUF1QjtFQUN2QixnQ0FBK0I7RUFDL0IsOEJBQTZCO0VBQzdCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzYWdlL3VzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxucC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtdGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNlbnRlci12ZXIge1xuICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/usage/usage.page.ts":
/*!*************************************!*\
  !*** ./src/app/usage/usage.page.ts ***!
  \*************************************/
/*! exports provided: UsagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsagePage", function() { return UsagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/select-machine/select-machine.component */ "./src/app/shared/select-machine/select-machine.component.ts");
/* harmony import */ var _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");













__webpack_require__(/*! chartjs-plugin-stacked100 */ "./node_modules/chartjs-plugin-stacked100/src/index.js");
var UsagePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsagePage, _super);
    function UsagePage(loadingCtrl, alertCtrl, service, storage, modalController, router) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.modalController = modalController;
        _this.router = router;
        _this.strChartTitle = '';
        _this.arrDailyCharts = [];
        _this.arrMonthlyCharts = [];
        _this.arrYearlyCharts = [];
        _this.customActionSheetOptions = {
            header: 'Machines',
            subHeader: 'Select the machine(s) you want to view'
        };
        _this.arrMachines = [];
        _this.arrSelectedMachines = [];
        _this.selectedTab = 0;
        _this.accessToken = '';
        _this.deviceReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["AccessTokenModel"]();
        _this.dailyReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["UsageOrImpressionModel"]();
        _this.monthlyReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["UsageOrImpressionModel"]();
        _this.yearlyReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["UsageOrImpressionModel"]();
        _this.currentDate = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD");
        // yesterdayDate: string = moment().add(-1, 'days').format("YYYY-MM-DD");
        _this.minDate = _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].c_MIN_DATE_2019;
        _this.checkBoxList = [];
        _this.strChartTitle = _this.router.url.replace(/[^a-zA-Z0-9 ]/g, "");
        _this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.accessToken = accessToken;
            _this.deviceReqModel.accesstoken = accessToken;
            _this.dailyReqModel.accesstoken = accessToken;
            // this.dailyReqModel.datefrom = this.standardDateTime(this.yesterdayDate);
            // this.dailyReqModel.dateto = this.standardDateTime(this.yesterdayDate);
            _this.monthlyReqModel.accesstoken = accessToken;
            // this.monthlyReqModel.datefrom = this.standardDateTime(this.currentDate);
            // this.monthlyReqModel.dateto = this.standardDateTime(this.currentDate);
            _this.yearlyReqModel.accesstoken = accessToken;
            // this.yearlyReqModel.datefrom = this.standardDateTime(this.currentDate);
            // this.yearlyReqModel.dateto = this.standardDateTime(this.currentDate);
            _this.setDataAvailableDate();
            _this.service.presentLoading(true);
            _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_GET_DEVICE, _this.deviceReqModel, function (res) {
                if (res.status_code == 0 /* Success */) {
                    _this.arrMachines = JSON.parse(res.data);
                    _this.arrMachines.forEach(function (element) {
                        if (element === _this.arrMachines[0]) {
                            _this.checkBoxList.push({ 'machine': element, 'isChecked': true });
                        }
                        else {
                            _this.checkBoxList.push({ 'machine': element, 'isChecked': false });
                        }
                    });
                    _this.arrSelectedMachines.push(_this.arrMachines[0].value);
                    _this.dailyReqModel.device = _this.arrSelectedMachines.join(",");
                    _this.monthlyReqModel.device = _this.arrSelectedMachines.join(",");
                    _this.yearlyReqModel.device = _this.arrSelectedMachines.join(",");
                    _this.callWSToReloadPagesData();
                }
            }, false);
        });
        return _this;
    }
    UsagePage.prototype.callWSToReloadPagesData = function () {
        var _this = this;
        var response1 = this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_DAILY_USAGE, this.dailyReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrDailyCharts = JSON.parse(res.data);
            }
        }, false);
        var response2 = this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_MONTHLY_USAGE, this.monthlyReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrMonthlyCharts = JSON.parse(res.data);
            }
        }, false);
        var response3 = this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_YEARLY_USAGE, this.yearlyReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrYearlyCharts = JSON.parse(res.data);
            }
        }, false);
        this.service.callWebServiceSimultaneously([response1, response2, response3]).finally(function () {
            _this.service.dismissLoading();
        });
    };
    UsagePage.prototype.onFromDailyUsageSelected = function (item) {
        var from = Date.parse(this.dailyReqModel.datefrom);
        var to = Date.parse(this.dailyReqModel.dateto);
        if (from > to) {
            this.dailyReqModel.dateto = this.dailyReqModel.datefrom;
        }
    };
    UsagePage.prototype.onToDailyUsageSelected = function (item) {
        var from = Date.parse(this.dailyReqModel.datefrom);
        var to = Date.parse(this.dailyReqModel.dateto);
        if (to < from) {
            this.dailyReqModel.datefrom = this.dailyReqModel.dateto;
        }
    };
    UsagePage.prototype.onFromMonthlyUsageSelected = function (item) {
        var from = Date.parse(this.monthlyReqModel.datefrom);
        var to = Date.parse(this.monthlyReqModel.dateto);
        if (from > to) {
            this.monthlyReqModel.dateto = this.monthlyReqModel.datefrom;
        }
    };
    UsagePage.prototype.onToMonthlyUsageSelected = function (item) {
        var from = Date.parse(this.monthlyReqModel.datefrom);
        var to = Date.parse(this.monthlyReqModel.dateto);
        if (to < from) {
            this.monthlyReqModel.datefrom = this.monthlyReqModel.dateto;
        }
    };
    UsagePage.prototype.onFromYearlyUsageSelected = function (item) {
        var from = Date.parse(this.yearlyReqModel.datefrom);
        var to = Date.parse(this.yearlyReqModel.dateto);
        if (from > to) {
            this.yearlyReqModel.dateto = this.yearlyReqModel.datefrom;
        }
    };
    UsagePage.prototype.onToYearlyUsageSelected = function (item) {
        var from = Date.parse(this.yearlyReqModel.datefrom);
        var to = Date.parse(this.yearlyReqModel.dateto);
        if (to < from) {
            this.yearlyReqModel.datefrom = this.yearlyReqModel.dateto;
        }
    };
    UsagePage.prototype.selectMachine = function () {
        // this.isSelectMachine = !this.isSelectMachine;
        // this.selectPop.open()
        // this.service.getWebService(Constants.k_GET_DEVICE, this.deviceReqModel, (res) => {
        //   this.arrMachines = JSON.parse(res.data);
        //   // Use a timeout to gice some time to Angular
        //   // to update the view. The amount of time is not
        //   // important; it's just to run the code async
        //   setTimeout(() => {
        //     // Open the select
        //     this.selectPop.open()
        //   }, 100);
        // });
        this.presentModal();
    };
    UsagePage.prototype.selectAll = function (select) {
        // do what you want
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('selectselectselect: ', select);
    };
    UsagePage.prototype.optionsFn = function () {
        this.dailyReqModel.device = this.arrSelectedMachines.join(",");
        this.monthlyReqModel.device = this.arrSelectedMachines.join(",");
        this.yearlyReqModel.device = this.arrSelectedMachines.join(",");
        this.callWSToReloadPagesData();
    };
    UsagePage.prototype.onTabChanged = function (tabChangeEvent) {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('tabChangeEvent => ', tabChangeEvent);
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('index => ', tabChangeEvent.index);
        // this.optionsFn(null)
    };
    UsagePage.prototype.onViewDailyDateClicked = function () {
        var _this = this;
        this.dailyReqModel.datefrom = this.standardDateTime(this.dailyReqModel.datefrom);
        this.dailyReqModel.dateto = this.standardDateTime(this.dailyReqModel.dateto);
        this.service.presentLoading(true);
        this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_DAILY_USAGE, this.dailyReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrDailyCharts = JSON.parse(res.data);
            }
            _this.service.dismissLoading();
        }, false);
    };
    UsagePage.prototype.onViewMonthlyDateClicked = function () {
        var _this = this;
        this.monthlyReqModel.datefrom = this.standardDateTime(this.monthlyReqModel.datefrom);
        this.monthlyReqModel.dateto = this.standardDateTime(this.monthlyReqModel.dateto);
        this.service.presentLoading(true);
        this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_MONTHLY_USAGE, this.monthlyReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrMonthlyCharts = JSON.parse(res.data);
            }
            _this.service.dismissLoading();
        }, false);
    };
    UsagePage.prototype.onViewYearlyDateClicked = function () {
        var _this = this;
        this.yearlyReqModel.datefrom = this.standardDateTime(this.yearlyReqModel.datefrom);
        this.yearlyReqModel.dateto = this.standardDateTime(this.yearlyReqModel.dateto);
        this.service.presentLoading(true);
        this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_YEARLY_USAGE, this.yearlyReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrYearlyCharts = JSON.parse(res.data);
            }
            _this.service.dismissLoading();
        }, false);
    };
    UsagePage.prototype.random_rgb = function () {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    };
    UsagePage.prototype.standardDateTime = function (dateString) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(dateString).format("YYYY-MM-DD");
    };
    UsagePage.prototype.setDataAvailableDate = function () {
        var standardFormat = "YYYY-MM-DD";
        var today = new Date(this.currentDate);
        this.dailyReqModel.datefrom = this.standardDateTime(moment__WEBPACK_IMPORTED_MODULE_6__(today).add(-1, 'days').format(standardFormat));
        this.dailyReqModel.dateto = this.standardDateTime(moment__WEBPACK_IMPORTED_MODULE_6__(today).add(-1, 'days').format(standardFormat));
        if (today.getDate() == 1) {
            this.monthlyReqModel.datefrom = moment__WEBPACK_IMPORTED_MODULE_6__(today).add(-1, 'months').format(standardFormat).toString();
            this.monthlyReqModel.dateto = moment__WEBPACK_IMPORTED_MODULE_6__(today).add(-1, 'months').format(standardFormat).toString();
        }
        else {
            today.setDate(1);
            this.monthlyReqModel.datefrom = moment__WEBPACK_IMPORTED_MODULE_6__(today).format(standardFormat).toString();
            this.monthlyReqModel.dateto = moment__WEBPACK_IMPORTED_MODULE_6__(today).format(standardFormat).toString();
        }
        if (today.getMonth() == 0) {
            this.yearlyReqModel.datefrom = moment__WEBPACK_IMPORTED_MODULE_6__(today).add(-1, 'years').format(standardFormat).toString();
            this.yearlyReqModel.dateto = moment__WEBPACK_IMPORTED_MODULE_6__(today).add(-1, 'years').format(standardFormat).toString();
        }
        else {
            today.setMonth(0);
            this.yearlyReqModel.datefrom = moment__WEBPACK_IMPORTED_MODULE_6__(today).format(standardFormat).toString();
            this.yearlyReqModel.dateto = moment__WEBPACK_IMPORTED_MODULE_6__(today).format(standardFormat).toString();
        }
    };
    UsagePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_9__["SelectMachineComponent"],
                            componentProps: {
                                "checkBoxList": this.checkBoxList,
                                "paramTitle": "Select Machine"
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null && dataReturned.data !== undefined) {
                                // this.dataReturned = dataReturned.data;
                                _this.arrSelectedMachines = [];
                                dataReturned.data.forEach(function (element) {
                                    if (element.isChecked) {
                                        _this.arrSelectedMachines.push(element.machine.value);
                                    }
                                });
                                _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('--- Modal SELECTED Data: ', _this.arrSelectedMachines);
                                _this.optionsFn();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabGroup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsagePage.prototype, "tabGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSelect"])
    ], UsagePage.prototype, "selectPop", void 0);
    UsagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usage',
            template: __webpack_require__(/*! ./usage.page.html */ "./src/app/usage/usage.page.html"),
            styles: [__webpack_require__(/*! ./usage.page.scss */ "./src/app/usage/usage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], UsagePage);
    return UsagePage;
}(_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_10__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=usage-usage-module.js.map
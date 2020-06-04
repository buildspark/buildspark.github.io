(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wip-wip-module"],{

/***/ "./src/app/wip/wip.module.ts":
/*!***********************************!*\
  !*** ./src/app/wip/wip.module.ts ***!
  \***********************************/
/*! exports provided: WipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WipPageModule", function() { return WipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wip.page */ "./src/app/wip/wip.page.ts");
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


















































var WipPageModule = /** @class */ (function () {
    function WipPageModule() {
    }
    WipPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                        component: _wip_page__WEBPACK_IMPORTED_MODULE_6__["WipPage"]
                    }
                ])
            ],
            declarations: [_wip_page__WEBPACK_IMPORTED_MODULE_6__["WipPage"]]
        })
    ], WipPageModule);
    return WipPageModule;
}());



/***/ }),

/***/ "./src/app/wip/wip.page.html":
/*!***********************************!*\
  !*** ./src/app/wip/wip.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <ion-back-button></ion-back-button>\n      <!-- <ion-button (click)=\"onClicked()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title>\n      WIP\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-fab-button size=\"small\" (click)=\"selectMachine()\">\n        <ion-icon name=\"list-box\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\">\n      <ion-fab-button size=\"small\" (click)=\"downloadcsv()\">\n        <ion-icon name=\"download\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\">\n          <div class=\"vertical-align-content\">\n            <p>{{ isPack ? 'Packaging' : 'Non-Packaging' }}</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-toggle style=\"float: right;\" (ionChange)=\"updatePackaging($event)\" [checked]=\"isPack\"></ion-toggle>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <mat-tab-group #tabGroup [selectedIndex]=\"selectedTab\" (selectedTabChange)=\"onTabChanged($event)\">\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"example-tab-icon\">query_builder</mat-icon>\n        Hourly\n      </ng-template>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n              On this day\n              <ion-item>\n                <ion-datetime displayFormat=\"DD MMM YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"wipPackReqModel.date\" (ionChange)=\"onWipHourlySelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col class=\"center-ver\" size=\"auto\">\n            <ion-button (click)=\"onViewWIPDateClicked()\">View data</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <chart-canvas [hidden]=\"isPack == true\" *ngFor=\"let chart of arrDailyCharts;\" [data]=\"chart\" [title]=\"strChartTitle\"></chart-canvas>\n\n      <chart-canvas [hidden]=\"isPack == false\" *ngFor=\"let chart of arrDailyNonPackCharts;\" [data]=\"chart\" [title]=\"strChartTitle\"></chart-canvas>\n\n    </mat-tab>\n\n    <!-- <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"example-tab-icon\">query_builder</mat-icon>\n        Daily\n      </ng-template>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n              On this day\n              <ion-item>\n                <ion-datetime displayFormat=\"DD MMM YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"wipPackReqModel.date\" (ionChange)=\"onWipHourlySelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col class=\"center-ver\" size=\"auto\">\n            <ion-button (click)=\"onViewWIPDateClicked()\">View date</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <chart-canvas *ngFor=\"let chart of arrDailyCharts;\" [data]=\"chart\" [title]=\"strChartTitle\"></chart-canvas>\n\n    </mat-tab> -->\n\n    <!-- <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"example-tab-icon\">calendar_today</mat-icon>\n        Monthly\n      </ng-template>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n              From\n              <ion-item>\n                <ion-datetime displayFormat=\"MMM YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"monthlyReqModel.datefrom\" (ionChange)=\"onFromMonthlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              To\n              <ion-item>\n                <ion-datetime displayFormat=\"MMM YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"monthlyReqModel.dateto\" (ionChange)=\"onToMonthlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col class=\"center-ver\" size=\"auto\">\n            <ion-button (click)=\"onViewMonthlyDateClicked()\">View date</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <chart-canvas *ngFor=\"let chart of arrMonthlyCharts;\" [data]=\"chart\"  [title]=\"strChartTitle\"></chart-canvas>\n\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"example-tab-icon\">trending_up</mat-icon>\n        Yearly\n      </ng-template>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>\n              From\n              <ion-item>\n                <ion-datetime displayFormat=\"YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"yearlyReqModel.datefrom\" (ionChange)=\"onFromYearlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              To\n              <ion-item>\n                <ion-datetime displayFormat=\"YYYY\" min={{minDate}} max={{currentDate}}\n                  [(ngModel)]=\"yearlyReqModel.dateto\" (ionChange)=\"onToYearlyUsageSelected($event)\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col class=\"center-ver\" size=\"auto\">\n            <ion-button (click)=\"onViewYearlyDateClicked()\">View date</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <chart-canvas *ngFor=\"let chart of arrYearlyCharts;\" [data]=\"chart\"  [title]=\"strChartTitle\"></chart-canvas>\n\n    </mat-tab> -->\n  </mat-tab-group>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/wip/wip.page.scss":
/*!***********************************!*\
  !*** ./src/app/wip/wip.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\np.text-center {\n  text-align: center; }\n\n.example-tab-icon {\n  margin-right: 8px; }\n\n.vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important; }\n\n.center-ver {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvd2lwL3dpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBRUssd0JBQXVCO0VBQ3ZCLGdDQUErQjtFQUMvQiw4QkFBNkIsRUFBQTs7QUFHbEM7RUFDSSx3QkFBdUI7RUFDdkIsZ0NBQStCO0VBQy9CLDhCQUE2QjtFQUM3QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93aXAvd2lwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnAudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtdGFiLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcbntcbiAgICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyLXZlciB7XG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/wip/wip.page.ts":
/*!*********************************!*\
  !*** ./src/app/wip/wip.page.ts ***!
  \*********************************/
/*! exports provided: WipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WipPage", function() { return WipPage; });
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
var WipPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WipPage, _super);
    function WipPage(loadingCtrl, alertCtrl, service, storage, loadingController, modalController, router, route) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.loadingController = loadingController;
        _this.modalController = modalController;
        _this.router = router;
        _this.route = route;
        _this.strChartTitle = '';
        _this.arrDailyCharts = [];
        _this.arrDailyNonPackCharts = [];
        _this.arrMonthlyCharts = [];
        _this.arrYearlyCharts = [];
        _this.customActionSheetOptions = {
            header: 'Machines',
            subHeader: 'Select the machine(s) you want to view'
        };
        _this.arrDept = [];
        // arrSelectedDept: Array<any> = [];
        _this.selectedTab = 0;
        _this.accessToken = '';
        _this.deptReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["AccessTokenModel"]();
        _this.wipPackReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["WIPModel"](1 /* WIP */);
        _this.wipNonPackReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["WIPModel"](1 /* WIP */);
        _this.monthlyReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["UsageOrImpressionModel"]();
        _this.yearlyReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["UsageOrImpressionModel"]();
        // emailReqModel: EmailModel = new EmailModel(WSTypeCode.WIP);
        _this.downloadCSVReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_4__["DownloadCSVModel"](1 /* WIP */);
        _this.currentDate = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD");
        _this.yesterdayDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(-1, 'days').format("YYYY-MM-DD");
        _this.minDate = _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].c_MIN_DATE_2020;
        _this.checkBoxList = [];
        _this.isPack = true;
        _this.strChartTitle = _this.router.url.replace(/[^a-zA-Z0-9 ]/g, "");
        _this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.accessToken = accessToken;
            _this.deptReqModel.accesstoken = accessToken;
            _this.downloadCSVReqModel.accesstoken = accessToken;
            // this.monthlyReqModel.accesstoken = accessToken;
            // this.monthlyReqModel.datefrom = this.standardDateTime(this.currentDate);
            // this.monthlyReqModel.dateto = this.standardDateTime(this.currentDate);
            // this.yearlyReqModel.accesstoken = accessToken;
            // this.yearlyReqModel.datefrom = this.standardDateTime(this.currentDate);
            // this.yearlyReqModel.dateto = this.standardDateTime(this.currentDate);
            // this.wipPackReqModel.accesstoken = accessToken;
            // this.wipPackReqModel.date = this.standardDateTime(this.currentDate);
            // this.service.getWebService(Constants.k_GET_DEPT, this.deptReqModel, (res) => {
            //   this.arrDept = JSON.parse(res.data);
            //   this.arrDept.forEach(element => {
            //     if (element === this.arrDept[0]) {
            //       this.checkBoxList.push({'machine' : element, 'isChecked' : true})
            //     } else {
            //       this.checkBoxList.push({'machine' : element, 'isChecked' : false})
            //     }
            //   });
            //   config.log("checkBoxList: ", this.checkBoxList);
            //   // this.arrSelectedMachines = Array.prototype.map.call(this.arrMachines, function (item) { return item.value; })
            //   this.wipPackReqModel.dept.push(this.arrDept[0].value);
            //   this.monthlyReqModel.device = this.wipPackReqModel.dept.join(",");
            //   this.yearlyReqModel.device = this.wipPackReqModel.dept.join(",");
            //   this.callWSToReloadPagesData();        
            // });
            // if (this.data) {
            //   this.wipPackReqModel.dept = [];
            //   this.data.forEach(element => {
            //     if (element.isChecked) {
            //       this.wipPackReqModel.dept.push(element.dept.value)
            //     }
            //   });
            //   this.callWSToReloadPagesData();
            // }
        });
        if (_this.route.snapshot.data['special']) {
            _this.wipPackReqModel = Object.assign({}, _this.route.snapshot.data['special']);
            _this.wipNonPackReqModel = Object.assign({}, _this.route.snapshot.data['special']);
            _this.downloadCSVReqModel.dept = _this.wipPackReqModel.dept;
            _this.downloadCSVReqModel.process = _this.wipPackReqModel.process;
            _this.wipPackReqModel.packaging = 1 /* Pack */;
            _this.wipNonPackReqModel.packaging = 0 /* NonPack */;
            _this.callWSToReloadPagesData();
        }
        return _this;
    }
    WipPage.prototype.ngOnInit = function () {
        // if (this.route.snapshot.data['special']) {
        //   this.wipPackReqModel = this.route.snapshot.data['special'];
        //   config.log("GET DATA FROM PROCESS: ", JSON.stringify([this.wipPackReqModel]));
        //   this.callWSToReloadPagesData();
        // }
    };
    WipPage.prototype.ionViewDidEnter = function () {
    };
    WipPage.prototype.callWSToReloadPagesData = function () {
        var _this = this;
        this.arrDailyCharts = [];
        this.arrDailyNonPackCharts = [];
        var response1 = this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_HOURLY_WIP, this.wipPackReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrDailyCharts = JSON.parse(res.data);
            }
        }, false);
        var response2 = this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_HOURLY_WIP, this.wipNonPackReqModel, function (res) {
            if (res && res.data && res.data != '' && res.data != '-') {
                _this.arrDailyNonPackCharts = JSON.parse(res.data);
            }
        }, false);
        this.service.callWebServiceSimultaneously([response1, response2]);
    };
    WipPage.prototype.onWipHourlySelected = function (item) {
    };
    WipPage.prototype.onFromMonthlyUsageSelected = function (item) {
        var from = Date.parse(this.monthlyReqModel.datefrom);
        var to = Date.parse(this.monthlyReqModel.dateto);
        if (from > to) {
            this.monthlyReqModel.dateto = this.monthlyReqModel.datefrom;
        }
    };
    WipPage.prototype.onToMonthlyUsageSelected = function (item) {
        var from = Date.parse(this.monthlyReqModel.datefrom);
        var to = Date.parse(this.monthlyReqModel.dateto);
        if (to < from) {
            this.monthlyReqModel.datefrom = this.monthlyReqModel.dateto;
        }
    };
    WipPage.prototype.onFromYearlyUsageSelected = function (item) {
        var from = Date.parse(this.yearlyReqModel.datefrom);
        var to = Date.parse(this.yearlyReqModel.dateto);
        if (from > to) {
            this.yearlyReqModel.dateto = this.yearlyReqModel.datefrom;
        }
    };
    WipPage.prototype.onToYearlyUsageSelected = function (item) {
        var from = Date.parse(this.yearlyReqModel.datefrom);
        var to = Date.parse(this.yearlyReqModel.dateto);
        if (to < from) {
            this.yearlyReqModel.datefrom = this.yearlyReqModel.dateto;
        }
    };
    WipPage.prototype.updatePackaging = function ($event) {
        this.isPack = !this.isPack;
    };
    WipPage.prototype.selectMachine = function () {
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
    WipPage.prototype.optionsFn = function () {
        this.monthlyReqModel.device = this.wipPackReqModel.dept.join(",");
        this.yearlyReqModel.device = this.wipPackReqModel.dept.join(",");
        this.callWSToReloadPagesData();
    };
    WipPage.prototype.onTabChanged = function (tabChangeEvent) {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('tabChangeEvent => ', tabChangeEvent);
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('index => ', tabChangeEvent.index);
        // this.optionsFn(null)
    };
    WipPage.prototype.onViewWIPDateClicked = function () {
        this.wipPackReqModel.date = this.standardDateTime(this.wipPackReqModel.date);
        this.wipNonPackReqModel.date = this.wipPackReqModel.date;
        // this.service.presentLoading();
        // this.service.callWebService(Constants.k_HOURLY_WIP, this.wipPackReqModel, (res) => {
        //   if (res && res.data && res.data != '' && res.data != '-') {
        //     this.arrDailyCharts = JSON.parse(res.data);
        //   }
        //   this.service.dismissLoading();
        // }, false);
        this.callWSToReloadPagesData();
    };
    WipPage.prototype.random_rgb = function () {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    };
    WipPage.prototype.standardDateTime = function (dateString) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(dateString).format("YYYY-MM-DD");
    };
    WipPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _shared_select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_9__["SelectMachineComponent"],
                            componentProps: {
                                "checkBoxList": this.checkBoxList,
                                "paramTitle": "Select Department"
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null && dataReturned.data !== undefined) {
                                // this.dataReturned = dataReturned.data;
                                _this.wipPackReqModel.dept = [];
                                dataReturned.data.forEach(function (element) {
                                    if (element.isChecked) {
                                        _this.wipPackReqModel.dept.push(element.machine.value);
                                    }
                                });
                                _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('--- Modal SELECTED Data: ', _this.wipPackReqModel.dept);
                                _this.optionsFn();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WipPage.prototype.onClicked = function () {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log("BACK");
    };
    WipPage.prototype.downloadcsv = function () {
        var _this = this;
        _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_10__["BasePagePage"].presentAlert('Extract Data', 'Are you sure want to extract data as file to your local storage?', function (res) {
            // config.log('hi, ai am here: ', res.data.values.email);
            _this.downloadCSVReqModel.date = _this.wipPackReqModel.date;
            _this.service.presentLoading();
            _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].k_DOWNLOAD_CSV, _this.downloadCSVReqModel, function (res) {
                if (res && res.data && res.data != '' && res.data != '-') {
                    var arr = JSON.parse(res.data);
                    var filepath = arr[0];
                    var fullpath = /*Constants.k_ROOT_DOMAIN_URL + "/" +*/ filepath.filepath;
                    window.open(fullpath, '_system');
                }
                _this.service.dismissLoading();
            }, false);
        }, [_data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].b_CANCEL, _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["Constants"].b_OK] /*, [{
          name: 'email',
          type: 'email',
          placeholder: 'Recipient email here'
        }]*/);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabGroup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WipPage.prototype, "tabGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSelect"])
    ], WipPage.prototype, "selectPop", void 0);
    WipPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wip',
            template: __webpack_require__(/*! ./wip.page.html */ "./src/app/wip/wip.page.html"),
            styles: [__webpack_require__(/*! ./wip.page.scss */ "./src/app/wip/wip.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], WipPage);
    return WipPage;
}(_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_10__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=wip-wip-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine-machine-module"],{

/***/ "./src/app/machine/machine.module.ts":
/*!*******************************************!*\
  !*** ./src/app/machine/machine.module.ts ***!
  \*******************************************/
/*! exports provided: MachinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinePageModule", function() { return MachinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _machine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./machine.page */ "./src/app/machine/machine.page.ts");
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

















































var MachinePageModule = /** @class */ (function () {
    function MachinePageModule() {
    }
    MachinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _machine_page__WEBPACK_IMPORTED_MODULE_6__["MachinePage"]
                    }
                ])
            ],
            declarations: [_machine_page__WEBPACK_IMPORTED_MODULE_6__["MachinePage"]]
        })
    ], MachinePageModule);
    return MachinePageModule;
}());



/***/ }),

/***/ "./src/app/machine/machine.page.html":
/*!*******************************************!*\
  !*** ./src/app/machine/machine.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Changing Time\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list-header color=\"light\">\n        <ion-label>Data for September 2019</ion-label>\n    </ion-list-header>\n\n    <ion-card class=\"welcome-card\">\n\n        <ion-card-header>\n            <ion-card-subtitle>Percentage of Changing Time Based On</ion-card-subtitle>\n            <ion-card-title>Device Name</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <canvas #hrzBarChart5></canvas>\n        </ion-card-content>\n    </ion-card>\n\n    <!-- <ion-card>\n        <ion-button (click)=\"callWS()\">THIS IS A BUTTON</ion-button>\n    </ion-card> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/machine/machine.page.scss":
/*!*******************************************!*\
  !*** ./src/app/machine/machine.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\np.text-center {\n  text-align: center; }\n\n.example-tab-icon {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvbWFjaGluZS9tYWNoaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hY2hpbmUvbWFjaGluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5wLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXRhYi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/machine/machine.page.ts":
/*!*****************************************!*\
  !*** ./src/app/machine/machine.page.ts ***!
  \*****************************************/
/*! exports provided: MachinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinePage", function() { return MachinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








__webpack_require__(/*! chartjs-plugin-stacked100 */ "./node_modules/chartjs-plugin-stacked100/src/index.js");
var MachinePage = /** @class */ (function () {
    function MachinePage(service, storage, alertController) {
        var _this = this;
        this.service = service;
        this.storage = storage;
        this.alertController = alertController;
        this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["Constants"].c_ACCESS_TOKEN).then(function (val) {
            _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_4__["Constants"].k_DAILY_USAGE, new _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["UsageOrImpressionModel"](val, 'GL373', '2019-09-01', '2019-09-30'), function (res) {
                var arrJSON = JSON.parse(res.data);
                var strItem = arrJSON[0];
                var strJSON = strItem["data"];
                _this.deviceData = JSON.parse(strJSON);
                console.log("\n\n\nDATA: ", _this.deviceData, "\n\n\n");
            });
        });
    }
    MachinePage.prototype.ionViewDidEnter = function () {
        this.generateColorArray(10);
        this.createHrzBarChart5(this.deviceData);
    };
    MachinePage.prototype.generateColorArray = function (num) {
        this.colorArray = [];
        for (var i = 0; i < num; i++) {
            this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        }
    };
    MachinePage.prototype.createHrzBarChart5 = function (dataInput) {
        var ctx = this.hrzBarChart5.nativeElement;
        ctx.height = 400;
        this.hrzBars5 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
            type: 'bar',
            // data: datta,
            data: {
                labels: dataInput.labels,
                datasets: dataInput.datasets
            },
            options: {
                scales: {
                    xAxes: [{
                            barPercentage: 0.9,
                            gridLines: {
                                offsetGridLines: true
                            },
                            stacked: true
                        }],
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            stacked: true
                        }]
                }
                // plugins: {
                //   stacked100: { enable: true }
                // },
                //   scales: {
                //     yAxes: [{
                //         ticks: {
                //             min: 0,
                //             max: 100,
                //             callback: function(value) {
                //                 return value + "%"
                //             }
                //         },
                //         stacked: true,
                //         scaleLabel: {
                //             display: true,
                //             labelString: "Percentage"
                //         }
                //     }],
                //     xAxes: [{
                //       stacked: true
                //     }]
                //  }
            }
        });
    };
    MachinePage.prototype.onClick = function () {
    };
    MachinePage.prototype.random_rgb = function () {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    };
    MachinePage.prototype.presentAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            subHeader: '',
                            message: message,
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hrzBarChart5'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MachinePage.prototype, "hrzBarChart5", void 0);
    MachinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-machine',
            template: __webpack_require__(/*! ./machine.page.html */ "./src/app/machine/machine.page.html"),
            styles: [__webpack_require__(/*! ./machine.page.scss */ "./src/app/machine/machine.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], MachinePage);
    return MachinePage;
}());



/***/ })

}]);
//# sourceMappingURL=machine-machine-module.js.map
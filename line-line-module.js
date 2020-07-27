(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["line-line-module"],{

/***/ "./src/app/line/line.module.ts":
/*!*************************************!*\
  !*** ./src/app/line/line.module.ts ***!
  \*************************************/
/*! exports provided: LinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePageModule", function() { return LinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _line_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line.page */ "./src/app/line/line.page.ts");







var LinePageModule = /** @class */ (function () {
    function LinePageModule() {
    }
    LinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _line_page__WEBPACK_IMPORTED_MODULE_6__["LinePage"]
                    }
                ])
            ],
            declarations: [_line_page__WEBPACK_IMPORTED_MODULE_6__["LinePage"]]
        })
    ], LinePageModule);
    return LinePageModule;
}());



/***/ }),

/***/ "./src/app/line/line.page.html":
/*!*************************************!*\
  !*** ./src/app/line/line.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Line Charts with Chart.js\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header color=\"light\">Simple Area Chart</ion-list-header>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Number of Viewers per season for</ion-card-subtitle>\n      <ion-card-title>Game of Thrones</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineChart></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-list-header color=\"light\">Simple Line Chart</ion-list-header>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Number of Viewers per season for</ion-card-subtitle>\n      <ion-card-title>Game of Thrones</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #hrzLineChart></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list-header color=\"light\">Grouped Line Chart</ion-list-header>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Number of Viewers per season for</ion-card-subtitle>\n      <ion-card-title>Game of Thrones</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #hrzLineChart2></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list-header color=\"light\">Grouped Area Chart with custom height</ion-list-header>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Number of Viewers per season for</ion-card-subtitle>\n      <ion-card-title>Game of Thrones</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #hrzLineChart3></canvas>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/line/line.page.scss":
/*!*************************************!*\
  !*** ./src/app/line/line.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvaW5zaWdodC9zcmMvYXBwL2xpbmUvbGluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saW5lL2xpbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/line/line.page.ts":
/*!***********************************!*\
  !*** ./src/app/line/line.page.ts ***!
  \***********************************/
/*! exports provided: LinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePage", function() { return LinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



var LinePage = /** @class */ (function () {
    function LinePage() {
    }
    LinePage.prototype.ionViewDidEnter = function () {
        this.createAreaChart();
        this.createSimpleLineChart();
        this.createGroupLineChart();
        this.createHrzLineChart3();
    };
    LinePage.prototype.createAreaChart = function () {
        this.lines = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'Viewers in millions',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    LinePage.prototype.createSimpleLineChart = function () {
        this.hrzLines = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.hrzLineChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'Viewers in millions',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    LinePage.prototype.createGroupLineChart = function () {
        this.hrzLines2 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.hrzLineChart2.nativeElement, {
            type: 'line',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'Online viewers in millions',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    },
                    {
                        label: 'Offline viewers in millions',
                        data: [1.5, 2.8, 3, 4.9, 4.9, 5.5, 7, 12],
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgb(242, 38, 19)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    LinePage.prototype.createHrzLineChart3 = function () {
        var ctx = this.hrzLineChart3.nativeElement;
        ctx.height = 400;
        this.hrzLines3 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
            type: 'line',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'Online viewers in millions',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: 'rgb(242, 38, 19)',
                        borderColor: 'rgb(242, 38, 19)',
                        borderWidth: 1
                    },
                    {
                        label: 'Offline viewers in millions',
                        data: [1.5, 2.8, 3, 4.9, 4.9, 5.5, 7, 12],
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            stacked: true
                        }]
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinePage.prototype, "lineChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hrzLineChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinePage.prototype, "hrzLineChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hrzLineChart2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinePage.prototype, "hrzLineChart2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hrzLineChart3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinePage.prototype, "hrzLineChart3", void 0);
    LinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-line',
            template: __webpack_require__(/*! ./line.page.html */ "./src/app/line/line.page.html"),
            styles: [__webpack_require__(/*! ./line.page.scss */ "./src/app/line/line.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinePage);
    return LinePage;
}());



/***/ })

}]);
//# sourceMappingURL=line-line-module.js.map
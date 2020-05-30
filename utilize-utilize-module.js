(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utilize-utilize-module"],{

/***/ "./src/app/utilize/utilize.module.ts":
/*!*******************************************!*\
  !*** ./src/app/utilize/utilize.module.ts ***!
  \*******************************************/
/*! exports provided: UtilizePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizePageModule", function() { return UtilizePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilize_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilize.page */ "./src/app/utilize/utilize.page.ts");







var UtilizePageModule = /** @class */ (function () {
    function UtilizePageModule() {
    }
    UtilizePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _utilize_page__WEBPACK_IMPORTED_MODULE_6__["UtilizePage"]
                    }
                ])
            ],
            declarations: [_utilize_page__WEBPACK_IMPORTED_MODULE_6__["UtilizePage"]]
        })
    ], UtilizePageModule);
    return UtilizePageModule;
}());



/***/ }),

/***/ "./src/app/utilize/utilize.page.html":
/*!*******************************************!*\
  !*** ./src/app/utilize/utilize.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        Utilize\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <ion-list-header color=\"light\">Data for September 2019</ion-list-header>\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Device name</ion-card-subtitle>\r\n          <ion-card-title>GL371</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #pieChart></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    \r\n      <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Device name</ion-card-subtitle>\r\n          <ion-card-title>GL372</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #pieChart1></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    \r\n      <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Device name</ion-card-subtitle>\r\n          <ion-card-title>GL373</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #pieChart2></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    \r\n      <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Device name</ion-card-subtitle>\r\n          <ion-card-title>LA371</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #pieChart3></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    \r\n      <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Device name</ion-card-subtitle>\r\n          <ion-card-title>LA372</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #pieChart4></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    \r\n  \r\n  </ion-content>"

/***/ }),

/***/ "./src/app/utilize/utilize.page.scss":
/*!*******************************************!*\
  !*** ./src/app/utilize/utilize.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvdXRpbGl6ZS91dGlsaXplLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3V0aWxpemUvdXRpbGl6ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/utilize/utilize.page.ts":
/*!*****************************************!*\
  !*** ./src/app/utilize/utilize.page.ts ***!
  \*****************************************/
/*! exports provided: UtilizePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizePage", function() { return UtilizePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



var UtilizePage = /** @class */ (function () {
    function UtilizePage() {
    }
    UtilizePage.prototype.ionViewDidEnter = function () {
        this.generateColorArray(10);
        this.createPieChart();
        // this.createDnChart();
    };
    UtilizePage.prototype.generateColorArray = function (num) {
        this.colorArray = [];
        for (var i = 0; i < num; i++) {
            this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        }
    };
    UtilizePage.prototype.createPieChart = function () {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.pieChart.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Good copy time', 'Changing time', 'Obstruction time', 'Waste copy time', 'Rest Time', 'Preventive Maintenance', 'Start-End', 'Ink Fountain Maintenance', 'Force In down Time', 'Forga 27 / 37 Calibration', 'Unutilised Time'],
                datasets: [{
                        label: 'Time(minutes)',
                        data: [6773, 7373, 10159, 164, 3645, 540, 1350, 1260, 0, 0, 7616],
                        backgroundColor: this.colorArray,
                        borderColor: this.colorArray,
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
        this.bars1 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.pieChart1.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Good copy time', 'Changing time', 'Obstruction time', 'Waste copy time', 'Rest Time', 'Preventive Maintenance', 'Start-End', 'Ink Fountain Maintenance', 'Force In down Time', 'Forga 27 / 37 Calibration', 'Unutilised Time'],
                datasets: [{
                        label: 'Time(minutes)',
                        data: [5542, 8153, 10062, 201, 3780, 540, 1400, 1260, 311, 0, 9071],
                        backgroundColor: this.colorArray,
                        borderColor: this.colorArray,
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
        this.bars2 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.pieChart2.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Good copy time', 'Changing time', 'Obstruction time', 'Waste copy time', 'Rest Time', 'Preventive Maintenance', 'Start-End', 'Ink Fountain Maintenance', 'Force In down Time', 'Forga 27 / 37 Calibration', 'Unutilised Time'],
                datasets: [{
                        label: 'Time(minutes)',
                        data: [7573, 9275, 11695, 190, 3645, 540, 1350, 1260, 0, 0, 3352],
                        backgroundColor: this.colorArray,
                        borderColor: this.colorArray,
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
        this.bars3 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.pieChart3.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Good copy time', 'Changing time', 'Obstruction time', 'Waste copy time', 'Rest Time', 'Preventive Maintenance', 'Start-End', 'Ink Fountain Maintenance', 'Force In down Time', 'Forga 27 / 37 Calibration', 'Unutilised Time'],
                datasets: [{
                        label: 'Time(minutes)',
                        data: [8215, 9196, 8925, 358, 3645, 540, 1350, 1260, 561, 0, 4830],
                        backgroundColor: this.colorArray,
                        borderColor: this.colorArray,
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
        this.bars4 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.pieChart4.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Good copy time', 'Changing time', 'Obstruction time', 'Waste copy time', 'Rest Time', 'Preventive Maintenance', 'Start-End', 'Ink Fountain Maintenance', 'Force In down Time', 'Forga 27 / 37 Calibration', 'Unutilised Time'],
                datasets: [{
                        label: 'Time(minutes)',
                        data: [8658, 7405, 11234, 214, 3780, 540, 1400, 1260, 403, 0, 5426],
                        backgroundColor: this.colorArray,
                        borderColor: this.colorArray,
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
    UtilizePage.prototype.createDnChart = function () {
        this.dn = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.dnChart.nativeElement, {
            type: 'doughnut',
            circumference: Math.PI,
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'Viewers in millions',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: this.colorArray,
                        borderColor: this.colorArray,
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pieChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilizePage.prototype, "pieChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pieChart1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilizePage.prototype, "pieChart1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pieChart2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilizePage.prototype, "pieChart2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pieChart3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilizePage.prototype, "pieChart3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pieChart4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilizePage.prototype, "pieChart4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dnChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilizePage.prototype, "dnChart", void 0);
    UtilizePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'utilize',
            template: __webpack_require__(/*! ./utilize.page.html */ "./src/app/utilize/utilize.page.html"),
            styles: [__webpack_require__(/*! ./utilize.page.scss */ "./src/app/utilize/utilize.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilizePage);
    return UtilizePage;
}());



/***/ })

}]);
//# sourceMappingURL=utilize-utilize-module.js.map
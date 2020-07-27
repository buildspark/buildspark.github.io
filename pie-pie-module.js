(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pie-pie-module"],{

/***/ "./src/app/pie/pie.module.ts":
/*!***********************************!*\
  !*** ./src/app/pie/pie.module.ts ***!
  \***********************************/
/*! exports provided: PiePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiePageModule", function() { return PiePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pie.page */ "./src/app/pie/pie.page.ts");







var PiePageModule = /** @class */ (function () {
    function PiePageModule() {
    }
    PiePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _pie_page__WEBPACK_IMPORTED_MODULE_6__["PiePage"]
                    }
                ])
            ],
            declarations: [_pie_page__WEBPACK_IMPORTED_MODULE_6__["PiePage"]]
        })
    ], PiePageModule);
    return PiePageModule;
}());



/***/ }),

/***/ "./src/app/pie/pie.page.html":
/*!***********************************!*\
  !*** ./src/app/pie/pie.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Utilize\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header color=\"light\">Data for September 2019</ion-list-header>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Device name</ion-card-subtitle>\n      <ion-card-title>GL371</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #pieChart></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-list-header color=\"light\">Simple Doughnut Chart</ion-list-header>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Number of Viewers for</ion-card-subtitle>\n      <ion-card-title>Game of Thrones</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #dnChart></canvas>\n    </ion-card-content>\n  </ion-card> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pie/pie.page.scss":
/*!***********************************!*\
  !*** ./src/app/pie/pie.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvaW5zaWdodC9zcmMvYXBwL3BpZS9waWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGllL3BpZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pie/pie.page.ts":
/*!*********************************!*\
  !*** ./src/app/pie/pie.page.ts ***!
  \*********************************/
/*! exports provided: PiePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiePage", function() { return PiePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



var PiePage = /** @class */ (function () {
    function PiePage() {
    }
    PiePage.prototype.ionViewDidEnter = function () {
        this.generateColorArray(10);
        this.createPieChart();
        // this.createDnChart();
    };
    PiePage.prototype.generateColorArray = function (num) {
        this.colorArray = [];
        for (var i = 0; i < num; i++) {
            this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        }
    };
    PiePage.prototype.createPieChart = function () {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.pieChart.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Plate Change time', 'Roller Cleaning time', 'Blanket Cleaning time', 'Imp. cyl. Cleaning time', 'Ink well Cleaning time', 'Paper Preset time', 'Ink Preset time', 'Preparation(Change)', 'Change New Job', 'Change Colour'],
                datasets: [{
                        label: 'Time(minutes)',
                        data: [1905, 65, 766, 315, 0, 171, 105, 0, 0, 4046],
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
    PiePage.prototype.createDnChart = function () {
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
    ], PiePage.prototype, "pieChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dnChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PiePage.prototype, "dnChart", void 0);
    PiePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pie',
            template: __webpack_require__(/*! ./pie.page.html */ "./src/app/pie/pie.page.html"),
            styles: [__webpack_require__(/*! ./pie.page.scss */ "./src/app/pie/pie.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PiePage);
    return PiePage;
}());



/***/ })

}]);
//# sourceMappingURL=pie-pie-module.js.map
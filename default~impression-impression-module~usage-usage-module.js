(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~impression-impression-module~usage-usage-module"],{

/***/ "./src/app/shared/canvas/canvas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/canvas/canvas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <!-- <ion-card-subtitle>{{title}}</ion-card-subtitle> -->\n      <ion-card-title>{{data.device}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #canvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</div>"

/***/ }),

/***/ "./src/app/shared/canvas/canvas.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/canvas/canvas.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/canvas/canvas.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/canvas/canvas.component.ts ***!
  \***************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



var CanvasComponent = /** @class */ (function () {
    function CanvasComponent() {
    }
    CanvasComponent.prototype.ngOnInit = function () {
        this.createBarChart(this.data);
    };
    CanvasComponent.prototype.createBarChart = function (dataInput) {
        var usageChart = { scales: {
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
            } };
        var impressionChart = { scales: {
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
            },
            tooltips: {
                mode: 'label',
                callbacks: {
                    afterTitle: function () {
                        window.total = 0;
                    },
                    label: function (tooltipItem, data) {
                        var corporation = data.datasets[tooltipItem.datasetIndex].label;
                        var valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        window.total += valor;
                        return corporation + ": " + valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    },
                    footer: function () {
                        return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    }
                }
            } };
        var ctx = this.canvas.nativeElement;
        ctx.height = 400;
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
            type: 'bar',
            data: {
                labels: JSON.parse(dataInput["data"]).labels,
                datasets: JSON.parse(dataInput["data"]).datasets
            },
            options: this.title === 'impression' ? impressionChart : usageChart
            // {
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
            // }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "canvas", void 0);
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chart-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/shared/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.scss */ "./src/app/shared/canvas/canvas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/shared/select-machine/select-machine.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/select-machine/select-machine.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{modalTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label><strong>Select All</strong></ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\"\n        (click)=\"checkMaster()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item *ngFor=\"let item of checkBoxList\">\n      <ion-label>{{item.machine.name}}</ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button color=\"danger\" (click)=\"cancelModal()\">Cancel</ion-button>\n        <ion-button (click)=\"closeModal()\">Select</ion-button>\n      </ion-col>\n    </ion-row>\n\t</ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/shared/select-machine/select-machine.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/select-machine/select-machine.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWxlY3QtbWFjaGluZS9zZWxlY3QtbWFjaGluZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/select-machine/select-machine.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/select-machine/select-machine.component.ts ***!
  \*******************************************************************/
/*! exports provided: SelectMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMachineComponent", function() { return SelectMachineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SelectMachineComponent = /** @class */ (function () {
    function SelectMachineComponent(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        // modelId:number;
        this.isSelectMachine = false;
    }
    SelectMachineComponent.prototype.ngOnInit = function () {
        this.checkBoxList = this.navParams.data.checkBoxList;
        this.modalTitle = this.navParams.data.paramTitle;
        this.checkEvent();
    };
    SelectMachineComponent.prototype.cancelModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectMachineComponent.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalController.dismiss(this.checkBoxList)];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectMachineComponent.prototype.checkMaster = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkBoxList.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
            });
        });
    };
    SelectMachineComponent.prototype.checkEvent = function () {
        var totalItems = this.checkBoxList.length;
        var checked = 0;
        this.checkBoxList.map(function (obj) {
            if (obj.isChecked)
                checked++;
        });
        if (checked > 0 && checked < totalItems) {
            //If even one item is checked but not all
            this.isIndeterminate = true;
            this.masterCheck = false;
        }
        else if (checked == totalItems) {
            //If all are checked
            this.masterCheck = true;
            this.isIndeterminate = false;
        }
        else {
            //If none is checked
            this.isIndeterminate = false;
            this.masterCheck = false;
        }
    };
    SelectMachineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-machine',
            template: __webpack_require__(/*! ./select-machine.component.html */ "./src/app/shared/select-machine/select-machine.component.html"),
            styles: [__webpack_require__(/*! ./select-machine.component.scss */ "./src/app/shared/select-machine/select-machine.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], SelectMachineComponent);
    return SelectMachineComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/shared/canvas/canvas.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-machine/select-machine.component */ "./src/app/shared/select-machine/select-machine.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__["CanvasComponent"], _select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_5__["SelectMachineComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            entryComponents: [_select_machine_select_machine_component__WEBPACK_IMPORTED_MODULE_5__["SelectMachineComponent"]],
            exports: [_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__["CanvasComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~impression-impression-module~usage-usage-module.js.map
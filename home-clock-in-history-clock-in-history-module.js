(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-clock-in-history-clock-in-history-module"],{

/***/ "./src/app/home/clock-in-history/clock-in-history.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/clock-in-history/clock-in-history.module.ts ***!
  \******************************************************************/
/*! exports provided: ClockInHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockInHistoryPageModule", function() { return ClockInHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clock_in_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clock-in-history.page */ "./src/app/home/clock-in-history/clock-in-history.page.ts");







var routes = [
    {
        path: '',
        component: _clock_in_history_page__WEBPACK_IMPORTED_MODULE_6__["ClockInHistoryPage"]
    }
];
var ClockInHistoryPageModule = /** @class */ (function () {
    function ClockInHistoryPageModule() {
    }
    ClockInHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_clock_in_history_page__WEBPACK_IMPORTED_MODULE_6__["ClockInHistoryPage"]]
        })
    ], ClockInHistoryPageModule);
    return ClockInHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/home/clock-in-history/clock-in-history.page.html":
/*!******************************************************************!*\
  !*** ./src/app/home/clock-in-history/clock-in-history.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Clock-in History\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-fab-button size=\"small\" (click)=\"onAddClicked()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-label style=\"text-align: left; font-weight: bold;\">Emp ID</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-label style=\"text-align: left; font-weight: bold;\">Job No</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label style=\"text-align: left; font-weight: bold;\">Process</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item *ngFor=\"let clockInHistory of arrClockInHistory\" (click)='goDetail(clockInHistory)'>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-label style=\"text-align: left;\">{{clockInHistory.empID}}</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-label style=\"text-align: left;\">{{clockInHistory.jobNo}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label style=\"text-align: left;\">{{clockInHistory.processCode}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/clock-in-history/clock-in-history.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/clock-in-history/clock-in-history.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2xvY2staW4taGlzdG9yeS9jbG9jay1pbi1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/clock-in-history/clock-in-history.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/clock-in-history/clock-in-history.page.ts ***!
  \****************************************************************/
/*! exports provided: ClockInHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockInHistoryPage", function() { return ClockInHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");






var ClockInHistoryPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClockInHistoryPage, _super);
    function ClockInHistoryPage(loadingCtrl, alertCtrl, navCtrl, service) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.arrClockInHistory = [
            { "empID": "00001", "jobNo": "KY20040122", "processCode": "DCUT" },
            { "empID": "00002", "jobNo": "KY20040123", "processCode": "MBBB" },
            { "empID": "00003", "jobNo": "KY20040124", "processCode": "CIMB" },
            { "empID": "00001", "jobNo": "KY20040125", "processCode": "PBEE" }
        ];
        return _this;
    }
    ClockInHistoryPage.prototype.ngOnInit = function () {
    };
    ClockInHistoryPage.prototype.onAddClicked = function () {
        this.navCtrl.navigateForward('/home');
    };
    ClockInHistoryPage.prototype.goDetail = function (clockInHistory) {
        src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["config"].log('goDetail: ', clockInHistory);
        // this.service.setData('sel-empid', clockInHistory.empID);
        // this.navCtrl.navigateForward('/home/sel-empid');
        this.navCtrl.navigateForward('/home');
    };
    ClockInHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clock-in-history',
            template: __webpack_require__(/*! ./clock-in-history.page.html */ "./src/app/home/clock-in-history/clock-in-history.page.html"),
            styles: [__webpack_require__(/*! ./clock-in-history.page.scss */ "./src/app/home/clock-in-history/clock-in-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]])
    ], ClockInHistoryPage);
    return ClockInHistoryPage;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=home-clock-in-history-clock-in-history-module.js.map
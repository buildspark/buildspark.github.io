(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-clock-in-clock-in-module"],{

/***/ "./src/app/home/clock-in/clock-in.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/clock-in/clock-in.module.ts ***!
  \**************************************************/
/*! exports provided: ClockInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockInPageModule", function() { return ClockInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clock_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clock-in.page */ "./src/app/home/clock-in/clock-in.page.ts");







var routes = [
    {
        path: '',
        component: _clock_in_page__WEBPACK_IMPORTED_MODULE_6__["ClockInPage"]
    }
];
var ClockInPageModule = /** @class */ (function () {
    function ClockInPageModule() {
    }
    ClockInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_clock_in_page__WEBPACK_IMPORTED_MODULE_6__["ClockInPage"]]
        })
    ], ClockInPageModule);
    return ClockInPageModule;
}());



/***/ }),

/***/ "./src/app/home/clock-in/clock-in.page.html":
/*!**************************************************!*\
  !*** ./src/app/home/clock-in/clock-in.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Clock-in\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"localtime_p\">{{ time | date:'hh:mm:ss a'}}</p>\n\n  <ion-item>\n    <ion-grid>\n      <ion-row style=\"background:lightgrey;\">\n        <ion-col>\n          <ion-label style=\"text-align: center; font-weight: bold;\">Operator Emp ID: 00001</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-card class=\"welcome-card\">\n\n    <form #form=\"ngForm\" (ngSubmit)=\"onMachineDownClicked(form, $event)\">\n\n      <ion-button color=\"danger\" class=\"obj-center\" type=\"submit\">Machine Down</ion-button>\n\n    </form>\n\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/clock-in/clock-in.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/clock-in/clock-in.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n  font-size: 3.8rem; }\n\n.obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvaG9tZS9jbG9jay1pbi9jbG9jay1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2xvY2staW4vY2xvY2staW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMy44cmVtO1xufVxuXG4ub2JqLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/clock-in/clock-in.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/clock-in/clock-in.page.ts ***!
  \************************************************/
/*! exports provided: ClockInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockInPage", function() { return ClockInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");






var ClockInPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClockInPage, _super);
    function ClockInPage(loadingCtrl, alertCtrl, navCtrl, service) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        return _this;
    }
    ClockInPage.prototype.ngOnInit = function () {
        var _this = this;
        //get current date time, you can set your own Date() over here
        var stationdate = new Date();
        //clear Interval, it's my system requirement
        if (this.prevNowPlaying) {
            clearInterval(this.prevNowPlaying);
        }
        // set clock and Interval
        this.prevNowPlaying = setInterval(function () {
            stationdate = new Date(stationdate.setSeconds(stationdate.getSeconds() + 1));
            _this.time = stationdate;
        }, 1000);
    };
    ClockInPage.prototype.onMachineDownClicked = function (form, e) {
        src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["config"].log('timeeee: ', this.time);
        this.service.setData('downtime', this.time);
        this.navCtrl.navigateForward('/home/machine-down/downtime');
    };
    ClockInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clock-in',
            template: __webpack_require__(/*! ./clock-in.page.html */ "./src/app/home/clock-in/clock-in.page.html"),
            styles: [__webpack_require__(/*! ./clock-in.page.scss */ "./src/app/home/clock-in/clock-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]])
    ], ClockInPage);
    return ClockInPage;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=home-clock-in-clock-in-module.js.map
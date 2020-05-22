(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-report-report-module"],{

/***/ "./src/app/data-model/base.model.ts":
/*!******************************************!*\
  !*** ./src/app/data-model/base.model.ts ***!
  \******************************************/
/*! exports provided: LoginModel, AccessTokenModel, UsageOrImpressionModel, ProcessModel, WIPModel, AccumulatedOutputModel, EmailModel, MachineModel, TransfileModel, IssueMDownModel, InsertMDownModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTokenModel", function() { return AccessTokenModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageOrImpressionModel", function() { return UsageOrImpressionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModel", function() { return ProcessModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIPModel", function() { return WIPModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccumulatedOutputModel", function() { return AccumulatedOutputModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModel", function() { return EmailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineModel", function() { return MachineModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfileModel", function() { return TransfileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueMDownModel", function() { return IssueMDownModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertMDownModel", function() { return InsertMDownModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return LoginModel;
}());

var AccessTokenModel = /** @class */ (function () {
    function AccessTokenModel(accesstoken) {
        this.accesstoken = accesstoken;
    }
    return AccessTokenModel;
}());

var UsageOrImpressionModel = /** @class */ (function () {
    function UsageOrImpressionModel(accesstoken, device, //GL373
    datefrom, //2019-01-01
    dateto) {
        this.accesstoken = accesstoken;
        this.device = device;
        this.datefrom = datefrom;
        this.dateto = dateto;
    }
    return UsageOrImpressionModel;
}());

var ProcessModel = /** @class */ (function () {
    function ProcessModel(accesstoken, dept) {
        if (accesstoken === void 0) { accesstoken = ''; }
        if (dept === void 0) { dept = []; }
        this.accesstoken = accesstoken;
        this.dept = dept;
    }
    return ProcessModel;
}());

var WIPModel = /** @class */ (function () {
    function WIPModel(type, // WIP = 1, Output = 2
    accesstoken, date, // 2020-02-13
    dept, // [1,2,3,5]
    process) {
        this.type = type;
        this.accesstoken = accesstoken;
        this.date = date;
        this.dept = dept;
        this.process = process;
    }
    return WIPModel;
}());

var AccumulatedOutputModel = /** @class */ (function () {
    function AccumulatedOutputModel(accesstoken, date, // 2020-02-13
    dept, // [1,2,3,5]
    process, accumulated) {
        this.accesstoken = accesstoken;
        this.date = date;
        this.dept = dept;
        this.process = process;
        this.accumulated = accumulated;
    }
    return AccumulatedOutputModel;
}());

var EmailModel = /** @class */ (function () {
    function EmailModel(type, // WIP = 1, Output = 2
    accesstoken, date, // 2020-02-13
    dept, // [1,2,3,5]
    process, // ['CLDR', 'CREA', 'GLUE']
    email) {
        this.type = type;
        this.accesstoken = accesstoken;
        this.date = date;
        this.dept = dept;
        this.process = process;
        this.email = email;
    }
    return EmailModel;
}());

var MachineModel = /** @class */ (function () {
    function MachineModel(accesstoken, process) {
        if (accesstoken === void 0) { accesstoken = ''; }
        this.accesstoken = accesstoken;
        this.process = process;
    }
    return MachineModel;
}());

var TransfileModel = /** @class */ (function () {
    function TransfileModel(accesstoken, machineid) {
        if (accesstoken === void 0) { accesstoken = ''; }
        this.accesstoken = accesstoken;
        this.machineid = machineid;
    }
    return TransfileModel;
}());

var IssueMDownModel = /** @class */ (function () {
    function IssueMDownModel(accesstoken, transfileID) {
        if (accesstoken === void 0) { accesstoken = ''; }
        this.accesstoken = accesstoken;
        this.transfileID = transfileID;
    }
    return IssueMDownModel;
}());

var InsertMDownModel = /** @class */ (function () {
    function InsertMDownModel(accesstoken, machinedownid, machineid, remark, problemid) {
        if (accesstoken === void 0) { accesstoken = ''; }
        this.accesstoken = accesstoken;
        this.machinedownid = machinedownid;
        this.machineid = machineid;
        this.remark = remark;
        this.problemid = problemid;
    }
    return InsertMDownModel;
}());



/***/ }),

/***/ "./src/app/operator/report/report.module.ts":
/*!**************************************************!*\
  !*** ./src/app/operator/report/report.module.ts ***!
  \**************************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.page */ "./src/app/operator/report/report.page.ts");







var routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]
    }
];
var ReportPageModule = /** @class */ (function () {
    function ReportPageModule() {
    }
    ReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
        })
    ], ReportPageModule);
    return ReportPageModule;
}());



/***/ }),

/***/ "./src/app/operator/report/report.page.html":
/*!**************************************************!*\
  !*** ./src/app/operator/report/report.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Report\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-card class=\"welcome-card\" *ngIf=\"downTimeStart && downTimeEnd && total\">\n  <ion-list>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label style=\"text-align: left; font-weight: bold;\">Start</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label style=\"text-align: right;\">{{downTimeStart | date:'hh:mm:ss a'}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label style=\"text-align: left; font-weight: bold;\">End</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label style=\"text-align: right;\">{{downTimeEnd | date:'hh:mm:ss a'}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label style=\"text-align: left; font-weight: bold;\">Duration</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label style=\"text-align: right;\">{{total}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-content>\n\n  <ion-card class=\"welcome-card\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label><strong>Select All Downtime Reason</strong></ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\" (click)=\"checkMaster()\">\n        </ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item *ngFor=\"let item of checkBoxList\">\n        <ion-label>{{item.machine.name}}</ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button (click)=\"onSendReportClicked($event)\">Send Report</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/operator/report/report.page.scss":
/*!**************************************************!*\
  !*** ./src/app/operator/report/report.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9yL3JlcG9ydC9yZXBvcnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/operator/report/report.page.ts":
/*!************************************************!*\
  !*** ./src/app/operator/report/report.page.ts ***!
  \************************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










var ReportPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReportPage, _super);
    function ReportPage(loadingCtrl, navCtrl, service, storage, route) {
        var _this = _super.call(this, loadingCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.route = route;
        _this.checkBoxList = [];
        _this.machineDownReasonModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__["AccessTokenModel"]();
        _this.arrDownReasons = [];
        _this.downTimeEnd = new Date();
        return _this;
    }
    ReportPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data['special']) {
            console.log('strDownTime-----------------------: ', this.route.snapshot.data['special']);
            this.downTimeStart = this.route.snapshot.data['special'];
            var diff = moment__WEBPACK_IMPORTED_MODULE_9__(this.downTimeEnd, 'HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_9__(this.downTimeStart, 'HH:mm:ss')) + 1;
            var d = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](diff);
            var hours = Math.floor(d.asHours());
            var minutes = moment__WEBPACK_IMPORTED_MODULE_9__["utc"](diff).format("mm");
            var seconds = moment__WEBPACK_IMPORTED_MODULE_9__["utc"](diff).format("ss");
            this.total = hours + " hours " + minutes + " minutes " + seconds + " seconds";
        }
        this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.machineDownReasonModel.accesstoken = accessToken;
            _this.service.getWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].k_GET_MACHINE_DOWN_REASON, _this.machineDownReasonModel, function (res) {
                _this.arrDownReasons = JSON.parse(res.data);
                console.log('arrDown: ', _this.arrDownReasons);
                _this.arrDownReasons.forEach(function (element) {
                    var machine = {
                        'name': element.name,
                        'value': element.value
                    };
                    _this.checkBoxList.push({ 'machine': machine, 'isChecked': false });
                });
                // while (this.arrDownReasons.length > 0)
                //   this.arrRow.push(this.arrDownReasons.splice(0, 2));
            });
        });
    };
    ReportPage.prototype.checkMaster = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkBoxList.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
            });
        });
    };
    ReportPage.prototype.checkEvent = function () {
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
    ReportPage.prototype.onSendReportClicked = function (e) {
        this.navCtrl.navigateBack('/operator');
    };
    ReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.page.html */ "./src/app/operator/report/report.page.html"),
            styles: [__webpack_require__(/*! ./report.page.scss */ "./src/app/operator/report/report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], ReportPage);
    return ReportPage;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__["BasePagePage"]));



/***/ }),

/***/ "./src/app/shared/base-page/base-page.page.html":
/*!******************************************************!*\
  !*** ./src/app/shared/base-page/base-page.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>base-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shared/base-page/base-page.page.scss":
/*!******************************************************!*\
  !*** ./src/app/shared/base-page/base-page.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNlLXBhZ2UvYmFzZS1wYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/base-page/base-page.page.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/base-page/base-page.page.ts ***!
  \****************************************************/
/*! exports provided: BasePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePagePage", function() { return BasePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BasePagePage = /** @class */ (function () {
    function BasePagePage(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
    }
    BasePagePage.prototype.present = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingCtrl.create({
                            // duration: 5000,
                            }).then(function (a) {
                                a.present().then(function () {
                                    console.log('presented');
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BasePagePage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingCtrl.dismiss().then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BasePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-page',
            template: __webpack_require__(/*! ./base-page.page.html */ "./src/app/shared/base-page/base-page.page.html"),
            styles: [__webpack_require__(/*! ./base-page.page.scss */ "./src/app/shared/base-page/base-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], BasePagePage);
    return BasePagePage;
}());



/***/ })

}]);
//# sourceMappingURL=operator-report-report-module.js.map
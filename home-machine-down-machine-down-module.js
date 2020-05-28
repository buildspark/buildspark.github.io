(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-machine-down-machine-down-module"],{

/***/ "./src/app/data-model/base.model.ts":
/*!******************************************!*\
  !*** ./src/app/data-model/base.model.ts ***!
  \******************************************/
/*! exports provided: LoginModel, AccessTokenModel, UsageOrImpressionModel, ProcessModel, WIPModel, AccumulatedOutputModel, EmailModel, DownloadCSVModel, MachineModel, TransfileModel, IssueMDownModel, InsertMDownDetailModel, SMSModel, ProblemModel */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCSVModel", function() { return DownloadCSVModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineModel", function() { return MachineModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfileModel", function() { return TransfileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueMDownModel", function() { return IssueMDownModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertMDownDetailModel", function() { return InsertMDownDetailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMSModel", function() { return SMSModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemModel", function() { return ProblemModel; });
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

var DownloadCSVModel = /** @class */ (function () {
    function DownloadCSVModel(type, // WIP = 1, Output = 2
    accesstoken, date, // 2020-02-13
    dept, // [1,2,3,5]
    process) {
        this.type = type;
        this.accesstoken = accesstoken;
        this.date = date;
        this.dept = dept;
        this.process = process;
    }
    return DownloadCSVModel;
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

var InsertMDownDetailModel = /** @class */ (function () {
    function InsertMDownDetailModel(accesstoken, machinedownid, machineid, remark, problemid) {
        if (accesstoken === void 0) { accesstoken = ''; }
        this.accesstoken = accesstoken;
        this.machinedownid = machinedownid;
        this.machineid = machineid;
        this.remark = remark;
        this.problemid = problemid;
    }
    return InsertMDownDetailModel;
}());

var SMSModel = /** @class */ (function () {
    function SMSModel(accesstoken, processcode, machineid) {
        if (accesstoken === void 0) { accesstoken = ''; }
        this.accesstoken = accesstoken;
        this.processcode = processcode;
        this.machineid = machineid;
    }
    return SMSModel;
}());

var ProblemModel = /** @class */ (function () {
    function ProblemModel(accesstoken, processcode) {
        if (accesstoken === void 0) { accesstoken = ''; }
        this.accesstoken = accesstoken;
        this.processcode = processcode;
    }
    return ProblemModel;
}());



/***/ }),

/***/ "./src/app/home/machine-down/machine-down.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/machine-down/machine-down.module.ts ***!
  \**********************************************************/
/*! exports provided: MachineDownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDownPageModule", function() { return MachineDownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _machine_down_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./machine-down.page */ "./src/app/home/machine-down/machine-down.page.ts");







var routes = [
    {
        path: '',
        component: _machine_down_page__WEBPACK_IMPORTED_MODULE_6__["MachineDownPage"]
    }
];
var MachineDownPageModule = /** @class */ (function () {
    function MachineDownPageModule() {
    }
    MachineDownPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_machine_down_page__WEBPACK_IMPORTED_MODULE_6__["MachineDownPage"]]
        })
    ], MachineDownPageModule);
    return MachineDownPageModule;
}());



/***/ }),

/***/ "./src/app/home/machine-down/machine-down.page.html":
/*!**********************************************************!*\
  !*** ./src/app/home/machine-down/machine-down.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Machine Down\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"localtime_p\">{{ downTime | date:'hh:mm:ss a'}}</p>\n\n  <ion-card class=\"welcome-card\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label><strong>Select All Downtime Reason</strong></ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\" (click)=\"checkMaster()\">\n        </ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item *ngFor=\"let item of checkBoxList\">\n        <ion-label>{{item.machine.name}}</ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <!-- <ion-grid>\n    <ion-row *ngFor=\"let arrCol of arrRow\" (click)=\"onButtonClicked($event)\">\n      <ion-col col-5 [ngStyle]=\"{'background': btnTitle.color}\" *ngFor=\"let btnTitle of arrCol\">\n        <h1>{{btnTitle.name}}</h1>\n      </ion-col>\n      <ion-col style=\"background:#eb3508\" (click)=\"changeSubCategory()\">\n        <div text-center>Scan out</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button (click)=\"onSendReportClicked($event)\">Send Report</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/machine-down/machine-down.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/machine-down/machine-down.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n  font-size: 3.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvaG9tZS9tYWNoaW5lLWRvd24vbWFjaGluZS1kb3duLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFjaGluZS1kb3duL21hY2hpbmUtZG93bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzLjhyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/home/machine-down/machine-down.page.ts":
/*!********************************************************!*\
  !*** ./src/app/home/machine-down/machine-down.page.ts ***!
  \********************************************************/
/*! exports provided: MachineDownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDownPage", function() { return MachineDownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var MachineDownPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MachineDownPage, _super);
    function MachineDownPage(loadingCtrl, alertCtrl, navCtrl, service, storage, route) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.route = route;
        _this.checkBoxList = [];
        _this.machineDownReasonModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__["AccessTokenModel"]();
        _this.arrDownReasons = [];
        return _this;
    }
    MachineDownPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data['special']) {
            src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["config"].log('strDownTime-----------------------: ', this.route.snapshot.data['special']);
            this.downTime = this.route.snapshot.data['special'];
        }
        this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.machineDownReasonModel.accesstoken = accessToken;
            _this.service.callWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].k_GET_MACHINE_DOWN_REASON, _this.machineDownReasonModel, function (res) {
                _this.arrDownReasons = JSON.parse(res.data);
                src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["config"].log('arrDown: ', _this.arrDownReasons);
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
    MachineDownPage.prototype.checkMaster = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkBoxList.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
            });
        });
    };
    MachineDownPage.prototype.checkEvent = function () {
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
    MachineDownPage.prototype.onSendReportClicked = function (e) {
        this.navCtrl.navigateBack('/home/clock-in');
    };
    MachineDownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-machine-down',
            template: __webpack_require__(/*! ./machine-down.page.html */ "./src/app/home/machine-down/machine-down.page.html"),
            styles: [__webpack_require__(/*! ./machine-down.page.scss */ "./src/app/home/machine-down/machine-down.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], MachineDownPage);
    return MachineDownPage;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=home-machine-down-machine-down-module.js.map
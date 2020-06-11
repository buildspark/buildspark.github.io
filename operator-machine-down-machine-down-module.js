(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-machine-down-machine-down-module"],{

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
    process, // ['CLDR', 'CREA', 'GLUE']
    packaging) {
        this.type = type;
        this.accesstoken = accesstoken;
        this.date = date;
        this.dept = dept;
        this.process = process;
        this.packaging = packaging;
    }
    return WIPModel;
}());

var AccumulatedOutputModel = /** @class */ (function () {
    function AccumulatedOutputModel(accesstoken, date, // 2020-02-13
    dept, // [1,2,3,5]
    process, // ['CLDR', 'CREA', 'GLUE']
    accumulated, // 0 - non-accumulated, 1 - accumulated
    packaging) {
        this.accesstoken = accesstoken;
        this.date = date;
        this.dept = dept;
        this.process = process;
        this.accumulated = accumulated;
        this.packaging = packaging;
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

/***/ "./src/app/data-model/date.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/data-model/date.pipe.ts ***!
  \*****************************************/
/*! exports provided: FormatTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTimePipe", function() { return FormatTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// @Pipe({
//   name: 'dated',
// })
// export class DatePipe implements PipeTransform {
//   transform(value: any, args?: any): any {
//     return new Date(value).toISOString();
//   }
// }
var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        var hours = Math.floor(minutes / 60);
        return (("00" + hours).slice(-2) +
            ":" +
            ("00" + Math.floor(minutes - hours * 60)).slice(-2) +
            ":" +
            ("00" + Math.floor(value - minutes * 60)).slice(-2));
    };
    FormatTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "formatTime"
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());



/***/ }),

/***/ "./src/app/operator/machine-down/machine-down.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/operator/machine-down/machine-down.module.ts ***!
  \**************************************************************/
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
/* harmony import */ var _machine_down_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./machine-down.page */ "./src/app/operator/machine-down/machine-down.page.ts");
/* harmony import */ var src_app_data_model_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data-model/date.pipe */ "./src/app/data-model/date.pipe.ts");








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
            declarations: [_machine_down_page__WEBPACK_IMPORTED_MODULE_6__["MachineDownPage"], src_app_data_model_date_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatTimePipe"]],
            providers: [src_app_data_model_date_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatTimePipe"]]
        })
    ], MachineDownPageModule);
    return MachineDownPageModule;
}());



/***/ }),

/***/ "./src/app/operator/machine-down/machine-down.page.html":
/*!**************************************************************!*\
  !*** ./src/app/operator/machine-down/machine-down.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Machine Down\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-fab-button size=\"small\" color=\"danger\" (click)=\"onCallForHelpClicked()\">\n        <ion-icon name=\"warning\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"welcome-card\">\n\n    <!-- <div>\n      <ion-label class=\"obj-center ion-padding\" style=\"text-align: center; font-weight: bold;\">Down Duration</ion-label>\n    </div>\n\n    <p class=\"localtime_p\">{{counter | formatTime}}</p> -->\n\n    <ion-list>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Machine Name</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"text-align: right;\">{{transfile.Machine}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Down Start Time</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"text-align: right;\">{{readable(downstart.machineDown.StartTime) | date:'yyyy-MM-dd, HH:mm:ss'}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Down Duration</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"text-align: right;\">{{counter | formatTime}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label><strong>Select All Downtime Reason</strong></ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\" (click)=\"checkMaster()\">\n        </ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item *ngFor=\"let item of checkBoxList\">\n        <ion-label>{{item.machine.name}}</ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <form #form=\"ngForm\" (ngSubmit)=\"onSubmitClicked(form, $event)\">\n          <ion-button\n            [disabled]=\"(isIndeterminate == null || isIndeterminate == false) && (masterCheck == null || masterCheck == false)\"\n            color=\"primary\" class=\"obj-center\" type=\"submit\">\n            <div>\n              <p class=\"ion-no-margin\">Submit</p>\n            </div>\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/operator/machine-down/machine-down.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/operator/machine-down/machine-down.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content p {\n  text-align: center;\n  font-size: 2.0rem; }\n\nion-footer p {\n  text-shadow: 0px 2px 2px black; }\n\n.obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvb3BlcmF0b3IvbWFjaGluZS1kb3duL21hY2hpbmUtZG93bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBSXpCO0VBRVEsOEJBQThCLEVBQUE7O0FBSXRDO0VBQ0ksd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9yL21hY2hpbmUtZG93bi9tYWNoaW5lLWRvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcCB7XG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDJweCBibGFjazsgXG4gICAgfVxufVxuXG4ub2JqLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/operator/machine-down/machine-down.page.ts":
/*!************************************************************!*\
  !*** ./src/app/operator/machine-down/machine-down.page.ts ***!
  \************************************************************/
/*! exports provided: MachineDownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDownPage", function() { return MachineDownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var src_app_data_model_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data-model/date.pipe */ "./src/app/data-model/date.pipe.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var MachineDownPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MachineDownPage, _super);
    function MachineDownPage(loadingCtrl, alertCtrl, navCtrl, service, formatTimePipe, storage, route) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.formatTimePipe = formatTimePipe;
        _this.storage = storage;
        _this.route = route;
        _this.arrRecord = [];
        _this.counter = 0;
        _this.tick = 1000;
        // machineDownReasonReqModel: DownModel = new AccessTokenModel();
        _this.arrDownReasons = [];
        _this.checkBoxList = [];
        _this.problemReqModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_9__["ProblemModel"]();
        _this.smsReqModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_9__["SMSModel"]();
        _this.insertMachineDownReqModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_9__["InsertMDownDetailModel"];
        return _this;
    }
    MachineDownPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data['special']) {
            this.downstart = this.route.snapshot.data['special'];
            this.machineDownID = this.downstart.machineDown.MachineDownID;
            this.counter = this.downstart.machineDown.TimeStamp;
            this.downStartTime = this.downstart.machineDown.StartTime;
            this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, this.tick).subscribe(function () { return ++_this.counter; });
            this.smsReqModel = this.downstart.sms;
            this.insertMachineDownReqModel.machinedownid = this.machineDownID;
            this.insertMachineDownReqModel.machineid = this.smsReqModel.machineid;
            this.transfile = this.downstart.transfile;
            this.problemReqModel.processcode = this.downstart.transfile.ProcessCode;
        }
        this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.problemReqModel.accesstoken = accessToken;
            _this.insertMachineDownReqModel.accesstoken = accessToken;
            _this.service.presentLoading();
            _this.service.callWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_MACHINE_DOWN_PROBLEM, _this.problemReqModel, function (res) {
                if (res.status_code == 0 /* Success */) {
                    _this.arrDownReasons = JSON.parse(res.data);
                    _this.arrDownReasons.forEach(function (element) {
                        var machine = {
                            'name': element.name,
                            'value': element.value
                        };
                        _this.checkBoxList.push({ 'machine': machine, 'isChecked': false });
                    });
                    _this.service.dismissLoading();
                }
                else {
                    _this.service.dismissLoading();
                }
            });
        });
    };
    MachineDownPage.prototype.ngOnDestroy = function () {
        this.countDown = null;
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
    MachineDownPage.prototype.readable = function (val) {
        return val.toString().match(/\d/g).join("");
    };
    MachineDownPage.prototype.onMachineDownClicked = function (form, e) {
        var totalTime = this.formatTimePipe.transform(this.counter);
        var arrSplit = totalTime.split(":");
        var hours = Number(arrSplit[0]);
        var minutes = Number(arrSplit[1]);
        var seconds = Number(arrSplit[2]);
        console.log("hours: ", hours);
        console.log("minutes: ", minutes);
        console.log("seconds: ", seconds);
    };
    MachineDownPage.prototype.onSubmitClicked = function (form, e) {
        var _this = this;
        this.insertMachineDownReqModel.remark = [];
        this.insertMachineDownReqModel.problemid = [];
        this.checkBoxList.forEach(function (element) {
            if (element.isChecked) {
                _this.insertMachineDownReqModel.remark.push(element.machine.name);
                _this.insertMachineDownReqModel.problemid.push(element.machine.value);
            }
        });
        src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__["BasePagePage"].presentAlert('Alert', 'Are you sure want to submit?<br/><br/>' + this.transfile.Machine + ' Down Reasons:<br/>- ' + this.insertMachineDownReqModel.remark.join('<br/>- '), function (res) {
            if (res.role == src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK) {
                _this.service.presentLoading();
                _this.service.callWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_INSERT_MDOWN_DETAIL, _this.insertMachineDownReqModel, function (res) {
                    if (res.status_code == 0 /* Success */) {
                        _this.service.dismissLoading();
                        src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__["BasePagePage"].presentAlert(res.status_desc, res.data, function (response) {
                            if (response) {
                                _this.navCtrl.navigateBack('/operator');
                            }
                        });
                    }
                    else {
                        _this.service.dismissLoading();
                    }
                });
            }
        }, [src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_CANCEL, src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK]);
    };
    MachineDownPage.prototype.onCallForHelpClicked = function () {
        var _this = this;
        src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__["BasePagePage"].presentAlert('Alert', 'Are you sure want to request assistance from your supervisor?', function (res) {
            if (res.role == src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK) {
                _this.service.presentLoading();
                _this.service.callWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_SEND_SMS, _this.smsReqModel, function (res) {
                    if (res.status_code == 0 /* Success */ && src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__["BasePagePage"].presentAlert(res.status_desc, res.data)) {
                        _this.service.dismissLoading();
                    }
                    else {
                        _this.service.dismissLoading();
                    }
                });
            }
        }, [src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_CANCEL, src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK]);
    };
    MachineDownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-machine-down',
            template: __webpack_require__(/*! ./machine-down.page.html */ "./src/app/operator/machine-down/machine-down.page.html"),
            styles: [__webpack_require__(/*! ./machine-down.page.scss */ "./src/app/operator/machine-down/machine-down.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            src_app_data_model_date_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatTimePipe"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], MachineDownPage);
    return MachineDownPage;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_3__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=operator-machine-down-machine-down-module.js.map
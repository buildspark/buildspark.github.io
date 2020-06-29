(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["output-output-machine-selection-output-machine-selection-module"],{

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
    process, // ['CLDR', 'CREA', 'GLUE']
    accumulated, // Non-acccumulated = 0, Accumulated = 1
    packaging) {
        this.type = type;
        this.accesstoken = accesstoken;
        this.date = date;
        this.dept = dept;
        this.process = process;
        this.accumulated = accumulated;
        this.packaging = packaging;
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

/***/ "./src/app/output/output-machine-selection/output-machine-selection.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/output/output-machine-selection/output-machine-selection.module.ts ***!
  \************************************************************************************/
/*! exports provided: OutputMachineSelectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputMachineSelectionPageModule", function() { return OutputMachineSelectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _output_machine_selection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./output-machine-selection.page */ "./src/app/output/output-machine-selection/output-machine-selection.page.ts");







var routes = [
    {
        path: '',
        component: _output_machine_selection_page__WEBPACK_IMPORTED_MODULE_6__["OutputMachineSelectionPage"]
    }
];
var OutputMachineSelectionPageModule = /** @class */ (function () {
    function OutputMachineSelectionPageModule() {
    }
    OutputMachineSelectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_output_machine_selection_page__WEBPACK_IMPORTED_MODULE_6__["OutputMachineSelectionPage"]]
        })
    ], OutputMachineSelectionPageModule);
    return OutputMachineSelectionPageModule;
}());



/***/ }),

/***/ "./src/app/output/output-machine-selection/output-machine-selection.page.html":
/*!************************************************************************************!*\
  !*** ./src/app/output/output-machine-selection/output-machine-selection.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Machine (HARDCODED)\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label><strong>Select All Machine (HARDCODED)</strong></ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\"\n        (click)=\"checkMaster()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item *ngFor=\"let item of checkBoxList\">\n      <ion-label>{{item.machine.name}}</ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button (click)=\"onNextClicked()\">Next</ion-button>\n      </ion-col>\n    </ion-row>\n\t</ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/output/output-machine-selection/output-machine-selection.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/output/output-machine-selection/output-machine-selection.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQtbWFjaGluZS1zZWxlY3Rpb24vb3V0cHV0LW1hY2hpbmUtc2VsZWN0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/output/output-machine-selection/output-machine-selection.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/output/output-machine-selection/output-machine-selection.page.ts ***!
  \**********************************************************************************/
/*! exports provided: OutputMachineSelectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputMachineSelectionPage", function() { return OutputMachineSelectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");









var OutputMachineSelectionPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OutputMachineSelectionPage, _super);
    function OutputMachineSelectionPage(loadingCtrl, alertCtrl, navCtrl, service, storage, route, router) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.route = route;
        _this.router = router;
        _this.checkBoxList = [];
        _this.arrMachine = [];
        _this.wipReqModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["WIPModel"](2 /* Output */);
        _this.currentDate = moment__WEBPACK_IMPORTED_MODULE_7__().format("YYYY-MM-DD");
        return _this;
    }
    OutputMachineSelectionPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data['special']) {
            console.log('special-----------------------: ', this.route.snapshot.data['special']);
            this.wipReqModel = this.route.snapshot.data['special'];
        }
        var machineList = [{ "name": "Auto Gluing Machine (1)", "value": "Auto Gluing Machine (1)" },
            { "name": "Auto Gluing Machine (2)", "value": "Auto Gluing Machine (2)" },
            { "name": "Auto Gluing Machine (3)", "value": "Auto Gluing Machine (3)" },
            { "name": "Auto Gluing Machine (4)", "value": "Auto Gluing Machine (4)" },
            { "name": "CD74", "value": "CD74" },
            { "name": "Die Cut AI (1)", "value": "Die Cut AI (1)" },
            { "name": "Die Cut AI (2)", "value": "Die Cut AI (2)" },
            { "name": "Die Cut AS (3)", "value": "Die Cut AS (3)" },
            { "name": "Die Cut AS (4)", "value": "Die Cut AS (4)" },
            { "name": "Die Cut C (5)", "value": "Die Cut C (5)" },
            { "name": "Die Cut C (6)", "value": "Die Cut C (6)" },
            { "name": "GL371", "value": "GL371" },
            { "name": "GL372", "value": "GL372" },
            { "name": "GL373", "value": "GL373" },
            { "name": "GL374", "value": "GL374" },
            { "name": "LA371", "value": "LA371" },
            { "name": "LA372", "value": "LA372" },
            { "name": "LS29", "value": "LS29" },
            { "name": "LS529", "value": "LS529" },
            { "name": "Manual Die Cut (1)", "value": "Manual Die Cut (1)" },
            { "name": "Manual Die Cut (10)", "value": "Manual Die Cut (10)" },
            { "name": "Manual Die Cut (11)", "value": "Manual Die Cut (11)" },
            { "name": "Manual Die Cut (12)", "value": "Manual Die Cut (12)" },
            { "name": "Manual Die Cut (13)", "value": "Manual Die Cut (13)" },
            { "name": "Manual Die Cut (14)", "value": "Manual Die Cut (14)" },
            { "name": "Manual Die Cut (15)", "value": "Manual Die Cut (15)" },
            { "name": "Manual Die Cut (16)", "value": "Manual Die Cut (16)" },
            { "name": "Manual Die Cut (2)", "value": "Manual Die Cut (2)" },
            { "name": "Manual Die Cut (3)", "value": "Manual Die Cut (3)" },
            { "name": "Manual Die Cut (4)", "value": "Manual Die Cut (4)" },
            { "name": "Manual Die Cut (5)", "value": "Manual Die Cut (5)" },
            { "name": "Manual Die Cut (6)", "value": "Manual Die Cut (6)" },
            { "name": "Manual Die Cut (7)", "value": "Manual Die Cut (7)" },
            { "name": "Manual Die Cut (8)", "value": "Manual Die Cut (8)" },
            { "name": "Manual Die Cut (9)", "value": "Manual Die Cut (9)" },
            { "name": "SM452(4)", "value": "SM452(4)" },
            { "name": "SM552", "value": "SM552" }];
        machineList.forEach(function (element) {
            _this.checkBoxList.push({ 'machine': element, 'isChecked': false });
        });
    };
    OutputMachineSelectionPage.prototype.checkMaster = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkBoxList.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
            });
        });
    };
    OutputMachineSelectionPage.prototype.checkEvent = function () {
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
    OutputMachineSelectionPage.prototype.onNextClicked = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isCheckedAtLeastOne;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("CHOSEN: ", this.checkBoxList);
                isCheckedAtLeastOne = false;
                // this.wipReqModel.process = [];
                this.checkBoxList.forEach(function (element) {
                    if (element.isChecked) {
                        isCheckedAtLeastOne = true;
                        // this.wipReqModel.process.push(element.machine.value)
                    }
                });
                if (isCheckedAtLeastOne) {
                    this.service.setData('sel-mach', this.wipReqModel);
                    this.navCtrl.navigateForward('/output/chart/sel-mach');
                }
                else {
                    src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"].presentAlert('Alert', 'Please select at least one (1) machine.');
                }
                return [2 /*return*/];
            });
        });
    };
    OutputMachineSelectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-output-machine-selection',
            template: __webpack_require__(/*! ./output-machine-selection.page.html */ "./src/app/output/output-machine-selection/output-machine-selection.page.html"),
            styles: [__webpack_require__(/*! ./output-machine-selection.page.scss */ "./src/app/output/output-machine-selection/output-machine-selection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OutputMachineSelectionPage);
    return OutputMachineSelectionPage;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=output-output-machine-selection-output-machine-selection-module.js.map
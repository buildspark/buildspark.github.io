(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-operator-module"],{

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

/***/ "./src/app/modal-base/modal-base.component.html":
/*!******************************************************!*\
  !*** ./src/app/modal-base/modal-base.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-nav [root]=\"rootPage\" [rootParams]=\"rootPageParams\"></ion-nav>"

/***/ }),

/***/ "./src/app/modal-base/modal-base.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modal-base/modal-base.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWJhc2UvbW9kYWwtYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modal-base/modal-base.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modal-base/modal-base.component.ts ***!
  \****************************************************/
/*! exports provided: ModalBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBaseComponent", function() { return ModalBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-model/constant.model */ "./src/app/data-model/constant.model.ts");




var ModalBaseComponent = /** @class */ (function () {
    function ModalBaseComponent(navParams) {
        this.navParams = navParams;
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_3__["config"].log('PARAM: ', this.navParams);
        this.rootPage = this.navParams.data.rootPage;
        this.rootPageParams = this.navParams.data;
    }
    ModalBaseComponent.prototype.ngOnInit = function () { };
    ModalBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-base',
            template: __webpack_require__(/*! ./modal-base.component.html */ "./src/app/modal-base/modal-base.component.html"),
            styles: [__webpack_require__(/*! ./modal-base.component.scss */ "./src/app/modal-base/modal-base.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], ModalBaseComponent);
    return ModalBaseComponent;
}());



/***/ }),

/***/ "./src/app/operator/operator.module.ts":
/*!*********************************************!*\
  !*** ./src/app/operator/operator.module.ts ***!
  \*********************************************/
/*! exports provided: OperatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorPageModule", function() { return OperatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _operator_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operator.page */ "./src/app/operator/operator.page.ts");
/* harmony import */ var _modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-base/modal-base.component */ "./src/app/modal-base/modal-base.component.ts");
/* harmony import */ var _sel_dept_sel_dept_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sel-dept/sel-dept.component */ "./src/app/operator/sel-dept/sel-dept.component.ts");
/* harmony import */ var _sel_process_sel_process_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sel-process/sel-process.component */ "./src/app/operator/sel-process/sel-process.component.ts");
/* harmony import */ var _sel_machine_sel_machine_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sel-machine/sel-machine.component */ "./src/app/operator/sel-machine/sel-machine.component.ts");












var routes = [
    {
        path: '',
        component: _operator_page__WEBPACK_IMPORTED_MODULE_7__["OperatorPage"]
    }
];
var OperatorPageModule = /** @class */ (function () {
    function OperatorPageModule() {
    }
    OperatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_sel_dept_sel_dept_component__WEBPACK_IMPORTED_MODULE_9__["SelDeptComponent"], _sel_process_sel_process_component__WEBPACK_IMPORTED_MODULE_10__["SelProcessComponent"], _sel_machine_sel_machine_component__WEBPACK_IMPORTED_MODULE_11__["SelMachineComponent"], _modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_8__["ModalBaseComponent"]],
            declarations: [_operator_page__WEBPACK_IMPORTED_MODULE_7__["OperatorPage"], _sel_dept_sel_dept_component__WEBPACK_IMPORTED_MODULE_9__["SelDeptComponent"], _sel_process_sel_process_component__WEBPACK_IMPORTED_MODULE_10__["SelProcessComponent"], _sel_machine_sel_machine_component__WEBPACK_IMPORTED_MODULE_11__["SelMachineComponent"], _modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_8__["ModalBaseComponent"]]
        })
    ], OperatorPageModule);
    return OperatorPageModule;
}());



/***/ }),

/***/ "./src/app/operator/operator.page.html":
/*!*********************************************!*\
  !*** ./src/app/operator/operator.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Operator\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\" [hidden]=\"true\">\n      <ion-fab-button size=\"small\" (click)=\"closeMenu()\">\n        <ion-icon name=\"list-box\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\">\n      <ion-fab-button [disabled]=\"isButtonDisabled\" size=\"small\" color=\"danger\" (click)=\"onOptionClicked()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"onSubmit(operatorForm)\" #operatorForm=\"ngForm\">\n    <ion-list>\n      <ion-item>\n\n        <!-- <ion-grid>\n            <ion-row>\n              <ion-col size=\"10\">\n                <ion-label>Machine Name</ion-label>\n                <ion-input type=\"text\" placeholder=\"Machine Name\" maxlength=\"50\" required [(ngModel)]=\"strMachineName\"\n                  name=\"machineName\"></ion-input>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-button class=\"ion-float-right\"color=\"primary\" (click)=\"presentModal()\">\n                  <ion-icon name=\"options\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> -->\n\n        <ion-label>Machine: </ion-label>\n        <ion-input type=\"text\" maxlength=\"50\" required [(ngModel)]=\"strMachineName\" (ngModelChange)=\"keyboardChanged()\"\n          name=\"machineName\"></ion-input>\n        <!-- <ion-button class=\"ion-float-right\" [disabled]=\"isButtonDisabled\" (click)=\"onOptionClicked()\"> -->\n          <!-- <ion-icon name=\"options\"></ion-icon> -->\n          <!-- <p>Select Machine</p>\n        </ion-button> -->\n\n      </ion-item>\n\n      <ion-item *ngFor=\"let transfile of arrTransfile;\">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Transfile ID</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label style=\"text-align: right;\">{{transfile.TransfileID}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Job No</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label style=\"text-align: right;\">{{transfile.JobNo}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Process Code</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label style=\"text-align: right;\">{{transfile.ProcessCode}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Start Datetime</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label style=\"text-align: right;\">{{readable(transfile.StartTime) | date:'yyyy-MM-dd, HH:mm:ss'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row [style.background-color]=\"statusColor\" [hidden]=\"isFlash == true\">\n            <ion-col>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Status</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"text-align: right;\">{{transfile.Status}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row [style.background-color]=\"none\" [hidden]=\"isFlash == false\">\n            <ion-col>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Status</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"text-align: right;\">{{transfile.Status}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item *ngIf=\"isIdle == true\">\n        <ion-grid>\n          <ion-row [style.background-color]=\"statusIdle\">\n            <ion-col col-6>\n              <ion-label style=\"text-align: left; font-weight: bold;\">Status</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label style=\"text-align: right;\">Idle</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n<ion-content [hidden]=\"true\">\n  <p *ngIf=\"barcodeData\">\n    Scanned: {{barcodeData['text']}} | {{barcodeData['format']}}\n  </p>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar position=\"bottom\">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-button [disabled]=\"operatorForm.form.invalid\" class=\"obj-center\" color=\"warning\"\n            (click)=\"onResetClicked()\">\n            <div>\n              <p class=\"ion-no-margin\">Reset</p>\n            </div>\n          </ion-button>\n        </ion-col>\n        <ion-col col-6>\n\n          <div [hidden]=\"isMachineFound == true\">\n            <ion-button [disabled]=\"operatorForm.form.invalid\" class=\"obj-center\" (click)=\"onSearchJobClicked()\">\n              <p class=\"ion-no-margin\">Search Job</p>\n            </ion-button>\n          </div>\n\n          <div [hidden]=\"isMachineFound == false\">\n            <ion-button [disabled]=\"operatorForm.form.invalid\" color=\"danger\" class=\"obj-center\"\n              (click)=\"onMachineDownClicked()\">\n              <p class=\"ion-no-margin\">Machine Down</p>\n            </ion-button>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/operator/operator.page.scss":
/*!*********************************************!*\
  !*** ./src/app/operator/operator.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\np {\n  text-shadow: 0px 2px 2px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvb3BlcmF0b3Ivb3BlcmF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9yL29wZXJhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vYmotY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDJweCBibGFjazsgXG59Il19 */"

/***/ }),

/***/ "./src/app/operator/operator.page.ts":
/*!*******************************************!*\
  !*** ./src/app/operator/operator.page.ts ***!
  \*******************************************/
/*! exports provided: OperatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorPage", function() { return OperatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var _modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-base/modal-base.component */ "./src/app/modal-base/modal-base.component.ts");
/* harmony import */ var _sel_dept_sel_dept_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sel-dept/sel-dept.component */ "./src/app/operator/sel-dept/sel-dept.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sel_machine_sel_machine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sel-machine/sel-machine.component */ "./src/app/operator/sel-machine/sel-machine.component.ts");













var OperatorPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OperatorPage, _super);
    function OperatorPage(loadingCtrl, alertCtrl, navCtrl, service, storage, modalCtrl, barcodeScanner) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.modalCtrl = modalCtrl;
        _this.barcodeScanner = barcodeScanner;
        _this.statusColor = 'none';
        _this.statusDown = "#E62C04";
        _this.statusRunning = "#30FA14";
        _this.statusIdle = "#FAF714";
        _this.strMachineName = '';
        _this.selectedMachine = '';
        _this.arrRow = [];
        _this.isOk = false;
        _this.isMachineFound = false;
        _this.isIdle = false;
        _this.isFlash = false;
        _this.tick = 500;
        _this.isButtonDisabled = false;
        _this.transfileReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["TransfileModel"]();
        _this.arrTransfile = [];
        _this.issueMachineDownReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["IssueMDownModel"]();
        _this.arrMachineDown = [];
        _this.smsReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["SMSModel"]();
        return _this;
    }
    ;
    OperatorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, this.tick).subscribe(function () {
            _this.isFlash = !_this.isFlash;
        });
    };
    OperatorPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('OPERATOR LO OI');
        this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.transfileReqModel.accesstoken = accessToken;
            _this.issueMachineDownReqModel.accesstoken = accessToken;
            _this.smsReqModel.accesstoken = accessToken;
            _this.callWSToGetPreselectionData();
        });
    };
    // ionViewDidEnter() {
    //   this.storage.get(Constants.c_ACCESS_TOKEN).then((accessToken) => {
    //     let deptReqModel: DeptModel = new AccessTokenModel();
    //     deptReqModel.accesstoken = accessToken;
    //     let ws = new WebService(Constants.k_GET_DEPT, deptReqModel, (res) => {
    //       config.log('callback only');
    //     });
    //     let deviceReqModel: DeviceModel = new AccessTokenModel();
    //     deviceReqModel.accesstoken = accessToken;
    //     let ws1 = new WebService(Constants.k_GET_DEVICE, deviceReqModel, (res) => {
    //       config.log('callback only111');
    //     });
    //     let machineDownReasonReqModel: DownModel = new AccessTokenModel();
    //     machineDownReasonReqModel.accesstoken = accessToken;
    //     let ws2 = new WebService('TPInsight_GetMachineDownReason', machineDownReasonReqModel, (res) => {
    //       config.log('callback only222');
    //     });
    //     this.service.callWebServiceSimultaneously([ws, ws1, ws2], (res)=> {
    //       config.log('done yeah');
    //     }, true);
    //   });
    // }
    OperatorPage.prototype.ngOnDestroy = function () {
        this.countDown = null;
    };
    OperatorPage.prototype.callWSToGetPreselectionData = function () {
        var _this = this;
        this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_MACHINE).then(function (machine) {
            if (!(machine == undefined || machine == null || machine.selected == null)) {
                _this.strMachineName = machine.selected.name;
                _this.transfileReqModel.machineid = String(machine.selected.value);
                _this.arrTransfile = [];
                _this.loadingCtrl.create({ id: _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_TRANSFILE }).then(function (a) {
                    a.present();
                });
                _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_TRANSFILE, _this.transfileReqModel, function (res) {
                    _this.loadingCtrl.dismiss(null, null, _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_TRANSFILE).then(function (done) {
                        console.log('operator done: ', done);
                        _this.afterGetTransfile(res);
                        if (_this.arrTransfile && _this.arrTransfile.length > 0 && _this.arrTransfile[0].Status) {
                            var strMachineStatus = String(_this.arrTransfile[0].Status);
                            if (strMachineStatus.toLowerCase() == 'down') {
                                _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"].presentAlert('Alert', 'Machine ' + _this.arrTransfile[0].Machine + ' is in ' + strMachineStatus + ' State. Do you want to continue to machine down detail page?', function (res) {
                                    if (res.role == _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK) {
                                        _this.issueMachineDownReqModel.transfileID = _this.arrTransfile[0].TransfileID;
                                        _this.arrMachineDown = [];
                                        _this.service.presentLoading();
                                        _this.loadingCtrl.create({ id: _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_ISSUE_MDOWN }).then(function (a) {
                                            a.present();
                                        });
                                        _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_ISSUE_MDOWN, _this.issueMachineDownReqModel, function (res) {
                                            _this.loadingCtrl.dismiss(null, null, _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_ISSUE_MDOWN).then(function (done) {
                                                console.log('operator done: ', done);
                                                if (res.status_code == 0 /* Success */) {
                                                    _this.arrMachineDown = JSON.parse(res.data);
                                                    _this.service.setData('downstart', {
                                                        'machineDown': _this.arrMachineDown[0],
                                                        'sms': _this.smsReqModel,
                                                        'transfile': _this.arrTransfile[0]
                                                    });
                                                    _this.navCtrl.navigateForward('/operator/machine-down/downstart');
                                                }
                                            });
                                        }, false);
                                    }
                                }, [_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_CANCEL, _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK]);
                            }
                        }
                    });
                }, false);
            }
        });
    };
    OperatorPage.prototype.closeMenu = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.barcodeData = barcodeData;
            _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('Barcode data', _this.barcodeData);
        }).catch(function (err) {
            _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('Error', err);
        });
    };
    OperatorPage.prototype.onButtonClicked = function (e) {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('onButtonClicked: ', e.srcElement['innerText']);
    };
    OperatorPage.prototype.resetField = function () {
        this.isMachineFound = false;
        this.isIdle = false;
        this.strMachineName = '';
        this.arrTransfile = [];
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_SEL_DEPT);
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_SEL_PROC);
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_SEL_MACH);
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_DEPARTMENT);
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_PROCESS);
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_MACHINE);
    };
    OperatorPage.prototype.onResetClicked = function () {
        var _this = this;
        _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"].presentAlert('Alert', 'Are you sure want to reset?', function (res) {
            if (res.role = _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK) {
                _this.resetField();
            }
        }, [_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_CANCEL, _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK]);
    };
    OperatorPage.prototype.numberOnlyValidation = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    OperatorPage.prototype.onMachineSelected = function () {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('selectedMachine: ', this.selectedMachine);
    };
    OperatorPage.prototype.onSubmit = function (form) {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('datatatat: ', form.value);
        if (this.isMachineFound == true) {
            this.navCtrl.navigateForward('/operator/machine-down');
        }
        else {
            this.isMachineFound = true;
        }
    };
    OperatorPage.prototype.onOptionClicked = function () {
        var _this = this;
        this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_PROCESS).then(function (process) {
            _this.presentModal(process);
        });
    };
    OperatorPage.prototype.presentModal = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var process, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        process = (item && item.list && item.list.length > 0) ? item.list : null;
                        this.isButtonDisabled = true;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_9__["ModalBaseComponent"],
                                componentProps: (process == null || process.length == 0) ? { rootPage: _sel_dept_sel_dept_component__WEBPACK_IMPORTED_MODULE_10__["SelDeptComponent"] } : { rootPage: _sel_machine_sel_machine_component__WEBPACK_IMPORTED_MODULE_12__["SelMachineComponent"], rootPageParams: { 'arrSelectedProcess': process } }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            _this.isButtonDisabled = false;
                            if (dataReturned && dataReturned.data && dataReturned.data != undefined) {
                                var selected = Object.assign({}, dataReturned.data);
                                _this.transfileReqModel.machineid = selected.value.toString();
                                _this.smsReqModel.machineid = selected.value.toString();
                                _this.strMachineName = selected.name.toString();
                                _this.arrTransfile = [];
                                _this.service.presentLoading();
                                _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_TRANSFILE, _this.transfileReqModel, function (res) {
                                    _this.service.dismissLoading();
                                    _this.afterGetTransfile(res);
                                }, false);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OperatorPage.prototype.readable = function (val) {
        return val.toString().match(/\d/g).join("");
    };
    OperatorPage.prototype.onSearchJobClicked = function () {
        var _this = this;
        this.transfileReqModel.machineid = this.strMachineName;
        this.arrTransfile = [];
        this.service.presentLoading();
        this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_TRANSFILE, this.transfileReqModel, function (res) {
            _this.service.dismissLoading();
            _this.afterGetTransfile(res);
        }, false);
    };
    OperatorPage.prototype.afterGetTransfile = function (response) {
        var _this = this;
        this.isMachineFound = (response && response.status_code && (response.status_code == 0 /* Success */));
        this.isIdle = (response && response.status_code && (response.status_code != 0 /* Success */) && (response.data && response.data != '-') && response.data.includes('Idle State'));
        if (this.isMachineFound) {
            this.arrTransfile = JSON.parse(response.data);
            this.strMachineName = this.arrTransfile[0].Machine;
            this.smsReqModel.machineid = this.transfileReqModel.machineid;
            this.smsReqModel.processcode = this.arrTransfile[0].ProcessCode;
            if (String(this.arrTransfile[0].Status).toLowerCase().includes('running')) {
                this.statusColor = this.statusRunning;
            }
            else if (String(this.arrTransfile[0].Status).toLowerCase().includes('down')) {
                this.statusColor = this.statusDown;
            }
            var cache = new _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageCache"]();
            cache.selected = {
                name: this.arrTransfile[0].Machine,
                value: this.transfileReqModel.machineid
            };
            this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_MACHINE).then(function (machine) {
                if (machine == undefined || machine == null || machine.list == null || machine.list.length == 0) {
                    cache.list = [];
                }
                else {
                    cache.list = machine.list;
                }
                _this.storage.set(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_MACHINE, cache);
            });
        }
        else {
            if (this.isIdle) {
                var strRawMsg = String(response.data);
                this.strMachineName = strRawMsg.replace('Machine ', '').replace(' is in Idle State', '');
            }
            else {
                this.resetField();
            }
        }
    };
    OperatorPage.prototype.keyboardChanged = function () {
        if (this.strMachineName == "") {
            this.resetField();
        }
    };
    OperatorPage.prototype.onMachineDownClicked = function () {
        var _this = this;
        if (this.statusColor == this.statusDown) {
            this.issueMachineDown();
        }
        else {
            _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"].presentAlert('Alert', 'Are you sure want to issue down this machine?<br/><br/>' + this.arrTransfile[0].Machine, function (res) {
                if (res.role = _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK) {
                    _this.issueMachineDown();
                }
            }, [_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_CANCEL, _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].b_OK]);
        }
    };
    OperatorPage.prototype.issueMachineDown = function () {
        var _this = this;
        this.issueMachineDownReqModel.transfileID = this.arrTransfile[0].TransfileID;
        this.arrMachineDown = [];
        this.service.presentLoading();
        this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_ISSUE_MDOWN, this.issueMachineDownReqModel, function (res) {
            _this.service.dismissLoading();
            if (res.status_code == 0 /* Success */) {
                _this.arrMachineDown = JSON.parse(res.data);
                _this.arrTransfile = [];
                _this.service.presentLoading();
                _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_TRANSFILE, _this.transfileReqModel, function (res) {
                    _this.service.dismissLoading();
                    _this.afterGetTransfile(res);
                    _this.service.setData('downstart', {
                        'machineDown': _this.arrMachineDown[0],
                        'sms': _this.smsReqModel,
                        'transfile': _this.arrTransfile[0]
                    });
                    _this.navCtrl.navigateForward('/operator/machine-down/downstart');
                }, false);
            }
        }, false);
    };
    OperatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operator',
            template: __webpack_require__(/*! ./operator.page.html */ "./src/app/operator/operator.page.html"),
            styles: [__webpack_require__(/*! ./operator.page.scss */ "./src/app/operator/operator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]])
    ], OperatorPage);
    return OperatorPage;
}(_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"]));



/***/ }),

/***/ "./src/app/operator/sel-dept/sel-dept.component.html":
/*!***********************************************************!*\
  !*** ./src/app/operator/sel-dept/sel-dept.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Select Department</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"cancelModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label><strong>Select All</strong></ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\" (click)=\"checkMaster()\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list> -->\n  <ion-list *ngIf=\"cacheDept.list\">\n    <ion-item *ngFor=\"let item of cacheDept.list\" (click)='onDepartmentClicked(item)'>\n      <ion-label>{{item.name}}</ion-label>\n      <!-- <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox> -->\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"checkBoxList\">\n          <ion-button [disabled]=\"disableSelectButton()\" class=\"obj-center\" (click)=\"navigateToSelProcess()\">Select\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/operator/sel-dept/sel-dept.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/operator/sel-dept/sel-dept.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvb3BlcmF0b3Ivc2VsLWRlcHQvc2VsLWRlcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3BlcmF0b3Ivc2VsLWRlcHQvc2VsLWRlcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2JqLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/operator/sel-dept/sel-dept.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/operator/sel-dept/sel-dept.component.ts ***!
  \*********************************************************/
/*! exports provided: SelDeptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelDeptComponent", function() { return SelDeptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sel_process_sel_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sel-process/sel-process.component */ "./src/app/operator/sel-process/sel-process.component.ts");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");









var SelDeptComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelDeptComponent, _super);
    // department: any;
    // isSelectMachine: boolean = false;
    // isIndeterminate: boolean;
    // masterCheck: boolean;
    // checkBoxList: any;
    function SelDeptComponent(loadingCtrl, alertCtrl, modalCtrl, navCtrl, service, storage) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.modalCtrl = modalCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.deptReqModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__["AccessTokenModel"]();
        // arrDept: Array<any> = [];
        _this.cacheDept = new src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageCache"]();
        return _this;
    }
    SelDeptComponent.prototype.ngOnInit = function () {
        this.storage.remove(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_MACHINE_LIST);
        this.callWSGetDept();
    };
    // ionViewWillEnter () {
    //   this.callWSGetDept();
    // }
    SelDeptComponent.prototype.cancelModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalCtrl.dismiss()];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelDeptComponent.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // const onClosedData: string = "Wrapped Up!";
                // await this.modalCtrl.dismiss(this.checkBoxList);
                this.navigateToSelProcess();
                return [2 /*return*/];
            });
        });
    };
    SelDeptComponent.prototype.callWSGetDept = function () {
        var _this = this;
        this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_DEPARTMENT).then(function (department) {
            if (department == undefined || department == null) {
                // GET LATEST DEPARTMENT LIST
                _this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
                    _this.deptReqModel.accesstoken = accessToken;
                    _this.service.presentLoading();
                    _this.service.callWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_DEPT, _this.deptReqModel, function (res) {
                        if ((res && res.data && res.data != '' && res.data != '-') && res.status_code == 0 /* Success */) {
                            _this.cacheDept.list = JSON.parse(res.data);
                        }
                        _this.service.dismissLoading();
                    }, false);
                });
            }
            else {
                _this.cacheDept.list = department.list;
            }
        });
    };
    // checkMaster() {
    //   setTimeout(() => {
    //     this.checkBoxList.forEach(obj => {
    //       obj.isChecked = this.masterCheck;
    //     });
    //   });
    // }
    // checkEvent() {
    //   const totalItems = this.checkBoxList.length;
    //   let checked = 0;
    //   this.checkBoxList.map(obj => {
    //     if (obj.isChecked) checked++;
    //   });
    //   if (checked > 0 && checked < totalItems) {
    //     //If even one item is checked but not all
    //     this.isIndeterminate = true;
    //     this.masterCheck = false;
    //   } else if (checked == totalItems) {
    //     //If all are checked
    //     this.masterCheck = true;
    //     this.isIndeterminate = false;
    //   } else {
    //     //If none is checked
    //     this.isIndeterminate = false;
    //     this.masterCheck = false;
    //   }
    // }
    SelDeptComponent.prototype.navigateToSelProcess = function () {
        // var arrSelectedDept: Array<any> = [];
        // this.checkBoxList.forEach(element => {
        //   if (element.isChecked) {
        //     arrSelectedDept.push(element.dept.value)
        //   }
        // });
        // CACHE FOR DEPT SELECTION IF USER ENTER FOR SECOND TIME AFTER CLOSE / KILL APP
        // this.storage.set(Constants.c_OP_SEL_DEPT, arrSelectedDept)
        // if (this.disableSelectButton()) {
        //   BasePagePage.presentAlert('Alert', 'Please select at least one (1) department.');
        // } else {
        //   const nav = document.querySelector('ion-nav');
        //   nav.push(SelProcessComponent, {
        //     "arrSelectedDept": arrSelectedDept,
        //   });
        // }
        var nav = document.querySelector('ion-nav');
        nav.push(_sel_process_sel_process_component__WEBPACK_IMPORTED_MODULE_3__["SelProcessComponent"], {
            "arrSelectedDept": [this.cacheDept.selected.value],
        });
    };
    // disableSelectButton(): boolean {
    //   var isCheckedAtLeastOne: boolean = false;
    //   // this.checkBoxList.forEach(element => {
    //   //   if (element.isChecked) {
    //   //     isCheckedAtLeastOne = true
    //   //     return;
    //   //   }
    //   // });
    //   return !isCheckedAtLeastOne
    // }
    SelDeptComponent.prototype.onClose = function () {
        this.modalCtrl.dismiss();
    };
    SelDeptComponent.prototype.onDepartmentClicked = function (department) {
        this.cacheDept.selected = department;
        src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('cacheDept: ', this.cacheDept);
        // CACHE FOR MACHINE SELECTION IF USER ENTER FOR SECOND TIME AFTER CLOSE / KILL APP
        this.storage.set(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_DEPARTMENT, this.cacheDept);
        this.closeModal();
    };
    SelDeptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sel-dept',
            template: __webpack_require__(/*! ./sel-dept.component.html */ "./src/app/operator/sel-dept/sel-dept.component.html"),
            styles: [__webpack_require__(/*! ./sel-dept.component.scss */ "./src/app/operator/sel-dept/sel-dept.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], SelDeptComponent);
    return SelDeptComponent;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"]));



/***/ }),

/***/ "./src/app/operator/sel-machine/sel-machine.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/operator/sel-machine/sel-machine.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"custom-header\">\n  <ion-toolbar>\n    <ion-title>Select Machine</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"cancelModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label><strong>Select All</strong></ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\" (click)=\"checkMaster()\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list> -->\n  <ion-list>\n    <ion-item *ngFor=\"let item of cacheMachine.list\" (click)='onMachineClicked(item)'>\n      <ion-label>{{item.name}}</ion-label>\n      <!-- <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox> -->\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"obj-center\" (click)=\"closeModal()\">Select</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/operator/sel-machine/sel-machine.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/operator/sel-machine/sel-machine.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvb3BlcmF0b3Ivc2VsLW1hY2hpbmUvc2VsLW1hY2hpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3BlcmF0b3Ivc2VsLW1hY2hpbmUvc2VsLW1hY2hpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2JqLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/operator/sel-machine/sel-machine.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/operator/sel-machine/sel-machine.component.ts ***!
  \***************************************************************/
/*! exports provided: SelMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelMachineComponent", function() { return SelMachineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");








var SelMachineComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelMachineComponent, _super);
    // machine: any;
    function SelMachineComponent(loadingCtrl, alertCtrl, modalCtrl, navCtrl, navParams, service, storage) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.modalCtrl = modalCtrl;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.service = service;
        _this.storage = storage;
        _this.cacheMachine = new src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["LocalStorageCache"]();
        // arrSelectedProcess: Array<any> = [];
        // arrMachine: Array<any> = [];
        _this.machineReqModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_6__["MachineModel"]();
        return _this;
    }
    SelMachineComponent.prototype.ngOnInit = function () {
        if (!(this.navParams.data.arrSelectedProcess == null || this.navParams.data.arrSelectedProcess == undefined || this.navParams.data.arrSelectedProcess.length == 0)) {
            this.callWSGetMachine();
        }
    };
    SelMachineComponent.prototype.cancelModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalCtrl.dismiss()];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelMachineComponent.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalCtrl.dismiss(this.cacheMachine.selected)];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelMachineComponent.prototype.callWSGetMachine = function () {
        var _this = this;
        this.machineReqModel.process = this.navParams.data.arrSelectedProcess;
        this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].c_OP_MACHINE).then(function (machine) {
            if (machine == null || machine.list == null || machine.list.length == 0) {
                _this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
                    _this.machineReqModel.accesstoken = accessToken;
                    _this.service.presentLoading();
                    _this.service.callWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].k_GET_MACHINE, _this.machineReqModel, function (res) {
                        if ((res && res.data && res.data != '' && res.data != '-') && res.status_code == 0 /* Success */) {
                            _this.cacheMachine.list = JSON.parse(res.data);
                        }
                        _this.service.dismissLoading();
                    }, false);
                });
            }
            else {
                _this.cacheMachine.list = machine.list;
            }
        });
    };
    SelMachineComponent.prototype.onMachineClicked = function (machine) {
        this.cacheMachine.selected = machine;
        // CACHE FOR MACHINE SELECTION IF USER ENTER FOR SECOND TIME AFTER CLOSE / KILL APP
        this.storage.set(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_5__["Constants"].c_OP_MACHINE, this.cacheMachine);
        this.closeModal();
    };
    SelMachineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sel-machine',
            template: __webpack_require__(/*! ./sel-machine.component.html */ "./src/app/operator/sel-machine/sel-machine.component.html"),
            styles: [__webpack_require__(/*! ./sel-machine.component.scss */ "./src/app/operator/sel-machine/sel-machine.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], SelMachineComponent);
    return SelMachineComponent;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_2__["BasePagePage"]));



/***/ }),

/***/ "./src/app/operator/sel-process/sel-process.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/operator/sel-process/sel-process.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"custom-header\">\n  <ion-toolbar>\n    <ion-title>Select Process</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"cancelModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label><strong>Select All</strong></ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"masterCheck\" [indeterminate]=\"isIndeterminate\" (click)=\"checkMaster()\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list> -->\n  <ion-list *ngIf=\"cacheProcess.list\">\n    <ion-item *ngFor=\"let item of cacheProcess.list\" (click)='onProcessClicked(item)'>\n      <ion-label>{{item.value}}</ion-label>\n      <!-- <ion-checkbox slot=\"start\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkEvent()\"></ion-checkbox> -->\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"checkBoxList\">\n          <ion-button [disabled]=\"disableSelectButton()\" class=\"obj-center\" (click)=\"navigateToSelMachine()\">Select\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/operator/sel-process/sel-process.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/operator/sel-process/sel-process.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvb3BlcmF0b3Ivc2VsLXByb2Nlc3Mvc2VsLXByb2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3BlcmF0b3Ivc2VsLXByb2Nlc3Mvc2VsLXByb2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2JqLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/operator/sel-process/sel-process.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/operator/sel-process/sel-process.component.ts ***!
  \***************************************************************/
/*! exports provided: SelProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelProcessComponent", function() { return SelProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sel_machine_sel_machine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sel-machine/sel-machine.component */ "./src/app/operator/sel-machine/sel-machine.component.ts");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");









var SelProcessComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelProcessComponent, _super);
    function SelProcessComponent(loadingCtrl, alertCtrl, modalCtrl, navCtrl, navParams, service, storage) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.modalCtrl = modalCtrl;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.service = service;
        _this.storage = storage;
        _this.cacheProcess = new src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageCache"]();
        // isSelectMachine: boolean = false;
        // isIndeterminate: boolean;
        // masterCheck: boolean;
        // checkBoxList: any;
        // arrSelectedDept: Array<any> = [];
        // arrProcess: Array<any> = [];
        _this.processReqModel = new src_app_data_model_base_model__WEBPACK_IMPORTED_MODULE_7__["ProcessModel"]();
        return _this;
    }
    SelProcessComponent.prototype.ngOnInit = function () {
        // this.arrSelectedDept = this.navParams.data.arrSelectedDept;
        this.storage.remove(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_PROCESS);
        this.callWSGetProcess();
    };
    // checkMaster() {
    //   setTimeout(() => {
    //     this.checkBoxList.forEach(obj => {
    //       obj.isChecked = this.masterCheck;
    //     });
    //   });
    // }
    // checkEvent() {
    //   const totalItems = this.checkBoxList.length;
    //   let checked = 0;
    //   this.checkBoxList.map(obj => {
    //     if (obj.isChecked) checked++;
    //   });
    //   if (checked > 0 && checked < totalItems) {
    //     //If even one item is checked but not all
    //     this.isIndeterminate = true;
    //     this.masterCheck = false;
    //   } else if (checked == totalItems) {
    //     //If all are checked
    //     this.masterCheck = true;
    //     this.isIndeterminate = false;
    //   } else {
    //     //If none is checked
    //     this.isIndeterminate = false;
    //     this.masterCheck = false;
    //   }
    // }
    SelProcessComponent.prototype.onClose = function () {
        this.modalCtrl.dismiss();
    };
    SelProcessComponent.prototype.cancelModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalCtrl.dismiss()];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelProcessComponent.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const onClosedData: string = "Wrapped Up!";
                    return [4 /*yield*/, this.modalCtrl.dismiss(this.cacheProcess)];
                    case 1:
                        // const onClosedData: string = "Wrapped Up!";
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelProcessComponent.prototype.callWSGetProcess = function () {
        var _this = this;
        this.processReqModel.dept = this.navParams.data.arrSelectedDept;
        // GET LATEST PROCESS LIST
        this.storage.get(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.processReqModel.accesstoken = accessToken;
            _this.service.presentLoading();
            _this.service.callWebService(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_PROCESS, _this.processReqModel, function (res) {
                if ((res && res.data && res.data != '' && res.data != '-') && res.status_code == 0 /* Success */) {
                    _this.cacheProcess.list = JSON.parse(res.data);
                }
                _this.service.dismissLoading();
            }, false);
        });
    };
    SelProcessComponent.prototype.navigateToSelMachine = function () {
        // var arrSelectedProcess: Array<any> = [];
        // this.checkBoxList.forEach(element => {
        //   if (element.isChecked) {
        //     arrSelectedProcess.push(element.process.value)
        //   }
        // });
        // // CACHE FOR PROCESS SELECTION IF USER ENTER FOR SECOND TIME AFTER CLOSE / KILL APP
        // this.storage.set(Constants.c_OP_SEL_PROC, arrSelectedProcess)
        // if (this.disableSelectButton()) {
        //   BasePagePage.presentAlert('Alert', 'Please select at least one (1) process.');
        // } else {
        //   const nav = document.querySelector('ion-nav');
        //   nav.push(SelMachineComponent, {
        //     "arrSelectedProcess": arrSelectedProcess,
        //   });
        // }
        var nav = document.querySelector('ion-nav');
        nav.push(_sel_machine_sel_machine_component__WEBPACK_IMPORTED_MODULE_3__["SelMachineComponent"], {
            "arrSelectedProcess": [this.cacheProcess.selected.value],
        });
    };
    // disableSelectButton(): boolean {
    //   var isCheckedAtLeastOne: boolean = false;
    //   this.checkBoxList.forEach(element => {
    //     if (element.isChecked) {
    //       isCheckedAtLeastOne = true
    //       return;
    //     }
    //   });
    //   return !isCheckedAtLeastOne
    // }
    SelProcessComponent.prototype.onProcessClicked = function (process) {
        this.cacheProcess.selected = process;
        // CACHE FOR MACHINE SELECTION IF USER ENTER FOR SECOND TIME AFTER CLOSE / KILL APP
        this.storage.set(src_app_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_PROCESS, this.cacheProcess);
        this.navigateToSelMachine();
    };
    SelProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sel-process',
            template: __webpack_require__(/*! ./sel-process.component.html */ "./src/app/operator/sel-process/sel-process.component.html"),
            styles: [__webpack_require__(/*! ./sel-process.component.scss */ "./src/app/operator/sel-process/sel-process.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], SelProcessComponent);
    return SelProcessComponent;
}(src_app_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=operator-operator-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

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

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Clock-in Details\n    </ion-title>\n    <ion-buttons slot=\"end\" [hidden]=\"true\">\n      <ion-fab-button size=\"small\" (click)=\"closeMenu()\">\n        <ion-icon name=\"list-box\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-fab-button size=\"small\" (click)=\"exportEmail()\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"welcome-card\" *ngIf=\"isOk == false\">\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n      <ion-item>\n        <ion-label position=\"floating\">Employee ID</ion-label>\n        <ion-input type=\"text\" (keypress)=\"numberOnlyValidation($event)\" maxlength=\"10\" required [(ngModel)]=\"strEmpID\"\n          name=\"empID\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"isEmpIDFound == true\">\n        <ion-label position=\"floating\">Job No (HARDCODED)</ion-label>\n        <ion-input type=\"text\" value=\"{{strJobNo}}\" required disabled [(ngModel)]=\"strJobNo\" name=\"jobNo\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"isEmpIDFound == true\">\n        <ion-label position=\"floating\">Job Qty (HARDCODED)</ion-label>\n        <ion-input type=\"text\" value=\"{{strJobQty}}\" required disabled [(ngModel)]=\"strJobQty\" name=\"jobQty\">\n        </ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"isEmpIDFound == true\">\n        <ion-label position=\"floating\">Process Code (HARDCODED)</ion-label>\n        <ion-input type=\"text\" value=\"{{strProcessCode}}\" required disabled [(ngModel)]=\"strProcessCode\"\n          name=\"processCode\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"isEmpIDFound == true\">\n        <ion-label position=\"floating\">Machine (HARDCODED)</ion-label>\n        <ion-input type=\"text\" value=\"{{strMachineID}}\" required disabled [(ngModel)]=\"strMachineID\" name=\"machineID\">\n        </ion-input>\n      </ion-item>\n      <!-- <ion-item *ngIf=\"strEmpID.toString().length >= 5\">\n        <ion-label>Machine</ion-label>\n        <ion-select *ngIf=\"arrMachines\"[(ngModel)]=\"selectedMachine\" interface=\"action-sheet\" name=\"machineID\" multiple=\"false\" placeholder=\"Tap to select..\" [selectedText]=\"selectedMachine\" (ionChange)=\"onMachineSelected()\"\n          required>\n          <ion-select-option *ngFor=\"let machine of arrMachines\" value=\"{{machine.name}}\">\n            {{machine.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item> -->\n\n\n      <!-- <ion-grid>\n        <ion-item> -->\n          <ion-row>\n            <ion-col col-6>\n              <ion-button [disabled]=\"form.invalid || strEmpID.toString().length < 5\" type=\"button\" color=\"danger\" class=\"obj-center\" (click)=\"onClockOutClicked()\">\n                Clock-out\n              </ion-button>\n            </ion-col>\n            <ion-col col-6>\n              <ion-button [disabled]=\"form.invalid || strEmpID.toString().length < 5\" type=\"submit\" color=\"success\" class=\"obj-center\">\n                {{strButtonTitle}}\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        <!-- </ion-item>\n      </ion-grid> -->\n\n\n    </form>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-content [hidden]=\"true\">\n  <p *ngIf=\"barcodeData\">\n    Scanned: {{barcodeData['text']}} | {{barcodeData['format']}}\n  </p>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  padding: 2px;\n  height: 100%; }\n\nion-row {\n  padding: 1px;\n  height: auto;\n  min-height: 20vh; }\n\nion-col {\n  margin: 4px;\n  background: gray;\n  display: inline-grid; }\n\nion-col h1 {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\nh1 {\n  color: black;\n  text-shadow: 0px 2px 2px white; }\n\nion-select {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvSU9OSUNfUFJPSkVDVF9NQUlOL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFSSxXQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQUp4QjtJQVFRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBOztBQUszQjtFQUNJLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksWUFBVztFQUNYLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDBCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1yb3cge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMjB2aDtcbn1cblxuaW9uLWNvbCB7XG4gICAgLy8gcGFkZGluZzogMnB4O1xuICAgIG1hcmdpbjo0cHg7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAvLyBib3JkZXI6IHRoaW5rIHNvbGlkIGJsYWNrO1xuXG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB9XG59XG5cbi5vYmotY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmgxIHtcbiAgICBjb2xvcjpibGFjaztcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCAycHggd2hpdGU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var HomePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomePage, _super);
    function HomePage(loadingCtrl, alertCtrl, navCtrl, service, storage, modalController, route, barcodeScanner) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.storage = storage;
        _this.modalController = modalController;
        _this.route = route;
        _this.barcodeScanner = barcodeScanner;
        _this.strEmpID = '00001';
        _this.strJobNo = 'KY20040122';
        _this.strJobQty = '2';
        _this.strProcessCode = "DCUT";
        _this.strMachineID = 'GL371';
        _this.strButtonTitle = 'Clock-in';
        // arrButtonTitle: Array<any> = [
        //   'Loading',
        //   'PM',
        //   'Setting',
        //   'Resetting',
        //   'Quality Problem',
        //   'Break Time',
        //   'Shift Change'
        // ];
        _this.selectedMachine = '';
        _this.arrRow = [];
        _this.isOk = false;
        _this.isEmpIDFound = true;
        _this.deviceReqModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["AccessTokenModel"]();
        _this.machineDownReasonModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["AccessTokenModel"]();
        _this.arrMachines = [];
        _this.arrDownReasons = [];
        _this.arrSelectedMachines = [];
        _this.arrSelectedMachiness = '';
        _this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_ACCESS_TOKEN).then(function (accessToken) {
            _this.deviceReqModel.accesstoken = accessToken;
            _this.machineDownReasonModel.accesstoken = accessToken;
            _this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_GET_DEVICE, _this.deviceReqModel, function (res) {
                _this.arrMachines = JSON.parse(res.data);
                _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log("arrMachines: ", _this.arrMachines);
            });
        });
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        // while (this.arrButtonTitle.length > 0)
        //   this.arrRow.push(this.arrButtonTitle.splice(0, 2));
        // config.log("arraysarrays: ", this.arrRow);
        // if (this.route.snapshot.data['special']) {
        //   this.strEmpID = this.route.snapshot.data['special'];
        // }
    };
    HomePage.prototype.closeMenu = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.barcodeData = barcodeData;
            _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('Barcode data', _this.barcodeData);
        }).catch(function (err) {
            _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('Error', err);
        });
    };
    HomePage.prototype.onButtonClicked = function (e) {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('onButtonClicked: ', e.srcElement['innerText']);
    };
    HomePage.prototype.onClockOutClicked = function () {
        this.navCtrl.navigateBack("/home/clock-in-history");
    };
    // async presentModal() {
    //   const modal = await this.modalController.create({
    //     component: HomePage,
    //     componentProps: {
    //       "checkBoxList": this.checkBoxList,
    //       "paramTitle": "Select Machine"
    //     }
    //   });
    //   modal.onDiddismissLoading().then((dataReturned) => {
    //     if (dataReturned !== null && dataReturned.data !== undefined) {
    //       // this.dataReturned = dataReturned.data;
    //       this.arrSelectedMachines = [];
    //       dataReturned.data.forEach(element => {
    //         if (element.isChecked) {
    //           this.arrSelectedMachines.push(element.machine.value)
    //         }
    //       });
    //       config.log('--- Modal SELECTED Data: ', this.arrSelectedMachines);
    //       // this.optionsFn();
    //     }
    //   });
    //   return await modal.presentLoading();
    // }
    HomePage.prototype.optionsFn = function () {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log("HAHA");
    };
    HomePage.prototype.numberOnlyValidation = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    HomePage.prototype.onMachineSelected = function () {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('selectedMachine: ', this.selectedMachine);
    };
    HomePage.prototype.onSubmit = function (form) {
        _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["config"].log('datatatat: ', form.value);
        // this.service.getWebService(Constants.k_GET_MACHINE_DOWN_REASON, this.machineDownReasonModel, (res) => {
        //   this.arrDownReasons = JSON.parse(res.data);
        //   config.log('arrDown: ', this.arrDownReasons);
        //   while (this.arrDownReasons.length > 0)
        //     this.arrRow.push(this.arrDownReasons.splice(0, 2));
        //   this.isOk = true;
        // });
        if (this.isEmpIDFound == true) {
            // this.isOk = true;
            this.navCtrl.navigateForward('/home/clock-in');
        }
        else {
            this.isEmpIDFound = true;
            this.strButtonTitle = 'Clock-in';
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]])
    ], HomePage);
    return HomePage;
}(_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_8__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-sel-dept-sel-dept-module"],{

/***/ "./src/app/operator/sel-dept/sel-dept.module.ts":
/*!******************************************************!*\
  !*** ./src/app/operator/sel-dept/sel-dept.module.ts ***!
  \******************************************************/
/*! exports provided: SelDeptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelDeptPageModule", function() { return SelDeptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sel_dept_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sel-dept.page */ "./src/app/operator/sel-dept/sel-dept.page.ts");
/* harmony import */ var _sel_process_sel_process_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sel-process/sel-process.page */ "./src/app/operator/sel-process/sel-process.page.ts");








var routes = [
    {
        path: '',
        component: _sel_dept_page__WEBPACK_IMPORTED_MODULE_6__["SelDeptPage"]
    }
];
var SelDeptPageModule = /** @class */ (function () {
    function SelDeptPageModule() {
    }
    SelDeptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_sel_process_sel_process_page__WEBPACK_IMPORTED_MODULE_7__["SelProcessPage"]],
            declarations: [_sel_dept_page__WEBPACK_IMPORTED_MODULE_6__["SelDeptPage"]]
        })
    ], SelDeptPageModule);
    return SelDeptPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=operator-sel-dept-sel-dept-module.js.map
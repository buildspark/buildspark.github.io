(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/@ionic-native/downloader/ngx/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic-native/downloader/ngx/index.js ***!
  \************************************************************/
/*! exports provided: NotificationVisibility, Downloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationVisibility", function() { return NotificationVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Downloader", function() { return Downloader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var NotificationVisibility;
(function (NotificationVisibility) {
    NotificationVisibility[NotificationVisibility["Visible"] = 0] = "Visible";
    NotificationVisibility[NotificationVisibility["VisibleNotifyCompleted"] = 1] = "VisibleNotifyCompleted";
    NotificationVisibility[NotificationVisibility["VisibilityHidden"] = 2] = "VisibilityHidden";
    NotificationVisibility[NotificationVisibility["VisibleNotifyOnlyCompletion"] = 3] = "VisibleNotifyOnlyCompletion";
})(NotificationVisibility || (NotificationVisibility = {}));
var Downloader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Downloader, _super);
    function Downloader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Downloader.prototype.download = function (request) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "download", {}, arguments); };
    Downloader.pluginName = "Downloader";
    Downloader.plugin = "integrator-cordova-plugin-downloader";
    Downloader.pluginRef = "cordova.plugins.Downloader";
    Downloader.repo = "https://github.com/Luka313/integrator-cordova-plugin-downloader.git";
    Downloader.platforms = ["Android"];
    Downloader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Downloader);
    return Downloader;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Rvd25sb2FkZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVksc0JBS1g7QUFMRCxXQUFZLHNCQUFzQjtJQUNoQyx5RUFBVyxDQUFBO0lBQ1gsdUdBQTBCLENBQUE7SUFDMUIsMkZBQW9CLENBQUE7SUFDcEIsaUhBQStCLENBQUE7QUFDakMsQ0FBQyxFQUxXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFLakM7O0lBMEcrQiw4QkFBaUI7Ozs7SUFNL0MsNkJBQVEsYUFBQyxPQUF3Qjs7Ozs7O0lBTnRCLFVBQVU7UUFEdEIsVUFBVSxFQUFFO09BQ0EsVUFBVTtxQkFsSHZCO0VBa0hnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25WaXNpYmlsaXR5IHtcbiAgVmlzaWJsZSA9IDAsXG4gIFZpc2libGVOb3RpZnlDb21wbGV0ZWQgPSAxLFxuICBWaXNpYmlsaXR5SGlkZGVuID0gMixcbiAgVmlzaWJsZU5vdGlmeU9ubHlDb21wbGV0aW9uID0gMyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZEh0dHBIZWFkZXIge1xuICBoZWFkZXI6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXN0aW5hdGlvbkRpcmVjdG9yeSB7XG4gIGRpclR5cGU6IHN0cmluZztcbiAgc3ViUGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBvZiB0aGUgcmVzb3VyY2UgdG8gZG93bmxvYWRcbiAgICovXG4gIHVyaTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHRpdGxlIG9mIHRoaXMgZG93bmxvYWQsIHRvIGJlIGRpc3BsYXllZCBpbiBub3RpZmljYXRpb25zIChpZiBlbmFibGVkKS5cbiAgICogSWYgbm8gdGl0bGUgaXMgZ2l2ZW4sIGEgZGVmYXVsdCBvbmUgd2lsbCBiZSBhc3NpZ25lZCBiYXNlZCBvbiB0aGUgZG93bmxvYWQgZmlsZW5hbWUsIG9uY2UgdGhlIGRvd25sb2FkIHN0YXJ0cy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogU2V0IGEgZGVzY3JpcHRpb24gb2YgdGhpcyBkb3dubG9hZCwgdG8gYmUgZGlzcGxheWVkIGluIG5vdGlmaWNhdGlvbnMgKGlmIGVuYWJsZWQpXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFNldCB0aGUgTUlNRSBjb250ZW50IHR5cGUgb2YgdGhpcyBkb3dubG9hZC4gVGhpcyB3aWxsIG92ZXJyaWRlIHRoZSBjb250ZW50IHR5cGUgZGVjbGFyZWQgaW4gdGhlIHNlcnZlcidzIHJlc3BvbnNlLlxuICAgKi9cbiAgbWltZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGlzIGRvd25sb2FkIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN5c3RlbSdzIERvd25sb2FkcyBVSS4gVHJ1ZSBieSBkZWZhdWx0LlxuICAgKi9cbiAgdmlzaWJsZUluRG93bmxvYWRzVWk/OiBib29sZWFuO1xuICAvKipcbiAgICogQ29udHJvbCB3aGV0aGVyIGEgc3lzdGVtIG5vdGlmaWNhdGlvbiBpcyBwb3N0ZWQgYnkgdGhlIGRvd25sb2FkIG1hbmFnZXIgd2hpbGUgdGhpcyBkb3dubG9hZCBpcyBydW5uaW5nIG9yIHdoZW4gaXQgaXMgY29tcGxldGVkLlxuICAgKi9cbiAgbm90aWZpY2F0aW9uVmlzaWJpbGl0eT86IE5vdGlmaWNhdGlvblZpc2liaWxpdHk7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGxvY2FsIGRlc3RpbmF0aW9uIGZvciB0aGUgZG93bmxvYWRlZCBmaWxlIHRvIGEgcGF0aCB3aXRoaW4gdGhlIGFwcGxpY2F0aW9uJ3MgZXh0ZXJuYWwgZmlsZXMgZGlyZWN0b3J5XG4gICAqL1xuICBkZXN0aW5hdGlvbkluRXh0ZXJuYWxGaWxlc0Rpcj86IERlc3RpbmF0aW9uRGlyZWN0b3J5O1xuICAvKipcbiAgICogU2V0IHRoZSBsb2NhbCBkZXN0aW5hdGlvbiBmb3IgdGhlIGRvd25sb2FkZWQgZmlsZSB0byBhIHBhdGggd2l0aGluIHRoZSBwdWJsaWMgZXh0ZXJuYWwgc3RvcmFnZSBkaXJlY3RvcnlcbiAgICovXG4gIGRlc3RpbmF0aW9uSW5FeHRlcm5hbFB1YmxpY0Rpcj86IERlc3RpbmF0aW9uRGlyZWN0b3J5O1xuICAvKipcbiAgICogU2V0IHRoZSBsb2NhbCBkZXN0aW5hdGlvbiBmb3IgdGhlIGRvd25sb2FkZWQgZmlsZS5cbiAgICogTXVzdCBiZSBhIGZpbGUgVVJJIHRvIGEgcGF0aCBvbiBleHRlcm5hbCBzdG9yYWdlLCBhbmQgdGhlIGNhbGxpbmcgYXBwbGljYXRpb24gbXVzdCBoYXZlIHRoZSBXUklURV9FWFRFUk5BTF9TVE9SQUdFIHBlcm1pc3Npb24uXG4gICAqL1xuICBkZXN0aW5hdGlvblVyaT86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZCBhbiBIVFRQIGhlYWRlciB0byBiZSBpbmNsdWRlZCB3aXRoIHRoZSBkb3dubG9hZCByZXF1ZXN0LiBUaGUgaGVhZGVyIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIGhlYWRlcnM/OiBEb3dubG9hZEh0dHBIZWFkZXJbXTtcbn1cblxuLyoqXG4gKiBAbmFtZSBEb3dubG9hZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGlzIGRlc2lnbmVkIHRvIHN1cHBvcnQgZG93bmxvYWRpbmcgZmlsZXMgdXNpbmcgQW5kcm9pZCBEb3dubG9hZE1hbmFnZXIuXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG93bmxvYWRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG93bmxvYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvd25sb2FkZXI6IERvd25sb2FkZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqICAgIHZhciByZXF1ZXN0OiBEb3dubG9hZFJlcXVlc3QgPSB7XG4gKiAgICAgICAgICAgdXJpOiBZT1VSX1VSSSxcbiAqICAgICAgICAgICB0aXRsZTogJ015RG93bmxvYWQnLFxuICogICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAqICAgICAgICAgICBtaW1lVHlwZTogJycsXG4gKiAgICAgICAgICAgdmlzaWJsZUluRG93bmxvYWRzVWk6IHRydWUsXG4gKiAgICAgICAgICAgbm90aWZpY2F0aW9uVmlzaWJpbGl0eTogTm90aWZpY2F0aW9uVmlzaWJpbGl0eS5WaXNpYmxlTm90aWZ5Q29tcGxldGVkLFxuICogICAgICAgICAgIGRlc3RpbmF0aW9uSW5FeHRlcm5hbEZpbGVzRGlyOiB7XG4gKiAgICAgICAgICAgICAgIGRpclR5cGU6ICdEb3dubG9hZHMnLFxuICogICAgICAgICAgICAgICBzdWJQYXRoOiAnTXlGaWxlLmFwaydcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9O1xuICpcbiAqXG4gKiAgIHRoaXMuZG93bmxvYWRlci5kb3dubG9hZChyZXF1ZXN0KVxuICogICBcdFx0XHQudGhlbigobG9jYXRpb246IHN0cmluZykgPT4gY29uc29sZS5sb2coJ0ZpbGUgZG93bmxvYWRlZCBhdDonK2xvY2F0aW9uKSlcbiAqICAgXHRcdFx0LmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTm90aWZpY2F0aW9uVmlzaWJpbGl0eVxuICogSGVhZGVyXG4gKiBEZXN0aW5hdGlvbkRpcmVjdG9yeVxuICogRG93bmxvYWRIdHRwSGVhZGVyXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRG93bmxvYWRlcicsXG4gIHBsdWdpbjogJ2ludGVncmF0b3ItY29yZG92YS1wbHVnaW4tZG93bmxvYWRlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Eb3dubG9hZGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9MdWthMzEzL2ludGVncmF0b3ItY29yZG92YS1wbHVnaW4tZG93bmxvYWRlci5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb3dubG9hZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIFN0YXJ0cyBhIG5ldyBkb3dubG9hZCBhbmQgcmV0dXJucyBsb2NhdGlvbiBvZiB0aGUgZG93bmxvYWRlZCBmaWxlIG9uIGNvbXBsZXRpb25cbiAgICogIEBwYXJhbSByZXF1ZXN0IHtEb3dubG9hZFJlcXVlc3R9XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkKHJlcXVlc3Q6IERvd25sb2FkUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/file/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/file/ngx/index.js ***!
  \******************************************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var File = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationStorageDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "dataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "dataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "cacheDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "cacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalApplicationStorageDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalApplicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalDataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalCacheDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalCacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalRootDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalRootDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "tempDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "tempDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "syncedDataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "syncedDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "documentsDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "documentsDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "sharedDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "sharedDirectory", value); },
        enumerable: true,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    File = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], File);
    return File;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sZ0ZBQTRELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQW9xQmhGLHdCQUFpQjs7O1FBOER6QyxzQkFBZ0IsR0FBUTtZQUN0QixDQUFDLEVBQUUsZUFBZTtZQUNsQixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLDZCQUE2QjtZQUNoQyxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLENBQUMsRUFBRSxZQUFZO1lBQ2YsQ0FBQyxFQUFFLDBCQUEwQjtZQUM3QixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLGlCQUFpQjtZQUNyQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7OztJQU9GLCtCQUFnQjs7O21EQUFvQjtnQkFDbEMsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFXRCx1QkFBUSxhQUFDLElBQVksRUFBRSxHQUFXOzs7bURBQW9CO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxD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LHNDQUFvQjs7Ozs7OzBCQUtwQiw2Q0FBMkI7Ozs7OzswQkFLM0IsK0JBQWE7Ozs7OzswQkFNYixnQ0FBYzs7Ozs7OzBCQUtkLHFEQUFtQzs7Ozs7OzBCQUtuQyx1Q0FBcUI7Ozs7OzswQkFLckIsd0NBQXNCOzs7Ozs7MEJBS3RCLHVDQUFxQjs7Ozs7OzBCQUtyQiwrQkFBYTs7Ozs7OzBCQUtiLHFDQUFtQjs7Ozs7OzBCQUtuQixvQ0FBa0I7Ozs7OzswQkFLbEIsaUNBQWU7Ozs7Ozs7Ozs7O0lBNUR2QixJQUFJO1FBRGhCLFVBQVUsRUFBRTtPQUNBLElBQUk7ZUFycUJqQjtFQXFxQjBCLGlCQUFpQjtTQUE5QixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUNoZWNrLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlIGV4dGVuZHMgQmxvYiB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBmaWxlLCB3aXRob3V0IHBhdGggaW5mb3JtYXRpb25cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIExhc3QgbW9kaWZpZWQgZGF0ZVxuICAgKi9cbiAgbGFzdE1vZGlmaWVkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcbiAgICovXG4gIGxhc3RNb2RpZmllZERhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFNpemUgaW4gYnl0ZXNcbiAgICovXG4gIHNpemU6IG51bWJlcjtcbiAgLyoqXG4gICAqIEZpbGUgbWltZSB0eXBlXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIGxvY2FsVVJMOiBzdHJpbmc7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgXCJzbGljZVwiIG9mIHRoZSBmaWxlLiBTaW5jZSBDb3Jkb3ZhIEZpbGVzIGRvbid0IGNvbnRhaW4gdGhlIGFjdHVhbFxuICAgKiBjb250ZW50LCB0aGlzIHJlYWxseSByZXR1cm5zIGEgRmlsZSB3aXRoIGFkanVzdGVkIHN0YXJ0IGFuZCBlbmQuXG4gICAqIFNsaWNlcyBvZiBzbGljZXMgYXJlIHN1cHBvcnRlZC5cbiAgICogQHBhcmFtIHN0YXJ0IHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBzdGFydCB0aGUgc2xpY2UgKGluY2x1c2l2ZSkuXG4gICAqIEBwYXJhbSBlbmQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGVuZCB0aGUgc2xpY2UgKGV4Y2x1c2l2ZSkuXG4gICAqL1xuICBzbGljZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IEJsb2I7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxGaWxlU3lzdGVtIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2Ugd2l0aCBubyBndWFyYW50ZWUgb2YgcGVyc2lzdGVuY2UuXG4gICAqL1xuICBURU1QT1JBUlk6IG51bWJlcjtcblxuICAvKipcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB0aGF0IHNob3VsZCBub3QgYmUgcmVtb3ZlZCBieSB0aGUgdXNlciBhZ2VudCB3aXRob3V0IGFwcGxpY2F0aW9uIG9yIHVzZXIgcGVybWlzc2lvbi5cbiAgICovXG4gIFBFUlNJU1RFTlQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUmVxdWVzdHMgYSBmaWxlc3lzdGVtIGluIHdoaWNoIHRvIHN0b3JlIGFwcGxpY2F0aW9uIGRhdGEuXG4gICAqIEBwYXJhbSB0eXBlIFdoZXRoZXIgdGhlIGZpbGVzeXN0ZW0gcmVxdWVzdGVkIHNob3VsZCBiZSBwZXJzaXN0ZW50LCBhcyBkZWZpbmVkIGFib3ZlLiBVc2Ugb25lIG9mIFRFTVBPUkFSWSBvclxuICAgKiAgIFBFUlNJU1RFTlQuXG4gICAqIEBwYXJhbSBzaXplIFRoaXMgaXMgYW4gaW5kaWNhdG9yIG9mIGhvdyBtdWNoIHN0b3JhZ2Ugc3BhY2UsIGluIGJ5dGVzLCB0aGUgYXBwbGljYXRpb24gZXhwZWN0cyB0byBuZWVkLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIFRoZSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGFnZW50IHByb3ZpZGVzIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4sIG9yIHdoZW4gdGhlIHJlcXVlc3QgdG8gb2J0YWluIHRoZSBmaWxlc3lzdGVtIGlzXG4gICAqICAgZGVuaWVkLlxuICAgKi9cbiAgcmVxdWVzdEZpbGVTeXN0ZW0oXG4gICAgdHlwZTogbnVtYmVyLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVTeXN0ZW1DYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gbG9vayB1cCB0aGUgRW50cnkgZm9yIGEgZmlsZSBvciBkaXJlY3RvcnkgcmVmZXJyZWQgdG8gYnkgYSBsb2NhbCBVUkwuXG4gICAqIEBwYXJhbSB1cmwgQSBVUkwgcmVmZXJyaW5nIHRvIGEgbG9jYWwgZmlsZSBpbiBhIGZpbGVzeXN0ZW0gYWNjZXNzYWJsZSB2aWEgdGhpcyBBUEkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXBvcnQgdGhlIEZpbGVFbnRyeSB0byB3aGljaCB0aGUgc3VwcGxpZWQgVVJMIHJlZmVycy5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4sIG9yIHdoZW4gdGhlIHJlcXVlc3QgdG8gb2J0YWluIHRoZSBFbnRyeSBpc1xuICAgKiAgIGRlbmllZC5cbiAgICovXG4gIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwodXJsOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjazogRmlsZUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogc2VlIHJlcXVlc3RGaWxlU3lzdGVtLlxuICAgKi9cbiAgd2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG4gICAgdHlwZTogbnVtYmVyLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVTeXN0ZW1DYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGZpbGUgb3IgZGlyZWN0b3J5IHdhcyBsYXN0IG1vZGlmaWVkLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIG1vZGlmaWNhdGlvblRpbWU6IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmaWxlLCBpbiBieXRlcy4gVGhpcyBtdXN0IHJldHVybiAwIGZvciBkaXJlY3Rvcmllcy5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ3Mge1xuICAvKipcbiAgICogVXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2VyIHdhbnRzIHRvIGNyZWF0ZSBhIGZpbGUgb3IgZGlyZWN0b3J5IGlmIGl0IHdhcyBub3QgcHJldmlvdXNseSB0aGVyZS5cbiAgICovXG4gIGNyZWF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ5IGl0c2VsZiwgZXhjbHVzaXZlIG11c3QgaGF2ZSBubyBlZmZlY3QuIFVzZWQgd2l0aCBjcmVhdGUsIGl0IG11c3QgY2F1c2UgZ2V0RmlsZSBhbmQgZ2V0RGlyZWN0b3J5IHRvIGZhaWwgaWYgdGhlXG4gICAqIHRhcmdldCBwYXRoIGFscmVhZHkgZXhpc3RzLlxuICAgKi9cbiAgZXhjbHVzaXZlPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTeXN0ZW0ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSBzeXN0ZW0uIFRoZSBzcGVjaWZpY3Mgb2YgbmFtaW5nIGZpbGVzeXN0ZW1zIGlzIHVuc3BlY2lmaWVkLCBidXQgYSBuYW1lIG11c3QgYmUgdW5pcXVlXG4gICAqIGFjcm9zcyB0aGUgbGlzdCBvZiBleHBvc2VkIGZpbGUgc3lzdGVtcy5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgZmlsZSBzeXN0ZW0uXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgcm9vdDogRGlyZWN0b3J5RW50cnk7XG5cbiAgdG9KU09OKCk6IHN0cmluZztcblxuICBlbmNvZGVVUklQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeSB7XG4gIC8qKlxuICAgKiBFbnRyeSBpcyBhIGZpbGUuXG4gICAqL1xuICBpc0ZpbGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVudHJ5IGlzIGEgZGlyZWN0b3J5LlxuICAgKi9cbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgbWV0YWRhdGEgYWJvdXQgdGhpcyBlbnRyeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIHRpbWUgb2YgdGhlIGxhc3QgbW9kaWZpY2F0aW9uLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBFcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWV0YWRhdGEgb2YgdGhlIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBNZXRhZGF0YSBvYmplY3RcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIEZpbGVFcnJvclxuICAgKiBAcGFyYW0gbWV0YWRhdGFPYmplY3Qge01ldGFkYXRhfSBrZXlzIGFuZCB2YWx1ZXMgdG8gc2V0XG4gICAqL1xuICBzZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s6IEVycm9yQ2FsbGJhY2ssIG1ldGFkYXRhT2JqZWN0OiBNZXRhZGF0YSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSwgZXhjbHVkaW5nIHRoZSBwYXRoIGxlYWRpbmcgdG8gaXQuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZnVsbCBhYnNvbHV0ZSBwYXRoIGZyb20gdGhlIHJvb3QgdG8gdGhlIGVudHJ5LlxuICAgKi9cbiAgZnVsbFBhdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaWxlIHN5c3RlbSBvbiB3aGljaCB0aGUgZW50cnkgcmVzaWRlcy5cbiAgICovXG4gIGZpbGVzeXN0ZW06IEZpbGVTeXN0ZW07XG4gIC8qKlxuICAgKiBhbiBhbHRlcm5hdGUgVVJMIHdoaWNoIGNhbiBiZSB1c2VkIGJ5IG5hdGl2ZSB3ZWJ2aWV3IGNvbnRyb2xzLCBmb3IgZXhhbXBsZSBtZWRpYSBwbGF5ZXJzLlxuICAgKi9cbiAgbmF0aXZlVVJMOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgbWV0YWRhdGEgYWJvdXQgdGhpcyBlbnRyeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIHRpbWUgb2YgdGhlIGxhc3QgbW9kaWZpY2F0aW9uLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBFcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWV0YWRhdGEgb2YgdGhlIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBNZXRhZGF0YSBvYmplY3RcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIEZpbGVFcnJvclxuICAgKiBAcGFyYW0gbWV0YWRhdGFPYmplY3Qge01ldGFkYXRhfSBrZXlzIGFuZCB2YWx1ZXMgdG8gc2V0XG4gICAqL1xuICBzZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s6IEVycm9yQ2FsbGJhY2ssIG1ldGFkYXRhT2JqZWN0OiBNZXRhZGF0YSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIE1vdmUgYW4gZW50cnkgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gb24gdGhlIGZpbGUgc3lzdGVtLiBJdCBpcyBhbiBlcnJvciB0byB0cnkgdG86XG4gICAqXG4gICAqIDx1aT5cbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XG4gICAqIDxsaT5tb3ZlIGFuIGVudHJ5IGludG8gaXRzIHBhcmVudCBpZiBhIG5hbWUgZGlmZmVyZW50IGZyb20gaXRzIGN1cnJlbnQgb25lIGlzbid0IHByb3ZpZGVkOzwvbGk+XG4gICAqIDxsaT5tb3ZlIGEgZmlsZSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnk7PC9saT5cbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxuICAgKiA8bGk+bW92ZSBhbnkgZWxlbWVudCB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnkgd2hpY2ggaXMgbm90IGVtcHR5LjwvbGk+XG4gICAqIDx1bD5cbiAgICpcbiAgICogQSBtb3ZlIG9mIGEgZmlsZSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZmlsZSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZmlsZS5cbiAgICogQSBtb3ZlIG9mIGEgZGlyZWN0b3J5IG9uIHRvcCBvZiBhbiBleGlzdGluZyBlbXB0eSBkaXJlY3RvcnkgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGRpcmVjdG9yeS5cbiAgICovXG4gIG1vdmVUbyhcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxuICAgIG5ld05hbWU/OiBzdHJpbmcsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDb3B5IGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxuICAgKlxuICAgKiA8dWw+XG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSBpbnNpZGUgaXRzZWxmIG9yIHRvIGFueSBjaGlsZCBhdCBhbnkgZGVwdGg7PC9saT5cbiAgICogPGxpPiBjb3B5IGFuIGVudHJ5IGludG8gaXRzIHBhcmVudCBpZiBhIG5hbWUgZGlmZmVyZW50IGZyb20gaXRzIGN1cnJlbnQgb25lIGlzbid0IHByb3ZpZGVkOzwvbGk+XG4gICAqIDxsaT4gY29weSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBmaWxlOzwvbGk+XG4gICAqIDxsaT4gY29weSBhbnkgZWxlbWVudCB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnkgd2hpY2ggaXMgbm90IGVtcHR5LjwvbGk+XG4gICAqIDxsaT4gQSBjb3B5IG9mIGEgZmlsZSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZmlsZSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZmlsZS48L2xpPlxuICAgKiA8bGk+IEEgY29weSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdFxuICAgKiBkaXJlY3RvcnkuPC9saT5cbiAgICogPC91bD5cbiAgICpcbiAgICogRGlyZWN0b3J5IGNvcGllcyBhcmUgYWx3YXlzIHJlY3Vyc2l2ZS0tdGhhdCBpcywgdGhleSBjb3B5IGFsbCBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5LlxuICAgKi9cbiAgY29weVRvKFxuICAgIHBhcmVudDogRGlyZWN0b3J5RW50cnksXG4gICAgbmV3TmFtZT86IHN0cmluZyxcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBpZGVudGlmeSB0aGlzIGVudHJ5LiBVbmxpa2UgdGhlIFVSTiBkZWZpbmVkIGluIFtGSUxFLUFQSS1FRF0sIGl0IGhhcyBubyBzcGVjaWZpY1xuICAgKiBleHBpcmF0aW9uOyBhcyBpdCBkZXNjcmliZXMgYSBsb2NhdGlvbiBvbiBkaXNrLCBpdCBzaG91bGQgYmUgdmFsaWQgYXQgbGVhc3QgYXMgbG9uZyBhcyB0aGF0IGxvY2F0aW9uIGV4aXN0cy5cbiAgICovXG4gIHRvVVJMKCk6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJuIGEgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5LlxuICAgKiBAcmV0dXJuIHN0cmluZyBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFjcm9zcyB0aGUgYnJpZGdlIHRvIGlkZW50aWZ5IHRoaXMgZW50cnlcbiAgICovXG4gIHRvSW50ZXJuYWxVUkwoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZmlsZSBvciBkaXJlY3RvcnkuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gZGVsZXRlIGEgZGlyZWN0b3J5IHRoYXQgaXMgbm90IGVtcHR5LiBJdCBpcyBhbiBlcnJvciB0b1xuICAgKiBhdHRlbXB0IHRvIGRlbGV0ZSB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBmaWxlc3lzdGVtLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICByZW1vdmUoc3VjY2Vzc0NhbGxiYWNrOiBWb2lkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogTG9vayB1cCB0aGUgcGFyZW50IERpcmVjdG9yeUVudHJ5IGNvbnRhaW5pbmcgdGhpcyBFbnRyeS4gSWYgdGhpcyBFbnRyeSBpcyB0aGUgcm9vdCBvZiBpdHMgZmlsZXN5c3RlbSwgaXRzIHBhcmVudFxuICAgKiBpcyBpdHNlbGYuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIHBhcmVudCBFbnRyeS5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBnZXRQYXJlbnQoc3VjY2Vzc0NhbGxiYWNrOiBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkaXJlY3Rvcnkgb24gYSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvcnlFbnRyeSBleHRlbmRzIEVudHJ5IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRGlyZWN0b3J5UmVhZGVyIHRvIHJlYWQgRW50cmllcyBmcm9tIHRoaXMgRGlyZWN0b3J5LlxuICAgKi9cbiAgY3JlYXRlUmVhZGVyKCk6IERpcmVjdG9yeVJlYWRlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBvciBsb29rcyB1cCBhIGZpbGUuXG4gICAqIEBwYXJhbSBwYXRoIEVpdGhlciBhbiBhYnNvbHV0ZSBwYXRoIG9yIGEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoaXMgRGlyZWN0b3J5RW50cnkgdG8gdGhlIGZpbGUgdG8gYmUgbG9va2VkIHVwIG9yXG4gICAqICAgY3JlYXRlZC4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBjcmVhdGUgYSBmaWxlIHdob3NlIGltbWVkaWF0ZSBwYXJlbnQgZG9lcyBub3QgeWV0IGV4aXN0LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiAgICAgPHVsPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBhbmQgZXhjbHVzaXZlIGFyZSBib3RoIHRydWUsIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgdHJ1ZSwgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgYW5kIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RmlsZSBtdXN0IGNyZWF0ZSBpdCBhcyBhXG4gICAqICAgemVyby1sZW5ndGggZmlsZSBhbmQgcmV0dXJuIGEgY29ycmVzcG9uZGluZyBGaWxlRW50cnkuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBleGlzdHMsIGJ1dCBpcyBhIGRpcmVjdG9yeSwgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5PdGhlcndpc2UsIGlmIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RmlsZSBtdXN0IHJldHVybiBhIEZpbGVFbnRyeSBjb3JyZXNwb25kaW5nIHRvIHBhdGguPC9saT5cbiAgICogICAgIDwvdWw+XG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIEZpbGUgc2VsZWN0ZWQgb3IgY3JlYXRlZC5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBnZXRGaWxlKHBhdGg6IHN0cmluZywgb3B0aW9ucz86IEZsYWdzLCBzdWNjZXNzQ2FsbGJhY2s/OiBGaWxlRW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG9yIGxvb2tzIHVwIGEgZGlyZWN0b3J5LlxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBkaXJlY3RvcnkgdG8gYmUgbG9va2VkIHVwXG4gICAqICAgb3IgY3JlYXRlZC4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBjcmVhdGUgYSBkaXJlY3Rvcnkgd2hvc2UgaW1tZWRpYXRlIHBhcmVudCBkb2VzIG5vdCB5ZXQgZXhpc3QuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqICAgICA8dWw+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGFuZCBleGNsdXNpdmUgYXJlIGJvdGggdHJ1ZSBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgdHJ1ZSwgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgYW5kIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RGlyZWN0b3J5IG11c3QgY3JlYXRlIGFuZCByZXR1cm5cbiAgICogICBhIGNvcnJlc3BvbmRpbmcgRGlyZWN0b3J5RW50cnkuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGV4aXN0cywgYnV0IGlzIGEgZmlsZSwgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPk90aGVyd2lzZSwgaWYgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCByZXR1cm4gYSBEaXJlY3RvcnlFbnRyeSBjb3JyZXNwb25kaW5nIHRvIHBhdGguPC9saT5cbiAgICogICAgIDwvdWw+XG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgICBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgRGlyZWN0b3J5RW50cnkgc2VsZWN0ZWQgb3IgY3JlYXRlZC5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqXG4gICAqL1xuICBnZXREaXJlY3RvcnkoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBGbGFncyxcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBkaXJlY3RvcnkgYW5kIGFsbCBvZiBpdHMgY29udGVudHMsIGlmIGFueS4gSW4gdGhlIGV2ZW50IG9mIGFuIGVycm9yIFtlLmcuIHRyeWluZyB0byBkZWxldGUgYSBkaXJlY3RvcnlcbiAgICogdGhhdCBjb250YWlucyBhIGZpbGUgdGhhdCBjYW5ub3QgYmUgcmVtb3ZlZF0sIHNvbWUgb2YgdGhlIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3RvcnkgbWF5IGJlIGRlbGV0ZWQuIEl0IGlzIGFuIGVycm9yXG4gICAqIHRvIGF0dGVtcHQgdG8gZGVsZXRlIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIGZpbGVzeXN0ZW0uXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIHJlbW92ZVJlY3Vyc2l2ZWx5KHN1Y2Nlc3NDYWxsYmFjazogVm9pZENhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGxldHMgYSB1c2VyIGxpc3QgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGluIGEgZGlyZWN0b3J5LiBJZiB0aGVyZSBhcmUgbm8gYWRkaXRpb25zIHRvIG9yXG4gKiBkZWxldGlvbnMgZnJvbSBhIGRpcmVjdG9yeSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCBjYWxsIHRvIHJlYWRFbnRyaWVzLCBhbmQgbm8gZXJyb3JzIG9jY3VyLCB0aGVuOlxuICogPHVsPlxuICogPGxpPiBBIHNlcmllcyBvZiBjYWxscyB0byByZWFkRW50cmllcyBtdXN0IHJldHVybiBlYWNoIGVudHJ5IGluIHRoZSBkaXJlY3RvcnkgZXhhY3RseSBvbmNlLjwvbGk+XG4gKiA8bGk+IE9uY2UgYWxsIGVudHJpZXMgaGF2ZSBiZWVuIHJldHVybmVkLCB0aGUgbmV4dCBjYWxsIHRvIHJlYWRFbnRyaWVzIG11c3QgcHJvZHVjZSBhbiBlbXB0eSBhcnJheS48L2xpPlxuICogPGxpPiBJZiBub3QgYWxsIGVudHJpZXMgaGF2ZSBiZWVuIHJldHVybmVkLCB0aGUgYXJyYXkgcHJvZHVjZWQgYnkgcmVhZEVudHJpZXMgbXVzdCBub3QgYmUgZW1wdHkuPC9saT5cbiAqIDxsaT4gVGhlIGVudHJpZXMgcHJvZHVjZWQgYnkgcmVhZEVudHJpZXMgbXVzdCBub3QgaW5jbHVkZSB0aGUgZGlyZWN0b3J5IGl0c2VsZiBbXCIuXCJdIG9yIGl0cyBwYXJlbnQgW1wiLi5cIl0uPC9saT5cbiAqIDwvdWw+XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5UmVhZGVyIHtcbiAgbG9jYWxVUkw6IHN0cmluZztcbiAgaGFzUmVhZEVudHJpZXM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFJlYWQgdGhlIG5leHQgYmxvY2sgb2YgZW50cmllcyBmcm9tIHRoaXMgZGlyZWN0b3J5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIENhbGxlZCBvbmNlIHBlciBzdWNjZXNzZnVsIGNhbGwgdG8gcmVhZEVudHJpZXMgdG8gZGVsaXZlciB0aGUgbmV4dCBwcmV2aW91c2x5LXVucmVwb3J0ZWRcbiAgICogICBzZXQgb2YgRW50cmllcyBpbiB0aGUgYXNzb2NpYXRlZCBEaXJlY3RvcnkuIElmIGFsbCBFbnRyaWVzIGhhdmUgYWxyZWFkeSBiZWVuIHJldHVybmVkIGZyb20gcHJldmlvdXMgaW52b2NhdGlvbnNcbiAgICogICBvZiByZWFkRW50cmllcywgc3VjY2Vzc0NhbGxiYWNrIG11c3QgYmUgY2FsbGVkIHdpdGggYSB6ZXJvLWxlbmd0aCBhcnJheSBhcyBhbiBhcmd1bWVudC5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayBpbmRpY2F0aW5nIHRoYXQgdGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgZnJvbSB0aGUgRGlyZWN0b3J5LlxuICAgKi9cbiAgcmVhZEVudHJpZXMoc3VjY2Vzc0NhbGxiYWNrOiBFbnRyaWVzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZpbGUgb24gYSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlRW50cnkgZXh0ZW5kcyBFbnRyeSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEZpbGVXcml0ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBmaWxlIHRoYXQgdGhpcyBGaWxlRW50cnkgcmVwcmVzZW50cy5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIG5ldyBGaWxlV3JpdGVyLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGNyZWF0ZVdyaXRlcihzdWNjZXNzQ2FsbGJhY2s6IEZpbGVXcml0ZXJDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgRmlsZSB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgRmlsZS5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBmaWxlKHN1Y2Nlc3NDYWxsYmFjazogRmlsZUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG59XG5cbi8qKlxuICogV2hlbiByZXF1ZXN0RmlsZVN5c3RlbSgpIHN1Y2NlZWRzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVTeXN0ZW1DYWxsYmFjayA9IChmaWxlc3lzdGVtOiBGaWxlU3lzdGVtKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIEVudHJ5IG9iamVjdHMuXG4gKi9cbmV4cG9ydCB0eXBlIEVudHJ5Q2FsbGJhY2sgPSAoZW50cnk6IEVudHJ5KSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIEZpbGVFbnRyeSBvYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBGaWxlRW50cnlDYWxsYmFjayA9IChlbnRyeTogRmlsZUVudHJ5KSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIERpcmVjdG9yeUVudHJ5IG9iamVjdHMuXG4gKi9cbmV4cG9ydCB0eXBlIERpcmVjdG9yeUVudHJ5Q2FsbGJhY2sgPSAoZW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB2b2lkO1xuXG4vKipcbiAqIFdoZW4gcmVhZEVudHJpZXMoKSBzdWNjZWVkcywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxuICovXG5leHBvcnQgdHlwZSBFbnRyaWVzQ2FsbGJhY2sgPSAoZW50cmllczogRW50cnlbXSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBmaWxlIGFuZCBkaXJlY3RvcnkgbWV0YWRhdGEuXG4gKi9cbmV4cG9ydCB0eXBlIE1ldGFkYXRhQ2FsbGJhY2sgPSAobWV0YWRhdGE6IE1ldGFkYXRhKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBjcmVhdGUgYSBGaWxlV3JpdGVyLlxuICovXG5leHBvcnQgdHlwZSBGaWxlV3JpdGVyQ2FsbGJhY2sgPSAoZmlsZVdyaXRlcjogRmlsZVdyaXRlcikgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gb2J0YWluIGEgRmlsZS5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZUNhbGxiYWNrID0gKGZpbGU6IElGaWxlKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgZ2VuZXJpYyBjYWxsYmFjayB1c2VkIHRvIGluZGljYXRlIHN1Y2Nlc3Mgb2YgYW4gYXN5bmNocm9ub3VzIG1ldGhvZC5cbiAqL1xuZXhwb3J0IHR5cGUgVm9pZENhbGxiYWNrID0gKCkgPT4gdm9pZDtcblxuLyoqXG4gKiBXaGVuIGFuIGVycm9yIG9jY3VycywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxuICovXG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrID0gKGVycjogRmlsZUVycm9yKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbW92ZVJlc3VsdCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGZpbGVSZW1vdmVkOiBFbnRyeTtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVTYXZlciBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgLyoqXG4gICAqIFdoZW4gdGhlIEZpbGVTYXZlciBjb25zdHJ1Y3RvciBpcyBjYWxsZWQsIHRoZSB1c2VyIGFnZW50IG11c3QgcmV0dXJuIGEgbmV3IEZpbGVTYXZlciBvYmplY3Qgd2l0aCByZWFkeVN0YXRlIHNldCB0b1xuICAgKiBJTklULiBUaGlzIGNvbnN0cnVjdG9yIG11c3QgYmUgdmlzaWJsZSB3aGVuIHRoZSBzY3JpcHQncyBnbG9iYWwgb2JqZWN0IGlzIGVpdGhlciBhIFdpbmRvdyBvYmplY3Qgb3IgYW4gb2JqZWN0XG4gICAqIGltcGxlbWVudGluZyB0aGUgV29ya2VyVXRpbHMgaW50ZXJmYWNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YTogQmxvYik7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGFib3J0IG1ldGhvZCBpcyBjYWxsZWQsIHVzZXIgYWdlbnRzIG11c3QgcnVuIHRoZSBzdGVwcyBiZWxvdzpcbiAgICogPG9sPlxuICAgKiA8bGk+IElmIHJlYWR5U3RhdGUgPT0gRE9ORSBvciByZWFkeVN0YXRlID09IElOSVQsIHRlcm1pbmF0ZSB0aGlzIG92ZXJhbGwgc2VyaWVzIG9mIHN0ZXBzIHdpdGhvdXQgZG9pbmcgYW55dGhpbmdcbiAgICogZWxzZS4gPC9saT5cbiAgICogPGxpPiBTZXQgcmVhZHlTdGF0ZSB0byBET05FLiA8L2xpPlxuICAgKiA8bGk+IElmIHRoZXJlIGFyZSBhbnkgdGFza3MgZnJvbSB0aGUgb2JqZWN0J3MgRmlsZVNhdmVyIHRhc2sgc291cmNlIGluIG9uZSBvZiB0aGUgdGFzayBxdWV1ZXMsIHRoZW4gcmVtb3ZlIHRob3NlXG4gICAqIHRhc2tzLiA8L2xpPlxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGUgd3JpdGUgYWxnb3JpdGhtIGJlaW5nIHByb2Nlc3NlZC4gPC9saT5cbiAgICogPGxpPiBTZXQgdGhlIGVycm9yIGF0dHJpYnV0ZSB0byBhIERPTUVycm9yIG9iamVjdCBvZiB0eXBlIFwiQWJvcnRFcnJvclwiLiA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgYWJvcnQgPC9saT5cbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIHdyaXRlIGVuZCA8L2xpPlxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGlzIGFsZ29yaXRobS4gPC9saT5cbiAgICogPC9vbD5cbiAgICovXG4gIGFib3J0KCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBibG9iIGlzIGJlaW5nIHdyaXR0ZW4uXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgSU5JVDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIG9iamVjdCBoYXMgYmVlbiBjb25zdHJ1Y3RlZCwgYnV0IHRoZXJlIGlzIG5vIHBlbmRpbmcgd3JpdGUuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgV1JJVElORzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGVudGlyZSBCbG9iIGhhcyBiZWVuIHdyaXR0ZW4gdG8gdGhlIGZpbGUsIGFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgd3JpdGUsIG9yIHRoZSB3cml0ZSB3YXMgYWJvcnRlZCB1c2luZ1xuICAgKiBhYm9ydCgpLiBUaGUgRmlsZVNhdmVyIGlzIG5vIGxvbmdlciB3cml0aW5nIHRoZSBibG9iLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIERPTkU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBGaWxlU2F2ZXIgb2JqZWN0IGNhbiBiZSBpbiBvbmUgb2YgMyBzdGF0ZXMuIFRoZSByZWFkeVN0YXRlIGF0dHJpYnV0ZSwgb24gZ2V0dGluZywgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnRcbiAgICogc3RhdGUsIHdoaWNoIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgKiA8dWw+XG4gICAqIDxsaT5JTklUPC9saT5cbiAgICogPGxpPldSSVRJTkc8L2xpPlxuICAgKiA8bGk+RE9ORTwvbGk+XG4gICAqIDx1bD5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICByZWFkeVN0YXRlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbGFzdCBlcnJvciB0aGF0IG9jY3VycmVkIG9uIHRoZSBGaWxlU2F2ZXIuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZXJyb3I6IEVycm9yO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgc3RhcnQgZXZlbnRzXG4gICAqL1xuICBvbndyaXRlc3RhcnQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIHByb2dyZXNzIGV2ZW50cy5cbiAgICovXG4gIG9ucHJvZ3Jlc3M6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIGV2ZW50cy5cbiAgICovXG4gIG9ud3JpdGU6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIGFib3J0IGV2ZW50cy5cbiAgICovXG4gIG9uYWJvcnQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIGVycm9yIGV2ZW50cy5cbiAgICovXG4gIG9uZXJyb3I6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIGVuZCBldmVudHMuXG4gICAqL1xuICBvbndyaXRlZW5kOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIEZpbGVTYXZlciBjb25zdHJ1Y3RvciBpcyBjYWxsZWQsIHRoZSB1c2VyIGFnZW50IG11c3QgcmV0dXJuIGEgbmV3IEZpbGVTYXZlciBvYmplY3Qgd2l0aCByZWFkeVN0YXRlIHNldCB0b1xuICAgKiBJTklULiBUaGlzIGNvbnN0cnVjdG9yIG11c3QgYmUgdmlzaWJsZSB3aGVuIHRoZSBzY3JpcHQncyBnbG9iYWwgb2JqZWN0IGlzIGVpdGhlciBhIFdpbmRvdyBvYmplY3Qgb3IgYW4gb2JqZWN0XG4gICAqIGltcGxlbWVudGluZyB0aGUgV29ya2VyVXRpbHMgaW50ZXJmYWNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YTogQmxvYik7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGFib3J0IG1ldGhvZCBpcyBjYWxsZWQsIHVzZXIgYWdlbnRzIG11c3QgcnVuIHRoZSBzdGVwcyBiZWxvdzpcbiAgICogPG9sPlxuICAgKiA8bGk+IElmIHJlYWR5U3RhdGUgPT0gRE9ORSBvciByZWFkeVN0YXRlID09IElOSVQsIHRlcm1pbmF0ZSB0aGlzIG92ZXJhbGwgc2VyaWVzIG9mIHN0ZXBzIHdpdGhvdXQgZG9pbmcgYW55dGhpbmdcbiAgICogZWxzZS4gPC9saT5cbiAgICogPGxpPiBTZXQgcmVhZHlTdGF0ZSB0byBET05FLiA8L2xpPlxuICAgKiA8bGk+IElmIHRoZXJlIGFyZSBhbnkgdGFza3MgZnJvbSB0aGUgb2JqZWN0J3MgRmlsZVNhdmVyIHRhc2sgc291cmNlIGluIG9uZSBvZiB0aGUgdGFzayBxdWV1ZXMsIHRoZW4gcmVtb3ZlIHRob3NlXG4gICAqIHRhc2tzLiA8L2xpPlxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGUgd3JpdGUgYWxnb3JpdGhtIGJlaW5nIHByb2Nlc3NlZC4gPC9saT5cbiAgICogPGxpPiBTZXQgdGhlIGVycm9yIGF0dHJpYnV0ZSB0byBhIERPTUVycm9yIG9iamVjdCBvZiB0eXBlIFwiQWJvcnRFcnJvclwiLiA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgYWJvcnQgPC9saT5cbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIHdyaXRlZW5kIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxuICAgKiA8L29sPlxuICAgKi9cbiAgYWJvcnQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBUaGlzIGludGVyZmFjZSBleHBhbmRzIG9uIHRoZSBGaWxlU2F2ZXIgaW50ZXJmYWNlIHRvIGFsbG93IGZvciBtdWx0aXBsZSB3cml0ZSBhY3Rpb25zLCByYXRoZXIgdGhhbiBqdXN0IHNhdmluZyBhXG4gKiAgIHNpbmdsZSBCbG9iLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlV3JpdGVyIGV4dGVuZHMgRmlsZVNhdmVyIHtcbiAgLyoqXG4gICAqIFRoZSBieXRlIG9mZnNldCBhdCB3aGljaCB0aGUgbmV4dCB3cml0ZSB0byB0aGUgZmlsZSB3aWxsIG9jY3VyLiBUaGlzIG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuIGxlbmd0aC5cbiAgICogQSBuZXdseS1jcmVhdGVkIEZpbGVXcml0ZXIgbXVzdCBoYXZlIHBvc2l0aW9uIHNldCB0byAwLlxuICAgKi9cbiAgcG9zaXRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgZmlsZS4gSWYgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSByZWFkIGFjY2VzcyB0byB0aGUgZmlsZSwgdGhpcyBtdXN0IGJlIHRoZSBoaWdoZXN0IGJ5dGUgb2Zmc2V0IGF0XG4gICAqIHdoaWNoIHRoZSB1c2VyIGhhcyB3cml0dGVuLlxuICAgKi9cbiAgbGVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRoZSBzdXBwbGllZCBkYXRhIHRvIHRoZSBmaWxlIGF0IHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gZGF0YSBUaGUgYmxvYiB0byB3cml0ZS5cbiAgICovXG4gIHdyaXRlKGRhdGE6IEFycmF5QnVmZmVyIHwgQmxvYiB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNlZWsgc2V0cyB0aGUgZmlsZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgbmV4dCB3cml0ZSB3aWxsIG9jY3VyLlxuICAgKiBAcGFyYW0gb2Zmc2V0IElmIG5vbm5lZ2F0aXZlLCBhbiBhYnNvbHV0ZSBieXRlIG9mZnNldCBpbnRvIHRoZSBmaWxlLiBJZiBuZWdhdGl2ZSwgYW4gb2Zmc2V0IGJhY2sgZnJvbSB0aGUgZW5kIG9mXG4gICAqICAgdGhlIGZpbGUuXG4gICAqL1xuICBzZWVrKG9mZnNldDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbGVuZ3RoIG9mIHRoZSBmaWxlIHRvIHRoYXQgc3BlY2lmaWVkLiBJZiBzaG9ydGVuaW5nIHRoZSBmaWxlLCBkYXRhIGJleW9uZCB0aGUgbmV3IGxlbmd0aCBtdXN0IGJlXG4gICAqIGRpc2NhcmRlZC4gSWYgZXh0ZW5kaW5nIHRoZSBmaWxlLCB0aGUgZXhpc3RpbmcgZGF0YSBtdXN0IGJlIHplcm8tcGFkZGVkIHVwIHRvIHRoZSBuZXcgbGVuZ3RoLlxuICAgKiBAcGFyYW0gc2l6ZSBUaGUgc2l6ZSB0byB3aGljaCB0aGUgbGVuZ3RoIG9mIHRoZSBmaWxlIGlzIHRvIGJlIGFkanVzdGVkLCBtZWFzdXJlZCBpbiBieXRlcy5cbiAgICovXG4gIHRydW5jYXRlKHNpemU6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdyaXRlT3B0aW9ucyB7XG4gIHJlcGxhY2U/OiBib29sZWFuO1xuICBhcHBlbmQ/OiBib29sZWFuO1xuICB0cnVuY2F0ZT86IG51bWJlcjsgLy8gaWYgcHJlc2VudCwgbnVtYmVyIG9mIGJ5dGVzIHRvIHRydW5jYXRlIGZpbGUgdG8gYmVmb3JlIHdyaXRpbmdcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVFcnJvciB7XG4gIHN0YXRpYyBOT1RfRk9VTkRfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBTRUNVUklUWV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIEFCT1JUX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgTk9UX1JFQURBQkxFX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgRU5DT0RJTkdfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIElOVkFMSURfU1RBVEVfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBTWU5UQVhfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBJTlZBTElEX01PRElGSUNBVElPTl9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFFVT1RBX0VYQ0VFREVEX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgVFlQRV9NSVNNQVRDSF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFBBVEhfRVhJU1RTX0VSUjogbnVtYmVyO1xuICAvKiogRXJyb3IgY29kZSAqL1xuICBjb2RlOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb2RlOiBudW1iZXIpO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVJlYWRlciB7XG4gIHN0YXRpYyBFTVBUWTogbnVtYmVyO1xuICBzdGF0aWMgTE9BRElORzogbnVtYmVyO1xuICBzdGF0aWMgRE9ORTogbnVtYmVyO1xuICBzdGF0aWMgUkVBRF9DSFVOS19TSVpFOiBudW1iZXI7XG5cbiAgcmVhZHlTdGF0ZTogbnVtYmVyOyAvLyBzZWUgY29uc3RhbnRzIGluIHZhciBkZWNsYXJhdGlvbiBiZWxvd1xuICBlcnJvcjogRXJyb3I7XG4gIHJlc3VsdDogc3RyaW5nIHwgQXJyYXlCdWZmZXI7IC8vIHR5cGUgZGVwZW5kcyBvbiByZWFkQXNYWFgoKSBjYWxsIHR5cGVcblxuICBvbmxvYWRzdGFydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25wcm9ncmVzczogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25sb2FkOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmVycm9yOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmxvYWRlbmQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9uYWJvcnQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG5cbiAgYWJvcnQoKTogdm9pZDtcblxuICByZWFkQXNUZXh0KGZlOiBJRmlsZSwgZW5jb2Rpbmc/OiBzdHJpbmcpOiB2b2lkO1xuXG4gIHJlYWRBc0RhdGFVUkwoZmU6IElGaWxlKTogdm9pZDtcblxuICByZWFkQXNCaW5hcnlTdHJpbmcoZmU6IElGaWxlKTogdm9pZDtcblxuICByZWFkQXNBcnJheUJ1ZmZlcihmZTogSUZpbGUpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBXaW5kb3cgZXh0ZW5kcyBMb2NhbEZpbGVTeXN0ZW0ge31cblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcblxuLyoqXG4gKiBAbmFtZSBGaWxlXG4gKiBAcHJlbWllciBmaWxlc3lzdGVtXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGltcGxlbWVudHMgYSBGaWxlIEFQSSBhbGxvd2luZyByZWFkL3dyaXRlIGFjY2VzcyB0byBmaWxlcyByZXNpZGluZyBvbiB0aGUgZGV2aWNlLlxuICpcbiAqIFRoZSBGaWxlIGNsYXNzIGltcGxlbWVudHMgc3RhdGljIGNvbnZlbmllbmNlIGZ1bmN0aW9ucyB0byBhY2Nlc3MgZmlsZXMgYW5kIGRpcmVjdG9yaWVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZS5jaGVja0Rpcih0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSwgJ215ZGlyJykudGhlbihfID0+IGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZXhpc3RzJykpLmNhdGNoKGVyciA9PlxuICogICBjb25zb2xlLmxvZygnRGlyZWN0b3J5IGRvZXNuJ3QgZXhpc3QnKSk7XG4gKlxuICogYGBgXG4gKlxuICogIFRoaXMgcGx1Z2luIGlzIGJhc2VkIG9uIHNldmVyYWwgc3BlY3MsIGluY2x1ZGluZyA6IFRoZSBIVE1MNSBGaWxlIEFQSSBodHRwOiAvL3d3dy53My5vcmcvVFIvRmlsZUFQSS9cbiAqICBUaGUgKG5vdy1kZWZ1bmN0KSBEaXJlY3RvcmllcyBhbmQgU3lzdGVtIGV4dGVuc2lvbnMgTGF0ZXN0OiBodHRwOiAvL3d3dy53My5vcmcvVFIvMjAxMi9XRC1maWxlLXN5c3RlbS1hcGktMjAxMjA0MTcvXG4gKiAgQWx0aG91Z2ggbW9zdCBvZiB0aGUgcGx1Z2luIGNvZGUgd2FzIHdyaXR0ZW4gd2hlbiBhbiBlYXJsaWVyIHNwZWMgd2FzIGN1cnJlbnQ6IGh0dHA6XG4gKiAgIC8vd3d3LnczLm9yZy9UUi8yMDExL1dELWZpbGUtc3lzdGVtLWFwaS0yMDExMDQxOS8gSXQgYWxzbyBpbXBsZW1lbnRzIHRoZSBGaWxlV3JpdGVyIHNwZWMgOiBodHRwOlxuICogICAvL2Rldi53My5vcmcvMjAwOS9kYXAvZmlsZS1zeXN0ZW0vZmlsZS13cml0ZXIuaHRtbFxuICogIEBpbnRlcmZhY2VzXG4gKiAgSUZpbGVcbiAqICBFbnRyeVxuICogIERpcmVjdG9yeUVudHJ5XG4gKiAgRGlyZWN0b3J5UmVhZGVyXG4gKiAgRmlsZVN5c3RlbVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5maWxlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25EaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBhcHBsaWNhdGlvblN0b3JhZ2VEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogV2hlcmUgdG8gcHV0IGFwcC1zcGVjaWZpYyBkYXRhIGZpbGVzLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FjaGVkIGZpbGVzIHRoYXQgc2hvdWxkIHN1cnZpdmUgYXBwIHJlc3RhcnRzLlxuICAgKiBBcHBzIHNob3VsZCBub3QgcmVseSBvbiB0aGUgT1MgdG8gZGVsZXRlIGZpbGVzIGluIGhlcmUuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgY2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIHNwYWNlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxBcHBsaWNhdGlvblN0b3JhZ2VEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogIEFuZHJvaWQ6IFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcyBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsRGF0YURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgYXBwbGljYXRpb24gY2FjaGUgb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbENhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBleHRlcm5hbCBzdG9yYWdlIChTRCBjYXJkKSByb290LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsUm9vdERpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpT1M6IFRlbXAgZGlyZWN0b3J5IHRoYXQgdGhlIE9TIGNhbiBjbGVhciBhdCB3aWxsLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHRlbXBEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBIb2xkcyBhcHAtc3BlY2lmaWMgZmlsZXMgdGhhdCBzaG91bGQgYmUgc3luY2VkIChlLmcuIHRvIGlDbG91ZCkuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgc3luY2VkRGF0YURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpT1M6IEZpbGVzIHByaXZhdGUgdG8gdGhlIGFwcCwgYnV0IHRoYXQgYXJlIG1lYW5pbmdmdWwgdG8gb3RoZXIgYXBwbGljYXRpb25zIChlLmcuIE9mZmljZSBmaWxlcylcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb2N1bWVudHNEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQmxhY2tCZXJyeTEwOiBGaWxlcyBnbG9iYWxseSBhdmFpbGFibGUgdG8gYWxsIGFwcHNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBzaGFyZWREaXJlY3Rvcnk6IHN0cmluZztcblxuICBjb3Jkb3ZhRmlsZUVycm9yOiBhbnkgPSB7XG4gICAgMTogJ05PVF9GT1VORF9FUlInLFxuICAgIDI6ICdTRUNVUklUWV9FUlInLFxuICAgIDM6ICdBQk9SVF9FUlInLFxuICAgIDQ6ICdOT1RfUkVBREFCTEVfRVJSJyxcbiAgICA1OiAnRU5DT0RJTkdfRVJSJyxcbiAgICA2OiAnTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSJyxcbiAgICA3OiAnSU5WQUxJRF9TVEFURV9FUlInLFxuICAgIDg6ICdTWU5UQVhfRVJSJyxcbiAgICA5OiAnSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSJyxcbiAgICAxMDogJ1FVT1RBX0VYQ0VFREVEX0VSUicsXG4gICAgMTE6ICdUWVBFX01JU01BVENIX0VSUicsXG4gICAgMTI6ICdQQVRIX0VYSVNUU19FUlInLFxuICAgIDEzOiAnV1JPTkdfRU5UUllfVFlQRScsXG4gICAgMTQ6ICdESVJfUkVBRF9FUlInLFxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVtYWluaW5nIGZyZWUgZGlzayBzcGFjZSBpbiBCeXRlc1xuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGdldEZyZWVEaXNrU3BhY2UoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvcmRvdmEuZXhlYyhyZXNvbHZlIGFzIChkYXRhOiBhbnkpID0+IGFueSwgcmVqZWN0IGFzIChkYXRhOiBhbnkpID0+IGFueSwgJ0ZpbGUnLCAnZ2V0RnJlZURpc2tTcGFjZScsIFtdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGRpcmVjdG9yeSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY2hlY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgZGlyZWN0b3J5IGV4aXN0cyBvciByZWplY3RzIHdpdGggYW5cbiAgICogICBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjaGVja0RpcihwYXRoOiBzdHJpbmcsIGRpcjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpcikpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aCArIGRpcjtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKGZ1bGxQYXRoKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZGlyZWN0b3J5IGluIHRoZSBzcGVjaWZpYyBwYXRoLlxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAqIElmIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIElmIHRydWUsIHJlcGxhY2VzIGZpbGUgd2l0aCBzYW1lIG5hbWUuIElmIGZhbHNlIHJldHVybnMgZXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBEaXJlY3RvcnlFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uczogRmxhZ3MgPSB7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgfTtcblxuICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgb3B0aW9ucy5leGNsdXNpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aCkudGhlbihmc2UgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgZGlyZWN0b3J5IGF0IGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBUaGUgZGlyZWN0b3J5IG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVtb3ZlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShkZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGEgZGlyZWN0b3J5IHRvIGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHNvdXJjZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgVGhlIHNvdXJjZSBkaXJlY3RvcnkgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBUaGUgZGVzdGluYXRpb24gcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdEaXJOYW1lIFRoZSBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgbmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeXxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBEaXJlY3RvcnlFbnRyeSBvYmplY3Qgb3JcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5IHwgRW50cnk+IHtcbiAgICBuZXdEaXJOYW1lID0gbmV3RGlyTmFtZSB8fCBkaXJOYW1lO1xuXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3JjZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGVuYXRpb24gPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZGUsIGRlc3RlbmF0aW9uLCBuZXdEaXJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IGEgZGlyZWN0b3J5IGluIHZhcmlvdXMgbWV0aG9kcy4gSWYgZGVzdGluYXRpb24gZGlyZWN0b3J5IGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdEaXJOYW1lIE5ldyBuYW1lIG9mIGRpcmVjdG9yeSB0byBjb3B5IHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9iamVjdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY29weURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3JjZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZGUsIGRlc3RlLCBuZXdEaXJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IGZpbGVzIGFuZCBkaXJlY3RvcnkgZnJvbSBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnlbXT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgRW50cnkgb2JqZWN0cyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbGlzdERpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnlbXT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxFbnRyeVtdPihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHtcbiAgICAgICAgICBjcmVhdGU6IGZhbHNlLFxuICAgICAgICAgIGV4Y2x1c2l2ZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRlID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gZGUuY3JlYXRlUmVhZGVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRFbnRyaWVzKHJlYWRlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBmaWxlcyBhbmQgdGhlIGRpcmVjdG9yeSBmcm9tIGEgZGVzaXJlZCBsb2NhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVtb3ZlUmVjdXJzaXZlbHkocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxSZW1vdmVSZXN1bHQ+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmltcmFmKGRlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgZmlsZSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSB0byBjaGVja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY2hlY2tGaWxlKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChwYXRoICsgZmlsZSkudGhlbihmc2UgPT4ge1xuICAgICAgaWYgKGZzZS5pc0ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDEzKTtcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZmlsZSc7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxib29sZWFuPihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZmlsZSBpbiB0aGUgc3BlY2lmaWMgcGF0aC5cbiAgICogVGhlIHJlcGxhY2UgYm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGluZyBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAgICogSWYgYW4gZXhpc3RpbmcgZmlsZSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSWYgdHJ1ZSwgcmVwbGFjZXMgZmlsZSB3aXRoIHNhbWUgbmFtZS4gSWYgZmFsc2UgcmV0dXJucyBlcnJvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgRmlsZUVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjcmVhdGVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbik6IFByb21pc2U8RmlsZUVudHJ5PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uczogRmxhZ3MgPSB7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgfTtcblxuICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgb3B0aW9ucy5leGNsdXNpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aCkudGhlbihmc2UgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgZmlsZSBmcm9tIGEgZGVzaXJlZCBsb2NhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIHJlbW92ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZmUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZmUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYSBuZXcgZmlsZSB0byB0aGUgZGVzaXJlZCBsb2NhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBwYXRoIHJlbGF0aXZlIHRvIGJhc2UgcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCBjb250ZW50LCBibG9iIG9yIEFycmF5QnVmZmVyIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gd2hldGhlciB0byByZXBsYWNlL2FwcGVuZCB0byBhbiBleGlzdGluZyBmaWxlLiBTZWUgSVdyaXRlT3B0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHdyaXRlRmlsZShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICB0ZXh0OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIsXG4gICAgb3B0aW9uczogSVdyaXRlT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEZpbGVPcHRzOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogIW9wdGlvbnMuYXBwZW5kLFxuICAgICAgZXhjbHVzaXZlOiAhb3B0aW9ucy5yZXBsYWNlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZGlyZWN0b3J5RW50cnksIGZpbGVOYW1lLCBnZXRGaWxlT3B0cyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGZpbGVFbnRyeTogRmlsZUVudHJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRmlsZUVudHJ5KGZpbGVFbnRyeSwgdGV4dCwgb3B0aW9ucyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBjb250ZW50IHRvIEZpbGVFbnRyeS5cbiAgICogQGhpZGRlblxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxuICAgKiBAcGFyYW0ge0ZpbGVFbnRyeX0gZmUgZmlsZSBlbnRyeSBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXJ9IHRleHQgdGV4dCBjb250ZW50IG9yIGJsb2IgdG8gd3JpdGVcbiAgICogQHBhcmFtIHtJV3JpdGVPcHRpb25zfSBvcHRpb25zIHJlcGxhY2UgZmlsZSBpZiBzZXQgdG8gdHJ1ZS4gU2VlIFdyaXRlT3B0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdXBkYXRlZCBmaWxlIGVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIHByaXZhdGUgd3JpdGVGaWxlRW50cnkoZmU6IEZpbGVFbnRyeSwgdGV4dDogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyLCBvcHRpb25zOiBJV3JpdGVPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JpdGVyKGZlKVxuICAgICAgLnRoZW4od3JpdGVyID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kKSB7XG4gICAgICAgICAgd3JpdGVyLnNlZWsod3JpdGVyLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy50cnVuY2F0ZSkge1xuICAgICAgICAgIHdyaXRlci50cnVuY2F0ZShvcHRpb25zLnRydW5jYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlKHdyaXRlciwgdGV4dCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gZmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRvIGFuIGV4aXN0aW5nIGZpbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9ifSB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgd3JpdGVFeGlzdGluZ0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfCBCbG9iKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlKHBhdGgsIGZpbGVOYW1lLCB0ZXh0LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgY29udGVudHMgb2YgYSBmaWxlIGFzIHRleHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgc3RyaW5nIG9yIHJlamVjdHMgd2l0aFxuICAgKiAgIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc1RleHQocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ1RleHQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGEgYmFzZTY0IGVuY29kZWQgZGF0YSB1cmwuXG4gICAqIEEgZGF0YSB1cmwgaXMgb2YgdGhlIGZvcm06XG4gICAqICAgICAgZGF0YTogWzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBkYXRhIFVSTCBvciByZWplY3RzXG4gICAqICAgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNEYXRhVVJMKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdEYXRhVVJMJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJpbmFyeSBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyByZWplY3RzIHdpdGggYW5cbiAgICogICBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNCaW5hcnlTdHJpbmcocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0JpbmFyeVN0cmluZycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYW4gQXJyYXlCdWZmZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBBcnJheUJ1ZmZlciBvclxuICAgKiAgIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNBcnJheUJ1ZmZlcihwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxBcnJheUJ1ZmZlcj4ocGF0aCwgZmlsZSwgJ0FycmF5QnVmZmVyJyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGZpbGUgdG8gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBtb3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gbW92ZSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbW92ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0ZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgbmV3RmlsZU5hbWUgPSBuZXdGaWxlTmFtZSB8fCBmaWxlTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2ZlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgYSBmaWxlIGluIHZhcmlvdXMgbWV0aG9kcy4gSWYgZmlsZSBleGlzdHMsIHdpbGwgZmFpbCB0byBjb3B5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjb3B5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNvcHlGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdGaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNmZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29weShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGZpbGxFcnJvck1lc3NhZ2UoZXJyOiBGaWxlRXJyb3IpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgZXJyLm1lc3NhZ2UgPSB0aGlzLmNvcmRvdmFGaWxlRXJyb3JbZXJyLmNvZGVdO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgYSBsb2NhbCBmaWxlIHN5c3RlbSBVUkxcbiAgICogQHBhcmFtIGZpbGVVcmwge3N0cmluZ30gZmlsZSBzeXN0ZW0gdXJsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGZpbGVVcmw6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoXG4gICAgICAgICAgZmlsZVVybCxcbiAgICAgICAgICAoZW50cnk6IEVudHJ5KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGVudHJ5KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XG4gICAgICAgIHJlamVjdCh4Yyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgYSBsb2NhbCBkaXJlY3RvcnkgdXJsXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlVcmwge3N0cmluZ30gZGlyZWN0b3J5IHN5c3RlbSB1cmxcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlc29sdmVEaXJlY3RvcnlVcmwoZGlyZWN0b3J5VXJsOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChkaXJlY3RvcnlVcmwpLnRoZW4oZGUgPT4ge1xuICAgICAgaWYgKGRlLmlzRGlyZWN0b3J5KSB7XG4gICAgICAgIHJldHVybiBkZSBhcyBEaXJlY3RvcnlFbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xuICAgICAgICBlcnIubWVzc2FnZSA9ICdpbnB1dCBpcyBub3QgYSBkaXJlY3RvcnknO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RGlyZWN0b3J5RW50cnk+KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSBkaXJlY3RvcnlFbnRyeSB7RGlyZWN0b3J5RW50cnl9IERpcmVjdG9yeSBlbnRyeSwgb2J0YWluZWQgYnkgcmVzb2x2ZURpcmVjdG9yeVVybCBtZXRob2RcbiAgICogQHBhcmFtIGRpcmVjdG9yeU5hbWUge3N0cmluZ30gRGlyZWN0b3J5IG5hbWVcbiAgICogQHBhcmFtIGZsYWdzIHtGbGFnc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZ2V0RGlyZWN0b3J5KGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSwgZGlyZWN0b3J5TmFtZTogc3RyaW5nLCBmbGFnczogRmxhZ3MpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPERpcmVjdG9yeUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXREaXJlY3RvcnkoXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZSxcbiAgICAgICAgICBmbGFncyxcbiAgICAgICAgICBkZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGRlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XG4gICAgICAgIHJlamVjdCh4Yyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZmlsZVxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXG4gICAqIEBwYXJhbSBmaWxlTmFtZSB7c3RyaW5nfSBGaWxlIG5hbWVcbiAgICogQHBhcmFtIGZsYWdzIHtGbGFnc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGdldEZpbGUoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZTogc3RyaW5nLCBmbGFnczogRmxhZ3MpOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxGaWxlRW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldEZpbGUoZmlsZU5hbWUsIGZsYWdzLCByZXNvbHZlLCBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XG4gICAgICAgIHJlamVjdCh4Yyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRGaWxlPFQ+KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmaWxlOiBzdHJpbmcsXG4gICAgcmVhZEFzOiAnQXJyYXlCdWZmZXInIHwgJ0JpbmFyeVN0cmluZycgfCAnRGF0YVVSTCcgfCAnVGV4dCdcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZGlyZWN0b3J5RW50cnksIGZpbGUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIGdldFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVhZGVyLnJlc3VsdCAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5yZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgocmVhZGVyLnJlc3VsdCBhcyBhbnkpIGFzIFQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWFkZXIuZXJyb3IgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIuZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoeyBjb2RlOiBudWxsLCBtZXNzYWdlOiAnUkVBREVSX09OTE9BREVORF9FUlInIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmaWxlRW50cnkuZmlsZShcbiAgICAgICAgICAgIGZpbGUgPT4ge1xuICAgICAgICAgICAgICByZWFkZXJbYHJlYWRBcyR7cmVhZEFzfWBdLmNhbGwocmVhZGVyLCBmaWxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZShmZTogRW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW1vdmVSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZlLnJlbW92ZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZmUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlKHNyY2U6IEVudHJ5LCBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3JjZS5tb3ZlVG8oXG4gICAgICAgIGRlc3RkaXIsXG4gICAgICAgIG5ld05hbWUsXG4gICAgICAgIGRlc3RlID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRlc3RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNvcHkoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLmNvcHlUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgZGVzdGUgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVhZEVudHJpZXMoZHI6IERpcmVjdG9yeVJlYWRlcik6IFByb21pc2U8RW50cnlbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBkci5yZWFkRW50cmllcyhcbiAgICAgICAgZW50cmllcyA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShlbnRyaWVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHJpbXJhZihkZTogRGlyZWN0b3J5RW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW1vdmVSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGRlLnJlbW92ZVJlY3Vyc2l2ZWx5KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIGZpbGVSZW1vdmVkOiBkZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVdyaXRlcihmZTogRmlsZUVudHJ5KTogUHJvbWlzZTxGaWxlV3JpdGVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVXcml0ZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZlLmNyZWF0ZVdyaXRlcihcbiAgICAgICAgd3JpdGVyID0+IHtcbiAgICAgICAgICByZXNvbHZlKHdyaXRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZSh3cml0ZXI6IEZpbGVXcml0ZXIsIGd1OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChndSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgIHJldHVybiB0aGlzLndyaXRlRmlsZUluQ2h1bmtzKHdyaXRlciwgZ3UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlci5vbndyaXRlZW5kID0gZXZ0ID0+IHtcbiAgICAgICAgaWYgKHdyaXRlci5lcnJvcikge1xuICAgICAgICAgIHJlamVjdCh3cml0ZXIuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZXZ0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdyaXRlci53cml0ZShndSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZUZpbGVJbkNodW5rcyh3cml0ZXI6IEZpbGVXcml0ZXIsIGZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCBCTE9DS19TSVpFID0gMTAyNCAqIDEwMjQ7XG4gICAgbGV0IHdyaXR0ZW5TaXplID0gMDtcblxuICAgIGZ1bmN0aW9uIHdyaXRlTmV4dENodW5rKCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKEJMT0NLX1NJWkUsIGZpbGUuc2l6ZSAtIHdyaXR0ZW5TaXplKTtcbiAgICAgIGNvbnN0IGNodW5rID0gZmlsZS5zbGljZSh3cml0dGVuU2l6ZSwgd3JpdHRlblNpemUgKyBzaXplKTtcblxuICAgICAgd3JpdHRlblNpemUgKz0gc2l6ZTtcbiAgICAgIHdyaXRlci53cml0ZShjaHVuayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3cml0ZXIub25lcnJvciA9IHJlamVjdCBhcyAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gICAgICB3cml0ZXIub253cml0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdyaXR0ZW5TaXplIDwgZmlsZS5zaXplKSB7XG4gICAgICAgICAgd3JpdGVOZXh0Q2h1bmsoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3cml0ZU5leHRDaHVuaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/social-sharing/ngx/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/social-sharing/ngx/index.js ***!
  \****************************************************************/
/*! exports provided: SocialSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharing", function() { return SocialSharing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var SocialSharing = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
    SocialSharing = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SocialSharing);
    return SocialSharing;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NvY2lhbC1zaGFyaW5nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDckMsaUNBQWlCOzs7O0lBYWxELDZCQUFLLGFBQUMsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLElBQXdCLEVBQUUsR0FBWTtJQVloRix3Q0FBZ0IsYUFBQyxPQU1oQjtJQWtCRCxtQ0FBVyxhQUFDLE9BQWUsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFnQjdGLHVDQUFlLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0lBZ0I3RCx3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFpQjlELDREQUFvQyxhQUNsQyxPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVksRUFDWixnQkFBeUI7SUFjM0IseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7SUFnQmhELHdDQUFnQixhQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsR0FBWTtJQWlCOUQsa0RBQTBCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFhMUYsbUNBQVcsYUFBQyxNQUFjLEVBQUUsV0FBbUI7SUFXL0Msd0NBQWdCO0lBbUJoQixxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7SUFtQjNCLGdDQUFRLGFBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxPQUFnQixFQUFFLEtBQWMsRUFBRSxHQUFZO0lBWXpGLCtDQUF1QixhQUFDLFlBQW9CO0lBVTVDLHdDQUFnQixhQUFDLGVBQWtDOzs7Ozs7SUEvT3hDLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkExQzFCO0VBMENtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNvY2lhbCBTaGFyaW5nXG4gKiBAcHJlbWllciBzb2NpYWwtc2hhcmluZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBTaGFyZSB0ZXh0LCBmaWxlcywgaW1hZ2VzLCBhbmQgbGlua3MgdmlhIHNvY2lhbCBuZXR3b3Jrcywgc21zLCBhbmQgZW1haWwuXG4gKlxuICogRm9yIEJyb3dzZXIgdXNhZ2UgY2hlY2sgb3V0IHRoZSBXZWIgU2hhcmUgQVBJIGRvY3M6IGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9Tb2NpYWxTaGFyaW5nLVBob25lR2FwLVBsdWdpbiM1LXdlYi1zaGFyZS1hcGlcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNvY2lhbFNoYXJpbmcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NvY2lhbC1zaGFyaW5nL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzb2NpYWxTaGFyaW5nOiBTb2NpYWxTaGFyaW5nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBDaGVjayBpZiBzaGFyaW5nIHZpYSBlbWFpbCBpcyBzdXBwb3J0ZWRcbiAqIHRoaXMuc29jaWFsU2hhcmluZy5jYW5TaGFyZVZpYUVtYWlsKCkudGhlbigoKSA9PiB7XG4gKiAgIC8vIFNoYXJpbmcgdmlhIGVtYWlsIGlzIHBvc3NpYmxlXG4gKiB9KS5jYXRjaCgoKSA9PiB7XG4gKiAgIC8vIFNoYXJpbmcgdmlhIGVtYWlsIGlzIG5vdCBwb3NzaWJsZVxuICogfSk7XG4gKlxuICogLy8gU2hhcmUgdmlhIGVtYWlsXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuc2hhcmVWaWFFbWFpbCgnQm9keScsICdTdWJqZWN0JywgWydyZWNpcGllbnRAZXhhbXBsZS5vcmcnXSkudGhlbigoKSA9PiB7XG4gKiAgIC8vIFN1Y2Nlc3MhXG4gKiB9KS5jYXRjaCgoKSA9PiB7XG4gKiAgIC8vIEVycm9yIVxuICogfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTb2NpYWxTaGFyaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teC1zb2NpYWxzaGFyaW5nJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zb2NpYWxzaGFyaW5nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9Tb2NpYWxTaGFyaW5nLVBob25lR2FwLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTaGFyaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBUaGUgbWVzc2FnZSB5b3Ugd291bGQgbGlrZSB0byBzaGFyZS5cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ30gVGhlIHN1YmplY3RcbiAgICogQHBhcmFtIGZpbGUge3N0cmluZ3xzdHJpbmdbXX0gVVJMKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIGxvY2FsIHBhdGgocykgdG8gZmlsZShzKSBvciBpbWFnZShzKSwgb3IgYmFzZTY0IGRhdGEgb2YgYW4gaW1hZ2UuIE9ubHkgdGhlIGZpcnN0IGZpbGUvaW1hZ2Ugd2lsbCBiZSB1c2VkIG9uIFdpbmRvd3MgUGhvbmUuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gQSBVUkwgdG8gc2hhcmVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgfSlcbiAgc2hhcmUobWVzc2FnZT86IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgZmlsZT86IHN0cmluZyB8IHN0cmluZ1tdLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdXNpbmcgdGhlIHNoYXJlIHNoZWV0IHdpdGggYWRkaXRpb25hbCBvcHRpb25zIGFuZCByZXR1cm5zIGEgcmVzdWx0IG9iamVjdCBvciBhbiBlcnJvciBtZXNzYWdlIChyZXF1aXJlcyBwbHVnaW4gdmVyc2lvbiA1LjEuMCspXG4gICAqIEBwYXJhbSBvcHRpb25zIHtvYmplY3R9IFRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBtZXNzYWdlLCBzdWJqZWN0LCBmaWxlcywgdXJsIGFuZCBjaG9vc2VyVGl0bGUgcHJvcGVydGllcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVXaXRoT3B0aW9ucyhvcHRpb25zOiB7XG4gICAgbWVzc2FnZT86IHN0cmluZztcbiAgICBzdWJqZWN0Pzogc3RyaW5nO1xuICAgIGZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGNob29zZXJUaXRsZT86IHN0cmluZztcbiAgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBhIHNwZWNpZmljIGFwcC5cbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgY2FuU2hhcmVWaWEoYXBwTmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIFR3aXR0ZXJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFUd2l0dGVyKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBGYWNlYm9va1xuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBGYWNlYm9vayB3aXRoIGEgcGFzdGUgbWVzc2FnZSBoaW50XG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwYXN0ZU1lc3NhZ2VIaW50IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhRmFjZWJvb2tXaXRoUGFzdGVNZXNzYWdlSGludChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nLFxuICAgIHBhc3RlTWVzc2FnZUhpbnQ/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIEluc3RhZ3JhbVxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFJbnN0YWdyYW0obWVzc2FnZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIFdoYXRzQXBwXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHAobWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIGEgV2hhdHNBcHAgQ29udGFjdFxuICAgKiBAcGFyYW0gcmVjZWl2ZXIge3N0cmluZ30gUGFzcyBwaG9uZSBudW1iZXIgb24gQW5kcm9pZCwgYW5kIEFkZHJlc3Nib29rIElEIChhYmlkKSBvbiBpT1NcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfSBJbWFnZSB0byBzZW5kIChkb2VzIG5vdCB3b3JrIG9uIGlPU1xuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IExpbmsgdG8gc2VuZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwVG9SZWNlaXZlcihyZWNlaXZlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSB2aWEgU01TXG4gICAqIEBwYXJhbSBtZXNzZ2Uge3N0cmluZ30gbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfSBOdW1iZXIgb3IgbXVsdGlwbGUgbnVtYmVycyBzZXBlcmF0ZWQgYnkgY29tbWFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhU01TKG1lc3NnZTogc3RyaW5nLCBwaG9uZU51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHlvdSBjYW4gc2hhcmUgdmlhIGVtYWlsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGNhblNoYXJlVmlhRW1haWwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIEVtYWlsXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSB0byB7c3RyaW5nW119XG4gICAqIEBwYXJhbSBjYyB7c3RyaW5nW119IE9wdGlvbmFsXG4gICAqIEBwYXJhbSBiY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gZmlsZXMge3N0cmluZ3xzdHJpbmdbXX0gT3B0aW9uYWwgVVJMIG9yIGxvY2FsIHBhdGggdG8gZmlsZShzKSB0byBhdHRhY2hcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgICBzdWNjZXNzSW5kZXg6IDYsXG4gICAgZXJyb3JJbmRleDogNyxcbiAgfSlcbiAgc2hhcmVWaWFFbWFpbChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc3ViamVjdDogc3RyaW5nLFxuICAgIHRvOiBzdHJpbmdbXSxcbiAgICBjYz86IHN0cmluZ1tdLFxuICAgIGJjYz86IHN0cmluZ1tdLFxuICAgIGZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW11cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIEFwcE5hbWVcbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWEoYXBwTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWZpbmVzIHRoZSBwb3B1cCBwb3NpdGlvbiBiZWZvcmUgY2FsbCB0aGUgc2hhcmUgbWV0aG9kLlxuICAgKiBAcGFyYW0gdGFyZ2V0Qm91bmRzIHtzdHJpbmd9IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzZXRJUGFkUG9wdXBDb29yZGluYXRlcyh0YXJnZXRCb3VuZHM6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogU2F2ZSBhbiBhcnJheSBvZiBpbWFnZXMgdG8gdGhlIGNhbWVyYSByb2xsXG4gICAqIEBwYXJhbSAge3N0cmluZ3xzdHJpbmdbXX0gZmlsZU9yRmlsZUFycmF5IFNpbmdsZSBvciBtdWx0aXBsZSBmaWxlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+IH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHNhdmVUb1Bob3RvQWxidW0oZmlsZU9yRmlsZUFycmF5OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js ***!
  \***********************************************************/
/*! exports provided: Papa, PapaParseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Papa", function() { return Papa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapaParseModule", function() { return PapaParseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse/papaparse.min.js */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Papa = /** @class */ (function () {
    function Papa(config) {
        this.config = config;
        this._papa = papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__;
        if (!this.config) {
            this.config = {};
        }
    }
    /**
     * Parse CSV to an array
     * @param {?} csv
     * @param {?=} config
     * @return {?}
     */
    Papa.prototype.parse = /**
     * Parse CSV to an array
     * @param {?} csv
     * @param {?=} config
     * @return {?}
     */
    function (csv, config) {
        if (config) {
            if (config.worker === true) {
                if (this.config.scriptPath) {
                    this._papa.SCRIPT_PATH = this.config.scriptPath;
                }
                else {
                    throw new Error('When using workers, the workerScriptPath must be defined in global' +
                        ' papaparse configuration. See' +
                        ' https://alberthaff.dk/projects/ngx-papaparse/docs/v3/parsing-csv/using-serviceworkers' +
                        ' for more information.');
                }
            }
        }
        return this._papa.parse(csv, config);
    };
    /**
     * Convert an array into CSV
     * @param {?} data
     * @param {?=} config
     * @return {?}
     */
    Papa.prototype.unparse = /**
     * Convert an array into CSV
     * @param {?} data
     * @param {?=} config
     * @return {?}
     */
    function (data, config) {
        return this._papa.unparse(data, config);
    };
    /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setLocalChunkSize = /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.LocalChunkSize = value;
    };
    /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setRemoteChunkSize = /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.RemoteChunkSize = value;
    };
    /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setDefaultDelimiter = /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.DefaultDelimiter = value;
    };
    Object.defineProperty(Papa.prototype, "badDelimiters", {
        /**
         * An array of characters that are not allowed as delimiters.
         */
        get: /**
         * An array of characters that are not allowed as delimiters.
         * @return {?}
         */
        function () {
            return this._papa.BAD_DELIMITERS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "recordSeperator", {
        /**
         * The true delimiter. Invisible. ASCII code 30.
         * Should be doing the job we strangely rely upon commas and tabs for.
         */
        get: /**
         * The true delimiter. Invisible. ASCII code 30.
         * Should be doing the job we strangely rely upon commas and tabs for.
         * @return {?}
         */
        function () {
            return this._papa.RECORD_SEP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "unitSeperator", {
        /**
         * Also sometimes used as a delimiting character. ASCII code 31.
         */
        get: /**
         * Also sometimes used as a delimiting character. ASCII code 31.
         * @return {?}
         */
        function () {
            return this._papa.UNIT_SEP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "workersSupported", {
        /**
         * Whether or not the browser supports HTML5 Web Workers.
         * If false, worker: true will have no effect.
         */
        get: /**
         * Whether or not the browser supports HTML5 Web Workers.
         * If false, worker: true will have no effect.
         * @return {?}
         */
        function () {
            return this._papa.WORKERS_SUPPORTED;
        },
        enumerable: true,
        configurable: true
    });
    Papa.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Papa.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['PapaParseGlobalConfig',] }] }
    ]; };
    return Papa;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PapaParseModule = /** @class */ (function () {
    function PapaParseModule() {
    }
    PapaParseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    providers: [
                        Papa
                    ]
                },] },
    ];
    return PapaParseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhcGFwYXJzZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXBhcGFwYXJzZS9saWIvcGFwYS50cyIsIm5nOi8vbmd4LXBhcGFwYXJzZS9saWIvcGFwYS1wYXJzZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFwYVBhcnNlR2xvYmFsQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvcGFwYS1wYXJzZS1nbG9iYWwtY29uZmlnJztcbmltcG9ydCB7UGFwYVBhcnNlUmVzdWx0fSBmcm9tICcuL2ludGVyZmFjZXMvcGFwYS1wYXJzZS1yZXN1bHQnO1xuaW1wb3J0IHtQYXBhUGFyc2VDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcy9wYXBhLXBhcnNlLWNvbmZpZyc7XG5pbXBvcnQge1BhcGFVbnBhcnNlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvcGFwYS11bnBhcnNlLWNvbmZpZyc7XG5pbXBvcnQgKiBhcyBsaWIgZnJvbSAncGFwYXBhcnNlL3BhcGFwYXJzZS5taW4uanMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFwYSB7XG4gICAgcHVibGljIF9wYXBhID0gbGliO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdCgnUGFwYVBhcnNlR2xvYmFsQ29uZmlnJykgcHJpdmF0ZSBjb25maWc/OiBQYXBhUGFyc2VHbG9iYWxDb25maWdcbiAgICApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIENTViB0byBhbiBhcnJheVxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJzZShjc3Y6IHN0cmluZ3xGaWxlLCBjb25maWc/OiBQYXBhUGFyc2VDb25maWcpOiBQYXBhUGFyc2VSZXN1bHQge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLndvcmtlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5zY3JpcHRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcGEuU0NSSVBUX1BBVEggPSB0aGlzLmNvbmZpZy5zY3JpcHRQYXRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2hlbiB1c2luZyB3b3JrZXJzLCB0aGUgd29ya2VyU2NyaXB0UGF0aCBtdXN0IGJlIGRlZmluZWQgaW4gZ2xvYmFsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnIHBhcGFwYXJzZSBjb25maWd1cmF0aW9uLiBTZWUnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcgaHR0cHM6Ly9hbGJlcnRoYWZmLmRrL3Byb2plY3RzL25neC1wYXBhcGFyc2UvZG9jcy92My9wYXJzaW5nLWNzdi91c2luZy1zZXJ2aWNld29ya2VycycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5wYXJzZShjc3YsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhbiBhcnJheSBpbnRvIENTVlxuICAgICAqL1xuICAgIHB1YmxpYyB1bnBhcnNlKGRhdGEsIGNvbmZpZz86IFBhcGFVbnBhcnNlQ29uZmlnKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcGEudW5wYXJzZShkYXRhLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2l6ZSBpbiBieXRlcyBvZiBlYWNoIGZpbGUgY2h1bmsuXG4gICAgICogVXNlZCB3aGVuIHN0cmVhbWluZyBmaWxlcyBvYnRhaW5lZCBmcm9tIHRoZSBET00gdGhhdFxuICAgICAqIGV4aXN0IG9uIHRoZSBsb2NhbCBjb21wdXRlci4gRGVmYXVsdCAxMCBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TG9jYWxDaHVua1NpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXBhLkxvY2FsQ2h1bmtTaXplID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzaXplIGluIGJ5dGVzIG9mIGVhY2ggcmVtb3RlIGZpbGUgY2h1bmsuXG4gICAgICogVXNlZCB3aGVuIHN0cmVhbWluZyByZW1vdGUgZmlsZXMuIERlZmF1bHQgNSBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UmVtb3RlQ2h1bmtTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFwYS5SZW1vdGVDaHVua1NpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlbGltaXRlciB1c2VkIHdoZW4gaXQgaXMgbGVmdCB1bnNwZWNpZmllZCBhbmQgY2Fubm90IGJlIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkuIERlZmF1bHQgaXMgY29tbWEuXG4gICAgICovXG4gICAgcHVibGljIHNldERlZmF1bHREZWxpbWl0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXBhLkRlZmF1bHREZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIGFzIGRlbGltaXRlcnMuXG4gICAgICovXG4gICAgZ2V0IGJhZERlbGltaXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXBhLkJBRF9ERUxJTUlURVJTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0cnVlIGRlbGltaXRlci4gSW52aXNpYmxlLiBBU0NJSSBjb2RlIDMwLlxuICAgICAqIFNob3VsZCBiZSBkb2luZyB0aGUgam9iIHdlIHN0cmFuZ2VseSByZWx5IHVwb24gY29tbWFzIGFuZCB0YWJzIGZvci5cbiAgICAgKi9cbiAgICBnZXQgcmVjb3JkU2VwZXJhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5SRUNPUkRfU0VQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsc28gc29tZXRpbWVzIHVzZWQgYXMgYSBkZWxpbWl0aW5nIGNoYXJhY3Rlci4gQVNDSUkgY29kZSAzMS5cbiAgICAgKi9cbiAgICBnZXQgdW5pdFNlcGVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcGEuVU5JVF9TRVA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGJyb3dzZXIgc3VwcG9ydHMgSFRNTDUgV2ViIFdvcmtlcnMuXG4gICAgICogSWYgZmFsc2UsIHdvcmtlcjogdHJ1ZSB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICAgICAqL1xuICAgIGdldCB3b3JrZXJzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5XT1JLRVJTX1NVUFBPUlRFRDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXBhfSBmcm9tICcuL3BhcGEnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQYXBhXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXBhUGFyc2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBV0ksY0FBaUUsTUFBOEI7UUFBOUIsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7cUJBRmhGLEdBQUc7UUFJZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7Ozs7Ozs7SUFLTSxvQkFBSzs7Ozs7O2NBQUMsR0FBZ0IsRUFBRSxNQUF3QjtRQUNuRCxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2lCQUNuRDtxQkFBTTtvQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLG9FQUFvRTt3QkFDaEYsK0JBQStCO3dCQUMvQix3RkFBd0Y7d0JBQ3hGLHdCQUF3QixDQUFDLENBQUM7aUJBQ2pDO2FBQ0o7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7OztJQU1sQyxzQkFBTzs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQTBCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFRckMsZ0NBQWlCOzs7Ozs7O2NBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O0lBTy9CLGlDQUFrQjs7Ozs7O2NBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7SUFNaEMsa0NBQW1COzs7OztjQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBTXhDLHNCQUFJLCtCQUFhOzs7Ozs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDcEM7OztPQUFBO0lBTUQsc0JBQUksaUNBQWU7Ozs7Ozs7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQ2hDOzs7T0FBQTtJQUtELHNCQUFJLCtCQUFhOzs7Ozs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDOUI7OztPQUFBO0lBTUQsc0JBQUksa0NBQWdCOzs7Ozs7Ozs7O1FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ3ZDOzs7T0FBQTs7Z0JBMUZKLFVBQVU7Ozs7Z0RBSU0sUUFBUSxZQUFJLE1BQU0sU0FBQyx1QkFBdUI7O2VBWDNEOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDUCxJQUFJO3FCQUNQO2lCQUNKOzswQkFSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v4.6.3
https://github.com/mholt/PapaParse
License: MIT
*/
Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var s,e,f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{},n=!f.document&&!!f.postMessage,o=n&&/(\?|&)papaworker(=|&|$)/.test(f.location.search),a=!1,h={},u=0,k={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;z(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!z(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var i=function(){if(!k.WORKERS_SUPPORTED)return!1;if(!a&&null===k.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=k.SCRIPT_PATH||s;e+=(-1!==e.indexOf("?")?"&":"?")+"papaworker";var t=new f.Worker(e);return t.onmessage=m,t.id=u++,h[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=z(t.step),t.chunk=z(t.chunk),t.complete=z(t.complete),t.error=z(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;k.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new c(t):new _(t):!0===e.readable&&z(e.read)&&z(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new p(t));return n.stream(e)},unparse:function(e,t){var i=!1,g=!0,m=",",y="\r\n",n='"',r=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(g=t.header)}();var s=new RegExp(M(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return o(null,e,r);if("object"==typeof e[0])return o(a(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:a(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),o(e.fields||[],e.data||[],r);throw"exception: Unable to serialize unrecognized input";function a(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function o(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&g){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=m);var _=n&&s?e[p]:p;i+=v(t[o][_],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(s,n+n);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(e,k.BAD_DELIMITERS)||-1<e.indexOf(m)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!n&&!!f.Worker,k.SCRIPT_PATH=null,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=v,k.ParserHandle=r,k.NetworkStreamer=c,k.FileStreamer=p,k.StringStreamer=_,k.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(z(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(z(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){z(a)&&a(e,n.file,n.inputElem),u()},k.parse(n.file,n.instanceConfig)}else z(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&z(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:k.WORKER_ID,finished:a});else if(z(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return;n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!z(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}},this._sendError=function(e){z(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1})}}function c(e){var i;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r),i.setRequestHeader("If-None-Match","webkit-no-cache")}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function p(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),l.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function _(e){var r;l.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function g(e){l.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,n=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,s=0,u=!1,e=!1,f=[],d={data:[],errors:[],meta:{}};if(z(g.step)){var l=g.step;g.step=function(e){if(d=e,p())c();else{if(c(),0===d.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():l(d,t)}}}function m(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function c(){if(d&&h&&(y("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<d.data.length;e++)m(d.data[e])&&d.data.splice(e--,1);return p()&&function(){if(!d)return;for(var e=0;p()&&e<d.data.length;e++)for(var t=0;t<d.data[e].length;t++){var r=d.data[e][t];g.trimHeaders&&(r=r.trim()),f.push(r)}d.data.splice(0,1)}(),function(){if(!d||!g.header&&!g.dynamicTyping&&!g.transform)return d;for(var e=0;e<d.data.length;e++){var t,r=g.header?{}:[];for(t=0;t<d.data[e].length;t++){var i=t,n=d.data[e][t];g.header&&(i=t>=f.length?"__parsed_extra":f[t]),g.transform&&(n=g.transform(n,i)),n=_(i,n),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(n)):r[i]=n}d.data[e]=r,g.header&&(t>f.length?y("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+t,s+e):t<f.length&&y("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+t,s+e))}g.header&&d.meta&&(d.meta.fields=f);return s+=d.data.length,d}()}function p(){return g.header&&0===f.length}function _(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(i.test(t)?parseFloat(t):n.test(t)?new Date(t):""===t?null:t):t;var r}function y(e,t,r,i){d.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(M(t)+"([^]*?)"+M(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)z(g.delimiter)&&(g.delimiter=g.delimiter(e),d.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i){for(var n,s,a,o=[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP],h=0;h<o.length;h++){var u=o[h],f=0,d=0,l=0;a=void 0;for(var c=new v({comments:i,delimiter:u,newline:t,preview:10}).parse(e),p=0;p<c.data.length;p++)if(r&&m(c.data[p]))l++;else{var _=c.data[p].length;d+=_,void 0!==a?1<_&&(f+=Math.abs(_-a),a=_):a=0}0<c.data.length&&(d/=c.data.length-l),(void 0===s||s<f)&&1.99<d&&(s=f,n=u)}return{successful:!!(g.delimiter=n),bestDelimiter:n}}(e,g.newline,g.skipEmptyLines,g.comments);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=k.DefaultDelimiter),d.meta.delimiter=g.delimiter}var s=E(g);return g.preview&&g.header&&s.preview++,a=e,o=new v(s),d=o.parse(a,t,r),c(),u?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){u=!1,t.streamer.parseChunk(a,!0)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),d.meta.aborted=!0,z(g.complete)&&g.complete(d),a=""}}function M(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(e){var S,O=(e=e||{}).delimiter,x=e.newline,T=e.comments,I=e.step,A=e.preview,D=e.fastMode,L=S=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<k.BAD_DELIMITERS.indexOf(O))&&(O=","),T===O)throw"Comment character same as delimiter";!0===T?T="#":("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var P=0,F=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw"Input must be a string";var n=i.length,e=O.length,s=x.length,a=T.length,o=z(I),h=[],u=[],f=[],d=P=0;if(!i)return C();if(D||!1!==D&&-1===i.indexOf(S)){for(var l=i.split(x),c=0;c<l.length;c++){if(f=l[c],P+=f.length,c!==l.length-1)P+=x.length;else if(r)return C();if(!T||f.substr(0,a)!==T){if(o){if(h=[],k(f.split(O)),R(),F)return C()}else k(f.split(O));if(A&&A<=c)return h=h.slice(0,A),C(!0)}}return C()}for(var p,_=i.indexOf(O,P),g=i.indexOf(x,P),m=new RegExp(M(L)+M(S),"g");;)if(i[P]!==S)if(T&&0===f.length&&i.substr(P,a)===T){if(-1===g)return C();P=g+s,g=i.indexOf(x,P),_=i.indexOf(O,P)}else if(-1!==_&&(_<g||-1===g))f.push(i.substring(P,_)),P=_+e,_=i.indexOf(O,P);else{if(-1===g)break;if(f.push(i.substring(P,g)),w(g+s),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0)}else for(p=P,P++;;){if(-1===(p=i.indexOf(S,p+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:P}),E();if(p===n-1)return E(i.substring(P,p).replace(m,S));if(S!==L||i[p+1]!==L){if(S===L||0===p||i[p-1]!==L){var y=b(-1===g?_:Math.min(_,g));if(i[p+1+y]===O){f.push(i.substring(P,p).replace(m,S)),P=p+1+y+e,_=i.indexOf(O,P),g=i.indexOf(x,P);break}var v=b(g);if(i.substr(p+1+v,s)===x){if(f.push(i.substring(P,p).replace(m,S)),w(p+1+v+s),_=i.indexOf(O,P),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:P}),p++}}else p++}return E();function k(e){h.push(e),d=P}function b(e){var t=0;if(-1!==e){var r=i.substring(p+1,e);r&&""===r.trim()&&(t=r.length)}return t}function E(e){return r||(void 0===e&&(e=i.substr(P)),f.push(e),P=n,k(f),o&&R()),C()}function w(e){P=e,k(f),f=[],g=i.indexOf(x,P)}function C(e){return{data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:F,truncated:!!e,cursor:d+(t||0)}}}function R(){I(C()),h=[],u=[]}},this.abort=function(){F=!0},this.getCharIndex=function(){return P}}function m(e){var t=e.data,r=h[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:b,resume:b};if(z(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else z(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&y(t.workerId,t.results)}function y(e,t){var r=h[e];z(r.userComplete)&&r.userComplete(t),r.terminate(),delete h[e]}function b(){throw"Not implemented."}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=E(e[r]);return t}function w(e,t){return function(){e.apply(t,arguments)}}function z(e){return"function"==typeof e}return o?f.onmessage=function(e){var t=e.data;void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=k.parse(t.input,t.config);r&&f.postMessage({workerId:k.WORKER_ID,results:r,finished:!0})}}:k.WORKERS_SUPPORTED&&(e=document.getElementsByTagName("script"),s=e.length?e[e.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){a=!0},!0):a=!0),(c.prototype=Object.create(l.prototype)).constructor=c,(p.prototype=Object.create(l.prototype)).constructor=p,(_.prototype=Object.create(_.prototype)).constructor=_,(g.prototype=Object.create(l.prototype)).constructor=g,k});

/***/ }),

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

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");












var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"] //
                    }
                ]),
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["PapaParseModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"], _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_8__["Downloader"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"container\">\n    <div class=\"center\">\n      <!-- <div style=\"margin: 0 auto;\"> -->\n      <!-- <ion-label class=\"label-bigger-font-size\">TP Insight</ion-label> -->\n      <p class=\"titleSize\">Machine Insight</p>\n      <br />\n      <p class=\"versionNumberSize\">{{versionNumber}}</p>\n      <!-- </div> -->\n\n      <ion-card class=\"welcome-card\">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div class=\"obj-center obj-center-flex-height\">\n                <img src=\"assets/img/icon-research.png\" />\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n          <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input [(ngModel)]=\"loginModel.username\" name=\"username\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" [(ngModel)]=\"loginModel.password\" name=\"password\"\n              (keyup.enter)=\"onLoginClicked()\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Remember Me</ion-label>\n            <ion-toggle style=\"float: right;\" [(ngModel)]=\"isRemembered\" name=\"rememberMe\">\n            </ion-toggle>\n          </ion-item>\n          <ion-button [disabled]=\"form.invalid\" type=\"submit\" class=\"obj-center\">\n            Login\n          </ion-button>\n        </form>\n      </ion-card>\n\n      <!-- <ion-card>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button class=\"obj-center\" (click)=\"onLoginClicked()\">\n                Login\n              </ion-button>\n              <ion-button routerLink=\"/pie\" routerDirection=\"forward\">Login</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card> -->\n\n      <!-- <ion-card class=\"welcome-card\">\n        <ion-button class=\"obj-center\" (click)=\"onLogin01112Clicked()\">\n          Login 01112\n        </ion-button>\n      </ion-card> -->\n\n      <!-- <a href=\"http://wshqmobile.thunderprint.org/csv/testing.csv\" download=\"teeeeeest.csv\">Download the csv</a> -->\n\n    </div>\n  </div>\n\n  <!-- <table style=\"border: 1;\" class=\"data-table\">\n    <tr>\n      <td *ngFor=\"let header of headerRow\" text-center><b>{{ header }}</b></td>\n    </tr>\n    <tr *ngFor=\"let row of csvData; let i = index\">\n      <td *ngFor=\"let data of row; let j = index; trackBy: trackByFn\" class=\"data-col \">\n        <ion-input type=\"text\" [(ngModel)]=\"csvData[i][j]\"></ion-input>\n      </td>\n    </tr>\n  </table> -->\n</ion-content>\n\n<!-- <ion-content>\n  <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n    <ion-list>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"form.email\" name=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input type=\"password\" required [(ngModel)]=\"form.password\" name=\"password\"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content> -->\n\n<!-- <ion-footer>\n  <ion-toolbar position=\"bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button [disabled]=\"loginForm.form.invalid\" (click)=\"loginForm.ngSubmit.emit()\">Send Report</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <button [disabled]=\"loginForm.form.invalid\" ion-button full (click)=\"loginForm.ngSubmit.emit()\">Login</button>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\np.text-center {\n  text-align: center; }\n\n.example-tab-icon {\n  margin-right: 8px; }\n\n.obj-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n.obj-center .obj-center-flex-height {\n    height: 100%; }\n\n.obj-center img {\n    height: auto;\n    width: auto;\n    margin: auto;\n    display: block; }\n\n.label-bigger-font-size {\n  font-size: 3em; }\n\n.container {\n  height: 100%;\n  position: relative; }\n\n.center {\n  min-width: 80%;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.titleSize {\n  font-size: 36px;\n  text-align: center;\n  margin: 0; }\n\n.versionNumberSize {\n  font-size: 10px;\n  text-align: center;\n  margin: 0; }\n\n.item-toggle .item-inner {\n  display: block; }\n\n.item-toggle .item-inner .input-wrapper {\n    display: block;\n    flex: none;\n    text-align: center; }\n\n.item-toggle .item-inner ion-toggle.toggle {\n    display: block;\n    flex: none;\n    margin-left: auto;\n    margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94aWFuZ3dlaS9Eb2N1bWVudHMvaW5zaWdodC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLDhCQUE4QixFQUFBOztBQUhoQztJQU1JLFlBQVksRUFBQTs7QUFOaEI7SUFVSSxZQUFZO0lBRVosV0FBVztJQUVYLFlBQVk7SUFDWixjQUFjLEVBQUE7O0FBS2xCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBR1g7RUFFRSxjQUFjLEVBQUE7O0FBRmhCO0lBS0csY0FBYztJQUNWLFVBQVU7SUFDVixrQkFBa0IsRUFBQTs7QUFQekI7SUFXRyxjQUFjO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxucC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtdGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLm9iai1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcblxuICAub2JqLWNlbnRlci1mbGV4LWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLy8gbWF4LWhlaWdodDogMjU3cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLy8gbWF4LXdpZHRoOiA3MTFweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxufVxuXG4ubGFiZWwtYmlnZ2VyLWZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uY29udGFpbmVyIHsgXG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBib3JkZXI6IDNweCBzb2xpZCAjQzIwRTFBOyBcbn1cblxuLmNlbnRlciB7XG4gIG1pbi13aWR0aDogODAlO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnRpdGxlU2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi52ZXJzaW9uTnVtYmVyU2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5pdGVtLXRvZ2dsZSB7XG5cdC5pdGVtLWlubmVyIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcblx0XHQuaW5wdXQtd3JhcHBlciB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcbiAgICBcdFx0XHRmbGV4OiBub25lO1xuICAgIFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tdG9nZ2xlLnRvZ2dsZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcbiAgICBcdFx0XHRmbGV4OiBub25lO1xuICAgIFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIFx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHR9XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-model/base.model */ "./src/app/data-model/base.model.ts");
/* harmony import */ var _data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-model/constant.model */ "./src/app/data-model/constant.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/base-page/base-page.page */ "./src/app/shared/base-page/base-page.page.ts");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");

















var LoginPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginPage, _super);
    function LoginPage(loadingCtrl, alertCtrl, menuCtrl, navCtrl, router, service, http, storage, platform, appVersion, meta, downloader, file, socialSharing, papa, httpR) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.menuCtrl = menuCtrl;
        _this.navCtrl = navCtrl;
        _this.router = router;
        _this.service = service;
        _this.http = http;
        _this.storage = storage;
        _this.platform = platform;
        _this.appVersion = appVersion;
        _this.meta = meta;
        _this.downloader = downloader;
        _this.file = file;
        _this.socialSharing = socialSharing;
        _this.papa = papa;
        _this.httpR = httpR;
        _this.loginModel = new _data_model_base_model__WEBPACK_IMPORTED_MODULE_5__["LoginModel"]('', '');
        _this.isLoading = false;
        _this.alertShown = false;
        _this.duration = 90000;
        _this.platform.ready().then(function () {
            if (_this.service.isDesktop()) {
                // Debug
                var viewport = _this.meta.getTag('name=version');
                _this.versionNumber = viewport.content;
                // console.log("BROWSER: ", this.versionNumber);
            }
            else {
                _this.appVersion.getVersionNumber().then(function (v) {
                    _this.versionNumber = v;
                    // console.log("VVVVVV: ", this.versionNumber);
                }, function (err) {
                    // PWA
                    var viewport = _this.meta.getTag('name=version');
                    _this.versionNumber = viewport.content;
                    // console.log("EEEEE: ", this.versionNumber);
                });
            }
        });
        _this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_LG_REMEMBER_ME).then(function (loginModel) {
            var itemJSON = JSON.parse(loginModel);
            _this.isRemembered = !((itemJSON == null) || (itemJSON['username'] == '') || (itemJSON['password'] == ''));
            if (_this.isRemembered) {
                _this.loginModel.username = itemJSON['username'];
                _this.loginModel.password = itemJSON['password'];
            }
        });
        return _this;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // set a key/value
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_ACCESS_TOKEN);
        // this.storage.remove(Constants.c_LG_REMEMBER_ME);
        setTimeout(function () {
            _this.menuCtrl.enable(false);
            _this.menuCtrl.swipeGesture(false);
        }, 1000);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.loadingCtrl.dismiss();
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        var _this = this;
        // enable the root left menu when leaving the tutorial page
        this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_MACHINE_LIST);
        // this.storage.remove(Constants.c_OP_DEPARTMENT);
        // this.storage.remove(Constants.c_OP_PROCESS);
        // this.storage.remove(Constants.c_OP_MACHINE);
        setTimeout(function () {
            _this.menuCtrl.enable(true);
            _this.menuCtrl.swipeGesture(true);
        }, 1000);
        // this.service.dismissLoading();
        // console.log('LOGIN1234567890');
    };
    LoginPage.prototype.onSubmit = function (form) {
        this.onLoginClicked();
    };
    LoginPage.prototype.onLoginClicked = function () {
        // Or to get a key/value pair
        // this.storage.get('name').then((val) => {
        //   console.log('Your name is', val);
        //   this.presentAlert(val)
        // });
        var _this = this;
        // this.storage.remove(Constants.c_OP_SEL_DEPT);
        // this.storage.remove(Constants.c_OP_SEL_PROC);
        // this.storage.remove(Constants.c_OP_SEL_MACH);
        this.loadingCtrl.create({
            duration: this.duration
        }).then(function (a) {
            a.present();
        });
        this.service.callWebService(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].k_LOGIN, this.loginModel, function (res) {
            if (res && res.status_code && res.status_code == 0 /* Success */) {
                _this.storage.set(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_ACCESS_TOKEN, res.accesstoken);
                if (_this.isRemembered == true) {
                    _this.storage.set(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_LG_REMEMBER_ME, JSON.stringify(_this.loginModel));
                }
                else {
                    _this.storage.set(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_LG_REMEMBER_ME, null);
                }
                if (_this.navCtrl.navigateRoot('/operator')) {
                    _this.duration = 100;
                    _this.loadingCtrl.dismiss();
                    _this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_SEL_DEPT);
                    _this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_SEL_PROC);
                    _this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_SEL_MACH);
                    _this.storage.remove(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_OP_MACHINE_LIST);
                }
                ;
            }
            else {
                _this.duration = 100;
                _this.loadingCtrl.dismiss();
            }
            // this.service.dismissLoading(Constants.k_LOGIN).then(()=> {
            //   console.log('apa apa apa');
            // });
        });
    };
    LoginPage.prototype.onLogin01112Clicked = function () {
        // // this.presentLoading()
        var _this = this;
        // this.service.callWebService(Constants.k_LOGIN, new LoginModel('01112', 'Mzsp32kz'), (res) => {
        //   if (res.status_code == StatusCode.Success) {
        //     this.storage.set(Constants.c_ACCESS_TOKEN, res.accesstoken)
        //     this.navCtrl.navigateRoot('/operator');
        //   }
        //   // this.dismissLoading();
        // });
        // var request: DownloadRequest = {
        //   uri: "http://www.kabinet.gov.my/bkpp/pdf/hari_kelepasan_am/hka_2020.pdf",
        //   title: 'My_Download_Test',
        //   description: '',
        //   mimeType: '',
        //   visibleInDownloadsUi: true,
        //   notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
        //   destinationInExternalFilesDir: {
        //     dirType: 'Downloads',
        //     subPath: 'Test_01112.csv'
        //   }
        // };
        // this.downloader.download(request)
        //   .then((location: string) => console.log('File downloaded at:' + location))
        //   .catch((error: any) => config.error(error));
        // this.service.callWebService(Constants.k_POST_EMAIL, new EmailModel(WSTypeCode.WIP), (res) => {
        // console.log("ressssss email done: ", res);
        // let arr = JSON.parse(res.data);
        // let filepath = arr[0];
        // let fullpath = filepath.filepath
        // console.log('fullpath: ', fullpath);
        // window.open(fullpath, '_system');
        // window.open(filepath.filepath, '_system');
        //   let csv = this.papa.unparse({
        //     fields: Object.keys(item[0]),
        //     data: item
        //   });
        //   if (this.service.isDesktop()) {
        //     console.log('Dummy implementation for Desktop download purpose');
        //     // Dummy implementation for Desktop download purpose
        //     var blob = new Blob([csv]);
        //     var a = window.document.createElement('a');
        //     a.href = window.URL.createObjectURL(blob);
        //     a.download = 'newdata.csv';
        //     document.body.appendChild(a);
        //     a.click();
        //     document.body.removeChild(a);
        //   } else {
        // console.log('cordovacordovacordova');
        // this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, { replace: true }).then(res => {
        //   this.socialSharing.share(null, null, res.nativeURL, null).then(e => {
        //     // Success
        //   }).catch(e => {
        //     console.log('Share failed:', e)
        //   });
        // }, err => {
        //   console.log('Error: ', err);
        // });
        //   }
        // });
        this.storage.get(_data_model_constant_model__WEBPACK_IMPORTED_MODULE_6__["Constants"].c_LG_REMEMBER_ME).then(function (loginModel) {
            console.log('isremember: ', _this.isRemembered);
            console.log('loginModel: ', loginModel);
            var objecttt = JSON.parse(loginModel);
            console.log('objecttt: ', objecttt['username'] + ' ' + objecttt['password']);
        });
    };
    LoginPage.prototype.login = function () {
        console.log("login");
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__["AppVersion"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"],
            _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_11__["Downloader"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_15__["Papa"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__["HTTP"]])
    ], LoginPage);
    return LoginPage;
}(_shared_base_page_base_page_page__WEBPACK_IMPORTED_MODULE_10__["BasePagePage"]));



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map
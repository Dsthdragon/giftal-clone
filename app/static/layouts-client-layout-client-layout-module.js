(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-client-layout-client-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card card-profile shadow\">\n                <div class='card-body'>\n                    <h3>\n                        KINDLY INPUT PIN GOTTEN FROM VENDOR TO ACTIVATE ACCOUNT\n                    </h3>\n                    <hr />\n                    <div class=\"row\">\n                        <div class=\"col-12 col-md-8\">\n                            <input type=\"text\" id=\"input-phone\" class=\"form-control form-control-alternative\"\n                                placeholder=\"xxxxxxxxx-xxxx-xxxxx-xxxxxx\" name=\"pin\" [(ngModel)]='pin'>\n                        </div>\n                        <div class=\"col-12 col-md-4\">\n                            <button class=\"btn btn-primary btn-block\" type=\"button\" (click)='activateAccount()'>\n                                ACTIVATE ACCOUNT\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-index/client-index.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-index/client-index.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card card-profile shadow\">\n                <div class='card-header'>\n                    <h5>Your Referral Link</h5>\n                </div>\n                <div class=\"card-body\">\n                    <div *ngIf='referralLink !== \"\"'>\n                        {{ this.referralLink }}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid mt-2\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card card-profile shadow\">\n                <div class='card-body'>\n                    <h1> Welcome To Your Dashboard</h1>\n                    <hr />\n                    <div class=\"table-responsive\">\n                        <table class=\"table align-items-center table-flush\">\n                            <thead class=\"thead-light\">\n                                <tr>\n                                    <th>Royalty Wallet</th>\n                                    <th>Royalty Cash Out</th>\n                                    <th>Referral Wallet</th>\n                                    <th>Referral Cash Out</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        {{ this.clientLayoutService.client.value.royalty_wallet }}\n                                    </td>\n                                    <td>\n                                        <button type=\"button\" class=\"btn btn-primary\">\n                                            Request\n                                        </button>\n                                    </td>\n                                    <td>\n                                        {{ this.clientLayoutService.client.value.referral_wallet }}\n                                    </td>\n                                    <td>\n                                        <button type=\"button\" class=\"btn btn-primary\">\n                                            Request\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-profile/client-profile.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-profile/client-profile.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\" *ngIf=\"user && user.data\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 order-xl-2 mb-5 mb-xl-0\">\n            <div class=\"card card-profile shadow\">\n                <div class=\"text-center\">\n                    <div class=\"\">\n                        <img [src]=\"user.data.image_url\" style=\"width: 180px\" appImgFallback='avatar'\n                            class=\"rounded-circle img-fluid\">\n                    </div>\n                </div>\n                <div class=\"card-header text-center\">\n                    <input type=\"file\" id=\"uploadImage\" style='display:none' #uploadImage (change)=\"uploadImageInput($event)\" />\n                    <a (click)='uploadImage.click()' class=\"btn btn-sm btn-info mr-4\">\n                        <span class=\"fa fa-upload\"></span>\n                    </a>\n                </div>\n                <div class=\"card-body pt-0 pt-md-4\">\n                    <div class=\"text-center\">\n                        <h3>\n                            {{ user.data.first_name }} {{ user.data.last_name }}\n                        </h3>\n                        <div class=\"h5 font-weight-300\">\n                            <i class=\"ni ni-email-83 mr-2\"></i> {{ user.data.email }}\n                        </div>\n                        <div class=\"h5 mt-4\">\n                            <i class=\"ni ni-mobile-button mr-2\"></i> {{ user.data.phone }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-8 order-xl-1\">\n            <div class=\"card bg-secondary shadow\">\n                <div class=\"card-header bg-white border-0\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-8\">\n                            <h3 class=\"mb-0\">My Profile</h3>\n                        </div>\n                        <div class=\"col-4 text-right\">\n                            <a href=\"#!\" class=\"btn btn-sm btn-primary\">DETAILS</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <form>\n                        <h6 class=\"heading-small text-muted mb-4\">USER INFORMATION</h6>\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Email address</label>\n                                        <input type=\"email\" id=\"input-email\"\n                                            class=\"form-control form-control-alternative\"\n                                            placeholder=\"jesse@example.com\" name=\"email\" disabled [(ngModel)]='user.data.email'>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-phone\">Phone</label>\n                                        <input type=\"text\" id=\"input-phone\"\n                                            class=\"form-control form-control-alternative\" placeholder=\"0812312312\"\n                                            name=\"phone\" [(ngModel)]='user.data.phone' >\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-first-name\">First name</label>\n                                        <input type=\"text\" id=\"input-first-name\"\n                                            class=\"form-control form-control-alternative\" placeholder=\"First name\"\n                                            name=\"first_name\" [(ngModel)]='user.data.first_name'>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-last-name\">Last name</label>\n                                        <input type=\"text\" id=\"input-last-name\"\n                                            class=\"form-control form-control-alternative\" placeholder=\"Last name\"\n                                            name=\"last_name\" [(ngModel)]='user.data.last_name'>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-first-name\">Bank</label>\n                                        <input type=\"text\" id=\"input-first-name\"\n                                            class=\"form-control form-control-alternative\" placeholder=\"\"\n                                            name=\"bank\" [(ngModel)]='user.data.bank'>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-last-name\">Account Number</label>\n                                        <input type=\"text\" id=\"input-last-name\"\n                                            class=\"form-control form-control-alternative\" placeholder=\"\"\n                                            name=\"account_number\" [(ngModel)]='user.data.account_number'>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <button class=\"btn btn-block btn-primary\" (click)='updateData()'>\n                                            UPDATE SAVE\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <form id=\"passwordForm\">\n                        <hr class=\"my-4\" />\n                        <!-- Address -->\n                        <h6 class=\"heading-small text-muted mb-4\">SECURITY</h6>\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-password\">\n                                            Password\n                                        </label>\n                                        <input id=\"input-password\" class=\"form-control form-control-alternative\" type=\"password\" name=\"password\" [(ngModel)]='passwords.password' form=\"passwordForm\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-new-password\">\n                                            New Password\n                                        </label>\n                                        <input id=\"input-new-password\" class=\"form-control form-control-alternative\" type=\"password\" name=\"new_password\" [(ngModel)]='passwords.new_password' form=\"passwordForm\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-confirm-password\">\n                                            Confirm Password\n                                        </label>\n                                        <input id=\"input-confirm-password\" class=\"form-control form-control-alternative\" type=\"password\" name=\"confirm_password\" [(ngModel)]='passwords.confirm_password' form=\"passwordForm\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <button class=\"btn btn-block btn-primary\" (click)='updatePassword()'>\n                                            UPDATE PASSWORD\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/layouts/client-layout/client-layout.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/client-layout/client-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: ClientLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLayoutModule", function() { return ClientLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _client_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-layout.component */ "./src/app/layouts/client-layout/client-layout.component.ts");
/* harmony import */ var _pages_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/client-profile/client-profile.component */ "./src/app/layouts/client-layout/pages/client-profile/client-profile.component.ts");
/* harmony import */ var _pages_client_index_client_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client-index/client-index.component */ "./src/app/layouts/client-layout/pages/client-index/client-index.component.ts");
/* harmony import */ var _client_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-layout.routing */ "./src/app/layouts/client-layout/client-layout.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _component_activate_pin_activate_pin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/activate-pin/activate-pin.component */ "./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















var ClientLayoutModule = /** @class */ (function () {
    function ClientLayoutModule() {
    }
    ClientLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _client_layout_component__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutComponent"],
                _pages_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_3__["ClientProfileComponent"],
                _pages_client_index_client_index_component__WEBPACK_IMPORTED_MODULE_4__["ClientIndexComponent"],
                _component_activate_pin_activate_pin_component__WEBPACK_IMPORTED_MODULE_15__["ActivatePinComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_client_layout_routing__WEBPACK_IMPORTED_MODULE_5__["ClientLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__["EditorModule"],
                src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_14__["DirectivesModule"]
            ]
        })
    ], ClientLayoutModule);
    return ClientLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/client-layout/client-layout.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/client-layout/client-layout.routing.ts ***!
  \****************************************************************/
/*! exports provided: ClientLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLayoutRoutes", function() { return ClientLayoutRoutes; });
/* harmony import */ var _pages_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/client-profile/client-profile.component */ "./src/app/layouts/client-layout/pages/client-profile/client-profile.component.ts");
/* harmony import */ var _pages_client_index_client_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/client-index/client-index.component */ "./src/app/layouts/client-layout/pages/client-index/client-index.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ClientLayoutRoutes = [
    // { path: '',      component: IndexComponent },
    { path: 'profile', component: _pages_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_0__["ClientProfileComponent"] },
    { path: '', component: _pages_client_index_client_index_component__WEBPACK_IMPORTED_MODULE_1__["ClientIndexComponent"] },
];


/***/ }),

/***/ "./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2xpZW50LWxheW91dC9jb21wb25lbnQvYWN0aXZhdGUtcGluL2FjdGl2YXRlLXBpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ActivatePinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatePinComponent", function() { return ActivatePinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _client_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-layout.service */ "./src/app/layouts/client-layout/client-layout.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ActivatePinComponent = /** @class */ (function () {
    function ActivatePinComponent(userService, clientLayoutService, toastrService) {
        this.userService = userService;
        this.clientLayoutService = clientLayoutService;
        this.toastrService = toastrService;
    }
    ActivatePinComponent.prototype.ngOnInit = function () {
    };
    ActivatePinComponent.prototype.activateAccount = function () {
        var _this = this;
        this.userService.usePin({ 'pin': this.pin }).subscribe(function (data) {
            if (data.status === 'success') {
                _this.toastrService.success(data.message);
                _this.clientLayoutService.client.next(data.data);
            }
            else {
                _this.toastrService.error(data.message);
            }
        });
    };
    ActivatePinComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    ActivatePinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate-pin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./activate-pin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./activate-pin.component.css */ "./src/app/layouts/client-layout/component/activate-pin/activate-pin.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _client_layout_service__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ActivatePinComponent);
    return ActivatePinComponent;
}());



/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-index/client-index.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-index/client-index.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2xpZW50LWxheW91dC9wYWdlcy9jbGllbnQtaW5kZXgvY2xpZW50LWluZGV4LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-index/client-index.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-index/client-index.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClientIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientIndexComponent", function() { return ClientIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _client_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client-layout.service */ "./src/app/layouts/client-layout/client-layout.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ClientIndexComponent = /** @class */ (function () {
    function ClientIndexComponent(clientLayoutService, userService) {
        this.clientLayoutService = clientLayoutService;
        this.userService = userService;
        this.referralLink = '';
    }
    ClientIndexComponent.prototype.ngOnInit = function () {
        this.referralLink = window.location.origin + "/register?id=" + this.userService.encryptEmail(this.clientLayoutService.client.value.email);
        console.log(this.referralLink);
    };
    ClientIndexComponent.ctorParameters = function () { return [
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    ClientIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-index',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-index/client-index.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-index.component.css */ "./src/app/layouts/client-layout/pages/client-index/client-index.component.css")).default]
        }),
        __metadata("design:paramtypes", [_client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ClientIndexComponent);
    return ClientIndexComponent;
}());



/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-profile/client-profile.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-profile/client-profile.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2xpZW50LWxheW91dC9wYWdlcy9jbGllbnQtcHJvZmlsZS9jbGllbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-profile/client-profile.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-profile/client-profile.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ClientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProfileComponent", function() { return ClientProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _client_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client-layout.service */ "./src/app/layouts/client-layout/client-layout.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ClientProfileComponent = /** @class */ (function () {
    function ClientProfileComponent(userService, clientLayoutService, toastrService) {
        this.userService = userService;
        this.clientLayoutService = clientLayoutService;
        this.toastrService = toastrService;
        this.defaultPasswords = {
            password: '',
            new_password: '',
            confirm_password: ''
        };
        this.passwords = __assign({}, this.defaultPasswords);
    }
    ClientProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientLayoutService.setPageTitle('Profile');
        var current_user = JSON.parse(localStorage.getItem('user'));
        this.userService.getClient(current_user.client.id).subscribe(function (data) { return _this.user = data; });
    };
    ClientProfileComponent.prototype.updatePassword = function () {
        var _this = this;
        this.userService.updateClientPassword(this.user.data.id, this.passwords).subscribe(function (data) {
            if (data.status === 'success') {
                _this.toastrService.success(data.message);
                _this.auth();
            }
            else {
                _this.toastrService.error(data.message);
            }
            _this.passwords = __assign({}, _this.defaultPasswords);
        });
    };
    ClientProfileComponent.prototype.updateData = function () {
        var _this = this;
        this.userService.updateClient(this.user.data.id, this.user.data).subscribe(function (data) {
            if (data.status === 'success') {
                console.log(data);
                _this.user = data;
                _this.toastrService.success(data.message);
                _this.auth();
            }
            else {
                _this.toastrService.error(data.message);
            }
        });
    };
    ClientProfileComponent.prototype.uploadImageInput = function (event) {
        var _this = this;
        var reader = new FileReader();
        var file = event.target.files[0];
        var ext = file.name.split('.');
        ext = ext[ext.length - 1];
        reader.onloadend = function () {
            var img = reader.result.toString().split(',')[1];
            var uploadData = {
                type: ext,
                img: img
            };
            _this.userService.updateClientAvatar(_this.user.data.id, uploadData)
                .subscribe(function (data) {
                if (data.status === 'success') {
                    _this.toastrService.success(data.message);
                    _this.user = data;
                    _this.auth();
                }
                else {
                    _this.toastrService.error(data.message);
                }
            });
        };
        reader.readAsDataURL(file);
    };
    ClientProfileComponent.prototype.auth = function () {
        var _this = this;
        this.userService.auth().subscribe(function (data) {
            if (data.status === 'success') {
                _this.userService.setUser(data.data);
            }
        });
    };
    ClientProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_3__["ClientLayoutService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    ClientProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-profile/client-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-profile.component.css */ "./src/app/layouts/client-layout/pages/client-profile/client-profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _client_layout_service__WEBPACK_IMPORTED_MODULE_3__["ClientLayoutService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ClientProfileComponent);
    return ClientProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-client-layout-client-layout-module.js.map
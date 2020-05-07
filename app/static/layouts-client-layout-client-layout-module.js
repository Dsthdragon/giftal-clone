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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-comments/client-comments.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-comments/client-comments.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"table-responsive\">\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th>Title</th>\n                                <th>Abstract</th>\n                                <th>Comment</th>\n                                <th>View Date</th>\n                                <th>View</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor='let comment of comments | paginate:{itemsPerPage: pageSize, currentPage:p}'>\n                                <td>\n                                    {{ comment.post.title }}\n                                </td>\n                                <td>\n                                    {{ comment.post.abstract | slice: 0:30 }}\n                                    {{ comment.post.abstract.length > 30 ? '...' : '' }}\n                                </td>\n                                <td>\n                                    {{ comment.comment | slice: 0:30 }}\n                                    {{ comment.comment.length > 30 ? '...' : '' }}\n                                </td>\n                                <td>\n                                    {{ comment.created | date: 'mediumDate' }}\n                                </td>\n                                <td>\n                                    <a [routerLink]=\"['/post', comment.post.id, comment.post.title]\"\n                                        class=\"btn btn-primary\">\n                                        view\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"card-footer\">\n                    <app-pagination-controls (pageChange)=\"p=$event\"></app-pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-index/client-index.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-index/client-index.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">Royalty</h5>\n                <span class=\"h2 font-weight-bold mb-0\">\n                    {{ this.clientLayoutService.client.value.royalty_wallet | number  }} pts\n                </span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                  <i class=\"fas fa-chart-bar\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                    Referral\n                </h5>\n                <span class=\"h2 font-weight-bold mb-0\">\n                    <span [innerHTML]='\"&#8358;\"'></span>\n                    {{ this.clientLayoutService.client.value.referral_wallet | number  }}\n                </span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                  <i class=\"fas fa-chart-pie\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                    Referred\n                </h5>\n                <span class=\"h2 font-weight-bold mb-0\">\n                    {{ this.clientLayoutService.client.value.total_referred | number  }}\n                </span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                  <i class=\"fas fa-users\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h5 class=\"card-title text-uppercase text-muted mb-0\">Activity</h5>\n                <span class=\"h2 font-weight-bold mb-0\">\n                    {{ this.clientLayoutService.client.value.total_activity | number  }}\n                </span>\n              </div>\n              <div class=\"col-auto\">\n                <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                  <i class=\"fas fa-percent\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-2\">\n        <div class=\"col-12\">\n            <div class=\"card card-profile shadow\">\n                <div class='card-header'>\n                    <h5>Your Referral Link</h5>\n                </div>\n                <div class=\"card-body\">\n                    <div *ngIf='referralLink !== \"\"'>\n                        {{ this.referralLink }}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid mt-2\">\n    \n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card card-profile shadow\">\n                <div class='card-body'>\n                    <h1> Welcome To Your Dashboard</h1>\n                    <hr />\n                    <div class=\"table-responsive\">\n                        <table class=\"table align-items-center table-flush\">\n                            <thead class=\"thead-light\">\n                                <tr>\n                                    <th>Royalty Wallet</th>\n                                    <th>Royalty Cash Out</th>\n                                    <th>Referral Wallet</th>\n                                    <th>Referral Cash Out</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        {{ this.clientLayoutService.client.value.royalty_wallet | number  }} points\n                                    </td>\n                                    <td>\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content, 'royalty')\">\n                                            Request\n                                        </button>\n                                    </td>\n                                    <td>\n                                        <span [innerHTML]='\"&#8358;\"'></span>\n                                        {{ this.clientLayoutService.client.value.referral_wallet | number  }}\n                                    </td>\n                                    <td>\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content, 'referral')\">\n                                            Request\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Request {{ type | titlecase }} Withdraw</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form id=\"sendRequest\" #sendRequest=\"ngForm\" (ngSubmit)=\"makeRequest()\">\n            <div class=\"form-group\">\n                <Label>Request Amount</Label>\n                <input form=\"sendRequest\" type=\"text\" [(ngModel)]='request.amount' required name=\"amount\" #amount=\"ngModel\"\n                    placeholder=\"1000\" class=\"form-control\">\n                <div [hidden]=\"amount.valid || amount.pristine\" class=\"uk-alert uk-alert-danger\">\n                    Amount is required!\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n        <button class=\"btn btn-outline-primary\" form=\"sendRequest\" type=\"submit\" value=\"SEND REQUEST\"\n            [disabled]=\"!sendRequest.form.valid\">\n            SEND REQUEST\n        </button>\n    </div>\n</ng-template>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-referred/client-referred.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-referred/client-referred.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"table-responsive\">\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">FullName</th>\n                                <!-- <th scope=\"col\">Role</th> -->\n                                <th scope=\"col\">Status</th>\n                                <th scope=\"col\">Registered</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let client of clients | paginate:{itemsPerPage: pageSize, currentPage:p} let i = index \">\n                                <td>\n                                    {{ client.last_name }} {{ client.first_name }}\n                                </td>\n                                <!-- \n                                    <td>\n                                        {{ admin.admin_role.title }}\n                                    </td>\n                                -->\n                                <td>\n                                    <span *ngIf='client.user.active && !client.user.blocked'>\n                                        Active\n                                    </span>\n                                    <span *ngIf='!client.user.active && !client.user.blocked'>\n                                        Pending\n                                    </span>\n                                    <span *ngIf='client.user.blocked'>\n                                        Blocked\n                                    </span>\n                                </td>\n                                <td>\n                                    {{ client.created | date : 'mediumDate' }}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <app-pagination-controls (pageChange)=\"p=$event\"></app-pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-requests/client-requests.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-requests/client-requests.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"table-responsive\">\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">Amount</th>\n                                <th scope=\"col\">Wallet</th>\n                                <th scope=\"col\">Paid</th>\n                                <th scope=\"col\">Confirmed</th>\n                                <th scope=\"col\">Date</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr\n                                *ngFor=\"let request of requests | paginate:{itemsPerPage: pageSize, currentPage:p} let i = index \">\n                                <td>\n                                    <span [innerHTML]='\"&#8358;\"'></span>\n                                    {{ request.amount | number }}\n                                </td>\n                                <td>\n\n                                    {{ request.type | titlecase }}\n                                </td>\n                                <td>\n                                    <span class=\"badge {{ request.paid ? 'badge-success': 'badge-warning' }}\">\n                                        {{ request.paid ? 'Paid': 'Pending' }}\n                                    </span>\n                                </td>\n                                <td>\n                                    <ng-container *ngIf='request.paid else notPaid'>\n                                        <ng-container *ngIf='request.confirmed else notConfirmed'>\n                                            \n                                        <span class=\"badge badge-success\">\n                                            Confirmed\n                                        </span>\n                                        </ng-container>\n                                        <ng-template #notConfirmed>\n                                            <button class=\"btn btn-primary\" type='button' (click)='updateRequest(request.id, i)'>\n                                                Confirm\n                                            </button>\n                                        </ng-template>\n                                    </ng-container>\n                                    <ng-template #notPaid>\n                                        <span class=\"badge badge-warning\">\n                                            Pending\n                                        </span>\n                                    </ng-template>\n                                </td>\n                                <td>\n                                    {{ request.created | date : 'mediumDate' }}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <app-pagination-controls (pageChange)=\"p=$event\"></app-pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-views/client-views.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-views/client-views.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card shadow\">\n                <div class=\"table-responsive\">\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th>Title</th>\n                                <th>Abstract</th>\n                                <th>View Date</th>\n                                <th>View</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor='let view of views | paginate:{itemsPerPage: pageSize, currentPage:p}'>\n                                <td>\n                                    {{ view.post.title }}\n                                </td>\n                                <td>\n                                    {{ view.post.abstract | slice: 0:30 }}\n                                    {{ view.post.abstract.length > 30 ? '...' : '' }}\n                                </td>\n                                <td>\n                                    {{ view.created | date: 'mediumDate' }}\n                                </td>\n                                <td>\n                                    <a [routerLink]=\"['/post', view.post.id, view.post.title]\" class=\"btn btn-primary\">\n                                        view\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <app-pagination-controls (pageChange)=\"p=$event\"></app-pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

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
/* harmony import */ var _pages_client_views_client_views_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/client-views/client-views.component */ "./src/app/layouts/client-layout/pages/client-views/client-views.component.ts");
/* harmony import */ var _pages_client_comments_client_comments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/client-comments/client-comments.component */ "./src/app/layouts/client-layout/pages/client-comments/client-comments.component.ts");
/* harmony import */ var _pages_client_referred_client_referred_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/client-referred/client-referred.component */ "./src/app/layouts/client-layout/pages/client-referred/client-referred.component.ts");
/* harmony import */ var _pages_client_requests_client_requests_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/client-requests/client-requests.component */ "./src/app/layouts/client-layout/pages/client-requests/client-requests.component.ts");
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
                _component_activate_pin_activate_pin_component__WEBPACK_IMPORTED_MODULE_15__["ActivatePinComponent"],
                _pages_client_views_client_views_component__WEBPACK_IMPORTED_MODULE_16__["ClientViewsComponent"],
                _pages_client_comments_client_comments_component__WEBPACK_IMPORTED_MODULE_17__["ClientCommentsComponent"],
                _pages_client_referred_client_referred_component__WEBPACK_IMPORTED_MODULE_18__["ClientReferredComponent"],
                _pages_client_requests_client_requests_component__WEBPACK_IMPORTED_MODULE_19__["ClientRequestsComponent"]
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
/* harmony import */ var _pages_client_views_client_views_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/client-views/client-views.component */ "./src/app/layouts/client-layout/pages/client-views/client-views.component.ts");
/* harmony import */ var _pages_client_comments_client_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/client-comments/client-comments.component */ "./src/app/layouts/client-layout/pages/client-comments/client-comments.component.ts");
/* harmony import */ var _pages_client_referred_client_referred_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client-referred/client-referred.component */ "./src/app/layouts/client-layout/pages/client-referred/client-referred.component.ts");
/* harmony import */ var _pages_client_requests_client_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/client-requests/client-requests.component */ "./src/app/layouts/client-layout/pages/client-requests/client-requests.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ClientLayoutRoutes = [
    // { path: '',      component: IndexComponent },
    { path: 'profile', component: _pages_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_0__["ClientProfileComponent"] },
    { path: 'views', component: _pages_client_views_client_views_component__WEBPACK_IMPORTED_MODULE_2__["ClientViewsComponent"] },
    { path: 'comments', component: _pages_client_comments_client_comments_component__WEBPACK_IMPORTED_MODULE_3__["ClientCommentsComponent"] },
    { path: 'referred', component: _pages_client_referred_client_referred_component__WEBPACK_IMPORTED_MODULE_4__["ClientReferredComponent"] },
    { path: 'request', component: _pages_client_requests_client_requests_component__WEBPACK_IMPORTED_MODULE_5__["ClientRequestsComponent"] },
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

/***/ "./src/app/layouts/client-layout/pages/client-comments/client-comments.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-comments/client-comments.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2xpZW50LWxheW91dC9wYWdlcy9jbGllbnQtY29tbWVudHMvY2xpZW50LWNvbW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-comments/client-comments.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-comments/client-comments.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ClientCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCommentsComponent", function() { return ClientCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _client_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client-layout.service */ "./src/app/layouts/client-layout/client-layout.service.ts");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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




var ClientCommentsComponent = /** @class */ (function () {
    function ClientCommentsComponent(clientLayoutService, settingService) {
        var _this = this;
        this.clientLayoutService = clientLayoutService;
        this.settingService = settingService;
        this.comments = [];
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PageSize;
        this.settingService.getClientComments(this.clientLayoutService.client.value.id)
            .subscribe(function (data) { return _this.comments = data.data; });
    }
    ClientCommentsComponent.prototype.ngOnInit = function () {
    };
    ClientCommentsComponent.ctorParameters = function () { return [
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"] }
    ]; };
    ClientCommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-comments',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-comments/client-comments.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-comments.component.css */ "./src/app/layouts/client-layout/pages/client-comments/client-comments.component.css")).default]
        }),
        __metadata("design:paramtypes", [_client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], ClientCommentsComponent);
    return ClientCommentsComponent;
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
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
    function ClientIndexComponent(clientLayoutService, modalService, userService, settingService, toastrService) {
        this.clientLayoutService = clientLayoutService;
        this.modalService = modalService;
        this.userService = userService;
        this.settingService = settingService;
        this.toastrService = toastrService;
        this.referralLink = '';
        this.request = {
            amount: 0
        };
        this.type = '';
    }
    ClientIndexComponent.prototype.ngOnInit = function () {
        this.referralLink = window.location.origin + "/register?id=" + this.userService.encryptEmail(this.clientLayoutService.client.value.email);
        console.log(this.referralLink);
    };
    ClientIndexComponent.prototype.open = function (content, type) {
        this.type = type;
        this.request.amount = 0;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    ClientIndexComponent.prototype.makeRequest = function () {
        var _this = this;
        this.modalService.dismissAll();
        this.settingService.makeRequest(this.request, this.type).subscribe(function (data) {
            if (data.status === 'success') {
                _this.userService.getClient(_this.userService.current.value.id).subscribe(function (clientData) {
                    _this.clientLayoutService.client.next(clientData.data);
                });
                _this.toastrService.success(data.message);
            }
            else {
                _this.toastrService.error(data.message);
            }
        });
    };
    ClientIndexComponent.ctorParameters = function () { return [
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    ClientIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-index',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-index/client-index.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-index.component.css */ "./src/app/layouts/client-layout/pages/client-index/client-index.component.css")).default]
        }),
        __metadata("design:paramtypes", [_client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
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



/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-referred/client-referred.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-referred/client-referred.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2xpZW50LWxheW91dC9wYWdlcy9jbGllbnQtcmVmZXJyZWQvY2xpZW50LXJlZmVycmVkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-referred/client-referred.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-referred/client-referred.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ClientReferredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientReferredComponent", function() { return ClientReferredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _client_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client-layout.service */ "./src/app/layouts/client-layout/client-layout.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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




var ClientReferredComponent = /** @class */ (function () {
    function ClientReferredComponent(clientLayoutService, userService) {
        var _this = this;
        this.clientLayoutService = clientLayoutService;
        this.userService = userService;
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PageSize;
        this.clients = [];
        this.userService.getReferredClients(this.clientLayoutService.client.value.id).subscribe(function (data) { return _this.clients = data.data; });
    }
    ClientReferredComponent.prototype.ngOnInit = function () {
        this.clientLayoutService.setPageTitle('Referred User');
    };
    ClientReferredComponent.ctorParameters = function () { return [
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    ClientReferredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-referred',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-referred.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-referred/client-referred.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-referred.component.css */ "./src/app/layouts/client-layout/pages/client-referred/client-referred.component.css")).default]
        }),
        __metadata("design:paramtypes", [_client_layout_service__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ClientReferredComponent);
    return ClientReferredComponent;
}());



/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-requests/client-requests.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-requests/client-requests.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2xpZW50LWxheW91dC9wYWdlcy9jbGllbnQtcmVxdWVzdHMvY2xpZW50LXJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-requests/client-requests.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-requests/client-requests.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ClientRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRequestsComponent", function() { return ClientRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var _client_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-layout.service */ "./src/app/layouts/client-layout/client-layout.service.ts");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
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





var ClientRequestsComponent = /** @class */ (function () {
    function ClientRequestsComponent(clientLayoutService, settingService, toastrService) {
        var _this = this;
        this.clientLayoutService = clientLayoutService;
        this.settingService = settingService;
        this.toastrService = toastrService;
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].PageSize;
        this.requests = [];
        this.settingService.getClientRequests(this.clientLayoutService.client.value.id).subscribe(function (data) {
            _this.requests = data.data;
        });
    }
    ClientRequestsComponent.prototype.ngOnInit = function () {
        this.clientLayoutService.setPageTitle('WithDrawal Requests');
    };
    ClientRequestsComponent.prototype.updateRequest = function (id, index) {
        var _this = this;
        index = index + this.pageSize * (this.p - 1);
        this.settingService.updateRequest(id, 'confirm').subscribe(function (data) {
            if (data.status === 'success') {
                _this.requests[index] = data.data;
                _this.toastrService.success(data.message);
            }
            else {
                _this.toastrService.error(data.message);
            }
        });
    };
    ClientRequestsComponent.ctorParameters = function () { return [
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutService"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    ClientRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-requests',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-requests/client-requests.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-requests.component.css */ "./src/app/layouts/client-layout/pages/client-requests/client-requests.component.css")).default]
        }),
        __metadata("design:paramtypes", [_client_layout_service__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutService"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ClientRequestsComponent);
    return ClientRequestsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-views/client-views.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-views/client-views.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2xpZW50LWxheW91dC9wYWdlcy9jbGllbnQtdmlld3MvY2xpZW50LXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/client-layout/pages/client-views/client-views.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/client-layout/pages/client-views/client-views.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClientViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientViewsComponent", function() { return ClientViewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _client_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-layout.service */ "./src/app/layouts/client-layout/client-layout.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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




var ClientViewsComponent = /** @class */ (function () {
    function ClientViewsComponent(clientLayoutService, settingService) {
        var _this = this;
        this.clientLayoutService = clientLayoutService;
        this.settingService = settingService;
        this.views = [];
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PageSize;
        this.settingService.getClientPostViews(this.clientLayoutService.client.value.id)
            .subscribe(function (data) { return _this.views = data.data; });
    }
    ClientViewsComponent.prototype.ngOnInit = function () {
    };
    ClientViewsComponent.ctorParameters = function () { return [
        { type: _client_layout_service__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutService"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"] }
    ]; };
    ClientViewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-views',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-views.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/client-layout/pages/client-views/client-views.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-views.component.css */ "./src/app/layouts/client-layout/pages/client-views/client-views.component.css")).default]
        }),
        __metadata("design:paramtypes", [_client_layout_service__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutService"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"]])
    ], ClientViewsComponent);
    return ClientViewsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-client-layout-client-layout-module.js.map
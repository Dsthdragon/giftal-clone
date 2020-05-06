(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/component/post-box/post-box.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/component/post-box/post-box.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-5\">\n    <img class=\"card-img-top\" src=\"{{ post.image_url }}\" appImgFallback='post' [alt]=\"post.title\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <a class=\"badge badge-primary\" [routerLink]='[\"/category\", post.category.id, post.category.title]'>\n                    {{ post.category.title }}\n                </a>\n                <a class=\"badge badge-primary ml-3\" *ngIf='post.is_sponsored' >\n                    SPONSORED\n                </a>\n            </div>\n            <div class=\"col-6 text-right\">\n                <span>\n                    {{ post.created | date: 'shortDate' }}\n                </span>\n            </div>\n        </div>\n        <hr >\n        <h5 class=\"card-title\">\n            {{ post.title }}\n        </h5>\n        <p class=\"card-text\">\n            {{ post.abstract }}\n        </p>\n        <div class=\"text-right\">\n            <a [routerLink]='[\"/post\", post.id, post.title]' class=\"btn btn-primary\">VIEW</a>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/category/category.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/category/category.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-md-6\">\n            <app-post-box *ngFor=\"let post of posts | paginate:{itemsPerPage: pageSize, currentPage:p}\" [post]='post'></app-post-box>\n            <div class=\"card\">\n                <div class=\"card-footer py-1\">\n                    <app-simple-pagination-controls (pageChange)=\"p=$event\"></app-simple-pagination-controls>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/home/home.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/home/home.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-md-6\">\n            <app-post-box *ngFor=\"let post of posts | paginate:{itemsPerPage: pageSize, currentPage:p}\" [post]='post'></app-post-box>\n            <div class=\"card\">\n                <div class=\"card-footer py-1\">\n                    <app-simple-pagination-controls (pageChange)=\"p=$event\"></app-simple-pagination-controls>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row justify-content-center\">\n        <div>\n            <div class=\"card shadow\">\n                <div class=\"card-header\">\n                    <div>\n                        <label class=\"form-control-label\">\n                            Point To Naira Rate (\n                            {{ settings.point_rate * 10000 | number }} Points =\n                            <span [innerHTML]='\"&#8358;\"'></span> {{ 10000 | number }}\n                            )\n                        </label>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">Sign up bonus</th>\n                                <td scope=\"col\">{{settings.sign_up_bonus | number  }} Points</td>\n                                <th scope=\"col\">Reading Post</th>\n                                <td scope=\"col\">{{settings.read_news | number  }} Points</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"col\">Valid Comment</th>\n                                <td scope=\"col\">{{settings.comment | number  }} Points</td>\n                                <th scope=\"col\">Daily Login Bonus</th>\n                                <td scope=\"col\"> {{settings.login_bonus | number  }} Points</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"col\">Confirm Payment Bonus</th>\n                                <td scope=\"col\">{{settings.testimonies_bonus | number  }} Points</td>\n                                <td scope=\"col\"></td>\n                                <td scope=\"col\"></td>\n                            </tr>\n                            <tr>\n                                <th scope=\"col\">Referral Bonus </th>\n                                <td scope=\"col\"><span [innerHTML]='\"&#8358;\"'></span>\n                                    {{settings.referral_bonus | number  }}</td>\n                                <th scope=\"col\">Sign Up Fee</th>\n                                <td scope=\"col\"><span [innerHTML]='\"&#8358;\"'></span>\n                                    {{settings.sign_up_fee | number  }}</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"col\">Minimun Withdrawal Limit</th>\n                                <td scope=\"col\"><span [innerHTML]='\"&#8358;\"'></span>\n                                    {{settings.min_withdrawal_limit | number  }}</td>\n                                <th scope=\"col\">Maximun Withdrawal Limit </th>\n                                <td scope=\"col\"><span [innerHTML]='\"&#8358;\"'></span>\n                                    {{settings.max_withdrawal_limit | number  }}</td>\n                            </tr>\n                        </thead>\n                    </table>\n                    <!-- <div class=\"row\"> -->\n                        <!-- <div class=\"col-lg-6\">\n                            <div>\n                                <label class=\"form-control-label\">\n                                    Sharing news on site\n                                    ( {{settings.share_news | number  }} Points)\n                                </label>\n                            </div>\n                        </div> -->\n                        <!-- <div class=\"col-lg-6\">\n                            <div>\n                                <label class=\"form-control-label\">\n                                    Share Daily Sponsored Posted\n                                    ( {{settings.share_daily_sponsored | number  }} Points)\n                                </label>\n                            </div>\n                        </div> -->\n                        <!-- <div class=\"col-lg-6\">\n                            <div>\n                                <label class=\"form-control-label\">\n                                    Share Daily Compaign Advert\n                                    ( {{settings.share_daily_advert | number  }} Points)\n                                </label>\n                            </div>\n                        </div> -->\n                    <!-- </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/login/login.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/login/login.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-3\">\n            <h3>Sign in As</h3>\n            <div class='row py-lg-2'>\n              <div class=\"custom-control custom-control-alternative custom-radio mb-3 col-4\">\n                <input value=\"client\" name=\"type\" [(ngModel)]='loginForm.type' class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\n                <label class=\"custom-control-label\" for=\"customRadio1\">Client</label>\n              </div>\n              <div class=\"custom-control custom-control-alternative custom-radio mb-3 col-4\">\n                <input value=\"vendor\" name=\"type\" [(ngModel)]='loginForm.type' class=\"custom-control-input\" id=\"customRadio2\" type=\"radio\">\n                <label class=\"custom-control-label\" for=\"customRadio2\">Vendor</label>\n              </div>\n              <div class=\"custom-control custom-control-alternative custom-radio mb-3 col-4\">\n                <input value=\"admin\" name=\"type\" [(ngModel)]='loginForm.type' class=\"custom-control-input\" id=\"customRadio3\" type=\"radio\">\n                <label class=\"custom-control-label\" for=\"customRadio3\">Admin</label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-2\">\n          <form role=\"form\">\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"ni ni-email-83\"></i>\n                  </span>\n                </div>\n                <input class=\"form-control\" name='email' [(ngModel)]='loginForm.email' placeholder=\"Email\" type=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"ni ni-lock-circle-open\"></i>\n                  </span>\n                </div>\n                <input class=\"form-control\" name='password' [(ngModel)]='loginForm.password' placeholder=\"Password\" type=\"password\">\n              </div>\n            </div>\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\n              <input name='remember' [(ngModel)]='loginForm.remember' class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                <span class=\"text-muted\">Remember me</span>\n              </label>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-primary my-4\" (click)='login()'>Sign in</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6\">\n          <!-- <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a> -->\n        </div>\n        <div class=\"col-6 text-right\">\n          <a  routerLink='/register' class=\"text-light\"><small>Create new account</small></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/payroll/payroll.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/payroll/payroll.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row justify-content-center\">\n        <div>\n            \n            <div class=\"card shadow\">\n                <div class=\"table-responsive\">\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">Amount</th>\n                                <th scope=\"col\">Client</th>\n                                <th scope=\"col\">Bank</th>\n                                <th scope=\"col\">Confirmed</th>\n                                <th scope=\"col\">Date</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr\n                                *ngFor=\"let request of requests | paginate:{itemsPerPage: pageSize, currentPage:p} let i = index \">\n                                <td>\n                                    <span [innerHTML]='\"&#8358;\"'></span>\n                                    {{ request.amount | number }}\n                                </td>\n                                <td>\n                                    {{ request.client.first_name }}\n                                    {{ request.client.last_name }}\n                                </td>\n                                <td>\n                                    {{ request.client.bank }}\n                                </td>\n                                <td>\n                                    <span class=\"badge {{ request.confirmed ? 'badge-success': 'badge-warning' }}\">\n                                        {{ request.confirmed ? 'Confirmed': 'Pending' }}\n                                    </span>\n                                </td>\n                                <td>\n                                    {{ request.created | date : 'mediumDate' }}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <app-pagination-controls (pageChange)=\"p=$event\"></app-pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/post/post.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/post/post.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row justify-content-center\" *ngIf=\"post\">\n        <div class=\"col-12 col-md-7\">\n\n            <div class=\"card bg-secondary shadow border-0\">\n                <div class=\"card-body px-lg-5 py-lg-5\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-12 col-md-8 col-lg-6\">\n                            <img [src]=\"post.image_url\" class=\"img-fluid\">\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"row\">\n                        <div class=\"col-12  text-right\">\n                            <label class=\"badge badge-primary mr-5\" *ngIf='post.is_sponsored'>SPONSORED</label>\n                            <a [routerLink]='[\"/category\", post.category.id, post.category.title ]'\n                                class=\"badge badge-default\">{{ post.category.title}}</a>\n                        </div>\n                    </div>\n                    <div>\n                        <h2>\n                            {{ post.title }}\n                        </h2>\n                        <h5>\n                            <span class=\"fa fa-clock\"></span>\n                            {{ post.created | date : 'mediumDate' }}\n                        </h5>\n                    </div>\n                    <div [innerHtml]='post.content'>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-12 col-md-4\">\n            <div class=\"card bg-secondary\">\n\n                <div class=\"card-header\" *ngIf='userService.type.value === \"client\" else notLoggedIN'>\n                    <form id=\"postCommentForm\" #postCommentForm=\"ngForm\" (ngSubmit)=\"postComment()\">\n\n                        <div class=\"form-group\">\n                            <textarea form=\"postCommentForm\" [(ngModel)]='new_comment.comment' name=\"comment\"\n                                placeholder=\"Say SOmething\" class=\"form-control\" #comment=\"ngModel\"></textarea>\n\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary btn-block\" form=\"postCommentForm\" type=\"submit\"\n                                value=\"POST COMMENT\" [disabled]=\"!postCommentForm.form.valid\">\n                                POST COMMENT\n                            </button>\n                        </div>\n                    </form>\n                </div>\n                <ng-template #notLoggedIN>\n                    <div class=\"card-header\">\n                        <h3>LOGIN TO COMMENT</h3>\n                    </div>\n                </ng-template>\n                <div class=\"card-body\">\n                    <div *ngFor=\"let comment of comments | paginate:{itemsPerPage: pageSize, currentPage:p}\">\n                        <div>\n                            <div class=\"media align-items-center\">\n                                <span class=\"avatar avatar-sm rounded-circle\">\n                                    <img [src]=\"comment.client.image_url\" appImgFallback=\"avatar\">\n                                </span>\n                                <div class=\"media-body ml-2 d-none d-lg-block clearfix\">\n                                    <span class=\"mb-0 text-sm text-primary font-weight-bold\">\n                                        {{ comment.client.first_name }} {{ comment.client.last_name }}\n                                    </span><br />\n                                    <span class=\"text-sm  font-weight-light\">\n                                        {{ comment.created | date: \"short\" }}\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"pt-2\">\n                                {{ comment.comment }}\n                            </div>\n                        </div>\n                        <hr />\n                    </div>\n                </div>\n                <div class=\"card-footer py-1\" *ngIf='comments.length > 0'>\n                    <app-pagination-controls (pageChange)=\"p=$event\"></app-pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/register/register.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/register/register.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n    <!-- Table -->\n    <div class=\"row justify-content-center\">\n        <div class=\"col-lg-6 col-md-8\">\n            <div class=\"card bg-secondary shadow border-0\">\n                <div class=\"card-body px-lg-5 py-lg-5\">\n                    <div class=\"text-center text-muted mb-4\">\n                        <small>Sign up with credentials</small>\n                    </div>\n                    <div *ngIf='referral'>\n                        <h4>\n                            Referred By {{ referral.first_name }}\n                        </h4>\n                        <hr />\n                    </div>\n                    <form role=\"form\" id=\"registerClient\" #registerClient=\"ngForm\" (ngSubmit)=\"register()\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-alternative mb-3\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"ni ni-hat-3\"></i>\n                                    </span>\n                                </div>\n                                <input form=\"registerClient\" [(ngModel)]='client.first_name' class=\"form-control\" name=\"first_name\" placeholder=\"First Name\" type=\"text\" #first_name='ngModel' />\n                                <div [hidden]=\"first_name.valid || first_name.pristine\" class=\"uk-alert uk-alert-danger\">\n                                    First Name is required!\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-alternative mb-3\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"ni ni-hat-3\"></i>\n                                    </span>\n                                </div>\n                                <input form=\"registerClient\" [(ngModel)]='client.last_name' class=\"form-control\" name=\"last_name\" placeholder=\"Last Name\" type=\"text\" #last_name='ngModel' />\n                                <div [hidden]=\"last_name.valid || last_name.pristine\" class=\"uk-alert uk-alert-danger\">\n                                    Last Name is required!\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-alternative mb-3\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"ni ni-email-83\"></i>\n                                    </span>\n                                </div>\n                                <input form=\"registerClient\" [(ngModel)]='client.email'  class=\"form-control\" name=\"email\" placeholder=\"Email\" type=\"email\" #email='ngModel' />\n                                <div [hidden]=\"email.valid || email.pristine\" class=\"uk-alert uk-alert-danger\">\n                                    Email is required!\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-alternative\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"ni ni-lock-circle-open\"></i>\n                                    </span>\n                                </div>\n                                <input form=\"registerClient\" [(ngModel)]='client.password' class=\"form-control\" name=\"password\" placeholder=\"Password\" type=\"password\" #password='ngModel' />\n                                <div [hidden]=\"password.valid || password.pristine\" class=\"uk-alert uk-alert-danger\">\n                                    Password is required!\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row my-4\">\n                            <div class=\"col-12\">\n                                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                                    <input form=\"registerClient\" name=\"agreed\" [(ngModel)]='client.agreed' class=\"custom-control-input\" required id=\"customCheckRegister\"\n                                        type=\"checkbox\">\n                                    <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                                        <span class=\"text-muted\">\n                                            I agree with the <a href=\"#!\">Privacy Policy</a>\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"text-center\">\n                            <button form=\"registerClient\" type=\"submit\" class=\"btn btn-primary mt-4\" [disabled]=\"!registerClient.form.valid\">Create account</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/vendors/vendors.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/vendors/vendors.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n    <!-- Table -->\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-10\">\n            <div class=\"card bg-secondary shadow border-0\">\n                <div class=\"card-body px-lg-5 py-lg-5 row\" *ngIf='vendors && vendors.data'>\n                    <div class=\"col-12 col-md-3\" *ngFor='let vendor of vendors.data'>\n                        <div class=\"text-center\">\n                            <div class=\"\">\n                                <img [src]=\"vendor.image_url\" style=\"width: 180px\" appImgFallback='avatar'\n                                    class=\"rounded-circle img-fluid\">\n                            </div>\n                        </div>\n                        <div class=\"card-body pt-0 pt-md-4\">\n                            <div class=\"text-center\">\n                                <h3>\n                                    {{ vendor.first_name }} {{ vendor.last_name }}\n                                </h3>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"open(content2, vendor)\">\n                                    VIEW DETAIL\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #content2 let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ vendor.first_name }} {{ vendor.last_name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"h5 font-weight-300\">\n            <i class=\"ni ni-email-83 mr-2\"></i> {{ vendor.email }}\n        </div>\n        <div class=\"h5 mt-4\">\n            <i class=\"ni ni-mobile-button mr-2\"></i> {{ vendor.phone }}\n        </div>\n        <h3>Bank Details</h3>\n        <div class=\"h5 mt-4\">\n            <i class=\"fa fa-piggy-bank mr-2\"></i> {{ vendor.bank }}\n        </div>\n        <div class=\"h5 mt-4\">\n            <i class=\"fa fa-piggy-bank mr-2\"></i> {{ vendor.account_number }}\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.PageSize = 5;
    Constants.PostPerPage = 6;
    Constants.CommentPerPage = 6;
    return Constants;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/layouts/auth-layout/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/layouts/auth-layout/pages/register/register.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/layouts/auth-layout/pages/home/home.component.ts");
/* harmony import */ var _pages_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/vendors/vendors.component */ "./src/app/layouts/auth-layout/pages/vendors/vendors.component.ts");
/* harmony import */ var _pages_post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/post/post.component */ "./src/app/layouts/auth-layout/pages/post/post.component.ts");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/category/category.component */ "./src/app/layouts/auth-layout/pages/category/category.component.ts");
/* harmony import */ var _component_post_box_post_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/post-box/post-box.component */ "./src/app/layouts/auth-layout/component/post-box/post-box.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/payroll/payroll.component */ "./src/app/layouts/auth-layout/pages/payroll/payroll.component.ts");
/* harmony import */ var _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.component */ "./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

















var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_14__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pages_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_9__["VendorsComponent"],
                _pages_post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
                _pages_category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
                _component_post_box_post_box_component__WEBPACK_IMPORTED_MODULE_12__["PostBoxComponent"],
                _pages_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_15__["PayrollComponent"],
                _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_16__["HowItWorksComponent"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/layouts/auth-layout/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/layouts/auth-layout/pages/register/register.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/layouts/auth-layout/pages/home/home.component.ts");
/* harmony import */ var _pages_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/vendors/vendors.component */ "./src/app/layouts/auth-layout/pages/vendors/vendors.component.ts");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/category/category.component */ "./src/app/layouts/auth-layout/pages/category/category.component.ts");
/* harmony import */ var _pages_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/post/post.component */ "./src/app/layouts/auth-layout/pages/post/post.component.ts");
/* harmony import */ var _pages_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/payroll/payroll.component */ "./src/app/layouts/auth-layout/pages/payroll/payroll.component.ts");
/* harmony import */ var _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.component */ "./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var AuthLayoutRoutes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'register/:id', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'category/:id/:title', component: _pages_category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"] },
    { path: 'post/:id/:title', component: _pages_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'vendors', component: _pages_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_3__["VendorsComponent"] },
    { path: 'payroll', component: _pages_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_6__["PayrollComponent"] },
    { path: 'how-it-works', component: _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_7__["HowItWorksComponent"] },
];


/***/ }),

/***/ "./src/app/layouts/auth-layout/component/post-box/post-box.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/component/post-box/post-box.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvY29tcG9uZW50L3Bvc3QtYm94L3Bvc3QtYm94LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/component/post-box/post-box.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/component/post-box/post-box.component.ts ***!
  \******************************************************************************/
/*! exports provided: PostBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBoxComponent", function() { return PostBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
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

var PostBoxComponent = /** @class */ (function () {
    function PostBoxComponent() {
    }
    PostBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostBoxComponent.prototype, "post", void 0);
    PostBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-box',
            template: __importDefault(__webpack_require__(/*! raw-loader!./post-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/component/post-box/post-box.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./post-box.component.css */ "./src/app/layouts/auth-layout/component/post-box/post-box.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PostBoxComponent);
    return PostBoxComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/category/category.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/category/category.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/category/category.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/category/category.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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







var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(route, userService, settingService, toastrService, authLayoutComponent) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.settingService = settingService;
        this.toastrService = toastrService;
        this.authLayoutComponent = authLayoutComponent;
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].PostPerPage;
        this.route.params.subscribe(function (params) {
            _this.settingService.getCategery(params.id).subscribe(function (data) {
                _this.category = data.data;
                setTimeout(function () {
                    return _this.authLayoutComponent.setPageTitle(_this.category.title, _this.category.description);
                }, 100);
            });
            _this.settingService.getCategeryPosts(params.id).subscribe(function (data) {
                _this.posts = data.data;
            });
        });
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"] }
    ]; };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __importDefault(__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/category/category.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./category.component.css */ "./src/app/layouts/auth-layout/pages/category/category.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/home/home.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/home/home.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/home/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/home/home.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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







var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, toastrService, router, authLayoutComponent, settingService) {
        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.authLayoutComponent = authLayoutComponent;
        this.settingService = settingService;
        this.posts = [];
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].PostPerPage;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.authLayoutComponent.setPageTitle('Home', 'Welcome to Our Site');
        }, 100);
        this.getPosts();
    };
    HomeComponent.prototype.getPosts = function () {
        var _this = this;
        this.settingService.getPosts().subscribe(function (data) {
            _this.posts = data.data;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/layouts/auth-layout/pages/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
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



var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent(authLayoutComponent, settingService) {
        var _this = this;
        this.authLayoutComponent = authLayoutComponent;
        this.settingService = settingService;
        this.settings = {};
        this.settingService.getSettings().subscribe(function (data) {
            _this.settings = data.data;
        });
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.authLayoutComponent.setPageTitle('How It Works', 'Learn How To Start Earning With Us');
        }, 100);
    };
    HowItWorksComponent.ctorParameters = function () { return [
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"] }
    ]; };
    HowItWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-it-works',
            template: __importDefault(__webpack_require__(/*! raw-loader!./how-it-works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/layouts/auth-layout/pages/how-it-works/how-it-works.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/login/login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/login/login.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, toastrService, router, authLayoutComponent) {
        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.authLayoutComponent = authLayoutComponent;
        this.loginForm = {
            type: '',
            email: '',
            password: '',
            remember: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.authLayoutComponent.setPageTitle('Login', 'Enter Your Login Details');
        }, 100);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.loginForm).subscribe(function (data) {
            if (data.status === 'success') {
                _this.toastrService.success(data.message);
                _this.router.navigate(["/" + _this.loginForm.type]);
            }
            else {
                _this.toastrService.error(data.message);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/layouts/auth-layout/pages/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/payroll/payroll.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/payroll/payroll.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvcGF5cm9sbC9wYXlyb2xsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/payroll/payroll.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/payroll/payroll.component.ts ***!
  \************************************************************************/
/*! exports provided: PayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function() { return PayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
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




var PayrollComponent = /** @class */ (function () {
    function PayrollComponent(authLayoutComponent, settingService) {
        var _this = this;
        this.authLayoutComponent = authLayoutComponent;
        this.settingService = settingService;
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].PageSize;
        this.requests = [];
        this.settingService.getRequests().subscribe(function (data) {
            _this.requests = data.data;
        });
    }
    PayrollComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.authLayoutComponent.setPageTitle('Payroll', 'Join and Start getting Paid');
        }, 100);
    };
    PayrollComponent.ctorParameters = function () { return [
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"] }
    ]; };
    PayrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll',
            template: __importDefault(__webpack_require__(/*! raw-loader!./payroll.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/payroll/payroll.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./payroll.component.css */ "./src/app/layouts/auth-layout/pages/payroll/payroll.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"]])
    ], PayrollComponent);
    return PayrollComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/post/post.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/post/post.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/post/post.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/post/post.component.ts ***!
  \******************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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







var PostComponent = /** @class */ (function () {
    // posts: any;
    function PostComponent(route, userService, settingService, toastrService, authLayoutComponent) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.settingService = settingService;
        this.toastrService = toastrService;
        this.authLayoutComponent = authLayoutComponent;
        this.new_comment = {
            post_id: 0,
            comment: ''
        };
        this.p = 1;
        this.pageSize = src_app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].CommentPerPage;
        this.comments = [];
        this.route.params.subscribe(function (params) {
            _this.settingService.getPost(params.id).subscribe(function (data) {
                _this.post = data.data;
                setTimeout(function () {
                    return _this.authLayoutComponent.setPageTitle(_this.post.title, _this.post.abstract);
                }, 100);
            });
            _this.settingService.getPostComments(params.id).subscribe(function (data) {
                _this.comments = data.data;
            });
        });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.postComment = function () {
        var _this = this;
        this.new_comment.post_id = this.post.id;
        this.settingService.createComment(this.new_comment).subscribe(function (data) {
            if (data.status === 'success') {
                _this.new_comment = {
                    post_id: 0,
                    comment: ''
                };
                _this.comments.unshift(data.data);
                _this.toastrService.success(data.message);
            }
            else {
                _this.toastrService.error(data.message);
            }
        });
    };
    PostComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"] }
    ]; };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __importDefault(__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/post/post.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./post.component.css */ "./src/app/layouts/auth-layout/pages/post/post.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/register/register.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/register/register.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/register/register.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/register/register.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, toastrService, router, route, authLayoutComponent) {
        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
        this.authLayoutComponent = authLayoutComponent;
        this.client = {
            email: '',
            type: 'client',
            first_name: '',
            last_name: '',
            password: '',
            agreed: '',
            referral_id: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.authLayoutComponent.setPageTitle('Register', 'Kindly Register Your Details To Use The System');
        }, 100);
        this.route.queryParams.subscribe(function (data) {
            if ('id' in data) {
                console.log(data);
                var email = _this.userService.decryptEmail(data.id);
                _this.userService.getClient(email).subscribe(function (userData) {
                    if (userData.status === 'success') {
                        _this.client.referral_id = userData.data.id;
                        _this.referral = userData.data;
                    }
                });
            }
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.createClient(this.client).subscribe(function (data) {
            if (data.status === 'success') {
                _this.toastrService.success(data.message);
                _this.userService.login(_this.client).subscribe(function (loginData) {
                    if (loginData.status === 'success') {
                        _this.toastrService.success(loginData.message);
                        _this.router.navigate(["/" + _this.client.type]);
                    }
                    else {
                        _this.toastrService.error(loginData.message);
                    }
                });
            }
            else {
                _this.toastrService.error(data.message);
            }
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/layouts/auth-layout/pages/register/register.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/vendors/vendors.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/vendors/vendors.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvdmVuZG9ycy92ZW5kb3JzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/vendors/vendors.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/vendors/vendors.component.ts ***!
  \************************************************************************/
/*! exports provided: VendorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsComponent", function() { return VendorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
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






var VendorsComponent = /** @class */ (function () {
    function VendorsComponent(userService, toastrService, router, modalService, authLayoutComponent) {
        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.modalService = modalService;
        this.authLayoutComponent = authLayoutComponent;
    }
    VendorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.authLayoutComponent.setPageTitle('Vendors', 'Contact Vendors');
        }, 100);
        this.getVendors();
    };
    VendorsComponent.prototype.getVendors = function () {
        var _this = this;
        this.userService.getVendors().subscribe(function (data) { return _this.vendors = data; });
    };
    VendorsComponent.prototype.open = function (content, vendor) {
        if (vendor === void 0) { vendor = null; }
        if (vendor !== null) {
            this.vendor = vendor;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    VendorsComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"] }
    ]; };
    VendorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendors',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vendors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/vendors/vendors.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./vendors.component.css */ "./src/app/layouts/auth-layout/pages/vendors/vendors.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"]])
    ], VendorsComponent);
    return VendorsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map
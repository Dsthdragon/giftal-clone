(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comment-embed/fb-comment-embed.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comment-embed/fb-comment-embed.js ***!
  \***************************************************************************************************/
/*! exports provided: FBCommentEmbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBCommentEmbedComponent", function() { return FBCommentEmbedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Embedded Comments
 * @shortdesc Embedded comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-comments
 * @description
 * Embedded comments are a simple way to put public post comments - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public comments from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>
 * ```
 */
var FBCommentEmbedComponent = /** @class */ (function (_super) {
    __extends(FBCommentEmbedComponent, _super);
    function FBCommentEmbedComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-comment-embed') || this;
    }
    /** @nocollapse */
    FBCommentEmbedComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBCommentEmbedComponent.propDecorators = {
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'includeParent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBCommentEmbedComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBCommentEmbedComponent.prototype, "width", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBCommentEmbedComponent.prototype, "includeParent", void 0);
FBCommentEmbedComponent.ɵfac = function FBCommentEmbedComponent_Factory(t) { return new (t || FBCommentEmbedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBCommentEmbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBCommentEmbedComponent, selectors: [["fb-comment-embed"]], inputs: { href: "href", width: "width", includeParent: "includeParent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBCommentEmbedComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBCommentEmbedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-comment-embed',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], includeParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBCommentEmbedComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-comment-embed.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comments/fb-comments.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comments/fb-comments.js ***!
  \*****************************************************************************************/
/*! exports provided: FBCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBCommentsComponent", function() { return FBCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Comments
 * @shortdesc Comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/comments
 * @description
 * The comments plugin lets people comment on content on your site using their Facebook account.
 * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
 * The comments plugin also includes built-in moderation tools and social relevance ranking.
 *
 * @usage
 * ```html
 * <fb-comments></fb-comments>
 * ```
 */
var FBCommentsComponent = /** @class */ (function (_super) {
    __extends(FBCommentsComponent, _super);
    function FBCommentsComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-comments') || this;
        /**
         * The absolute URL that comments posted in the plugin will be permanently associated with.
         * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
         * Defaults to current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    /** @nocollapse */
    FBCommentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBCommentsComponent.propDecorators = {
        'colorscheme': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'mobile': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'numposts': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'orderBy': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "colorscheme", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBCommentsComponent.prototype, "mobile", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Number)
    ], FBCommentsComponent.prototype, "numposts", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "orderBy", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBCommentsComponent.prototype, "width", void 0);
FBCommentsComponent.ɵfac = function FBCommentsComponent_Factory(t) { return new (t || FBCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBCommentsComponent, selectors: [["fb-comments"]], inputs: { colorscheme: "colorscheme", href: "href", mobile: "mobile", numposts: "numposts", orderBy: "orderBy", width: "width" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBCommentsComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-comments',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { colorscheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numposts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBCommentsComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-comments.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-follow/fb-follow.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-follow/fb-follow.js ***!
  \*************************************************************************************/
/*! exports provided: FBFollowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBFollowComponent", function() { return FBFollowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Follow Button
 * @shortdesc Follow button component
 * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
 * @description The Follow button lets people subscribe to the public updates of others on Facebook.
 * @usage
 * ```html
 * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
 * ```
 */
var FBFollowComponent = /** @class */ (function (_super) {
    __extends(FBFollowComponent, _super);
    function FBFollowComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-follow') || this;
    }
    /** @nocollapse */
    FBFollowComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBFollowComponent.propDecorators = {
        'colorScheme': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'kidDirectedSite': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'layout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showFaces': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "colorScheme", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBFollowComponent.prototype, "kidDirectedSite", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "layout", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "showFaces", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "size", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "width", void 0);
FBFollowComponent.ɵfac = function FBFollowComponent_Factory(t) { return new (t || FBFollowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBFollowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBFollowComponent, selectors: [["fb-follow"]], inputs: { colorScheme: "colorScheme", href: "href", kidDirectedSite: "kidDirectedSite", layout: "layout", showFaces: "showFaces", size: "size", width: "width" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBFollowComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBFollowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-follow',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { colorScheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], kidDirectedSite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showFaces: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBFollowComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-follow.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-like/fb-like.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-like/fb-like.js ***!
  \*********************************************************************************/
/*! exports provided: FBLikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBLikeComponent", function() { return FBLikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Like Button
 * @shortdesc Like button component
 * @fbdoc https://developers.facebook.com/docs/plugins/like-button
 * @description
 * A single click on the Like button will 'like' pieces of content on the web and share them on Facebook.
 * You can also display a Share button next to the Like button to let people add a personal message and customize who they share with.
 * @usage
 * ```html
 * <fb-like href="https://www.facebook.com/zuck"></fb-like>
 * ```
 */
var FBLikeComponent = /** @class */ (function (_super) {
    __extends(FBLikeComponent, _super);
    function FBLikeComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-like') || this;
        /**
         * The absolute URL of the page that will be liked.
         * Defaults to the current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    /** @nocollapse */
    FBLikeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBLikeComponent.propDecorators = {
        'action': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'colorScheme': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'kidDirectedSite': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'layout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'ref': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'share': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showFaces': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBLikeComponent.prototype, "action", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBLikeComponent.prototype, "colorScheme", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBLikeComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBLikeComponent.prototype, "kidDirectedSite", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBLikeComponent.prototype, "layout", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBLikeComponent.prototype, "ref", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBLikeComponent.prototype, "share", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBLikeComponent.prototype, "showFaces", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBLikeComponent.prototype, "size", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBLikeComponent.prototype, "width", void 0);
FBLikeComponent.ɵfac = function FBLikeComponent_Factory(t) { return new (t || FBLikeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBLikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBLikeComponent, selectors: [["fb-like"]], inputs: { action: "action", colorScheme: "colorScheme", href: "href", kidDirectedSite: "kidDirectedSite", layout: "layout", ref: "ref", share: "share", showFaces: "showFaces", size: "size", width: "width" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBLikeComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBLikeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-like',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorScheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], kidDirectedSite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], share: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showFaces: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBLikeComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-like.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-page/fb-page.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-page/fb-page.js ***!
  \*********************************************************************************/
/*! exports provided: FBPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBPageComponent", function() { return FBPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
 * @description
 * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
 * @usage
 * ```html
 * <fb-page href="https://facebook.com/facebook"></fb-page>
 * ```
 */
var FBPageComponent = /** @class */ (function (_super) {
    __extends(FBPageComponent, _super);
    function FBPageComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-page') || this;
    }
    /** @nocollapse */
    FBPageComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBPageComponent.propDecorators = {
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'tabs': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'hideCover': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showFacepile': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'hideCTA': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'smallHeader': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'adaptContainerWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBPageComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Number)
    ], FBPageComponent.prototype, "width", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Number)
    ], FBPageComponent.prototype, "height", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBPageComponent.prototype, "tabs", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "hideCover", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "showFacepile", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "hideCTA", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "smallHeader", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBPageComponent.prototype, "adaptContainerWidth", void 0);
FBPageComponent.ɵfac = function FBPageComponent_Factory(t) { return new (t || FBPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBPageComponent, selectors: [["fb-page"]], inputs: { href: "href", width: "width", height: "height", tabs: "tabs", hideCover: "hideCover", showFacepile: "showFacepile", hideCTA: "hideCTA", smallHeader: "smallHeader", adaptContainerWidth: "adaptContainerWidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBPageComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-page',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideCover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showFacepile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideCTA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], smallHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], adaptContainerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBPageComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-page.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-post/fb-post.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-post/fb-post.js ***!
  \*********************************************************************************/
/*! exports provided: FBPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBPostComponent", function() { return FBPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Embedded Posts
 * @shortdesc Embedded post component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-posts
 * @description
 * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public posts from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>
 * ```
 */
var FBPostComponent = /** @class */ (function (_super) {
    __extends(FBPostComponent, _super);
    function FBPostComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-post') || this;
    }
    /** @nocollapse */
    FBPostComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBPostComponent.propDecorators = {
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBPostComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBPostComponent.prototype, "width", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBPostComponent.prototype, "showText", void 0);
FBPostComponent.ɵfac = function FBPostComponent_Factory(t) { return new (t || FBPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBPostComponent, selectors: [["fb-post"]], inputs: { href: "href", width: "width", showText: "showText" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBPostComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-post',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBPostComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-post.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-quote/fb-quote.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-quote/fb-quote.js ***!
  \***********************************************************************************/
/*! exports provided: FBQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBQuoteComponent", function() { return FBQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Quote Plugin
 * @shortdesc Quote plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/quote
 * @description
 * The quote plugin lets people select text on your page and add it to their share, so they can tell a more expressive story.
 * Note that you do not need to implement Facebook login or request any additional permissions through app review in order to use this plugin.
 * @usage
 * ```html
 * <fb-quote></fb-quote>
 * ```
 */
var FBQuoteComponent = /** @class */ (function (_super) {
    __extends(FBQuoteComponent, _super);
    function FBQuoteComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-quote') || this;
    }
    /** @nocollapse */
    FBQuoteComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBQuoteComponent.propDecorators = {
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'layout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBQuoteComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBQuoteComponent.prototype, "layout", void 0);
FBQuoteComponent.ɵfac = function FBQuoteComponent_Factory(t) { return new (t || FBQuoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBQuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBQuoteComponent, selectors: [["fb-quote"]], inputs: { href: "href", layout: "layout" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBQuoteComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBQuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-quote',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBQuoteComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-quote.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-save/fb-save.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-save/fb-save.js ***!
  \*********************************************************************************/
/*! exports provided: FBSaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBSaveComponent", function() { return FBSaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Save Button
 * @shortdesc Save button component.
 * @fbdoc https://developers.facebook.com/docs/plugins/save
 * @description
 * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
 * ```html
 * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
 * ```
 */
var FBSaveComponent = /** @class */ (function (_super) {
    __extends(FBSaveComponent, _super);
    function FBSaveComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-save') || this;
        /**
         * The absolute link of the page that will be saved.
         * Current Link/Address
         */
        _this.uri = window.location.href;
        return _this;
    }
    /** @nocollapse */
    FBSaveComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBSaveComponent.propDecorators = {
        'uri': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBSaveComponent.prototype, "uri", void 0);
FBSaveComponent.ɵfac = function FBSaveComponent_Factory(t) { return new (t || FBSaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBSaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBSaveComponent, selectors: [["fb-save"]], inputs: { uri: "uri" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBSaveComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBSaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-save',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { uri: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBSaveComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-save.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-send/fb-send.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-send/fb-send.js ***!
  \*********************************************************************************/
/*! exports provided: FBSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBSendComponent", function() { return FBSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Send Button
 * @shortdesc Send button component
 * @fbdoc https://developers.facebook.com/docs/plugins/send-button
 * @description
 * The Send button lets people privately send content on your site to one or more friends in a Facebook message.
 * @usage
 * ```html
 * <fb-send href="https://github.com/zyra/ng2-facebook-sdk/"></fb-send>
 * ```
 */
var FBSendComponent = /** @class */ (function (_super) {
    __extends(FBSendComponent, _super);
    function FBSendComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-send') || this;
        /**
         * The absolute URL of the page that will be sent. Defaults to the current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    /** @nocollapse */
    FBSendComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBSendComponent.propDecorators = {
        'colorScheme': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'kidDirectedSite': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'ref': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBSendComponent.prototype, "colorScheme", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBSendComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBSendComponent.prototype, "kidDirectedSite", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBSendComponent.prototype, "ref", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBSendComponent.prototype, "size", void 0);
FBSendComponent.ɵfac = function FBSendComponent_Factory(t) { return new (t || FBSendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBSendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBSendComponent, selectors: [["fb-send"]], inputs: { colorScheme: "colorScheme", href: "href", kidDirectedSite: "kidDirectedSite", ref: "ref", size: "size" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBSendComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBSendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-send',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { colorScheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], kidDirectedSite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBSendComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-send.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-share/fb-share.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-share/fb-share.js ***!
  \***********************************************************************************/
/*! exports provided: FBShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBShareComponent", function() { return FBShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Share Button
 * @shortdesc Share button component
 * @fbdoc https://developers.facebook.com/docs/plugins/share-button
 * @description
 * The Share button lets people add a personalized message to links before sharing on their timeline, in groups, or to their friends via a Facebook Message.
 * @usage
 * ```html
 * <fb-share href="https://github.com/zyra/ng2-facebook-sdk/"></fb-share>
 * ```
 */
var FBShareComponent = /** @class */ (function (_super) {
    __extends(FBShareComponent, _super);
    function FBShareComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-share-button') || this;
    }
    /** @nocollapse */
    FBShareComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBShareComponent.propDecorators = {
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'layout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'mobileIframe': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBShareComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBShareComponent.prototype, "layout", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBShareComponent.prototype, "mobileIframe", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBShareComponent.prototype, "size", void 0);
FBShareComponent.ɵfac = function FBShareComponent_Factory(t) { return new (t || FBShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBShareComponent, selectors: [["fb-share"]], inputs: { href: "href", layout: "layout", mobileIframe: "mobileIframe", size: "size" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBShareComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBShareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-share',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mobileIframe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return FBShareComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-share.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-video/fb-video.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-video/fb-video.js ***!
  \***********************************************************************************/
/*! exports provided: FBVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBVideoComponent", function() { return FBVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Embedded Video
 * @shortdesc Component to embed Facebook videos
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-video-player
 * @description Component to embed Facebook videos and control them.
 * @usage
 * ```html
 * <!-- basic usage -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/"></fb-video>
 *
 * <!-- event emitters -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (paused)="onVideoPaused($event)"></fb-video>
 * ```
 *
 * To manually interact with the video player, fetch it using `ViewChild`.
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { FBVideoComponent } from 'ng2-facebook-sdk';
 *
 * @Component(...)
 * export class MyComponent {
 *
 *   @ViewChild(FBVideoComponent) video: FBVideoComponent;
 *
 *   ngAfterViewInit() {
 *     this.video.play();
 *     this.video.pause();
 *     this.video.getVolume();
 *   }
 *
 * }
 *
 * ```
 */
var FBVideoComponent = /** @class */ (function (_super) {
    __extends(FBVideoComponent, _super);
    function FBVideoComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-video') || this;
        /**
         * Fired when video starts to play.
         */
        _this.startedPlaying = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fired when video pauses.
         */
        _this.paused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         *
         Fired when video finishes playing.
         */
        _this.finishedPlaying = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fired when video starts to buffer.
         */
        _this.startedBuffering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fired when video recovers from buffering.
         */
        _this.finishedBuffering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fired when an error occurs on the video.
         */
        _this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._listeners = [];
        _this.nativeElement.id = _this._id = 'video-' + String(Math.floor((Math.random() * 10000) + 1));
        return _this;
    }
    /**
     * @hidden
     */
    FBVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.Event.subscribe('xfbml.ready', function (msg) {
            if (msg.type === 'video' && msg.id === _this._id) {
                _this._instance = msg.instance;
                _this._listeners.push(_this._instance.subscribe('startedPlaying', function (e) { return _this.startedPlaying.emit(e); }), _this._instance.subscribe('paused', function (e) { return _this.paused.emit(e); }), _this._instance.subscribe('finishedPlaying', function (e) { return _this.finishedPlaying.emit(e); }), _this._instance.subscribe('startedBuffering', function (e) { return _this.startedBuffering.emit(e); }), _this._instance.subscribe('finishedBuffering', function (e) { return _this.finishedBuffering.emit(e); }), _this._instance.subscribe('error', function (e) { return _this.error.emit(e); }));
            }
        });
    };
    /**
     * @hidden
     */
    FBVideoComponent.prototype.ngOnDestroy = function () {
        this._listeners.forEach(function (l) {
            if (typeof l.release === 'function') {
                l.release();
            }
        });
    };
    /**
     * Plays the video.
     */
    FBVideoComponent.prototype.play = function () { };
    /**
     * Pauses the video.
     */
    FBVideoComponent.prototype.pause = function () { };
    /**
     * Seeks to specified position.
     * @param seconds {number}
     */
    FBVideoComponent.prototype.seek = function (seconds) { };
    /**
     * Mute the video.
     */
    FBVideoComponent.prototype.mute = function () { };
    /**
     * Unmute the video.
     */
    FBVideoComponent.prototype.unmute = function () { };
    /**
     * Returns true if video is muted, false if not.
     */
    FBVideoComponent.prototype.isMuted = function () { return; };
    /**
     * Set the volume
     * @param volume
     */
    FBVideoComponent.prototype.setVolume = function (volume) { };
    /**
     * Get the volume
     */
    FBVideoComponent.prototype.getVolume = function () { return; };
    /**
     * Returns the current video time position in seconds
     */
    FBVideoComponent.prototype.getCurrentPosition = function () { };
    /**
     * Returns the video duration in seconds
     */
    FBVideoComponent.prototype.getDuration = function () { };
    /** @nocollapse */
    FBVideoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    FBVideoComponent.propDecorators = {
        'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'allowfullscreen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoplay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showCaptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'startedPlaying': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'paused': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'finishedPlaying': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'startedBuffering': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'finishedBuffering': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'error': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBVideoComponent.prototype, "href", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "allowfullscreen", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "autoplay", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", String)
    ], FBVideoComponent.prototype, "width", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "showText", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
        __metadata("design:type", Boolean)
    ], FBVideoComponent.prototype, "showCaptions", void 0);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "play", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "pause", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "seek", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "mute", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "unmute", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], FBVideoComponent.prototype, "isMuted", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "setVolume", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], FBVideoComponent.prototype, "getVolume", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "getCurrentPosition", null);
    __decorate([
        _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLInstanceMethod"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FBVideoComponent.prototype, "getDuration", null);
FBVideoComponent.ɵfac = function FBVideoComponent_Factory(t) { return new (t || FBVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FBVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FBVideoComponent, selectors: [["fb-video"]], inputs: { href: "href", allowfullscreen: "allowfullscreen", autoplay: "autoplay", width: "width", showText: "showText", showCaptions: "showCaptions" }, outputs: { startedPlaying: "startedPlaying", paused: "paused", finishedPlaying: "finishedPlaying", startedBuffering: "startedBuffering", finishedBuffering: "finishedBuffering", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function FBVideoComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FBVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fb-video',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowfullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCaptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startedPlaying: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], finishedPlaying: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startedBuffering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], finishedBuffering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
    return FBVideoComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));


//# sourceMappingURL=fb-video.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fbml-component.js ***!
  \********************************************************************************/
/*! exports provided: FBMLAttribute, FBMLInstanceMethod, FBMLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBMLAttribute", function() { return FBMLAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBMLInstanceMethod", function() { return FBMLInstanceMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBMLComponent", function() { return FBMLComponent; });
/**
 * @hidden
 */
function FBMLAttribute(target, key) {
    var processKey = function (_k) { return 'data-' + _k.toString().replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase(); };
    Object.defineProperty(target, key, {
        set: function (value) {
            value = value.toString();
            this.setAttribute(processKey(key), value);
        },
        get: function () {
            return this.getAttribute(processKey(key));
        },
        enumerable: true,
    });
}
/**
 * @hidden
 */
function FBMLInstanceMethod(target, key) {
    return {
        enumerable: true,
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this._instance) {
                return this._instance[key].apply(this._instance, args);
            }
            else {
                console.warn('ng2-facebook-sdk: tried calling instance method before component is ready.');
                return null;
            }
        },
    };
}
/**
 * @hidden
 */
var FBMLComponent = /** @class */ (function () {
    function FBMLComponent(el, rnd, fbClass) {
        this.el = el;
        this.rnd = rnd;
        this.fbClass = fbClass;
        this.nativeElement = this.el.nativeElement;
        this.rnd.addClass(this.nativeElement, this.fbClass);
    }
    FBMLComponent.prototype.setAttribute = function (name, value) {
        if (!name || !value)
            return;
        this.rnd.setAttribute(this.nativeElement, name, value);
    };
    FBMLComponent.prototype.getAttribute = function (name) {
        if (!name)
            return;
        return this.nativeElement.getAttribute(name);
    };
    return FBMLComponent;
}());

//# sourceMappingURL=fbml-component.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/facebook.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/facebook.module.js ***!
  \**********************************************************************/
/*! exports provided: getComponents, FacebookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponents", function() { return getComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookModule", function() { return FacebookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _providers_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/facebook */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/providers/facebook.js");
/* harmony import */ var _components_fb_comment_embed_fb_comment_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fb-comment-embed/fb-comment-embed */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comment-embed/fb-comment-embed.js");
/* harmony import */ var _components_fb_comments_fb_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fb-comments/fb-comments */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comments/fb-comments.js");
/* harmony import */ var _components_fb_follow_fb_follow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fb-follow/fb-follow */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-follow/fb-follow.js");
/* harmony import */ var _components_fb_like_fb_like__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fb-like/fb-like */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-like/fb-like.js");
/* harmony import */ var _components_fb_page_fb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fb-page/fb-page */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-page/fb-page.js");
/* harmony import */ var _components_fb_post_fb_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fb-post/fb-post */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-post/fb-post.js");
/* harmony import */ var _components_fb_quote_fb_quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fb-quote/fb-quote */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-quote/fb-quote.js");
/* harmony import */ var _components_fb_save_fb_save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fb-save/fb-save */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-save/fb-save.js");
/* harmony import */ var _components_fb_send_fb_send__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/fb-send/fb-send */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-send/fb-send.js");
/* harmony import */ var _components_fb_share_fb_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/fb-share/fb-share */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-share/fb-share.js");
/* harmony import */ var _components_fb_video_fb_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/fb-video/fb-video */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-video/fb-video.js");














var components = [
    _components_fb_comment_embed_fb_comment_embed__WEBPACK_IMPORTED_MODULE_2__["FBCommentEmbedComponent"],
    _components_fb_comments_fb_comments__WEBPACK_IMPORTED_MODULE_3__["FBCommentsComponent"],
    _components_fb_follow_fb_follow__WEBPACK_IMPORTED_MODULE_4__["FBFollowComponent"],
    _components_fb_like_fb_like__WEBPACK_IMPORTED_MODULE_5__["FBLikeComponent"],
    _components_fb_page_fb_page__WEBPACK_IMPORTED_MODULE_6__["FBPageComponent"],
    _components_fb_post_fb_post__WEBPACK_IMPORTED_MODULE_7__["FBPostComponent"],
    _components_fb_quote_fb_quote__WEBPACK_IMPORTED_MODULE_8__["FBQuoteComponent"],
    _components_fb_save_fb_save__WEBPACK_IMPORTED_MODULE_9__["FBSaveComponent"],
    _components_fb_send_fb_send__WEBPACK_IMPORTED_MODULE_10__["FBSendComponent"],
    _components_fb_share_fb_share__WEBPACK_IMPORTED_MODULE_11__["FBShareComponent"],
    _components_fb_video_fb_video__WEBPACK_IMPORTED_MODULE_12__["FBVideoComponent"]
];
function getComponents() {
    return components;
}
/**
 * @shortdesc The module to import to add this library
 * @description
 * The main module to import into your application.
 * You only need to import this module if you wish to use the components in this library; otherwise, you could just import [FacebookService](../facebook-service) into your module instead.
 * This module will make all components and providers available in your application.
 *
 * @usage
 * In order to use this library, you need to import `FacebookModule` into your app's main `NgModule`.
 *
 * ```typescript
 * import { FacebookModule } from 'ng2-facebook-sdk';
 *
 * @NgModule({
 *   ...
 *   imports: [
 *     ...
 *     FacebookModule.forRoot()
 *   ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 */
var FacebookModule = /** @class */ (function () {
    function FacebookModule() {
    }
    FacebookModule.forRoot = function () {
        return {
            ngModule: FacebookModule,
            providers: [_providers_facebook__WEBPACK_IMPORTED_MODULE_1__["FacebookService"]]
        };
    };
    /** @nocollapse */
    FacebookModule.ctorParameters = function () { return []; };
FacebookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FacebookModule });
FacebookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FacebookModule_Factory(t) { return new (t || FacebookModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacebookModule, { declarations: [_components_fb_comment_embed_fb_comment_embed__WEBPACK_IMPORTED_MODULE_2__["FBCommentEmbedComponent"],
        _components_fb_comments_fb_comments__WEBPACK_IMPORTED_MODULE_3__["FBCommentsComponent"],
        _components_fb_follow_fb_follow__WEBPACK_IMPORTED_MODULE_4__["FBFollowComponent"],
        _components_fb_like_fb_like__WEBPACK_IMPORTED_MODULE_5__["FBLikeComponent"],
        _components_fb_page_fb_page__WEBPACK_IMPORTED_MODULE_6__["FBPageComponent"],
        _components_fb_post_fb_post__WEBPACK_IMPORTED_MODULE_7__["FBPostComponent"],
        _components_fb_quote_fb_quote__WEBPACK_IMPORTED_MODULE_8__["FBQuoteComponent"],
        _components_fb_save_fb_save__WEBPACK_IMPORTED_MODULE_9__["FBSaveComponent"],
        _components_fb_send_fb_send__WEBPACK_IMPORTED_MODULE_10__["FBSendComponent"],
        _components_fb_share_fb_share__WEBPACK_IMPORTED_MODULE_11__["FBShareComponent"],
        _components_fb_video_fb_video__WEBPACK_IMPORTED_MODULE_12__["FBVideoComponent"]], exports: [_components_fb_comment_embed_fb_comment_embed__WEBPACK_IMPORTED_MODULE_2__["FBCommentEmbedComponent"],
        _components_fb_comments_fb_comments__WEBPACK_IMPORTED_MODULE_3__["FBCommentsComponent"],
        _components_fb_follow_fb_follow__WEBPACK_IMPORTED_MODULE_4__["FBFollowComponent"],
        _components_fb_like_fb_like__WEBPACK_IMPORTED_MODULE_5__["FBLikeComponent"],
        _components_fb_page_fb_page__WEBPACK_IMPORTED_MODULE_6__["FBPageComponent"],
        _components_fb_post_fb_post__WEBPACK_IMPORTED_MODULE_7__["FBPostComponent"],
        _components_fb_quote_fb_quote__WEBPACK_IMPORTED_MODULE_8__["FBQuoteComponent"],
        _components_fb_save_fb_save__WEBPACK_IMPORTED_MODULE_9__["FBSaveComponent"],
        _components_fb_send_fb_send__WEBPACK_IMPORTED_MODULE_10__["FBSendComponent"],
        _components_fb_share_fb_share__WEBPACK_IMPORTED_MODULE_11__["FBShareComponent"],
        _components_fb_video_fb_video__WEBPACK_IMPORTED_MODULE_12__["FBVideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacebookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: getComponents(),
                exports: getComponents()
            }]
    }], function () { return []; }, null); })();
    return FacebookModule;
}());


//# sourceMappingURL=facebook.module.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/index.js ***!
  \************************************************************/
/*! exports provided: FBCommentEmbedComponent, FBCommentsComponent, FBFollowComponent, FBLikeComponent, FBPageComponent, FBPostComponent, FBQuoteComponent, FBSaveComponent, FBSendComponent, FBShareComponent, FBVideoComponent, FacebookService, FacebookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fb_comment_embed_fb_comment_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fb-comment-embed/fb-comment-embed */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comment-embed/fb-comment-embed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBCommentEmbedComponent", function() { return _components_fb_comment_embed_fb_comment_embed__WEBPACK_IMPORTED_MODULE_0__["FBCommentEmbedComponent"]; });

/* harmony import */ var _components_fb_comments_fb_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fb-comments/fb-comments */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-comments/fb-comments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBCommentsComponent", function() { return _components_fb_comments_fb_comments__WEBPACK_IMPORTED_MODULE_1__["FBCommentsComponent"]; });

/* harmony import */ var _components_fb_follow_fb_follow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fb-follow/fb-follow */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-follow/fb-follow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBFollowComponent", function() { return _components_fb_follow_fb_follow__WEBPACK_IMPORTED_MODULE_2__["FBFollowComponent"]; });

/* harmony import */ var _components_fb_like_fb_like__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fb-like/fb-like */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-like/fb-like.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBLikeComponent", function() { return _components_fb_like_fb_like__WEBPACK_IMPORTED_MODULE_3__["FBLikeComponent"]; });

/* harmony import */ var _components_fb_page_fb_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fb-page/fb-page */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-page/fb-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBPageComponent", function() { return _components_fb_page_fb_page__WEBPACK_IMPORTED_MODULE_4__["FBPageComponent"]; });

/* harmony import */ var _components_fb_post_fb_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fb-post/fb-post */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-post/fb-post.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBPostComponent", function() { return _components_fb_post_fb_post__WEBPACK_IMPORTED_MODULE_5__["FBPostComponent"]; });

/* harmony import */ var _components_fb_quote_fb_quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fb-quote/fb-quote */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-quote/fb-quote.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBQuoteComponent", function() { return _components_fb_quote_fb_quote__WEBPACK_IMPORTED_MODULE_6__["FBQuoteComponent"]; });

/* harmony import */ var _components_fb_save_fb_save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fb-save/fb-save */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-save/fb-save.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBSaveComponent", function() { return _components_fb_save_fb_save__WEBPACK_IMPORTED_MODULE_7__["FBSaveComponent"]; });

/* harmony import */ var _components_fb_send_fb_send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fb-send/fb-send */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-send/fb-send.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBSendComponent", function() { return _components_fb_send_fb_send__WEBPACK_IMPORTED_MODULE_8__["FBSendComponent"]; });

/* harmony import */ var _components_fb_share_fb_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fb-share/fb-share */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-share/fb-share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBShareComponent", function() { return _components_fb_share_fb_share__WEBPACK_IMPORTED_MODULE_9__["FBShareComponent"]; });

/* harmony import */ var _components_fb_video_fb_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/fb-video/fb-video */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/components/fb-video/fb-video.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FBVideoComponent", function() { return _components_fb_video_fb_video__WEBPACK_IMPORTED_MODULE_10__["FBVideoComponent"]; });

/* harmony import */ var _providers_facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/facebook */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/providers/facebook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return _providers_facebook__WEBPACK_IMPORTED_MODULE_11__["FacebookService"]; });

/* harmony import */ var _facebook_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./facebook.module */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/facebook.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookModule", function() { return _facebook_module__WEBPACK_IMPORTED_MODULE_12__["FacebookModule"]; });

// components











// providers

// modules


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/providers/facebook.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/providers/facebook.js ***!
  \*************************************************************************/
/*! exports provided: FacebookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

/**
 * @shortdesc
 * Angular 2 service to inject to use Facebook's SDK
 * @description
 * You only need to inject this service in your application if you aren't using [`FacebookModule`](../facebook-module).
 * @usage
 * ```typescript
 * import { FacebookService, InitParams } from 'ng2-facebook-sdk';
 *
 * constructor(private fb: FacebookService) {
 *
 *   const params: InitParams = {
 *
 *   };
 *
 *   fb.init(params);
 *
 * }
 * ```
 */

var FacebookService = /** @class */ (function () {
    function FacebookService() {
    }
    /**
     * This method is used to initialize and setup the SDK.
     * @param params {InitParams} Initialization parameters
     * @returns {Promise<any>}
     */
    FacebookService.prototype.init = function (params) {
        try {
            return Promise.resolve(FB.init(params));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * This method lets you make calls to the Graph API
     * @usage
     * ```typescript
     * this.fb.api('somepath')
     *   .then(res => console.log(res))
     *   .catch(e => console.log(e));
     * ```
     * @param path {string} The Graph API endpoint path that you want to call.
     * @param [method=get] {string} The HTTP method that you want to use for the API request.
     * @param [params] {Object} An object consisting of any parameters that you want to pass into your Graph API call.
     * @returns {Promise<any>}
     */
    FacebookService.prototype.api = function (path, method, params) {
        if (method === void 0) { method = 'get'; }
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            try {
                FB.api(path, method, params, function (response) {
                    if (!response) {
                        reject();
                    }
                    else if (response.error) {
                        reject(response.error);
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This method is used to trigger different forms of Facebook created UI dialogs.
     * These dialogs include:
     * - Share dialog
     * - Login dialog
     * - Add page tab dialog
     * - Requests dialog
     * - Send dialog
     * - Payments dialog
     * - Go Live dialog
     * @param params {UIParams} A collection of parameters that control which dialog is loaded, and relevant settings.
     * @returns {Promise<UIResponse>}
     */
    FacebookService.prototype.ui = function (params) {
        return new Promise(function (resolve, reject) {
            try {
                FB.ui(params, function (response) {
                    if (!response)
                        reject();
                    else if (response.error)
                        reject(response.error);
                    else
                        resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @param [forceFreshResponse=false] {boolean} Force a fresh response.
     * @returns {Promise<LoginStatus>}
     */
    FacebookService.prototype.getLoginStatus = function (forceFreshResponse) {
        return new Promise(function (resolve, reject) {
            try {
                FB.getLoginStatus(function (response) {
                    if (!response) {
                        reject();
                    }
                    else {
                        resolve(response);
                    }
                }, forceFreshResponse);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Login the user
     * @usage
     * ```typescript
     * // login without options
     * this.fb.login()
     *   .then((response: LoginResponse) => console.log('Logged in', response))
     *   .catch(e => console.error('Error logging in'));
     *
     * // login with options
     * const options: LoginOptions = {
     *   scope: 'public_profile,user_friends,email,pages_show_list',
     *   return_scopes: true,
     *   enable_profile_selector: true
     * };
     * this.fb.login(options)
     *   .then(...)
     *   .catch(...);
     * ```
     * @param [options] {LoginOptions} Login options
     * @returns {Promise<LoginResponse>} returns a promise that resolves with [LoginResponse](../login-response) object, or rejects with an error
     */
    FacebookService.prototype.login = function (options) {
        return new Promise(function (resolve, reject) {
            try {
                FB.login(function (response) {
                    if (response.authResponse) {
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }, options);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Logout the user
     * @usage
     * ```typescript
     * this.fb.logout().then(() => console.log('Logged out!'));
     * ```
     * @returns {Promise<any>} returns a promise that resolves when the user is logged out
     */
    FacebookService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            try {
                FB.logout(function (response) {
                    resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This synchronous function returns back the current authResponse.
     * @usage
     * ```typescript
     * import { AuthResponse, FacebookService } from 'ng2-facebook-sdk';
     *
     * ...
     *
     * const authResponse: AuthResponse = this.fb.getAuthResponse();
     * ```
     * @returns {AuthResponse} returns an [AuthResponse](../auth-response) object
     */
    FacebookService.prototype.getAuthResponse = function () {
        try {
            return FB.getAuthResponse();
        }
        catch (e) {
            console.error('ng2-facebook-sdk: ', e);
        }
    };
    /** @nocollapse */
    FacebookService.ctorParameters = function () { return []; };
FacebookService.ɵfac = function FacebookService_Factory(t) { return new (t || FacebookService)(); };
FacebookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacebookService, factory: function (t) { return FacebookService.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacebookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
    return FacebookService;
}());


//# sourceMappingURL=facebook.js.map

/***/ }),

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row justify-content-center\" *ngIf=\"post\">\n        <div class=\"col-12 col-md-7\">\n\n            <div class=\"card bg-secondary shadow border-0\">\n                <div class=\"card-body px-lg-5 py-lg-5\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-12 col-md-8 col-lg-6\">\n                            <img [src]=\"post.image_url\" class=\"img-fluid\">\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"row\">\n                        <div class=\"col-12  text-right\">\n                            <ng-container *ngIf='userService.type.value === \"client\"'>\n                                <button (click)='sharePost()' type='button' class=\"btn btn-primary btn-sm mr-2\">Share</button>\n                            </ng-container>\n                            <label class=\"badge badge-primary mr-2\" *ngIf='post.is_sponsored'>SPONSORED</label>\n                            <a [routerLink]='[\"/category\", post.category.id, post.category.title ]'\n                                class=\"badge badge-default\">{{ post.category.title}}</a>\n                        </div>\n                    </div>\n                    <div>\n                        <h2>\n                            {{ post.title }}\n                        </h2>\n                        <h5>\n                            <span class=\"fa fa-clock\"></span>\n                            {{ post.created | date : 'mediumDate' }}\n                        </h5>\n                    </div>\n                    <div [innerHtml]='post.content'>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-12 col-md-4\">\n            <div class=\"card bg-secondary\">\n\n                <div class=\"card-header\" *ngIf='userService.type.value === \"client\" else notLoggedIN'>\n                    <form id=\"postCommentForm\" #postCommentForm=\"ngForm\" (ngSubmit)=\"postComment()\">\n\n                        <div class=\"form-group\">\n                            <textarea form=\"postCommentForm\" [(ngModel)]='new_comment.comment' name=\"comment\"\n                                placeholder=\"Say SOmething\" class=\"form-control\" #comment=\"ngModel\"></textarea>\n\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary btn-block\" form=\"postCommentForm\" type=\"submit\"\n                                value=\"POST COMMENT\" [disabled]=\"!postCommentForm.form.valid\">\n                                POST COMMENT\n                            </button>\n                        </div>\n                    </form>\n                </div>\n                <ng-template #notLoggedIN>\n                    <div class=\"card-header\">\n                        <h3>LOGIN TO COMMENT</h3>\n                    </div>\n                </ng-template>\n                <div class=\"card-body\">\n                    <div *ngFor=\"let comment of comments | paginate:{itemsPerPage: pageSize, currentPage:p}\">\n                        <div>\n                            <div class=\"media align-items-center\">\n                                <span class=\"avatar avatar-sm rounded-circle\">\n                                    <img [src]=\"comment.client.image_url\" appImgFallback=\"avatar\">\n                                </span>\n                                <div class=\"media-body ml-2 clearfix\">\n                                    <span class=\"mb-0 text-sm text-primary font-weight-bold\">\n                                        {{ comment.client.first_name }} {{ comment.client.last_name }}\n                                    </span><br />\n                                    <span class=\"text-sm  font-weight-light\">\n                                        {{ comment.created | date: \"short\" }}\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"pt-2\">\n                                {{ comment.comment }}\n                            </div>\n                        </div>\n                        <hr />\n                    </div>\n                </div>\n                <div class=\"card-footer py-1\" *ngIf='comments.length > 0'>\n                    <app-pagination-controls (pageChange)=\"p=$event\"></app-pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

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
/* harmony import */ var ngx_fb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-fb */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/index.js");
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
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ngx_fb__WEBPACK_IMPORTED_MODULE_17__["FacebookModule"].forRoot()
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
/* harmony import */ var ngx_fb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-fb */ "./node_modules/ngx-fb/__ivy_ngcc__/dist/esm/index.js");
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
    function PostComponent(route, userService, settingService, toastrService, authLayoutComponent, fb) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.settingService = settingService;
        this.toastrService = toastrService;
        this.authLayoutComponent = authLayoutComponent;
        this.fb = fb;
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
        fb.init({
            appId: '829063553879340',
            xfbml: true,
            version: 'v2.8'
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
    PostComponent.prototype.sharePost = function () {
        var _this = this;
        var params = {
            href: window.location.origin + "/post/" + this.post.id + "/" + encodeURIComponent(this.post.title),
            method: 'share'
        };
        this.fb.ui(params)
            .then(function (res) {
            _this.settingService.getPostShare(_this.post.id).subscribe(function (data) {
                if (data.status === 'success') {
                    _this.toastrService.success(data.message);
                }
                else {
                    _this.toastrService.error(data.message);
                }
            });
        })
            .catch(function (e) { return console.error('here', e); });
    };
    PostComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"] },
        { type: ngx_fb__WEBPACK_IMPORTED_MODULE_7__["FacebookService"] }
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
            _auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
            ngx_fb__WEBPACK_IMPORTED_MODULE_7__["FacebookService"]])
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
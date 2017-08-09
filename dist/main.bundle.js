webpackJsonp(["main"],{

/***/ "../../../../../../enzoAppv1.6/src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../../enzoAppv1.6/src lazy recursive";

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fai_1_fai_1_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-1/fai-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fai_2_fai_2_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-2/fai-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fai_3_fai_3_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-3/fai-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fai_4_fai_4_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-4/fai-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fai_5_fai_5_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-5/fai-5.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/fai1', pathMatch: 'full' },
    { path: 'fai1', component: __WEBPACK_IMPORTED_MODULE_2__fai_1_fai_1_component__["a" /* fai1Component */] },
    { path: 'fai2', component: __WEBPACK_IMPORTED_MODULE_3__fai_2_fai_2_component__["a" /* fai2Component */] },
    { path: 'fai3', component: __WEBPACK_IMPORTED_MODULE_4__fai_3_fai_3_component__["a" /* fai3Component */] },
    { path: 'fai4', component: __WEBPACK_IMPORTED_MODULE_5__fai_4_fai_4_component__["a" /* fai4Component */] },
    { path: 'fai5', component: __WEBPACK_IMPORTED_MODULE_6__fai_5_fai_5_component__["a" /* fai5Component */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet><fai-dialog></fai-dialog>",
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_services__["a" /* AppService */]]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fai_1_fai_1_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-1/fai-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fai_2_fai_2_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-2/fai-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fai_3_fai_3_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-3/fai-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fai_4_fai_4_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-4/fai-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fai_5_fai_5_component__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-5/fai-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_dialog__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/dialog/dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__fai_1_fai_1_component__["a" /* fai1Component */],
                __WEBPACK_IMPORTED_MODULE_9__fai_2_fai_2_component__["a" /* fai2Component */],
                __WEBPACK_IMPORTED_MODULE_10__fai_3_fai_3_component__["a" /* fai3Component */],
                __WEBPACK_IMPORTED_MODULE_11__fai_4_fai_4_component__["a" /* fai4Component */],
                __WEBPACK_IMPORTED_MODULE_12__fai_5_fai_5_component__["a" /* fai5Component */],
                __WEBPACK_IMPORTED_MODULE_13__dialog_dialog__["a" /* faiDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/app.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.tmp = 123;
        this.selectedLoc = "";
        this.locale = "";
        //real data from link
        this.appUrl = "https://esb.pouchen.com/dev/services/eam/inventory";
        //end real data
        /**
         * functions between to call dialog
         */
        this.faiSaySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.dialogSaySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.faiSaid$ = this.faiSaySource.asObservable();
        this.dialogSaid$ = this.dialogSaySource.asObservable();
    }
    ;
    AppService.prototype.esb = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.appUrl, JSON.stringify(json), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AppService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    AppService.prototype.faiSay = function (message) {
        this.faiSaySource.next(message);
    };
    AppService.prototype.dialogSay = function (message) {
        this.dialogSaySource.next(message);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AppService);
    return AppService;
    var _a;
}());

//# sourceMappingURL=app.services.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/dialog/dialog.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button (click)=\"hide('')\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">{{dialog.title}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>{{dialog.content}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button (click)=\"hide('yes')\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" *ngIf=\"dialog.btnYN\">{{keep?\"Keep\":\"Yes\"}}</button>\r\n                <button (click)=\"hide('no')\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" *ngIf=\"dialog.btnYN\">{{keep?\"No Keep\":\"No\"}}</button>\r\n                <button (click)=\"hide('ok')\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" *ngIf=\"!dialog.btnYN\">Ok</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/dialog/dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return faiDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var faiDialog = (function () {
    function faiDialog(appservice, elRef) {
        var _this = this;
        this.appservice = appservice;
        this.elRef = elRef;
        this.dialog = {
            title: "title",
            content: "content",
            btnYN: true,
            access: {
                yes: "none",
                no: "none",
                choose: "none"
            }
        };
        this.keep = false;
        this.tmp = false;
        this.subs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"];
        this.visible = false;
        this.visibleAnimate = false;
        this.subs = appservice.faiSaid$.subscribe(function (mess) {
            _this.dialog = mess;
            /**
             * show "Keep" or "no keep"
             */
            _this.dialog.content == "After upload Inventory sheet , keep inventory record?" ? _this.keep = true : _this.keep = false;
            _this.show();
        });
    }
    faiDialog.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    faiDialog.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    faiDialog.prototype.hide = function (choose) {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () {
            _this.visible = false;
            _this.dialog.access.choose = choose;
            _this.appservice.dialogSay(_this.dialog.access);
        }, 300);
    };
    faiDialog.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
        }
    };
    faiDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'fai-dialog',
            template: __webpack_require__("../../../../../../enzoAppv1.6/src/app/dialog/dialog.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_services__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
    ], faiDialog);
    return faiDialog;
    var _a, _b;
}());

//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-1/fai-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div #selector class=\"upage\" id=\"mainpage\">\n    <div class=\"upage-outer\">\n        <div class=\"upage-content ac0 content-area vertical-col left\" id=\"page_78_45\">\n            <nav class=\"navbar navbar-default navbar-fixed-top\">\n                <!-- Top header-->\n                <div class=\"uib-header header-bg container-group inner-element uib_w_7\" data-uib=\"layout/header\" data-ver=\"0\">\n                    <h2></h2>\n                    <div class=\"widget-container wrapping-col single-centered\"></div>\n                    <div class=\"widget-container content-area horiz-area wrapping-col left\"></div>\n                    <div class=\"widget-container content-area horiz-area wrapping-col right\">\n                        <button class=\"btn btnexit\" (click)=\"btnClose()\"><i class=\"fa fa-power-off fa-2x\" data-position=\"icon only\"></i>\n                        </button>\n                    </div>\n                </div>\n                <!-- End top header-->\n                <!-- Button header -->\n                <div class=\"uib-button-bar default-button-bar-height widget uib_w_3 d-margins\" data-uib=\"media/button_bar\" data-ver=\"0\">\n                    <a class=\"col-xs-4 btn btn-default\" (click)=\"btnDownload()\">\n                        <img src=\"./assets/images/download_64.png\"><br>\n                        <span class=\"uib-caption\">Download</span>\n                    </a>\n                    <a class=\"col-xs-4 btn btn-default\" (click)=\"btnUpload()\">\n                        <img class=\"clear\" src=\"./assets/images/upload_64.png\"><br>\n                        <span class=\"uib-caption\">Upload</span>\n                    </a>\n                    <a class=\"col-xs-4 btn btn-default\" (click)=\"btnDelete()\">\n                        <img class=\"clear\" src=\"./assets/images/paper-bin_64.png\"><br>\n                        <span class=\"uib-caption\">Delete</span>\n                    </a>\n                </div>\n                <!--End button header -->\n                <h4 class=\"col-xs-12\">&nbsp;Inventory sheet list</h4>\n                <h4 class=\"col-xs-12\">{{inv_couting}}</h4>\n            </nav>\n            <!--Inventory sheet list-->\n            <div id=\"home\" class=\"tab-pane fade in active\">\n                <div class=\"list-group widget uib_w_7 d-margins\" data-uib=\"twitter%20bootstrap/list_group\" data-ver=\"1\" *ngIf=\"listView\">\n                    <a routerLink=\"/fai2\" (click)=\"setDataFal2(list.plan_id)\" class=\"list-group-item allow-badge widget uib_w_9\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\" *ngFor=\"let list of listView\">\n                        <span class=\"badge\">{{list.todo}}/{{list.checked}}/{{list.extras}}</span>\n                        <h4 class=\"list-group-item-heading\" *ngIf=\"list\">{{list.plan_nm}} {{list.plan_no}}</h4>\n                    </a> \n                </div>\n            </div>\n            <!--End inventory sheet list-->\n            <div class=\"card_grid widget uib_w_24 wrapping-col d-margins\" data-uib=\"layout/card_grid\" data-ver=\"0\">\n                <div class=\"widget widget-container content-area vertical-col uib-card cpad-0 uib_w_25\" data-uib=\"layout/card\" data-ver=\"0\"></div>\n                <div class=\"widget widget-container content-area vertical-col uib-card cpad-0 uib_w_26\" data-uib=\"layout/card\" data-ver=\"0\"></div>\n                <div class=\"widget widget-container content-area vertical-col uib-card cpad-0 uib_w_27\" data-uib=\"layout/card\" data-ver=\"0\"></div>\n                <div class=\"widget widget-container content-area vertical-col uib-card cpad-0 uib_w_28\" data-uib=\"layout/card\" data-ver=\"0\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal (Dialog) -->\n"

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-1/fai-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fai1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md5__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/md5.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_sdk_js__ = __webpack_require__("../../../../../../enzoAppv1.6/src/assets/js/sdk.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_sdk_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_sdk_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TOKEN = "edca2e1a1fa2bfc0460463fe8fccb31d";
var fai1Component = (function () {
    function fai1Component(elRef, appservice, zone) {
        var _this = this;
        this.elRef = elRef;
        this.appservice = appservice;
        // insert data into inv_sheets, inv_location, inv_ast when click download
        this.onInsert = function (res) {
            var db = PCCMP.database;
            var inv = res;
            for (var i = 0; i < inv.length; i++) {
                // insert data into table inv_sheets
                db.executeSql('insert into inv_sheets (plan_id, plan_no, plan_nm) values(' + inv[i].plan_id + ', "' + inv[i].plan_no + '", "' + inv[i].plan_nm + '")')
                    .then(function (results) {
                    console.log('insert inv_sheets success');
                }).catch(function (error) {
                    _this.alertError('Insert into inv_sheets fail: ' + JSON.stringify(error));
                });
                for (var l = 0; l < inv[i].loc.length; l++) {
                    // insert data into table inv_location
                    db.executeSql('insert into inv_location (location_id, plan_id, plan_nm, location_no, location_nm_zh_TW, location_nm_en) values(' + inv[i].loc[l].location_id + ', ' + inv[i].plan_id + ', "' + inv[i].plan_nm + '", "' + inv[i].loc[l].location_no + '", "' + inv[i].loc[l].location_nm_zh_TW + '", "' + inv[i].loc[l].location_nm_en + '")')
                        .then(function (results2) {
                        console.log('insert inv_location success');
                    }).catch(function (error) {
                        _this.alertError("insert into inv_location fail: " + JSON.stringify(error));
                    });
                    var ast = inv[i].loc[l].ast;
                    for (var a = 0; a < ast.length; a++) {
                        // insert data into table inv_ast
                        db.executeSql('insert into inv_ast (ast_global_id, location_id, ast_no, ast_no_bk, comp_nm, ast_nm_zh_tw, ast_nm_en, style_no, brand_nm, pur_date_fact, idle_mk, keeper_nm) values("' + ast[a].ast_global_id + '", ' + inv[i].loc[l].location_id + ', "' + ast[a].ast_no + '",  "' + ast[a].ast_no_bk + '", "' + ast[a].comp_nm + '", "' + ast[a].ast_nm_zh_TW + '", "' + ast[a].ast_nm_en + '", "' + ast[a].style_no + '", "' + ast[a].brand_nm + '", "' + ast[a].pur_date_fact + '", "' + ast[a].idle_mk + '", "' + ast[a].keeper_nm + '")')
                            .then(function (results2) {
                            console.log('insert inv_ast success');
                        }).catch(function (error) {
                            _this.alertError("insert into inv_ast fail: " + JSON.stringify(error));
                        });
                    }
                }
            }
        };
        this.zone = zone;
        /**
         * listen message from dialog by services
         */
        this.subs = appservice.dialogSaid$.subscribe(function (mess) {
            if (mess.choose === 'yes') {
                switch (mess.yes) {
                    case "download": {
                        _this.handleBtnDownload();
                        break;
                    }
                    case "upload": {
                        _this.uploadSqliteToEsb('Y');
                        break;
                    }
                    case "delete": {
                        _this.eraseInvData();
                        break;
                    }
                    case "close": {
                        _this.exitProgram();
                        break;
                    }
                }
            }
            else if (mess.choose === 'no') {
                switch (mess.yes) {
                    case "upload": {
                        _this.uploadSqliteToEsb('N');
                        break;
                    }
                }
            }
            else {
                switch (mess.yes) {
                    case "upload": {
                        _this.uploadSqliteToEsb('N');
                        break;
                    }
                }
            }
        });
        this.promiseNet = new Promise(function (resolve, reject) {
            PCCMP.platform.getNetInfo().then(function (result) {
                if (result != "wifi" && result != "cell") {
                    resolve(false);
                }
                else
                    resolve(true);
            });
        });
    }
    fai1Component.prototype.ngOnInit = function () {
        var _this = this;
        // when window appear scroll bar, it will run ngAfterViewInit method
        window.onresize = function () {
            _this.suAfterViewInit();
        };
        PCCMP.platform.ready().then(function () {
            // start init data...
            _this.handleSqliteData();
            PCCMP.user.getProfile().then(function (result) {
                _this.profile = result;
                _this.json = {
                    "serviceName": "download",
                    "pccUid": _this.profile.pccuid,
                    "serial": 1,
                    "checkSum": "",
                    "data": {}
                };
                _this.json.checkSum = __WEBPACK_IMPORTED_MODULE_2__md5__["a" /* Md5 */].hashStr(TOKEN + _this.json.serviceName + _this.json.pccUid + _this.json.serial);
            });
        });
    };
    /**
     * function call services
     * service call dialog appear
     */
    fai1Component.prototype.showPopup = function (title, content, btnYN, yesFun, noFun, choose) {
        var dialog = {
            title: title,
            content: content,
            btnYN: btnYN,
            access: {
                yes: yesFun,
                no: noFun,
                choose: choose
            }
        };
        this.appservice.faiSay(dialog);
    };
    ;
    fai1Component.prototype.alertError = function (mess) {
        this.showPopup("Error", mess, false, "none", "none", "none");
    };
    fai1Component.prototype.btnDownload = function () {
        this.showPopup("System Information", "下載後會清空盤點資訊，確定下載?After download Inventory sheet，System will rest inventory record!", true, "download", "", "");
    };
    fai1Component.prototype.btnUpload = function () {
        var _this = this;
        this.promiseNet.then(function (result) {
            if (!result) {
                alert('網路未連線!The network is not connected!');
                return;
            }
        }).catch(function (error) {
            _this.alertError("check network Status error !");
        });
        this.showPopup("System Information", "After upload Inventory sheet , keep inventory record?", true, "upload", "", "");
    };
    fai1Component.prototype.btnDelete = function () {
        this.showPopup("System Information", "Are you sure want to erase inventory data?", true, "delete", "", "");
    };
    fai1Component.prototype.btnClose = function () {
        var dialog = {
            title: "System Information",
            content: "Do you want to logout?",
            btnYN: true,
            access: { yes: "close", no: "none", choose: "none" }
        };
        this.appservice.faiSay(dialog);
    };
    /** Remember unsubscribe when routing to another page */
    fai1Component.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    fai1Component.prototype.suAfterViewInit = function () {
        // set the navbar fixed with scroll bar
        var div = this.elRef.nativeElement.querySelector('.navbar-fixed-top');
        //set height for div has id = home to show scroll bar when overload height
        var div2 = this.elRef.nativeElement.querySelector('#home');
        div2.style.height = window.innerHeight - 175 - 12 + "px";
    };
    //
    // Create table if not exists
    // get data from inv_sheets and show in UI
    fai1Component.prototype.handleSqliteData = function () {
        var _this = this;
        /**
         * pct change on 16/6/2017
         * new service download with phan_no's format is number
         */
        PCCMP.database.sqlBatch([
            'CREATE TABLE IF NOT EXISTS inv_sheets(plan_id INT PRIMARY KEY NOT NULL,plan_no REAL, plan_nm TEXT);',
            'CREATE TABLE IF NOT EXISTS inv_location(location_id REAL PRIMARY KEY NOT NULL,plan_id INT NOT NULL, plan_nm TEXT, location_no TEXT, location_nm_zh_TW TEXT, location_nm_en TEXT);',
            'CREATE TABLE IF NOT EXISTS inv_ast(id INTEGER PRIMARY KEY AUTOINCREMENT, ast_global_id TEXT NOT NULL,location_id REAL NOT NULL, ast_no TEXT NOT NULL, ast_no_bk TEXT, comp_nm TEXT, ast_nm_zh_tw TEXT, ast_nm_en TEXT, style_no TEXT, brand_nm TEXT, pur_date_fact TEXT, idle_mk TEXT, keeper_nm TEXT);',
            'CREATE TABLE IF NOT EXISTS inv_parameter(no TEXT PRIMARY KEY NOT NULL,nm_zh_tw TEXT NOT NULL, nm_en TEXT NOT NULL);',
            'CREATE TABLE IF NOT EXISTS inv_checked(id INTEGER, ast_global_id TEXT, ast_no TEXT NOT NULL, plan_id INT NOT NULL, location_id REAL NOT NULL, inv_checker TEXT, memo TEXT, idle_mk TEXT, manual TEXT, upload_date TEXT, checked_date TEXT, attr_update_date TEXT);'
        ])
            .then(function (results) {
            console.log("create table in firstly loading successfully");
        })
            .then(function (results) {
            _this.onSelect();
        }).catch(function (error) {
            _this.alertError('isTableExist: ' + JSON.stringify(error));
        });
    };
    fai1Component.prototype.handleBtnDownload = function () {
        var _this = this;
        /** Check network connection status */
        this.promiseNet.then(function (result) {
            if (!result) {
                alert('網路未連線!The network is not connected!');
                return;
            }
        }).catch(function (error) {
            _this.alertError("check network Status error !");
        });
        /** end check network */
        this.listView = '';
        PCCMP.database.sqlBatch([
            'CREATE TABLE IF NOT EXISTS inv_sheets(plan_id INT PRIMARY KEY NOT NULL,plan_no REAL, plan_nm TEXT);',
            'DELETE from inv_sheets;',
            'CREATE TABLE IF NOT EXISTS inv_location(location_id REAL PRIMARY KEY NOT NULL,plan_id INT NOT NULL, plan_nm TEXT, location_no TEXT, location_nm_zh_TW TEXT, location_nm_en TEXT);',
            'DELETE from inv_location;',
            'CREATE TABLE IF NOT EXISTS inv_ast(id INTEGER PRIMARY KEY AUTOINCREMENT, ast_global_id TEXT NOT NULL,location_id REAL NOT NULL, ast_no TEXT NOT NULL, ast_no_bk TEXT, comp_nm TEXT, ast_nm_zh_tw TEXT, ast_nm_en TEXT, style_no TEXT, brand_nm TEXT, pur_date_fact TEXT, idle_mk TEXT, keeper_nm TEXT);',
            'DELETE from inv_ast;',
            'CREATE TABLE IF NOT EXISTS inv_parameter(no TEXT PRIMARY KEY NOT NULL,nm_zh_tw TEXT,nm_en TEXT);',
            'DELETE from inv_parameter;',
            'CREATE TABLE IF NOT EXISTS inv_checked(id INTEGER, ast_global_id TEXT, ast_no TEXT NOT NULL, plan_id INT NOT NULL, location_id REAL NOT NULL, inv_checker TEXT, memo TEXT, idle_mk TEXT, manual TEXT, upload_date TEXT, checked_date TEXT, attr_update_date TEXT);',
            'DELETE from inv_checked where inv_checker = "' + this.profile.login + '";'
        ])
            .then(function (results) {
            _this.doDownload();
            _this.json.serviceName = "basicData";
            _this.json.checkSum = __WEBPACK_IMPORTED_MODULE_2__md5__["a" /* Md5 */].hashStr(TOKEN + _this.json.serviceName + _this.json.pccUid + _this.json.serial);
            _this.appservice.esb(_this.json).subscribe(function (result) {
                if (result.errCode != "000") {
                    _this.alertError('System error! Please contact customer service!:' + result.errMsg.nm_en);
                    return;
                }
                var res = result.data.config.data;
                var sqlInsert = [];
                for (var i = 0; i < res.length; i++) {
                    sqlInsert.push('insert into inv_parameter(no, nm_zh_tw, nm_en) values("' + res[i].no + '", "' + res[i].nm_zh_TW + '", "' + res[i].nm_en + '")');
                }
                PCCMP.database.sqlBatch(sqlInsert)
                    .then(function (results) {
                }).catch(function (error) {
                    _this.alertError('error when run sqlBatch (create and delete table): ' + JSON.stringify(error));
                });
            }, function (error) { _this.alertError('get basic data fail! ' + error); }, function () { _this.listView = _this.listView; });
        }).catch(function (error) {
            _this.alertError('error when run sqlBatch (create and delete table): ' + JSON.stringify(error));
        });
    };
    fai1Component.prototype.doDownload = function () {
        var _this = this;
        this.json.serviceName = "download";
        this.json.checkSum = __WEBPACK_IMPORTED_MODULE_2__md5__["a" /* Md5 */].hashStr(TOKEN + this.json.serviceName + this.json.pccUid + this.json.serial);
        this.appservice.esb(this.json).subscribe(function (result) {
            if (result.errCode != "000") {
                _this.alertError('System error! Please contact customer service!:' + result.errMsg.nm_en);
                return;
            }
            if (result.data == "") {
                _this.alertError("沒有盤點清單!No Inventory sheet!");
                return;
            }
            /** convert object to array */
            var arr = [];
            var lol = [];
            var axe = [];
            if (result.data.inv.length == undefined) {
                arr.push(result.data.inv);
            }
            else {
                arr = result.data.inv;
            }
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].loc.length == undefined) {
                    lol.push(arr[i].loc);
                    arr[i].loc = lol;
                    lol = [];
                }
                for (var j = 0; j < arr[i].loc.length; j++) {
                    if (arr[i].loc[j].ast.length == undefined) {
                        axe.push(arr[i].loc[j].ast);
                        arr[i].loc[j].ast = axe;
                        axe = [];
                    }
                }
            }
            _this.listView = arr;
            /* end convert */
            if (_this.listView.length > 0) {
                _this.onInsert(arr);
            }
            else {
                _this.alertError("沒有盤點清單!No Inventory sheet!");
                return;
            }
            for (var i = 0; i < _this.listView.length; i++) {
                _this.listView[i].todo = 0;
                for (var j = 0; j < _this.listView[i].loc.length; j++) {
                    _this.listView[i].todo = _this.listView[i].todo + _this.listView[i].loc[j].ast.length;
                }
                _this.listView[i].checked = 0;
                _this.listView[i].extras = 0;
            }
            _this.showPopup('System information', '下載完畢!Download Complete!', false, "", "", "");
        }, function (error) { _this.alertError('下載失敗!Download Fail! ' + error); }, function () { _this.listView = _this.listView; });
    };
    fai1Component.prototype.onSelect = function () {
        var _this = this;
        this.listView = [];
        // get locale
        PCCMP.user.getLocale()
            .then(function (data) {
            _this.locale = data;
        }).then(function (locale) {
            /**
             * formula
             * to do = total inventory - checked
             * checked = count all from checked where plan_id = current inv_sheets
             * extras = count all from checked where assets not exists in inventory assets
             */
            _this.appservice.locale = _this.locale != "" ? _this.locale.substr(0, 2) : "en";
            PCCMP.database
                .executeSql('select *,(select count(*) from inv_ast ia, inv_sheets ish, inv_location il where ish.plan_id = il.plan_id and il.location_id = ia.location_id and ish.plan_id = inv_sheets.plan_id and id NOT IN (select c.id from inv_checked c, inv_ast a where c.id = a.id and c.plan_id = inv_sheets.plan_id)) todo,(select count(*) from inv_checked c, inv_ast a where c.id = a.id and c.plan_id = inv_sheets.plan_id) checked, (select count(*) from inv_checked c where (c.id = "" or c.id is NULL) and c.plan_id = inv_sheets.plan_id) extras from inv_sheets;')
                .then(function (res) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.listView.push({ "plan_id": res.rows[i].plan_id, "plan_no": res.rows[i].plan_no, "plan_nm": res.rows[i].plan_nm, "todo": res.rows[i].todo, "checked": res.rows[i].checked, "extras": res.rows[i].extras });
                }
            }).catch(function (error) {
                _this.alertError('error : ' + JSON.stringify(error));
            });
        });
    };
    // set data for FAL2
    fai1Component.prototype.setDataFal2 = function (plan_id) {
        this.appservice.tmp = plan_id;
    };
    // erase inventory data
    fai1Component.prototype.eraseInvData = function () {
        var _this = this;
        this.promiseNet.then(function (result) {
            if (!result) {
                alert('network error');
                return;
            }
        }).catch(function (error) {
            _this.alertError("check network Status error !");
        });
        // Check network connection
        PCCMP.platform.getNetInfo().then(function (result) {
            if (result != "wifi" && result != "cell") {
                _this.alertError("網路未連線!The network is not connected!");
                return;
            }
            // check permission before			
            _this.json.serviceName = "userProfile";
            _this.json.checkSum = __WEBPACK_IMPORTED_MODULE_2__md5__["a" /* Md5 */].hashStr(TOKEN + _this.json.serviceName + _this.json.pccUid + _this.json.serial);
            _this.appservice.esb(_this.json).subscribe(function (result) {
                if (result.errCode != "000") {
                    _this.alertError('System error! Please contact customer service!:' + result.errMsg.nm_en);
                    return;
                }
                if (result.data.user.del_mk == "Y") {
                    PCCMP.database.sqlBatch([
                        'DELETE from inv_sheets;',
                        'DELETE from inv_location;',
                        'DELETE from inv_ast;',
                        'DELETE from inv_parameter;',
                        'DELETE from inv_checked where inv_checker = "' + _this.profile.login + '";'
                    ]).then(function () {
                        _this.listView = [];
                        _this.showPopup("System information", "資料已刪除!/Reset Complete!", false, "", "", "");
                    }).catch(function (error) {
                        _this.alertError('error when erase data: ' + JSON.stringify(error));
                    });
                }
                else
                    _this.alertError("權限不足!No permission!");
            }, function (error) { return _this.errorMessage = error; });
        }).catch(function (error) {
            _this.alertError('error when erase data: ' + JSON.stringify(error));
        });
    };
    fai1Component.prototype.uploadSqliteToEsb = function (confirm) {
        var _this = this;
        var upload = [];
        var promiseT = new Promise(function (resolve, reject) {
            var _this = this;
            PCCMP.database
                .executeSql('select plan_id from inv_checked where upload_date is NULL GROUP BY plan_id;')
                .then(function (sheets) {
                if (sheets.rowsLength == 0) {
                    resolve(0);
                }
                // loop of sheets list
                (function loop(i) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        // restore isCheckSheets is false every inventory
                        var isCheckSheets = false;
                        PCCMP.database
                            .executeSql('select location_id from inv_checked where plan_id = ' + sheets.rows[i].plan_id + ' and upload_date is NULL GROUP BY location_id')
                            .then(function (locs) {
                            // loop of location list
                            (function loop(l) {
                                var _this = this;
                                var promise = new Promise(function (resolve, reject) {
                                    // reset ast list every location item
                                    var new_ast = [];
                                    PCCMP.database
                                        .executeSql('select c.* from inv_checked c where c.location_id =' + locs.rows[l].location_id + ' and c.upload_date is NULL')
                                        .then(function (asts) {
                                        /**
                                         * Loop of assets list
                                         * push all ast detail to new_ast
                                         */
                                        for (var a = 0; a < asts.rows.length; a++) {
                                            new_ast.push({ "ast_global_id": asts.rows[a].ast_global_id, "ast_no": asts.rows[a].ast_no, "idle_mk": asts.rows[a].idle_mk, "memo": asts.rows[a].memo, "timemillis": asts.rows[a].checked_date });
                                        }
                                        if (!isCheckSheets) {
                                            upload.push({ "plan_id": sheets.rows[i].plan_id, "loc": [{ "location_id": locs.rows[l].location_id, "ast": new_ast }] });
                                            isCheckSheets = true;
                                        }
                                        else {
                                            upload[i].loc.push({ "location_id": locs.rows[l].location_id, "ast": new_ast });
                                        }
                                        resolve(); // resolve it! ES7 format
                                    })
                                        .catch(function (error) {
                                        _this.alertError('error upload - get list inv_checked - location: ' + JSON.stringify(error));
                                    });
                                }).then(function () { return l >= locs.rows.length - 1 || loop(l + 1); })
                                    .then(function () {
                                    l == locs.rows.length - 1 && resolve(); // resolve it! ES7 format
                                });
                            })(0);
                        })
                            .catch(function (error) {
                            _this.alertError('error upload - get list inv_location: ' + JSON.stringify(error));
                        });
                    }).then(function () { return !(i >= sheets.rows.length - 1 || loop(i + 1)) || resolve(upload); });
                })(0);
            })
                .catch(function (error) {
                _this.alertError('error upload - get list inv_sheets: ' + JSON.stringify(error));
            });
        });
        promiseT.then(function (result1) {
            // Use result1
            if (result1 == 0)
                _this.showPopup("System information", "No inventory sheet to upload!", false, "", "", "");
            else
                return _this.callEsbUpload(result1, confirm); // (A)
        }).catch(function (error) {
            // Handle errors of asyncFunc1() and asyncFunc2()
        });
    };
    fai1Component.prototype.callEsbUpload = function (data, confirm) {
        var _this = this;
        this.json.data.inv = data;
        this.json.serviceName = "upload";
        this.json.checkSum = __WEBPACK_IMPORTED_MODULE_2__md5__["a" /* Md5 */].hashStr(TOKEN + this.json.serviceName + this.json.pccUid + this.json.serial);
        this.appservice.esb(this.json).subscribe(function (result) {
            if (result.errCode != "000") {
                _this.alertError('System error! Please contact customer service!:' + result.errMsg.nm_en);
                return;
            }
            if (confirm == "Y") {
                var date = new Date();
                PCCMP.database.executeSql('update inv_checked set upload_date = "' + date.getTime() + '" where upload_date is NULL')
                    .then(function (result_update) {
                }).catch(function (error) {
                    _this.alertError('System error! Please contact customer service!');
                });
            }
            else {
                PCCMP.database.executeSql('DELETE from inv_checked where inv_checker = "' + _this.profile.login + '"')
                    .then(function (result_delete) {
                    for (var i = 0; i < _this.listView.length; i++) {
                        _this.listView[i].todo = _this.listView[i].todo + _this.listView[i].checked;
                        _this.listView[i].checked = 0;
                        _this.listView[i].extras = 0;
                    }
                }).catch(function (error) {
                    _this.alertError('System error! Please contact customer service!');
                });
            }
            if (result.errCode == "000")
                _this.showPopup("System information", "Upload Complete", false, "", "", "");
        }, function (error) { return alert(JSON.stringify(error)); });
    };
    fai1Component.prototype.exitProgram = function () {
        PCCMP.platform.exit().then(function () {
            // start exit...			
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('listcontent'),
        __metadata("design:type", Object)
    ], fai1Component.prototype, "div", void 0);
    fai1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-1/fai-1.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_services__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_services__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object])
    ], fai1Component);
    return fai1Component;
    var _a, _b, _c;
}());

//# sourceMappingURL=fai-1.component.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-2/fai-2.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- IMPORTANT: Do not include a weinre script tag as part of your release builds! -->\n<!-- Place your remote debugging weinre script URL here, if it does not work above. -->\n<div class=\"upage \" id=\"FAI-2\">\n    <div class=\"upage-outer\">\n        <!--Header-->\n        <div class=\"uib-header header-bg container-group inner-element uib_w_15\" data-uib=\"layout/header\" data-ver=\"0\">\n            <h2></h2>\n            <div class=\"widget-container wrapping-col single-centered\">\n                <h4>Select location</h4>\n            </div>\n            <div class=\"widget-container content-area horiz-area wrapping-col left\">\n                <button routerLink=\"/fai1\" (click)=\"handleBacktoFai1()\" class=\"btnexit btn widget uib_w_16 d-margins\" data-uib=\"twitter%20bootstrap/button\"\n                    data-ver=\"1\"><i class=\"fa fa-chevron-left fa-2x button-icon-left\" data-position=\"left\"></i>\n                </button>\n            </div>\n            <div class=\"widget-container content-area horiz-area wrapping-col right\"></div>\n        </div>\n        <!--End header-->\n        <div id=\"page_6_29\">\n            <div class=\"col-xs-12\" style=\"height:3em;\"></div>\n            <!--QR code box-->\n            <div class=\"col-xs-12\">\n                <div class=\"pct-qrScan\">\n                    <div class=\"box-md\">\n                        {{qrScanBox}}\n                        <!--<img src=\"./assets/images/qrcode.png\" />-->\n                    </div>\n                </div>\n            </div>\n            <!--End QR code box-->\n            <div class=\"col-xs-12 pct-bottom\">\n                <!--Select location box -->\n                <div class=\"col-xs-12 record\">\n                    <div class=\"select-assets\">\n                        <select class=\"form-control\" [ngModel]=\"dropdownListModel | json\" (ngModelChange)=\"handleSelectLoc($event)\" name=\"sel1\">\n                            <!--<option [value]=\"item | json\" *ngFor=\"let item of locs\">{{appservice.locale == \"zh\" ?item.location_nm_zh_TW: item.location_nm_en}}</option>-->\n                            <option [value]=\"item | json\" *ngFor=\"let item of locs\">{{item.location_nm_zh_TW}} {{item.location_nm_en}}</option>\n                        </select>\n                    </div>\n                </div>\n                <!--End select location box-->\n                <div class=\"navbar col-xs-12 navbar-fixed-bottom\" style=\"padding-bottom:10px;\">\n                    <div>\n                        <a (click)=\"handleRecordBtn()\">\n                            <button class=\"col-xs-6 pd-l-0 btn btn-default\">\n                                <img class=\"logo \" style=\"height:40px;\" src=\"./assets/images/wedding-planning.png\"/>\n                                <div class=\"clear\"></div>\n                                <span style=\"font-size: 11px\">Records</span>\n                            </button>\n                        </a>\n                    </div>\n                    <div>\n                        <a (click)=\"handleInvCheckBtn()\">\n                            <button class=\"col-xs-6 pd-r-0 btn btn-default\">\n                                <img class=\"logo\"  style=\"height:40px;\" src=\"./assets/images/qr-code-scan.png\"/>\n                                <div class=\"clear\"></div>\n                                <span style=\"font-size: 11px\">Inventory Check</span>\n                            </button>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-2/fai-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fai2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js__ = __webpack_require__("../../../../../../enzoAppv1.6/src/assets/js/sdk.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var fai2Component = (function () {
    function fai2Component(elRef, router, zone, appservice) {
        var _this = this;
        this.elRef = elRef;
        this.router = router;
        this.appservice = appservice;
        this.subs = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"];
        /**
         * Remember use the ES6 arrow function.
         */
        this.barcodeScanHandler = function (data) {
            console.log(new Date().toISOString());
            var isMatchLoc = false;
            _this.zone.run(function () {
                for (var i = 0; i < _this.locs.length; i++) {
                    if (data == _this.locs[i].location_id) {
                        isMatchLoc = true;
                        _this.appservice.selectedLoc = _this.locs[i];
                        _this.dropdownListModel = _this.locs[i];
                    }
                }
                if (!isMatchLoc) {
                    _this.appservice.selectedLoc = "";
                    _this.dropdownListModel = "";
                    _this.showPopup('System information', 'No this location !, QRCode does not match location after Scan', false, "", "", "");
                }
            });
        };
        this.zone = zone;
        this.subs = appservice.dialogSaid$.subscribe(function (mess) { return mess; });
    }
    // the method ngOnInit will run some functions when loading page firstly
    fai2Component.prototype.ngOnInit = function () {
        this.onSelect();
    };
    fai2Component.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    fai2Component.prototype.showPopup = function (title, content, btnYN, yesFun, noFun, choose) {
        var dialog = {
            title: title,
            content: content,
            btnYN: btnYN,
            access: {
                yes: yesFun,
                no: noFun,
                choose: choose
            }
        };
        this.appservice.faiSay(dialog);
    };
    ;
    fai2Component.prototype.alertError = function (mess) {
        this.showPopup("Error", mess, false, "none", "none", "none");
    };
    fai2Component.prototype.openBarcodeScanner = function () {
        PCCMP.camera.openBarcodeScanner(this.barcodeScanHandler);
    };
    fai2Component.prototype.closeBarcodeScanner = function () {
        PCCMP.camera.closeBarcodeScanner();
    };
    // get location & open barcode - camera
    fai2Component.prototype.onSelect = function () {
        var _this = this;
        var invTable = PCCMP.database.getTable('inv_location');
        invTable.get('plan_id = ' + this.appservice.tmp)
            .then(function (results) {
            _this.locs = results.rows;
            _this.openBarcodeScanner();
            _this.dropdownListModel = _this.locs[1];
        })
            .then(function () {
            _this.dropdownListModel = _this.appservice.selectedLoc;
            //this.alertError(JSON.stringify(this.dropdownListModel));
        }).catch(function (error) {
            _this.alertError('get data inv_location fail :' + JSON.stringify(error));
        });
    };
    // handling when use click record button
    fai2Component.prototype.handleRecordBtn = function () {
        if (this.appservice.selectedLoc == "") {
            this.showPopup('System information', 'Need to select location first!', false, "", "", "");
        }
        else {
            this.closeBarcodeScanner();
            this.router.navigate(['/fai4']);
        }
    };
    // handling when use click record button
    fai2Component.prototype.handleInvCheckBtn = function () {
        if (this.appservice.selectedLoc == "") {
            this.showPopup('System information', 'Need to select location first!', false, "", "", "");
        }
        else {
            this.closeBarcodeScanner();
            this.router.navigate(['/fai3']);
        }
    };
    // handling select loccation
    fai2Component.prototype.handleSelectLoc = function (event) {
        this.appservice.selectedLoc = JSON.parse(event);
        this.dropdownListModel = JSON.parse(event);
        //this.alertError(JSON.stringify(loc));
    };
    // handling back to fai1
    fai2Component.prototype.handleBacktoFai1 = function () {
        this.closeBarcodeScanner();
        this.appservice.selectedLoc = "";
    };
    fai2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-2/fai-2.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */]) === "function" && _d || Object])
    ], fai2Component);
    return fai2Component;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=fai-2.component.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-3/fai-3.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- IMPORTANT: Do not include a weinre script tag as part of your release builds! -->\n<!-- Place your remote debugging weinre script URL here, if it does not work above. -->\n<div class=\"upage\" id=\"FAI-3\">\n    <div class=\"upage-outer\">\n        <!--Header-->\n        <div class=\"uib-header header-bg container-group inner-element uib_w_29\" data-uib=\"layout/header\" data-ver=\"0\">\n            <div class=\"widget-container wrapping-col single-centered\">\n                <h4>Inventory Check</h4>\n            </div>\n            <div class=\"widget-container content-area horiz-area wrapping-col left\">\n                <button (click)=\"handleBackBtn()\" class=\"btnexit btn widget uib_w_30 d-margins\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"1\">\n                            <i class=\"fa fa-chevron-left fa-2x button-icon-left\" data-position=\"left\"></i>\n                        </button>\n            </div>\n            <div class=\"widget-container content-area horiz-area wrapping-col right\"></div>\n        </div>\n        <!--End Header-->\n        <div class=\"upage-content ac0 content-area vertical-col left\">\n            <h4 class=\"col-xs-12\" >Location:<span style=\"font-size:15px;\"> {{appservice.selectedLoc.location_nm_zh_TW}} {{appservice.selectedLoc.location_nm_en}}</span></h4>\n            <!--QR code box-->\n\n            <!--End QR code box-->\n            <!--Asset number input-->\n            <div class=\"col-xs-12 record\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Asset No.\" [(ngModel)]=\"assetsNo\">\n                    <span class=\"input-group-btn\">\n                                <button class=\"btn btn-default btn-primary btn-submit\" type=\"button\" (click)=\"handleInputAst()\">Send</button>\n                            </span>\n                </div>\n                <!-- /input-group -->\n            </div>\n            <!--End Asset number input-->\n            <div class=\"col-xs-12 record\">\n                <textarea class=\"form-control\" rows=\"3\" disabled>\nProduct number: {{assetsNoTxt}}\nProduct name: {{assetsNmTxt}}\nOld  Product number: {{oldAssetsNoTxt}}\n                </textarea>\n            </div>\n            <!--Control button  -->\n            <div style=\"padding-bottom:10px;\">\n                <div class=\"btn-group uib-bs-flex widget uib_w_32 d-margins col-xs-12\" data-uib=\"twitter%20bootstrap/button_group\" data-ver=\"1\">\n                    <button class=\"btn widget uib_w_33 btn-default col-xs-4\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"1\"><i class=\"glyphicon glyphicon-list-alt button-icon-top\" data-position=\"top\"></i>To Do ({{tabObj.todo}})</button>\n                    <button class=\"btn widget uib_w_34 btn-default col-xs-4\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"1\"><i class=\"glyphicon glyphicon-check button-icon-top\" data-position=\"top\"></i>Checked ({{tabObj.checked}})</button>\n                    <button class=\"btn widget uib_w_35 btn-default col-xs-4\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"1\"><i class=\"glyphicon glyphicon-share-alt button-icon-top\" data-position=\"top\"></i>Extras ({{tabObj.extras}})</button>\n                </div>\n            </div>\n            <!--End control button  -->\n        </div>\n    </div>\n</div>\n<!-- Confirm dialog -->\n<!--<button class=\"btn btn-default btn-primary btn-submit\" id=\"btnCtrlModal\" style=\"display:none;\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalSend\"></button>\n<div class=\"modal fade\" id=\"modalSend\" role=\"dialog\" style=\"z-index: 999999;\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">System Information</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>This fixed-asset gain?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"confirmYesExtras()\">Yes</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"confirmNoExtras()\">No</button>\n            </div>\n        </div>\n    </div>\n</div>-->\n<!-- end Confirm dialog -->\n<!-- Company name list dialog -->\n<button class=\"btn btn-default btn-primary btn-submit\" id=\"btnCtrlComp\" style=\"display:none;\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalComp\"></button>\n<div class=\"modal fade\" id=\"modalComp\" role=\"dialog\" style=\"z-index: 999999;\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Assets No is duplicate, please choose a Company name</h4>\n            </div>\n            <div class=\"modal-body\">\n                <a class=\"list-group-item allow-badge widget uib_w_9\" *ngFor=\"let item of listCompany\" data-dismiss=\"modal\" (click)=\"handleChooseComp(item)\">{{item.comp_nm}}</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Company name list dialog -->\n\n<!--Sound beep double -->\n<audio id=\"beep2\" src=\"./assets/sound/beep_1_short_double.mp3\" autostart=\"false\" ></audio>\n<!-- Sound beep -->\n<audio id=\"beep1\" src=\"./assets/sound/beep_1_short.mp3\" autostart=\"false\" ></audio>"

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-3/fai-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fai3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var fai3Component = (function () {
    function fai3Component(router, elRef, zone, appservice) {
        var _this = this;
        this.router = router;
        this.elRef = elRef;
        this.appservice = appservice;
        this.tabObj = { todo: 0, checked: 0, extras: 0 };
        // the method ngOnInit will run some functions when loading page firstly
        this.subs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"];
        /**
       * Remember use the ES6 arrow function.
       */
        this.barcodeScanHandler = function (data) {
            console.log(new Date().toISOString());
            _this.zone.run(function () {
                _this.handleafterScanQrcode(data);
            });
        };
        this.zone = zone;
        this.subs = appservice.dialogSaid$.subscribe(function (mess) {
            if (mess.choose === "yes") {
                _this.confirmYesExtras();
            }
            if (mess.choose === "no") {
                _this.confirmNoExtras();
            }
        });
    }
    fai3Component.prototype.ngOnInit = function () {
        //alert(this.date.getFullYear()+''+this.date.getUTCMonth()+''+this.date.getDate());
        this.extrasModal = this.elRef.nativeElement.querySelector('#btnCtrlModal');
        this.compModal = this.elRef.nativeElement.querySelector('#btnCtrlComp');
        this.onSelect();
    };
    fai3Component.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    fai3Component.prototype.showPopup = function (title, content, btnYN, yesFun, noFun, choose) {
        var dialog = {
            title: title,
            content: content,
            btnYN: btnYN,
            access: {
                yes: yesFun,
                no: noFun,
                choose: choose
            }
        };
        this.appservice.faiSay(dialog);
    };
    ;
    fai3Component.prototype.alertError = function (mess) {
        this.showPopup("Error", mess, false, "none", "none", "none");
    };
    fai3Component.prototype.openBarcodeScanner = function () {
        PCCMP.camera.openBarcodeScanner(this.barcodeScanHandler);
    };
    fai3Component.prototype.closeBarcodeScanner = function () {
        PCCMP.camera.closeBarcodeScanner();
    };
    // get location & open barcode - camera
    fai3Component.prototype.onSelect = function () {
        var _this = this;
        this.openBarcodeScanner();
        // get user profile
        PCCMP.user.getProfile().then(function (res) {
            _this.user = res;
        }).catch(function (error) {
            _this.alertError("error when get user profile :" + JSON.stringify(error));
        });
        /**
         * Count todo , checked, extras to show in tabs
         */
        PCCMP.database.executeSql('select (select count(*) from inv_ast where location_id=' + this.appservice.selectedLoc.location_id + ' and id NOT IN (select c.id from inv_checked c, inv_ast a where c.id = a.id)) todo, (select count(*) from inv_checked c, inv_ast a where c.id = a.id and c.location_id =' + this.appservice.selectedLoc.location_id + ') checked, (select count(*) from inv_checked c where (c.id = "" or c.id is NULL) and c.location_id = ' + this.appservice.selectedLoc.location_id + ') extras')
            .then(function (results) {
            _this.tabObj = { todo: results.rows[0].todo, checked: results.rows[0].checked, extras: results.rows[0].extras };
        }).catch(function (error) {
            _this.alertError('get sqlite data fail : ' + JSON.stringify(error));
        });
    };
    // handling back button
    fai3Component.prototype.handleBackBtn = function () {
        this.router.navigate(['/fai2']);
    };
    /**
     * handle insert assets when scan QR code
     */
    fai3Component.prototype.handleafterScanQrcode = function (data) {
        var _this = this;
        var soundExtras = this.elRef.nativeElement.querySelector('#beep2');
        var soundSuccess = this.elRef.nativeElement.querySelector('#beep1');
        var res = data.split(",");
        if (res[1] == undefined) {
            this.assetsNo = data;
            // play two beep mean scan Assets belong this location
            soundExtras.play();
            this.showPopup("System Information", "This fixed-asset gain?", true, "", "", "");
            return;
        }
        PCCMP.database.executeSql('select *, count(*) num from inv_ast a, inv_location l, inv_sheets s where s.plan_id = l.plan_id and  a.location_id = l.location_id and s.plan_id = ' + this.appservice.tmp + ' and l.location_id = ' + this.appservice.selectedLoc.location_id + ' and a.ast_no = "' + res[1] + '" and a.ast_global_id = "' + res[0] + '"')
            .then(function (results) {
            if (results.rows[0].num > 0) {
                // play one beep mean scan Assets belong this location
                soundSuccess.play();
                PCCMP.database.executeSql('select *, count(*) count_ast from inv_checked c where c.plan_id = ' + _this.appservice.tmp + ' and c.location_id = ' + _this.appservice.selectedLoc.location_id + ' and c.ast_no = "' + res[1] + '" and c.ast_global_id = "' + res[0] + '"')
                    .then(function (result_count) {
                    // Check assets insert only 1
                    if (result_count.rows[0].count_ast == 0) {
                        var ast = results.rows[0];
                        // call function to insert into inv_checked
                        _this.insertInv_checked(ast);
                    }
                    else {
                        // // call function to insert into inv_checked : post: checked_date
                        _this.assetsNoTxt = res[1];
                        _this.assetsNmTxt = results.rows[0].ast_nm_zh_tw + "" + results.rows[0].ast_nm_en;
                        _this.oldAssetsNoTxt = results.rows[0].ast_no_bk;
                        _this.updateInv_checked(results.rows[0].id);
                    }
                }).catch(function (error) {
                    _this.alertError('search asset_no in inventory fail: ' + JSON.stringify(error));
                });
            }
            else {
                // play two beep mean scan Assets belong this location
                soundExtras.play();
                _this.showPopup("System Information", "Is extra item?", true, "", "", "");
            }
        })
            .catch(function () {
        });
    };
    /**
     * handle insert assets when manual input
     */
    fai3Component.prototype.handleInputAst = function () {
        var _this = this;
        if (this.appservice.selectedLoc.location_id == undefined)
            this.alertError("Need to select location first !");
        else if (this.assetsNo != "" && this.assetsNo != undefined) {
            PCCMP.database.executeSql('select * from inv_ast a, inv_location l, inv_sheets s where s.plan_id = l.plan_id and a.location_id = l.location_id and s.plan_id = ' + this.appservice.tmp + ' and l.location_id = ' + this.appservice.selectedLoc.location_id + ' and UPPER(a.ast_no) = UPPER("' + this.assetsNo + '")')
                .then(function (results) {
                /**
                 * Check asset exists in inventory list
                 * if exists => insert value format : checked
                 */
                if (results.rowsLength == 1) {
                    PCCMP.database.executeSql('select *,count(*) count_ast from inv_checked c where c.plan_id = ' + _this.appservice.tmp + ' and c.location_id = ' + _this.appservice.selectedLoc.location_id + ' and UPPER(c.ast_no) = UPPER("' + _this.assetsNo + '")')
                        .then(function (result_count) {
                        // Check assets insert only 1
                        if (result_count.rows[0].count_ast == 0) {
                            // call function to insert into inv_checked
                            _this.insertInv_checked(results.rows[0]);
                        }
                        else {
                            // // call function to insert into inv_checked : post: checked_date
                            _this.updateInv_checked(results.rows[0].id);
                            _this.assetsNoTxt = results.rows[0].ast_no;
                            _this.assetsNmTxt = results.rows[0].ast_nm_zh_tw + "" + results.rows[0].ast_nm_en;
                            _this.oldAssetsNoTxt = results.rows[0].ast_no_bk;
                        }
                    }).catch(function (error) {
                        _this.alertError('search asset_no in inventory fail: ' + JSON.stringify(error));
                    });
                }
                else if (results.rowsLength > 1) {
                    _this.listCompany = results.rows;
                    _this.compModal.click();
                }
                else {
                    _this.showPopup("System Information", "This fixed-asset gain?", true, "", "", "");
                }
            }).catch(function (error) {
                _this.alertError('search asset_no in inventory fail: ' + JSON.stringify(error));
            });
        }
        else {
            this.alertError("please input Asset No !");
        }
    };
    fai3Component.prototype.insertInv_checked = function (ast) {
        var _this = this;
        var date = new Date();
        PCCMP.database.executeSql('insert into inv_checked(id, ast_global_id, ast_no, plan_id, location_id, inv_checker, memo, idle_mk, checked_date, attr_update_date) values(' + ast.id + ',"' + ast.ast_global_id + '", "' + ast.ast_no + '", ' + this.appservice.tmp + ', ' + this.appservice.selectedLoc.location_id + ', "' + this.user.login + '", "", "", "' + date.getTime() + '", "")')
            .then(function (result_insert) {
            _this.assetsNo = "";
            _this.assetsNoTxt = ast.ast_no;
            _this.assetsNmTxt = ast.ast_nm_zh_tw + "" + ast.ast_nm_en;
            _this.oldAssetsNoTxt = ast.ast_no_bk;
            // count again todo, checked
            _this.tabObj.todo = _this.tabObj.todo - 1;
            _this.tabObj.checked = _this.tabObj.checked + 1;
        }).catch(function (error) {
            _this.alertError('Insert into inv_checked fail: ' + JSON.stringify(error));
        });
    };
    fai3Component.prototype.updateInv_checked = function (id) {
        var _this = this;
        var date = new Date();
        PCCMP.database.executeSql('update inv_checked set checked_date = "' + date.getTime() + '" where id = ' + id)
            .then(function (result_insert) {
            _this.assetsNo = "";
        }).catch(function (error) {
            _this.alertError('update inv_checked fail: ' + JSON.stringify(error));
        });
    };
    fai3Component.prototype.confirmYesExtras = function () {
        var _this = this;
        var date = new Date();
        /**
         * check extras existed
         */
        PCCMP.database.executeSql('select *,count(*) num from inv_checked c, inv_location l, inv_sheets s where s.plan_id = l.plan_id and c.location_id = l.location_id and s.plan_id = ' + this.appservice.tmp + ' and l.location_id = ' + this.appservice.selectedLoc.location_id + ' and c.ast_no="' + this.assetsNo + '"')
            .then(function (res) {
            if (res.rows[0].num > 0) {
                _this.updateInv_checked(res.rows[0].id);
                _this.assetsNoTxt = _this.assetsNo;
                _this.assetsNmTxt = "";
                _this.oldAssetsNoTxt = "";
            }
            else {
                /**
                 * insert extras value
                 */
                PCCMP.database.executeSql('insert into inv_checked(id, ast_global_id, ast_no, plan_id, location_id, inv_checker, memo, idle_mk, checked_date, attr_update_date) values(NULL, "", "' + _this.assetsNo + '", ' + _this.appservice.tmp + ', ' + _this.appservice.selectedLoc.location_id + ', "' + _this.user.login + '", "", "", "' + date.getTime() + '", "" )')
                    .then(function (results) {
                    _this.assetsNoTxt = _this.assetsNo;
                    _this.assetsNo = "";
                    // count again extras
                    _this.tabObj.extras = _this.tabObj.extras + 1;
                }).catch(function (error) {
                    _this.alertError('Insert into inv_checked fail: ' + JSON.stringify(error));
                });
            }
        })
            .catch(function (error) {
            _this.alertError('inventory not exist: ' + JSON.stringify(error));
            return;
        });
    };
    fai3Component.prototype.confirmNoExtras = function () {
        this.showPopup("System Information", "Wrong location!", false, "", "", "");
    };
    fai3Component.prototype.handleChooseComp = function (e) {
        var _this = this;
        PCCMP.database.executeSql('select *,count(*) count_ast from inv_checked c where c.plan_id = ' + this.appservice.tmp + ' and c.location_id = ' + this.appservice.selectedLoc.location_id + ' and c.ast_global_id = "' + e.ast_global_id + '"')
            .then(function (result_count) {
            // Check assets insert only 1
            if (result_count.rows[0].count_ast == 0) {
                // call function to insert into inv_checked
                _this.insertInv_checked(e);
            }
            else {
                // // call function to insert into inv_checked : post: checked_date
                _this.updateInv_checked(e.id);
                _this.assetsNoTxt = e.ast_no;
                _this.assetsNmTxt = e.ast_nm_zh_tw + "" + e.ast_nm_en;
                _this.oldAssetsNoTxt = e.ast_no_bk;
            }
        }).catch(function (error) {
            _this.alertError('test inv_checked insert or not - company name case: ' + JSON.stringify(error));
        });
    };
    fai3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-3/fai-3.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */]) === "function" && _d || Object])
    ], fai3Component);
    return fai3Component;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=fai-3.component.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-4/fai-4.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- IMPORTANT: Do not include a weinre script tag as part of your release builds! -->\n<!-- Place your remote debugging weinre script URL here, if it does not work above. -->\n\n<div class=\"upage\" id=\"FAI-4\">\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"upage-outer\">\n            <div class=\"uib-header header-bg container-group inner-element uib_w_8\" data-uib=\"layout/header\" data-ver=\"0\">\n                <!--Header-->\n                <div class=\"widget-container wrapping-col single-centered\">\n                    <div class=\"tarea widget uib_w_10 d-margins\" data-uib=\"media/text\" data-ver=\"0\" name=\"uib_w_10\">\n                        <div class=\"widget-container left-receptacle\"></div>\n                        <div class=\"widget-container right-receptacle\"></div>\n                        <div class=\"text-container\">\n                            <h4>Records</h4>\n                        </div>\n                    </div>\n                </div>\n                <!--End Header-->\n                <div class=\"widget-container content-area horiz-area wrapping-col left\">\n                    <button (click)=\"handleBack()\" class=\"btn widget uib_w_9 d-margins btnexit\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"1\">\n                        <i class=\"fa-2x fa fa-chevron-left button-icon-left\" data-position=\"left\"></i>\n                    </button>\n                </div>\n                <div class=\"widget-container content-area horiz-area wrapping-col right\"></div>\n            </div>\n            <!--Tab control-->\n            <div class=\"upage-content ac0 content-area vertical-col left\" id=\"page_37_44\">\n                <ul class=\"nav widget uib_w_11 nav-tabs d-margins\" role=\"tablist\" data-uib=\"twitter%20bootstrap/tab_bar\" data-ver=\"1\">\n                    <li role=\"presentation\" class=\"col-xs-4 widget uib_w_12 text-center\" data-uib=\"twitter%20bootstrap/tab_item\" data-ver=\"1\"><a role=\"tab\" data-toggle=\"tab\" href=\"#FAI4home\">To Do({{todoTab? todoTab.length: 0}})</a>\n                    </li>\n                    <li role=\"presentation\" class=\"col-xs-4 widget uib_w_13 text-center\" id=\"checkedTab\" data-uib=\"twitter%20bootstrap/tab_item\" data-ver=\"1\"><a role=\"tab\" data-toggle=\"tab\" href=\"#FAI4menu1\">Checked({{checked?checked.length:0}})</a>\n                    </li>\n                    <li role=\"presentation\" class=\"col-xs-4 widget uib_w_14 text-center\" data-uib=\"twitter%20bootstrap/tab_item\" data-ver=\"1\"><a role=\"tab\" data-toggle=\"tab\" href=\"#FAI4menu2\">Extras({{extras?extras.length:0}})</a>\n                    </li>\n                </ul>\n            </div>\n            <!--End tab control-->\n        </div>\n    </nav>\n    <div class=\"tab-content\">\n        <!--Tab 1 data-->\n        <div id=\"FAI4home\" class=\"tab-pane fade in active fai4-tab\">\n            <div class=\"widget-container content-area vertical-col\">\n                <div class=\"list-group widget uib_w_49 d-margins\">\n                    <a (click)=\"handleTodo(item)\" class=\"list-group-item allow-badge widget uib_w_50\" *ngFor=\"let item of todoTab\">\n                        <!--<h5 class=\"list-group-item-heading\">{{appservice.locale == \"zh\" ?item.ast_nm_zh_tw: item.ast_nm_en}}</h5>-->\n                        <h5 class=\"list-group-item-heading\">{{item.comp_nm}} / {{item.ast_no}}</h5>\n                    </a>\n                </div>\n                <span class=\"uib_shim\"></span>\n            </div>\n        </div>\n        <!--End tab 1 data-->\n        <!--Tab 2 data-->\n        <div id=\"FAI4menu1\" class=\"tab-pane fade fai4-tab\">\n            <div class=\"widget-container content-area vertical-col\">\n                <div class=\"list-group widget uib_w_53 d-margins\" data-uib=\"twitter%20bootstrap/list_group\" data-ver=\"1\">\n                    <a (click)=\"handleChecked(check)\" class=\"list-group-item allow-badge widget uib_w_54\" data-uib=\"twitter%20bootstrap/list_item\"\n                        data-ver=\"1\" *ngFor=\"let check of checked\">\n                        <!--<h5 class=\"list-group-item-heading\">{{appservice.locale == \"zh\" ?check.ast_nm_zh_tw: check.ast_nm_en}}</h5>-->\n                        <h5 class=\"list-group-item-heading\">{{check.comp_nm}} / {{check.ast_no}}</h5>\n                    </a>\n                </div>\n                <span class=\"uib_shim\"></span>\n            </div>\n        </div>\n        <!--End tab 2 data-->\n        <!--Tab 3 data-->\n        <div id=\"FAI4menu2\" class=\"tab-pane fade fai4-tab\">\n            <div class=\"widget-container content-area vertical-col\">\n                <div class=\"list-group widget uib_w_69 d-margins\" data-uib=\"twitter%20bootstrap/list_group\" data-ver=\"1\" *ngFor=\"let item of extras\">\n                    <div class=\"input-group\">\n                        <a class=\"form-control\" (click)=\"handleExtras()\" style=\"text-decoration:none;\">{{item.ast_no}}</a>\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\" (click)=\"deleteExtras(item)\"><i class=\"glyphicon glyphicon-trash\" data-position=\"icon only\"></i></button>\n                        </span>\n                    </div>\n                </div>\n                <span class=\"uib_shim\"></span>\n            </div>\n        </div>\n        <!--End tab 3 data-->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-4/fai-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fai4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js__ = __webpack_require__("../../../../../../enzoAppv1.6/src/assets/js/sdk.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var fai4Component = (function () {
    function fai4Component(elRef, router, appservice) {
        var _this = this;
        this.elRef = elRef;
        this.router = router;
        this.appservice = appservice;
        window.onerror = function (message) { alert(message); return true; };
        this.subs = appservice.dialogSaid$.subscribe(function (mess) {
            if (mess.choose === "yes") {
                _this.confirmDeleteExtras();
            }
        });
    }
    // the method ngOnInit will run some functions when loading page firstly
    fai4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.extrasModal = this.elRef.nativeElement.querySelector('#btnCtrlModal');
        // when window appear scroll bar, it will run ngAfterViewInit method
        window.onresize = function () {
            _this.ngAfterViewInit();
        };
        this.onSelect();
    };
    fai4Component.prototype.showPopup = function (title, content, btnYN, yesFun, noFun, choose) {
        var dialog = {
            title: title,
            content: content,
            btnYN: btnYN,
            access: {
                yes: yesFun,
                no: noFun,
                choose: choose
            }
        };
        this.appservice.faiSay(dialog);
    };
    ;
    fai4Component.prototype.alertError = function (mess) {
        this.showPopup("Error", mess, false, "none", "none", "none");
    };
    fai4Component.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    fai4Component.prototype.ngAfterViewInit = function () {
        //set height for div has id = FAI4home to show scroll bar when overload height
        var div = document.getElementsByClassName("fai4-tab");
        div[0].style.height = window.innerHeight - 130 + "px";
        div[1].style.height = window.innerHeight - 130 + "px";
        div[2].style.height = window.innerHeight - 130 + "px";
    };
    /**
     * todo = ast - checked
     */
    fai4Component.prototype.onSelect = function () {
        var _this = this;
        PCCMP.database
            .executeSql('select * from inv_ast where location_id=' + this.appservice.selectedLoc.location_id + ' and id NOT IN (select c.id from inv_checked c, inv_ast a where c.id = a.id and c.location_id =' + this.appservice.selectedLoc.location_id + ')')
            .then(function (res) {
            _this.todoTab = res.rows;
        })
            .then(function () {
            PCCMP.database
                .executeSql('select a.* from inv_checked c, inv_ast a where c.id = a.id and c.location_id =' + _this.appservice.selectedLoc.location_id)
                .then(function (res2) {
                _this.checked = res2.rows;
            })
                .then(function () {
                PCCMP.database
                    .executeSql('select * from inv_checked c where (c.id = "" or c.id is NULL) and c.location_id = ' + _this.appservice.selectedLoc.location_id)
                    .then(function (res3) {
                    _this.extras = res3.rows;
                }).catch(function (error) {
                    alert('error : ' + JSON.stringify(error));
                });
            })
                .catch(function (error) {
                alert('error : ' + JSON.stringify(error));
            });
        })
            .catch(function (error) {
            alert('error : ' + JSON.stringify(error));
        });
    };
    fai4Component.prototype.handleBack = function () {
        this.router.navigate(['/fai2']);
    };
    fai4Component.prototype.handleTodo = function (ast) {
        this.appservice.selectedAst = ast.id;
        this.appservice.typeAstTable = 'inv_ast';
        this.router.navigate(['/fai5']);
    };
    fai4Component.prototype.handleChecked = function (ast) {
        this.appservice.selectedAst = ast.id;
        this.appservice.typeAstTable = 'inv_checked';
        this.router.navigate(['/fai5']);
    };
    fai4Component.prototype.deleteExtras = function (e) {
        this.showPopup("System Information", "Delete this extras data ?", true, "", "", "");
        this.tmp = e;
    };
    fai4Component.prototype.confirmDeleteExtras = function () {
        var _this = this;
        PCCMP.database.executeSql('delete from inv_checked where ast_no = "' + this.tmp.ast_no + '"')
            .then(function (res2) {
            var index = _this.extras.indexOf(_this.tmp);
            if (index !== -1) {
                _this.extras.splice(index, 1);
            }
        })
            .catch(function (error) {
            alert('error when delete extras: ' + JSON.stringify(error));
        });
    };
    fai4Component.prototype.handleExtras = function () {
        this.showPopup("System Information", "No this fixed-assets data", false, "", "", "");
    };
    fai4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-4/fai-4.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */]) === "function" && _c || Object])
    ], fai4Component);
    return fai4Component;
    var _a, _b, _c;
}());

//# sourceMappingURL=fai-4.component.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-5/fai-5.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- IMPORTANT: Do not include a weinre script tag as part of your release builds! -->\n<!-- Place your remote debugging weinre script URL here, if it does not work above. -->\n\n<div class=\"upage\" id=\"FAI-5\">\n    <div class=\"upage-outer\">\n        <!--Header-->\n        <div class=\"uib-header header-bg container-group inner-element uib_w_31\" data-uib=\"layout/header\" data-ver=\"0\">\n            <h2></h2>\n            <div class=\"widget-container wrapping-col single-centered\">\n                <h4>Asset Infomation</h4>\n            </div>\n            <div class=\"widget-container content-area horiz-area wrapping-col left\">\n                <button (click)=\"handleBack()\" class=\"btnexit btn widget uib_w_32 d-margins\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"1\">\n                            <i class=\"fa fa-chevron-left fa-2x button-icon-left\" data-position=\"left\"></i>\n                        </button>\n            </div>\n            <div class=\"widget-container content-area horiz-area wrapping-col right\"></div>\n        </div>\n        <!--End Header-->\n        <!--Body data-->\n        <div class=\"upage-content ac0 content-area vertical-col left\" id=\"page_14_12\">\n            <div class=\"list-group widget uib_w_59 d-margins\" data-uib=\"twitter%20bootstrap/list_group\" data-ver=\"1\" *ngIf=\"listView\">\n                <a class=\"list-group-item allow-badge widget uib_w_60\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Asset No.:{{listView.ast_no}}</h5>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_61\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Product Name (TW): {{listView.ast_nm_zh_tw}}</h5>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_62\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Product Name (EN): {{listView.ast_nm_en}}</h5>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_63\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Style: {{listView.style_no}}</h5>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_64\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Brand: {{listView.brand_nm}}</h5>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_65\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Filling Date: {{listView.pur_date_fact}}</h5>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_66\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">State: </h5>\n                    <select [disabled]=\"this.appservice.typeAstTable == 'inv_ast'\"  class=\"wide-control form-control default\" [ngModel]=\"idleMkValue | json\"\n                        (ngModelChange)=\"handleSelectState($event)\">\n                                <option [value]=\"item | json\" *ngFor=\"let item of stateList\">{{appservice.locale == \"zh\" ?item.nm_zh_tw: item.nm_en}}</option>\n                            </select>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_67\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Custodian: {{listView.keeper_nm}}</h5>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_68\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Note</h5>\n                    <textarea [disabled]=\"this.appservice.typeAstTable == 'inv_ast'\" rows=\"2\" class=\"wide-control form-control\" wrap=\"soft\" [(ngModel)]=\"listView.memo\">{{listView.memo}}</textarea>\n                </a>\n                <a class=\"list-group-item allow-badge widget uib_w_67\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\">\n                    <h5 class=\"list-group-item-heading\">Old  Product number: {{listView.ast_no_bk}}</h5>\n                </a>\n            </div>\n\n        </div>\n        <!--End body data-->\n    </div>\n</div>\n<!-- Modal (Dialog) -->\n<fai-dialog></fai-dialog>"

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/fai-5/fai-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fai5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js__ = __webpack_require__("../../../../../../enzoAppv1.6/src/assets/js/sdk.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_js_sdk_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var fai5Component = (function () {
    function fai5Component(elRef, appservice, router) {
        this.elRef = elRef;
        this.appservice = appservice;
        this.router = router;
        this.subs = appservice.dialogSaid$.subscribe(function (mess) { return mess; });
    }
    // the method ngOnInit will run some functions when loading page firstly
    fai5Component.prototype.ngOnInit = function () {
        var _this = this;
        // when window appear scroll bar, it will run ngAfterViewInit method
        window.onresize = function () {
            _this.ngAfterViewInit();
        };
        this.onSelect();
    };
    fai5Component.prototype.alertError = function (mess) {
        var dialog = {
            title: "Error",
            content: mess,
            btnYN: false,
            access: { yes: "none", no: "none", choose: "none" }
        };
        this.appservice.faiSay(dialog);
    };
    fai5Component.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    fai5Component.prototype.ngAfterViewInit = function () {
        //set height for div has id = FAI4home to show scroll bar when overload height
        var div = this.elRef.nativeElement.querySelector('#FAI-5 .upage-outer .upage-content');
        div.style.height = window.innerHeight - 48 + "px";
    };
    fai5Component.prototype.onSelect = function () {
        var _this = this;
        if (this.appservice.typeAstTable === 'inv_ast') {
            PCCMP.database
                .executeSql('select * from inv_ast where id=' + this.appservice.selectedAst)
                .then(function (res) {
                _this.listView = res.rows[0];
            })
                .then(function () {
                PCCMP.database.executeSql('select * from inv_parameter')
                    .then(function (res_ast) {
                    _this.stateList = res_ast.rows;
                    for (var i in _this.stateList) {
                        if (_this.stateList[i].no === _this.listView.idle_mk) {
                            _this.idleMkValue = _this.stateList[i];
                        }
                    }
                }).catch(function (error) {
                    alert('get data inv_parameter fail: ' + JSON.stringify(error));
                });
            })
                .catch(function (error) {
                alert('get data inv_ast fail: ' + JSON.stringify(error));
            });
        }
        else {
            PCCMP.database
                .executeSql('select c.idle_mk, c.memo, a.ast_global_id, a.id, a.location_id, a.ast_no, a.comp_nm, a.ast_nm_zh_tw, a.ast_nm_en, a.style_no, a.brand_nm, a.pur_date_fact, a.keeper_nm from inv_checked c,inv_ast a where a.id=c.id and a.id=' + this.appservice.selectedAst)
                .then(function (res) {
                _this.listView = res.rows[0];
            })
                .then(function () {
                PCCMP.database.executeSql('select * from inv_parameter')
                    .then(function (res_ast) {
                    _this.stateList = res_ast.rows;
                    for (var i in _this.stateList) {
                        if (_this.stateList[i].no === _this.listView.idle_mk) {
                            _this.idleMkValue = _this.stateList[i];
                        }
                    }
                }).catch(function (error) {
                    alert('get data inv_parameter fail: ' + JSON.stringify(error));
                });
            })
                .catch(function (error) {
                alert('get data inv_ast fail: ' + JSON.stringify(error));
            });
        }
    };
    fai5Component.prototype.handleBack = function () {
        var _this = this;
        if (this.appservice.typeAstTable === "inv_checked") {
            PCCMP.database
                .executeSql('update inv_checked set idle_mk="' + this.idleMkValue.no + '",memo="' + this.listView.memo + '" where id=' + this.listView.id)
                .then(function () {
                _this.router.navigate(['/fai4']);
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        }
        else {
            this.router.navigate(['/fai4']);
        }
    };
    fai5Component.prototype.handleSelectState = function (event) {
        this.idleMkValue = JSON.parse(event);
        //alert(JSON.stringify(loc));
    };
    fai5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../../enzoAppv1.6/src/app/fai-5/fai-5.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], fai5Component);
    return fai5Component;
    var _a, _b, _c;
}());

//# sourceMappingURL=fai-5.component.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/app/md5.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md5; });
/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
  

*/
var Md5 = (function () {
    function Md5() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    Md5.hashStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    };
    ;
    Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    };
    ;
    Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    };
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, code, i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw 'Unicode standard supports code points up to U+10FFFF';
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, i, j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, i, j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.getState = function () {
        var self = this, s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    };
    Md5.prototype.setState = function (state) {
        var buf = state.buffer, x = state.state, s = this._state, i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    };
    Md5.prototype.end = function (raw) {
        if (raw === void 0) { raw = false; }
        var bufLen = this._bufferLength, buf8 = this._buffer8, buf32 = this._buffer32, i = (bufLen >> 2) + 1, dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/), lo = parseInt(matches[2], 16), hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    };
    Md5._hex = function (x) {
        var hc = Md5.hexChars, ho = Md5.hexOut, n, offset, j, i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    };
    Md5._md5cycle = function (x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    };
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    return Md5;
}());

if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/assets/js/sdk.js":
/***/ (function(module, exports) {

/*
 * PCC Mobile Platform SDK - v0.1.5
 * 2017/06/14
 */
(function (window) {

  // declare
  var sdk = {};
  var _barcodeScanHandler = null;
  var _ready = false;
  var _readyCallback = null;
  var _initData = null;
  var _callbackMap = new Object();
  var REQUIRE_APP_VERSION = '0.1.5';

  var _onMessage = function (event) {
    var eventDataText = event.data;
    if (eventDataText) {
      var eventData = JSON.parse(eventDataText);
      var module = eventData.module;
      var method = eventData.method;
      var data = eventData.data;
      switch (module) {
        case 'platform':
          if (method === 'ready') {
            onPlatformReady(data);
          } else {
            // getNetInfo
            handleCallbackData(eventData);
          }
          break;
        case 'camera':
          if (method === 'scanBarcode') {
            if (_barcodeScanHandler) {
              _barcodeScanHandler(data);
            }
          }
          break;
        case 'user':
          handleCallbackData(eventData);
          break;
        case 'database':
          // buildSchema, tableGet, tableGetCount, executeSql, sqlBatch
          handleCallbackData(eventData);
          break;
        default:
          log.error('Cannot execute: [' + eventData.module + '.' + eventData.method +
            '], please upgrade SDK to the latest version.');
      }
    }
  };

  function onPlatformReady(data) {
    if (_ready === false) {
      _ready = true;
      _initData = {
        version: data.version,
        os: data.os
      };
      var compareResult = compareVersionNumbers(data.version, REQUIRE_APP_VERSION);
      if (compareResult < 0 || isNaN(compareResult)) {
        alert('Please update app version (current: '
        + data.version + ', require: ' + REQUIRE_APP_VERSION + ').');
      }
      if (_readyCallback) {
        _readyCallback(JSON.parse(JSON.stringify(_initData)));
      }
    }
  }

  function handleCallbackData(eventData) {
    var data = eventData.data;
    var key = eventData.callbackId;
    var successCb;
    var failCb;
    var cbObj = _callbackMap[key];
    if (cbObj) {
      successCb = cbObj.success;
      failCb = cbObj.fail;
    }
    if (eventData.success) {
      if (successCb) {
        successCb(data);
      }
    } else {
      if (failCb) {
        failCb(data);
      }
    }
    delete _callbackMap[key];
  }

  function generateGuid() {
    function _p8(s) {
      var p = (Math.random().toString(16) + "000000000").substr(2, 8);
      return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  }

  function isEmpty(x) {
    return (x === undefined || x === null || x === '');
  }

  function isNotEmpty(x) {
    return !isEmpty(x);
  }

  /**
   * Compare two software version numbers (e.g. 1.7.1)
   * Returns:
   *  0 if they're identical
   *  negative if v1 < v2
   *  positive if v1 > v2
   *  Nan if they in the wrong format
   */
  function compareVersionNumbers(v1, v2) {
    var v1parts = v1.split('.');
    var v2parts = v2.split('.');

    function isPositiveInteger(x) {
      return /^\d+$/.test(x);
    }

    // First, validate both numbers are true version numbers
    function validateParts(parts) {
      for (var i = 0; i < parts.length; ++i) {
        if (!isPositiveInteger(parts[i])) {
          return false;
        }
      }
      return true;
    }
    if (!validateParts(v1parts) || !validateParts(v2parts)) {
      return NaN;
    }
    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length === i) {
        return 1;
      }
      if (v1parts[i] === v2parts[i]) {
        continue;
      }
      if (v1parts[i] > v2parts[i]) {
        return 1;
      }
      return -1;
    }
    if (v1parts.length != v2parts.length) {
      return -1;
    }
    return 0;
  }

  function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }

  function postData(dataObj) {
    if (_ready) { // wait until ready
      window.postMessage(JSON.stringify(dataObj), '*');
    }
  }

  function postDataWithCallback(dataObj, successCallback, failCallback) {
    _callbackMap[dataObj.callbackId] = {
      success: successCallback,
      fail: failCallback
    }
    postData(dataObj);
  }

  // Module: Platform
  function Platform() {};

  /**
   * This method will be called when SDK is is fully loaded.
   * Must use ES6 arrow function.
   */
  Platform.prototype.ready = function () {
    return new Promise(function(resolve) {
      if (_initData !== null) {
        resolve(JSON.parse(JSON.stringify(_initData)));
      } else {
        var dataObj = {
          callbackId: generateGuid(),
          module: 'platform',
          method: 'ready'
        };
        _readyCallback = function(data) {
          resolve(data);
        };
        // TODO post ready back
        postDataWithCallback(dataObj, _readyCallback);
      }
    });
  }

  Platform.prototype.getNetInfo = function () {
    return new Promise(function(resolve) {
      var dataObj = {
        callbackId: generateGuid(),
        module: 'platform',
        method: 'getNetInfo'
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        }
      );
    });
  }

  Platform.prototype.exit = function () {
    var data = { // no callback
      module: 'platform',
      method: 'exit'
    };
    postData(data);
  }

  // Module: User
  function User() {};

  /**
   * Get user info.
   */
  User.prototype.getProfile = function () {
    return new Promise(function(resolve, reject) {
      var dataObj = {
        callbackId: generateGuid(),
        module: 'user',
        method: 'getProfile'
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  /**
   * Get user locale.
   */
  User.prototype.getLocale = function () {
    return new Promise(function(resolve, reject) {
      var dataObj = {
        callbackId: generateGuid(),
        module: 'user',
        method: 'getLocale'
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        }
      );
    });
  }

  // Module: Camera
  function Camera() {};

  /**
   * Open barcode scanner.
   *
   * @param {Function} handler
   */
  Camera.prototype.openBarcodeScanner = function (handler) {
    _barcodeScanHandler = handler;
    var dataObj = {
      module: 'camera',
      method: 'openBarcode'
    };
    postData(dataObj);
  };

  /**
   * Close barcode scanner.
   */
  Camera.prototype.closeBarcodeScanner = function () {
    _barcodeScanHandler = null;
    var dataObj = {
      module: 'camera',
      method: 'closeBarcode'
    };
    postData(dataObj);
  };

  // Module: Database
  function Database() {};

  function CreateTableBuilder(name) {
    this.name = name;
    this.primaryKey = null;
    this.addColumns = [];
    this.addIndexes = [];
  };

  CreateTableBuilder.prototype.addColumn = function (name, type, notNull, defaultValue) {
    var column = {
      name: name,
      type: type,
      notNull: isNotEmpty(notNull) ? notNull : false,
      defaultValue: defaultValue
    };
    this.addColumns.push(column);
    return this;
  }

  CreateTableBuilder.prototype.addPrimaryKey = function (pkArray, autoIncrement) {
    this.primaryKey = {
      columns: pkArray || [],
      autoIncrement: isNotEmpty(autoIncrement) ? autoIncrement : false
    }
    return this;
  }
  // pk cannot be removed

  CreateTableBuilder.prototype.addIndex = function (indexName, columns, unique) {
    var newIndex = {
      name: indexName,
      columns: columns,
      unique: isNotEmpty(unique) ? unique : false
    };
    this.addIndexes.push(newIndex);
    return this;
  }

  CreateTableBuilder.prototype.toPlainObject = function () {
    return {
      name: this.name,
      addColumns: this.addColumns,
      primaryKey: this.primaryKey,
      addIndexes: this.addIndexes
    };
  }

  function AlterTableBuilder(name) {
    this.name = name;
    this.batchExecArray = []; // alter table must batch exec
    // SQLite cannot alter these:
    // 1. remove column
    // 2. add or remove pk
  };

  AlterTableBuilder.prototype.addColumn = function (name, type, notNull, defaultValue) {
    var column = {
      name: name,
      type: type,
      notNull: isNotEmpty(notNull) ? notNull : false,
      defaultValue: defaultValue
    };
    this.batchExecArray.push({
      method: 'ADD_COLUMN',
      data: column
    });
    return this;
  }

  AlterTableBuilder.prototype.addIndex = function (indexName, columns, unique) {
    var newIndex = {
      name: indexName,
      columns: columns,
      unique: isNotEmpty(unique) ? unique : false
    };
    this.batchExecArray.push({
      method: 'ADD_INDEX',
      data: newIndex
    });
    return this;
  }

  AlterTableBuilder.prototype.removeIndex = function (indexName) {
    this.batchExecArray.push({
      method: 'REMOVE_INDEX',
      data: indexName
    });
    return this;
  }

  AlterTableBuilder.prototype.rename = function (newName) {
    this.batchExecArray.push({
      method: 'RENAME',
      data: newName
    });
    return this;
  }

  AlterTableBuilder.prototype.toPlainObject = function () {
    return {
      name: this.name,
      batchExecArray: this.batchExecArray
    };
  }

  function SchemaBuilder() {
    this.batchExecArray = [];
    // init current tables
  }

  SchemaBuilder.prototype.createTable = function (tableName) {
    var table = new CreateTableBuilder(tableName);
    this.batchExecArray.push({
      method: 'CREATE_TABLE',
      data: table
    });
    return table;
  }

  SchemaBuilder.prototype.alterTable = function (tableName) {
    var table = new AlterTableBuilder(tableName);
    this.batchExecArray.push({
      method: 'ALTER_TABLE',
      data: table
    });
    return table;
  }

  SchemaBuilder.prototype.dropTable = function (tableName) {
    this.batchExecArray.push({
      method: 'DROP_TABLE',
      data: tableName
    });
  }

  SchemaBuilder.prototype.build = function () {
    var self = this;
    return new Promise(function(resolve, reject) {
      var buildObj = {
        batchExecArray: []
      };
      for (var i = 0; i < self.batchExecArray.length; i++) {
        var execObj = self.batchExecArray[i];
        if (execObj.method === 'CREATE_TABLE' || execObj.method === 'ALTER_TABLE') {
          buildObj.batchExecArray.push({
            method: execObj.method,
            data: execObj.data.toPlainObject()
          });
        } else {
          buildObj.batchExecArray.push(execObj);
        }
      }
      var msgData = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'buildSchema',
        data: buildObj
      };
      postDataWithCallback(msgData,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  function Table(name) {
    this.name = name;
  }

  Table.prototype.get = function (whereCond, orderBy) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var condition = {
        name: self.name,
        where: undefined,
        params: [],
        orderBy: orderBy
      };
      if (isNotEmpty(whereCond) && whereCond.constructor === Array) {
        condition.where = whereCond[0];
        condition.params = whereCond[1];
      } else {
        condition.where = whereCond;
      }
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'tableGet',
        data: condition
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Table.prototype.getWithPaging = function (pageNumber, pageSize, whereCond, orderBy) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var condition = {
        page: pageNumber,
        pageSize: pageSize,
        name: self.name,
        where: undefined,
        params: [],
        orderBy: orderBy
      };
      if (isNotEmpty(whereCond) && whereCond.constructor === Array) {
        condition.where = whereCond[0];
        condition.params = whereCond[1];
      } else {
        condition.where = whereCond;
      }
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'tableGetWithPaging',
        data: condition
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Table.prototype.getCount = function (whereCond) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var condition = {
        name: self.name,
        where: undefined,
        params: []
      };
      if (isNotEmpty(whereCond) && whereCond.constructor === Array) {
        condition.where = whereCond[0];
        condition.params = whereCond[1];
      } else {
        condition.where = whereCond;
      }
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'tableGetCount',
        data: condition
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Table.prototype.insert = function(rows) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var condition = {
        name: self.name,
        rows: rows,
        replaceable: false
      };
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'tableInsert',
        data: condition
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Table.prototype.insertOrReplace = function(rows) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var condition = {
        name: self.name,
        rows: rows,
        replaceable: true
      };
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'tableInsert',
        data: condition
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Table.prototype.update = function (updateProp, whereCond) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var condition = {
        name: self.name,
        updateProp: updateProp,
        where: undefined,
        params: []
      };
      if (isNotEmpty(whereCond) && whereCond.constructor === Array) {
        condition.where = whereCond[0];
        condition.params = whereCond[1];
      } else {
        condition.where = whereCond;
      }
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'tableUpdate',
        data: condition
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Table.prototype.delete = function (whereCond) {
    var self = this;
    return new Promise(function(resolve, reject) {
      var condition = {
        name: self.name,
        where: undefined,
        params: []
      };
      if (isNotEmpty(whereCond) && whereCond.constructor === Array) {
        condition.where = whereCond[0];
        condition.params = whereCond[1];
      } else {
        condition.where = whereCond;
      }
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'tableDelete',
        data: condition
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Table.prototype.deleteAll = function () {
    return this.delete();
  }

  Database.prototype.getSchemaVersion = function () {
    return new Promise(function(resolve, reject) {
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'getSchemaVersion'
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  Database.prototype.setSchemaVersion = function (version) {
    return new Promise(function(resolve, reject) {
      if (isInt(version)) {
        var dataObj = {
          callbackId: generateGuid(),
          module: 'database',
          method: 'setSchemaVersion',
          data: version
        };
        postDataWithCallback(dataObj,
          function(data) {
            resolve(data);
          },
          function(error) {
            reject(error);
          }
        );
      } else {
        reject(new TypeError('Schema version must be integer.'));
      }
    });
  }

  Database.prototype.getSchemaBuilder = function () {
    return new SchemaBuilder();
  }

  Database.prototype.getTable = function (tableName) {
    return new Table(tableName);
  }

  Database.prototype.executeSql = function (sqlText, params) {
    return new Promise(function(resolve, reject) {
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'executeSql',
        data: {
          sql: sqlText,
          params: params || []
        }
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  };

  Database.prototype.sqlBatch = function (sqlBatchArray) {
    return new Promise(function(resolve, reject) {
      var dataObj = {
        callbackId: generateGuid(),
        module: 'database',
        method: 'sqlBatch',
        data: sqlBatchArray
      };
      postDataWithCallback(dataObj,
        function(data) {
          resolve(data);
        },
        function(error) {
          reject(error);
        }
      );
    });
  };

  sdk.platform = new Platform();
  sdk.user = new User();
  sdk.camera = new Camera();
  sdk.database = new Database();

  // your sdk init function
  sdk.init = function () {
    // ...
  };

  window.document.addEventListener('message', _onMessage);

  // define your namespace
  window.PCCMP = sdk;
})(window, undefined);


/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../../enzoAppv1.6/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../../../enzoAppv1.6/node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../../enzoAppv1.6/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../../enzoAppv1.6/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../../enzoAppv1.6/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
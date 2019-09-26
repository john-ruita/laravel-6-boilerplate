(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/admin-lte/dist/js/adminlte.min.js":
/*!********************************************************!*\
  !*** ./node_modules/admin-lte/dist/js/adminlte.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * AdminLTE v3.0.0-rc.1 (https://adminlte.io)
 * Copyright 2014-2019 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/almasaeed2010/AdminLTE/blob/master/LICENSE)
 */
!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";var t=function(e){var t="ControlSidebar",n="lte.controlsidebar",i=e.fn[t],s={COLLAPSED:"collapsed.lte.controlsidebar",EXPANDED:"expanded.lte.controlsidebar"},o=".control-sidebar",a=".control-sidebar-content",r='[data-widget="control-sidebar"]',l=".main-header",c=".main-footer",h="control-sidebar-animate",d="control-sidebar-open",u="control-sidebar-slide-open",f="layout-fixed",g="layout-navbar-fixed",_="layout-sm-navbar-fixed",p="layout-md-navbar-fixed",m="layout-lg-navbar-fixed",v="layout-xl-navbar-fixed",C="layout-footer-fixed",y="layout-sm-footer-fixed",w="layout-md-footer-fixed",D="layout-lg-footer-fixed",A="layout-xl-footer-fixed",E=function(){function t(e,t){this._element=e,this._config=t,this._init()}var i=t.prototype;return i.show=function(){this._config.controlsidebarSlide?(e("html").addClass(h),e("body").removeClass(u).delay(300).queue(function(){e(o).hide(),e("html").removeClass(h),e(this).dequeue()})):e("body").removeClass(d);var t=e.Event(s.EXPANDED);e(this._element).trigger(t)},i.collapse=function(){this._config.controlsidebarSlide?(e("html").addClass(h),e(o).show().delay(10).queue(function(){e("body").addClass(u).delay(300).queue(function(){e("html").removeClass(h),e(this).dequeue()}),e(this).dequeue()})):e("body").addClass(d);var t=e.Event(s.COLLAPSED);e(this._element).trigger(t)},i.toggle=function(){e("body").hasClass(d)||e("body").hasClass(u)?this.show():this.collapse()},i._init=function(){var t=this;this._fixHeight(),this._fixScrollHeight(),e(window).resize(function(){t._fixHeight(),t._fixScrollHeight()}),e(window).scroll(function(){(e("body").hasClass(d)||e("body").hasClass(u))&&t._fixScrollHeight()})},i._fixScrollHeight=function(){var t={scroll:e(document).height(),window:e(window).height(),header:e(l).outerHeight(),footer:e(c).outerHeight()},n=Math.abs(t.window+e(window).scrollTop()-t.scroll),i=e(window).scrollTop(),s=!1,r=!1;e("body").hasClass(f)&&((e("body").hasClass(g)||e("body").hasClass(_)||e("body").hasClass(p)||e("body").hasClass(m)||e("body").hasClass(v))&&"fixed"===e(l).css("position")&&(s=!0),(e("body").hasClass(C)||e("body").hasClass(y)||e("body").hasClass(w)||e("body").hasClass(D)||e("body").hasClass(A))&&"fixed"===e(c).css("position")&&(r=!0),0===i&&0===n?(e(o).css("bottom",t.footer),e(o).css("top",t.header),e(o+", "+o+" "+a).css("height",t.window-(t.header+t.footer))):n<=t.footer?!1===r?(e(o).css("bottom",t.footer-n),e(o+", "+o+" "+a).css("height",t.window-(t.footer-n))):e(o).css("bottom",t.footer):i<=t.header?!1===s?(e(o).css("top",t.header-i),e(o+", "+o+" "+a).css("height",t.window-(t.header-i))):e(o).css("top",t.header):!1===s?(e(o).css("top",0),e(o+", "+o+" "+a).css("height",t.window)):e(o).css("top",t.header))},i._fixHeight=function(){var t=e(window).height(),n=e(l).outerHeight(),i=e(c).outerHeight();if(e("body").hasClass(f)){var s=t-n;(e("body").hasClass(C)||e("body").hasClass(y)||e("body").hasClass(w)||e("body").hasClass(D)||e("body").hasClass(A))&&"fixed"===e(c).css("position")&&(s=t-n-i),e(o+" "+a).css("height",s),"undefined"!=typeof e.fn.overlayScrollbars&&e(o+" "+a).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})}},t._jQueryInterface=function(i){return this.each(function(){var s=e(this).data(n);if(s||(s=new t(this,e(this).data()),e(this).data(n,s)),"undefined"===s[i])throw new Error(i+" is not a function");s[i]()})},t}();return e(document).on("click",r,function(t){t.preventDefault(),E._jQueryInterface.call(e(this),"toggle")}),e.fn[t]=E._jQueryInterface,e.fn[t].Constructor=E,e.fn[t].noConflict=function(){return e.fn[t]=i,E._jQueryInterface},E}(jQuery),n=function(e){var t="Layout",n=e.fn[t],i=".main-header",s=".main-sidebar",o=".main-sidebar .sidebar",a=".content-wrapper",r=".main-footer",l="hold-transition",c="sidebar-focused",h="layout-fixed",d={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l"},u=function(){function t(e,t){this._config=t,this._element=e,this._init()}var n=t.prototype;return n.fixLayoutHeight=function(){var t={window:e(window).height(),header:e(i).outerHeight(),footer:e(r).outerHeight(),sidebar:e(o).height()},n=this._max(t);e("body").hasClass(h)?(e(a).css("min-height",n-t.header-t.footer),"undefined"!=typeof e.fn.overlayScrollbars&&e(o).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})):t.window>t.sidebar?e(a).css("min-height",t.window-t.header-t.footer):e(a).css("min-height",t.sidebar-t.header)},n._init=function(){var t=this;e("body").removeClass(l),this.fixLayoutHeight(),e(o).on("collapsed.lte.treeview expanded.lte.treeview collapsed.lte.pushmenu expanded.lte.pushmenu",function(){t.fixLayoutHeight()}),e(window).resize(function(){t.fixLayoutHeight()}),e("body, html").css("height","auto")},n._max=function(e){var t=0;return Object.keys(e).forEach(function(n){e[n]>t&&(t=e[n])}),t},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("lte.layout"),s=e.extend({},d,e(this).data());i||(i=new t(e(this),s),e(this).data("lte.layout",i)),"init"===n&&i[n]()})},t}();return e(window).on("load",function(){u._jQueryInterface.call(e("body"))}),e(o+" a").on("focusin",function(){e(s).addClass(c)}),e(o+" a").on("focusout",function(){e(s).removeClass(c)}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=n,u._jQueryInterface},u}(jQuery),i=function(e){var t="PushMenu",n=".lte.pushmenu",i=e.fn[t],s={COLLAPSED:"collapsed"+n,SHOWN:"shown"+n},o={autoCollapseSize:!1,screenCollapseSize:768,enableRemember:!1,noTransitionAfterReload:!0},a={TOGGLE_BUTTON:'[data-widget="pushmenu"]',SIDEBAR_MINI:".sidebar-mini",SIDEBAR_COLLAPSED:".sidebar-collapse",BODY:"body",OVERLAY:"#sidebar-overlay",WRAPPER:".wrapper"},r="sidebar-collapse",l="sidebar-open",c=function(){function t(t,n){this._element=t,this._options=e.extend({},o,n),this._init(),e(a.OVERLAY).length||this._addOverlay()}var i=t.prototype;return i.show=function(){e(a.BODY).addClass(l).removeClass(r),this._options.enableRemember&&localStorage.setItem("remember"+n,l);var t=e.Event(s.SHOWN);e(this._element).trigger(t)},i.collapse=function(){e(a.BODY).removeClass(l).addClass(r),this._options.enableRemember&&localStorage.setItem("remember"+n,r);var t=e.Event(s.COLLAPSED);e(this._element).trigger(t)},i.isShown=function(){return e(window).width()>=this._options.screenCollapseSize?!e(a.BODY).hasClass(r):e(a.BODY).hasClass(l)},i.toggle=function(){this.isShown()?this.collapse():this.show()},i.autoCollapse=function(){this._options.autoCollapseSize&&(e(window).width()<=this._options.autoCollapseSize?this.isShown()&&this.toggle():this.isShown()||this.toggle())},i.remember=function(){this._options.enableRemember&&(localStorage.getItem("remember"+n)==r&&(this._options.noTransitionAfterReload?e("body").addClass("hold-transition").addClass(r).delay(10).queue(function(){e(this).removeClass("hold-transition"),e(this).dequeue()}):e("body").addClass(r)))},i._init=function(){var t=this;this.remember(),this.autoCollapse(),e(window).resize(function(){t.autoCollapse()})},i._addOverlay=function(){var t=this,n=e("<div />",{id:"sidebar-overlay"});n.on("click",function(){t.collapse()}),e(a.WRAPPER).append(n)},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("lte.pushmenu"),s=e.extend({},o,e(this).data());i||(i=new t(this,s),e(this).data("lte.pushmenu",i)),"toggle"===n&&i[n]()})},t}();return e(document).on("click",a.TOGGLE_BUTTON,function(t){t.preventDefault();var n=t.currentTarget;"pushmenu"!==e(n).data("widget")&&(n=e(n).closest(a.TOGGLE_BUTTON)),c._jQueryInterface.call(e(n),"toggle")}),e(window).on("load",function(){c._jQueryInterface.call(e(a.TOGGLE_BUTTON))}),e.fn[t]=c._jQueryInterface,e.fn[t].Constructor=c,e.fn[t].noConflict=function(){return e.fn[t]=i,c._jQueryInterface},c}(jQuery),s=function(e){var t="Treeview",n=e.fn[t],i={SELECTED:"selected.lte.treeview",EXPANDED:"expanded.lte.treeview",COLLAPSED:"collapsed.lte.treeview",LOAD_DATA_API:"load.lte.treeview"},s=".nav-item",o=".nav-treeview",a=".menu-open",r='[data-widget="treeview"]',l="menu-open",c={trigger:r+" "+".nav-link",animationSpeed:300,accordion:!0},h=function(){function t(e,t){this._config=t,this._element=e}var n=t.prototype;return n.init=function(){this._setupListeners()},n.expand=function(t,n){var s=this,r=e.Event(i.EXPANDED);if(this._config.accordion){var c=n.siblings(a).first(),h=c.find(o).first();this.collapse(h,c)}t.stop().slideDown(this._config.animationSpeed,function(){n.addClass(l),e(s._element).trigger(r)})},n.collapse=function(t,n){var s=this,r=e.Event(i.COLLAPSED);t.stop().slideUp(this._config.animationSpeed,function(){n.removeClass(l),e(s._element).trigger(r),t.find(a+" > "+o).slideUp(),t.find(a).removeClass(l)})},n.toggle=function(t){var n=e(t.currentTarget),i=n.next();if(i.is(o)){t.preventDefault();var a=n.parents(s).first();a.hasClass(l)?this.collapse(e(i),a):this.expand(e(i),a)}},n._setupListeners=function(){var t=this;e(document).on("click",this._config.trigger,function(e){t.toggle(e)})},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("lte.treeview"),s=e.extend({},c,e(this).data());i||(i=new t(e(this),s),e(this).data("lte.treeview",i)),"init"===n&&i[n]()})},t}();return e(window).on(i.LOAD_DATA_API,function(){e(r).each(function(){h._jQueryInterface.call(e(this),"init")})}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=n,h._jQueryInterface},h}(jQuery),o=function(e){var t="DirectChat",n=e.fn[t],i="toggled{EVENT_KEY}",s='[data-widget="chat-pane-toggle"]',o=".direct-chat",a="direct-chat-contacts-open",r=function(){function t(e,t){this._element=e}return t.prototype.toggle=function(){e(this._element).parents(o).first().toggleClass(a);var t=e.Event(i);e(this._element).trigger(t)},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("lte.directchat");i||(i=new t(e(this)),e(this).data("lte.directchat",i)),i[n]()})},t}();return e(document).on("click",s,function(t){t&&t.preventDefault(),r._jQueryInterface.call(e(this),"toggle")}),e.fn[t]=r._jQueryInterface,e.fn[t].Constructor=r,e.fn[t].noConflict=function(){return e.fn[t]=n,r._jQueryInterface},r}(jQuery),a=function(e){var t="TodoList",n=e.fn[t],i='[data-widget="todo-list"]',s="done",o={onCheck:function(e){return e},onUnCheck:function(e){return e}},a=function(){function t(e,t){this._config=t,this._element=e,this._init()}var n=t.prototype;return n.toggle=function(t){t.parents("li").toggleClass(s),e(t).prop("checked")?this.check(t):this.unCheck(e(t))},n.check=function(e){this._config.onCheck.call(e)},n.unCheck=function(e){this._config.onUnCheck.call(e)},n._init=function(){var t=this;e(i).find("input:checkbox:checked").parents("li").toggleClass(s),e(i).on("change","input:checkbox",function(n){t.toggle(e(n.target))})},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("lte.todolist"),s=e.extend({},o,e(this).data());i||(i=new t(e(this),s),e(this).data("lte.todolist",i)),"init"===n&&i[n]()})},t}();return e(window).on("load",function(){a._jQueryInterface.call(e(i))}),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(jQuery),r=function(e){var t="CardWidget",n=".lte.cardwidget",i=e.fn[t],s={EXPANDED:"expanded"+n,COLLAPSED:"collapsed"+n,MAXIMIZED:"maximized"+n,MINIMIZED:"minimized"+n,REMOVED:"removed"+n},o={CARD:"card",COLLAPSED:"collapsed-card",WAS_COLLAPSED:"was-collapsed",MAXIMIZED:"maximized-card"},a={DATA_REMOVE:'[data-card-widget="remove"]',DATA_COLLAPSE:'[data-card-widget="collapse"]',DATA_MAXIMIZE:'[data-card-widget="maximize"]',CARD:"."+o.CARD,CARD_HEADER:".card-header",CARD_BODY:".card-body",CARD_FOOTER:".card-footer",COLLAPSED:"."+o.COLLAPSED},r={animationSpeed:"normal",collapseTrigger:a.DATA_COLLAPSE,removeTrigger:a.DATA_REMOVE,maximizeTrigger:a.DATA_MAXIMIZE,collapseIcon:"fa-minus",expandIcon:"fa-plus",maximizeIcon:"fa-expand",minimizeIcon:"fa-compress"},l=function(){function t(t,n){this._element=t,this._parent=t.parents(a.CARD).first(),t.hasClass(o.CARD)&&(this._parent=t),this._settings=e.extend({},r,n)}var n=t.prototype;return n.collapse=function(){var t=this;this._parent.children(a.CARD_BODY+", "+a.CARD_FOOTER).slideUp(this._settings.animationSpeed,function(){t._parent.addClass(o.COLLAPSED)}),this._parent.find(this._settings.collapseTrigger+" ."+this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);var n=e.Event(s.COLLAPSED);this._element.trigger(n,this._parent)},n.expand=function(){var t=this;this._parent.children(a.CARD_BODY+", "+a.CARD_FOOTER).slideDown(this._settings.animationSpeed,function(){t._parent.removeClass(o.COLLAPSED)}),this._parent.find(this._settings.collapseTrigger+" ."+this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);var n=e.Event(s.EXPANDED);this._element.trigger(n,this._parent)},n.remove=function(){this._parent.slideUp();var t=e.Event(s.REMOVED);this._element.trigger(t,this._parent)},n.toggle=function(){this._parent.hasClass(o.COLLAPSED)?this.expand():this.collapse()},n.maximize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon),this._parent.css({height:this._parent.height(),width:this._parent.width(),transition:"all .15s"}).delay(150).queue(function(){e(this).addClass(o.MAXIMIZED),e("html").addClass(o.MAXIMIZED),e(this).hasClass(o.COLLAPSED)&&e(this).addClass(o.WAS_COLLAPSED),e(this).dequeue()});var t=e.Event(s.MAXIMIZED);this._element.trigger(t,this._parent)},n.minimize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon),this._parent.css("cssText","height:"+this._parent[0].style.height+" !important;width:"+this._parent[0].style.width+" !important; transition: all .15s;").delay(10).queue(function(){e(this).removeClass(o.MAXIMIZED),e("html").removeClass(o.MAXIMIZED),e(this).css({height:"inherit",width:"inherit"}),e(this).hasClass(o.WAS_COLLAPSED)&&e(this).removeClass(o.WAS_COLLAPSED),e(this).dequeue()});var t=e.Event(s.MINIMIZED);this._element.trigger(t,this._parent)},n.toggleMaximize=function(){this._parent.hasClass(o.MAXIMIZED)?this.minimize():this.maximize()},n._init=function(t){var n=this;this._parent=t,e(this).find(this._settings.collapseTrigger).click(function(){n.toggle()}),e(this).find(this._settings.maximizeTrigger).click(function(){n.toggleMaximize()}),e(this).find(this._settings.removeTrigger).click(function(){n.remove()})},t._jQueryInterface=function(n){var i=e(this).data("lte.cardwidget");i||(i=new t(e(this),i),e(this).data("lte.cardwidget","string"==typeof n?i:n)),"string"==typeof n&&n.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)?i[n]():"object"==typeof n&&i._init(e(this))},t}();return e(document).on("click",a.DATA_COLLAPSE,function(t){t&&t.preventDefault(),l._jQueryInterface.call(e(this),"toggle")}),e(document).on("click",a.DATA_REMOVE,function(t){t&&t.preventDefault(),l._jQueryInterface.call(e(this),"remove")}),e(document).on("click",a.DATA_MAXIMIZE,function(t){t&&t.preventDefault(),l._jQueryInterface.call(e(this),"toggleMaximize")}),e.fn[t]=l._jQueryInterface,e.fn[t].Constructor=l,e.fn[t].noConflict=function(){return e.fn[t]=i,l._jQueryInterface},l}(jQuery),l=function(e){var t="CardRefresh",n=e.fn[t],i={LOADED:"loaded.lte.cardrefresh",OVERLAY_ADDED:"overlay.added.lte.cardrefresh",OVERLAY_REMOVED:"overlay.removed.lte.cardrefresh"},s={CARD:"card"},o={CARD:"."+s.CARD,DATA_REFRESH:'[data-card-widget="card-refresh"]'},a={source:"",sourceSelector:"",params:{},trigger:o.DATA_REFRESH,content:".card-body",loadInContent:!0,loadOnInit:!0,responseType:"",overlayTemplate:'<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',onLoadStart:function(){},onLoadDone:function(e){return e}},r=function(){function t(t,n){if(this._element=t,this._parent=t.parents(o.CARD).first(),this._settings=e.extend({},a,n),this._overlay=e(this._settings.overlayTemplate),t.hasClass(s.CARD)&&(this._parent=t),""===this._settings.source)throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.");this._init(),this._settings.loadOnInit&&this.load()}var n=t.prototype;return n.load=function(){this._addOverlay(),this._settings.onLoadStart.call(e(this)),e.get(this._settings.source,this._settings.params,function(t){this._settings.loadInContent&&(""!=this._settings.sourceSelector&&(t=e(t).find(this._settings.sourceSelector).html()),this._parent.find(this._settings.content).html(t)),this._settings.onLoadDone.call(e(this),t),this._removeOverlay()}.bind(this),""!==this._settings.responseType&&this._settings.responseType);var t=e.Event(i.LOADED);e(this._element).trigger(t)},n._addOverlay=function(){this._parent.append(this._overlay);var t=e.Event(i.OVERLAY_ADDED);e(this._element).trigger(t)},n._removeOverlay=function(){this._parent.find(this._overlay).remove();var t=e.Event(i.OVERLAY_REMOVED);e(this._element).trigger(t)},n._init=function(t){var n=this;e(this).find(this._settings.trigger).on("click",function(){n.load()})},t._jQueryInterface=function(n){var i=e(this).data("lte.cardrefresh"),s=e(this).data();i||(i=new t(e(this),s),e(this).data("lte.cardrefresh","string"==typeof n?i:n)),"string"==typeof n&&n.match(/load/)?i[n]():"object"==typeof n&&i._init(e(this))},t}();return e(document).on("click",o.DATA_REFRESH,function(t){t&&t.preventDefault(),r._jQueryInterface.call(e(this),"load")}),e.fn[t]=r._jQueryInterface,e.fn[t].Constructor=r,e.fn[t].noConflict=function(){return e.fn[t]=n,r._jQueryInterface},r}(jQuery),c=function(e){var t="Dropdown",n=e.fn[t],i="ul.dropdown-menu",s='[data-toggle="dropdown"]',o={},a=function(){function t(e,t){this._config=t,this._element=e}return t.prototype.toggleSubmenu=function(){this._element.siblings().show().toggleClass("show"),this._element.next().hasClass("show")||this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide(),this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(t){e(".dropdown-submenu .show").removeClass("show").hide()})},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("lte.dropdown"),s=e.extend({},o,e(this).data());i||(i=new t(e(this),s),e(this).data("lte.dropdown",i)),"toggleSubmenu"===n&&i[n]()})},t}();return e(i+" "+s).on("click",function(t){t.preventDefault(),t.stopPropagation(),a._jQueryInterface.call(e(this),"toggleSubmenu")}),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(jQuery);e.CardRefresh=l,e.CardWidget=r,e.ControlSidebar=t,e.DirectChat=o,e.Dropdown=c,e.Layout=n,e.PushMenu=i,e.TodoList=a,e.Treeview=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=adminlte.min.js.map

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/pace/pace.js":
/*!***********************************!*\
  !*** ./node_modules/pace/pace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if ((to[key] == null) && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! pace */ "./node_modules/pace/pace.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Pace;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/backend/after.js":
/*!***************************************!*\
  !*** ./resources/js/backend/after.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Loaded after adminlte app.js

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var admin_lte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin-lte */ "./node_modules/admin-lte/dist/js/adminlte.min.js");
/* harmony import */ var admin_lte__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(admin_lte__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/js/backend/before.js":
/*!****************************************!*\
  !*** ./resources/js/backend/before.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Loaded before adminlte app.js




/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/**
 * This bootstrap file is used for both frontend and backend
 */




 // Required for BS4


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a;
window._ = lodash__WEBPACK_IMPORTED_MODULE_0___default.a; // Lodash

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
  $('[data-method]').append(function () {
    if (!$(this).find('form').length > 0) {
      return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" + "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + '</form>\n';
    } else {
      return '';
    }
  }).attr('href', '#').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}
/**
 * Place any jQuery/helper plugins in here.
 */


$(function () {
  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();
  /**
   * Disable all submit buttons once clicked
   */

  $('form').submit(function () {
    $(this).find('input[type="submit"]').attr('disabled', true);
    $(this).find('button[type="submit"]').attr('disabled', true);
    return true;
  });
  /**
   * Generic confirm form delete using Sweet Alert
   */

  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'warning'
    }).then(function (result) {
      result.value && form.submit();
    });
  }).on('click', 'a[name=confirm_item]', function (e) {
    /**
     * Generic 'are you sure' confirm box
     */
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'info'
    }).then(function (result) {
      result.value && window.location.assign(link.attr('href'));
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
});

/***/ }),

/***/ 1:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/laravel-boilerplate/resources/js/backend/before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! /var/www/html/laravel-boilerplate/resources/js/backend/app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! /var/www/html/laravel-boilerplate/resources/js/backend/after.js */"./resources/js/backend/after.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWRtaW4tbHRlL2Rpc3QvanMvYWRtaW5sdGUubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhY2UvcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZnRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYmVmb3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BsdWdpbnMuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsImpRdWVyeSIsIlN3YWwiLCJfIiwiYXhpb3MiLCJyZXF1aXJlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYWRkRGVsZXRlRm9ybXMiLCJhcHBlbmQiLCJmaW5kIiwibGVuZ3RoIiwiYXR0ciIsInN1Ym1pdCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImxpbmsiLCJjYW5jZWwiLCJjb25maXJtIiwidGl0bGUiLCJmaXJlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInR5cGUiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJsb2NhdGlvbiIsImFzc2lnbiIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQW9ELFlBQVksU0FBc0YsQ0FBQyxrQkFBa0IsYUFBYSxrQkFBa0IsMkRBQTJELGdGQUFnRixtZkFBbWYsZ0JBQWdCLDRDQUE0QyxrQkFBa0IseUJBQXlCLDZHQUE2Ryx1REFBdUQsNEJBQTRCLDBCQUEwQiw0QkFBNEIsdUJBQXVCLCtGQUErRixrREFBa0QsMkNBQTJDLG9CQUFvQix5QkFBeUIsMkJBQTJCLDRCQUE0QixxQkFBcUIseUVBQXlFLG9CQUFvQixXQUFXLHNFQUFzRSxvQ0FBb0MsOEJBQThCLHFFQUFxRSxFQUFFLCtCQUErQixPQUFPLDBHQUEwRyx1RkFBdUYsbXpCQUFtekIseUJBQXlCLG1FQUFtRSwwQkFBMEIsVUFBVSxvUUFBb1EscUVBQXFFLDJEQUEyRCxHQUFHLGdDQUFnQyw0QkFBNEIsc0JBQXNCLGtIQUFrSCxPQUFPLEVBQUUsR0FBRyxHQUFHLDRDQUE0Qyw2REFBNkQsaUZBQWlGLG9DQUFvQyxHQUFHLHVCQUF1Qix5TEFBeUwsc0RBQXNELGNBQWMsZ0JBQWdCLDRDQUE0QyxrQkFBa0Isb0NBQW9DLE9BQU8sb0dBQW9HLGdCQUFnQixzSUFBc0kscUVBQXFFLDJEQUEyRCxrSEFBa0gsb0JBQW9CLFdBQVcsK0pBQStKLG9CQUFvQiw4QkFBOEIsb0JBQW9CLHVDQUF1QyxvQkFBb0IsUUFBUSwwQ0FBMEMsaUJBQWlCLElBQUksZ0NBQWdDLDRCQUE0Qiw4Q0FBOEMsbUJBQW1CLHdFQUF3RSxFQUFFLEdBQUcsR0FBRyxzQ0FBc0MsbUNBQW1DLG9DQUFvQyxpQkFBaUIscUNBQXFDLG9CQUFvQixpRkFBaUYsb0NBQW9DLEdBQUcsdUJBQXVCLGdEQUFnRCx3Q0FBd0MsSUFBSSx3RkFBd0YsSUFBSSxzS0FBc0ssb0RBQW9ELGdCQUFnQix5Q0FBeUMsMkRBQTJELGtCQUFrQix5QkFBeUIsd0dBQXdHLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLHdHQUF3RywyQkFBMkIsNEJBQTRCLHNCQUFzQix3R0FBd0cscUJBQXFCLDJDQUEyQywyQkFBMkIsZ0pBQWdKLHVCQUF1QiwwTEFBMEwseURBQXlELDBCQUEwQixvQkFBb0IsV0FBVyxnRUFBZ0UsaUJBQWlCLEVBQUUsMEJBQTBCLDBCQUEwQixxQkFBcUIsRUFBRSx3QkFBd0IsYUFBYSx5QkFBeUIsZ0NBQWdDLDRCQUE0QixnREFBZ0QsbUJBQW1CLHlFQUF5RSxFQUFFLEdBQUcsR0FBRywwREFBMEQsbUJBQW1CLHNCQUFzQiwyR0FBMkcsaUNBQWlDLDRDQUE0QyxpRkFBaUYsb0NBQW9DLEdBQUcsdUJBQXVCLDhCQUE4Qix1SUFBdUksOEZBQThGLDBEQUEwRCxjQUFjLGdCQUFnQiwrQkFBK0Isa0JBQWtCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLGlDQUFpQywyQkFBMkIsZ0RBQWdELG1CQUFtQiwwREFBMEQsdUNBQXVDLEVBQUUsMEJBQTBCLGtDQUFrQyx3REFBd0QsK0ZBQStGLEVBQUUsc0JBQXNCLG9DQUFvQyxZQUFZLG1CQUFtQiwyQkFBMkIseURBQXlELDhCQUE4QixXQUFXLHdEQUF3RCxZQUFZLEVBQUUsZ0NBQWdDLDRCQUE0QixnREFBZ0QsbUJBQW1CLDBFQUEwRSxFQUFFLEdBQUcsR0FBRywrQ0FBK0MscUJBQXFCLHdDQUF3QyxFQUFFLGlGQUFpRixvQ0FBb0MsR0FBRyx1QkFBdUIsd0NBQXdDLFVBQVUsbUdBQW1HLGdCQUFnQixnQkFBZ0IscUNBQXFDLG1EQUFtRCxpQkFBaUIsNEJBQTRCLGdDQUFnQyw0QkFBNEIscUNBQXFDLDhEQUE4RCxFQUFFLEdBQUcsR0FBRyw0Q0FBNEMsZ0VBQWdFLGlGQUFpRixvQ0FBb0MsR0FBRyx1QkFBdUIscUVBQXFFLG9CQUFvQixTQUFTLHVCQUF1QixVQUFVLGNBQWMsZ0JBQWdCLDRDQUE0QyxrQkFBa0IsNEJBQTRCLHFGQUFxRixxQkFBcUIsNkJBQTZCLHVCQUF1QiwrQkFBK0Isb0JBQW9CLFdBQVcsK0dBQStHLHNCQUFzQixFQUFFLGdDQUFnQyw0QkFBNEIsZ0RBQWdELG1CQUFtQiwwRUFBMEUsRUFBRSxHQUFHLEdBQUcsc0NBQXNDLDhCQUE4QixpRkFBaUYsb0NBQW9DLEdBQUcsdUJBQXVCLG9EQUFvRCxrSEFBa0gsSUFBSSxnR0FBZ0csSUFBSSw2UEFBNlAsSUFBSSxxTkFBcU4sY0FBYyxnQkFBZ0Isc0hBQXNILE1BQU0sa0JBQWtCLDZCQUE2QixXQUFXLHVHQUF1RyxnQ0FBZ0Msa0tBQWtLLDJCQUEyQixzQ0FBc0MscUJBQXFCLFdBQVcseUdBQXlHLG1DQUFtQyxnS0FBZ0ssMEJBQTBCLHNDQUFzQyxxQkFBcUIsdUJBQXVCLHlCQUF5QixzQ0FBc0MscUJBQXFCLGlFQUFpRSx1QkFBdUIsb0xBQW9MLDhFQUE4RSw4QkFBOEIsaUpBQWlKLEVBQUUsMkJBQTJCLHNDQUFzQyx1QkFBdUIsaVBBQWlQLGlEQUFpRCxzQkFBc0IsOEJBQThCLGlGQUFpRixpQ0FBaUMsNEZBQTRGLEVBQUUsMkJBQTJCLHNDQUFzQyw2QkFBNkIsbUVBQW1FLHFCQUFxQixXQUFXLDZFQUE2RSxXQUFXLGdFQUFnRSxtQkFBbUIsOERBQThELFdBQVcsRUFBRSxnQ0FBZ0MscUNBQXFDLHdOQUF3TixHQUFHLEdBQUcsMERBQTBELGdFQUFnRSxtREFBbUQsZ0VBQWdFLHFEQUFxRCx3RUFBd0UsaUZBQWlGLG9DQUFvQyxHQUFHLHVCQUF1QixpQ0FBaUMsZ0lBQWdJLElBQUksWUFBWSxJQUFJLGlFQUFpRSxJQUFJLHFDQUFxQywrTUFBK00sd0JBQXdCLFVBQVUsY0FBYyxnQkFBZ0Isb0ZBQW9GLDZOQUE2TixvREFBb0Qsa0JBQWtCLHlCQUF5QiwwSEFBMEgseU9BQXlPLDJFQUEyRSx3QkFBd0IsNEJBQTRCLDBCQUEwQixtQ0FBbUMsK0JBQStCLDRCQUE0Qiw2QkFBNkIsMENBQTBDLGlDQUFpQyw0QkFBNEIscUJBQXFCLFdBQVcsMkRBQTJELFNBQVMsRUFBRSxnQ0FBZ0MsdURBQXVELCtKQUErSixHQUFHLEdBQUcseURBQXlELDhEQUE4RCxpRkFBaUYsb0NBQW9DLEdBQUcsdUJBQXVCLGlGQUFpRixjQUFjLGdCQUFnQiwrQkFBK0IsNENBQTRDLDJRQUEyUSx3REFBd0QsRUFBRSxnQ0FBZ0MsNEJBQTRCLGdEQUFnRCxtQkFBbUIsbUZBQW1GLEVBQUUsR0FBRyxHQUFHLHlDQUF5Qyx3RkFBd0YsaUZBQWlGLG9DQUFvQyxHQUFHLFNBQVMsc0tBQXNLLFNBQVMsRUFBRTtBQUM3d2xCLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHlDQUF5QywwQkFBMEIsMkRBQTJELEVBQUUsa0JBQWtCLDBCQUEwQixFQUFFLG1DQUFtQyw4QkFBOEIsb0NBQW9DLGNBQWMsRUFBRTtBQUNuUyw4Q0FBOEMsaUNBQWlDLE9BQU8sT0FBTyw2Q0FBNkMsRUFBRSxXQUFXOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBTyxDQUFDLDhEQUFNLENBQUMsbUNBQUU7QUFDckI7QUFDQSxLQUFLO0FBQUEsb0dBQUM7QUFDTixHQUFHLE1BQU0sRUFNTjs7QUFFSCxDQUFDOzs7Ozs7Ozs7Ozs7QUN0NkJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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QUFMLENBQVU7QUFDTkQsV0FBSyxFQUFFQSxLQUREO0FBRU5FLHNCQUFnQixFQUFFLElBRlo7QUFHTkMsdUJBQWlCLEVBQUVKLE9BSGI7QUFJTkssc0JBQWdCLEVBQUVOLE1BSlo7QUFLTk8sVUFBSSxFQUFFO0FBTEEsS0FBVixFQU1HQyxJQU5ILENBTVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxZQUFNLENBQUNDLEtBQVAsSUFBZ0IvQixNQUFNLENBQUNnQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QmIsSUFBSSxDQUFDTixJQUFMLENBQVUsTUFBVixDQUF2QixDQUFoQjtBQUNILEtBUkQ7QUFTSCxHQXRDRDtBQXdDQWIsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJpQyxPQUE3QjtBQUNILENBM0RBLENBQUQsQyIsImZpbGUiOiIvanMvYmFja2VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWRtaW5MVEUgdjMuMC4wLXJjLjEgKGh0dHBzOi8vYWRtaW5sdGUuaW8pXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE5IENvbG9ybGliIDxodHRwOi8vY29sb3JsaWIuY29tPlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vYWxtYXNhZWVkMjAxMC9BZG1pbkxURS9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT90KGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSx0KTp0KChlPWV8fHNlbGYpLmFkbWlubHRlPXt9KX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1mdW5jdGlvbihlKXt2YXIgdD1cIkNvbnRyb2xTaWRlYmFyXCIsbj1cImx0ZS5jb250cm9sc2lkZWJhclwiLGk9ZS5mblt0XSxzPXtDT0xMQVBTRUQ6XCJjb2xsYXBzZWQubHRlLmNvbnRyb2xzaWRlYmFyXCIsRVhQQU5ERUQ6XCJleHBhbmRlZC5sdGUuY29udHJvbHNpZGViYXJcIn0sbz1cIi5jb250cm9sLXNpZGViYXJcIixhPVwiLmNvbnRyb2wtc2lkZWJhci1jb250ZW50XCIscj0nW2RhdGEtd2lkZ2V0PVwiY29udHJvbC1zaWRlYmFyXCJdJyxsPVwiLm1haW4taGVhZGVyXCIsYz1cIi5tYWluLWZvb3RlclwiLGg9XCJjb250cm9sLXNpZGViYXItYW5pbWF0ZVwiLGQ9XCJjb250cm9sLXNpZGViYXItb3BlblwiLHU9XCJjb250cm9sLXNpZGViYXItc2xpZGUtb3BlblwiLGY9XCJsYXlvdXQtZml4ZWRcIixnPVwibGF5b3V0LW5hdmJhci1maXhlZFwiLF89XCJsYXlvdXQtc20tbmF2YmFyLWZpeGVkXCIscD1cImxheW91dC1tZC1uYXZiYXItZml4ZWRcIixtPVwibGF5b3V0LWxnLW5hdmJhci1maXhlZFwiLHY9XCJsYXlvdXQteGwtbmF2YmFyLWZpeGVkXCIsQz1cImxheW91dC1mb290ZXItZml4ZWRcIix5PVwibGF5b3V0LXNtLWZvb3Rlci1maXhlZFwiLHc9XCJsYXlvdXQtbWQtZm9vdGVyLWZpeGVkXCIsRD1cImxheW91dC1sZy1mb290ZXItZml4ZWRcIixBPVwibGF5b3V0LXhsLWZvb3Rlci1maXhlZFwiLEU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsdCl7dGhpcy5fZWxlbWVudD1lLHRoaXMuX2NvbmZpZz10LHRoaXMuX2luaXQoKX12YXIgaT10LnByb3RvdHlwZTtyZXR1cm4gaS5zaG93PWZ1bmN0aW9uKCl7dGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGU/KGUoXCJodG1sXCIpLmFkZENsYXNzKGgpLGUoXCJib2R5XCIpLnJlbW92ZUNsYXNzKHUpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24oKXtlKG8pLmhpZGUoKSxlKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhoKSxlKHRoaXMpLmRlcXVldWUoKX0pKTplKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhkKTt2YXIgdD1lLkV2ZW50KHMuRVhQQU5ERUQpO2UodGhpcy5fZWxlbWVudCkudHJpZ2dlcih0KX0saS5jb2xsYXBzZT1mdW5jdGlvbigpe3RoaXMuX2NvbmZpZy5jb250cm9sc2lkZWJhclNsaWRlPyhlKFwiaHRtbFwiKS5hZGRDbGFzcyhoKSxlKG8pLnNob3coKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24oKXtlKFwiYm9keVwiKS5hZGRDbGFzcyh1KS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uKCl7ZShcImh0bWxcIikucmVtb3ZlQ2xhc3MoaCksZSh0aGlzKS5kZXF1ZXVlKCl9KSxlKHRoaXMpLmRlcXVldWUoKX0pKTplKFwiYm9keVwiKS5hZGRDbGFzcyhkKTt2YXIgdD1lLkV2ZW50KHMuQ09MTEFQU0VEKTtlKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIodCl9LGkudG9nZ2xlPWZ1bmN0aW9uKCl7ZShcImJvZHlcIikuaGFzQ2xhc3MoZCl8fGUoXCJib2R5XCIpLmhhc0NsYXNzKHUpP3RoaXMuc2hvdygpOnRoaXMuY29sbGFwc2UoKX0saS5faW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fZml4SGVpZ2h0KCksdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KCksZSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe3QuX2ZpeEhlaWdodCgpLHQuX2ZpeFNjcm9sbEhlaWdodCgpfSksZSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpeyhlKFwiYm9keVwiKS5oYXNDbGFzcyhkKXx8ZShcImJvZHlcIikuaGFzQ2xhc3ModSkpJiZ0Ll9maXhTY3JvbGxIZWlnaHQoKX0pfSxpLl9maXhTY3JvbGxIZWlnaHQ9ZnVuY3Rpb24oKXt2YXIgdD17c2Nyb2xsOmUoZG9jdW1lbnQpLmhlaWdodCgpLHdpbmRvdzplKHdpbmRvdykuaGVpZ2h0KCksaGVhZGVyOmUobCkub3V0ZXJIZWlnaHQoKSxmb290ZXI6ZShjKS5vdXRlckhlaWdodCgpfSxuPU1hdGguYWJzKHQud2luZG93K2Uod2luZG93KS5zY3JvbGxUb3AoKS10LnNjcm9sbCksaT1lKHdpbmRvdykuc2Nyb2xsVG9wKCkscz0hMSxyPSExO2UoXCJib2R5XCIpLmhhc0NsYXNzKGYpJiYoKGUoXCJib2R5XCIpLmhhc0NsYXNzKGcpfHxlKFwiYm9keVwiKS5oYXNDbGFzcyhfKXx8ZShcImJvZHlcIikuaGFzQ2xhc3MocCl8fGUoXCJib2R5XCIpLmhhc0NsYXNzKG0pfHxlKFwiYm9keVwiKS5oYXNDbGFzcyh2KSkmJlwiZml4ZWRcIj09PWUobCkuY3NzKFwicG9zaXRpb25cIikmJihzPSEwKSwoZShcImJvZHlcIikuaGFzQ2xhc3MoQyl8fGUoXCJib2R5XCIpLmhhc0NsYXNzKHkpfHxlKFwiYm9keVwiKS5oYXNDbGFzcyh3KXx8ZShcImJvZHlcIikuaGFzQ2xhc3MoRCl8fGUoXCJib2R5XCIpLmhhc0NsYXNzKEEpKSYmXCJmaXhlZFwiPT09ZShjKS5jc3MoXCJwb3NpdGlvblwiKSYmKHI9ITApLDA9PT1pJiYwPT09bj8oZShvKS5jc3MoXCJib3R0b21cIix0LmZvb3RlciksZShvKS5jc3MoXCJ0b3BcIix0LmhlYWRlciksZShvK1wiLCBcIitvK1wiIFwiK2EpLmNzcyhcImhlaWdodFwiLHQud2luZG93LSh0LmhlYWRlcit0LmZvb3RlcikpKTpuPD10LmZvb3Rlcj8hMT09PXI/KGUobykuY3NzKFwiYm90dG9tXCIsdC5mb290ZXItbiksZShvK1wiLCBcIitvK1wiIFwiK2EpLmNzcyhcImhlaWdodFwiLHQud2luZG93LSh0LmZvb3Rlci1uKSkpOmUobykuY3NzKFwiYm90dG9tXCIsdC5mb290ZXIpOmk8PXQuaGVhZGVyPyExPT09cz8oZShvKS5jc3MoXCJ0b3BcIix0LmhlYWRlci1pKSxlKG8rXCIsIFwiK28rXCIgXCIrYSkuY3NzKFwiaGVpZ2h0XCIsdC53aW5kb3ctKHQuaGVhZGVyLWkpKSk6ZShvKS5jc3MoXCJ0b3BcIix0LmhlYWRlcik6ITE9PT1zPyhlKG8pLmNzcyhcInRvcFwiLDApLGUobytcIiwgXCIrbytcIiBcIithKS5jc3MoXCJoZWlnaHRcIix0LndpbmRvdykpOmUobykuY3NzKFwidG9wXCIsdC5oZWFkZXIpKX0saS5fZml4SGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIHQ9ZSh3aW5kb3cpLmhlaWdodCgpLG49ZShsKS5vdXRlckhlaWdodCgpLGk9ZShjKS5vdXRlckhlaWdodCgpO2lmKGUoXCJib2R5XCIpLmhhc0NsYXNzKGYpKXt2YXIgcz10LW47KGUoXCJib2R5XCIpLmhhc0NsYXNzKEMpfHxlKFwiYm9keVwiKS5oYXNDbGFzcyh5KXx8ZShcImJvZHlcIikuaGFzQ2xhc3Modyl8fGUoXCJib2R5XCIpLmhhc0NsYXNzKEQpfHxlKFwiYm9keVwiKS5oYXNDbGFzcyhBKSkmJlwiZml4ZWRcIj09PWUoYykuY3NzKFwicG9zaXRpb25cIikmJihzPXQtbi1pKSxlKG8rXCIgXCIrYSkuY3NzKFwiaGVpZ2h0XCIscyksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZm4ub3ZlcmxheVNjcm9sbGJhcnMmJmUobytcIiBcIithKS5vdmVybGF5U2Nyb2xsYmFycyh7Y2xhc3NOYW1lOnRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxzaXplQXV0b0NhcGFibGU6ITAsc2Nyb2xsYmFyczp7YXV0b0hpZGU6dGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLGNsaWNrU2Nyb2xsaW5nOiEwfX0pfX0sdC5falF1ZXJ5SW50ZXJmYWNlPWZ1bmN0aW9uKGkpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgcz1lKHRoaXMpLmRhdGEobik7aWYoc3x8KHM9bmV3IHQodGhpcyxlKHRoaXMpLmRhdGEoKSksZSh0aGlzKS5kYXRhKG4scykpLFwidW5kZWZpbmVkXCI9PT1zW2ldKXRocm93IG5ldyBFcnJvcihpK1wiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO3NbaV0oKX0pfSx0fSgpO3JldHVybiBlKGRvY3VtZW50KS5vbihcImNsaWNrXCIscixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksRS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoZSh0aGlzKSxcInRvZ2dsZVwiKX0pLGUuZm5bdF09RS5falF1ZXJ5SW50ZXJmYWNlLGUuZm5bdF0uQ29uc3RydWN0b3I9RSxlLmZuW3RdLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5mblt0XT1pLEUuX2pRdWVyeUludGVyZmFjZX0sRX0oalF1ZXJ5KSxuPWZ1bmN0aW9uKGUpe3ZhciB0PVwiTGF5b3V0XCIsbj1lLmZuW3RdLGk9XCIubWFpbi1oZWFkZXJcIixzPVwiLm1haW4tc2lkZWJhclwiLG89XCIubWFpbi1zaWRlYmFyIC5zaWRlYmFyXCIsYT1cIi5jb250ZW50LXdyYXBwZXJcIixyPVwiLm1haW4tZm9vdGVyXCIsbD1cImhvbGQtdHJhbnNpdGlvblwiLGM9XCJzaWRlYmFyLWZvY3VzZWRcIixoPVwibGF5b3V0LWZpeGVkXCIsZD17c2Nyb2xsYmFyVGhlbWU6XCJvcy10aGVtZS1saWdodFwiLHNjcm9sbGJhckF1dG9IaWRlOlwibFwifSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLHQpe3RoaXMuX2NvbmZpZz10LHRoaXMuX2VsZW1lbnQ9ZSx0aGlzLl9pbml0KCl9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4uZml4TGF5b3V0SGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIHQ9e3dpbmRvdzplKHdpbmRvdykuaGVpZ2h0KCksaGVhZGVyOmUoaSkub3V0ZXJIZWlnaHQoKSxmb290ZXI6ZShyKS5vdXRlckhlaWdodCgpLHNpZGViYXI6ZShvKS5oZWlnaHQoKX0sbj10aGlzLl9tYXgodCk7ZShcImJvZHlcIikuaGFzQ2xhc3MoaCk/KGUoYSkuY3NzKFwibWluLWhlaWdodFwiLG4tdC5oZWFkZXItdC5mb290ZXIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmZuLm92ZXJsYXlTY3JvbGxiYXJzJiZlKG8pLm92ZXJsYXlTY3JvbGxiYXJzKHtjbGFzc05hbWU6dGhpcy5fY29uZmlnLnNjcm9sbGJhclRoZW1lLHNpemVBdXRvQ2FwYWJsZTohMCxzY3JvbGxiYXJzOnthdXRvSGlkZTp0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsY2xpY2tTY3JvbGxpbmc6ITB9fSkpOnQud2luZG93PnQuc2lkZWJhcj9lKGEpLmNzcyhcIm1pbi1oZWlnaHRcIix0LndpbmRvdy10LmhlYWRlci10LmZvb3Rlcik6ZShhKS5jc3MoXCJtaW4taGVpZ2h0XCIsdC5zaWRlYmFyLXQuaGVhZGVyKX0sbi5faW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7ZShcImJvZHlcIikucmVtb3ZlQ2xhc3MobCksdGhpcy5maXhMYXlvdXRIZWlnaHQoKSxlKG8pLm9uKFwiY29sbGFwc2VkLmx0ZS50cmVldmlldyBleHBhbmRlZC5sdGUudHJlZXZpZXcgY29sbGFwc2VkLmx0ZS5wdXNobWVudSBleHBhbmRlZC5sdGUucHVzaG1lbnVcIixmdW5jdGlvbigpe3QuZml4TGF5b3V0SGVpZ2h0KCl9KSxlKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7dC5maXhMYXlvdXRIZWlnaHQoKX0pLGUoXCJib2R5LCBodG1sXCIpLmNzcyhcImhlaWdodFwiLFwiYXV0b1wiKX0sbi5fbWF4PWZ1bmN0aW9uKGUpe3ZhciB0PTA7cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7ZVtuXT50JiYodD1lW25dKX0pLHR9LHQuX2pRdWVyeUludGVyZmFjZT1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKS5kYXRhKFwibHRlLmxheW91dFwiKSxzPWUuZXh0ZW5kKHt9LGQsZSh0aGlzKS5kYXRhKCkpO2l8fChpPW5ldyB0KGUodGhpcykscyksZSh0aGlzKS5kYXRhKFwibHRlLmxheW91dFwiLGkpKSxcImluaXRcIj09PW4mJmlbbl0oKX0pfSx0fSgpO3JldHVybiBlKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXt1Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbChlKFwiYm9keVwiKSl9KSxlKG8rXCIgYVwiKS5vbihcImZvY3VzaW5cIixmdW5jdGlvbigpe2UocykuYWRkQ2xhc3MoYyl9KSxlKG8rXCIgYVwiKS5vbihcImZvY3Vzb3V0XCIsZnVuY3Rpb24oKXtlKHMpLnJlbW92ZUNsYXNzKGMpfSksZS5mblt0XT11Ll9qUXVlcnlJbnRlcmZhY2UsZS5mblt0XS5Db25zdHJ1Y3Rvcj11LGUuZm5bdF0ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLmZuW3RdPW4sdS5falF1ZXJ5SW50ZXJmYWNlfSx1fShqUXVlcnkpLGk9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJQdXNoTWVudVwiLG49XCIubHRlLnB1c2htZW51XCIsaT1lLmZuW3RdLHM9e0NPTExBUFNFRDpcImNvbGxhcHNlZFwiK24sU0hPV046XCJzaG93blwiK259LG89e2F1dG9Db2xsYXBzZVNpemU6ITEsc2NyZWVuQ29sbGFwc2VTaXplOjc2OCxlbmFibGVSZW1lbWJlcjohMSxub1RyYW5zaXRpb25BZnRlclJlbG9hZDohMH0sYT17VE9HR0xFX0JVVFRPTjonW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nLFNJREVCQVJfTUlOSTpcIi5zaWRlYmFyLW1pbmlcIixTSURFQkFSX0NPTExBUFNFRDpcIi5zaWRlYmFyLWNvbGxhcHNlXCIsQk9EWTpcImJvZHlcIixPVkVSTEFZOlwiI3NpZGViYXItb3ZlcmxheVwiLFdSQVBQRVI6XCIud3JhcHBlclwifSxyPVwic2lkZWJhci1jb2xsYXBzZVwiLGw9XCJzaWRlYmFyLW9wZW5cIixjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMuX2VsZW1lbnQ9dCx0aGlzLl9vcHRpb25zPWUuZXh0ZW5kKHt9LG8sbiksdGhpcy5faW5pdCgpLGUoYS5PVkVSTEFZKS5sZW5ndGh8fHRoaXMuX2FkZE92ZXJsYXkoKX12YXIgaT10LnByb3RvdHlwZTtyZXR1cm4gaS5zaG93PWZ1bmN0aW9uKCl7ZShhLkJPRFkpLmFkZENsYXNzKGwpLnJlbW92ZUNsYXNzKHIpLHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXImJmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVtZW1iZXJcIituLGwpO3ZhciB0PWUuRXZlbnQocy5TSE9XTik7ZSh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHQpfSxpLmNvbGxhcHNlPWZ1bmN0aW9uKCl7ZShhLkJPRFkpLnJlbW92ZUNsYXNzKGwpLmFkZENsYXNzKHIpLHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXImJmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVtZW1iZXJcIituLHIpO3ZhciB0PWUuRXZlbnQocy5DT0xMQVBTRUQpO2UodGhpcy5fZWxlbWVudCkudHJpZ2dlcih0KX0saS5pc1Nob3duPWZ1bmN0aW9uKCl7cmV0dXJuIGUod2luZG93KS53aWR0aCgpPj10aGlzLl9vcHRpb25zLnNjcmVlbkNvbGxhcHNlU2l6ZT8hZShhLkJPRFkpLmhhc0NsYXNzKHIpOmUoYS5CT0RZKS5oYXNDbGFzcyhsKX0saS50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24oKT90aGlzLmNvbGxhcHNlKCk6dGhpcy5zaG93KCl9LGkuYXV0b0NvbGxhcHNlPWZ1bmN0aW9uKCl7dGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplJiYoZSh3aW5kb3cpLndpZHRoKCk8PXRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZT90aGlzLmlzU2hvd24oKSYmdGhpcy50b2dnbGUoKTp0aGlzLmlzU2hvd24oKXx8dGhpcy50b2dnbGUoKSl9LGkucmVtZW1iZXI9ZnVuY3Rpb24oKXt0aGlzLl9vcHRpb25zLmVuYWJsZVJlbWVtYmVyJiYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZW1lbWJlclwiK24pPT1yJiYodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZD9lKFwiYm9keVwiKS5hZGRDbGFzcyhcImhvbGQtdHJhbnNpdGlvblwiKS5hZGRDbGFzcyhyKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24oKXtlKHRoaXMpLnJlbW92ZUNsYXNzKFwiaG9sZC10cmFuc2l0aW9uXCIpLGUodGhpcykuZGVxdWV1ZSgpfSk6ZShcImJvZHlcIikuYWRkQ2xhc3MocikpKX0saS5faW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5yZW1lbWJlcigpLHRoaXMuYXV0b0NvbGxhcHNlKCksZSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe3QuYXV0b0NvbGxhcHNlKCl9KX0saS5fYWRkT3ZlcmxheT1mdW5jdGlvbigpe3ZhciB0PXRoaXMsbj1lKFwiPGRpdiAvPlwiLHtpZDpcInNpZGViYXItb3ZlcmxheVwifSk7bi5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXt0LmNvbGxhcHNlKCl9KSxlKGEuV1JBUFBFUikuYXBwZW5kKG4pfSx0Ll9qUXVlcnlJbnRlcmZhY2U9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBpPWUodGhpcykuZGF0YShcImx0ZS5wdXNobWVudVwiKSxzPWUuZXh0ZW5kKHt9LG8sZSh0aGlzKS5kYXRhKCkpO2l8fChpPW5ldyB0KHRoaXMscyksZSh0aGlzKS5kYXRhKFwibHRlLnB1c2htZW51XCIsaSkpLFwidG9nZ2xlXCI9PT1uJiZpW25dKCl9KX0sdH0oKTtyZXR1cm4gZShkb2N1bWVudCkub24oXCJjbGlja1wiLGEuVE9HR0xFX0JVVFRPTixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIG49dC5jdXJyZW50VGFyZ2V0O1wicHVzaG1lbnVcIiE9PWUobikuZGF0YShcIndpZGdldFwiKSYmKG49ZShuKS5jbG9zZXN0KGEuVE9HR0xFX0JVVFRPTikpLGMuX2pRdWVyeUludGVyZmFjZS5jYWxsKGUobiksXCJ0b2dnbGVcIil9KSxlKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXtjLl9qUXVlcnlJbnRlcmZhY2UuY2FsbChlKGEuVE9HR0xFX0JVVFRPTikpfSksZS5mblt0XT1jLl9qUXVlcnlJbnRlcmZhY2UsZS5mblt0XS5Db25zdHJ1Y3Rvcj1jLGUuZm5bdF0ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLmZuW3RdPWksYy5falF1ZXJ5SW50ZXJmYWNlfSxjfShqUXVlcnkpLHM9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJUcmVldmlld1wiLG49ZS5mblt0XSxpPXtTRUxFQ1RFRDpcInNlbGVjdGVkLmx0ZS50cmVldmlld1wiLEVYUEFOREVEOlwiZXhwYW5kZWQubHRlLnRyZWV2aWV3XCIsQ09MTEFQU0VEOlwiY29sbGFwc2VkLmx0ZS50cmVldmlld1wiLExPQURfREFUQV9BUEk6XCJsb2FkLmx0ZS50cmVldmlld1wifSxzPVwiLm5hdi1pdGVtXCIsbz1cIi5uYXYtdHJlZXZpZXdcIixhPVwiLm1lbnUtb3BlblwiLHI9J1tkYXRhLXdpZGdldD1cInRyZWV2aWV3XCJdJyxsPVwibWVudS1vcGVuXCIsYz17dHJpZ2dlcjpyK1wiIFwiK1wiLm5hdi1saW5rXCIsYW5pbWF0aW9uU3BlZWQ6MzAwLGFjY29yZGlvbjohMH0saD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSx0KXt0aGlzLl9jb25maWc9dCx0aGlzLl9lbGVtZW50PWV9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4uaW5pdD1mdW5jdGlvbigpe3RoaXMuX3NldHVwTGlzdGVuZXJzKCl9LG4uZXhwYW5kPWZ1bmN0aW9uKHQsbil7dmFyIHM9dGhpcyxyPWUuRXZlbnQoaS5FWFBBTkRFRCk7aWYodGhpcy5fY29uZmlnLmFjY29yZGlvbil7dmFyIGM9bi5zaWJsaW5ncyhhKS5maXJzdCgpLGg9Yy5maW5kKG8pLmZpcnN0KCk7dGhpcy5jb2xsYXBzZShoLGMpfXQuc3RvcCgpLnNsaWRlRG93bih0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsZnVuY3Rpb24oKXtuLmFkZENsYXNzKGwpLGUocy5fZWxlbWVudCkudHJpZ2dlcihyKX0pfSxuLmNvbGxhcHNlPWZ1bmN0aW9uKHQsbil7dmFyIHM9dGhpcyxyPWUuRXZlbnQoaS5DT0xMQVBTRUQpO3Quc3RvcCgpLnNsaWRlVXAodGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLGZ1bmN0aW9uKCl7bi5yZW1vdmVDbGFzcyhsKSxlKHMuX2VsZW1lbnQpLnRyaWdnZXIociksdC5maW5kKGErXCIgPiBcIitvKS5zbGlkZVVwKCksdC5maW5kKGEpLnJlbW92ZUNsYXNzKGwpfSl9LG4udG9nZ2xlPWZ1bmN0aW9uKHQpe3ZhciBuPWUodC5jdXJyZW50VGFyZ2V0KSxpPW4ubmV4dCgpO2lmKGkuaXMobykpe3QucHJldmVudERlZmF1bHQoKTt2YXIgYT1uLnBhcmVudHMocykuZmlyc3QoKTthLmhhc0NsYXNzKGwpP3RoaXMuY29sbGFwc2UoZShpKSxhKTp0aGlzLmV4cGFuZChlKGkpLGEpfX0sbi5fc2V0dXBMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2UoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIix0aGlzLl9jb25maWcudHJpZ2dlcixmdW5jdGlvbihlKXt0LnRvZ2dsZShlKX0pfSx0Ll9qUXVlcnlJbnRlcmZhY2U9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBpPWUodGhpcykuZGF0YShcImx0ZS50cmVldmlld1wiKSxzPWUuZXh0ZW5kKHt9LGMsZSh0aGlzKS5kYXRhKCkpO2l8fChpPW5ldyB0KGUodGhpcykscyksZSh0aGlzKS5kYXRhKFwibHRlLnRyZWV2aWV3XCIsaSkpLFwiaW5pdFwiPT09biYmaVtuXSgpfSl9LHR9KCk7cmV0dXJuIGUod2luZG93KS5vbihpLkxPQURfREFUQV9BUEksZnVuY3Rpb24oKXtlKHIpLmVhY2goZnVuY3Rpb24oKXtoLl9qUXVlcnlJbnRlcmZhY2UuY2FsbChlKHRoaXMpLFwiaW5pdFwiKX0pfSksZS5mblt0XT1oLl9qUXVlcnlJbnRlcmZhY2UsZS5mblt0XS5Db25zdHJ1Y3Rvcj1oLGUuZm5bdF0ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLmZuW3RdPW4saC5falF1ZXJ5SW50ZXJmYWNlfSxofShqUXVlcnkpLG89ZnVuY3Rpb24oZSl7dmFyIHQ9XCJEaXJlY3RDaGF0XCIsbj1lLmZuW3RdLGk9XCJ0b2dnbGVke0VWRU5UX0tFWX1cIixzPSdbZGF0YS13aWRnZXQ9XCJjaGF0LXBhbmUtdG9nZ2xlXCJdJyxvPVwiLmRpcmVjdC1jaGF0XCIsYT1cImRpcmVjdC1jaGF0LWNvbnRhY3RzLW9wZW5cIixyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLHQpe3RoaXMuX2VsZW1lbnQ9ZX1yZXR1cm4gdC5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7ZSh0aGlzLl9lbGVtZW50KS5wYXJlbnRzKG8pLmZpcnN0KCkudG9nZ2xlQ2xhc3MoYSk7dmFyIHQ9ZS5FdmVudChpKTtlKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIodCl9LHQuX2pRdWVyeUludGVyZmFjZT1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKS5kYXRhKFwibHRlLmRpcmVjdGNoYXRcIik7aXx8KGk9bmV3IHQoZSh0aGlzKSksZSh0aGlzKS5kYXRhKFwibHRlLmRpcmVjdGNoYXRcIixpKSksaVtuXSgpfSl9LHR9KCk7cmV0dXJuIGUoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixzLGZ1bmN0aW9uKHQpe3QmJnQucHJldmVudERlZmF1bHQoKSxyLl9qUXVlcnlJbnRlcmZhY2UuY2FsbChlKHRoaXMpLFwidG9nZ2xlXCIpfSksZS5mblt0XT1yLl9qUXVlcnlJbnRlcmZhY2UsZS5mblt0XS5Db25zdHJ1Y3Rvcj1yLGUuZm5bdF0ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLmZuW3RdPW4sci5falF1ZXJ5SW50ZXJmYWNlfSxyfShqUXVlcnkpLGE9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJUb2RvTGlzdFwiLG49ZS5mblt0XSxpPSdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nLHM9XCJkb25lXCIsbz17b25DaGVjazpmdW5jdGlvbihlKXtyZXR1cm4gZX0sb25VbkNoZWNrOmZ1bmN0aW9uKGUpe3JldHVybiBlfX0sYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSx0KXt0aGlzLl9jb25maWc9dCx0aGlzLl9lbGVtZW50PWUsdGhpcy5faW5pdCgpfXZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLnRvZ2dsZT1mdW5jdGlvbih0KXt0LnBhcmVudHMoXCJsaVwiKS50b2dnbGVDbGFzcyhzKSxlKHQpLnByb3AoXCJjaGVja2VkXCIpP3RoaXMuY2hlY2sodCk6dGhpcy51bkNoZWNrKGUodCkpfSxuLmNoZWNrPWZ1bmN0aW9uKGUpe3RoaXMuX2NvbmZpZy5vbkNoZWNrLmNhbGwoZSl9LG4udW5DaGVjaz1mdW5jdGlvbihlKXt0aGlzLl9jb25maWcub25VbkNoZWNrLmNhbGwoZSl9LG4uX2luaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2UoaSkuZmluZChcImlucHV0OmNoZWNrYm94OmNoZWNrZWRcIikucGFyZW50cyhcImxpXCIpLnRvZ2dsZUNsYXNzKHMpLGUoaSkub24oXCJjaGFuZ2VcIixcImlucHV0OmNoZWNrYm94XCIsZnVuY3Rpb24obil7dC50b2dnbGUoZShuLnRhcmdldCkpfSl9LHQuX2pRdWVyeUludGVyZmFjZT1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKS5kYXRhKFwibHRlLnRvZG9saXN0XCIpLHM9ZS5leHRlbmQoe30sbyxlKHRoaXMpLmRhdGEoKSk7aXx8KGk9bmV3IHQoZSh0aGlzKSxzKSxlKHRoaXMpLmRhdGEoXCJsdGUudG9kb2xpc3RcIixpKSksXCJpbml0XCI9PT1uJiZpW25dKCl9KX0sdH0oKTtyZXR1cm4gZSh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7YS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoZShpKSl9KSxlLmZuW3RdPWEuX2pRdWVyeUludGVyZmFjZSxlLmZuW3RdLkNvbnN0cnVjdG9yPWEsZS5mblt0XS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGUuZm5bdF09bixhLl9qUXVlcnlJbnRlcmZhY2V9LGF9KGpRdWVyeSkscj1mdW5jdGlvbihlKXt2YXIgdD1cIkNhcmRXaWRnZXRcIixuPVwiLmx0ZS5jYXJkd2lkZ2V0XCIsaT1lLmZuW3RdLHM9e0VYUEFOREVEOlwiZXhwYW5kZWRcIituLENPTExBUFNFRDpcImNvbGxhcHNlZFwiK24sTUFYSU1JWkVEOlwibWF4aW1pemVkXCIrbixNSU5JTUlaRUQ6XCJtaW5pbWl6ZWRcIituLFJFTU9WRUQ6XCJyZW1vdmVkXCIrbn0sbz17Q0FSRDpcImNhcmRcIixDT0xMQVBTRUQ6XCJjb2xsYXBzZWQtY2FyZFwiLFdBU19DT0xMQVBTRUQ6XCJ3YXMtY29sbGFwc2VkXCIsTUFYSU1JWkVEOlwibWF4aW1pemVkLWNhcmRcIn0sYT17REFUQV9SRU1PVkU6J1tkYXRhLWNhcmQtd2lkZ2V0PVwicmVtb3ZlXCJdJyxEQVRBX0NPTExBUFNFOidbZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCJdJyxEQVRBX01BWElNSVpFOidbZGF0YS1jYXJkLXdpZGdldD1cIm1heGltaXplXCJdJyxDQVJEOlwiLlwiK28uQ0FSRCxDQVJEX0hFQURFUjpcIi5jYXJkLWhlYWRlclwiLENBUkRfQk9EWTpcIi5jYXJkLWJvZHlcIixDQVJEX0ZPT1RFUjpcIi5jYXJkLWZvb3RlclwiLENPTExBUFNFRDpcIi5cIitvLkNPTExBUFNFRH0scj17YW5pbWF0aW9uU3BlZWQ6XCJub3JtYWxcIixjb2xsYXBzZVRyaWdnZXI6YS5EQVRBX0NPTExBUFNFLHJlbW92ZVRyaWdnZXI6YS5EQVRBX1JFTU9WRSxtYXhpbWl6ZVRyaWdnZXI6YS5EQVRBX01BWElNSVpFLGNvbGxhcHNlSWNvbjpcImZhLW1pbnVzXCIsZXhwYW5kSWNvbjpcImZhLXBsdXNcIixtYXhpbWl6ZUljb246XCJmYS1leHBhbmRcIixtaW5pbWl6ZUljb246XCJmYS1jb21wcmVzc1wifSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMuX2VsZW1lbnQ9dCx0aGlzLl9wYXJlbnQ9dC5wYXJlbnRzKGEuQ0FSRCkuZmlyc3QoKSx0Lmhhc0NsYXNzKG8uQ0FSRCkmJih0aGlzLl9wYXJlbnQ9dCksdGhpcy5fc2V0dGluZ3M9ZS5leHRlbmQoe30scixuKX12YXIgbj10LnByb3RvdHlwZTtyZXR1cm4gbi5jb2xsYXBzZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fcGFyZW50LmNoaWxkcmVuKGEuQ0FSRF9CT0RZK1wiLCBcIithLkNBUkRfRk9PVEVSKS5zbGlkZVVwKHRoaXMuX3NldHRpbmdzLmFuaW1hdGlvblNwZWVkLGZ1bmN0aW9uKCl7dC5fcGFyZW50LmFkZENsYXNzKG8uQ09MTEFQU0VEKX0pLHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcitcIiAuXCIrdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5leHBhbmRJY29uKS5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pO3ZhciBuPWUuRXZlbnQocy5DT0xMQVBTRUQpO3RoaXMuX2VsZW1lbnQudHJpZ2dlcihuLHRoaXMuX3BhcmVudCl9LG4uZXhwYW5kPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLl9wYXJlbnQuY2hpbGRyZW4oYS5DQVJEX0JPRFkrXCIsIFwiK2EuQ0FSRF9GT09URVIpLnNsaWRlRG93bih0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCxmdW5jdGlvbigpe3QuX3BhcmVudC5yZW1vdmVDbGFzcyhvLkNPTExBUFNFRCl9KSx0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIrXCIgLlwiK3RoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbik7dmFyIG49ZS5FdmVudChzLkVYUEFOREVEKTt0aGlzLl9lbGVtZW50LnRyaWdnZXIobix0aGlzLl9wYXJlbnQpfSxuLnJlbW92ZT1mdW5jdGlvbigpe3RoaXMuX3BhcmVudC5zbGlkZVVwKCk7dmFyIHQ9ZS5FdmVudChzLlJFTU9WRUQpO3RoaXMuX2VsZW1lbnQudHJpZ2dlcih0LHRoaXMuX3BhcmVudCl9LG4udG9nZ2xlPWZ1bmN0aW9uKCl7dGhpcy5fcGFyZW50Lmhhc0NsYXNzKG8uQ09MTEFQU0VEKT90aGlzLmV4cGFuZCgpOnRoaXMuY29sbGFwc2UoKX0sbi5tYXhpbWl6ZT1mdW5jdGlvbigpe3RoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlcitcIiAuXCIrdGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbiksdGhpcy5fcGFyZW50LmNzcyh7aGVpZ2h0OnRoaXMuX3BhcmVudC5oZWlnaHQoKSx3aWR0aDp0aGlzLl9wYXJlbnQud2lkdGgoKSx0cmFuc2l0aW9uOlwiYWxsIC4xNXNcIn0pLmRlbGF5KDE1MCkucXVldWUoZnVuY3Rpb24oKXtlKHRoaXMpLmFkZENsYXNzKG8uTUFYSU1JWkVEKSxlKFwiaHRtbFwiKS5hZGRDbGFzcyhvLk1BWElNSVpFRCksZSh0aGlzKS5oYXNDbGFzcyhvLkNPTExBUFNFRCkmJmUodGhpcykuYWRkQ2xhc3Moby5XQVNfQ09MTEFQU0VEKSxlKHRoaXMpLmRlcXVldWUoKX0pO3ZhciB0PWUuRXZlbnQocy5NQVhJTUlaRUQpO3RoaXMuX2VsZW1lbnQudHJpZ2dlcih0LHRoaXMuX3BhcmVudCl9LG4ubWluaW1pemU9ZnVuY3Rpb24oKXt0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXIrXCIgLlwiK3RoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29uKS5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pLHRoaXMuX3BhcmVudC5jc3MoXCJjc3NUZXh0XCIsXCJoZWlnaHQ6XCIrdGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodCtcIiAhaW1wb3J0YW50O3dpZHRoOlwiK3RoaXMuX3BhcmVudFswXS5zdHlsZS53aWR0aCtcIiAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOiBhbGwgLjE1cztcIikuZGVsYXkoMTApLnF1ZXVlKGZ1bmN0aW9uKCl7ZSh0aGlzKS5yZW1vdmVDbGFzcyhvLk1BWElNSVpFRCksZShcImh0bWxcIikucmVtb3ZlQ2xhc3Moby5NQVhJTUlaRUQpLGUodGhpcykuY3NzKHtoZWlnaHQ6XCJpbmhlcml0XCIsd2lkdGg6XCJpbmhlcml0XCJ9KSxlKHRoaXMpLmhhc0NsYXNzKG8uV0FTX0NPTExBUFNFRCkmJmUodGhpcykucmVtb3ZlQ2xhc3Moby5XQVNfQ09MTEFQU0VEKSxlKHRoaXMpLmRlcXVldWUoKX0pO3ZhciB0PWUuRXZlbnQocy5NSU5JTUlaRUQpO3RoaXMuX2VsZW1lbnQudHJpZ2dlcih0LHRoaXMuX3BhcmVudCl9LG4udG9nZ2xlTWF4aW1pemU9ZnVuY3Rpb24oKXt0aGlzLl9wYXJlbnQuaGFzQ2xhc3Moby5NQVhJTUlaRUQpP3RoaXMubWluaW1pemUoKTp0aGlzLm1heGltaXplKCl9LG4uX2luaXQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpczt0aGlzLl9wYXJlbnQ9dCxlKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyKS5jbGljayhmdW5jdGlvbigpe24udG9nZ2xlKCl9KSxlKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljayhmdW5jdGlvbigpe24udG9nZ2xlTWF4aW1pemUoKX0pLGUodGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy5yZW1vdmVUcmlnZ2VyKS5jbGljayhmdW5jdGlvbigpe24ucmVtb3ZlKCl9KX0sdC5falF1ZXJ5SW50ZXJmYWNlPWZ1bmN0aW9uKG4pe3ZhciBpPWUodGhpcykuZGF0YShcImx0ZS5jYXJkd2lkZ2V0XCIpO2l8fChpPW5ldyB0KGUodGhpcyksaSksZSh0aGlzKS5kYXRhKFwibHRlLmNhcmR3aWRnZXRcIixcInN0cmluZ1wiPT10eXBlb2Ygbj9pOm4pKSxcInN0cmluZ1wiPT10eXBlb2YgbiYmbi5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHJlbW92ZXx0b2dnbGV8bWF4aW1pemV8bWluaW1pemV8dG9nZ2xlTWF4aW1pemUvKT9pW25dKCk6XCJvYmplY3RcIj09dHlwZW9mIG4mJmkuX2luaXQoZSh0aGlzKSl9LHR9KCk7cmV0dXJuIGUoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixhLkRBVEFfQ09MTEFQU0UsZnVuY3Rpb24odCl7dCYmdC5wcmV2ZW50RGVmYXVsdCgpLGwuX2pRdWVyeUludGVyZmFjZS5jYWxsKGUodGhpcyksXCJ0b2dnbGVcIil9KSxlKGRvY3VtZW50KS5vbihcImNsaWNrXCIsYS5EQVRBX1JFTU9WRSxmdW5jdGlvbih0KXt0JiZ0LnByZXZlbnREZWZhdWx0KCksbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoZSh0aGlzKSxcInJlbW92ZVwiKX0pLGUoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixhLkRBVEFfTUFYSU1JWkUsZnVuY3Rpb24odCl7dCYmdC5wcmV2ZW50RGVmYXVsdCgpLGwuX2pRdWVyeUludGVyZmFjZS5jYWxsKGUodGhpcyksXCJ0b2dnbGVNYXhpbWl6ZVwiKX0pLGUuZm5bdF09bC5falF1ZXJ5SW50ZXJmYWNlLGUuZm5bdF0uQ29uc3RydWN0b3I9bCxlLmZuW3RdLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5mblt0XT1pLGwuX2pRdWVyeUludGVyZmFjZX0sbH0oalF1ZXJ5KSxsPWZ1bmN0aW9uKGUpe3ZhciB0PVwiQ2FyZFJlZnJlc2hcIixuPWUuZm5bdF0saT17TE9BREVEOlwibG9hZGVkLmx0ZS5jYXJkcmVmcmVzaFwiLE9WRVJMQVlfQURERUQ6XCJvdmVybGF5LmFkZGVkLmx0ZS5jYXJkcmVmcmVzaFwiLE9WRVJMQVlfUkVNT1ZFRDpcIm92ZXJsYXkucmVtb3ZlZC5sdGUuY2FyZHJlZnJlc2hcIn0scz17Q0FSRDpcImNhcmRcIn0sbz17Q0FSRDpcIi5cIitzLkNBUkQsREFUQV9SRUZSRVNIOidbZGF0YS1jYXJkLXdpZGdldD1cImNhcmQtcmVmcmVzaFwiXSd9LGE9e3NvdXJjZTpcIlwiLHNvdXJjZVNlbGVjdG9yOlwiXCIscGFyYW1zOnt9LHRyaWdnZXI6by5EQVRBX1JFRlJFU0gsY29udGVudDpcIi5jYXJkLWJvZHlcIixsb2FkSW5Db250ZW50OiEwLGxvYWRPbkluaXQ6ITAscmVzcG9uc2VUeXBlOlwiXCIsb3ZlcmxheVRlbXBsYXRlOic8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLTJ4IGZhLXN5bmMtYWx0IGZhLXNwaW5cIj48L2k+PC9kaXY+JyxvbkxvYWRTdGFydDpmdW5jdGlvbigpe30sb25Mb2FkRG9uZTpmdW5jdGlvbihlKXtyZXR1cm4gZX19LHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7aWYodGhpcy5fZWxlbWVudD10LHRoaXMuX3BhcmVudD10LnBhcmVudHMoby5DQVJEKS5maXJzdCgpLHRoaXMuX3NldHRpbmdzPWUuZXh0ZW5kKHt9LGEsbiksdGhpcy5fb3ZlcmxheT1lKHRoaXMuX3NldHRpbmdzLm92ZXJsYXlUZW1wbGF0ZSksdC5oYXNDbGFzcyhzLkNBUkQpJiYodGhpcy5fcGFyZW50PXQpLFwiXCI9PT10aGlzLl9zZXR0aW5ncy5zb3VyY2UpdGhyb3cgbmV3IEVycm9yKFwiU291cmNlIHVybCB3YXMgbm90IGRlZmluZWQuIFBsZWFzZSBzcGVjaWZ5IGEgdXJsIGluIHlvdXIgQ2FyZFJlZnJlc2ggc291cmNlIG9wdGlvbi5cIik7dGhpcy5faW5pdCgpLHRoaXMuX3NldHRpbmdzLmxvYWRPbkluaXQmJnRoaXMubG9hZCgpfXZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLmxvYWQ9ZnVuY3Rpb24oKXt0aGlzLl9hZGRPdmVybGF5KCksdGhpcy5fc2V0dGluZ3Mub25Mb2FkU3RhcnQuY2FsbChlKHRoaXMpKSxlLmdldCh0aGlzLl9zZXR0aW5ncy5zb3VyY2UsdGhpcy5fc2V0dGluZ3MucGFyYW1zLGZ1bmN0aW9uKHQpe3RoaXMuX3NldHRpbmdzLmxvYWRJbkNvbnRlbnQmJihcIlwiIT10aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvciYmKHQ9ZSh0KS5maW5kKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yKS5odG1sKCkpLHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLmNvbnRlbnQpLmh0bWwodCkpLHRoaXMuX3NldHRpbmdzLm9uTG9hZERvbmUuY2FsbChlKHRoaXMpLHQpLHRoaXMuX3JlbW92ZU92ZXJsYXkoKX0uYmluZCh0aGlzKSxcIlwiIT09dGhpcy5fc2V0dGluZ3MucmVzcG9uc2VUeXBlJiZ0aGlzLl9zZXR0aW5ncy5yZXNwb25zZVR5cGUpO3ZhciB0PWUuRXZlbnQoaS5MT0FERUQpO2UodGhpcy5fZWxlbWVudCkudHJpZ2dlcih0KX0sbi5fYWRkT3ZlcmxheT1mdW5jdGlvbigpe3RoaXMuX3BhcmVudC5hcHBlbmQodGhpcy5fb3ZlcmxheSk7dmFyIHQ9ZS5FdmVudChpLk9WRVJMQVlfQURERUQpO2UodGhpcy5fZWxlbWVudCkudHJpZ2dlcih0KX0sbi5fcmVtb3ZlT3ZlcmxheT1mdW5jdGlvbigpe3RoaXMuX3BhcmVudC5maW5kKHRoaXMuX292ZXJsYXkpLnJlbW92ZSgpO3ZhciB0PWUuRXZlbnQoaS5PVkVSTEFZX1JFTU9WRUQpO2UodGhpcy5fZWxlbWVudCkudHJpZ2dlcih0KX0sbi5faW5pdD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO2UodGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy50cmlnZ2VyKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtuLmxvYWQoKX0pfSx0Ll9qUXVlcnlJbnRlcmZhY2U9ZnVuY3Rpb24obil7dmFyIGk9ZSh0aGlzKS5kYXRhKFwibHRlLmNhcmRyZWZyZXNoXCIpLHM9ZSh0aGlzKS5kYXRhKCk7aXx8KGk9bmV3IHQoZSh0aGlzKSxzKSxlKHRoaXMpLmRhdGEoXCJsdGUuY2FyZHJlZnJlc2hcIixcInN0cmluZ1wiPT10eXBlb2Ygbj9pOm4pKSxcInN0cmluZ1wiPT10eXBlb2YgbiYmbi5tYXRjaCgvbG9hZC8pP2lbbl0oKTpcIm9iamVjdFwiPT10eXBlb2YgbiYmaS5faW5pdChlKHRoaXMpKX0sdH0oKTtyZXR1cm4gZShkb2N1bWVudCkub24oXCJjbGlja1wiLG8uREFUQV9SRUZSRVNILGZ1bmN0aW9uKHQpe3QmJnQucHJldmVudERlZmF1bHQoKSxyLl9qUXVlcnlJbnRlcmZhY2UuY2FsbChlKHRoaXMpLFwibG9hZFwiKX0pLGUuZm5bdF09ci5falF1ZXJ5SW50ZXJmYWNlLGUuZm5bdF0uQ29uc3RydWN0b3I9cixlLmZuW3RdLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5mblt0XT1uLHIuX2pRdWVyeUludGVyZmFjZX0scn0oalF1ZXJ5KSxjPWZ1bmN0aW9uKGUpe3ZhciB0PVwiRHJvcGRvd25cIixuPWUuZm5bdF0saT1cInVsLmRyb3Bkb3duLW1lbnVcIixzPSdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsbz17fSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLHQpe3RoaXMuX2NvbmZpZz10LHRoaXMuX2VsZW1lbnQ9ZX1yZXR1cm4gdC5wcm90b3R5cGUudG9nZ2xlU3VibWVudT1mdW5jdGlvbigpe3RoaXMuX2VsZW1lbnQuc2libGluZ3MoKS5zaG93KCkudG9nZ2xlQ2xhc3MoXCJzaG93XCIpLHRoaXMuX2VsZW1lbnQubmV4dCgpLmhhc0NsYXNzKFwic2hvd1wiKXx8dGhpcy5fZWxlbWVudC5wYXJlbnRzKFwiLmRyb3Bkb3duLW1lbnVcIikuZmlyc3QoKS5maW5kKFwiLnNob3dcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmhpZGUoKSx0aGlzLl9lbGVtZW50LnBhcmVudHMoXCJsaS5uYXYtaXRlbS5kcm9wZG93bi5zaG93XCIpLm9uKFwiaGlkZGVuLmJzLmRyb3Bkb3duXCIsZnVuY3Rpb24odCl7ZShcIi5kcm9wZG93bi1zdWJtZW51IC5zaG93XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5oaWRlKCl9KX0sdC5falF1ZXJ5SW50ZXJmYWNlPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgaT1lKHRoaXMpLmRhdGEoXCJsdGUuZHJvcGRvd25cIikscz1lLmV4dGVuZCh7fSxvLGUodGhpcykuZGF0YSgpKTtpfHwoaT1uZXcgdChlKHRoaXMpLHMpLGUodGhpcykuZGF0YShcImx0ZS5kcm9wZG93blwiLGkpKSxcInRvZ2dsZVN1Ym1lbnVcIj09PW4mJmlbbl0oKX0pfSx0fSgpO3JldHVybiBlKGkrXCIgXCIrcykub24oXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLGEuX2pRdWVyeUludGVyZmFjZS5jYWxsKGUodGhpcyksXCJ0b2dnbGVTdWJtZW51XCIpfSksZS5mblt0XT1hLl9qUXVlcnlJbnRlcmZhY2UsZS5mblt0XS5Db25zdHJ1Y3Rvcj1hLGUuZm5bdF0ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLmZuW3RdPW4sYS5falF1ZXJ5SW50ZXJmYWNlfSxhfShqUXVlcnkpO2UuQ2FyZFJlZnJlc2g9bCxlLkNhcmRXaWRnZXQ9cixlLkNvbnRyb2xTaWRlYmFyPXQsZS5EaXJlY3RDaGF0PW8sZS5Ecm9wZG93bj1jLGUuTGF5b3V0PW4sZS5QdXNoTWVudT1pLGUuVG9kb0xpc3Q9YSxlLlRyZWV2aWV3PXMsT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkbWlubHRlLm1pbi5qcy5tYXAiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBBamF4TW9uaXRvciwgQmFyLCBEb2N1bWVudE1vbml0b3IsIEVsZW1lbnRNb25pdG9yLCBFbGVtZW50VHJhY2tlciwgRXZlbnRMYWdNb25pdG9yLCBFdmVudGVkLCBFdmVudHMsIE5vVGFyZ2V0RXJyb3IsIFBhY2UsIFJlcXVlc3RJbnRlcmNlcHQsIFNPVVJDRV9LRVlTLCBTY2FsZXIsIFNvY2tldFJlcXVlc3RUcmFja2VyLCBYSFJSZXF1ZXN0VHJhY2tlciwgYW5pbWF0aW9uLCBhdmdBbXBsaXR1ZGUsIGJhciwgY2FuY2VsQW5pbWF0aW9uLCBjYW5jZWxBbmltYXRpb25GcmFtZSwgZGVmYXVsdE9wdGlvbnMsIGV4dGVuZCwgZXh0ZW5kTmF0aXZlLCBnZXRGcm9tRE9NLCBnZXRJbnRlcmNlcHQsIGhhbmRsZVB1c2hTdGF0ZSwgaWdub3JlU3RhY2ssIGluaXQsIG5vdywgb3B0aW9ucywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCByZXN1bHQsIHJ1bkFuaW1hdGlvbiwgc2NhbGVycywgc2hvdWxkSWdub3JlVVJMLCBzaG91bGRUcmFjaywgc291cmNlLCBzb3VyY2VzLCB1bmlTY2FsZXIsIF9XZWJTb2NrZXQsIF9YRG9tYWluUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0LCBfaSwgX2ludGVyY2VwdCwgX2xlbiwgX3B1c2hTdGF0ZSwgX3JlZiwgX3JlZjEsIF9yZXBsYWNlU3RhdGUsXG4gICAgX19zbGljZSA9IFtdLnNsaWNlLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGNhdGNodXBUaW1lOiAxMDAsXG4gICAgaW5pdGlhbFJhdGU6IC4wMyxcbiAgICBtaW5UaW1lOiAyNTAsXG4gICAgZ2hvc3RUaW1lOiAxMDAsXG4gICAgbWF4UHJvZ3Jlc3NQZXJGcmFtZTogMjAsXG4gICAgZWFzZUZhY3RvcjogMS4yNSxcbiAgICBzdGFydE9uUGFnZUxvYWQ6IHRydWUsXG4gICAgcmVzdGFydE9uUHVzaFN0YXRlOiB0cnVlLFxuICAgIHJlc3RhcnRPblJlcXVlc3RBZnRlcjogNTAwLFxuICAgIHRhcmdldDogJ2JvZHknLFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICBjaGVja0ludGVydmFsOiAxMDAsXG4gICAgICBzZWxlY3RvcnM6IFsnYm9keSddXG4gICAgfSxcbiAgICBldmVudExhZzoge1xuICAgICAgbWluU2FtcGxlczogMTAsXG4gICAgICBzYW1wbGVDb3VudDogMyxcbiAgICAgIGxhZ1RocmVzaG9sZDogM1xuICAgIH0sXG4gICAgYWpheDoge1xuICAgICAgdHJhY2tNZXRob2RzOiBbJ0dFVCddLFxuICAgICAgdHJhY2tXZWJTb2NrZXRzOiB0cnVlLFxuICAgICAgaWdub3JlVVJMczogW11cbiAgICB9XG4gIH07XG5cbiAgbm93ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgcmV0dXJuIChfcmVmID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsID8gdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiID8gcGVyZm9ybWFuY2Uubm93KCkgOiB2b2lkIDAgOiB2b2lkIDApICE9IG51bGwgPyBfcmVmIDogKyhuZXcgRGF0ZSk7XG4gIH07XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICBpZiAocmVxdWVzdEFuaW1hdGlvbkZyYW1lID09IG51bGwpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDUwKTtcbiAgICB9O1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG4gIH1cblxuICBydW5BbmltYXRpb24gPSBmdW5jdGlvbihmbikge1xuICAgIHZhciBsYXN0LCB0aWNrO1xuICAgIGxhc3QgPSBub3coKTtcbiAgICB0aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGlmZjtcbiAgICAgIGRpZmYgPSBub3coKSAtIGxhc3Q7XG4gICAgICBpZiAoZGlmZiA+PSAzMykge1xuICAgICAgICBsYXN0ID0gbm93KCk7XG4gICAgICAgIHJldHVybiBmbihkaWZmLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRpY2ssIDMzIC0gZGlmZik7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGljaygpO1xuICB9O1xuXG4gIHJlc3VsdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCBrZXksIG9iajtcbiAgICBvYmogPSBhcmd1bWVudHNbMF0sIGtleSA9IGFyZ3VtZW50c1sxXSwgYXJncyA9IDMgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogW107XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9ialtrZXldLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9XG4gIH07XG5cbiAgZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgb3V0LCBzb3VyY2UsIHNvdXJjZXMsIHZhbCwgX2ksIF9sZW47XG4gICAgb3V0ID0gYXJndW1lbnRzWzBdLCBzb3VyY2VzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHNvdXJjZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZXNbX2ldO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgdmFsID0gc291cmNlW2tleV07XG4gICAgICAgICAgaWYgKChvdXRba2V5XSAhPSBudWxsKSAmJiB0eXBlb2Ygb3V0W2tleV0gPT09ICdvYmplY3QnICYmICh2YWwgIT0gbnVsbCkgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGV4dGVuZChvdXRba2V5XSwgdmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0W2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgYXZnQW1wbGl0dWRlID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgdmFyIGNvdW50LCBzdW0sIHYsIF9pLCBfbGVuO1xuICAgIHN1bSA9IGNvdW50ID0gMDtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGFyci5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgdiA9IGFycltfaV07XG4gICAgICBzdW0gKz0gTWF0aC5hYnModik7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XG4gIH07XG5cbiAgZ2V0RnJvbURPTSA9IGZ1bmN0aW9uKGtleSwganNvbikge1xuICAgIHZhciBkYXRhLCBlLCBlbDtcbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIGtleSA9ICdvcHRpb25zJztcbiAgICB9XG4gICAgaWYgKGpzb24gPT0gbnVsbCkge1xuICAgICAganNvbiA9IHRydWU7XG4gICAgfVxuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXBhY2UtXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRhID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWNlLVwiICsga2V5KTtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBlID0gX2Vycm9yO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUgIT09IG51bGwgPyBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBpbmxpbmUgcGFjZSBvcHRpb25zXCIsIGUpIDogdm9pZCAwO1xuICAgIH1cbiAgfTtcblxuICBFdmVudGVkID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50ZWQoKSB7fVxuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4LCBvbmNlKSB7XG4gICAgICB2YXIgX2Jhc2U7XG4gICAgICBpZiAob25jZSA9PSBudWxsKSB7XG4gICAgICAgIG9uY2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKChfYmFzZSA9IHRoaXMuYmluZGluZ3MpW2V2ZW50XSA9PSBudWxsKSB7XG4gICAgICAgIF9iYXNlW2V2ZW50XSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbZXZlbnRdLnB1c2goe1xuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICBjdHg6IGN0eCxcbiAgICAgICAgb25jZTogb25jZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEV2ZW50ZWQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgICByZXR1cm4gdGhpcy5vbihldmVudCwgaGFuZGxlciwgY3R4LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIHZhciBpLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgIGlmICgoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGVsZXRlIHRoaXMuYmluZGluZ3NbZXZlbnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEV2ZW50ZWQucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzLCBjdHgsIGV2ZW50LCBoYW5kbGVyLCBpLCBvbmNlLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICBldmVudCA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgICBpZiAoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgX3JlZjEgPSB0aGlzLmJpbmRpbmdzW2V2ZW50XVtpXSwgaGFuZGxlciA9IF9yZWYxLmhhbmRsZXIsIGN0eCA9IF9yZWYxLmN0eCwgb25jZSA9IF9yZWYxLm9uY2U7XG4gICAgICAgICAgaGFuZGxlci5hcHBseShjdHggIT0gbnVsbCA/IGN0eCA6IHRoaXMsIGFyZ3MpO1xuICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpLCAxKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goaSsrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnRlZDtcblxuICB9KSgpO1xuXG4gIFBhY2UgPSB3aW5kb3cuUGFjZSB8fCB7fTtcblxuICB3aW5kb3cuUGFjZSA9IFBhY2U7XG5cbiAgZXh0ZW5kKFBhY2UsIEV2ZW50ZWQucHJvdG90eXBlKTtcblxuICBvcHRpb25zID0gUGFjZS5vcHRpb25zID0gZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgd2luZG93LnBhY2VPcHRpb25zLCBnZXRGcm9tRE9NKCkpO1xuXG4gIF9yZWYgPSBbJ2FqYXgnLCAnZG9jdW1lbnQnLCAnZXZlbnRMYWcnLCAnZWxlbWVudHMnXTtcbiAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgc291cmNlID0gX3JlZltfaV07XG4gICAgaWYgKG9wdGlvbnNbc291cmNlXSA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9uc1tzb3VyY2VdID0gZGVmYXVsdE9wdGlvbnNbc291cmNlXTtcbiAgICB9XG4gIH1cblxuICBOb1RhcmdldEVycm9yID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb1RhcmdldEVycm9yLCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gTm9UYXJnZXRFcnJvcigpIHtcbiAgICAgIF9yZWYxID0gTm9UYXJnZXRFcnJvci5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmMTtcbiAgICB9XG5cbiAgICByZXR1cm4gTm9UYXJnZXRFcnJvcjtcblxuICB9KShFcnJvcik7XG5cbiAgQmFyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEJhcigpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIH1cblxuICAgIEJhci5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRhcmdldEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5lbCA9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE5vVGFyZ2V0RXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IFwicGFjZSBwYWNlLWFjdGl2ZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL3BhY2UtZG9uZS9nLCAnJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICcgcGFjZS1ydW5uaW5nJztcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3NcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzLWlubmVyXCI+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cInBhY2UtYWN0aXZpdHlcIj48L2Rpdj4nO1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5maXJzdENoaWxkICE9IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXRFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCB0YXJnZXRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsO1xuICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICcnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnIHBhY2UtaW5hY3RpdmUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLXJ1bm5pbmcnLCAnJyk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLWRvbmUnO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByb2cpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9nO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSk7XG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgTm9UYXJnZXRFcnJvciA9IF9lcnJvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsID0gdm9pZCAwO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsLCBrZXksIHByb2dyZXNzU3RyLCB0cmFuc2Zvcm0sIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRhcmdldCkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHRoaXMucHJvZ3Jlc3MgKyBcIiUsIDAsIDApXCI7XG4gICAgICBfcmVmMiA9IFsnd2Via2l0VHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIGtleSA9IF9yZWYyW19qXTtcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc3R5bGVba2V5XSA9IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyB8fCB0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzIHwgMCAhPT0gdGhpcy5wcm9ncmVzcyB8IDApIHtcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzLXRleHQnLCBcIlwiICsgKHRoaXMucHJvZ3Jlc3MgfCAwKSArIFwiJVwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgPSAnOTknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzU3RyID0gdGhpcy5wcm9ncmVzcyA8IDEwID8gXCIwXCIgOiBcIlwiO1xuICAgICAgICAgIHByb2dyZXNzU3RyICs9IHRoaXMucHJvZ3Jlc3MgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGVsLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzcycsIFwiXCIgKyBwcm9ncmVzc1N0cik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3MgPj0gMTAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFyO1xuXG4gIH0pKCk7XG5cbiAgRXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50cygpIHtcbiAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBFdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCB2YWwpIHtcbiAgICAgIHZhciBiaW5kaW5nLCBfaiwgX2xlbjEsIF9yZWYyLCBfcmVzdWx0cztcbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgX3JlZjIgPSB0aGlzLmJpbmRpbmdzW25hbWVdO1xuICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICBiaW5kaW5nID0gX3JlZjJbX2pdO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2goYmluZGluZy5jYWxsKHRoaXMsIHZhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRXZlbnRzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgICB2YXIgX2Jhc2U7XG4gICAgICBpZiAoKF9iYXNlID0gdGhpcy5iaW5kaW5ncylbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBfYmFzZVtuYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbbmFtZV0ucHVzaChmbik7XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudHM7XG5cbiAgfSkoKTtcblxuICBfWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG5cbiAgX1hEb21haW5SZXF1ZXN0ID0gd2luZG93LlhEb21haW5SZXF1ZXN0O1xuXG4gIF9XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0O1xuXG4gIGV4dGVuZE5hdGl2ZSA9IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XG4gICAgdmFyIGUsIGtleSwgX3Jlc3VsdHM7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiBmcm9tLnByb3RvdHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCh0b1trZXldID09IG51bGwpICYmIHR5cGVvZiBmcm9tW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwge1xuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tLnByb3RvdHlwZVtrZXldO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0b1trZXldID0gZnJvbS5wcm90b3R5cGVba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGUgPSBfZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuICBpZ25vcmVTdGFjayA9IFtdO1xuXG4gIFBhY2UuaWdub3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGZuLCByZXQ7XG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ2lnbm9yZScpO1xuICAgIHJldCA9IGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIGlnbm9yZVN0YWNrLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICBQYWNlLnRyYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGZuLCByZXQ7XG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ3RyYWNrJyk7XG4gICAgcmV0ID0gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgaWdub3JlU3RhY2suc2hpZnQoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHNob3VsZFRyYWNrID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIF9yZWYyO1xuICAgIGlmIChtZXRob2QgPT0gbnVsbCkge1xuICAgICAgbWV0aG9kID0gJ0dFVCc7XG4gICAgfVxuICAgIGlmIChpZ25vcmVTdGFja1swXSA9PT0gJ3RyYWNrJykge1xuICAgICAgcmV0dXJuICdmb3JjZSc7XG4gICAgfVxuICAgIGlmICghaWdub3JlU3RhY2subGVuZ3RoICYmIG9wdGlvbnMuYWpheCkge1xuICAgICAgaWYgKG1ldGhvZCA9PT0gJ3NvY2tldCcgJiYgb3B0aW9ucy5hamF4LnRyYWNrV2ViU29ja2V0cykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoX3JlZjIgPSBtZXRob2QudG9VcHBlckNhc2UoKSwgX19pbmRleE9mLmNhbGwob3B0aW9ucy5hamF4LnRyYWNrTWV0aG9kcywgX3JlZjIpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBSZXF1ZXN0SW50ZXJjZXB0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXF1ZXN0SW50ZXJjZXB0LCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gUmVxdWVzdEludGVyY2VwdCgpIHtcbiAgICAgIHZhciBtb25pdG9yWEhSLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICBSZXF1ZXN0SW50ZXJjZXB0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgbW9uaXRvclhIUiA9IGZ1bmN0aW9uKHJlcSkge1xuICAgICAgICB2YXIgX29wZW47XG4gICAgICAgIF9vcGVuID0gcmVxLm9wZW47XG4gICAgICAgIHJldHVybiByZXEub3BlbiA9IGZ1bmN0aW9uKHR5cGUsIHVybCwgYXN5bmMpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2sodHlwZSkpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ3JlcXVlc3QnLCB7XG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX29wZW4uYXBwbHkocmVxLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IGZ1bmN0aW9uKGZsYWdzKSB7XG4gICAgICAgIHZhciByZXE7XG4gICAgICAgIHJlcSA9IG5ldyBfWE1MSHR0cFJlcXVlc3QoZmxhZ3MpO1xuICAgICAgICBtb25pdG9yWEhSKHJlcSk7XG4gICAgICAgIHJldHVybiByZXE7XG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0KTtcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cbiAgICAgIGlmIChfWERvbWFpblJlcXVlc3QgIT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcmVxO1xuICAgICAgICAgIHJlcSA9IG5ldyBfWERvbWFpblJlcXVlc3Q7XG4gICAgICAgICAgbW9uaXRvclhIUihyZXEpO1xuICAgICAgICAgIHJldHVybiByZXE7XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YRG9tYWluUmVxdWVzdCwgX1hEb21haW5SZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxuICAgICAgfVxuICAgICAgaWYgKChfV2ViU29ja2V0ICE9IG51bGwpICYmIG9wdGlvbnMuYWpheC50cmFja1dlYlNvY2tldHMpIHtcbiAgICAgICAgd2luZG93LldlYlNvY2tldCA9IGZ1bmN0aW9uKHVybCwgcHJvdG9jb2xzKSB7XG4gICAgICAgICAgdmFyIHJlcTtcbiAgICAgICAgICBpZiAocHJvdG9jb2xzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcSA9IG5ldyBfV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNob3VsZFRyYWNrKCdzb2NrZXQnKSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3NvY2tldCcsXG4gICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICBwcm90b2NvbHM6IHByb3RvY29scyxcbiAgICAgICAgICAgICAgcmVxdWVzdDogcmVxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBleHRlbmROYXRpdmUod2luZG93LldlYlNvY2tldCwgX1dlYlNvY2tldCk7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVxdWVzdEludGVyY2VwdDtcblxuICB9KShFdmVudHMpO1xuXG4gIF9pbnRlcmNlcHQgPSBudWxsO1xuXG4gIGdldEludGVyY2VwdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChfaW50ZXJjZXB0ID09IG51bGwpIHtcbiAgICAgIF9pbnRlcmNlcHQgPSBuZXcgUmVxdWVzdEludGVyY2VwdDtcbiAgICB9XG4gICAgcmV0dXJuIF9pbnRlcmNlcHQ7XG4gIH07XG5cbiAgc2hvdWxkSWdub3JlVVJMID0gZnVuY3Rpb24odXJsKSB7XG4gICAgdmFyIHBhdHRlcm4sIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgX3JlZjIgPSBvcHRpb25zLmFqYXguaWdub3JlVVJMcztcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgIHBhdHRlcm4gPSBfcmVmMltfal07XG4gICAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwYXR0ZXJuKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdCh1cmwpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oX2FyZykge1xuICAgIHZhciBhZnRlciwgYXJncywgcmVxdWVzdCwgdHlwZSwgdXJsO1xuICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xuICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIVBhY2UucnVubmluZyAmJiAob3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgIT09IGZhbHNlIHx8IHNob3VsZFRyYWNrKHR5cGUpID09PSAnZm9yY2UnKSkge1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGFmdGVyID0gb3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgfHwgMDtcbiAgICAgIGlmICh0eXBlb2YgYWZ0ZXIgPT09ICdib29sZWFuJykge1xuICAgICAgICBhZnRlciA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0aWxsQWN0aXZlLCBfaiwgX2xlbjEsIF9yZWYyLCBfcmVmMywgX3Jlc3VsdHM7XG4gICAgICAgIGlmICh0eXBlID09PSAnc29ja2V0Jykge1xuICAgICAgICAgIHN0aWxsQWN0aXZlID0gcmVxdWVzdC5yZWFkeVN0YXRlIDwgMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGlsbEFjdGl2ZSA9ICgwIDwgKF9yZWYyID0gcmVxdWVzdC5yZWFkeVN0YXRlKSAmJiBfcmVmMiA8IDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGlsbEFjdGl2ZSkge1xuICAgICAgICAgIFBhY2UucmVzdGFydCgpO1xuICAgICAgICAgIF9yZWYzID0gUGFjZS5zb3VyY2VzO1xuICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjMubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmM1tfal07XG4gICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQWpheE1vbml0b3IpIHtcbiAgICAgICAgICAgICAgc291cmNlLndhdGNoLmFwcGx5KHNvdXJjZSwgYXJncyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICAgIH1cbiAgICAgIH0sIGFmdGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIEFqYXhNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEFqYXhNb25pdG9yKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy53YXRjaC5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIEFqYXhNb25pdG9yLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKF9hcmcpIHtcbiAgICAgIHZhciByZXF1ZXN0LCB0cmFja2VyLCB0eXBlLCB1cmw7XG4gICAgICB0eXBlID0gX2FyZy50eXBlLCByZXF1ZXN0ID0gX2FyZy5yZXF1ZXN0LCB1cmwgPSBfYXJnLnVybDtcbiAgICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3NvY2tldCcpIHtcbiAgICAgICAgdHJhY2tlciA9IG5ldyBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrZXIgPSBuZXcgWEhSUmVxdWVzdFRyYWNrZXIocmVxdWVzdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5wdXNoKHRyYWNrZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWpheE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBYSFJSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBYSFJSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XG4gICAgICB2YXIgZXZlbnQsIHNpemUsIF9qLCBfbGVuMSwgX29ucmVhZHlzdGF0ZWNoYW5nZSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgaWYgKHdpbmRvdy5Qcm9ncmVzc0V2ZW50ICE9IG51bGwpIHtcbiAgICAgICAgc2l6ZSA9IG51bGw7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IF90aGlzLnByb2dyZXNzICsgKDEwMCAtIF90aGlzLnByb2dyZXNzKSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIF9yZWYyID0gWydsb2FkJywgJ2Fib3J0JywgJ3RpbWVvdXQnLCAnZXJyb3InXTtcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgZXZlbnQgPSBfcmVmMltfal07XG4gICAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgX3JlZjM7XG4gICAgICAgICAgaWYgKChfcmVmMyA9IHJlcXVlc3QucmVhZHlTdGF0ZSkgPT09IDAgfHwgX3JlZjMgPT09IDQpIHtcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDUwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHlwZW9mIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIiA/IF9vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWEhSUmVxdWVzdFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBTb2NrZXRSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XG4gICAgICB2YXIgZXZlbnQsIF9qLCBfbGVuMSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgX3JlZjIgPSBbJ2Vycm9yJywgJ29wZW4nXTtcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gU29ja2V0UmVxdWVzdFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBFbGVtZW50TW9uaXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFbGVtZW50TW9uaXRvcihvcHRpb25zKSB7XG4gICAgICB2YXIgc2VsZWN0b3IsIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLnNlbGVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0b3JzID0gW107XG4gICAgICB9XG4gICAgICBfcmVmMiA9IG9wdGlvbnMuc2VsZWN0b3JzO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIHNlbGVjdG9yID0gX3JlZjJbX2pdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IEVsZW1lbnRUcmFja2VyKHNlbGVjdG9yKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnRNb25pdG9yO1xuXG4gIH0pKCk7XG5cbiAgRWxlbWVudFRyYWNrZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgIH1cblxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuY2hlY2soKTtcbiAgICAgICAgfSksIG9wdGlvbnMuZWxlbWVudHMuY2hlY2tJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEVsZW1lbnRUcmFja2VyO1xuXG4gIH0pKCk7XG5cbiAgRG9jdW1lbnRNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIERvY3VtZW50TW9uaXRvci5wcm90b3R5cGUuc3RhdGVzID0ge1xuICAgICAgbG9hZGluZzogMCxcbiAgICAgIGludGVyYWN0aXZlOiA1MCxcbiAgICAgIGNvbXBsZXRlOiAxMDBcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRNb25pdG9yKCkge1xuICAgICAgdmFyIF9vbnJlYWR5c3RhdGVjaGFuZ2UsIF9yZWYyLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLnByb2dyZXNzID0gKF9yZWYyID0gdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pICE9IG51bGwgPyBfcmVmMiA6IDEwMDtcbiAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSAhPSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSBfdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfb25yZWFkeXN0YXRlY2hhbmdlID09PSBcImZ1bmN0aW9uXCIgPyBfb25yZWFkeXN0YXRlY2hhbmdlLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiB2b2lkIDA7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBEb2N1bWVudE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBFdmVudExhZ01vbml0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRMYWdNb25pdG9yKCkge1xuICAgICAgdmFyIGF2ZywgaW50ZXJ2YWwsIGxhc3QsIHBvaW50cywgc2FtcGxlcyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICBhdmcgPSAwO1xuICAgICAgc2FtcGxlcyA9IFtdO1xuICAgICAgcG9pbnRzID0gMDtcbiAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWZmO1xuICAgICAgICBkaWZmID0gbm93KCkgLSBsYXN0IC0gNTA7XG4gICAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgICAgc2FtcGxlcy5wdXNoKGRpZmYpO1xuICAgICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPiBvcHRpb25zLmV2ZW50TGFnLnNhbXBsZUNvdW50KSB7XG4gICAgICAgICAgc2FtcGxlcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGF2ZyA9IGF2Z0FtcGxpdHVkZShzYW1wbGVzKTtcbiAgICAgICAgaWYgKCsrcG9pbnRzID49IG9wdGlvbnMuZXZlbnRMYWcubWluU2FtcGxlcyAmJiBhdmcgPCBvcHRpb25zLmV2ZW50TGFnLmxhZ1RocmVzaG9sZCkge1xuICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDAgKiAoMyAvIChhdmcgKyAzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRXZlbnRMYWdNb25pdG9yO1xuXG4gIH0pKCk7XG5cbiAgU2NhbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNjYWxlcihzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5sYXN0ID0gdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xuICAgICAgdGhpcy5yYXRlID0gb3B0aW9ucy5pbml0aWFsUmF0ZTtcbiAgICAgIHRoaXMuY2F0Y2h1cCA9IDA7XG4gICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5sYXN0UHJvZ3Jlc3MgPSAwO1xuICAgICAgaWYgKHRoaXMuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2NhbGVyLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oZnJhbWVUaW1lLCB2YWwpIHtcbiAgICAgIHZhciBzY2FsaW5nO1xuICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHZhbCA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XG4gICAgICB9XG4gICAgICBpZiAodmFsID49IDEwMCkge1xuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA9PT0gdGhpcy5sYXN0KSB7XG4gICAgICAgIHRoaXMuc2luY2VMYXN0VXBkYXRlICs9IGZyYW1lVGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNpbmNlTGFzdFVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMucmF0ZSA9ICh2YWwgLSB0aGlzLmxhc3QpIC8gdGhpcy5zaW5jZUxhc3RVcGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXRjaHVwID0gKHZhbCAtIHRoaXMucHJvZ3Jlc3MpIC8gb3B0aW9ucy5jYXRjaHVwVGltZTtcbiAgICAgICAgdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xuICAgICAgICB0aGlzLmxhc3QgPSB2YWw7XG4gICAgICB9XG4gICAgICBpZiAodmFsID4gdGhpcy5wcm9ncmVzcykge1xuICAgICAgICB0aGlzLnByb2dyZXNzICs9IHRoaXMuY2F0Y2h1cCAqIGZyYW1lVGltZTtcbiAgICAgIH1cbiAgICAgIHNjYWxpbmcgPSAxIC0gTWF0aC5wb3codGhpcy5wcm9ncmVzcyAvIDEwMCwgb3B0aW9ucy5lYXNlRmFjdG9yKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gc2NhbGluZyAqIHRoaXMucmF0ZSAqIGZyYW1lVGltZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxhc3RQcm9ncmVzcyArIG9wdGlvbnMubWF4UHJvZ3Jlc3NQZXJGcmFtZSwgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4oMTAwLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHRoaXMubGFzdFByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2NhbGVyO1xuXG4gIH0pKCk7XG5cbiAgc291cmNlcyA9IG51bGw7XG5cbiAgc2NhbGVycyA9IG51bGw7XG5cbiAgYmFyID0gbnVsbDtcblxuICB1bmlTY2FsZXIgPSBudWxsO1xuXG4gIGFuaW1hdGlvbiA9IG51bGw7XG5cbiAgY2FuY2VsQW5pbWF0aW9uID0gbnVsbDtcblxuICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcblxuICBoYW5kbGVQdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAob3B0aW9ucy5yZXN0YXJ0T25QdXNoU3RhdGUpIHtcbiAgICAgIHJldHVybiBQYWNlLnJlc3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAhPSBudWxsKSB7XG4gICAgX3B1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xuICAgICAgcmV0dXJuIF9wdXNoU3RhdGUuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgIT0gbnVsbCkge1xuICAgIF9yZXBsYWNlU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVQdXNoU3RhdGUoKTtcbiAgICAgIHJldHVybiBfcmVwbGFjZVN0YXRlLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBTT1VSQ0VfS0VZUyA9IHtcbiAgICBhamF4OiBBamF4TW9uaXRvcixcbiAgICBlbGVtZW50czogRWxlbWVudE1vbml0b3IsXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50TW9uaXRvcixcbiAgICBldmVudExhZzogRXZlbnRMYWdNb25pdG9yXG4gIH07XG5cbiAgKGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHlwZSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyLCBfcmVmMywgX3JlZjQ7XG4gICAgUGFjZS5zb3VyY2VzID0gc291cmNlcyA9IFtdO1xuICAgIF9yZWYyID0gWydhamF4JywgJ2VsZW1lbnRzJywgJ2RvY3VtZW50JywgJ2V2ZW50TGFnJ107XG4gICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICB0eXBlID0gX3JlZjJbX2pdO1xuICAgICAgaWYgKG9wdGlvbnNbdHlwZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIHNvdXJjZXMucHVzaChuZXcgU09VUkNFX0tFWVNbdHlwZV0ob3B0aW9uc1t0eXBlXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVmNCA9IChfcmVmMyA9IG9wdGlvbnMuZXh0cmFTb3VyY2VzKSAhPSBudWxsID8gX3JlZjMgOiBbXTtcbiAgICBmb3IgKF9rID0gMCwgX2xlbjIgPSBfcmVmNC5sZW5ndGg7IF9rIDwgX2xlbjI7IF9rKyspIHtcbiAgICAgIHNvdXJjZSA9IF9yZWY0W19rXTtcbiAgICAgIHNvdXJjZXMucHVzaChuZXcgc291cmNlKG9wdGlvbnMpKTtcbiAgICB9XG4gICAgUGFjZS5iYXIgPSBiYXIgPSBuZXcgQmFyO1xuICAgIHNjYWxlcnMgPSBbXTtcbiAgICByZXR1cm4gdW5pU2NhbGVyID0gbmV3IFNjYWxlcjtcbiAgfSkoKTtcblxuICBQYWNlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICBQYWNlLnRyaWdnZXIoJ3N0b3AnKTtcbiAgICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBiYXIuZGVzdHJveSgpO1xuICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgaWYgKGFuaW1hdGlvbiAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGFuaW1hdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBpbml0KCk7XG4gIH07XG5cbiAgUGFjZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgUGFjZS50cmlnZ2VyKCdyZXN0YXJ0Jyk7XG4gICAgUGFjZS5zdG9wKCk7XG4gICAgcmV0dXJuIFBhY2Uuc3RhcnQoKTtcbiAgfTtcblxuICBQYWNlLmdvID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YXJ0O1xuICAgIFBhY2UucnVubmluZyA9IHRydWU7XG4gICAgYmFyLnJlbmRlcigpO1xuICAgIHN0YXJ0ID0gbm93KCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgcmV0dXJuIGFuaW1hdGlvbiA9IHJ1bkFuaW1hdGlvbihmdW5jdGlvbihmcmFtZVRpbWUsIGVucXVldWVOZXh0RnJhbWUpIHtcbiAgICAgIHZhciBhdmcsIGNvdW50LCBkb25lLCBlbGVtZW50LCBlbGVtZW50cywgaSwgaiwgcmVtYWluaW5nLCBzY2FsZXIsIHNjYWxlckxpc3QsIHN1bSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyO1xuICAgICAgcmVtYWluaW5nID0gMTAwIC0gYmFyLnByb2dyZXNzO1xuICAgICAgY291bnQgPSBzdW0gPSAwO1xuICAgICAgZG9uZSA9IHRydWU7XG4gICAgICBmb3IgKGkgPSBfaiA9IDAsIF9sZW4xID0gc291cmNlcy5sZW5ndGg7IF9qIDwgX2xlbjE7IGkgPSArK19qKSB7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZXNbaV07XG4gICAgICAgIHNjYWxlckxpc3QgPSBzY2FsZXJzW2ldICE9IG51bGwgPyBzY2FsZXJzW2ldIDogc2NhbGVyc1tpXSA9IFtdO1xuICAgICAgICBlbGVtZW50cyA9IChfcmVmMiA9IHNvdXJjZS5lbGVtZW50cykgIT0gbnVsbCA/IF9yZWYyIDogW3NvdXJjZV07XG4gICAgICAgIGZvciAoaiA9IF9rID0gMCwgX2xlbjIgPSBlbGVtZW50cy5sZW5ndGg7IF9rIDwgX2xlbjI7IGogPSArK19rKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2pdO1xuICAgICAgICAgIHNjYWxlciA9IHNjYWxlckxpc3Rbal0gIT0gbnVsbCA/IHNjYWxlckxpc3Rbal0gOiBzY2FsZXJMaXN0W2pdID0gbmV3IFNjYWxlcihlbGVtZW50KTtcbiAgICAgICAgICBkb25lICY9IHNjYWxlci5kb25lO1xuICAgICAgICAgIGlmIChzY2FsZXIuZG9uZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgc3VtICs9IHNjYWxlci50aWNrKGZyYW1lVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF2ZyA9IHN1bSAvIGNvdW50O1xuICAgICAgYmFyLnVwZGF0ZSh1bmlTY2FsZXIudGljayhmcmFtZVRpbWUsIGF2ZykpO1xuICAgICAgaWYgKGJhci5kb25lKCkgfHwgZG9uZSB8fCBjYW5jZWxBbmltYXRpb24pIHtcbiAgICAgICAgYmFyLnVwZGF0ZSgxMDApO1xuICAgICAgICBQYWNlLnRyaWdnZXIoJ2RvbmUnKTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYmFyLmZpbmlzaCgpO1xuICAgICAgICAgIFBhY2UucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBQYWNlLnRyaWdnZXIoJ2hpZGUnKTtcbiAgICAgICAgfSwgTWF0aC5tYXgob3B0aW9ucy5naG9zdFRpbWUsIE1hdGgubWF4KG9wdGlvbnMubWluVGltZSAtIChub3coKSAtIHN0YXJ0KSwgMCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbnF1ZXVlTmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUGFjZS5zdGFydCA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XG4gICAgZXh0ZW5kKG9wdGlvbnMsIF9vcHRpb25zKTtcbiAgICBQYWNlLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBiYXIucmVuZGVyKCk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBOb1RhcmdldEVycm9yID0gX2Vycm9yO1xuICAgIH1cbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWNlJykpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KFBhY2Uuc3RhcnQsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUGFjZS50cmlnZ2VyKCdzdGFydCcpO1xuICAgICAgcmV0dXJuIFBhY2UuZ28oKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ3BhY2UnXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUGFjZTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFBhY2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRPblBhZ2VMb2FkKSB7XG4gICAgICBQYWNlLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gTG9hZGVkIGFmdGVyIGFkbWlubHRlIGFwcC5qc1xuXG4iLCJpbXBvcnQgJ2FkbWluLWx0ZSdcbiIsIi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG4vLyBMb2FkZWQgYmVmb3JlIGFkbWlubHRlIGFwcC5qc1xuaW1wb3J0ICcuLi9ib290c3RyYXAnO1xuaW1wb3J0ICdwYWNlJztcbmltcG9ydCAnLi4vcGx1Z2lucyc7XG4iLCIvKipcbiAqIFRoaXMgYm9vdHN0cmFwIGZpbGUgaXMgdXNlZCBmb3IgYm90aCBmcm9udGVuZCBhbmQgYmFja2VuZFxuICovXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ3BvcHBlci5qcyc7IC8vIFJlcXVpcmVkIGZvciBCUzRcbmltcG9ydCAnYm9vdHN0cmFwJztcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9ICQ7XG53aW5kb3cuU3dhbCA9IFN3YWw7XG53aW5kb3cuXyA9IF87IC8vIExvZGFzaFxuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGVuY3J5cHRlZDogdHJ1ZVxuLy8gfSk7XG4iLCIvKipcbiAqIEFsbG93cyB5b3UgdG8gYWRkIGRhdGEtbWV0aG9kPVwiTUVUSE9EIHRvIGxpbmtzIHRvIGF1dG9tYXRpY2FsbHkgaW5qZWN0IGEgZm9ybVxuICogd2l0aCB0aGUgbWV0aG9kIG9uIGNsaWNrXG4gKlxuICogRXhhbXBsZTogPGEgaHJlZj1cInt7cm91dGUoJ2N1c3RvbWVycy5kZXN0cm95JywgJGN1c3RvbWVyLT5pZCl9fVwiXG4gKiBkYXRhLW1ldGhvZD1cImRlbGV0ZVwiIG5hbWU9XCJkZWxldGVfaXRlbVwiPkRlbGV0ZTwvYT5cbiAqXG4gKiBJbmplY3RzIGEgZm9ybSB3aXRoIHRoYXQncyBmaXJlZCBvbiBjbGljayBvZiB0aGUgbGluayB3aXRoIGEgREVMRVRFIHJlcXVlc3QuXG4gKiBHb29kIGJlY2F1c2UgeW91IGRvbid0IGhhdmUgdG8gZGlydHkgeW91ciBIVE1MIHdpdGggZGVsZXRlIGZvcm1zIGV2ZXJ5d2hlcmUuXG4gKi9cbmZ1bmN0aW9uIGFkZERlbGV0ZUZvcm1zKCkge1xuICAgICQoJ1tkYXRhLW1ldGhvZF0nKS5hcHBlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQodGhpcykuZmluZCgnZm9ybScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcbjxmb3JtIGFjdGlvbj0nXCIgKyAkKHRoaXMpLmF0dHIoJ2hyZWYnKSArIFwiJyBtZXRob2Q9J1BPU1QnIG5hbWU9J2RlbGV0ZV9pdGVtJyBzdHlsZT0nZGlzcGxheTpub25lJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdfbWV0aG9kJyB2YWx1ZT0nXCIgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtbWV0aG9kJykgKyBcIic+XFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nX3Rva2VuJyB2YWx1ZT0nXCIgKyAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpICsgXCInPlxcblwiICtcbiAgICAgICAgICAgICAgICAnPC9mb3JtPlxcbic7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybiAnJyB9XG4gICAgfSlcbiAgICAgICAgLmF0dHIoJ2hyZWYnLCAnIycpXG4gICAgICAgIC5hdHRyKCdzdHlsZScsICdjdXJzb3I6cG9pbnRlcjsnKVxuICAgICAgICAuYXR0cignb25jbGljaycsICckKHRoaXMpLmZpbmQoXCJmb3JtXCIpLnN1Ym1pdCgpOycpO1xufVxuXG4vKipcbiAqIFBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZS5cbiAqL1xuJChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBkYXRhLW1ldGhvZD1cImRlbGV0ZVwiIGZvcm1zIHRvIGFsbCBkZWxldGUgbGlua3NcbiAgICAgKi9cbiAgICBhZGREZWxldGVGb3JtcygpO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBhbGwgc3VibWl0IGJ1dHRvbnMgb25jZSBjbGlja2VkXG4gICAgICovXG4gICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgY29uZmlybSBmb3JtIGRlbGV0ZSB1c2luZyBTd2VldCBBbGVydFxuICAgICAqL1xuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ2Zvcm1bbmFtZT1kZWxldGVfaXRlbV0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGxpbmsgPSAkKCdhW2RhdGEtbWV0aG9kPVwiZGVsZXRlXCJdJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykgOiAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSA6ICdZZXMsIGRlbGV0ZSc7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpIDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPyc7XG5cbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbCxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICB9KTtcbiAgICB9KS5vbignY2xpY2snLCAnYVtuYW1lPWNvbmZpcm1faXRlbV0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJpYyAnYXJlIHlvdSBzdXJlJyBjb25maXJtIGJveFxuICAgICAgICAgKi9cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSA6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz8nO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpIDogJ0NhbmNlbCc7XG4gICAgICAgIGNvbnN0IGNvbmZpcm0gPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykgOiAnQ29udGludWUnO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm0sXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWwsXG4gICAgICAgICAgICB0eXBlOiAnaW5mbydcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgd2luZG93LmxvY2F0aW9uLmFzc2lnbihsaW5rLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
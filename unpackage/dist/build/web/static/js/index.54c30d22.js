(function(e){function n(n){for(var i,r,u=n[0],c=n[1],s=n[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&f.push(t[r][0]),t[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],i=!0,u=1;u<o.length;u++){var c=o[u];0!==t[c]&&(i=!1)}i&&(a.splice(n--,1),e=r(r.s=o[0]))}return e}var i={},t={index:0},a=[];function r(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var n=[],o=t[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,i){o=t[e]=[n,i]}));n.push(o[2]=i);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(e){return r.p+"static/js/"+({"pages-index-index~pages-phone-phone":"pages-index-index~pages-phone-phone","pages-index-index":"pages-index-index","pages-phone-phone":"pages-phone-phone","pages-webview-webview":"pages-webview-webview"}[e]||e)+"."+{"pages-index-index~pages-phone-phone":"9315872d","pages-index-index":"e5ff1856","pages-phone-phone":"0579149a","pages-webview-webview":"246bad6e"}[e]+".js"}(e);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(s);var o=t[e];if(0!==o){if(o){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}t[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},r.m=e,r.c=i,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(o,i,function(n){return e[n]}.bind(null,i));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var p=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("956f")},"0196":function(e,n,o){var i=o("bdbb").default;o("bf0f"),uni.addInterceptor({returnValue:function(e){return!e||"object"!==i(e)&&"function"!==typeof e||"function"!==typeof e.then?e:new Promise((function(n,o){e.then((function(e){return e[0]?o(e[0]):n(e[1])}))}))}})},"23a1":function(e,n,o){"use strict";o.r(n);var i=o("6753"),t=o("e9d3");for(var a in t)["default"].indexOf(a)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(a);o("2e83");var r=o("828b"),u=Object(r["a"])(t["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=u.exports},"2e83":function(e,n,o){"use strict";var i=o("babb"),t=o.n(i);t.a},"5eb9":function(e,n,o){e.exports=o.p+"static/font/Poppins_Regular.ttf"},6753:function(e,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return t})),o.d(n,"a",(function(){}));var i=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},t=[]},"6d77":function(e,n,o){var i=o("c86c"),t=o("2ec5"),a=o("5eb9"),r=o("dbfe");n=i(!1);var u=t(a),c=t(r);n.push([e.i,"@font-face{font-family:Poppins;src:url("+u+");font-display:swap}@font-face{font-family:semibolditalic;src:url("+c+");font-display:swap}\n\n/*每个页面公共css */",""]),e.exports=n},"93ee":function(e,n,o){"use strict";(function(e){var n=o("f5bd").default;o("473f"),o("bf0f"),o("de6c"),o("5c47"),o("a1c1");var i=n(o("9b8e")),t={keys:function(){return[]}};e["____183B4ED____"]=!0,delete e["____183B4ED____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"ClarifAI Trade",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="4.24",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__183B4ED",e.__uniConfig.appName="ClarifAI Trade",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="en",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=t.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),i=t(n);return Object.assign(e[o]||(e[o]={}),i.common||i),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,i.default.component("pages-index-index",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-phone-phone"),o.e("pages-index-index")]).then(function(){return e(o("f5e9"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-phone-phone",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-phone-phone"),o.e("pages-phone-phone")]).then(function(){return e(o("54d3"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-webview-webview",(function(e){var n={component:o.e("pages-webview-webview").then(function(){return e(o("e387"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"ClarifAI Trade",navigationStyle:"custom"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/phone/phone",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"ClarifAI Trade",enablePullDownRefresh:!1,navigationStyle:"custom",navigationBarTextStyle:"black"})},[e("pages-phone-phone",{slot:"page"})])}},meta:{name:"pages-phone-phone",isNVue:!1,maxWidth:0,pagePath:"pages/phone/phone",windowTop:0}},{path:"/pages/webview/webview",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"ClarifAI Trade",enablePullDownRefresh:!1,navigationStyle:"custom"})},[e("pages-webview-webview",{slot:"page"})])}},meta:{name:"pages-webview-webview",isNVue:!1,maxWidth:0,pagePath:"pages/webview/webview",windowTop:0}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("0ee4"))},"956f":function(e,n,o){"use strict";var i=o("f5bd").default,t=i(o("9b1b"));o("3dde"),o("a8b2"),o("1480"),o("6e4a"),o("93ee"),o("9337");var a=i(o("23a1")),r=i(o("9b8e"));o("0196");var u=i(o("ef2f")),c=o("e1aa");r.default.use(u.default),r.default.prototype.$wow=new c.WOW({boxClass:"wow",animateClass:"animated",offset:50,mobile:!0,live:!1}),r.default.config.productionTip=!1,a.default.mpType="app";var s=new r.default((0,t.default)({},a.default));s.$mount()},babb:function(e,n,o){var i=o("6d77");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var t=o("967d").default;t("1fd0776d",i,!0,{sourceMap:!1,shadowMode:!1})},c075:function(e,n,o){"use strict";o("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("5c47"),o("0506");var i={onLaunch:function(){console.log("App Launch"),/Mobi|Android|iPhone/i.test(navigator.userAgent)?uni.redirectTo({url:"/pages/phone/phone"}):(console.log("当前设备是pc"),uni.redirectTo({url:"/pages/index/index"}))},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=i},dbfe:function(e,n,o){e.exports=o.p+"static/font/mont-semibolditalic.ttf"},e9d3:function(e,n,o){"use strict";o.r(n);var i=o("c075"),t=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){o.d(n,e,(function(){return i[e]}))}(a);n["default"]=t.a}});
import{r as $,x as Oe,y as V,o as C,c as O,b as d,F as Ne,z as Te,A as W,n as k,f as B,t as N,h as je,s as ke,u as Be,d as Ue,w as De,i as ae,T as Le,p as qe,g as Me}from"./vendor.3b44fa06.js";import{_ as oe}from"./index.1e4a1f92.js";var X={exports:{}},ie=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},Ie=ie,S=Object.prototype.toString;function G(t){return S.call(t)==="[object Array]"}function K(t){return typeof t=="undefined"}function Fe(t){return t!==null&&!K(t)&&t.constructor!==null&&!K(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function He(t){return S.call(t)==="[object ArrayBuffer]"}function ze(t){return typeof FormData!="undefined"&&t instanceof FormData}function Je(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function Ve(t){return typeof t=="string"}function We(t){return typeof t=="number"}function ue(t){return t!==null&&typeof t=="object"}function U(t){if(S.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Xe(t){return S.call(t)==="[object Date]"}function Ge(t){return S.call(t)==="[object File]"}function Ke(t){return S.call(t)==="[object Blob]"}function le(t){return S.call(t)==="[object Function]"}function Ye(t){return ue(t)&&le(t.pipe)}function Qe(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function Ze(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function et(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Y(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),G(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function Q(){var t={};function e(n,a){U(t[a])&&U(n)?t[a]=Q(t[a],n):U(n)?t[a]=Q({},n):G(n)?t[a]=n.slice():t[a]=n}for(var r=0,s=arguments.length;r<s;r++)Y(arguments[r],e);return t}function tt(t,e,r){return Y(e,function(n,a){r&&typeof n=="function"?t[a]=Ie(n,r):t[a]=n}),t}function rt(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var b={isArray:G,isArrayBuffer:He,isBuffer:Fe,isFormData:ze,isArrayBufferView:Je,isString:Ve,isNumber:We,isObject:ue,isPlainObject:U,isUndefined:K,isDate:Xe,isFile:Ge,isBlob:Ke,isFunction:le,isStream:Ye,isURLSearchParams:Qe,isStandardBrowserEnv:et,forEach:Y,merge:Q,extend:tt,trim:Ze,stripBOM:rt},R=b;function ce(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var de=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(R.isURLSearchParams(r))n=r.toString();else{var a=[];R.forEach(r,function(l,x){l===null||typeof l=="undefined"||(R.isArray(l)?x=x+"[]":l=[l],R.forEach(l,function(c){R.isDate(c)?c=c.toISOString():R.isObject(c)&&(c=JSON.stringify(c)),a.push(ce(x)+"="+ce(c))}))}),n=a.join("&")}if(n){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},nt=b;function D(){this.handlers=[]}D.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};D.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};D.prototype.forEach=function(e){nt.forEach(this.handlers,function(s){s!==null&&e(s)})};var st=D,at=b,ot=function(e,r){at.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},fe=function(e,r,s,n,a){return e.config=r,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},it=fe,he=function(e,r,s,n,a){var i=new Error(e);return it(i,r,s,n,a)},ut=he,lt=function(e,r,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):r(ut("Request failed with status code "+s.status,s.config,null,s.request,s))},L=b,ct=L.isStandardBrowserEnv()?function(){return{write:function(r,s,n,a,i,u){var l=[];l.push(r+"="+encodeURIComponent(s)),L.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),L.isString(a)&&l.push("path="+a),L.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),dt=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},ft=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},ht=dt,pt=ft,mt=function(e,r){return e&&!ht(r)?pt(e,r):r},Z=b,vt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],bt=function(e){var r={},s,n,a;return e&&Z.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=Z.trim(u.substr(0,a)).toLowerCase(),n=Z.trim(u.substr(a+1)),s){if(r[s]&&vt.indexOf(s)>=0)return;s==="set-cookie"?r[s]=(r[s]?r[s]:[]).concat([n]):r[s]=r[s]?r[s]+", "+n:n}}),r},pe=b,yt=pe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(a){var i=a;return e&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(i){var u=pe.isString(i)?n(i):i;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}();function ee(t){this.message=t}ee.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ee.prototype.__CANCEL__=!0;var q=ee,M=b,xt=lt,wt=ct,gt=de,_t=mt,Et=bt,Ct=yt,te=he,St=F,$t=q,me=function(e){return new Promise(function(s,n){var a=e.data,i=e.headers,u=e.responseType,l;function x(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}M.isFormData(a)&&delete i["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+m)}var _=_t(e.baseURL,e.url);o.open(e.method.toUpperCase(),gt(_,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function h(){if(!!o){var f="getAllResponseHeaders"in o?Et(o.getAllResponseHeaders()):null,E=!u||u==="text"||u==="json"?o.responseText:o.response,g={data:E,status:o.status,statusText:o.statusText,headers:f,config:e,request:o};xt(function(J){s(J),x()},function(J){n(J),x()},g),o=null}}if("onloadend"in o?o.onloadend=h:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(h)},o.onabort=function(){!o||(n(te("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(te("Network Error",e,null,o)),o=null},o.ontimeout=function(){var E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",g=e.transitional||St.transitional;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),n(te(E,e,g.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},M.isStandardBrowserEnv()){var v=(e.withCredentials||Ct(_))&&e.xsrfCookieName?wt.read(e.xsrfCookieName):void 0;v&&(i[e.xsrfHeaderName]=v)}"setRequestHeader"in o&&M.forEach(i,function(E,g){typeof a=="undefined"&&g.toLowerCase()==="content-type"?delete i[g]:o.setRequestHeader(g,E)}),M.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(f){!o||(n(!f||f&&f.type?new $t("canceled"):f),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null),o.send(a)})},p=b,ve=ot,Rt=fe,At={"Content-Type":"application/x-www-form-urlencoded"};function be(t,e){!p.isUndefined(t)&&p.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Pt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=me),t}function Ot(t,e,r){if(p.isString(t))try{return(e||JSON.parse)(t),p.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var I={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Pt(),transformRequest:[function(e,r){return ve(r,"Accept"),ve(r,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(be(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)||r&&r["Content-Type"]==="application/json"?(be(r,"application/json"),Ot(e)):e}],transformResponse:[function(e){var r=this.transitional||I.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(a)throw i.name==="SyntaxError"?Rt(i,this,"E_JSON_PARSE"):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){I.headers[e]={}});p.forEach(["post","put","patch"],function(e){I.headers[e]=p.merge(At)});var F=I,Nt=b,Tt=F,jt=function(e,r,s){var n=this||Tt;return Nt.forEach(s,function(i){e=i.call(n,e,r)}),e},ye=function(e){return!!(e&&e.__CANCEL__)},xe=b,re=jt,kt=ye,Bt=F,Ut=q;function ne(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ut("canceled")}var Dt=function(e){ne(e),e.headers=e.headers||{},e.data=re.call(e,e.data,e.headers,e.transformRequest),e.headers=xe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),xe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Bt.adapter;return r(e).then(function(n){return ne(e),n.data=re.call(e,n.data,n.headers,e.transformResponse),n},function(n){return kt(n)||(ne(e),n&&n.response&&(n.response.data=re.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},y=b,we=function(e,r){r=r||{};var s={};function n(o,c){return y.isPlainObject(o)&&y.isPlainObject(c)?y.merge(o,c):y.isPlainObject(c)?y.merge({},c):y.isArray(c)?c.slice():c}function a(o){if(y.isUndefined(r[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function i(o){if(!y.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(y.isUndefined(r[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function l(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var x={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return y.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var m=x[c]||a,_=m(c);y.isUndefined(_)&&m!==l||(s[c]=_)}),s},ge={version:"0.24.0"},Lt=ge.version,se={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){se[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var _e={};se.transitional=function(e,r,s){function n(a,i){return"[Axios v"+Lt+"] Transitional option '"+a+"'"+i+(s?". "+s:"")}return function(a,i,u){if(e===!1)throw new Error(n(i," has been removed"+(r?" in "+r:"")));return r&&!_e[i]&&(_e[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,i,u):!0}};function qt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var s=Object.keys(t),n=s.length;n-- >0;){var a=s[n],i=e[a];if(i){var u=t[a],l=u===void 0||i(u,a,t);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+a)}}var Mt={assertOptions:qt,validators:se},Ee=b,It=de,Ce=st,Se=Dt,H=we,$e=Mt,A=$e.validators;function T(t){this.defaults=t,this.interceptors={request:new Ce,response:new Ce}}T.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=H(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;r!==void 0&&$e.assertOptions(r,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1);var s=[],n=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(e)===!1||(n=n&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});var a=[];this.interceptors.response.forEach(function(m){a.push(m.fulfilled,m.rejected)});var i;if(!n){var u=[Se,void 0];for(Array.prototype.unshift.apply(u,s),u=u.concat(a),i=Promise.resolve(e);u.length;)i=i.then(u.shift(),u.shift());return i}for(var l=e;s.length;){var x=s.shift(),o=s.shift();try{l=x(l)}catch(c){o(c);break}}try{i=Se(l)}catch(c){return Promise.reject(c)}for(;a.length;)i=i.then(a.shift(),a.shift());return i};T.prototype.getUri=function(e){return e=H(this.defaults,e),It(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ee.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(r,s){return this.request(H(s||{},{method:e,url:r,data:(s||{}).data}))}});Ee.forEach(["post","put","patch"],function(e){T.prototype[e]=function(r,s,n){return this.request(H(n||{},{method:e,url:r,data:s}))}});var Ft=T,Ht=q;function P(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(s){if(!!r._listeners){var n,a=r._listeners.length;for(n=0;n<a;n++)r._listeners[n](s);r._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(i){r.subscribe(i),n=i}).then(s);return a.cancel=function(){r.unsubscribe(n)},a},t(function(n){r.reason||(r.reason=new Ht(n),e(r.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};P.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};P.source=function(){var e,r=new P(function(n){e=n});return{token:r,cancel:e}};var zt=P,Jt=function(e){return function(s){return e.apply(null,s)}},Vt=function(e){return typeof e=="object"&&e.isAxiosError===!0},Re=b,Wt=ie,z=Ft,Xt=we,Gt=F;function Ae(t){var e=new z(t),r=Wt(z.prototype.request,e);return Re.extend(r,z.prototype,e),Re.extend(r,e),r.create=function(n){return Ae(Xt(t,n))},r}var w=Ae(Gt);w.Axios=z;w.Cancel=q;w.CancelToken=zt;w.isCancel=ye;w.VERSION=ge.version;w.all=function(e){return Promise.all(e)};w.spread=Jt;w.isAxiosError=Vt;X.exports=w;X.exports.default=w;var Kt=X.exports;const Yt={class:"py-10"},Qt={class:"max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row py-8 gap-4 overflow-y-auto max-h-screen"},Zt={class:"flex p-5 m-3 items-center shadow-xl rounded-md"},er={class:"flex flex-col"},tr={class:"flex py-1"},rr=["href"],nr={class:"flex py-1"},sr={class:"flex py-1"},ar=d("span",{class:"font-bold"},null,-1),or={class:"max-w-xl mx-auto flex justify-center"},ir={class:"mx-auto flex items-center"},ur=["onClick"],lr={class:"font-bold m-5 relative"},cr=["onClick"],dr={setup(t){const e=$([]),r=$("https://api.github.com/users/bobbyrahmanda13/repos?page="),s=$(1);Oe(()=>{n()});const n=()=>{try{Kt.get(r.value+s.value).then(h=>{e.value=h.data})}catch(h){console.log(h)}},a=V(()=>e.value.slice().sort((h,v)=>{const f=new Date(h.updated_at);return new Date(v.updated_at)-f})),i=h=>{let v=new Date(h),f={weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return v.toLocaleString(["ban","id"],f)},u=$(1),l=$(6),x=()=>{u.value--},o=()=>{u.value++},c=V(()=>{let v=e.value.length/l.value;return Math.ceil(v)}),m=V(()=>{let h=(u.value-1)*l.value,v=h+l.value;return a.value.slice(h,v)}),_=(h,v)=>h.length>v?h.substr(0,v-1)+"...":h;return(h,v)=>(C(),O("div",null,[d("div",Yt,[d("div",Qt,[(C(!0),O(Ne,null,Te(W(m),f=>(C(),O("div",{key:f.id,class:"rounded-lg bg-primary-black lg:p-4 p-3 transition duration-500 ease-in-out text-primary-gray hover:text-primary-white"},[d("div",Zt,[d("div",er,[d("div",tr,[d("a",{class:"hover:decoration-primary hover:decoration-2 hover:underline",target:"_blank",href:f.html_url},N(_(f.name,20)),9,rr)]),d("div",nr,[d("span",null,N(f.language),1)]),d("div",sr,[d("span",null,[ar,je(" "+N(i(f.updated_at)),1)])])])])]))),128))])]),d("div",or,[d("ul",ir,[d("li",{class:k(["relative",u.value===1?"md:invisible hidden ":""])},[d("button",{class:"bg-primary mx-2 px-3 py-2 text-primary-white font-bold rounded-lg",onClick:B(x,["prevent"])}," Previous ",8,ur)],2),d("li",lr,N(u.value)+" of "+N(W(c)),1),d("li",{class:k(["relative",u.value===W(c)?"md:invisible hidden":""])},[d("button",{class:"bg-primary mx-2 px-3 py-2 text-primary-white font-bold rounded-lg",onClick:B(o,["prevent"])}," Next ",8,cr)],2)])])]))}},fr={},hr={class:"flex flex-col h-screen bg-center bg-cover bg-no-repeat"},pr=ke('<div class="py-20"><div class="grid place-items-center w-4/5 mx-auto p-10 my-5 sm:my-auto bg-white-600 border-4 border-primary bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-24 w-24 text-primary" viewBox="0 0 16 16"><path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path></svg><h1 class="text-4xl font-bold uppercase text-primary transition duration-500"> Coming Soon </h1><h2 class="text-lg text-primary-gray transition duration-500"> I haven&#39;t added this page yet because it requires Rest API to retrieve data from Database, so it requires Backend to be able to create Rest API and access it on Front End </h2></div></div>',1),mr=[pr];function vr(t,e){return C(),O("div",hr,mr)}var br=oe(fr,[["render",vr]]);const j=t=>(qe("data-v-9bebccba"),t=t(),Me(),t),yr={class:"py-20 text-center"},xr=j(()=>d("h2",{class:"font-extrabold text-4xl"},"Project",-1)),wr={class:"mt-10"},gr={class:"flex justify-center items-center max-w-xl mx-auto"},_r={class:"flex"},Er=j(()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 mx-1 sm:w-6 sm:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"})],-1)),Cr=j(()=>d("span",{class:"mx-1 text-md font-bold sm:text-base"},"Source Code",-1)),Sr=[Er,Cr],$r=j(()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 mx-1 sm:w-6 sm:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1)),Rr=j(()=>d("span",{class:"mx-1 text-md font-bold sm:text-base"},"Design",-1)),Ar=[$r,Rr],Pr={setup(t){Be({title:"Project",description:"Web Personal Bobby Rahmanda",meta:[{property:"og:type",content:"article"},{property:"og:title",content:"the result of the project created"},{property:"site_name",content:"bobby rahmanda"},{property:"og:url",content:"https://bobbyrahmanda.vercel.app/project"},{property:"og:description",content:"Personal web from bobby rahmanda contains about the portfolio, hardware, software used, and about me "}]});const e=$("sourceCode");return(r,s)=>(C(),O("div",yr,[xr,d("div",wr,[d("div",gr,[d("div",_r,[d("button",{onClick:s[0]||(s[0]=B(n=>e.value="sourceCode",["prevent"])),class:k([{"hover:text-white text-white bg-blue-800":e.value==="sourceCode","hover:text-blue-800":e.value==="Design"},"flex items-center h-10 px-10 bg-transparent focus:outline-none"])},Sr,2),d("button",{onClick:s[1]||(s[1]=B(n=>e.value="Design",["prevent"])),class:k([{"hover:text-primary-white text-primary-white bg-blue-800 ":e.value==="Design","hover:text-blue-800":e.value==="sourceCode"},"flex items-center h-10 px-10 bg-transparent focus:outline-none"])},Ar,2)])]),Ue(Le,{name:"slide-fade"},{default:De(()=>[e.value==="sourceCode"?(C(),ae(dr,{key:0})):(C(),ae(br,{key:1}))]),_:1})])]))}};var Tr=oe(Pr,[["__scopeId","data-v-9bebccba"]]);export{Tr as default};
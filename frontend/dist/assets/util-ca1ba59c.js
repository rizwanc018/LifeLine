import"./node-stdlib-browser-ff393b4c.js";import{i as or}from"./is-arguments-61b8b6fe.js";import{i as fr}from"./is-generator-function-72117440.js";import{w as ur}from"./which-typed-array-80513630.js";import{i as ar}from"./is-typed-array-77d4720c.js";import{i as sr}from"./inherits-2c87d58f.js";import{p as j}from"./process-78812e81.js";var cr={},er={};(function(i){var g=or,J=fr,y=ur,F=ar;function m(n){return n.call.bind(n)}var d=typeof BigInt<"u",C=typeof Symbol<"u",l=m(Object.prototype.toString),Z=m(Number.prototype.valueOf),E=m(String.prototype.valueOf),q=m(Boolean.prototype.valueOf);if(d)var N=m(BigInt.prototype.valueOf);if(C)var K=m(Symbol.prototype.valueOf);function b(n,ir){if(typeof n!="object")return!1;try{return ir(n),!0}catch{return!1}}i.isArgumentsObject=g,i.isGeneratorFunction=J,i.isTypedArray=F;function L(n){return typeof Promise<"u"&&n instanceof Promise||n!==null&&typeof n=="object"&&typeof n.then=="function"&&typeof n.catch=="function"}i.isPromise=L;function $(n){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(n):F(n)||e(n)}i.isArrayBufferView=$;function W(n){return y(n)==="Uint8Array"}i.isUint8Array=W;function v(n){return y(n)==="Uint8ClampedArray"}i.isUint8ClampedArray=v;function Q(n){return y(n)==="Uint16Array"}i.isUint16Array=Q;function R(n){return y(n)==="Uint32Array"}i.isUint32Array=R;function D(n){return y(n)==="Int8Array"}i.isInt8Array=D;function X(n){return y(n)==="Int16Array"}i.isInt16Array=X;function h(n){return y(n)==="Int32Array"}i.isInt32Array=h;function B(n){return y(n)==="Float32Array"}i.isFloat32Array=B;function S(n){return y(n)==="Float64Array"}i.isFloat64Array=S;function I(n){return y(n)==="BigInt64Array"}i.isBigInt64Array=I;function k(n){return y(n)==="BigUint64Array"}i.isBigUint64Array=k;function A(n){return l(n)==="[object Map]"}A.working=typeof Map<"u"&&A(new Map);function Y(n){return typeof Map>"u"?!1:A.working?A(n):n instanceof Map}i.isMap=Y;function O(n){return l(n)==="[object Set]"}O.working=typeof Set<"u"&&O(new Set);function V(n){return typeof Set>"u"?!1:O.working?O(n):n instanceof Set}i.isSet=V;function M(n){return l(n)==="[object WeakMap]"}M.working=typeof WeakMap<"u"&&M(new WeakMap);function x(n){return typeof WeakMap>"u"?!1:M.working?M(n):n instanceof WeakMap}i.isWeakMap=x;function U(n){return l(n)==="[object WeakSet]"}U.working=typeof WeakSet<"u"&&U(new WeakSet);function w(n){return U(n)}i.isWeakSet=w;function T(n){return l(n)==="[object ArrayBuffer]"}T.working=typeof ArrayBuffer<"u"&&T(new ArrayBuffer);function G(n){return typeof ArrayBuffer>"u"?!1:T.working?T(n):n instanceof ArrayBuffer}i.isArrayBuffer=G;function r(n){return l(n)==="[object DataView]"}r.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&r(new DataView(new ArrayBuffer(1),0,1));function e(n){return typeof DataView>"u"?!1:r.working?r(n):n instanceof DataView}i.isDataView=e;var t=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function o(n){return l(n)==="[object SharedArrayBuffer]"}function a(n){return typeof t>"u"?!1:(typeof o.working>"u"&&(o.working=o(new t)),o.working?o(n):n instanceof t)}i.isSharedArrayBuffer=a;function s(n){return l(n)==="[object AsyncFunction]"}i.isAsyncFunction=s;function f(n){return l(n)==="[object Map Iterator]"}i.isMapIterator=f;function u(n){return l(n)==="[object Set Iterator]"}i.isSetIterator=u;function c(n){return l(n)==="[object Generator]"}i.isGeneratorObject=c;function p(n){return l(n)==="[object WebAssembly.Module]"}i.isWebAssemblyCompiledModule=p;function P(n){return b(n,Z)}i.isNumberObject=P;function _(n){return b(n,E)}i.isStringObject=_;function z(n){return b(n,q)}i.isBooleanObject=z;function H(n){return d&&b(n,N)}i.isBigIntObject=H;function rr(n){return C&&b(n,K)}i.isSymbolObject=rr;function nr(n){return P(n)||_(n)||z(n)||H(n)||rr(n)}i.isBoxedPrimitive=nr;function tr(n){return typeof Uint8Array<"u"&&(G(n)||a(n))}i.isAnyArrayBuffer=tr,["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(n){Object.defineProperty(i,n,{enumerable:!1,value:function(){throw new Error(n+" is not supported in userland")}})})})(er);var yr=function(g){return g&&typeof g=="object"&&typeof g.copy=="function"&&typeof g.fill=="function"&&typeof g.readUInt8=="function"};(function(i){var g=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),o={},a=0;a<t.length;a++)o[t[a]]=Object.getOwnPropertyDescriptor(e,t[a]);return o},J=/%[sdj%]/g;i.format=function(r){if(!D(r)){for(var e=[],t=0;t<arguments.length;t++)e.push(d(arguments[t]));return e.join(" ")}for(var t=1,o=arguments,a=o.length,s=String(r).replace(J,function(u){if(u==="%%")return"%";if(t>=a)return u;switch(u){case"%s":return String(o[t++]);case"%d":return Number(o[t++]);case"%j":try{return JSON.stringify(o[t++])}catch{return"[Circular]"}default:return u}}),f=o[t];t<a;f=o[++t])v(f)||!S(f)?s+=" "+f:s+=" "+d(f);return s},i.deprecate=function(r,e){if(typeof j<"u"&&j.noDeprecation===!0)return r;if(typeof j>"u")return function(){return i.deprecate(r,e).apply(this,arguments)};var t=!1;function o(){if(!t){if(j.throwDeprecation)throw new Error(e);j.traceDeprecation?console.trace(e):console.error(e),t=!0}return r.apply(this,arguments)}return o};var y={},F=/^$/;if({}.NODE_DEBUG){var m={}.NODE_DEBUG;m=m.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),F=new RegExp("^"+m+"$","i")}i.debuglog=function(r){if(r=r.toUpperCase(),!y[r])if(F.test(r)){var e=j.pid;y[r]=function(){var t=i.format.apply(i,arguments);console.error("%s %d: %s",r,e,t)}}else y[r]=function(){};return y[r]};function d(r,e){var t={seen:[],stylize:l};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),W(e)?t.showHidden=e:e&&i._extend(t,e),h(t.showHidden)&&(t.showHidden=!1),h(t.depth)&&(t.depth=2),h(t.colors)&&(t.colors=!1),h(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=C),E(t,r,t.depth)}i.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function C(r,e){var t=d.styles[e];return t?"\x1B["+d.colors[t][0]+"m"+r+"\x1B["+d.colors[t][1]+"m":r}function l(r,e){return r}function Z(r){var e={};return r.forEach(function(t,o){e[t]=!0}),e}function E(r,e,t){if(r.customInspect&&e&&A(e.inspect)&&e.inspect!==i.inspect&&!(e.constructor&&e.constructor.prototype===e)){var o=e.inspect(t,r);return D(o)||(o=E(r,o,t)),o}var a=q(r,e);if(a)return a;var s=Object.keys(e),f=Z(s);if(r.showHidden&&(s=Object.getOwnPropertyNames(e)),k(e)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return N(e);if(s.length===0){if(A(e)){var u=e.name?": "+e.name:"";return r.stylize("[Function"+u+"]","special")}if(B(e))return r.stylize(RegExp.prototype.toString.call(e),"regexp");if(I(e))return r.stylize(Date.prototype.toString.call(e),"date");if(k(e))return N(e)}var c="",p=!1,P=["{","}"];if($(e)&&(p=!0,P=["[","]"]),A(e)){var _=e.name?": "+e.name:"";c=" [Function"+_+"]"}if(B(e)&&(c=" "+RegExp.prototype.toString.call(e)),I(e)&&(c=" "+Date.prototype.toUTCString.call(e)),k(e)&&(c=" "+N(e)),s.length===0&&(!p||e.length==0))return P[0]+c+P[1];if(t<0)return B(e)?r.stylize(RegExp.prototype.toString.call(e),"regexp"):r.stylize("[Object]","special");r.seen.push(e);var z;return p?z=K(r,e,t,f,s):z=s.map(function(H){return b(r,e,t,f,H,p)}),r.seen.pop(),L(z,c,P)}function q(r,e){if(h(e))return r.stylize("undefined","undefined");if(D(e)){var t="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(t,"string")}if(R(e))return r.stylize(""+e,"number");if(W(e))return r.stylize(""+e,"boolean");if(v(e))return r.stylize("null","null")}function N(r){return"["+Error.prototype.toString.call(r)+"]"}function K(r,e,t,o,a){for(var s=[],f=0,u=e.length;f<u;++f)U(e,String(f))?s.push(b(r,e,t,o,String(f),!0)):s.push("");return a.forEach(function(c){c.match(/^\d+$/)||s.push(b(r,e,t,o,c,!0))}),s}function b(r,e,t,o,a,s){var f,u,c;if(c=Object.getOwnPropertyDescriptor(e,a)||{value:e[a]},c.get?c.set?u=r.stylize("[Getter/Setter]","special"):u=r.stylize("[Getter]","special"):c.set&&(u=r.stylize("[Setter]","special")),U(o,a)||(f="["+a+"]"),u||(r.seen.indexOf(c.value)<0?(v(t)?u=E(r,c.value,null):u=E(r,c.value,t-1),u.indexOf(`
`)>-1&&(s?u=u.split(`
`).map(function(p){return"  "+p}).join(`
`).slice(2):u=`
`+u.split(`
`).map(function(p){return"   "+p}).join(`
`))):u=r.stylize("[Circular]","special")),h(f)){if(s&&a.match(/^\d+$/))return u;f=JSON.stringify(""+a),f.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(f=f.slice(1,-1),f=r.stylize(f,"name")):(f=f.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),f=r.stylize(f,"string"))}return f+": "+u}function L(r,e,t){var o=r.reduce(function(a,s){return s.indexOf(`
`)>=0,a+s.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?t[0]+(e===""?"":e+`
 `)+" "+r.join(`,
  `)+" "+t[1]:t[0]+e+" "+r.join(", ")+" "+t[1]}i.types=er;function $(r){return Array.isArray(r)}i.isArray=$;function W(r){return typeof r=="boolean"}i.isBoolean=W;function v(r){return r===null}i.isNull=v;function Q(r){return r==null}i.isNullOrUndefined=Q;function R(r){return typeof r=="number"}i.isNumber=R;function D(r){return typeof r=="string"}i.isString=D;function X(r){return typeof r=="symbol"}i.isSymbol=X;function h(r){return r===void 0}i.isUndefined=h;function B(r){return S(r)&&O(r)==="[object RegExp]"}i.isRegExp=B,i.types.isRegExp=B;function S(r){return typeof r=="object"&&r!==null}i.isObject=S;function I(r){return S(r)&&O(r)==="[object Date]"}i.isDate=I,i.types.isDate=I;function k(r){return S(r)&&(O(r)==="[object Error]"||r instanceof Error)}i.isError=k,i.types.isNativeError=k;function A(r){return typeof r=="function"}i.isFunction=A;function Y(r){return r===null||typeof r=="boolean"||typeof r=="number"||typeof r=="string"||typeof r=="symbol"||typeof r>"u"}i.isPrimitive=Y,i.isBuffer=yr;function O(r){return Object.prototype.toString.call(r)}function V(r){return r<10?"0"+r.toString(10):r.toString(10)}var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(){var r=new Date,e=[V(r.getHours()),V(r.getMinutes()),V(r.getSeconds())].join(":");return[r.getDate(),M[r.getMonth()],e].join(" ")}i.log=function(){console.log("%s - %s",x(),i.format.apply(i,arguments))},i.inherits=sr,i._extend=function(r,e){if(!e||!S(e))return r;for(var t=Object.keys(e),o=t.length;o--;)r[t[o]]=e[t[o]];return r};function U(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var w=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;i.promisify=function(e){if(typeof e!="function")throw new TypeError('The "original" argument must be of type Function');if(w&&e[w]){var t=e[w];if(typeof t!="function")throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,w,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var o,a,s=new Promise(function(c,p){o=c,a=p}),f=[],u=0;u<arguments.length;u++)f.push(arguments[u]);f.push(function(c,p){c?a(c):o(p)});try{e.apply(this,f)}catch(c){a(c)}return s}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),w&&Object.defineProperty(t,w,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,g(e))},i.promisify.custom=w;function T(r,e){if(!r){var t=new Error("Promise was rejected with a falsy value");t.reason=r,r=t}return e(r)}function G(r){if(typeof r!="function")throw new TypeError('The "original" argument must be of type Function');function e(){for(var t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);var a=t.pop();if(typeof a!="function")throw new TypeError("The last argument must be of type Function");var s=this,f=function(){return a.apply(s,arguments)};r.apply(this,t).then(function(u){j.nextTick(f.bind(null,null,u))},function(u){j.nextTick(T.bind(null,u,f))})}return Object.setPrototypeOf(e,Object.getPrototypeOf(r)),Object.defineProperties(e,g(r)),e}i.callbackify=G})(cr);export{cr as u};
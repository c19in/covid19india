!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/covid19india/",r(r.s=0)}([function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[X]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===q}(t)||Array.isArray(t)||!!t[L]||!!t.constructor[L]||p(t)||y(t))}function u(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:B)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[X];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:y(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function a(t,e){return 2===c(t)?t.get(e):t[e]}function s(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return T&&t instanceof Map}function y(t){return U&&t instanceof Set}function d(t){return t.o||t.t}function v(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=G(t);delete e[X];for(var r=B(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function b(t,e){return void 0===e&&(e=!1),m(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=h),Object.freeze(t),e&&u(t,(function(t,e){return b(e,!0)}),!0)),t}function h(){n(2)}function m(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function P(t){var e=H[t];return e||n(18,t),e}function g(){return N}function O(t,e){e&&(P("Patches"),t.u=[],t.s=[],t.v=e)}function j(t){w(t),t.p.forEach(A),t.p=null}function w(t){t===N&&(N=t.l)}function S(t){return N={p:[],l:N,h:t,m:!0,_:0}}function A(t){var e=t[X];0===e.i||1===e.i?e.j():e.O=!0}function D(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||P("ES5").S(e,t,o),o?(r[X].P&&(j(e),n(4)),i(t)&&(t=_(e,t),e.l||M(e,t)),e.u&&P("Patches").M(r[X],t,e.u,e.s)):t=_(e,r,[]),j(e),e.u&&e.v(e.u,e.s),t!==J?t:void 0}function _(t,e,r){if(m(e))return e;var n=e[X];if(!n)return u(e,(function(o,i){return x(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return M(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=v(n.k):n.o;u(3===n.i?new Set(o):o,(function(e,i){return x(t,n,o,e,i,r)})),M(t,o,!1),r&&t.u&&P("Patches").R(n,r,t.u,t.s)}return n.o}function x(t,e,r,n,u,c){if(o(u)){var a=_(t,u,c&&e&&3!==e.i&&!f(e.D,n)?c.concat(n):void 0);if(s(r,n,a),!o(a))return;t.m=!1}if(i(u)&&!m(u)){if(!t.h.F&&t._<1)return;_(t,u),e&&e.A.l||M(t,u)}}function M(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&b(e,r)}function k(t,e){var r=t[X];return(r?d(r):t)[e]}function F(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function R(t){t.P||(t.P=!0,t.l&&R(t.l))}function E(t){t.o||(t.o=v(t.t))}function z(t,e,r){var n=p(e)?P("MapSet").N(e,r):y(e)?P("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=Q;r&&(o=[n],i=V);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):P("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function C(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[X],o=c(e);if(n){if(!n.P&&(n.i<4||!P("ES5").K(n)))return n.t;n.I=!0,r=I(e,o),n.I=!1}else r=I(e,o);return u(r,(function(e,o){n&&a(n.t,e)===o||s(r,e,t(o))})),3===o?new Set(r):r}(t)}function I(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return v(t)}r.r(e),r.d(e,"getDistricts",(function(){return rt}));var K,N,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),T="undefined"!=typeof Map,U="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=W?Symbol.for("immer-nothing"):((K={})["immer-nothing"]=!0,K),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",X=W?Symbol.for("immer-state"):"__$immer_state",q=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),B="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,G=Object.getOwnPropertyDescriptors||function(t){var e={};return B(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},H={},Q={get:function(t,e){if(e===X)return t;var r=d(t);if(!f(r,e))return function(t,e,r){var n,o=F(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===k(t.t,e)?(E(t),t.o[e]=z(t.A.h,n,t)):n},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,r){var n=F(d(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=k(d(t),e),i=null==o?void 0:o[X];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(l(r,o)&&(void 0!==r||f(t.t,e)))return!0;E(t),R(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==k(t.t,e)||e in t.t?(t.D[e]=!1,E(t),R(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=d(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},V={};u(Q,(function(t,e){V[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),V.deleteProperty=function(t,e){return Q.deleteProperty.call(this,t[0],e)},V.set=function(t,e,r){return Q.set.call(this,t[0],e,r,t[0])};var Y=function(){function t(t){var e=this;this.g=$,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var c=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var f;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var a=S(e),s=z(e,t,void 0),l=!0;try{f=r(s),l=!1}finally{l?j(a):w(a)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(t){return O(a,o),D(t,a)}),(function(t){throw j(a),t})):(O(a,o),D(f,a))}if(!t||"object"!=typeof t){if((f=r(t))===J)return;return void 0===f&&(f=t),e.F&&b(f,!0),f}n(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=C(t));var e=S(this),r=z(this,t,void 0);return r[X].C=!0,w(e),r},e.finishDraft=function(t,e){var r=(t&&t[X]).A;return O(r,e),D(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!$&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=P("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}(),Z=new Y,tt=Z.produce,et=(Z.produceWithPatches.bind(Z),Z.setAutoFreeze.bind(Z),Z.setUseProxies.bind(Z),Z.applyPatches.bind(Z),Z.createDraft.bind(Z),Z.finishDraft.bind(Z),tt),rt=function(t){var e={};Object.keys(t).map((function(r){var n;return Object.keys((null===(n=t[r])||void 0===n?void 0:n.districts)||{}).map((function(n){return e=et(e||{},(function(e){var o="".concat(n,"-").concat(r);e[o]=t[r].districts[n],e[o].districtName=n,e[o].stateCode=r})),null})),null})),postMessage(e)};addEventListener("message",(function(t){var r,n=t.data,o=n.type,i=n.method,u=n.id,c=n.params;"RPC"===o&&i&&((r=e[i])?Promise.resolve().then((function(){return r.apply(e,c)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:u,result:t})})).catch((function(t){var e={message:t};t.stack&&(e.message=t.message,e.stack=t.stack,e.name=t.name),postMessage({type:"RPC",id:u,error:e})}))})),postMessage({type:"RPC",method:"ready"})}]);
//# sourceMappingURL=c659e8ad0bd30d160901.worker.js.map
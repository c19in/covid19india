/*! For license information please see 26.596dd7f6.chunk.js.LICENSE.txt */
(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[26],{154:function(e,t,n){"use strict";var i=n(2),c=n(92),a=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=a);var r=Object(i.useRef)(t);Object(i.useEffect)((function(){r.current=t}),[t]),Object(i.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&r.current(t)},i=0,a=n;i<a.length;i++){var s=a[i];Object(c.d)(document,s,t)}return function(){for(var e=0,i=n;e<i.length;e++){var a=i[e];Object(c.c)(document,a,t)}}}),[n,e])}},243:function(e,t,n){"use strict";n.r(t);var i=n(130),c=n(145),a=n(95),r=n(93),s=n.n(r),o=n(2),u=n(281),l=n(97),f=n(154),g=n(19);function v(e){var t,n=this,r=e.showLanguageSwitcher,v=e.setShowLanguageSwitcher,b=Object(u.a)(),d=b.t,h=b.i18n,j=Object.keys(c).includes(null===h||void 0===h?void 0:h.language)?null===h||void 0===h?void 0:h.language:null===h||void 0===h||null===(t=h.options)||void 0===t?void 0:t.fallbackLng[0],p=Object(l.useTransition)(r,{from:i.b,enter:i.a,leave:i.b,config:{mass:1,tension:100,friction:15}}),O=Object(o.useRef)();Object(f.a)(O,(function(e){"navbar-left"!==e.target.className&&v(!1)}));var m=Object(o.useCallback)((function(e){h&&h.changeLanguage(e)}),[h]);return p((function(e,t){return t&&Object(g.jsxs)(l.animated.div,{className:"LanguageSwitcher",ref:O,style:e,children:[Object(g.jsx)("h3",{children:d("We speak the following languages")}),Object(g.jsx)("div",{className:"languages",children:Object.keys(c).map((function(e){return Object(g.jsx)("div",{className:s()("language",{"is-highlighted":j===e}),onClick:m.bind(n,e),children:Object(g.jsx)("span",{children:c[e]})},e)}))}),Object(g.jsx)("div",{className:"close-button",onClick:v.bind(n,!1),children:Object(g.jsx)(a.c,{size:16})})]})}))}t.default=Object(o.memo)(v)},93:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var r=c.apply(null,i);r&&e.push(r)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(i=function(){return c}.apply(t,[]))||(e.exports=i)}()}}]);
//# sourceMappingURL=26.596dd7f6.chunk.js.map
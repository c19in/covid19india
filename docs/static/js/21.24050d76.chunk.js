(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[21],{130:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return b}));var a={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},c={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},r={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},s={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},l={opacity:1,transform:"translate3d(0, 0px, 0)",height:228},b={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},147:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},182:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a=n(46),i=(n(182),n(98)),c=n(130),o=n(147),r=n(2),s=n(239),l=n(240),b=n(241),d=n(242),j=n(243),u=n(244),h=n(285),O=n(47),p=n(97),f=n(237),m=n(279),x=n(238),v=n(184),g=n(19);function w(e){var t=this,n=e.pages,a=e.setExpand,c=e.darkMode,o=e.windowSize,s=Object(r.useRef)(null),l=Object(h.a)().t,b=Object(r.useCallback)((function(){o.width>=769&&a(!1)}),[a,o.width]);return Object(g.jsxs)("div",{className:"expand",ref:s,onMouseLeave:b,children:[n.map((function(e,n){return!0===e.showInNavbar?Object(g.jsx)(O.b,Object(i.a)(Object(i.a)({to:e.pageLink},o.width<769&&{onClick:a.bind(t,!1)}),{},{children:Object(g.jsx)("span",Object(i.a)(Object(i.a)({},y(e.pageLink,e.animationDelayForNavbar)),{},{children:l(e.displayName)}))}),n):null})),o.width<769&&Object(g.jsx)(S,{darkMode:c}),Object(g.jsx)("div",{className:"expand-bottom",children:Object(g.jsx)("h5",{children:l("A crowdsourced initiative.")})})]})}var k=function(e){var t,n=this,j=e.pages,u=e.showLanguageSwitcher,k=e.setShowLanguageSwitcher,y=Object(h.a)(),L=y.i18n,C=y.t,z=Object.keys(o).includes(null===L||void 0===L?void 0:L.language)?null===L||void 0===L?void 0:L.language:null===L||void 0===L||null===(t=L.options)||void 0===t?void 0:t.fallbackLng[0],M=Object(r.useState)(!1),I=Object(a.a)(M,2),E=I[0],T=I[1],P=Object(v.a)(!1);Object(f.a)(E);var A=Object(m.a)();Object(x.a)((function(){return T(!1)}));var J=Object(p.useTransition)(!0,{from:{opacity:0},enter:{opacity:1}}),B=Object(p.useTransition)(E,{from:A.width<769?c.d:c.c,enter:A.width<769?c.f:c.e,leave:A.width<769?c.d:c.c,config:{mass:1,tension:210,friction:26}}),F=Object(r.useCallback)((function(){A.width>=769&&T(!0)}),[A.width]),D=Object(r.useCallback)((function(){E&&T(!1),k(!u)}),[E,u,T,k]);return J((function(e,t){return Object(g.jsxs)(p.animated.div,{className:"Navbar",style:e,children:[Object(g.jsx)("div",{className:"navbar-left",onClick:D,children:o[z]}),Object(g.jsx)("div",{className:"navbar-middle",children:Object(g.jsxs)(O.b,{to:"/",onClick:T.bind(n,!1),children:["Covid19",Object(g.jsx)("span",{children:"India"})]})}),Object(g.jsxs)("div",Object(i.a)(Object(i.a)({className:"navbar-right",onMouseEnter:F},A.width<769&&{onClick:T.bind(n,!E)}),{},{children:[A.width<769&&Object(g.jsx)("span",{children:C(E?"Close":"Menu")}),A.width>=769&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.b,{to:"/",children:Object(g.jsx)("span",{children:Object(g.jsx)(s.a,Object(i.a)({},N("/")))})}),Object(g.jsx)(O.b,{to:"/blog",children:Object(g.jsx)("span",{children:Object(g.jsx)(l.a,Object(i.a)({},N("/blog")))})}),Object(g.jsx)(O.b,{to:"/volunteers",children:Object(g.jsx)("span",{children:Object(g.jsx)(b.a,Object(i.a)({},N("/volunteers")))})}),Object(g.jsx)(O.b,{to:"/about",children:Object(g.jsx)("span",{children:Object(g.jsx)(d.a,Object(i.a)({},N("/about")))})}),Object(g.jsx)("span",{children:Object(g.jsx)(S,{darkMode:P})})]})]})),B((function(e,t){return t&&Object(g.jsx)(p.animated.div,{style:e,children:Object(g.jsx)(w,{pages:j,setExpand:T,darkMode:P,windowSize:A})})}))]})}))},y=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},N=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},S=function(e){var t=e.darkMode;return Object(g.jsx)("div",{className:"SunMoon",onClick:t.toggle,children:Object(g.jsx)("div",{children:t.value?Object(g.jsx)(j.a,{color:"#ffc107"}):Object(g.jsx)(u.a,{})})})},L=n(24),C=n(5),z=Object(r.lazy)((function(){return Object(L.l)((function(){return Promise.all([n.e(4),n.e(6),n.e(17)]).then(n.bind(null,278))}))})),M=Object(r.lazy)((function(){return Object(L.l)((function(){return Promise.all([n.e(4),n.e(30)]).then(n.bind(null,245))}))})),I=Object(r.lazy)((function(){return Object(L.l)((function(){return Promise.all([n.e(0),n.e(4),n.e(22)]).then(n.bind(null,246))}))})),E=Object(r.lazy)((function(){return Object(L.l)((function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,247))}))})),T=Object(r.lazy)((function(){return Object(L.l)((function(){return Promise.all([n.e(0),n.e(38)]).then(n.bind(null,248))}))}));t.default=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(C.h)(),o=[{pageLink:"/",view:z,displayName:"Home",showInNavbar:!0},{pageLink:"/about",view:M,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:I,displayName:"State",showInNavbar:!1}];return Object(r.useEffect)((function(){n&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[n]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(r.Suspense,{fallback:Object(g.jsx)("div",{}),children:Object(g.jsx)(E,{showLanguageSwitcher:n,setShowLanguageSwitcher:i})}),Object(g.jsx)(k,{pages:o,showLanguageSwitcher:n,setShowLanguageSwitcher:i}),Object(g.jsx)(T,{}),Object(g.jsx)(r.Suspense,{fallback:Object(g.jsx)("div",{}),children:Object(g.jsxs)(C.d,{location:c,children:[o.map((function(e,t){return Object(g.jsx)(C.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return Object(g.jsx)(e.view,{})}},t)})),Object(g.jsx)(C.a,{to:"/"})]})})]})}}}]);
//# sourceMappingURL=21.24050d76.chunk.js.map
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[33],{112:function(e,t,i){"use strict";var n=i(46),c=i(2),s={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(c.useState)(!1),i=Object(n.a)(t,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){e.current&&new IntersectionObserver((function(t,i){t.forEach((function(t){t.isIntersecting&&(r(!0),i.unobserve(e.current))}))}),s).observe(e.current)}),[e]),a}},242:function(e,t,i){"use strict";i.r(t);var n=i(98),c=i(46),s=i(11),a=i(112),r=i(24),l=i(95),d=i(93),o=i.n(d),j=i(68),u=i(241),b=i(2),O=i(153),v=i(281),h=i(5),f=i(240),m=i(126),x=i(19),p=Object(b.lazy)((function(){return Object(r.l)((function(){return Promise.all([i.e(1),i.e(18)]).then(i.bind(null,205))}))})),g=Object(b.lazy)((function(){return Object(r.l)((function(){return i.e(8).then(i.bind(null,222))}))})),y=Object(b.lazy)((function(){return Object(r.l)((function(){return i.e(30).then(i.bind(null,155))}))})),N=Object(b.lazy)((function(){return Object(r.l)((function(){return i.e(36).then(i.bind(null,156))}))})),C=Object(b.lazy)((function(){return Object(r.l)((function(){return Promise.all([i.e(2),i.e(6),i.e(5)]).then(i.bind(null,223))}))})),k=Object(b.lazy)((function(){return Object(r.l)((function(){return i.e(31).then(i.bind(null,157))}))})),w=Object(b.lazy)((function(){return Object(r.l)((function(){return Promise.all([i.e(1),i.e(3),i.e(24)]).then(i.bind(null,158))}))})),M=Object(b.lazy)((function(){return Object(r.l)((function(){return i.e(7).then(i.bind(null,225))}))})),S=Object(b.lazy)((function(){return Object(r.l)((function(){return Promise.all([i.e(2),i.e(34)]).then(i.bind(null,224))}))})),z=Object(b.lazy)((function(){return Object(r.l)((function(){return i.e(22).then(i.bind(null,173))}))}));function D(){var e,t,i,d,D,H=Object(v.a)().t,R=Object(h.i)().stateCode.toUpperCase(),I=Object(f.a)("mapStatistic","active"),U=Object(c.a)(I,2),P=U[0],E=U[1],F=Object(b.useState)(!1),J=Object(c.a)(F,2),T=J[0],V=J[1],W=Object(b.useState)({stateCode:R,districtName:null}),B=Object(c.a)(W,2),L=B[0],q=B[1],A=Object(b.useState)(!1),G=Object(c.a)(A,2),K=G[0],Q=G[1];Object(b.useEffect)((function(){L.stateCode!==R&&(q({stateCode:R,districtName:null}),V(!1))}),[L.stateCode,R]);var X=Object(m.a)("".concat(s.e,"/timeseries-").concat(R,".min.json"),r.b,{revalidateOnMount:!0,refreshInterval:1e5}),Y=X.data,Z=X.error,$=Object(m.a)("".concat(s.e,"/data.min.json"),r.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,_=null===$||void 0===$?void 0:$[R],ee=Object(b.useMemo)((function(){if(_){var e=window.innerWidth>=540?3:2,t=(null===_||void 0===_?void 0:_.districts)?Object.keys(_.districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(t/e)}}),[_]),te=Object(b.useRef)(),ie=Object(a.a)(te),ne=Object(b.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,i){return e.push({animationDelay:"".concat(250*i,"ms")}),null})),e}),[]),ce=T?window.innerWidth>=540?10:8:6,se=Object(b.useMemo)((function(){var e,t,i,n,c,s=[null===_||void 0===_||null===(e=_.meta)||void 0===e?void 0:e.date,null===_||void 0===_||null===(t=_.meta)||void 0===t||null===(i=t.tested)||void 0===i?void 0:i.date,null===_||void 0===_||null===(n=_.meta)||void 0===n||null===(c=n.vaccinated)||void 0===c?void 0:c.date].filter((function(e){return e}));return s.length>0?Object(j.a)(Object(u.a)(s.map((function(e){return Object(r.k)(e)}))),{representation:"date"}):null}),[_]),ae=s.p.includes(P)?P:"confirmed",re=Object(b.useMemo)((function(){var e;return!!((null===_||void 0===_?void 0:_.districts)&&(null===(e=_.districts)||void 0===e?void 0:e[s.H])&&s.u.every((function(e){return Object(r.i)(_,"total",e)===Object(r.i)(_.districts[s.H],"total",e)})))}),[_]),le=s.z[ae],de=(null===L||void 0===L?void 0:L.districtName)&&L.districtName!==s.H&&re,oe=Object.keys((!re||!le.hasPrimary)&&(null===_||void 0===_?void 0:_.districts)||{});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(O.a,{children:[Object(x.jsxs)("title",{children:["Coronavirus Outbreak in ",s.y[R]," - covid19india.org"]}),Object(x.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(s.y[R],": Latest Map and Case Count")})]}),Object(x.jsxs)("div",{className:"State",children:[Object(x.jsxs)("div",{className:"state-left",children:[Object(x.jsx)(M,{data:_,stateCode:R}),Object(x.jsxs)("div",{style:{position:"relative"},children:[Object(x.jsx)(k,{mapStatistic:P,setMapStatistic:E}),Object(x.jsx)(y,{data:_}),Object(x.jsx)(w,{timeseries:null===Y||void 0===Y||null===(e=Y[R])||void 0===e?void 0:e.dates,stateCode:R,forceRender:!!Z})]}),(null===_||void 0===_||null===(t=_.total)||void 0===t?void 0:t.vaccinated1)&&Object(x.jsx)(N,{data:_}),$&&Object(x.jsx)(b.Suspense,{fallback:Object(x.jsx)("div",{style:{minHeight:"50rem"}}),children:Object(x.jsx)(C,{stateCode:R,data:$,regionHighlighted:L,setRegionHighlighted:q,mapStatistic:P,setMapStatistic:E,lastDataDate:se,delta7Mode:K,setDelta7Mode:Q,noRegionHighlightedDistrictData:de,noDistrictData:re})}),Object(x.jsx)("span",{ref:te}),ie&&$&&Object(x.jsx)(b.Suspense,{fallback:Object(x.jsx)("div",{}),children:Object(x.jsx)(S,{stateCode:R,data:$,timeseries:null===Y||void 0===Y||null===(i=Y[R])||void 0===i?void 0:i.dates})})]}),Object(x.jsx)("div",{className:"state-right",children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"district-bar",children:[Object(x.jsxs)("div",{className:o()("district-bar-top",{expanded:T}),children:[Object(x.jsxs)("div",{className:"district-bar-left",children:[Object(x.jsx)("h2",{className:o()(ae,"fadeInUp"),style:ne[0],children:H("Top districts")}),Object(x.jsx)("div",{className:"districts fadeInUp ".concat(T?"is-grid":""),style:T?Object(n.a)({gridTemplateRows:"repeat(".concat(ee,", 2rem)")},ne[1]):ne[1],children:oe.filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var i=_.districts[e],n=_.districts[t];return Object(r.i)(n,"total",P)-Object(r.i)(i,"total",P)}(e,t)})).slice(0,T?void 0:5).map((function(e){var t=Object(r.i)(_.districts[e],"total",ae),i=Object(r.i)(_.districts[e],"delta",ae);return Object(x.jsxs)("div",{className:"district",children:[Object(x.jsx)("h2",{children:Object(r.f)(t)}),Object(x.jsx)("h5",{children:H(e)}),"active"!==ae&&Object(x.jsx)("div",{className:"delta",children:Object(x.jsx)("h6",{className:ae,children:i>0?"\u2191"+Object(r.f)(i):""})})]},e)}))})]}),Object(x.jsxs)("div",{className:"district-bar-right fadeInUp",style:ne[2],children:[Y&&("confirmed"===ae||"deceased"===ae)&&Object(x.jsx)("div",{className:"happy-sign",children:Object.keys((null===(d=Y[R])||void 0===d?void 0:d.dates)||{}).slice(-ce).every((function(e){return 0===Object(r.i)(Y[R].dates[e],"delta",ae)}))&&Object(x.jsxs)("div",{className:"alert ".concat("confirmed"===ae?"is-green":""),children:[Object(x.jsx)(l.w,{}),Object(x.jsxs)("div",{className:"alert-right",children:["No new ",ae," cases in the past five days"]})]})}),Object(x.jsx)(p,{timeseries:null===Y||void 0===Y||null===(D=Y[R])||void 0===D?void 0:D.dates,statistic:ae,stateCode:R,lookback:ce,forceRender:!!Z})]})]}),Object(x.jsx)("div",{className:"district-bar-bottom",children:oe.length>5?Object(x.jsx)("button",{className:"button fadeInUp",onClick:function(){V(!T)},style:ne[3],children:Object(x.jsx)("span",{children:H(T?"View less":"View all")})}):Object(x.jsx)("div",{style:{height:"3.75rem",flexBasis:"15%"}})})]}),Object(x.jsx)(b.Suspense,{fallback:Object(x.jsx)("div",{}),children:Object(x.jsx)(z,{stateCode:R,timeseries:Y,regionHighlighted:L,setRegionHighlighted:q,noRegionHighlightedDistrictData:de,forceRender:!!Z})})]})})]}),Object(x.jsx)(g,{})]})}t.default=Object(b.memo)(D)}}]);
//# sourceMappingURL=33.a5801c78.chunk.js.map
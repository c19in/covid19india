(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[33,40],{115:function(t,e,n){"use strict";var c=n(2),i=n(92),a=i.a?c.useLayoutEffect:c.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(c.useState)(null),e=t[0],n=t[1],i=Object(c.useState)(o),r=i[0],s=i[1],u=Object(c.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,c=e.y,i=e.width,a=e.height,o=e.top,r=e.left,u=e.bottom,f=e.right;s({x:n,y:c,width:i,height:a,top:o,left:r,bottom:u,right:f})}}))}),[]);return a((function(){if(e)return u.observe(e),function(){u.disconnect()}}),[e]),[n,r]}:function(){return[i.b,o]}},158:function(t,e,n){"use strict";n.r(e);var c=n(49),i=n(46),a=n(11),o=n(93),r=n.n(o),s=n(2),u=n(54),f=n.n(u),l=n(97),b=n(115),d=n(19),h=void 0,O=function(t){var e=t.mapStatistic,n=t.setMapStatistic,o=Object(b.a)(),u=Object(i.a)(o,2),O=u[0],j=u[1].width,p=Object(s.useState)(!1),v=Object(i.a)(p,2),g=v[0],k=v[1],m=Object(s.useState)(0),w=Object(i.a)(m,2),x=w[0],S=w[1],y=a.k.indexOf(e)>=0,z=Object(l.useSpring)((function(){return{opacity:0,background:"".concat(a.z[e].color,"20"),transform:y?"translate3d(".concat(j*a.k.indexOf(e)/a.k.length,"px, 0, 0)"):null,width:"calc(".concat(100/a.k.length,"%)"),config:l.config.gentle}})),R=Object(i.a)(z,2),E=R[0],M=R[1];Object(s.useEffect)((function(){if(j>0){var t=a.k.indexOf(e)>=0;f.a.unstable_batchedUpdates((function(){var n;M.start({transform:t?"translate3d(".concat(j*a.k.indexOf(e)/a.k.length,"px, 0, 0)"):null,opacity:t?1:0,background:t?"".concat(null===(n=a.z[e])||void 0===n?void 0:n.color,"20"):null,delay:0===x?1500:0,onStart:k.bind(h,!0),onRest:k.bind(h,!1)})}))}}),[x,e,M,j]);var N=Object(s.useCallback)((function(t){S((function(t){return t+1})),n(t)}),[n]);return Object(d.jsxs)("div",{className:"MapSwitcher",ref:O,children:[Object(d.jsx)(l.animated.div,{className:"highlight",style:E}),a.k.map((function(t,e){return Object(d.jsx)("div",{className:r()("clickable",Object(c.a)({},"is-".concat(t),!g)),onClick:N.bind(h,t),style:{width:"calc(".concat(100/a.k.length,"%)")}},e)}))]})},j=function(t,e){return t.mapStatistic===e.mapStatistic};e.default=Object(s.memo)(O,j)}}]);
//# sourceMappingURL=33.0bf388ee.chunk.js.map
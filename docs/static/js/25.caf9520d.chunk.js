(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[25,28],{115:function(t,e,r){"use strict";var n=r(2),i=r(92),c=i.a?n.useLayoutEffect:n.useEffect,a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(n.useState)(null),e=t[0],r=t[1],i=Object(n.useState)(a),o=i[0],u=i[1],f=Object(n.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,r=e.x,n=e.y,i=e.width,c=e.height,a=e.top,o=e.left,f=e.bottom,s=e.right;u({x:r,y:n,width:i,height:c,top:a,left:o,bottom:f,right:s})}}))}),[]);return c((function(){if(e)return f.observe(e),function(){f.disconnect()}}),[e]),[r,o]}:function(){return[i.b,a]}},120:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(25);function i(t,e){var r;if(void 0===e){var i,c=Object(n.a)(t);try{for(c.s();!(i=c.n()).done;){var a=i.value;null!=a&&(r<a||void 0===r&&a>=a)&&(r=a)}}catch(l){c.e(l)}finally{c.f()}}else{var o,u=-1,f=Object(n.a)(t);try{for(f.s();!(o=f.n()).done;){var s=o.value;null!=(s=e(s,++u,t))&&(r<s||void 0===r&&s>=s)&&(r=s)}}catch(l){f.e(l)}finally{f.f()}}return r}},159:function(t,e,r){"use strict";r.r(e);var n=r(46),i=r(11),c=r(24),a=r(93),o=r.n(a),u=r(120),f=r(118),s=r(272),l=r(142),d=r(252),b=r(166),h=r(254),j=(r(101),r(68)),O=r(81),v=r(91),p=r.n(v),y=r(2),g=r(115),k=r(19),m=10,w=10,x=2,M=10;function R(t){var e=t.timeseries,r=t.date,a=Object(y.useRef)([]),v=r||Object(c.h)(),p=Object(g.a)(),R=Object(n.a)(p,2),S=R[0],A=R[1].width;A=Math.min(A,120);var E=Object(y.useMemo)((function(){var t=Object.keys(e||{}).filter((function(t){return t<=v})),r=t[t.length-1],n=Object(j.a)(Object(O.a)(Object(c.k)(r),i.t),{representation:"date"});return t.filter((function(t){return t>=n}))}),[v,e]),z=Object(y.useCallback)((function(t,r){return Object(c.i)(null===e||void 0===e?void 0:e[t],"delta",r)}),[e]);return Object(y.useEffect)((function(){if(A){var t=E.length,e=A-w,r=75-x,n=Object(s.a)().clamp(!0).domain([Object(c.k)(E[0]||v),Object(c.k)(E[t-1])||v]).range([M,e]);a.current.forEach((function(e,a){var o,s=Object(d.a)(e),j=i.k[a],O=i.z[j].color,v=Object(u.a)(E,(function(t){return Math.abs(z(t,j))})),p=Object(l.a)().clamp(!0).domain([-v,v]).range([r,m]),y=Object(b.a)().curve(h.a).x((function(t){return n(Object(c.k)(t))})).y((function(t){return p(z(t,j))}));s.selectAll("path").data(t?[E]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",O+"99").attr("stroke-width",2.5).attr("d",y).attr("stroke-dasharray",(function(){return o=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",o).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var e=Object(d.a)(this).attr("d"),r=y(t);return Object(f.a)(e,r)})).selection()})),s.selectAll("circle").data(t?[E[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",O).attr("r",2.5).attr("cx",(function(t){return n(Object(c.k)(t))})).attr("cy",(function(t){return p(z(t,j))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return n(Object(c.k)(t))})).attr("cy",(function(t){return p(z(t,j))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return n(Object(c.k)(t))})).attr("cy",(function(t){return p(z(t,j))})).style("opacity",1).selection()}))}))}}),[v,E,A,z]),Object(k.jsx)("div",{className:"Minigraph",children:i.k.map((function(t,e){return Object(k.jsx)("div",{className:o()("svg-parent"),ref:0===e?S:null,style:{width:"calc(".concat(100/i.k.length,"%)")},children:Object(k.jsx)("svg",{ref:function(t){a.current[e]=t},preserveAspectRatio:"xMidYMid meet",width:A,height:75})},t)}))})}var S=function(t,e){return!e.forceRender&&(!(e.timeseries||!t.timeseries)||!(e.timeseries&&!t.timeseries)&&(!!p()(e.stateCode,t.stateCode)&&!!p()(e.date,t.date)))};e.default=Object(y.memo)(R,S)},91:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,i,c;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(i=n;0!==i--;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(c=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(r,c[i]))return!1;for(i=n;0!==i--;){var a=c[i];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=25.caf9520d.chunk.js.map
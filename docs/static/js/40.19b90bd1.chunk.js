(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[40],{285:function(t,e,r){"use strict";r.r(e);var n=r(102),i=r(110),a=r.n(i),c=r(147),o=r(46),s=r(11),l=r(24),u=r(207),d=r(277),f=r(142),p=r(269),j=r(252),b=r(273),m=r(246),v=r(140),O=r(206),h=r(70),g=r(248),x=r(101),k=r(2),y=r(281),w=r(114),C=r(19);var E=function(t){t.data;var e=t.statistic,r=t.mapViz,n=t.mapScale,i=Object(y.a)().t,a=Object(k.useRef)(null),c=Object(k.useRef)(null),E=Object(w.a)(),N=Object(o.a)(E,2),T=N[0],R=N[1].width;return Object(k.useEffect)((function(){var t=Object(x.b)().duration(s.d);if(r!==s.s.CHOROPLETH){var e=Object(g.a)(c.current);e.select(".ramp").transition(t).attr("opacity",0).attr("display","none").attr("xlink:href",null),e.select(".bars").selectAll("rect").transition(t).attr("opacity",0).remove(),e.selectAll(".axis > *:not(.axistext)").remove(),e.select(".axistext").text("")}if(r!==s.s.BUBBLE){var n=Object(g.a)(a.current);n.select(".circles").selectAll("circle").transition(t).attr("r",0).attr("cy",0).remove(),n.selectAll(".circle-axis > *").remove()}if(r!==s.s.SPIKES){var i=Object(g.a)(a.current);i.select(".spikes").call((function(e){return e.selectAll("path").transition(t).attr("d",Object(l.m)(0)).remove()})).call((function(t){return t.selectAll("text").remove()})).transition(t).selectAll("g").remove(),i.selectAll(".spike-axis > *").remove()}}),[r]),Object(k.useEffect)((function(){if(R){var t=s.z[e],x=R/s.m[0];if(r===s.s.BUBBLE){var k=Object(g.a)(a.current),y=n.domain(),w=Object(o.a)(y,2)[1],C=k.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle"),E=[.1,.4,1].map((function(t){return t*w}));C.selectAll("circle").data(E).join("circle").attr("fill","none").attr("stroke",t.color+"70").transition(i).attr("cy",(function(t){return-n(t)})).attr("r",(function(t){return n(t)}));var N=n.copy().range([0,-2*n(w)]);k.select(".circle-axis").attr("transform","translate(48,50)").transition(i).call(Object(f.b)(N).tickSize(0).tickPadding(0).tickValues(E).tickFormat((function(e){return Object(l.f)(e,"long"===t.format?"short":t.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/x),k.select(".circle-axis").call((function(t){return t.select(".domain").remove()}))}else if(r===s.s.SPIKE){var T=Object(g.a)(a.current),H=n.ticks(3).slice(1).reverse(),S=28/x;T.select(".spikes").attr("transform","translate(32,24)").selectAll("g").data(H).join((function(t){return t.append("g").call((function(t){return t.append("path").attr("fill-opacity",.3).attr("d",(function(t){return Object(l.m)(0)}))}))})).attr("transform",(function(t,e){return"translate(".concat(e*S,",0)")})).call((function(e){return e.select("path").transition(i).attr("d",(function(t){return Object(l.m)(n(t))})).attr("fill",t.color+"70").attr("stroke",t.color+"70")}));var M=n.copy().range([S*H.length,0]);T.select(".spike-axis").attr("transform","translate(32,32)").transition(i).call(Object(f.a)(M).tickSize(0).tickPadding(0).tickValues(H).tickFormat((function(e){return Object(l.f)(e,"long"===t.format?"short":t.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/x),T.select(".spike-axis").call((function(t){return t.select(".domain").remove()}))}else{var P,B=Object(g.a)(c.current);B.call((function(){return function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.svg,n=e.color,i=e.title,a=e.tickSize,c=void 0===a?6:a,o=e.width,l=void 0===o?320:o,g=e.height,x=void 0===g?44+c:g,k=e.marginTop,y=void 0===k?18:k,w=e.marginRight,C=void 0===w?0:w,E=e.marginBottom,N=void 0===E?16+c:E,T=e.marginLeft,R=void 0===T?0:T,H=e.ticks,S=void 0===H?l/64:H,M=e.tickFormat,P=e.tickValues,B=e.ordinalWeights,L=r.transition().duration(s.d),_=function(t){t.selectAll(".tick line").attr("y1",y+N-x)};if(n.interpolate){var z=Math.min(n.domain().length,n.range().length);t=n.copy().rangeRound(Object(j.a)(Object(b.a)(R,l-C),z)),r.select(".ramp").attr("x",R).attr("y",y).attr("width",l-R-C).attr("height",x-y-N).attr("xlink:href",A(n.copy().domain(Object(j.a)(Object(b.a)(0,1),z))).toDataURL())}else if(n.interpolator){if(r.select(".bars").selectAll("rect").transition(L).attr("opacity",0).remove(),t=Object.assign(n.copy().interpolator(Object(m.a)(R,l-C)),{range:function(){return[R,l-C]}}),r.select(".ramp").attr("x",R).attr("y",y).attr("width",l-R-C).attr("height",x-y-N).attr("xlink:href",A(n.interpolator()).toDataURL()).attr("display","visible").transition(L).attr("opacity",1),!t.ticks){if(void 0===P){var q=Math.round(S+1);P=Object(u.a)(q).map((function(t){return Object(d.a)(n.domain(),t/(q-1))}))}"function"!==typeof M&&(M=Object(p.a)(void 0===M?",f":M))}}else if(n.invertExtent){var F=n.thresholds?n.thresholds():n.quantiles?n.quantiles():n.domain(),I=void 0===M?function(t){return t}:"string"===typeof M?Object(p.a)(M):M;t=Object(v.a)().domain([-1,n.range().length-1]).rangeRound([R,l-C]),r.append("g").selectAll("rect").data(n.range()).join("rect").attr("x",(function(e,r){return t(r-1)})).attr("y",y).attr("width",(function(e,r){return t(r)-t(r-1)})).attr("height",x-y-N).attr("fill",(function(t){return t})),P=Object(u.a)(-1,F.length),M=function(t){return-1===t?I(1):t!==F.length-1?t===F.length-2?I(F[t]+"+",t):I(F[t],t):void 0}}else{if(r.select(".ramp").transition(L).attr("opacity",0).attr("xlink:href",null),B){var U=Object(v.a)().domain([0,B.reduce((function(t,e){return t+e}))]).rangeRound([0,l-R-C]),V=B.map((function(t,e){return B.slice(0,e).reduce((function(t,e){return t+U(e)}),R)}));t=Object(h.a)().domain(n.domain()).range(V),r.select(".bars").selectAll("rect").data(n.domain()).join((function(e){return e.append("rect").attr("x",t).attr("width",(function(t,e){return U(B[e])}))})).attr("y",y).attr("height",x-y-N).attr("fill",n).transition(L).attr("x",t).attr("width",(function(t,e){return U(B[e])})).attr("opacity",1)}else t=Object(O.a)().domain(n.domain().filter((function(t){return t}))).rangeRound([R,l-C]),r.select(".bars").selectAll("rect").data(n.domain().filter((function(t){return t}))).join("rect").attr("x",t).attr("y",y).attr("width",Math.max(0,t.bandwidth()-1)).attr("height",x-y-N).attr("fill",n);_=function(){}}return r.select(".axis").attr("transform","translate(0,".concat(x-N,")")).transition(L).attr("class","axis").call(Object(f.a)(t).ticks(S,"string"===typeof M?M:void 0).tickFormat("function"===typeof M?M:void 0).tickSize(c).tickValues(P)).on("start",(function(){r.call(_).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",R).attr("y",y+N-x-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(i)})),r.node()}({svg:B,color:n,width:R,height:s.n,ticks:5,tickFormat:function(e,n,i){var a;return(null===t||void 0===t||null===(a=t.mapConfig)||void 0===a?void 0:a.colorScale)?e:r!==s.s.CHOROPLETH||Number.isInteger(e)?n===i.length-1?Object(l.f)(e,t.format)+"+":Object(l.f)(e,t.format):""},marginLeft:2,marginRight:0})})),B.attr("class",(null===t||void 0===t||null===(P=t.mapConfig)||void 0===P?void 0:P.colorScale)?"zone":"")}}}),[i,R,e,n,r]),Object(C.jsxs)("div",{className:"svg-parent maplegend",ref:T,style:{height:2*s.n},children:[Object(C.jsxs)("svg",{id:"legend",preserveAspectRatio:"xMinYMid meet",ref:a,viewBox:"0 0 ".concat(s.m[0]," ").concat(s.n),children:[Object(C.jsx)("g",{className:"circles"}),Object(C.jsx)("g",{className:"spikes"}),Object(C.jsx)("g",{className:"circle-axis"}),Object(C.jsx)("g",{className:"spike-axis"}),Object(C.jsx)("g",{className:"axis",children:Object(C.jsx)("text",{className:"axistext"})})]}),Object(C.jsxs)("svg",{id:"legend-choro",preserveAspectRatio:"xMinYMid meet",ref:c,children:[Object(C.jsx)("image",{className:"ramp",preserveAspectRatio:"none"}),Object(C.jsx)("g",{className:"bars"}),Object(C.jsx)("g",{className:"axis",children:Object(C.jsx)("text",{className:"axistext"})})]}),Object(C.jsx)("canvas",{className:"color-scale",style:{position:"absolute",height:0}})]})};function A(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var N=r(95),T=r(93),R=r.n(T),H=r(119),S=r(260),M=r(271),P=r(270),B=r(211),L=r(286),_=r(253),z=r(254),q=r(255),F=r(256),I=r(257),U=r(258),V=r(259),D=r(5),K=r(126),Y=r(219);e.default=function(t){var e,r=this,i=t.mapCode,o=t.isDistrictView,u=t.mapViz,d=t.data,f=t.regionHighlighted,p=t.setRegionHighlighted,j=t.statistic,b=t.getMapStatistic,m=t.transformStatistic,O=t.noDistrictData,h=Object(y.a)().t,w=Object(k.useRef)(null),A=s.o[i],T=Object(D.g)(),W=Object(K.a)(A.geoDataFile,function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}),J=W.data,G=Object(k.useMemo)((function(){return b(d[i])}),[d,i,b]),Q=s.z[j],X=Object(k.useCallback)((function(t){return((null===Q||void 0===Q?void 0:Q.color)||"#343a40")+t}),[Q]),Z=Object(k.useMemo)((function(){return J?(o?A.mapType===s.q.COUNTRY&&u!==s.s.CHOROPLETH?[].concat(Object(n.a)(Object(Y.a)(J,J.objects.states).features),Object(n.a)(Object(Y.a)(J,J.objects.districts).features)):Object(Y.a)(J,J.objects.districts).features:Object(Y.a)(J,J.objects.states).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(i,"-").concat(r).concat(e?"-"+e:""),n})):null}),[J,i,o,u,A]),$=Object(k.useMemo)((function(){return J&&o?Object(Y.a)(J,J.objects.districts).features.reduce((function(t,e){var r=s.w[e.properties.st_nm];return t[r]||(t[r]=new Set),t[r].add(e.properties.district),t}),{}):{}}),[J,o]),tt=Object(k.useMemo)((function(){var t=Object.keys(d).filter((function(t){return"TT"!==t&&Object.keys(s.o).includes(t)}));if(o){var e=t.reduce((function(t,e){var r,i=Object.keys((null===(r=d[e])||void 0===r?void 0:r.districts)||[]).filter((function(t){return((null===$||void 0===$?void 0:$[e])||new Set).has(t)||u!==s.s.CHOROPLETH&&t===s.H}));return t.push.apply(t,Object(n.a)(i.map((function(t){return m(b(d[e].districts[t]))})))),t}),[]);return Object(H.a)(e)}return Object(H.a)(t,(function(t){return m(b(d[t]))}))}),[d,o,b,u,$,m]),et=Object(k.useMemo)((function(){var t,e;return u===s.s.BUBBLE?Object(B.b)([0,Math.max(1,tt||0)],[0,40]).clamp(!0).nice(3):u===s.s.SPIKE?Object(v.a)([0,Math.max(1,tt||0)],[0,80]).clamp(!0).nice(3):(null===(t=s.z[j])||void 0===t||null===(e=t.mapConfig)||void 0===e?void 0:e.colorScale)?s.z[j].mapConfig.colorScale:Object(L.a)([0,Math.max(1,tt||0)],function(t){var e;return"confirmed"===t?function(t){return Object(_.a)(.85*t)}:"active"===t?function(t){return Object(z.a)(.85*t)}:"recovered"===t?function(t){return Object(q.a)(.85*t)}:"deceased"===t?function(t){return Object(F.a)(.85*t)}:"tested"===t?function(t){return Object(I.a)(.85*t)}:"tpr"===t||"cfr"===t||"other"===t?function(t){return Object(U.a)(.85*t)}:"vaccinated"===(null===(e=s.z[t])||void 0===e?void 0:e.category)?function(t){return Object(V.a)(.15+.35*(1-t))}:function(t){return Object(U.a)(.85*t)}}(j)).clamp(!0)}),[u,j,tt]),rt=Object(k.useCallback)((function(t){if(u===s.s.CHOROPLETH){var e,r=s.w[t.properties.st_nm],n=t.properties.district,i=d[r],a=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[n],c=m(b(n?a:i));return c?et(c):"#ffffff00"}}),[u,d,et,b,m]),nt=Object(k.useCallback)((function(t){t.select("title").text((function(t){if(u!==s.s.CHOROPLETH&&!(null===Q||void 0===Q?void 0:Q.nonLinear)){var e,r,n=t.properties.st_nm,i=s.w[n],a=t.properties.district,c=d[i],o=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[a];return r=b(a?o:c),"".concat(Object(l.f)(r/(G||.001)*100,"%")," from ").concat(Object(l.n)(a||n))}}))}),[u,d,b,G,Q]),it=Object(k.useRef)(null);Object(k.useEffect)((function(){Object(g.a)(w.current).attr("pointer-events","auto").on("click",(function(){it.current=null,p({stateCode:i,districtName:null})}))}),[i,p]);var at=Object(k.useMemo)((function(){return J?Object(M.a)(Object(P.a)()):null}),[J]);Object(k.useEffect)((function(){if(J){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d);t.select(".regions").selectAll("path").data(u===s.s.CHOROPLETH?Z:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",at).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t,e){it.current||p({stateCode:s.w[e.properties.st_nm],districtName:e.properties.district})})).on("pointerdown",(function(t,e){it.current===e?it.current=null:it.current=e,p({stateCode:s.w[e.properties.st_nm],districtName:e.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("click",(function(e,r){var n;e.stopPropagation();var i=s.w[r.properties.st_nm];!it.current&&A.mapType!==s.q.STATE&&(null===(n=d[i])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),T.push("".concat("/covid19india","/state/").concat(i).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",rt).attr("stroke",X.bind(r,""))}))}}),[u,d,Z,rt,J,T,A.mapType,at,p,X]);var ct=Object(k.useMemo)((function(){return u===s.s.CHOROPLETH?[]:(Z||[]).map((function(t){var e=s.w[t.properties.st_nm],r=t.properties.district,n=d[e];if(o){var i,a,c=null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[r];t.value=b(r?c:null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[s.H])}else t.value=b(n);return t})).filter((function(t){return t.value>0})).sort((function(t,e){return e.value-e.value}))}),[u,o,b,Z,d]);return Object(k.useEffect)((function(){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d),r=t.select(".circles").selectAll("circle").data(u===s.s.BUBBLE?ct:[],(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(at.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t,e){it.current||p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("pointerdown",(function(t,e){it.current===e?it.current=null:it.current=e,p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("click",(function(t,e){t.stopPropagation(),it.current||A.mapType===s.q.STATE||T.push("".concat("/covid19india","/state/").concat(s.w[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("fill",Q.color+"70").attr("stroke",Q.color+"70").attr("r",(function(t){return et(t.value)}))}));window.requestIdleCallback((function(){nt(r)}))}),[A.mapType,u,o,ct,T,et,at,p,nt,Q,b]),Object(k.useEffect)((function(){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d),r=t.select(".spikes").selectAll("path").data(u===s.s.SPIKE?ct:[],(function(t){return t.id}),(function(t){return t.id})).join((function(t){return t.append("path").attr("transform",(function(t){return"translate(".concat(at.centroid(t),")")})).attr("opacity",0).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").attr("d",Object(l.m)(0)).call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("opacity",0).attr("d",Object(l.m)(0)).remove()}))})).on("mouseenter",(function(t,e){it.current||p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("pointerdown",(function(t,e){it.current===e?it.current=null:it.current=e,p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("click",(function(t,e){t.stopPropagation(),it.current||A.mapType===s.q.STATE||T.push("".concat("/covid19india","/state/").concat(s.w[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("opacity",1).attr("fill",Q.color+"70").attr("stroke",Q.color+"70").attr("d",(function(t){return Object(l.m)(et(t.value))}))}));window.requestIdleCallback((function(){nt(r)}))}),[A.mapType,u,o,ct,T,et,at,p,nt,Q,b]),Object(k.useEffect)((function(){if(J){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d),n=[],a=[];A.mapType===s.q.COUNTRY&&((n=[Object(Y.b)(J,J.objects.states)])[0].id="".concat(i,"-states")),(A.mapType===s.q.STATE||o&&u===s.s.CHOROPLETH)&&((a=[Object(Y.b)(J,J.objects.districts)])[0].id="".concat(i,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",at).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",X.bind(r,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(a,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",at).attr("d",at).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",X.bind(r,"40"))}}),[J,A,i,u,o,j,at,X]),Object(k.useEffect)((function(){var t=f.stateCode,e=s.y[t],r=f.districtName,n=Object(g.a)(w.current);u===s.s.BUBBLE?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===s.H&&!n.properties.district)?1:.25})):u===s.s.SPIKE?n.select(".spikes").selectAll("path").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===s.H&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var a,c=e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o);c&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",c?1:0)}))}),[J,d,i,o,u,f.stateCode,f.districtName,j]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"svg-parent",children:[Object(C.jsxs)("svg",{id:"chart",className:R()({zone:!!(null===Q||void 0===Q||null===(e=Q.mapConfig)||void 0===e?void 0:e.colorScale)}),viewBox:"0 0 ".concat(s.m[0]," ").concat(s.m[1]),preserveAspectRatio:"xMidYMid meet",ref:w,children:[Object(C.jsx)("g",{className:"regions"}),Object(C.jsx)("g",{className:"state-borders"}),Object(C.jsx)("g",{className:"district-borders"}),Object(C.jsx)("g",{className:"circles"}),Object(C.jsx)("g",{className:"spikes"})]}),O&&(null===Q||void 0===Q?void 0:Q.hasPrimary)&&Object(C.jsxs)("div",{className:R()("disclaimer","is-".concat(j)),children:[Object(C.jsx)(N.a,{}),Object(C.jsx)("span",{children:h("District-wise data not available in state bulletin")})]})]}),et&&Object(C.jsx)(E,{data:d,statistic:j,mapViz:u,mapScale:et}),Object(C.jsx)("svg",{style:{position:"absolute",height:0},children:Object(C.jsx)("defs",{children:Object(C.jsx)("filter",{id:"balance-color",colorInterpolationFilters:"sRGB",children:Object(C.jsx)("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})})})})]})}}}]);
//# sourceMappingURL=40.19b90bd1.chunk.js.map
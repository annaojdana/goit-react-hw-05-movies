"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{866:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(885),c="Reviews_wrapper__0m-8S",a="Reviews_list__pCzae",s="Reviews_item__G1rz-",u="Reviews_text__fgYm-",o="Reviews_title__jUE7J",i=n(2791),p=n(6871),l=n(8388),v=n(5984),f=n(184),m=function(){var e=a,t=s,n=o,m=c,h=u,d=(0,p.UO)().movieId,g=(0,i.useState)([]),_=(0,r.Z)(g,2),w=_[0],x=_[1];return(0,i.useEffect)((function(){(0,l.Hx)(d,x).catch(console.error)}),[d]),(0,f.jsx)("section",{className:m,children:w.length<1?(0,f.jsx)("p",{className:"error",children:"Sorry, the reviews is not available!"}):(0,f.jsx)("ul",{className:e,children:w.map((function(e){var r=e.author,c=e.content;return(0,f.jsxs)("li",{className:t,children:[(0,f.jsx)("h4",{className:n,children:r}),(0,f.jsx)("p",{className:h,children:c})]},(0,v.x0)())}))})})}},8388:function(e,t,n){n.d(t,{Hx:function(){return f},Mc:function(){return l},_:function(){return p},mv:function(){return m},uV:function(){return v}});var r=n(5861),c=n(7757),a=n.n(c),s=n(4569),u=n.n(s),o="34b039d9928c0cbb29ba3089b029dd2e",i="https://api.themoviedb.org/3/",p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"trending/movie/day?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,c=r.data.results,e.abrupt("return",n(c));case 8:e.prev=8,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=866.78492fc4.chunk.js.map
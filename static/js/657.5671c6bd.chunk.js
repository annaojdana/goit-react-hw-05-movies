"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[657],{9290:function(e,t,n){n.r(t);var r=n(885),c=n(2791),a=n(6871),s=n(501),o=n(8388),u=n(7214),i=n(184);t.default=function(){var e,t,n=(0,a.s0)(),l=(0,a.TH)(),p=(0,a.UO)().movieId,d=null!==(e=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",v=(0,c.useState)({}),h=(0,r.Z)(v,2),f=h[0],x=h[1],m=f.title,g=f.overview,j=f.vote_average,w=f.genres,b=f.poster_path;return(0,c.useEffect)((function(){(0,o.Mc)(p,x).catch(console.error)}),[p]),(0,i.jsxs)("main",{children:[(0,i.jsx)("button",{onClick:function(){return n(d,{replace:!0})},children:"Go back"}),(0,i.jsx)("div",{children:b?(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(b),alt:"Poster of ".concat(m)}):(0,i.jsx)("img",{src:"https://placehold.co/500x750",alt:"Placeholder"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:m}),(0,i.jsxs)("p",{children:["User Score: ",(10*j).toFixed(0),"%"]}),(0,i.jsx)("h2",{children:"Overwiew"}),(0,i.jsx)("p",{children:g}),(0,i.jsx)("h2",{children:"Genres"}),(0,i.jsx)("p",{children:null===w||void 0===w?void 0:w.map((function(e){return e.name+", "}))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Additional information"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.rU,{to:"cast",state:l.state,children:"Cast"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.rU,{to:"reviews",state:l.state,children:"Reviews"})})]}),(0,i.jsx)(c.Suspense,{fallback:(0,i.jsx)(u.Z,{}),children:(0,i.jsx)(a.j3,{})})]})]})}},8388:function(e,t,n){n.d(t,{Hx:function(){return v},Mc:function(){return p},_:function(){return l},mv:function(){return h},uV:function(){return d}});var r=n(5861),c=n(7757),a=n.n(c),s=n(4569),o=n.n(s),u="34b039d9928c0cbb29ba3089b029dd2e",i="https://api.themoviedb.org/3/",l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"trending/movie/day?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"search/movie?api_key=").concat(u,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=657.5671c6bd.chunk.js.map
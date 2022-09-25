"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[42],{6042:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a,r=n(885),c=n(168),s="MovieDetailsPage_wrapper__TH-Xi",o="MovieDetailsPage_left__content__NpArI",i="MovieDetailsPage_right__content__nSn5L",l="MovieDetailsPage_btn__VtrW5",u="MovieDetailsPage_heading__vypDb",p="MovieDetailsPage_text__vp0Sm",v="MovieDetailsPage_vote__JHtp1",d="MovieDetailsPage_additional__heading__r668+",h="MovieDetailsPage_additional__wrapper__BsChM",_="MovieDetailsPage_additional__list__rpWNH",f=n(2791),g=n(6444),m=n(501),x=n(6871),w=n(8388),j=n(7214),b=n(184),k=(0,g.ZP)(m.OL)(a||(a=(0,c.Z)(["\n  position: relative;\n  color: #373537;\n  text-decoration: none;\n  font-weight: 600;\n  margin-right: 50px;\n  line-height: 25px;\n  &::after {\n    position: absolute;\n    left: 0;\n    bottom: -5px;\n    width: 100%;\n    height: 2px;\n    content: '';\n  }\n  &:hover {\n    &::after {\n      background-color: #e4007e;\n    }\n  }\n  &.active {\n    color: #e4007e;\n  }\n"]))),y=function(){var e,t,n=l,a=s,c=o,g=i,m=u,y=v,M=p,N=d,P=h,D=_,Z=(0,x.s0)(),S=(0,x.TH)(),C=(0,x.UO)().movieId,H=null!==(e=null===(t=S.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",U=(0,f.useState)({}),O=(0,r.Z)(U,2),A=O[0],G=O[1],I=A.title,L=A.overview,T=A.vote_average,V=A.genres,W=A.poster_path;return(0,f.useEffect)((function(){(0,w.Mc)(C,G).catch(console.error)}),[C]),(0,b.jsxs)("section",{children:[(0,b.jsx)("button",{className:n,onClick:function(){return Z(H,{replace:!0})},children:"Go back"}),(0,b.jsxs)("div",{className:a,children:[(0,b.jsx)("div",{className:c,children:W?(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(W),alt:"Poster of ".concat(I)}):(0,b.jsx)("img",{src:"https://placehold.co/500x750",alt:"Placeholder"})}),(0,b.jsxs)("div",{className:g,children:[(0,b.jsx)("h1",{className:m,children:I}),(0,b.jsxs)("p",{className:y,children:["User Score: ",(10*T).toFixed(0),"%"]}),(0,b.jsx)("h2",{children:"Overwiew"}),(0,b.jsx)("p",{className:M,children:L}),(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)("p",{className:M,children:null===V||void 0===V?void 0:V.map((function(e){return e.name+", "}))})]})]}),(0,b.jsxs)("div",{className:P,children:[(0,b.jsx)("h3",{className:N,children:"Additional information"}),(0,b.jsxs)("ul",{className:D,children:[(0,b.jsx)("li",{children:(0,b.jsx)(k,{to:"cast",state:S.state,children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(k,{to:"reviews",state:S.state,children:"Reviews"})})]}),(0,b.jsx)(f.Suspense,{fallback:(0,b.jsx)(j.Z,{}),children:(0,b.jsx)(x.j3,{})})]})]})}},8388:function(e,t,n){n.d(t,{Hx:function(){return d},Mc:function(){return p},_:function(){return u},mv:function(){return h},uV:function(){return v}});var a=n(5861),r=n(7757),c=n.n(r),s=n(4569),o=n.n(s),i="34b039d9928c0cbb29ba3089b029dd2e",l="https://api.themoviedb.org/3/",u=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(l,"trending/movie/day?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(l,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return a=e.sent,e.abrupt("return",n(a.data));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(l,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return a=e.sent,e.abrupt("return",n(a.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(l,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return a=e.sent,e.abrupt("return",n(a.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(l,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return a=e.sent,e.abrupt("return",n(a.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.ecc37f43.chunk.js.map
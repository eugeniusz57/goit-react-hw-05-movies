"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u,i=t(885),s=t(2791),o=t(9457),p=t(322),f=t(7689),l=t(9474),d=t(168),h=t(6444),v=h.ZP.img(r||(r=(0,d.Z)(["\n  width: 150px;\n"]))),g=h.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  text-align: center;\n"]))),x=h.ZP.li(c||(c=(0,d.Z)(["\n  width: 150px;\n  list-style-type: none;\n"]))),m=h.ZP.p(u||(u=(0,d.Z)(["\n  margin: 6px;\n"]))),w=t(854),b=t(184),y=function(){var n=(0,s.useState)(""),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,f.UO)().moviesId,c=(0,s.useState)("idle"),u=(0,i.Z)(c,2),d=u[0],h=u[1];return(0,s.useEffect)((function(){a&&(h("pending"),(0,p.zv)(a).then((function(n){r(n),h("resolv")})).catch((function(n){return console.error(n)})))}),[a]),(0,b.jsxs)(o.x,{display:"flex",children:["pending"===d&&(0,b.jsx)(w.a,{}),("resolv"===d||"pending"===d)&&t&&(0,b.jsxs)(g,{children:[t.map((function(n){var e=n.cast_id,t=n.character,r=n.name,a=n.profile_path;return(0,b.jsxs)(x,{children:[(0,b.jsx)(v,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):l,alt:t}),(0,b.jsx)(m,{children:(0,b.jsx)("b",{children:r})}),(0,b.jsxs)(m,{children:[(0,b.jsx)("b",{children:"Character: "}),t]})]},e)})),0===(null===t||void 0===t?void 0:t.length)&&(0,b.jsx)("div",{children:"We don't have any casts for this movie"})]})]})}},854:function(n,e,t){t.d(e,{a:function(){return c}});var r=t(8402),a=t(184),c=function(){return(0,a.jsx)(r.fe,{visible:"true",height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{marginLeft:"auto",display:"block",marginRight:"auto"},wrapperClass:"dna-wrapper"})}},322:function(n,e,t){t.d(e,{FL:function(){return p},JS:function(){return s},gW:function(){return o},tx:function(){return l},zv:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569);u.defaults.baseURL="https://api.themoviedb.org/3";var i="025e6ba837c180b1375a1753437eaffc",s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9474:function(n,e,t){n.exports=t.p+"static/media/image-not-available.13abf58b8e9406ec5a41.jpg"}}]);
//# sourceMappingURL=736.e7e82d7b.chunk.js.map
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[81],{6242:function(t,e,n){"use strict";n.d(e,{Zh:function(){return u},eZ:function(){return p},kh:function(){return l},n4:function(){return d},v1:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),o=n(1243),i="468c2ebbcd20d786d16a982ad3dded4a",s="https://api.themoviedb.org/3/",u=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"trending/movie/day?language=en-US&api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"/movie/").concat(e,"?language=en-US&api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"/movie/").concat(e,"/credits?language=en-US&api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(s,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&api_key=").concat(i,"&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},4535:function(t,e,n){"use strict";var r=n(2007),a=n.n(r),c=function(t){return t?"https://image.tmdb.org/t/p/original".concat(t):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg"};e.Z=c,c.propTypes={img:a().string.isRequired}},992:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(7689),a=n(1087),c="Movies_films_list__vSMCl",o="Movies_films_item__ta3Kr",i="Movies_films_item_title__HAGg4",s=n(4535),u=n(9439),p=n(2791),f=n(184),l=function(){var t=(0,p.useState)(!1),e=(0,u.Z)(t,2),n=e[0],r=e[1];(0,p.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>200?r(!0):r(!1)}))}),[]);return(0,f.jsx)(f.Fragment,{children:n&&(0,f.jsx)("button",{style:{color:"white",fontSize:"50px",background:"transparent",borderRadius:"20%",border:"2px solid tomato",position:"fixed",bottom:"50px",right:"50px",cursor:"pointer"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\ud83e\udc45"})})},d=function(t){var e=t.filmsList,n=(0,r.TH)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("ul",{className:c,children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,r=t.original_title,c=t.poster_path;return(0,f.jsx)("li",{className:o,children:(0,f.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:n},children:[(0,f.jsx)("img",{src:(0,s.Z)(c),alt:r,width:"300",loading:"lazy"}),(0,f.jsxs)("p",{className:i,children:[" ",r]})]})},e)}))}),(0,f.jsx)(l,{})]})}},9081:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(5861),a=n(9439),c=n(7757),o=n.n(c),i=n(2791),s=n(6242),u="Home_title__3qaH0",p=n(992),f=n(7689),l=n(184),d=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,f.TH)();return(0,i.useEffect)((function(){try{var t=function(){var t=(0,r.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Zh)();case 2:e=t.sent,c(e.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}catch(e){console.log(e)}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:u,children:"Trending Today :"}),(0,l.jsx)(p.Z,{filmsList:n,location:d})]})}},888:function(t,e,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,c,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(t,e,n){t.exports=n(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=81.b8aaf58e.chunk.js.map
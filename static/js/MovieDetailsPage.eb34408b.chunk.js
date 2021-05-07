(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{102:function(e,t,n){"use strict";n.r(t);var a=n(63),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=n(64),l=n(16),u=n(17),d=n(19),b=n(18),j=n(0),p=n(61),h=n(9),v=n(3),m=n(13),f=(n(96),n(1)),O=Object(j.lazy)((function(){return n.e(1).then(n.bind(null,103))})),g=Object(j.lazy)((function(){return n.e(6).then(n.bind(null,104))})),_=function(e){var t=e.release_date,n=e.poster_path,a=e.title,c=e.vote_average,r=e.overview,i=e.genres,s=e.match;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"MovieDetails",children:[Object(f.jsx)("div",{className:"MovieDetails__poster",children:Object(f.jsx)("img",{className:"MovieDetails__img",src:n,alt:a})}),Object(f.jsxs)("div",{className:"MovieDetails__desc",children:[Object(f.jsxs)("h1",{children:[a," (",t,")"]}),Object(f.jsxs)("p",{children:["User Score: ",c,"%"]}),Object(f.jsx)("h3",{children:"Overview"}),Object(f.jsx)("p",{children:r}),Object(f.jsx)("h3",{children:"Genres"}),i?Object(f.jsx)("ul",{className:"Genres-list",children:i.map((function(e){return Object(f.jsxs)("li",{className:"Genres-list__item",children:["# ",e.name]},e.id)}))}):Object(f.jsx)("p",{children:"No data"})]})]}),Object(f.jsxs)("div",{className:"additional",children:[Object(f.jsx)("h3",{className:"additional-title",children:"Additional information"}),Object(f.jsxs)("ul",{className:"additional-list",children:[Object(f.jsx)("li",{className:"additional-list__item",children:Object(f.jsx)(h.b,{to:"".concat(s.url,"/cast"),className:"additional-list__link",activeClassName:"additional-list__active",children:"Cast"})}),Object(f.jsx)("li",{className:"additional-list__item",children:Object(f.jsx)(h.b,{to:"".concat(s.url,"/reviews"),className:"additional-list__link",activeClassName:"additional-list__active",children:"Reviews"})})]}),Object(f.jsxs)(j.Suspense,{fallback:Object(f.jsx)(m.a,{}),children:[Object(f.jsx)(v.a,{path:"".concat(s.path,"/cast"),component:O}),Object(f.jsx)(v.a,{path:"".concat(s.path,"/reviews"),component:g})]})]})]})},x=n(8),y=n(62),w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movie:{}},e.handleGoBack=function(){var t=e.props,n=t.location,a=t.history;if(n.state&&n.state.from)return a.push(n.state.from);a.push(x.a.home)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,a,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,Object(p.b)(t);case 3:n=e.sent,a=n.data,r=a.poster_path,i=a.release_date,o=a.vote_average,this.setState({movie:s(s({},n.data),{},{poster_path:Object(y.b)(r),release_date:Object(y.a)(i),vote_average:Object(y.c)(o)})});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie,t=e.release_date,n=e.poster_path,a=e.title,c=e.vote_average,r=e.overview,i=e.genres,s=this.props.match;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:this.handleGoBack,className:"MovieDetails-goback",children:"Go back"}),Object(f.jsx)(_,{release_date:t,poster_path:n,title:a,vote_average:c,overview:r,genres:i,match:s})]})}}]),n}(j.Component);t.default=w},61:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d}));var a=n(65),c=n.n(a),r="https://api.themoviedb.org/3",i="be2bb7fd29eddf6e05cfa10ca2e7b19c",s=function(){return c.a.get("".concat(r,"/trending/movie/day?api_key=").concat(i,"&language=en-US"))},o=function(e){return c.a.get("".concat(r,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"))},l=function(e){return c.a.get("".concat(r,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&language=en-US"))},u=function(e){return c.a.get("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"))},d=function(e){return c.a.get("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"))}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n.p+"static/media/noimage.1818d78d.svg",c=function(e){return e?"https://image.tmdb.org/t/p/w500"+e:a},r=function(e){return 10*e},i=function(e){return new Date(e).getFullYear()}},96:function(e,t,n){}}]);
//# sourceMappingURL=MovieDetailsPage.eb34408b.chunk.js.map
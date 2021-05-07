(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{101:function(t,e,n){"use strict";n.r(e);var r=n(63),a=n.n(r);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(64),u=n(16),s=n(17),l=n(19),f=n(18),m=n(0),h=n(61),b=(n(95),n(1)),p=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={query:""},t.handleChange=function(e){t.setState({query:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.query),t.setState({query:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:this.state.query,onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})}}]),n}(m.Component),v=n(66),d=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={movies:[],searchQuery:""},t.onChangeQuery=function(e){t.setState({movies:[],searchQuery:e})},t}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){var t=Object(i.a)(a.a.mark((function t(e,n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.searchQuery===this.state.searchQuery){t.next=6;break}return r=this.state.searchQuery,t.next=4,Object(h.c)(r);case 4:c=t.sent,this.setState({movies:o(c.data.results)});case 6:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Content",children:[Object(b.jsx)(p,{onSubmit:this.onChangeQuery}),Object(b.jsx)(v.a,{movies:this.state.movies})]})}}]),n}(m.Component);e.default=d},61:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return f}));var r=n(65),a=n.n(r),c="https://api.themoviedb.org/3",o="be2bb7fd29eddf6e05cfa10ca2e7b19c",i=function(){return a.a.get("".concat(c,"/trending/movie/day?api_key=").concat(o,"&language=en-US"))},u=function(t){return a.a.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"))},s=function(t){return a.a.get("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US"))},l=function(t){return a.a.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"))},f=function(t){return a.a.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"))}},62:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var r=n.p+"static/media/noimage.bb35379b.svg",a=function(t){return t?"https://image.tmdb.org/t/p/w500"+t:r},c=function(t){return 10*t},o=function(t){return new Date(t).getFullYear()}},66:function(t,e,n){"use strict";var r=n(9),a=n(3),c=n(62),o=(n(67),n(1));e.a=Object(a.f)((function(t){var e=t.movies,n=t.location;return Object(o.jsx)("ul",{className:"MoviesList",children:e.map((function(t){var e=t.id,a=t.poster_path,i=t.title;return Object(o.jsx)("li",{className:"MoviesList-item",children:Object(o.jsxs)(r.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},className:"MoviesList-item__link",children:[Object(o.jsx)("img",{className:"MoviesList-img",src:Object(c.b)(a),alt:"".concat(i," poster")}),i]})},e)}))})}))},67:function(t,e,n){},95:function(t,e,n){}}]);
//# sourceMappingURL=MoviesPage.3a2a7d1c.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{103:function(t,e,a){"use strict";a.r(e);var s=a(63),c=a.n(s),n=a(64),r=a(16),i=a(17),o=a(19),h=a(18),u=a(0),l=a(61),j=(a(97),a(62)),m=a(1),p=function(t){var e=t.cast;return Object(m.jsx)(m.Fragment,{children:e.length>0?Object(m.jsx)("ul",{className:"CastList",children:e.map((function(t){var e=t.id,a=t.profile_path,s=t.name,c=t.character;return Object(m.jsxs)("li",{className:"CastList__item",children:[Object(m.jsx)("img",{className:"CastList__img",src:Object(j.b)(a),alt:s}),Object(m.jsx)("h4",{className:"CastList__title",children:s}),Object(m.jsx)("p",{className:"CastList__text",children:c})]},e)}))}):Object(m.jsx)("h5",{className:"Content-title",children:"Sorry! There is no cast information for this movie :("})})},b=function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={cast:[]},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=Object(n.a)(c.a.mark((function t(){var e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,Object(l.a)(e);case 3:a=t.sent,this.setState({cast:a.data.cast});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsx)(p,{cast:this.state.cast})}}]),a}(u.Component);e.default=b},97:function(t,e,a){}}]);
//# sourceMappingURL=Cast.31dddf0b.chunk.js.map
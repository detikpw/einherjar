(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(0),r=n.n(a),i=n(214),c=n(213),l=n(159),o=n(177);t.default=function(e){var t=e.pageContext.category,n=e.data.allMarkdownRemark.edges,a=Object(i.a)(Object(c.a)("node"),n);return r.a.createElement(o.a,{posts:a,pageTitle:Object(l.sentence)(t)})};var u="2505843178"},150:function(e,t,n){"use strict";var a=n(149),r=n.n(a),i=(n(33),n(148)),c=n(73),l=n.n(c),o=n(0),u=n.n(o),s=n(147),f=n(151);function m(){var e=r()(["",""]);return m=function(){return e},e}var d=function(e){var t,n=e.children,a=e.to,r=e.withTextDecoration,i=l()(e,["children","to","withTextDecoration"]),c=/^\/(?!\/)/.test(a),o=((t={})[c?"to":"href"]=a,t);return u.a.createElement(p,Object.assign({},i,o,{target:c?void 0:"_blank",as:c?f.a:"a",color:"black",_css:{"text-decoration":r?void 0:"none"}}),n)};d.defaultProps={withTextDecoration:!0},t.a=d;var p=Object(i.default)(s.Link)(m(),function(e){return e._css})},151:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(32),o=n.n(l);n.d(t,"a",function(){return o.a});n(155);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},152:function(e,t,n){"use strict";n(33);var a=n(0),r=n.n(a),i=n(176),c=n.n(i);t.a=function(e){return r.a.createElement(c.a,Object.assign({},e,{maxWidth:"64em"}))}},155:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(147);t.a=function(e){var t=e.children;return r.a.createElement(i.Box,{px:3,alignSelf:"center",width:[1,1,.5]},t)}},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(147);t.a=function(e){var t=e.children,n=e.textAlign,a=e.px;return r.a.createElement(i.Text,{fontSize:".625rem",fontWeight:400,lineHeight:1.6,my:0,px:a,textAlign:n},t)}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik",description:"Just a Note"}}}}},162:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(54),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik"}}}}},164:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"anime"},{fieldValue:"lifehack"},{fieldValue:"playground"}]}}}},166:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"anime"},{fieldValue:"lifehack"},{fieldValue:"playground"}]},site:{siteMetadata:{title:"Catatan Detik"}}}}},167:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),c=n(147),l=n(152);t.a=function(e){var t=e.children;return i.a.createElement(l.a,null,function(e){return i.a.createElement(o,{py:2,_css:{borderTop:e?"3px solid rgb(0, 0, 0)":void 0}},t)})};var o=Object(a.default)(c.Box).withConfig({displayName:"HeaderSection___StyledBox",componentId:"eltv8w-0"})(["",""],function(e){return e._css})},168:function(e,t,n){"use strict";var a=n(149),r=n.n(a),i=n(148),c=n(0),l=n.n(c),o=n(147),u=n(152);function s(){var e=r()(["",""]);return s=function(){return e},e}t.a=function(e){var t=e.children;return l.a.createElement(u.a,null,function(e){return(e?function(e){return l.a.createElement(o.Text,{as:"h1",fontSize:"1.25rem",fontWeight:600,lineHeight:1.2,my:0},e)}:function(e){return l.a.createElement(f,{as:"h1",fontFamily:"'Volkhov', serif",fontSize:"3.25rem",fontWeight:400,lineHeight:1,mt:4,mb:3,textAlign:"center",_css:{fontStyle:"italic"}},e)})(t)})};var f=Object(i.default)(o.Text)(s(),function(e){return e._css})},169:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),c=n(147),l=function(e){var t=e.children,n=e.as;return i.a.createElement(o,{as:n,fontSize:".75rem",fontWeight:600,lineHeight:1.2,my:0,_css:{textTransform:"uppercase"}},t)};l.defaultProps={as:"h2"},t.a=l;var o=Object(a.default)(c.Text).withConfig({displayName:"Topic___StyledText",componentId:"gznimx-0"})(["",""],function(e){return e._css})},170:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(147),c=n(158),l=n(150);t.a=function(e){var t=e.src,n=e.caption,a=e.captionUrl,o=e.url,u=e.captionPx,s=r.a.createElement(c.a,{textAlign:"right",px:u},n),f=a?r.a.createElement(l.a,{to:a,withTextDecoration:!1},s):s,m=r.a.createElement(i.Image,{src:t,width:1});return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(l.a,{to:o},m):m,r.a.createElement(i.Box,{alignSelf:"flex-end"},f))}},171:function(e,t,n){"use strict";var a=n(148),r=n(149),i=n.n(r),c=n(161),l=n(0),o=n.n(l),u=n(173),s=n.n(u),f=n(147),m=n(210),d=n(151),p=n(7),h=n.n(p),x=n(163),E=function(){return o.a.createElement("svg",{width:"16",height:"14",viewBox:"0 0 20 14",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z",fill:"#000000",fillRule:"evenodd"}))},b=n(150);function v(){var e=i()(["",""]);return v=function(){return e},e}var g=function(e){var t=e.onOpenSidebar;return function(e){return o.a.createElement(w,{width:1,boxShadow:"0 1px 0 rgba(0,0,0,0.15)",bg:"white",_css:{position:"fixed"}},o.a.createElement(S,{px:3,alignItems:"center",justifyContent:"start",flexDirection:"row",_css2:{height:"40px"}},o.a.createElement(f.Box,{alignSelf:"center",width:1/12},o.a.createElement(f.Button,{px:0,bg:"white",onClick:t},o.a.createElement(E,null))),o.a.createElement(f.Box,{alignSelf:"center",width:5/6},o.a.createElement(b.a,{to:"/",withTextDecoration:!1},o.a.createElement(f.Text,{fontFamily:"Exo",fontWeight:"bold"},e.site.siteMetadata.title)))))}},y=function(e){var t=e.onOpenSidebar;return o.a.createElement(d.b,{query:"1784012146",render:g({onOpenSidebar:t}),data:x})},w=Object(a.default)(f.Card).withConfig({displayName:"HeaderMobile___StyledCard",componentId:"rwat9b-0"})(["",""],function(e){return e._css}),S=Object(a.default)(f.Flex)(v(),function(e){return e._css2}),k=n(156),_=function(){return o.a.createElement(k.a,null,o.a.createElement(f.Flex,{py:2},o.a.createElement(f.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},"© 2019 Detik P Warjaya. Powered by ",o.a.createElement(b.a,{to:"https://www.gatsbyjs.org/"},"Gatsby"),"  inspired by jekyll theme ",o.a.createElement(b.a,{to:"https://github.com/mmistakes/so-simple-theme"},"So Simple Theme ")," and ",o.a.createElement(b.a,{to:"vice.com"},"vice.com"))))},O=n(164),j=n(214),T=n(159),H=function(e){var t=e.children;return o.a.createElement(f.Box,{as:"ul",mb:2,pl:0},t)},C=function(e){var t=e.children,n=e.title;return o.a.createElement(B,{pt:4,_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif",textTransform:"uppercase"}},n&&o.a.createElement(f.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},n),o.a.createElement(H,null,t))},B=Object(a.default)(f.Box).withConfig({displayName:"Navbar___StyledBox",componentId:"d98k89-0"})(["",""],function(e){return e._css}),D=function(e){var t=e.children;return o.a.createElement(F,{as:"li",mb:2,pl:0,_css:{"list-style-type":"none"}},t)},F=Object(a.default)(f.Box).withConfig({displayName:"ListItem___StyledBox",componentId:"sc-15j5pjv-0"})(["",""],function(e){return e._css}),z=function(e){var t=e.children,n=e.to;return o.a.createElement(D,null,o.a.createElement(b.a,{to:n,withTextDecoration:!1},o.a.createElement(f.Text,{fontWeight:600,lineHeight:1.2},t)))},W=function(){return o.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24px"},o.a.createElement("title",null),o.a.createElement("g",{id:"cross",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}},o.a.createElement("line",{x1:"7",x2:"25",y1:"7",y2:"25"}),o.a.createElement("line",{x1:"7",x2:"25",y1:"25",y2:"7"})))};function M(){var e=i()(["",""]);return M=function(){return e},e}function q(){var e=i()(["",""]);return q=function(){return e},e}var N=function(e){var t=e.fieldValue;return o.a.createElement(z,{key:t,to:"/"+t},Object(T.sentence)(t))},V=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return function(e){return o.a.createElement(f.Box,{onClick:t},n&&o.a.createElement(I,{bg:"white",width:1,px:3,flexDirection:"column",_css:{position:"fixed",top:"0",left:"0",zIndex:250,height:"100vh"}},o.a.createElement(R,{bg:"white",onClick:t,px:0,width:1/6,_css2:{height:"60px",textAlign:"left"}},o.a.createElement(W,null)),o.a.createElement(C,null,o.a.createElement(z,{to:"/"},"Home")),o.a.createElement(C,{title:"category"},Object(j.a)(N,e.allMarkdownRemark.group))))}},A=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return o.a.createElement(d.b,{query:"2695456878",render:V({onCloseSidebar:t,isSidebarOpen:n}),data:O})},I=Object(a.default)(f.Flex)(q(),function(e){return e._css}),R=Object(a.default)(f.Button)(M(),function(e){return e._css2}),P=n(152);function L(){var e=i()(["",""]);return L=function(){return e},e}function G(){var e=i()(["",""]);return G=function(){return e},e}var J=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isSidebarOpen:!1},t.openSidebar=function(){return t.setState({isSidebarOpen:!0})},t.closeSidebar=function(){return t.setState({isSidebarOpen:!1})},t}return h()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.state.isSidebarOpen;return o.a.createElement(P.a,null,o.a.createElement(A,{onCloseSidebar:this.closeSidebar,isSidebarOpen:t}),o.a.createElement(Q,{flexDirection:"column",_css:{height:"100%"}},o.a.createElement(y,{onOpenSidebar:this.openSidebar,onCloseSidebar:this.closeSidebar}),o.a.createElement(U,{pt:"40px",_css2:{flexGrow:1,overflowY:"auto"}},e),o.a.createElement(_,null)))},t}(l.Component),Q=Object(a.default)(f.Flex)(G(),function(e){return e._css}),U=Object(a.default)(f.Box)(L(),function(e){return e._css2}),Y=n(166),K=function(e){var t=e.children,n=e.to;return o.a.createElement(b.a,{to:n,mx:2},o.a.createElement(f.Text,{color:"white",lineHeight:1.2},t))};function X(){var e=i()(["",""]);return X=function(){return e},e}function Z(){var e=i()(["",""]);return Z=function(){return e},e}var $=function(e){var t=e.fieldValue;return o.a.createElement(K,{key:t,to:"/"+t},Object(T.sentence)(t))},ee=function(){return o.a.createElement(d.b,{query:"3370774989",render:function(e){return o.a.createElement(f.Flex,{flexDirection:"column",justifyContent:"center",alignItems:"center"},o.a.createElement(te,{bg:"black",py:2,px:3,mb:4,_css:{textTransform:"uppercase",borderRadius:"0 0 10px 10px",borderTop:"5px solid #000"}},Object(j.a)($,e.allMarkdownRemark.group)),o.a.createElement(b.a,{to:"/",withTextDecoration:!1},o.a.createElement(f.Text,{fontFamily:"Exo",fontSize:"2.25rem"},e.site.siteMetadata.title)),o.a.createElement(ne,{fontFamily:"Exo",fontSize:"1.25rem",_css2:{fontStyle:"italic"}},"Just A Note"))},data:Y})},te=Object(a.default)(f.Flex)(Z(),function(e){return e._css}),ne=Object(a.default)(f.Text)(X(),function(e){return e._css2}),ae=function(e){var t=e.children;return o.a.createElement(f.Flex,{flexDirection:"column",alignItems:"center"},o.a.createElement(ee,null),t,o.a.createElement(_,null))};function re(){var e=i()(["",""]);return re=function(){return e},e}function ie(){var e=i()(['\n  body {\n    margin: 0;\n    height: 100%;\n  }\n  ::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    background: transparent;  /* optional: just make scrollbar invisible */\n  }\n  ::-webkit-scrollbar-thumb {\n      background: #FF0000;\n  }\n  blockquote {\n    font-family: "volkhov",serif;\n    font-style: italic;\n    font-size: 1rem;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n    padding-left: 20px;\n    border-left: 8px solid #000;\n  }\n  a {\n    color: black;\n  }\n']);return ie=function(){return e},e}var ce=Object(a.createGlobalStyle)(ie()),le=function(e){var t=e.children;return function(e){var n=Object(m.a)(["site","siteMetadata"])(e),a=n.title,r=n.description;return o.a.createElement(oe,{_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif"}},o.a.createElement(s.a,{titleTemplate:"%s | "+a},o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"}),o.a.createElement("title",null,a),o.a.createElement("meta",{name:"description",content:r}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Exo",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Volkhov",rel:"stylesheet"})),o.a.createElement(ce,null),o.a.createElement(P.a,null,function(e){return e?o.a.createElement(J,null,t):o.a.createElement(ae,null,t)}))}},oe=(t.a=function(e){var t=e.children;return o.a.createElement(d.b,{query:"1103598817",render:le({children:t}),data:c})},Object(a.default)(f.Box)(re(),function(e){return e._css}))},177:function(e,t,n){"use strict";n(33);var a=n(0),r=n.n(a),i=n(147),c=n(213),l=n(171),o=n(167),u=n(156),s=function(e){var t=e.children;return r.a.createElement(i.Box,{pt:2},t)},f=function(e){var t=e.children;return r.a.createElement(i.Box,{py:3},t)},m=n(168),d=n(169),p=function(e){var t=e.children;return r.a.createElement(i.Text,{as:"h2",fontSize:"1rem",fontWeight:600,lineHeight:1.2,mt:0,mb:2},t)},h=function(e){var t=e.children;return r.a.createElement(i.Text,{fontSize:".875rem",fontWeight:400,lineHeight:1.6,mt:0,mb:2,color:"rgb(85, 85, 85)"},t)},x=n(158),E=n(150),b=n(170),v=n(152),g=function(e){var t=e.frontmatter,n=e.id,a=e.excerpt,i=e.fields,l=t.topic,o=t.image,u=t.title,m=t.date,v=i.path;return r.a.createElement(s,{key:n},l&&r.a.createElement(d.a,null,l),Object(c.a)("src",o)&&r.a.createElement(b.a,Object.assign({},o,{url:v})),r.a.createElement(E.a,{withTextDecoration:!1,to:v},r.a.createElement(f,null,r.a.createElement(p,null,u),r.a.createElement(h,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))),r.a.createElement(x.a,null,m),r.a.createElement("hr",null))};t.a=function(e){var t=e.posts,n=e.pageTitle;return r.a.createElement(l.a,null,r.a.createElement(i.Flex,{flexDirection:"column"},r.a.createElement(v.a,null,r.a.createElement(b.a,{src:"https://images.unsplash.com/photo-1421882402971-b18cd1741ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80",url:"https://unsplash.com/photos/gm3bxHin8VA",caption:"Photo By Daria Nepriakhina",captionUrl:"https://unsplash.com/@epicantus",captionPx:3})),r.a.createElement(u.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,null,n)),t.map(g))))}}}]);
//# sourceMappingURL=component---src-templates-category-post-js-12ac3de6a57168a3c449.js.map
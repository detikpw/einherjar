(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var a=n(142),r=n.n(a),i=n(140),c=(n(32),n(0)),o=n.n(c),l=n(139),u=n(158),s=n(152),d=n(153),f=function(e){var t=e.children;return o.a.createElement(m,{_css:{lineHeight:1.6}},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))},m=Object(i.default)(l.Box).withConfig({displayName:"Article___StyledBox",componentId:"sc-144dnoy-0"})(["",""],function(e){return e._css}),h=n(154),p=n(155),v=n(147),g=n(156);function x(){var e=r()(["",""]);return x=function(){return e},e}function E(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html,r=t.timeToRead,i=(n.title,n.image),c=n.topic,m=n.date;return o.a.createElement(u.a,null,i.src&&o.a.createElement(g.a,Object.assign({},i,{captionPx:3})),o.a.createElement(s.a,null,o.a.createElement(d.a,null,c&&o.a.createElement(p.a,{as:"h1"},c),o.a.createElement(h.a,null,n.title)),o.a.createElement(l.Flex,null,o.a.createElement(v.a,null,m),o.a.createElement(y,{_css:{flex:1}}),o.a.createElement(v.a,null,r+" minutes")),o.a.createElement(f,null,a)))}n.d(t,"default",function(){return E}),n.d(t,"pageQuery",function(){return b});var b="181768648",y=Object(i.default)(l.Box)(x(),function(e){return e._css})},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(141),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(146),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,t,n){"use strict";var a=n(142),r=n.n(a),i=(n(32),n(140)),c=n(150),o=n.n(c),l=n(0),u=n.n(l),s=n(139),d=n(143);function f(){var e=r()(["",""]);return f=function(){return e},e}Object(i.default)(s.Link);var m=function(e){var t,n=e.children,a=e.to,r=e.withTextDecoration,i=o()(e,["children","to","withTextDecoration"]),c=/^\/(?!\/)/.test(a),l=((t={})[c?"to":"href"]=a,t);return u.a.createElement(h,Object.assign({},i,l,{target:c?void 0:"_blank",as:c?d.Link:"a",color:"black",_css:{"text-decoration":r?void 0:"none"}}),n)};m.defaultProps={withTextDecoration:!0},t.a=m;var h=Object(i.default)(s.Link)(f(),function(e){return e._css})},146:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139);t.a=function(e){var t=e.children,n=e.textAlign,a=e.px;return r.a.createElement(i.Text,{fontSize:".625rem",fontWeight:400,lineHeight:1.6,my:0,px:a,textAlign:n},t)}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik"}}}}},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(54),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139);t.a=function(e){var t=e.children;return r.a.createElement(i.Box,{px:3,alignSelf:"justify"},t)}},153:function(e,t,n){"use strict";var a=n(140),r=n(0),i=n.n(r),c=n(139);t.a=function(e){var t=e.children;return i.a.createElement(o,{pt:2,_css:{borderTop:"3px solid rgb(0, 0, 0)"}},t)};var o=Object(a.default)(c.Box).withConfig({displayName:"HeaderSection___StyledBox",componentId:"eltv8w-0"})(["",""],function(e){return e._css})},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139);t.a=function(e){var t=e.children;return r.a.createElement(i.Text,{as:"h1",fontSize:"1.25rem",fontWeight:600,lineHeight:1.2,my:0},t)}},155:function(e,t,n){"use strict";var a=n(140),r=n(0),i=n.n(r),c=n(139),o=function(e){var t=e.children,n=e.as;return i.a.createElement(l,{as:n,fontSize:".75rem",fontWeight:600,lineHeight:1.2,my:0,_css:{textTransform:"uppercase"}},t)};o.defaultProps={as:"h2"},t.a=o;var l=Object(a.default)(c.Text).withConfig({displayName:"Topic___StyledText",componentId:"gznimx-0"})(["",""],function(e){return e._css})},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139),c=n(147),o=n(144);t.a=function(e){var t=e.src,n=e.caption,l=e.captionUrl,u=e.url,s=e.captionPx,d=r.a.createElement(c.a,{textAlign:"right",px:s},n),f=l?r.a.createElement(o.a,{to:l,withTextDecoration:!1},d):d,m=r.a.createElement(i.Image,{src:t});return r.a.createElement(a.Fragment,null,u?r.a.createElement(o.a,{to:u},m):m,f)}},158:function(e,t,n){"use strict";var a=n(140),r=n(7),i=n.n(r),c=n(142),o=n.n(c),l=n(0),u=n.n(l),s=n(160),d=n.n(s),f=n(139),m=n(149),h=n(143),p=function(){return u.a.createElement("svg",{width:"16",height:"14",viewBox:"0 0 20 14",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{d:"M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z",fill:"#000000",fillRule:"evenodd"}))};function v(){var e=o()(["",""]);return v=function(){return e},e}var g=function(e){var t=e.onOpenSidebar;return function(e){return u.a.createElement(E,{width:1,boxShadow:"0 1px 0 rgba(0,0,0,0.15)",bg:"white",_css:{position:"fixed"}},u.a.createElement(b,{px:3,alignItems:"center",justifyContent:"start",flexDirection:"row",_css2:{height:"40px"}},u.a.createElement(f.Box,{alignSelf:"center",width:1/6},u.a.createElement(f.Button,{px:0,bg:"white",onClick:t},u.a.createElement(p,null))),u.a.createElement(f.Box,{alignSelf:"center",width:4/6},u.a.createElement(f.Text,{fontFamily:"Exo",fontWeight:"bold"},e.site.siteMetadata.title))))}},x=function(e){var t=e.onOpenSidebar;return u.a.createElement(h.StaticQuery,{query:"1784012146",render:g({onOpenSidebar:t}),data:m})},E=Object(a.default)(f.Card).withConfig({displayName:"Header___StyledCard",componentId:"sc-16gjoe2-0"})(["",""],function(e){return e._css}),b=Object(a.default)(f.Flex)(v(),function(e){return e._css2}),y=function(e){var t=e.children;return u.a.createElement(f.Box,{as:"ul",mb:2,pl:0},t)},w=function(e){var t=e.children,n=e.title;return u.a.createElement(_,{pt:4,_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif",textTransform:"uppercase"}},n&&u.a.createElement(f.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},n),u.a.createElement(y,null,t))},_=Object(a.default)(f.Box).withConfig({displayName:"Navbar___StyledBox",componentId:"d98k89-0"})(["",""],function(e){return e._css}),S=n(144),O=function(e){var t=e.children;return u.a.createElement(j,{as:"li",mb:2,pl:0,_css:{"list-style-type":"none"}},t)},j=Object(a.default)(f.Box).withConfig({displayName:"ListItem___StyledBox",componentId:"sc-15j5pjv-0"})(["",""],function(e){return e._css}),T=function(e){var t=e.children,n=e.to;return u.a.createElement(O,null,u.a.createElement(S.a,{to:n,withTextDecoration:!1},u.a.createElement(f.Text,{fontWeight:600,lineHeight:1.2},t)))},k=function(){return u.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24px"},u.a.createElement("title",null),u.a.createElement("g",{id:"cross",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}},u.a.createElement("line",{x1:"7",x2:"25",y1:"7",y2:"25"}),u.a.createElement("line",{x1:"7",x2:"25",y1:"25",y2:"7"})))};function H(){var e=o()(["",""]);return H=function(){return e},e}var C=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return u.a.createElement(u.a.Fragment,null,n&&u.a.createElement(B,{bg:"white",width:1,px:3,flexDirection:"column",_css:{position:"fixed",top:"0",left:"0",zIndex:250,height:"100vh"}},u.a.createElement(I,{bg:"white",onClick:t,width:1/6,_css2:{height:"60px"}},u.a.createElement(k,null)),u.a.createElement(w,null,u.a.createElement(T,{to:"/"},"Home")),u.a.createElement(w,{title:"tags"},u.a.createElement(T,{to:"/"},"asdf"),u.a.createElement(T,{to:"/"},"qwerty"))))},B=Object(a.default)(f.Flex).withConfig({displayName:"sidebar___StyledFlex",componentId:"sc-1bleud2-0"})(["",""],function(e){return e._css}),I=Object(a.default)(f.Button)(H(),function(e){return e._css2});function q(){var e=o()(["",""]);return q=function(){return e},e}function F(){var e=o()(["",""]);return F=function(){return e},e}function N(){var e=o()(["",""]);return N=function(){return e},e}function z(){var e=o()(["\n  body {\n    margin: 0;\n    height: 100%;\n  }\n"]);return z=function(){return e},e}n.d(t,"a",function(){return A});var W=Object(a.createGlobalStyle)(z()),A=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isSidebarOpen:!1},t.openSidebar=function(){return t.setState({isSidebarOpen:!0})},t.closeSidebar=function(){return t.setState({isSidebarOpen:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.state.isSidebarOpen;return u.a.createElement(D,{_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif"}},u.a.createElement(d.a,null,u.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Exo",rel:"stylesheet"})),u.a.createElement(W,null),u.a.createElement(C,{onCloseSidebar:this.closeSidebar,isSidebarOpen:t}),u.a.createElement(L,{flexDirection:"column",_css2:{height:"100%"}},u.a.createElement(x,{onOpenSidebar:this.openSidebar,onCloseSidebar:this.closeSidebar}),u.a.createElement(P,{pt:"40px",_css3:{flexGrow:1,overflowY:"auto"}},e)))},t}(l.Component),D=Object(a.default)(f.Box)(N(),function(e){return e._css}),L=Object(a.default)(f.Flex)(F(),function(e){return e._css2}),P=Object(a.default)(f.Box)(q(),function(e){return e._css3})}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-e76219bc50e82c2d5307.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(180),c=n(181),o=(n(177),n(158)),l=n(153),u=n(152),s=n(139),f=function(e){var t=e.children;return r.a.createElement(s.Box,{pt:2},t)},d=function(e){var t=e.children;return r.a.createElement(s.Box,{py:3},t)},m=n(154),h=n(155),p=function(e){var t=e.children;return r.a.createElement(s.Text,{as:"h2",fontSize:"1rem",fontWeight:600,lineHeight:1.2,mt:0,mb:2},t)},g=function(e){var t=e.children;return r.a.createElement(s.Text,{fontSize:".875rem",fontWeight:400,lineHeight:1.6,mt:0,mb:2,color:"rgb(85, 85, 85)"},t)},v=(n(147),n(144)),x=n(156);n.d(t,"pageQuery",function(){return E});var b=function(e){var t=e.frontmatter,n=e.id,a=e.excerpt,i=e.fields,c=t.topic,o=t.image,l=t.title,u=i.path;return r.a.createElement(f,{key:n},c&&r.a.createElement(h.a,null,c),o.src&&r.a.createElement(x.a,Object.assign({},o,{url:u})),r.a.createElement(v.a,{withTextDecoration:!1,to:u},r.a.createElement(d,null,r.a.createElement(p,null,l),r.a.createElement(g,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))))},E=(t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=Object(i.a)(Object(c.a)("node"),t);return r.a.createElement(o.a,null,r.a.createElement(x.a,{src:"https://images.unsplash.com/photo-1421882402971-b18cd1741ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80",url:"https://unsplash.com/photos/gm3bxHin8VA",caption:"Photo By Daria Nepriakhina",captionUrl:"https://unsplash.com/@epicantus",captionPx:3}),r.a.createElement(u.a,null,r.a.createElement(l.a,null,r.a.createElement(m.a,null,"Terbaru")),n.map(b)))},"2860013208")},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(141),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(146),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var f=n(33);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,t,n){"use strict";var a=n(142),r=n.n(a),i=(n(32),n(140)),c=n(150),o=n.n(c),l=n(0),u=n.n(l),s=n(139),f=n(143);function d(){var e=r()(["",""]);return d=function(){return e},e}Object(i.default)(s.Link);var m=function(e){var t,n=e.children,a=e.to,r=e.withTextDecoration,i=o()(e,["children","to","withTextDecoration"]),c=/^\/(?!\/)/.test(a),l=((t={})[c?"to":"href"]=a,t);return u.a.createElement(h,Object.assign({},i,l,{target:c?void 0:"_blank",as:c?f.Link:"a",color:"black",_css:{"text-decoration":r?void 0:"none"}}),n)};m.defaultProps={withTextDecoration:!0},t.a=m;var h=Object(i.default)(s.Link)(d(),function(e){return e._css})},146:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139);t.a=function(e){var t=e.children,n=e.textAlign,a=e.px;return r.a.createElement(i.Text,{fontSize:".625rem",fontWeight:400,lineHeight:1.6,my:0,px:a,textAlign:n},t)}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Catatan Detik"}}}}},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(54),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139);t.a=function(e){var t=e.children;return r.a.createElement(i.Box,{px:3,alignSelf:"justify"},t)}},153:function(e,t,n){"use strict";var a=n(140),r=n(0),i=n.n(r),c=n(139);t.a=function(e){var t=e.children;return i.a.createElement(o,{pt:2,_css:{borderTop:"3px solid rgb(0, 0, 0)"}},t)};var o=Object(a.default)(c.Box).withConfig({displayName:"HeaderSection___StyledBox",componentId:"eltv8w-0"})(["",""],function(e){return e._css})},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139);t.a=function(e){var t=e.children;return r.a.createElement(i.Text,{as:"h1",fontSize:"1.25rem",fontWeight:600,lineHeight:1.2,my:0},t)}},155:function(e,t,n){"use strict";var a=n(140),r=n(0),i=n.n(r),c=n(139),o=function(e){var t=e.children,n=e.as;return i.a.createElement(l,{as:n,fontSize:".75rem",fontWeight:600,lineHeight:1.2,my:0,_css:{textTransform:"uppercase"}},t)};o.defaultProps={as:"h2"},t.a=o;var l=Object(a.default)(c.Text).withConfig({displayName:"Topic___StyledText",componentId:"gznimx-0"})(["",""],function(e){return e._css})},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139),c=n(147),o=n(144);t.a=function(e){var t=e.src,n=e.caption,l=e.captionUrl,u=e.url,s=e.captionPx,f=r.a.createElement(c.a,{textAlign:"right",px:s},n),d=l?r.a.createElement(o.a,{to:l,withTextDecoration:!1},f):f,m=r.a.createElement(i.Image,{src:t});return r.a.createElement(a.Fragment,null,u?r.a.createElement(o.a,{to:u},m):m,d)}},158:function(e,t,n){"use strict";var a=n(140),r=n(7),i=n.n(r),c=n(142),o=n.n(c),l=n(0),u=n.n(l),s=n(160),f=n.n(s),d=n(139),m=n(149),h=n(143),p=function(){return u.a.createElement("svg",{width:"16",height:"14",viewBox:"0 0 20 14",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{d:"M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z",fill:"#000000",fillRule:"evenodd"}))};function g(){var e=o()(["",""]);return g=function(){return e},e}var v=function(e){var t=e.onOpenSidebar;return function(e){return u.a.createElement(b,{width:1,boxShadow:"0 1px 0 rgba(0,0,0,0.15)",bg:"white",_css:{position:"fixed"}},u.a.createElement(E,{px:3,alignItems:"center",justifyContent:"start",flexDirection:"row",_css2:{height:"40px"}},u.a.createElement(d.Box,{alignSelf:"center",width:1/6},u.a.createElement(d.Button,{px:0,bg:"white",onClick:t},u.a.createElement(p,null))),u.a.createElement(d.Box,{alignSelf:"center",width:4/6},u.a.createElement(d.Text,{fontFamily:"Exo",fontWeight:"bold"},e.site.siteMetadata.title))))}},x=function(e){var t=e.onOpenSidebar;return u.a.createElement(h.StaticQuery,{query:"1784012146",render:v({onOpenSidebar:t}),data:m})},b=Object(a.default)(d.Card).withConfig({displayName:"Header___StyledCard",componentId:"sc-16gjoe2-0"})(["",""],function(e){return e._css}),E=Object(a.default)(d.Flex)(g(),function(e){return e._css2}),y=function(e){var t=e.children;return u.a.createElement(d.Box,{as:"ul",mb:2,pl:0},t)},w=function(e){var t=e.children,n=e.title;return u.a.createElement(_,{pt:4,_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif",textTransform:"uppercase"}},n&&u.a.createElement(d.Text,{fontFamily:400,fontSize:".625rem",lineHeight:1.2},n),u.a.createElement(y,null,t))},_=Object(a.default)(d.Box).withConfig({displayName:"Navbar___StyledBox",componentId:"d98k89-0"})(["",""],function(e){return e._css}),S=n(144),O=function(e){var t=e.children;return u.a.createElement(j,{as:"li",mb:2,pl:0,_css:{"list-style-type":"none"}},t)},j=Object(a.default)(d.Box).withConfig({displayName:"ListItem___StyledBox",componentId:"sc-15j5pjv-0"})(["",""],function(e){return e._css}),T=function(e){var t=e.children,n=e.to;return u.a.createElement(O,null,u.a.createElement(S.a,{to:n,withTextDecoration:!1},u.a.createElement(d.Text,{fontWeight:600,lineHeight:1.2},t)))},H=function(){return u.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24px"},u.a.createElement("title",null),u.a.createElement("g",{id:"cross",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2px"}},u.a.createElement("line",{x1:"7",x2:"25",y1:"7",y2:"25"}),u.a.createElement("line",{x1:"7",x2:"25",y1:"25",y2:"7"})))};function k(){var e=o()(["",""]);return k=function(){return e},e}var B=function(e){var t=e.onCloseSidebar,n=e.isSidebarOpen;return u.a.createElement(u.a.Fragment,null,n&&u.a.createElement(C,{bg:"white",width:1,px:3,flexDirection:"column",_css:{position:"fixed",top:"0",left:"0",zIndex:250,height:"100vh"}},u.a.createElement(q,{bg:"white",onClick:t,width:1/6,_css2:{height:"60px"}},u.a.createElement(H,null)),u.a.createElement(w,null,u.a.createElement(T,{to:"/"},"Home")),u.a.createElement(w,{title:"tags"},u.a.createElement(T,{to:"/"},"asdf"),u.a.createElement(T,{to:"/"},"qwerty"))))},C=Object(a.default)(d.Flex).withConfig({displayName:"sidebar___StyledFlex",componentId:"sc-1bleud2-0"})(["",""],function(e){return e._css}),q=Object(a.default)(d.Button)(k(),function(e){return e._css2});function z(){var e=o()(["",""]);return z=function(){return e},e}function W(){var e=o()(["",""]);return W=function(){return e},e}function D(){var e=o()(["",""]);return D=function(){return e},e}function I(){var e=o()(["\n  body {\n    margin: 0;\n    height: 100%;\n  }\n"]);return I=function(){return e},e}n.d(t,"a",function(){return F});var N=Object(a.createGlobalStyle)(I()),F=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isSidebarOpen:!1},t.openSidebar=function(){return t.setState({isSidebarOpen:!0})},t.closeSidebar=function(){return t.setState({isSidebarOpen:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.state.isSidebarOpen;return u.a.createElement(P,{_css:{fontFamily:"HelveticaNeueArabic,NeueHelveticaW01,Helvetica,HelveticaWorld,Arial,TazuganeGothic,sans-serif"}},u.a.createElement(f.a,null,u.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Exo",rel:"stylesheet"})),u.a.createElement(N,null),u.a.createElement(B,{onCloseSidebar:this.closeSidebar,isSidebarOpen:t}),u.a.createElement(A,{flexDirection:"column",_css2:{height:"100%"}},u.a.createElement(x,{onOpenSidebar:this.openSidebar,onCloseSidebar:this.closeSidebar}),u.a.createElement(L,{pt:"40px",_css3:{flexGrow:1,overflowY:"auto"}},e)))},t}(l.Component),P=Object(a.default)(d.Box)(D(),function(e){return e._css}),A=Object(a.default)(d.Flex)(W(),function(e){return e._css2}),L=Object(a.default)(d.Box)(z(),function(e){return e._css3})}}]);
//# sourceMappingURL=component---src-pages-index-js-4fa049455f6461713324.js.map
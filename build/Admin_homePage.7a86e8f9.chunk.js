"use strict";(self.webpackChunkmynote=self.webpackChunkmynote||[]).push([[3981],{91550:(G,y,n)=>{n.r(y),n.d(y,{default:()=>He});var e=n(53547),s=n(41580),I=n(17034),W=n(185),T=n(11276),v=n(67819),l=n(67281),j=n(64593),D=n(44012),O=n(16550),c=n(54863),d=n(11047),g=n(75515),H=n(29728),P=n(37323),E=n(86896),w=n(64729),A=n(45697),i=n.n(A),u=n(99872),F=n(89285),z=n(96392);const b=({type:t,title:a,number:o,content:r,hasLine:m})=>{const{formatMessage:p}=(0,E.Z)();return e.createElement(s.x,null,e.createElement(d.k,null,e.createElement(s.x,{minWidth:(0,l.pxToRem)(30),marginRight:5},e.createElement(z.Z,{type:t,number:o})),e.createElement(g.Z,{variant:"delta",as:"h3"},p(a))),e.createElement(d.k,{alignItems:"flex-start"},e.createElement(d.k,{justifyContent:"center",minWidth:(0,l.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},m&&e.createElement(F.Z,{type:t,minHeight:t===u.lW?(0,l.pxToRem)(85):(0,l.pxToRem)(65)})),e.createElement(s.x,{marginTop:2},t===u.lW&&r)))};b.defaultProps={content:void 0,number:void 0,type:u.VM,hasLine:!0},b.propTypes={content:i().node,number:i().number,title:i().shape({id:i().string,defaultMessage:i().string}).isRequired,type:i().oneOf([u.lW,u.hx,u.VM]),hasLine:i().bool};const N=b,V=(t,a)=>t===-1||a<t?u.hx:a>t?u.VM:u.lW,S=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(r=>r.key===a);return e.createElement(s.x,null,t.map((r,m)=>e.createElement(N,{key:r.key,title:r.title,content:r.content,number:m+1,type:V(o,m),hasLine:m!==t.length-1})))};S.defaultProps={currentSectionKey:void 0},S.propTypes={sections:i().arrayOf(i().shape({key:i().string.isRequired,title:i().shape({id:i().string,defaultMessage:i().string}).isRequired,content:i().node})).isRequired,currentSectionKey:i().string};const $=S,K=()=>{const{guidedTourState:t,setSkipped:a}=(0,l.useGuidedTour)(),{formatMessage:o}=(0,E.Z)(),{trackUsage:r}=(0,l.useTracking)(),m=Object.entries(w.Z).map(([f,h])=>({key:f,title:h.home.title,content:e.createElement(l.LinkButton,{onClick:()=>r(h.home.trackingEvent),to:h.home.cta.target,endIcon:e.createElement(P.Z,null)},o(h.home.cta.title))})),B=m.map(f=>({isDone:Object.entries(t[f.key]).every(([,h])=>h),...f})).find(f=>!f.isDone)?.key,x=()=>{a(!0),r("didSkipGuidedtour")};return e.createElement(s.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(g.Z,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement($,{sections:m,currentSectionKey:B})),e.createElement(d.k,{justifyContent:"flex-end"},e.createElement(H.z,{variant:"tertiary",onClick:x},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},U=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var J=n(39645);const Q=n.p+"7e9af4fb7e723fcebf1f.svg";var X=n(45349),Y=n(34023),q=n(18540),_=n(76863);const ee=n.p+"27d16aefee06412db90a.png",te=n.p+"bb4d0d527bdfb161bc5a.svg",ne=n.p+"bb3108f7fd1e6179bde1.svg",oe=c.default.a`
  text-decoration: none;
`,ae=(0,c.default)(s.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,le=(0,c.default)(d.k)`
  background: rgba(255, 255, 255, 0.3);
`,ie=()=>{const{formatMessage:t}=(0,E.Z)(),{trackUsage:a}=(0,l.useTracking)();return e.createElement(oe,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{a("didClickOnTryStrapiCloudSection")}},e.createElement(d.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(ae,{backgroundImage:ee,hasRadius:!0,padding:3},e.createElement(le,{width:(0,l.pxToRem)(32),height:(0,l.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ne,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(d.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(d.k,null,e.createElement(g.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(g.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(s.x,{src:te,position:"absolute",top:0,right:0,as:"img"}))))},C=c.default.a`
  text-decoration: none;
`,re=()=>{const{formatMessage:t}=(0,E.Z)(),{trackUsage:a}=(0,l.useTracking)(),o=r=>{a(r)};return e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(ie,null),e.createElement(C,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(l.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(X.Z,null),iconBackground:"primary100"})),e.createElement(C,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(Y.Z,null),iconBackground:"warning100"})),e.createElement(C,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(q.Z,null),iconBackground:"secondary100"})),e.createElement(C,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(_.Z,null),iconBackground:"alternative100"})))};var Z=n(36182);const se=(0,c.default)(g.Z)`
  word-break: break-word;
`,L=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,E.Z)();return e.createElement("div",null,e.createElement(s.x,{paddingLeft:6,paddingBottom:10},e.createElement(d.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(g.Z,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(se,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(Z.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(H.z,{size:"L",onClick:a,endIcon:e.createElement(P.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};L.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},L.propTypes={hasCreatedContentType:i().bool,onCreateCT:i().func};const ce=L;var de=n(80994),me=n(76840),ue=n(11039),pe=n(16860),ge=n(11462),fe=n(50515),he=n(57750),Ee=n(17772);const ke=(0,c.default)(me.Z)`
  path {
    fill: #7289da !important;
  }
`,ye=(0,c.default)(ue.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,M=(0,c.default)(pe.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,ve=(0,c.default)(ge.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Ce=(0,c.default)(fe.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Te=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(he.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(ke,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ye,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(ve,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Ce,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(M,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(M,null),alt:"career"}],be=(0,c.default)(de.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Se=(0,c.default)(T.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Le=()=>{const{formatMessage:t}=(0,E.Z)(),{communityEdition:a}=(0,l.useAppInfo)(),o=[...Te,{icon:e.createElement(M,null),link:a?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(s.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(s.x,{paddingBottom:7},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(g.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(g.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(Z.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Ee.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Se,null,o.map(({icon:r,link:m,name:p})=>e.createElement(v.P,{col:6,s:12,key:p.id},e.createElement(be,{size:"L",startIcon:r,variant:"tertiary",href:m,isExternal:!0},t(p))))))};var Me=function(){return window&&window.strapi&&window.strapi.isEE?n(94018).Z:n(67875).Z}(),Be=(0,c.default)(s.x).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],150/16),xe=function(){var a=(0,J.G)(),o=a.collectionTypes,r=a.singleTypes,m=a.isLoading,p=(0,l.useGuidedTour)(),B=p.guidedTourState,x=p.isGuidedTourVisible,f=p.isSkipped;Me();var h=!U(B)&&x&&!f,Pe=(0,O.k6)(),Ze=Pe.push,Re=function(R){R.preventDefault(),Ze("/plugins/content-type-builder/content-types/create-content-type")},Ge=(0,e.useMemo)(function(){var k=function(Ie){return Ie.filter(function(We){return We.isDisplayed})};return k(o).length>1||k(r).length>0},[o,r]);return m?e.createElement(l.LoadingIndicatorPage,null):e.createElement(I.A,null,e.createElement(D.Z,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},function(k){return e.createElement(j.q,{title:k[0]})}),e.createElement(W.o,null,e.createElement(Be,null,e.createElement("img",{alt:"","aria-hidden":!0,src:Q})),e.createElement(s.x,{padding:10},e.createElement(T.r,null,e.createElement(v.P,{col:8,s:12},e.createElement(ce,{onCreateCT:Re,hasCreatedContentType:Ge}))),e.createElement(T.r,{gap:6},e.createElement(v.P,{col:8,s:12},h?e.createElement(K,null):e.createElement(re,null)),e.createElement(v.P,{col:4,s:12},e.createElement(Le,null))))))};const He=(0,e.memo)(xe)},67875:(G,y,n)=>{n.d(y,{Z:()=>s});const s=()=>null}}]);

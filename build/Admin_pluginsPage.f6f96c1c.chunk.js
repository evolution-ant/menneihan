"use strict";(self.webpackChunkmynote=self.webpackChunkmynote||[]).push([[3677],{14928:(W,u,t)=>{t.r(u),t.d(u,{default:()=>A});var e=t(53547),a=t(67281),P=t(64593),r=t(86896),h=t(86706),v=t(99369),y=t(14087),g=t(17034),c=t(185),T=t(53979),p=t(49066),C=t(38939),M=t(8060),d=t(79031),s=t(37909),o=t(75515),L=t(15234),I=t(88767);const Z=async()=>{const{get:n}=(0,a.getFetchClient)(),{data:l}=await n("/admin/plugins");return l},F=n=>{const l=(0,a.useNotification)();return(0,I.useQuery)("list-enabled-plugins",()=>Z(),{onSuccess(){n&&n()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},N=()=>{const{formatMessage:n}=(0,r.Z)(),{notifyStatus:l}=(0,y.G)();(0,a.useFocusWhenNavigate)();const m=n({id:"global.plugins",defaultMessage:"Plugins"}),x=()=>{l(n({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:m}))},{status:E,data:f}=F(x);return E!=="success"&&E!=="error"?e.createElement(g.A,null,e.createElement(c.o,{"aria-busy":!0},e.createElement(a.LoadingIndicatorPage,null))):e.createElement(g.A,null,e.createElement(c.o,null,e.createElement(T.T,{title:m,subtitle:n({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(p.D,null,e.createElement(C.i,{colCount:2,rowCount:f?.plugins?.length??0+1},e.createElement(M.h,null,e.createElement(d.Tr,null,e.createElement(s.Th,null,e.createElement(o.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(s.Th,null,e.createElement(o.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"description"}))))),e.createElement(L.p,null,f.plugins.map(({name:i,displayName:S,description:H})=>e.createElement(d.Tr,{key:i},e.createElement(s.Td,null,e.createElement(o.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},n({id:`global.plugins.${i}`,defaultMessage:S}))),e.createElement(s.Td,null,e.createElement(o.Z,{textColor:"neutral800"},n({id:`global.plugins.${i}.description`,defaultMessage:H}))))))))))},A=()=>{const{formatMessage:n}=(0,r.Z)(),l=(0,h.useSelector)(v._);return e.createElement(a.CheckPagePermissions,{permissions:l.marketplace.main},e.createElement(P.q,{title:n({id:"global.plugins",defaultMessage:"Plugins"})}),e.createElement(N,null))}}}]);
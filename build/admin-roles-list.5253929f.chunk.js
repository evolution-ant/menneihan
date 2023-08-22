"use strict";(self.webpackChunkmynote=self.webpackChunkmynote||[]).push([[3455],{98906:(fe,Z,t)=>{t.r(Z),t.d(Z,{default:()=>me});var e=t(53547),o=t(67281),S=t(86706),B=t(99369),I=t(185),W=t(53979),V=t(29728),j=t(36989),z=t(49066),H=t(38939),Q=t(49386),$=t(8060),N=t(79031),C=t(37909),D=t(75515),k=t(63237),G=t(15234),J=t(65186),K=t(4585),X=t(20022),b=t(96315),Y=t(27361),w=t.n(Y),O=t(86896),q=t(16550),_=t(35650);const ee=()=>"todo empty role";var te=t(11047),le=t(41580),ne=t(12028),se=t(45697),T=t.n(se);const A=({id:n,name:c,description:l,usersCount:E,icons:d,rowIndex:a,canUpdate:v})=>{const{formatMessage:f}=(0,O.Z)(),[,r]=d,h=f({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:E});return e.createElement(N.Tr,{"aria-rowindex":a,key:n,...v?(0,o.onRowClick)({fn:r.onClick}):{}},e.createElement(C.Td,{maxWidth:(0,o.pxToRem)(130)},e.createElement(D.Z,{ellipsis:!0,textColor:"neutral800"},c)),e.createElement(C.Td,{maxWidth:(0,o.pxToRem)(250)},e.createElement(D.Z,{ellipsis:!0,textColor:"neutral800"},l)),e.createElement(C.Td,null,e.createElement(D.Z,{textColor:"neutral800"},h)),e.createElement(C.Td,null,e.createElement(te.k,{justifyContent:"flex-end",...o.stopPropagation},d.map((u,p)=>u?e.createElement(le.x,{key:u.label,paddingLeft:p===0?0:1},e.createElement(ne.h,{onClick:u.onClick,label:u.label,noBorder:!0,icon:u.icon})):null))))};A.propTypes={id:T().number.isRequired,name:T().string.isRequired,description:T().string.isRequired,usersCount:T().number.isRequired,icons:T().array.isRequired,rowIndex:T().number.isRequired,canUpdate:T().bool},A.defaultProps={canUpdate:!1};const oe=A;var ae=t(18172);const re={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ie=(n,c)=>(0,ae.default)(n,l=>{switch(c.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=c.id;break}default:return l}}),ce=()=>{(0,o.useFocusWhenNavigate)();const{locale:n}=(0,O.Z)(),c=(0,S.useSelector)(B._),{isLoading:l,allowedActions:{canCreate:E,canDelete:d,canRead:a,canUpdate:v}}=(0,o.useRBAC)(c.settings.roles),{getData:f,roles:r,isLoading:h}=(0,_.bF)(!1),[{query:u}]=(0,o.useQueryParams)(),p=u?._q||"",{includes:R}=(0,o.useFilter)(n,{sensitivity:"base"}),y=(0,o.useCollator)(n,{sensitivity:"base"}),M=(r||[]).filter(m=>R(m.name,p)||R(m.description,p)).sort((m,L)=>y.compare(m.name,L.name)||y.compare(m.description,L.description));return(0,e.useEffect)(()=>{!l&&a&&f()},[l,a,f]),{isLoadingForPermissions:l,canCreate:E,canDelete:d,canRead:a,canUpdate:v,isLoading:h,getData:f,sortedRoles:M,roles:r}},de=({getData:n,canCreate:c,canDelete:l,canUpdate:E})=>{const{formatMessage:d}=(0,O.Z)(),a=(0,o.useNotification)(),[v,f]=(0,e.useState)(!1),{push:r}=(0,q.k6)(),[{selectedRoles:h,showModalConfirmButtonLoading:u,roleToDelete:p},R]=(0,e.useReducer)(ie,re),{post:y}=(0,o.getFetchClient)(),M=async()=>{try{R({type:"ON_REMOVE_ROLES"}),await y("/admin/roles/batch-delete",{ids:[p]}),await n(),R({type:"RESET_DATA_TO_DELETE"})}catch(s){const i=w()(s,["response","payload","data","ids"],null);if(i&&Array.isArray(i)){const Ee=i.join(`
`);a({type:"warning",message:Ee})}else a({type:"warning",message:{id:"notification.error"}})}g()},m=(0,e.useCallback)(s=>{r(`/settings/roles/duplicate/${s}`)},[r]),L=()=>r("/settings/roles/new"),P=(0,e.useCallback)(s=>{R({type:"SET_ROLE_TO_DELETE",id:s}),g()},[]),g=()=>f(s=>!s),x=(0,e.useCallback)(s=>{r(`/settings/roles/${s}`)},[r]),F=(0,e.useCallback)((s,i)=>{s.preventDefault(),s.stopPropagation(),i.usersCount?a({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):P(i.id)},[a,P]),U=(0,e.useCallback)((s,i)=>{s.preventDefault(),s.stopPropagation(),m(i.id)},[m]),ge=(0,e.useCallback)(s=>[...c?[{onClick:i=>U(i,s),label:d({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(J.Z,null)}]:[],...E?[{onClick:()=>x(s.id),label:d({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(K.Z,null)}]:[],...l?[{onClick:i=>F(i,s),label:d({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(X.Z,null)}]:[]],[d,F,U,x,c,E,l]);return{handleNewRoleClick:L,getIcons:ge,selectedRoles:h,isWarningDeleteAllOpened:v,showModalConfirmButtonLoading:u,handleToggleModal:g,handleDeleteData:M}},ue=()=>{const{formatMessage:n}=(0,O.Z)(),{isLoadingForPermissions:c,canCreate:l,canRead:E,canDelete:d,canUpdate:a,isLoading:v,getData:f,sortedRoles:r}=ce(),{handleNewRoleClick:h,getIcons:u,isWarningDeleteAllOpened:p,showModalConfirmButtonLoading:R,handleToggleModal:y,handleDeleteData:M}=de({getData:f,canCreate:l,canDelete:d,canUpdate:a}),m=r.length+1,L=6;if(c)return e.createElement(I.o,null,e.createElement(o.LoadingIndicatorPage,null));const P=n({id:"global.roles",defaultMessage:"roles"});return e.createElement(I.o,null,e.createElement(o.SettingsPageTitle,{name:"Roles"}),e.createElement(W.T,{primaryAction:l?e.createElement(V.z,{onClick:h,startIcon:e.createElement(b.default,null),size:"S"},n({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:P,subtitle:n({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),E&&e.createElement(j.Z,{startActions:e.createElement(o.SearchURLQuery,{label:n({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:P})})}),E&&e.createElement(z.D,null,e.createElement(H.i,{colCount:L,rowCount:m,footer:l?e.createElement(Q.c,{onClick:h,icon:e.createElement(b.default,null)},n({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement($.h,null,e.createElement(N.Tr,{"aria-rowindex":1},e.createElement(C.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(C.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"Description"}))),e.createElement(C.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.users",defaultMessage:"Users"}))),e.createElement(C.Th,null,e.createElement(k.T,null,n({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(G.p,null,r?.map((g,x)=>e.createElement(oe,{key:g.id,id:g.id,name:g.name,description:g.description,usersCount:g.usersCount,icons:u(g),rowIndex:x+2,canUpdate:a})))),!m&&!v&&e.createElement(ee,null)),e.createElement(o.ConfirmDialog,{isOpen:p,onConfirm:M,isConfirmButtonLoading:R,onToggleDialog:y}))},me=()=>{const n=(0,S.useSelector)(B._);return e.createElement(o.CheckPagePermissions,{permissions:n.settings.roles.main},e.createElement(ue,null))}}}]);
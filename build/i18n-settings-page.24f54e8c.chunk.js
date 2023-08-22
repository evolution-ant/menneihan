"use strict";(self.webpackChunkmynote=self.webpackChunkmynote||[]).push([[3552],{72751:(le,O,t)=>{t.r(O),t.d(O,{default:()=>je});var e=t(53547),u=t(67281),ne=t(45697),c=t.n(ne),v=t(86896),se=t(185),oe=t(53979),L=t(29728),ie=t(49066),ce=t(89722),I=t(96315),de=t(86031),z=t(8181),s=t(57813),C=t(94649),V=t(85018),W=t(42866),j=t(24969),E=t(75515),U=t(59946),G=t(82777),F=t(11047),S=t(77296),H=t(70004),Q=t(41580),M=t(42761),X=t(36856),x=t(87561);const $=(0,x.object)().shape({code:(0,x.string)().required(),displayName:(0,x.string)().max(50,"Settings.locales.modal.locales.displayName.error").required(u.translatedErrors.required)});var A=t(86706),N=t(7982);const re=()=>{const[l,n]=(0,e.useState)(!1),o=(0,A.useDispatch)(),a=(0,u.useNotification)(),{put:i}=(0,u.useFetchClient)();return{isEditing:l,editLocale:async(r,m)=>{try{n(!0);const{data:g}=await i(`/i18n/locales/${r}`,m);a({type:"success",message:{id:(0,s.O)("Settings.locales.modal.edit.success")}}),o({type:N.OT,editedLocale:g})}catch{a({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}};var K=t(11276),T=t(67819),me=t(40619),ue=t(82562),J=t(16364),ge=t(88767),fe=t(14087);const Y=()=>{const{formatMessage:l}=(0,v.Z)(),{notifyStatus:n}=(0,fe.G)(),o=(0,u.useNotification)(),{get:a}=(0,u.useFetchClient)(),{isLoading:i,data:d}=(0,ge.useQuery)(["plugin-i18n","locales"],async()=>{try{const{data:r}=await a("/i18n/iso-locales");return n(l({id:(0,s.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),r}catch{return o({type:"warning",message:{id:"notification.error"}}),[]}});return{defaultLocales:d,isLoading:i}},k=({locale:l})=>{const{formatMessage:n}=(0,v.Z)(),{values:o,handleChange:a,errors:i}=(0,C.useFormikContext)(),{defaultLocales:d,isLoading:r}=Y(),m=!r&&d.find(g=>g.code===l.code);return e.createElement(K.r,{gap:4},e.createElement(T.P,{col:6},e.createElement(me.P,{label:n({id:(0,s.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:m?.code||l.code,disabled:!0},e.createElement(ue.W,{value:m?.code||l.code},m?.name||l.code))),e.createElement(T.P,{col:6},e.createElement(J.o,{name:"displayName",label:n({id:(0,s.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,s.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:i.displayName?n({id:(0,s.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:o.displayName,onChange:a})))},ve=k;k.propTypes={locale:c().shape({id:c().number.isRequired,name:c().string.isRequired,code:c().string.isRequired,isDefault:c().bool.isRequired}).isRequired};var w=t(36213);const q=({isDefaultLocale:l})=>{const{values:n,setFieldValue:o}=(0,C.useFormikContext)(),{formatMessage:a}=(0,v.Z)();return e.createElement(w.X,{name:"isDefault",hint:a({id:(0,s.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>o("isDefault",!n.isDefault),value:n.isDefault,disabled:l},a({id:(0,s.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};q.propTypes={isDefaultLocale:c().bool.isRequired};const Ee=q,P=({locale:l,onClose:n})=>{const{refetchPermissions:o}=(0,u.useRBACProvider)(),{isEditing:a,editLocale:i}=re(),{formatMessage:d}=(0,v.Z)(),r=async({displayName:m,isDefault:g})=>{await i(l.id,{name:m,isDefault:g}),await o()};return e.createElement(W.P,{onClose:n,labelledBy:"edit-locale-title"},e.createElement(C.Formik,{initialValues:{code:l?.code,displayName:l?.name||"",isDefault:Boolean(l?.isDefault)},onSubmit:r,validationSchema:$},e.createElement(u.Form,null,e.createElement(j.x,null,e.createElement(E.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},d({id:(0,s.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(U.f,null,e.createElement(G.v,{label:d({id:(0,s.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(F.k,{justifyContent:"space-between"},e.createElement(E.Z,{as:"h2"},d({id:(0,s.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(S.m,null,e.createElement(S.O,null,d({id:(0,s.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(S.O,null,d({id:(0,s.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(H.i,null),e.createElement(Q.x,{paddingTop:7,paddingBottom:7},e.createElement(M.n,null,e.createElement(M.x,null,e.createElement(ve,{locale:l})),e.createElement(M.x,null,e.createElement(Ee,{isDefaultLocale:Boolean(l&&l.isDefault)})))))),e.createElement(X.m,{startActions:e.createElement(L.z,{variant:"tertiary",onClick:n},d({id:"app.components.Button.cancel"})),endActions:e.createElement(L.z,{type:"submit",startIcon:e.createElement(V.default,null),disabled:a},d({id:"global.save"}))}))))};P.defaultProps={locale:void 0},P.propTypes={locale:c().shape({id:c().number.isRequired,name:c().string.isRequired,code:c().string.isRequired,isDefault:c().bool.isRequired}),onClose:c().func.isRequired};const pe=P,he=()=>{const[l,n]=(0,e.useState)(!1),o=(0,A.useDispatch)(),a=(0,u.useNotification)(),{del:i}=(0,u.useFetchClient)();return{isDeleting:l,deleteLocale:async r=>{try{n(!0),await i(`/i18n/locales/${r}`),a({type:"success",message:{id:(0,s.O)("Settings.locales.modal.delete.success")}}),o({type:N.HC,id:r})}catch{a({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}},B=({localeToDelete:l,onClose:n})=>{const{isDeleting:o,deleteLocale:a}=he(),i=Boolean(l),d=()=>a(l.id).then(n);return e.createElement(u.ConfirmDialog,{isConfirmButtonLoading:o,onConfirm:d,onToggleDialog:n,isOpen:i})};B.defaultProps={localeToDelete:void 0},B.propTypes={localeToDelete:c().shape({id:c().number.isRequired}),onClose:c().func.isRequired};const ye=B;var Le=t(27361),Ce=t.n(Le);const Se=()=>{const[l,n]=(0,e.useState)(!1),o=(0,A.useDispatch)(),a=(0,u.useNotification)(),{post:i}=(0,u.useFetchClient)();return{isAdding:l,addLocale:async r=>{n(!0);try{const{data:m}=await i("/i18n/locales",r);a({type:"success",message:{id:(0,s.O)("Settings.locales.modal.create.success")}}),o({type:N.xz,newLocale:m})}catch(m){const g=Ce()(m,"response.payload.message",null);throw g&&g.includes("already exists")?a({type:"warning",message:{id:(0,s.O)("Settings.locales.modal.create.alreadyExist")}}):a({type:"warning",message:{id:"notification.error"}}),m}finally{n(!1)}}}};var Me=t(29178),De=t(90608);const R=e.memo(({value:l,onClear:n,onLocaleChange:o,error:a})=>{const{formatMessage:i}=(0,v.Z)(),{defaultLocales:d,isLoading:r}=Y(),{locales:m}=(0,z.Z)(),g=(d||[]).map(f=>({label:f.name,value:f.code})).filter(({value:f})=>{const h=m.find(({code:D})=>D===f);return!h||h.code===l}),y=l||"";return e.createElement(Me.hQ,{"aria-busy":r,error:a,label:i({id:(0,s.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:y,onClear:l?n:void 0,onChange:f=>{const h=g.find(D=>D.value===f);h&&o({code:h.value,displayName:h.label})},placeholder:i({id:"components.placeholder.select",defaultMessage:"Select"})},g.map(f=>e.createElement(De.O,{value:f.value,key:f.value},f.label)))});R.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},R.propTypes={error:c().string,onClear:c().func,onLocaleChange:c().func,value:c().string};const Oe=R,Te=()=>{const{formatMessage:l}=(0,v.Z)(),{values:n,handleChange:o,setFieldValue:a,errors:i}=(0,C.useFormikContext)(),d=(0,e.useCallback)(m=>{a("displayName",m.displayName),a("code",m.code)},[a]),r=(0,e.useCallback)(()=>{a("displayName",""),a("code","")},[a]);return e.createElement(K.r,{gap:4},e.createElement(T.P,{col:6},e.createElement(Oe,{error:i.code,value:n.code,onLocaleChange:d,onClear:r})),e.createElement(T.P,{col:6},e.createElement(J.o,{name:"displayName",label:l({id:(0,s.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:l({id:(0,s.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:i.displayName?l({id:(0,s.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:n.displayName,onChange:o})))},Fe=()=>{const{values:l,setFieldValue:n}=(0,C.useFormikContext)(),{formatMessage:o}=(0,v.Z)();return e.createElement(w.X,{hint:o({id:(0,s.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>n("isDefault",!l.isDefault),value:l.isDefault},o({id:(0,s.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))},xe={code:"",displayName:"",isDefault:!1},_=({onClose:l})=>{const{isAdding:n,addLocale:o}=Se(),{formatMessage:a}=(0,v.Z)(),{refetchPermissions:i}=(0,u.useRBACProvider)(),d=async r=>{await o({code:r.code,name:r.displayName,isDefault:r.isDefault}),await i()};return e.createElement(W.P,{onClose:l,labelledBy:"add-locale-title"},e.createElement(C.Formik,{initialValues:xe,onSubmit:d,validationSchema:$,validateOnChange:!1},e.createElement(u.Form,null,e.createElement(j.x,null,e.createElement(E.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},a({id:(0,s.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(U.f,null,e.createElement(G.v,{label:a({id:(0,s.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(F.k,{justifyContent:"space-between"},e.createElement(E.Z,{as:"h2",variant:"beta"},a({id:(0,s.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(S.m,null,e.createElement(S.O,null,a({id:(0,s.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(S.O,null,a({id:(0,s.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(H.i,null),e.createElement(Q.x,{paddingTop:7,paddingBottom:7},e.createElement(M.n,null,e.createElement(M.x,null,e.createElement(Te,null)),e.createElement(M.x,null,e.createElement(Fe,null)))))),e.createElement(X.m,{startActions:e.createElement(L.z,{variant:"tertiary",onClick:l},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(L.z,{type:"submit",startIcon:e.createElement(V.default,null),disabled:n},a({id:"global.save",defaultMessage:"Save"}))}))))};_.propTypes={onClose:c().func.isRequired};const Ae=_;var Ne=t(38939),Pe=t(8060),ee=t(79031),p=t(37909),Be=t(63237),Re=t(15234),te=t(12028),be=t(4585),Ze=t(20022);const b=({locales:l,onDeleteLocale:n,onEditLocale:o})=>{const{formatMessage:a}=(0,v.Z)();return e.createElement(Ne.i,{colCount:4,rowCount:l.length+1},e.createElement(Pe.h,null,e.createElement(ee.Tr,null,e.createElement(p.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},a({id:(0,s.O)("Settings.locales.row.id")}))),e.createElement(p.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},a({id:(0,s.O)("Settings.locales.row.displayName")}))),e.createElement(p.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},a({id:(0,s.O)("Settings.locales.row.default-locale")}))),e.createElement(p.Th,null,e.createElement(Be.T,null,"Actions")))),e.createElement(Re.p,null,l.map(i=>e.createElement(ee.Tr,{key:i.id,...(0,u.onRowClick)({fn:()=>o(i),condition:o})},e.createElement(p.Td,null,e.createElement(E.Z,{textColor:"neutral800"},i.id)),e.createElement(p.Td,null,e.createElement(E.Z,{textColor:"neutral800"},i.name)),e.createElement(p.Td,null,e.createElement(E.Z,{textColor:"neutral800"},i.isDefault?a({id:(0,s.O)("Settings.locales.default")}):null)),e.createElement(p.Td,null,e.createElement(F.k,{gap:1,justifyContent:"flex-end",...u.stopPropagation},o&&e.createElement(te.h,{onClick:()=>o(i),label:a({id:(0,s.O)("Settings.list.actions.edit")}),icon:e.createElement(be.Z,null),noBorder:!0}),n&&!i.isDefault&&e.createElement(te.h,{onClick:()=>n(i),label:a({id:(0,s.O)("Settings.list.actions.delete")}),icon:e.createElement(Ze.Z,null),noBorder:!0})))))))};b.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},b.propTypes={locales:c().array,onDeleteLocale:c().func,onEditLocale:c().func};const Ie=b,Z=({canUpdateLocale:l,canDeleteLocale:n,onToggleCreateModal:o,isCreating:a})=>{const[i,d]=(0,e.useState)(),[r,m]=(0,e.useState)(),{locales:g}=(0,z.Z)(),{formatMessage:y}=(0,v.Z)();(0,u.useFocusWhenNavigate)();const f=()=>d(void 0),h=n?d:void 0,D=()=>m(void 0),Ue=l?m:void 0;return e.createElement(se.o,{tabIndex:-1},e.createElement(oe.T,{primaryAction:e.createElement(L.z,{startIcon:e.createElement(I.default,null),onClick:o,size:"S"},y({id:(0,s.O)("Settings.list.actions.add")})),title:y({id:(0,s.O)("plugin.name")}),subtitle:y({id:(0,s.O)("Settings.list.description")})}),e.createElement(ie.D,null,g?.length>0?e.createElement(Ie,{locales:g,onDeleteLocale:h,onEditLocale:Ue}):e.createElement(ce.x,{icon:e.createElement(de.default,{width:void 0,height:void 0}),content:y({id:(0,s.O)("Settings.list.empty.title")}),action:o?e.createElement(L.z,{variant:"secondary",startIcon:e.createElement(I.default,null),onClick:o},y({id:(0,s.O)("Settings.list.actions.add")})):null})),a&&e.createElement(Ae,{onClose:o}),r&&e.createElement(pe,{onClose:D,locale:r}),e.createElement(ye,{localeToDelete:i,onClose:f}))};Z.defaultProps={onToggleCreateModal:void 0},Z.propTypes={canUpdateLocale:c().bool.isRequired,canDeleteLocale:c().bool.isRequired,onToggleCreateModal:c().func,isCreating:c().bool.isRequired};const ze=Z,ae=({canReadLocale:l,canCreateLocale:n,canDeleteLocale:o,canUpdateLocale:a})=>{const[i,d]=(0,e.useState)(!1),r=n?()=>d(m=>!m):void 0;return l?e.createElement(ze,{canUpdateLocale:a,canDeleteLocale:o,onToggleCreateModal:r,isCreating:i}):null};ae.propTypes={canReadLocale:c().bool.isRequired,canCreateLocale:c().bool.isRequired,canUpdateLocale:c().bool.isRequired,canDeleteLocale:c().bool.isRequired};const Ve=ae;var We=t(2135);const je=()=>{const{isLoading:l,allowedActions:{canRead:n,canUpdate:o,canCreate:a,canDelete:i}}=(0,u.useRBAC)(We.Z);return l?null:e.createElement(Ve,{canReadLocale:n,canCreateLocale:a,canUpdateLocale:o,canDeleteLocale:i})}},90608:(le,O,t)=>{t.d(O,{O:()=>u});var e=t(29178);const u=e.Wx}}]);

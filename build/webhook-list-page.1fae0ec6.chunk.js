"use strict";(self.webpackChunkmynote=self.webpackChunkmynote||[]).push([[4121],{59657:(Me,$,t)=>{t.r($),t.d($,{default:()=>ce});var e=t(53547),l=t(67281),P=t(86706),D=t(99369),G=t(14087),Q=t(17034),Y=t(185),K=t(53979),X=t(36989),c=t(75515),A=t(29728),J=t(49066),B=t(41580),q=t(38939),_=t(49386),ee=t(8060),W=t(79031),i=t(37909),Z=t(92155),te=t(63237),ae=t(15234),L=t(11047),u=t(85893),V=t(54863);const y=V.default.div`
  background: ${({theme:s})=>s.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:s})=>s?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:s})=>s.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:s})=>s.spaces[1]};
    top: ${({theme:s})=>s.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ne=V.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${y} {
    background: ${({theme:s})=>s.colors.success500};
  }

  &[aria-checked='true'] ${y}:before {
    transform: translateX(1rem);
  }
`,se=e.forwardRef(({label:s,onChange:d,onLabel:m="On",offLabel:r="Off",selected:E,visibleLabels:n=!1,...g},h)=>(0,u.jsx)(ne,{ref:h,role:"switch","aria-checked":E,"aria-label":s,onClick:d,visibleLabels:n,type:"button",...g,children:(0,u.jsxs)(L.k,{children:[(0,u.jsxs)(y,{children:[(0,u.jsx)("span",{children:m}),(0,u.jsx)("span",{children:r})]}),n&&(0,u.jsx)(B.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:E?"success600":"danger600",children:E?m:r})]})}));var I=t(12028),oe=t(89722),S=t(96315),j=t(20022),le=t(4585),ie=t(86031),re=t(86896),T=t(88767),R=t(16550);const de=()=>{const[s,d]=(0,e.useState)(!1),[m,r]=(0,e.useState)([]),E=(0,P.useSelector)(D._),{formatMessage:n}=(0,re.Z)(),{formatAPIError:g}=(0,l.useAPIErrorHandler)(),h=(0,l.useNotification)();(0,l.useFocusWhenNavigate)();const{push:ue}=(0,R.k6)(),{pathname:N}=(0,R.TH)(),{isLoading:me,allowedActions:{canCreate:M,canUpdate:O,canDelete:z}}=(0,l.useRBAC)(E.settings.webhooks),{get:ge,post:he,put:fe}=(0,l.useFetchClient)(),{notifyStatus:F}=(0,G.G)(),Ee="webhooks",{isLoading:be,data:f,error:k,refetch:H}=(0,T.useQuery)(Ee,async()=>{const{data:{data:a}}=await ge("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(k){h({type:"warning",message:g(k)});return}f&&F(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[f,k,h,n,F,g]);const U=(0,T.useMutation)(async()=>{await he("/admin/webhooks/batch-delete",{ids:m})},{onError(a){h({type:"warning",message:g(a)}),d(!1)},onSuccess(){r([]),d(!1),H()}}),ve=(0,T.useMutation)(async({isEnabled:a,id:o})=>{const{id:C,...w}=f.find(Te=>Te.id===o)??{},Se={...w,isEnabled:a};await fe(`/admin/webhooks/${o}`,Se)},{onError(a){h({type:"warning",message:g(a)})},onSuccess(){H()}}),Ce=()=>U.mutate(),Le=a=>r(a?f.map(o=>o.id):[]),ye=(a,o)=>r(a?C=>[...C,o]:C=>C.filter(w=>w!==o)),x=a=>ue(`${N}/${a}`),p=me||be,v=f?.length??0,b=m.length;return e.createElement(Q.A,null,e.createElement(l.SettingsPageTitle,{name:"Webhooks"}),e.createElement(Y.o,{"aria-busy":p},e.createElement(K.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:M&&!p&&e.createElement(l.LinkButton,{startIcon:e.createElement(S.default,null),variant:"default",to:`${N}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),b>0&&z&&e.createElement(X.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(c.Z,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:b})),e.createElement(A.z,{onClick:()=>d(!0),startIcon:e.createElement(j.Z,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(J.D,null,p?e.createElement(B.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(l.LoadingIndicatorPage,null)):v>0?e.createElement(q.i,{colCount:5,rowCount:v+1,footer:e.createElement(_.c,{onClick:()=>M?x("create"):{},icon:e.createElement(S.default,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(ee.h,null,e.createElement(W.Tr,null,e.createElement(i.Th,null,e.createElement(Z.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:b>0&&b<v,value:b===v,onValueChange:Le})),e.createElement(i.Th,{width:"20%"},e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(te.T,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,f.map(a=>e.createElement(W.Tr,{key:a.id,...(0,l.onRowClick)({fn:()=>x(a.id),condition:O})},e.createElement(i.Td,{...l.stopPropagation},e.createElement(Z.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:m?.includes(a.id),onValueChange:o=>ye(o,a.id),name:"select"})),e.createElement(i.Td,null,e.createElement(c.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(i.Td,null,e.createElement(c.Z,{textColor:"neutral800"},a.url)),e.createElement(i.Td,null,e.createElement(L.k,null,e.createElement(se,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:o=>{o.stopPropagation(),ve.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(L.k,{gap:1},O&&e.createElement(I.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(le.Z,null),noBorder:!0}),z&&e.createElement(I.h,{onClick:o=>{o.stopPropagation(),r([a.id]),d(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(j.Z,null),noBorder:!0}))))))):e.createElement(oe.x,{icon:e.createElement(ie.default,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(A.z,{variant:"secondary",startIcon:e.createElement(S.default,null),onClick:()=>M?x("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(l.ConfirmDialog,{isOpen:s,onToggleDialog:()=>d(a=>!a),onConfirm:Ce,isConfirmButtonLoading:U.isLoading}))},ce=()=>{const s=(0,P.useSelector)(D._);return e.createElement(l.CheckPagePermissions,{permissions:s.settings.webhooks.main},e.createElement(de,null))}}}]);

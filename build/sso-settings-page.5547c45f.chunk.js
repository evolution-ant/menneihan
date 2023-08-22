"use strict";(self.webpackChunkmynote=self.webpackChunkmynote||[]).push([[302],{40316:(Q,m,e)=>{e.r(m),e.d(m,{SingleSignOn:()=>R,default:()=>z});var t=e(53547),p=e(17034),M=e(185),y=e(53979),C=e(29728),O=e(49066),I=e(11047),P=e(75515),b=e(11276),u=e(67819),A=e(20707),T=e(40619),x=e(82562),f=e(67730),o=e(67281),D=e(85018),F=e(18446),B=e.n(F),k=e(86896),h=e(86706),S=e(35650),v=e(99369),G=e(19631),r=e(87561);const H=r.object().shape({autoRegister:r.bool().required(o.translatedErrors.required),defaultRole:r.mixed().when("autoRegister",(a,l)=>a?l.required(o.translatedErrors.required):l.nullable()),ssoLockedRoles:r.array().of(r.mixed().when("ssoLockedRoles",(a,l)=>a?l.required(o.translatedErrors.required):l.nullable()))}),R=()=>{const{formatMessage:a}=(0,k.Z)(),l=(0,h.useSelector)(v._),{isLoading:N,allowedActions:{canUpdate:c,canReadRoles:U}}=(0,o.useRBAC)({...l.settings.sso,readRoles:l.settings.roles.read}),[{formErrors:n,initialData:W,isLoading:Z,modifiedData:i,showHeaderButtonLoader:j},Y,{handleChange:d,handleSubmit:J}]=(0,S.G4)((0,G.IF)("providers/options"),H,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:E}=(0,S.bF)(U);(0,o.useFocusWhenNavigate)();const K=N||Z;(0,t.useEffect)(()=>{if(n.defaultRole){const s='[name="defaultRole"]';document.querySelector(s).focus()}},[n]);const L=B()(W,i);return t.createElement(p.A,null,t.createElement(o.SettingsPageTitle,{name:"SSO"}),t.createElement(M.o,{tabIndex:-1},t.createElement("form",{onSubmit:s=>{if(L){s.preventDefault();return}J(s)}},t.createElement(y.T,{primaryAction:t.createElement(C.z,{"data-testid":"save-button",disabled:L,loading:j,startIcon:t.createElement(D.default,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(O.D,null,K?t.createElement(o.LoadingIndicatorPage,null):t.createElement(I.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(P.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(b.r,{gap:4},t.createElement(u.P,{col:6,m:6,s:12},t.createElement(A.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!c,checked:i.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{d({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(u.P,{col:6,m:6,s:12},t.createElement(T.P,{disabled:!c,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:n.defaultRole?a({id:n.defaultRole.id,defaultMessage:n.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{d({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:i.defaultRole},E.map(({id:s,name:g})=>t.createElement(x.W,{key:s,value:s.toString()},g)))),t.createElement(u.P,{col:6,m:6,s:12},t.createElement(f.NU,{disabled:!c,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:n.ssoLockedRoles?a({id:n.ssoLockedRoles.id,defaultMessage:n.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{d({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{d({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:i.ssoLockedRoles||[],withTags:!0},E.map(({id:s,name:g})=>t.createElement(f.ML,{key:s,value:s.toString()},g))))))))))},z=()=>{const a=(0,h.useSelector)(v._);return t.createElement(o.CheckPagePermissions,{permissions:a.settings.sso.main},t.createElement(R,null))}}}]);

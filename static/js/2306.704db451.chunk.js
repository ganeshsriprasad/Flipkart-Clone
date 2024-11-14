"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2306],{3138:function(e,t,a){var r=a(5281),n=a(6417);t.Z=function(){return(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)(r.Z,{})})}},2306:function(e,t,a){a.r(t);var r=a(9439),n=a(7230),i=a(7313),o=a(6352),s=a(8467),l=a(2135),c=a(2042),d=a(7655),u=a(3138),m=a(8119),p=a(3929),v=a(7903),f=a(4268),g=a(5685),x=a(6783),h=a(4675),b=a(1674),Z=a(6417);t.default=function(){var e=(0,o.I0)(),t=(0,n.Ds)().enqueueSnackbar,a=(0,s.UO)(),y=(0,s.s0)(),j=(0,o.v9)((function(e){return e.userDetails})),w=j.user,C=j.error,N=j.loading,k=(0,o.v9)((function(e){return e.profile})),I=k.isUpdated,F=k.error,O=k.loading;console.log(N,w,C,I);var S=(0,i.useState)(""),M=(0,r.Z)(S,2),q=M[0],U=M[1],V=(0,i.useState)(""),G=(0,r.Z)(V,2),D=G[0],R=G[1],L=(0,i.useState)(""),A=(0,r.Z)(L,2),B=A[0],P=A[1],T=(0,i.useState)(""),W=(0,r.Z)(T,2),z=W[0],E=W[1],H=(0,i.useState)(""),_=(0,r.Z)(H,2),Y=_[0],J=(_[1],a.id);return console.log(w),(0,i.useEffect)((function(){w&&w._id!==J?e((0,c.M_)(J)):(U(w.name),R(w.email),P(w.gender),E(w.role)),C&&(t(C,{variant:"error"}),console.log("error"),e((0,c.b9)())),F&&(t(F,{variant:"error"}),console.log("updateError"),e((0,c.b9)())),I&&(console.log("idUpadated"),t("User Updates Successfully",{variant:"success"}),e({type:d.u6}),e({type:d.iz}),y("/admin/users"))}),[e,C,J,w,y,I,F,t]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h.Z,{title:"Admin: Update User | Flipkart"}),O&&(0,Z.jsx)(b.Z,{}),N&&!w?(0,Z.jsx)(u.Z,{}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:"flex flex-col bg-white shadow-lg rounded-lg mx-auto w-lg max-w-xl",children:[(0,Z.jsx)("h2",{className:"text-center text-2xl font-medium mt-6 text-gray-800",children:"Update Profile"}),(0,Z.jsx)("form",{onSubmit:function(t){t.preventDefault();var a=new FormData;a.set("name",q),a.set("email",D),a.set("gender",B),a.set("role",z),e((0,c.Nq)(J,a))},className:"p-5 sm:p-10",children:(0,Z.jsxs)("div",{className:"flex flex-col gap-3 items-start",children:[(0,Z.jsxs)("div",{className:"flex flex-col w-full justify-between sm:flex-col gap-3 items-center",children:[(0,Z.jsx)(x.Z,{fullWidth:!0,label:"Full Name",name:"name",value:q,onChange:function(e){return U(e.target.value)},required:!0}),(0,Z.jsx)(x.Z,{fullWidth:!0,label:"Email",type:"email",name:"email",value:D,onChange:function(e){return R(e.target.value)},required:!0})]}),(0,Z.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,Z.jsx)("h2",{className:"text-md",children:"Your Gender :"}),(0,Z.jsx)("div",{className:"flex items-center gap-6",id:"radioInput",children:(0,Z.jsxs)(g.Z,{row:!0,"aria-labelledby":"radio-buttons-group-label",name:"radio-buttons-group",children:[(0,Z.jsx)(p.Z,{name:"gender",value:"male",checked:"male"===B,onChange:function(e){return P(e.target.value)},control:(0,Z.jsx)(f.Z,{required:!0}),label:"Male"}),(0,Z.jsx)(p.Z,{name:"gender",value:"female",checked:"female"===B,onChange:function(e){return P(e.target.value)},control:(0,Z.jsx)(f.Z,{required:!0}),label:"Female"})]})})]}),(0,Z.jsxs)("div",{className:"flex flex-col w-full justify-between sm:flex-row gap-3 items-center",children:[(0,Z.jsx)(m.Z,{alt:"Avatar Preview",src:Y,sx:{width:56,height:56}}),(0,Z.jsxs)(x.Z,{label:"Role",select:!0,fullWidth:!0,variant:"outlined",required:!0,value:z,onChange:function(e){return E(e.target.value)},children:[(0,Z.jsx)(v.Z,{value:"user",children:"User"}),(0,Z.jsx)(v.Z,{value:"admin",children:"Admin"})]})]}),(0,Z.jsx)("button",{type:"submit",className:"text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium",children:"Update"}),(0,Z.jsx)(l.rU,{className:"hover:bg-gray-100 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium",to:"/admin/users",children:"Cancel"})]})})]})})]})}},1674:function(e,t,a){var r=a(1554),n=a(5281),i=a(6417);t.Z=function(){return(0,i.jsx)(r.Z,{sx:{color:"#fff",zIndex:1500},open:!0,children:(0,i.jsx)(n.Z,{color:"inherit"})})}},4675:function(e,t,a){var r=a(182),n=a(6417);t.Z=function(e){var t=e.title;return(0,n.jsx)(r.q,{children:(0,n.jsx)("title",{children:t})})}},7903:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(4942),n=a(3366),i=a(7462),o=a(7313),s=a(3061),l=a(1921),c=a(7551),d=a(7743),u=a(9394),m=a(1195),p=a(7999),v=a(4993),f=a(6983),g=a(7430);var x=(0,g.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=(0,g.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var b=(0,g.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Z=a(2298);function y(e){return(0,Z.Z)("MuiMenuItem",e)}var j=(0,g.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=a(6417),C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],N=(0,d.ZP)(p.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,i.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(t,"&.".concat(j.selected),(0,r.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,c.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(j.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,r.Z)(t,"&.".concat(j.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,r.Z)(t,"&.".concat(j.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,r.Z)(t,"& + .".concat(x.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),(0,r.Z)(t,"& + .".concat(x.inset),{marginLeft:52}),(0,r.Z)(t,"& .".concat(b.root),{marginTop:0,marginBottom:0}),(0,r.Z)(t,"& .".concat(b.inset),{paddingLeft:36}),(0,r.Z)(t,"& .".concat(h.root),{minWidth:36}),t),!n.dense&&(0,r.Z)({},a.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,(0,r.Z)({},"& .".concat(h.root," svg"),{fontSize:"1.25rem"})))})),k=o.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiMenuItem"}),r=a.autoFocus,c=void 0!==r&&r,d=a.component,p=void 0===d?"li":d,g=a.dense,x=void 0!==g&&g,h=a.divider,b=void 0!==h&&h,Z=a.disableGutters,j=void 0!==Z&&Z,k=a.focusVisibleClassName,I=a.role,F=void 0===I?"menuitem":I,O=a.tabIndex,S=a.className,M=(0,n.Z)(a,C),q=o.useContext(m.Z),U=o.useMemo((function(){return{dense:x||q.dense||!1,disableGutters:j}}),[q.dense,x,j]),V=o.useRef(null);(0,v.Z)((function(){c&&V.current&&V.current.focus()}),[c]);var G,D=(0,i.Z)({},a,{dense:U.dense,divider:b,disableGutters:j}),R=function(e){var t=e.disabled,a=e.dense,r=e.divider,n=e.disableGutters,o=e.selected,s=e.classes,c={root:["root",a&&"dense",t&&"disabled",!n&&"gutters",r&&"divider",o&&"selected"]},d=(0,l.Z)(c,y,s);return(0,i.Z)({},s,d)}(a),L=(0,f.Z)(V,t);return a.disabled||(G=void 0!==O?O:-1),(0,w.jsx)(m.Z.Provider,{value:U,children:(0,w.jsx)(N,(0,i.Z)({ref:L,role:F,tabIndex:G,component:p,focusVisibleClassName:(0,s.Z)(R.focusVisible,k),className:(0,s.Z)(R.root,S)},M,{ownerState:D,classes:R}))})}))}}]);
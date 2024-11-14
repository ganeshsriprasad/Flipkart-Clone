"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7396],{1674:function(e,s,t){var r=t(1554),a=t(5281),n=t(6417);s.Z=function(){return(0,n.jsx)(r.Z,{sx:{color:"#fff",zIndex:1500},open:!0,children:(0,n.jsx)(a.Z,{color:"inherit"})})}},4675:function(e,s,t){var r=t(182),a=t(6417);s.Z=function(e){var s=e.title;return(0,a.jsx)(r.q,{children:(0,a.jsx)("title",{children:s})})}},3487:function(e,s,t){var r=t(6417);s.Z=function(e){var s=e.title,t=e.tag;return(0,r.jsxs)("div",{className:"loginSidebar bg-primary-blue px-9 py-10 hidden sm:flex flex-col gap-4 w-2/5",children:[(0,r.jsx)("h1",{className:"font-medium text-white text-3xl",children:s}),(0,r.jsx)("p",{className:"text-gray-200 text-lg pr-2",children:t})]})}},7396:function(e,s,t){t.r(s);var r=t(9439),a=t(6783),n=t(7313),l=t(8467),i=t(2135),o=t(6352),c=t(2042),d=t(7230),u=t(1674),x=t(4675),f=t(3487),m=t(6417);s.default=function(){var e=(0,o.I0)(),s=(0,l.s0)(),t=(0,d.Ds)().enqueueSnackbar,h=(0,l.UO)(),p=(0,o.v9)((function(e){return e.forgotPassword})),w=p.error,g=p.success,v=p.loading,j=(0,n.useState)(""),y=(0,r.Z)(j,2),b=y[0],P=y[1],Z=(0,n.useState)(""),k=(0,r.Z)(Z,2),N=k[0],S=k[1];return(0,n.useEffect)((function(){w&&(t(w,{variant:"error"}),e((0,c.b9)())),g&&(t("Password Updated Successfully",{variant:"success"}),s("/login"))}),[e,w,g,s,t]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{title:"Password Reset | Flipkart"}),v&&(0,m.jsx)(u.Z,{}),(0,m.jsx)("main",{class:"w-full mt-12 sm:pt-20 sm:mt-0",children:(0,m.jsxs)("div",{class:"flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg",children:[(0,m.jsx)(f.Z,{title:"Reset Password",tag:"Get access to your Orders, Wishlist and Recommendations"}),(0,m.jsxs)("div",{class:"flex-1 overflow-hidden",children:[(0,m.jsx)("h2",{className:"text-center text-2xl font-medium mt-6 text-gray-800",children:"Reset Password"}),(0,m.jsxs)("div",{class:"text-center py-10 px-4 sm:px-14",children:[(0,m.jsx)("form",{onSubmit:function(s){if(s.preventDefault(),b.length<8)t("Password length must be atleast 8 characters",{variant:"warning"});else if(b===N){var r=new FormData;r.set("password",b),r.set("confirmPassword",N),e((0,c.c0)(h.token,r))}else t("Password Doesn't Match",{variant:"error"})},children:(0,m.jsxs)("div",{class:"flex flex-col w-full gap-4",children:[(0,m.jsx)(a.Z,{fullWidth:!0,label:"New Password",type:"password",name:"newPassword",value:b,onChange:function(e){return P(e.target.value)},required:!0}),(0,m.jsx)(a.Z,{fullWidth:!0,label:"Confirm New Password",type:"password",name:"confirmPassword",value:N,onChange:function(e){return S(e.target.value)},required:!0}),(0,m.jsxs)("div",{class:"flex flex-col gap-2.5 mt-2 mb-32",children:[(0,m.jsxs)("p",{class:"text-xs text-primary-grey text-left",children:["By continuing, you agree to Flipkart's ",(0,m.jsx)("a",{href:"https://www.flipkart.com/pages/terms",class:"text-primary-blue",children:" Terms of Use"})," and ",(0,m.jsx)("a",{href:"https://www.flipkart.com/pages/privacypolicy",class:"text-primary-blue",children:" Privacy Policy."})]}),(0,m.jsx)("button",{type:"submit",class:"text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium",children:"Submit"})]})]})}),(0,m.jsx)(i.rU,{to:"/register",class:"font-medium text-sm text-primary-blue",children:"New to Flipkart? Create an account"})]})]})]})})]})}}}]);
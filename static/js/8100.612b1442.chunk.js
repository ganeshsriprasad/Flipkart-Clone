(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8100],{4628:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(9439),s=r(6306),i=r(3714),c=r(6227),a=r(7983),o=r(7313),u=r(8467),l=r(6417),d=function(){var e=(0,o.useState)(""),t=(0,n.Z)(e,2),r=t[0],s=t[1],i=(0,u.s0)();return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim()?i("/products/".concat(r)):i("/products")},className:"w-2/3 sm:w-9/12 px-1 sm:px-4 py-1.5 flex  items-center shadow-md bg-white rounded-sm",children:[(0,l.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},className:"text-sm w-full flex-1 outline-none border-none placeholder-gray-500",type:"text",placeholder:"Search for products, brands and more"}),(0,l.jsx)("button",{type:"submit",className:"text-primary-blue relative ","aria-label":"Click me to submit the form",children:(0,l.jsx)(a.Z,{})})]})},f=r.p+"static/media/logo.3b0baaaf50ed860dcc7a.png",v=r(4281),h=r(930),p=r(4516),x=r(9109),m=r(1069),Z=r(5764),j=r(9006),b=r(841),g=r(9457),z=r(1905),w=r(1765),y=r(2135),S=r(6352),N=r(7230),C=r(2042),M=function(e){var t=e.setTogglePrimaryDropDown,r=e.user,n=(0,S.I0)(),s=(0,u.s0)(),i=(0,N.Ds)().enqueueSnackbar,c=(0,S.v9)((function(e){return e.wishlist})).wishlistItems,a=[{title:"Supercoin Zone",icon:(0,l.jsx)(h.Z,{sx:{fontSize:"18px"}}),redirect:"/"},{title:"Flipkart Plus Zone",icon:(0,l.jsx)(p.Z,{sx:{fontSize:"18px"}}),redirect:"/"},{title:"Orders",icon:(0,l.jsx)(x.Z,{sx:{fontSize:"18px"}}),redirect:"/orders"},{title:"Wishlist",icon:(0,l.jsx)(m.Z,{sx:{fontSize:"18px"}}),redirect:"/wishlist"},{title:"My Chats",icon:(0,l.jsx)(Z.Z,{sx:{fontSize:"18px"}}),redirect:"/"},{title:"Coupons",icon:(0,l.jsx)(j.Z,{sx:{fontSize:"18px"}}),redirect:"/"},{title:"Gift Cards",icon:(0,l.jsx)(b.Z,{sx:{fontSize:"18px"}}),redirect:"/"},{title:"Notifications",icon:(0,l.jsx)(g.Z,{sx:{fontSize:"18px"}}),redirect:"/"}];return(0,l.jsxs)("div",{className:"absolute w-60 -left-24 ml-2 top-9 bg-white shadow-2xl rounded flex-col text-sm",children:["admin"===r.role&&(0,l.jsxs)(y.rU,{className:"pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t",to:"/admin/dashboard",children:[(0,l.jsx)("span",{className:"text-primary-blue",children:(0,l.jsx)(w.Z,{sx:{fontSize:"18px"}})}),"Admin Dashboard"]}),(0,l.jsxs)(y.rU,{className:"pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t",to:"/account",children:[(0,l.jsx)("span",{className:"text-primary-blue",children:(0,l.jsx)(v.Z,{sx:{fontSize:"18px"}})}),"My Profile"]}),a.map((function(e,t){var r=e.title,n=e.icon,s=e.redirect;return(0,l.jsx)(l.Fragment,{children:"Wishlist"===r?(0,l.jsxs)(y.rU,{className:"pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50",to:s,children:[(0,l.jsx)("span",{className:"text-primary-blue",children:n}),r,(0,l.jsx)("span",{className:"ml-auto mr-3 bg-gray-100 p-0.5 px-2 text-gray-600 rounded",children:c.length})]},t):(0,l.jsxs)(y.rU,{className:"pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50",to:s,children:[(0,l.jsx)("span",{className:"text-primary-blue",children:n}),r]},t)})})),(0,l.jsxs)("div",{className:"pl-3 py-3.5 flex gap-3 items-center hover:bg-gray-50 rounded-b cursor-pointer",onClick:function(){n((0,C.TX)()),s("/login"),i("Logout Successfully",{variant:"success"}),t(!1)},children:[(0,l.jsx)("span",{className:"text-primary-blue",children:(0,l.jsx)(z.Z,{sx:{fontSize:"18px"}})}),"Logout"]}),(0,l.jsx)("div",{className:"absolute right-1/2 -top-2.5",children:(0,l.jsx)("div",{className:"arrow_down"})})]})},V=r(621),k=r(4729),H=r(6253),L=r(4002),D=function(){var e=[{title:"Notification Preferences",icon:(0,l.jsx)(g.Z,{sx:{fontSize:"18px"}}),redirect:"https://www.flipkart.com/communication-preferences/push"},{title:"Sell on Flipkart",icon:(0,l.jsx)(V.Z,{sx:{fontSize:"18px"}}),redirect:"https://seller.flipkart.com/sell-online"},{title:"24x7 Customer Care",icon:(0,l.jsx)(k.Z,{sx:{fontSize:"18px"}}),redirect:"https://www.flipkart.com/helpcentre"},{title:"Advertise",icon:(0,l.jsx)(H.Z,{sx:{fontSize:"18px"}}),redirect:"https://advertising.flipkart.com"},{title:"Download App",icon:(0,l.jsx)(L.Z,{sx:{fontSize:"18px"}}),redirect:"https://www.flipkart.com/mobile-apps"}];return(0,l.jsxs)("div",{className:"absolute w-60 -right-2 top-9 bg-white shadow-2xl rounded flex-col text-sm",children:[e.map((function(e,t){var r=e.title,n=e.icon,s=e.redirect;return(0,l.jsxs)("a",{className:"pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t",href:s,children:[(0,l.jsx)("span",{className:"text-primary-blue",children:n}),r]},t)})),(0,l.jsx)("div",{className:"absolute right-1/2 -top-2.5",children:(0,l.jsx)("div",{className:"arrow_down"})})]})},E=function(){var e=(0,S.v9)((function(e){return e.user})),t=e.isAuthenticated,r=e.user,a=(0,S.v9)((function(e){return e.cart})).cartItems,u=(0,o.useState)(!1),v=(0,n.Z)(u,2),h=v[0],p=v[1],x=(0,o.useState)(!1),m=(0,n.Z)(x,2),Z=m[0],j=m[1];return(0,l.jsx)("header",{className:"bg-primary-blue fixed top-0 py-2.5 w-full z-10",children:(0,l.jsxs)("div",{className:"w-full sm:w-full lg:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative",children:[(0,l.jsxs)("div",{className:"flex items-center flex-1 ",children:[(0,l.jsx)(y.rU,{className:"h-7 mr-1 sm:mr-4",to:"/",children:(0,l.jsx)("img",{draggable:"false",className:"h-full w-full object-contain",src:f,alt:"Flipkart Logo"})}),(0,l.jsx)(d,{})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative",children:[!1===t?(0,l.jsx)(y.rU,{to:"/login",className:"px-3 sm:px-9 py-0.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer",children:"Login"}):(0,l.jsxs)("span",{className:"userDropDown flex items-center text-white font-medium gap-1 cursor-pointer",onClick:function(){return p(!h)},children:[r.name&&r.name.split(" ",1),(0,l.jsx)("span",{children:h?(0,l.jsx)(i.Z,{sx:{fontSize:"16px"}}):(0,l.jsx)(s.Z,{sx:{fontSize:"16px"}})})]}),h&&(0,l.jsx)(M,{setTogglePrimaryDropDown:p,user:r}),(0,l.jsxs)("span",{className:"moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer",onClick:function(){return j(!Z)},children:["More",(0,l.jsx)("span",{children:Z?(0,l.jsx)(i.Z,{sx:{fontSize:"16px"}}):(0,l.jsx)(s.Z,{sx:{fontSize:"16px"}})})]}),Z&&(0,l.jsx)(D,{}),(0,l.jsxs)(y.rU,{to:"/cart",className:"flex items-center text-white font-medium gap-2 relative",children:[(0,l.jsx)("span",{children:(0,l.jsx)(c.Z,{})}),a.length>0&&(0,l.jsx)("div",{className:"w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border",children:a.length}),"Cart"]})]})]})})}},841:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"AccountBalanceWallet");t.Z=c},4281:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=c},4516:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");t.Z=c},621:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");t.Z=c},5764:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat");t.Z=c},9006:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"}),"ConfirmationNumber");t.Z=c},1765:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");t.Z=c},4002:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");t.Z=c},3714:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.Z=c},6306:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=c},1069:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.Z=c},4729:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"LiveHelp");t.Z=c},9457:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");t.Z=c},930:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"}),"OfflineBolt");t.Z=c},1905:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"}),"PowerSettingsNew");t.Z=c},7983:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=c},9109:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"}),"ShoppingBag");t.Z=c},6227:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");t.Z=c},6253:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var s=n(r(5045)),i=r(6417),c=(0,s.default)((0,i.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");t.Z=c},5045:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(8095)},5038:function(e,t,r){"use strict";var n=r(4246);t.Z=n.Z},4750:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7462),s=r(7313),i=r(210),c=r(6417);function a(e,t){function r(r,s){return(0,c.jsx)(i.Z,(0,n.Z)({"data-testid":"".concat(t,"Icon"),ref:s},r,{children:e}))}return r.muiName=i.Z.muiName,s.memo(s.forwardRef(r))}},8095:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return s.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return c.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return o},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return v},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return x},useControlled:function(){return m.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return j.Z},useIsFocusVisible:function(){return b.Z}});var n=r(1271),s=r(1615),i=r(5038),c=r(4750),a=r(8706);var o=function(e,t){return function(){return null}},u=r(7816),l=r(6106),d=r(3533);r(7462);var f=function(e,t){return function(){return null}},v=r(9265).Z,h=r(4993),p=r(7677);var x=function(e,t,r,n,s){return null},m=r(3800),Z=r(3236),j=r(6983),b=r(7037),g={configure:function(e){n.Z.configure(e)}}},7816:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7313);var s=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},6106:function(e,t,r){"use strict";var n=r(9081);t.Z=n.Z},3800:function(e,t,r){"use strict";var n=r(782);t.Z=n.Z},4993:function(e,t,r){"use strict";var n=r(2678);t.Z=n.Z},3236:function(e,t,r){"use strict";var n=r(2780);t.Z=n.Z},7677:function(e,t,r){"use strict";var n=r(3362);t.Z=n.Z},7037:function(e,t,r){"use strict";var n=r(5669);t.Z=n.Z},4246:function(e,t,r){"use strict";function n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];e.apply(this,n),t.apply(this,n)}}),(function(){}))}r.d(t,{Z:function(){return n}})},782:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(9439),s=r(7313);function i(e){var t=e.controlled,r=e.default,i=(e.name,e.state,s.useRef(void 0!==t).current),c=s.useState(r),a=(0,n.Z)(c,2),o=a[0],u=a[1];return[i?t:o,s.useCallback((function(e){i||u(e)}),[])]}},3362:function(e,t,r){"use strict";var n;r.d(t,{Z:function(){return o}});var s=r(9439),i=r(7313),c=0;var a=(n||(n=r.t(i,2))).useId;function o(e){if(void 0!==a){var t=a();return null!=e?e:t}return function(e){var t=i.useState(e),r=(0,s.Z)(t,2),n=r[0],a=r[1],o=e||n;return i.useEffect((function(){null==n&&a("mui-".concat(c+=1))}),[n]),o}(e)}},5669:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n,s=r(7313),i=!0,c=!1,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function u(){i=!1}function l(){"hidden"===this.visibilityState&&c&&(i=!0)}function d(e){var t=e.target;try{return t.matches(":focus-visible")}catch(r){}return i||function(e){var t=e.type,r=e.tagName;return!("INPUT"!==r||!a[t]||e.readOnly)||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}function f(){var e=s.useCallback((function(e){var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",o,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",l,!0))}),[]),t=s.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(c=!0,window.clearTimeout(n),n=window.setTimeout((function(){c=!1}),100),t.current=!1,!0)},ref:e}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
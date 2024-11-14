"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7461],{7461:function(e,t,n){n.r(t);var a=n(3433),r=n(4942),s=n(1413),i=n(9439),l=n(6783),o=n(7313),u=n(1997),c=n(7903),d=n(6352),m=n(7230),f=n(8467),p=n(6741),h=n(1175),g=n(4572),x=n(1805),v=n(4675),j=(n(1674),n(6417));t.default=function(){var e=(0,d.I0)(),t=(0,m.Ds)().enqueueSnackbar,n=(0,f.s0)(),b=(0,d.v9)((function(e){return e.newProduct})),w=(b.loading,b.success),y=b.error,N=(0,o.useState)([]),Z=(0,i.Z)(N,2),S=Z[0],C=Z[1],P=(0,o.useState)(""),k=(0,i.Z)(P,2),z=k[0],A=k[1],D=(0,o.useState)([]),q=(0,i.Z)(D,2),F=q[0],I=q[1],E=(0,o.useState)({title:"",description:""}),L=(0,i.Z)(E,2),B=L[0],R=L[1],W=(0,o.useState)(""),H=(0,i.Z)(W,2),J=H[0],M=H[1],U=(0,o.useState)(""),K=(0,i.Z)(U,2),O=K[0],Q=K[1],T=(0,o.useState)(0),G=(0,i.Z)(T,2),V=G[0],X=G[1],Y=(0,o.useState)(0),$=(0,i.Z)(Y,2),_=$[0],ee=$[1],te=(0,o.useState)(""),ne=(0,i.Z)(te,2),ae=ne[0],re=ne[1],se=(0,o.useState)(0),ie=(0,i.Z)(se,2),le=ie[0],oe=ie[1],ue=(0,o.useState)(0),ce=(0,i.Z)(ue,2),de=ce[0],me=ce[1],fe=(0,o.useState)(""),pe=(0,i.Z)(fe,2),he=pe[0],ge=pe[1],xe=(0,o.useState)([]),ve=(0,i.Z)(xe,2),je=ve[0],be=ve[1],we=(0,o.useState)([]),ye=(0,i.Z)(we,2),Ne=ye[0],Ze=ye[1],Se=(0,o.useState)(""),Ce=(0,i.Z)(Se,2),Pe=Ce[0],ke=Ce[1],ze=(0,o.useState)(""),Ae=(0,i.Z)(ze,2),De=Ae[0],qe=Ae[1],Fe=function(e){R((0,s.Z)((0,s.Z)({},B),{},(0,r.Z)({},e.target.name,e.target.value)))};return(0,o.useEffect)((function(){w&&(t("Product Created",{variant:"success"}),e({type:p.Q5}),n("/admin/products"))}),[e,y,w,n,t]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.Z,{title:"Admin: New Product | Flipkart"}),(0,j.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),S.length<=0)t("Add Highlights",{variant:"warning"});else if(Pe)if(F.length<=1)t("Add Minimum 2 Specifications",{variant:"warning"});else if(je.length<=0)t("Add Product Images",{variant:"warning"});else{var a=new FormData;a.set("name",J),a.set("description",O),a.set("price",V),a.set("cuttedPrice",_),a.set("category",ae),a.set("stock",le),a.set("warranty",de),a.set("brandname",he),a.set("logo",Pe),je.forEach((function(e){a.append("images",e)})),S.forEach((function(e){a.append("highlights",e)})),F.forEach((function(e){a.append("specifications",JSON.stringify(e))})),console.log(a.get("name")),e((0,h.ry)(a))}else t("Add Brand Logo",{variant:"warning"})},encType:"multipart/form-data",className:"flex flex-col sm:flex-row bg-white rounded-lg shadow p-4",id:"mainform",children:[(0,j.jsxs)("div",{className:"flex flex-col gap-3 m-2 sm:w-1/2",children:[(0,j.jsx)(l.Z,{label:"Name",variant:"outlined",size:"small",required:!0,value:J,onChange:function(e){return M(e.target.value)}}),(0,j.jsx)(l.Z,{label:"Description",multiline:!0,rows:3,required:!0,variant:"outlined",size:"small",value:O,onChange:function(e){return Q(e.target.value)}}),(0,j.jsxs)("div",{className:"flex justify-between",children:[(0,j.jsx)(l.Z,{label:"Price",type:"number",variant:"outlined",size:"small",InputProps:{inputProps:{min:0}},required:!0,value:V,onChange:function(e){return X(e.target.value)}}),(0,j.jsx)(l.Z,{label:"Cutted Price",type:"number",variant:"outlined",size:"small",InputProps:{inputProps:{min:0}},required:!0,value:_,onChange:function(e){return ee(e.target.value)}})]}),(0,j.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,j.jsx)(l.Z,{label:"Category",select:!0,fullWidth:!0,variant:"outlined",size:"small",required:!0,value:ae,onChange:function(e){return re(e.target.value)},children:x.b.map((function(e,t){return(0,j.jsx)(c.Z,{value:e,children:e},t)}))}),(0,j.jsx)(l.Z,{label:"Stock",type:"number",variant:"outlined",size:"small",InputProps:{inputProps:{min:0}},required:!0,value:le,onChange:function(e){return oe(e.target.value)}}),(0,j.jsx)(l.Z,{label:"Warranty",type:"number",variant:"outlined",size:"small",InputProps:{inputProps:{min:0}},required:!0,value:de,onChange:function(e){return me(e.target.value)}})]}),(0,j.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,j.jsxs)("div",{className:"flex justify-between items-center border rounded",children:[(0,j.jsx)("input",{value:z,onChange:function(e){return A(e.target.value)},type:"text",placeholder:"Highlight",className:"px-2 flex-1 outline-none border-none"}),(0,j.jsx)("span",{onClick:function(){z.trim()&&(C([].concat((0,a.Z)(S),[z])),A(""))},className:"py-2 px-6 bg-primary-blue text-white rounded-r hover:shadow-lg cursor-pointer",children:"Add"})]}),(0,j.jsx)("div",{className:"flex flex-col gap-1.5",children:S.map((function(e,t){return(0,j.jsxs)("div",{className:"flex justify-between rounded items-center py-1 px-2 bg-green-50",children:[(0,j.jsx)("p",{className:"text-green-800 text-sm font-medium",children:e}),(0,j.jsx)("span",{onClick:function(){return e=t,void C(S.filter((function(t,n){return n!==e})));var e},className:"text-red-600 hover:bg-red-100 p-1 rounded-full cursor-pointer",children:(0,j.jsx)(u.Z,{})})]})}))})]}),(0,j.jsx)("h2",{className:"font-medium",children:"Brand Details"}),(0,j.jsxs)("div",{className:"flex justify-between gap-4 items-start",children:[(0,j.jsx)(l.Z,{label:"Brand",type:"text",variant:"outlined",size:"small",required:!0,value:he,onChange:function(e){return ge(e.target.value)}}),(0,j.jsx)("div",{className:"w-24 h-10 flex items-center justify-center border rounded-lg",children:De?(0,j.jsx)("img",{draggable:"false",src:De,alt:"Brand Logo",className:"w-full h-full object-contain"}):(0,j.jsx)(g.Z,{})}),(0,j.jsxs)("label",{className:"rounded bg-gray-400 text-center cursor-pointer text-white py-2 px-2.5 shadow hover:shadow-lg",children:[(0,j.jsx)("input",{type:"file",name:"logo",accept:"image/*",onChange:function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&(qe(t.result),ke(t.result))},t.readAsDataURL(e.target.files[0])},className:"hidden"}),"Choose Logo"]})]})]}),(0,j.jsxs)("div",{className:"flex flex-col gap-2 m-2 sm:w-1/2",children:[(0,j.jsx)("h2",{className:"font-medium",children:"Specifications"}),(0,j.jsxs)("div",{className:"flex justify-evenly gap-2 items-center",children:[(0,j.jsx)(l.Z,{value:B.title,onChange:Fe,name:"title",label:"Name",placeholder:"Model No",variant:"outlined",size:"small"}),(0,j.jsx)(l.Z,{value:B.description,onChange:Fe,name:"description",label:"Description",placeholder:"WJDK42DF5",variant:"outlined",size:"small"}),(0,j.jsx)("span",{onClick:function(){B.title.trim()&&B.title.trim()&&(I([].concat((0,a.Z)(F),[B])),R({title:"",description:""}))},className:"py-2 px-6 bg-primary-blue text-white rounded hover:shadow-lg cursor-pointer",children:"Add"})]}),(0,j.jsx)("div",{className:"flex flex-col gap-1.5",children:F.map((function(e,t){return(0,j.jsxs)("div",{className:"flex justify-between items-center text-sm rounded bg-blue-50 py-1 px-2",children:[(0,j.jsx)("p",{className:"text-gray-500 font-medium",children:e.title}),(0,j.jsx)("p",{children:e.description}),(0,j.jsx)("span",{onClick:function(){return e=t,void I(F.filter((function(t,n){return n!==e})));var e},className:"text-red-600 hover:bg-red-200 bg-red-100 p-1 rounded-full cursor-pointer",children:(0,j.jsx)(u.Z,{})})]})}))}),(0,j.jsx)("h2",{className:"font-medium",children:"Product Images"}),(0,j.jsx)("div",{className:"flex gap-2 overflow-x-auto h-32 border rounded",children:Ne.map((function(e,t){return(0,j.jsx)("img",{draggable:"false",src:e,alt:"Product",className:"w-full h-full object-contain"},t)}))}),(0,j.jsxs)("label",{className:"rounded font-medium bg-gray-400 text-center cursor-pointer text-white p-2 shadow hover:shadow-lg my-2",children:[(0,j.jsx)("input",{type:"file",name:"images",accept:"image/*",multiple:!0,onChange:function(e){var t=Array.from(e.target.files);be([]),Ze([]),t.forEach((function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&(Ze((function(e){return[].concat((0,a.Z)(e),[t.result])})),be((function(e){return[].concat((0,a.Z)(e),[t.result])})))},t.readAsDataURL(e)}))},className:"hidden"}),"Choose Files"]}),(0,j.jsx)("div",{className:"flex justify-end",children:(0,j.jsx)("input",{form:"mainform",type:"submit",className:"bg-primary-orange uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer",value:"Submit"})})]})]})]})}}}]);
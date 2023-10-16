"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[264],{53035:function(t,e,r){var n=r(11817),o=r(67294),i=r(18778),a=r(81578);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.Z=function(){var t=function(){var t=localStorage.getItem("token"),e="";return"undefined"!==t&&t&&(e=t),e},e=u((0,o.useState)(t()),2),r=e[0],l=e[1],c=(0,o.useState)(function(){var t=localStorage.getItem("user"),e="";return"undefined"!==t&&(e=JSON.parse(t)),e}()),s=u(c,2),f=s[0],d=s[1];return{setToken:function(t,e){localStorage.setItem("token",JSON.stringify(e)),localStorage.setItem("user",JSON.stringify(t)),l(e),d(t),i.h.dispatch((0,a.M)(t))},token:r,user:f,getToken:t,api:n.Z.create({baseURL:"/api"}),logout:function(){localStorage.clear(),window.location.href="/login"},setUser:function(t){localStorage.setItem("user",JSON.stringify(t)),d(t),i.h.dispatch((0,a.M)(t))}}}},94099:function(t,e,r){r.d(e,{_:function(){return o}});var n=r(11817),o="/api",i=n.Z.create({baseURL:o});i.interceptors.request.use((function(t){var e=localStorage.getItem("token");return t.headers={Authorization:"Bearer ".concat(e.replace('"',"")),Accept:"application/json"},t})),i.interceptors.response.use((function(t){return t}),(function(t){return t.response&&401===t.response.status&&t.response.config.url!==o+"/login"&&(localStorage.clear(),window.location.href="/login"),Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return!t.response||401!==t.response.status||t.response.config&&t.response.config.url===o+"/login"||(localStorage.clear(),window.location.href="/login"),Promise.reject(t)})),e.Z=i},65969:function(t,e,r){r.d(e,{EW:function(){return a},Ih:function(){return i},O5:function(){return l},Q6:function(){return o},ek:function(){return c},er:function(){return n},ix:function(){return u},s3:function(){return s},zh:function(){return f}});var n="#d89614",o="#dc4446",i="#eae9e6",a="#f2f1ef",u="#64605d",l="#64605d",c="#49aa19",s="#4a6da7",f="#2d4e76"},62264:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(97573),o=r(67294),i=r(94099),a=r(89250),u=r(53035),l=r(5715),c=r(10195),s=r(97262);r(20623),r(18778);var f=r(65969),d=r(85893);function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g=function(t){var e=t.notify,r=(0,u.Z)().user,h=p((0,o.useState)(null),2),g=h[0],y=h[1],m=p((0,o.useState)(!1),2),v=m[0],b=m[1],S=(0,a.s0)();(0,o.useEffect)((function(){!function(t,e){i.Z.get("/user/metrics").then((function(r){if("success"==r.data.status){var n=r.data.data;e(n)}else e(null),console.log("erro carregar hist",r.data),t("error","Erro","Ocorreu um erro ao encontrar seu histórico. Tente novamente mais tarde.")})).catch((function(r){e(null),console.log("erro carregar hist",r),t("error","Erro","Ocorreu um erro ao encontrar seu histórico. Tente novamente mais tarde.")}))}(e,y)}),[]),(0,o.useEffect)((function(){r&&13==r.id||S("/app/registers")}),[r]);var j=g?g.filter((function(t){return t.latitude})):[];v&&(j=g?g.filter((function(t){return t.full_name})):[]);var x=j.length;return(0,d.jsxs)("div",{children:[(0,d.jsxs)(l.h,{center:[-14,-54],zoom:4,scrollWheelZoom:!1,style:{height:"50vh",width:"vh",borderRadius:"8px"},children:[(0,d.jsx)(c.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),j.map((function(t,e){if(t.user_id)return null;var r={color:"rgb(".concat(255*(1-e/(x-1)),", 0, ").concat(255*(0+e/(x-1)),")"),weight:"12",stroke:!0};return(0,d.jsx)(s.a,{pathOptions:r,positions:[[t.latitude,t.longitude],[t.latitude,t.longitude]]})}))]}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px",color:f.O5,lineHeight:"26px"},children:["Atividade de usuários ",(0,d.jsx)(n.Z,{onChange:function(t){return b(t)}})]}),(0,d.jsxs)("div",{style:{color:f.O5,textAlign:"center",marginTop:"20px"},children:["Total: ",x]}),(0,d.jsx)("div",{style:{color:f.O5,textAlign:"center",marginTop:"20px"},children:j.map((function(t){var e=t.link.replace("https://fitbase.com.br","").replace("http://localhost:3000","").split("fbclid")[0],r=t.created_at.split("T")[0],n=t.created_at.split("T")[1],o="".concat(r.split("-")[2],"/").concat(r.split("-")[1]," ").concat(n.split(":")[0],":").concat(n.split(":")[1]);return(0,d.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,d.jsx)("div",{style:{width:"33%"},children:e}),t.full_name?(0,d.jsx)("div",{style:{width:"33%",wordBreak:"break-all"},children:t.full_name.split(" ")[0]}):null,(0,d.jsx)("div",{style:{width:"33%"},children:o})]})}))})]})}},81578:function(t,e,r){r.d(e,{M:function(){return n}});function n(t){return{type:"SETUSER",user:t}}}}]);
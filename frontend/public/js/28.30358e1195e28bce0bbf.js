"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[28],{53035:function(e,t,n){var r,i=n(11817),o=n(67294),a=n(18778),s=n(81578);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],A=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;A=!1}else for(;!(A=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);A=!0);}catch(e){c=!0,i=e}finally{try{if(!A&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l="".concat(null!==(r=window.appUrl)&&void 0!==r?r:"http://localhost:8000","/api");t.Z=function(){var e=function(){var e=localStorage.getItem("token"),t="";return"undefined"!==e&&e&&(t=e),t},t=A((0,o.useState)(e()),2),n=t[0],r=t[1],c=(0,o.useState)(function(){var e=localStorage.getItem("user"),t="";return"undefined"!==e&&(t=JSON.parse(e)),t}()),u=A(c,2),p=u[0],f=u[1];return{setToken:function(e,t){localStorage.setItem("token",JSON.stringify(t)),localStorage.setItem("user",JSON.stringify(e)),r(t),f(e),a.h.dispatch((0,s.M)(e))},token:n,user:p,getToken:e,api:i.Z.create({baseURL:l}),logout:function(){localStorage.clear(),window.location.href="/login"},setUser:function(e){localStorage.setItem("user",JSON.stringify(e)),f(e),a.h.dispatch((0,s.M)(e))}}}},94099:function(e,t,n){n.d(t,{_:function(){return o}});var r,i=n(11817),o="".concat(null!==(r=window.appUrl)&&void 0!==r?r:"http://localhost:8000","/api"),a=i.Z.create({baseURL:o});a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e.headers={Authorization:"Bearer ".concat(t.replace('"',"")),Accept:"application/json"},e})),a.interceptors.response.use((function(e){return e}),(function(e){return e.response&&401===e.response.status&&e.response.config.url!==o+"/login"&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){return!e.response||401!==e.response.status||e.response.config&&e.response.config.url===o+"/login"||(localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),t.Z=a},65969:function(e,t,n){n.d(t,{EW:function(){return a},Ih:function(){return o},O5:function(){return A},Q6:function(){return i},ek:function(){return c},er:function(){return r},ix:function(){return s},s3:function(){return l},zh:function(){return u}});var r="#d89614",i="#dc4446",o="#eae9e6",a="#f2f1ef",s="#64605d",A="#64605d",c="#49aa19",l="#4a6da7",u="#2d4e76"},85522:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r,i,o=n(57278),a=n(95187),s=n(3247),A=n(89583),c=n(63750),l=n(5434),u=n(18276),p=n(69053),f=n(71230),d=n(15746),g=n(65969),m=n(15286),h=n(85893);function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x,v,y=u.Z.Meta,B=m.ZP.h3(r||(r=j(["\n"]))),w=m.ZP.h3(i||(i=j(["\n    color: ",";\n    transition: all 0.2s;\n\n    &:hover{\n        color: ",";\n    }\n"])),g.s3,g.zh),M=function(e){var t=e.plano,n=e.onClickChoose,r=e.user,i=r.user_level_id==t.user_level_id?[(0,h.jsx)(B,{style:1!=r.user_level_id?{cursor:"default",color:g.ek}:{cursor:"default"},children:"Atual"})]:1==t.user_level_id?[(0,h.jsx)("h3",{style:{cursor:"default"},children:"Padrão"})]:[(0,h.jsx)(w,{onClick:function(){return n(t)},children:"Escolher Plano"})];return(0,h.jsx)(u.Z,{style:{minWidth:250},cover:(0,h.jsx)("div",{style:{width:"fit-content",marginRight:"auto",marginLeft:"auto"},children:(0,h.jsx)("h2",{children:t.plan})}),actions:i,children:(0,h.jsx)(y,{title:t.price,description:t.items.map((function(e,t){return(0,h.jsx)(p.Z,{title:e.tip,children:(0,h.jsxs)(f.Z,{children:[(0,h.jsx)(d.Z,{span:3,style:{fontSize:"17px"},children:e.icon1}),(0,h.jsx)(d.Z,{span:3,style:{fontSize:"17px"},children:e.icon2}),(0,h.jsx)(d.Z,{span:18,style:{fontSize:"17px"},children:e.title})]})},t)}))})})},Y=n(67294),S=n(94099),b=n(53035),F=n(27782),E=n(48915);function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],A=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;A=!1}else for(;!(A=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);A=!0);}catch(e){c=!0,i=e}finally{try{if(!A&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n(40212),n(71580);var P=o.ZP.useBreakpoint,k=(0,m.ZP)(E.tq)(x||(x=C(["\n    .swiper-slide{\n        width: 100%;\n        max-width: min(calc(100vw - 100px), 300px);\n    }\n"]))),O=m.ZP.div(v||(v=C(["\n    color: ",";\n    margin-bottom: 20px;\n    font-size: 25px;\n    font-weight: 600;\n"])),g.O5),I={individual:[{plan:"Basic",stripe:"",price:"Grátis",user_level_id:1,preco:0,items:[{icon1:(0,h.jsx)(h.Fragment,{}),icon2:(0,h.jsx)(A.dAP,{}),title:"Meu Peso",tip:"Defina uma meta e acompanhe seu progresso pelo gráfico"},{icon1:(0,h.jsx)(h.Fragment,{}),icon2:(0,h.jsx)(A.T_s,{}),title:"Calculadora de Calorias",tip:"Insira o que você come diariamente para saber os macronutrientes e calorias"},{icon1:(0,h.jsx)(A.FJM,{style:{color:"#ffffff00"}}),icon2:(0,h.jsx)(h.Fragment,{}),title:"",tip:""},{icon1:(0,h.jsx)(A.FJM,{style:{color:"#ffffff00"}}),icon2:(0,h.jsx)(h.Fragment,{}),title:"",tip:""},{icon1:(0,h.jsx)(A.FJM,{style:{color:"#ffffff00"}}),icon2:(0,h.jsx)(h.Fragment,{}),title:"",tip:""}]},{plan:"Black",stripe:"plan_OTrADq3KPVMV2y",user_level_id:2,price:"R$ 9,90/mês",preco:9.9,items:[{icon1:(0,h.jsx)(h.Fragment,{}),icon2:(0,h.jsx)(A.dAP,{}),title:"Meu Peso",tip:""},{icon1:(0,h.jsx)(h.Fragment,{}),icon2:(0,h.jsx)(A.T_s,{}),title:"Calculadora de Calorias",tip:""},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(A.GVn,{}),title:"Substitutos",tip:"Substitua alimentos indesejados da sua dieta com essa calculadora extremamente precisa"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(A.EaM,{}),title:"Corrida",tip:"Contagem de calorias queimadas na corrida, acompanhado no mapa, com gráficos de progresso"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(A.ee,{}),title:"Musculação",tip:"Montagem e acompanhamento de treinos para ver seu progresso"}]}],professional:[{plan:"Personal",stripe:"personalv1",user_level_id:6,price:"R$ 24,90/mês",preco:24.9,items:[{icon1:(0,h.jsx)(h.Fragment,{}),icon2:(0,h.jsx)(A.q1E,{}),title:"Plano Black",tip:"Usufrua do seu plano Black individual"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(c.mly,{}),title:"Treinos para alunos",tip:"Monte treinos personalizados para seus alunos à distância e acompanhe o progresso deles"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(l.TKM,{}),title:"Grátis para alunos",tip:"Seus alunos utilizam a plataforma gratuitamente"},{icon1:(0,h.jsx)(A.FJM,{style:{color:"#ffffff00"}}),icon2:(0,h.jsx)(h.Fragment,{}),title:"",tip:""}]},{plan:"Nutri",stripe:"nutriv1",user_level_id:5,price:"R$ 29,90/mês",preco:29.9,items:[{icon1:(0,h.jsx)(h.Fragment,{}),icon2:(0,h.jsx)(A.q1E,{}),title:"Plano Black",tip:"Usufrua do seu plano Black individual"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(A.tGO,{}),title:"Dietas para pacientes",tip:"Monte dietas personalizadas à distância e acompanhe o progresso deles"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(l.TKM,{}),title:"Grátis para pacientes",tip:"Seus pacientes utilizam a plataforma gratuitamente"},{icon1:(0,h.jsx)(A.FJM,{style:{color:"#ffffff00"}}),icon2:(0,h.jsx)(h.Fragment,{}),title:"",tip:""}]},{plan:"Coach",stripe:"coachv1",user_level_id:10,price:"R$ 44,90/mês",preco:44.9,items:[{icon1:(0,h.jsx)(h.Fragment,{}),icon2:(0,h.jsx)(A.q1E,{}),title:"Plano Black",tip:"Usufrua do seu plano Black individual"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(A.tGO,{}),title:"Dietas para pacientes",tip:"Monte dietas personalizadas à distância e acompanhe o progresso deles"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(c.mly,{}),title:"Treinos para alunos",tip:"Monte treinos personalizados para seus alunos à distância e acompanhe o progresso deles"},{icon1:(0,h.jsx)(A.FJM,{style:{color:g.s3}}),icon2:(0,h.jsx)(l.TKM,{}),title:"Grátis para pacientes",tip:"Seus pacientes utilizam a plataforma gratuitamente"}]}]},z=function(e){var t=e.notify,n=(0,b.Z)(),r=n.setUser,i=n.user,o=G((0,Y.useState)(),2),A=o[0],c=o[1],l=G((0,Y.useState)(!1),2),u=l[0],p=l[1],f=G((0,Y.useState)(!0),2),d=(f[0],f[1]);(0,Y.useEffect)((function(){var e=window.StripeCheckout.configure({key:window.stripeApi,image:s.Z,locale:"pt-BR",email:i?i.email:void 0,allowRememberMe:!1});c(e)}),[i]),P();var g=function(){window.location.href="/app/registers"},m=function(e,n,i,o){p(!0),S.Z.post("/user/buy",{token:e,price:n,stripe_plan:i,plan:o}).then((function(e){t("success","Sucesso","Seu plano foi ativado com sucesso!"),r(e.data.user),setTimeout(g,1e3)})).catch((function(e){console.log("erro ativando plano",e),p(!1),t("error","Erro","Ocorreu um erro ao ativar seu plano")}))},j=function(e){A&&A.open({name:"FitBase",amount:parseInt(100*e.preco),description:e.title,panelLabel:"Pagar ",currency:"brl",token:function(t){m&&m(t,Math.round(100*e.preco),e.stripe,e.plan)}})};return(0,h.jsx)("div",{children:u?(0,h.jsx)(F.Z,{}):(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{width:"fit-content",marginRight:"auto",marginLeft:"auto"},children:(0,h.jsx)(O,{level:2,children:"Planos Individuais"})}),(0,h.jsx)("div",{children:(0,h.jsxs)(k,{slidesPerView:"auto",centeredSlides:!0,spaceBetween:20,initialSlide:2,children:[(0,h.jsx)(E.o5,{children:(0,h.jsx)(M,{plano:I.individual[0],onClickChoose:j,user:i})}),(0,h.jsx)(E.o5,{children:(0,h.jsx)(M,{plano:I.individual[1],onClickChoose:j,user:i})})]})}),i&&1!=i.user_level_id?(0,h.jsx)("div",{style:{width:"fit-content",marginRight:"auto",marginLeft:"auto"},children:(0,h.jsx)(a.ZP,{onClick:function(){return d(!0)},children:"Cancelar inscrição"})}):null]})})}},81578:function(e,t,n){n.d(t,{M:function(){return r}});function r(e){return{type:"SETUSER",user:e}}},3247:function(e,t,n){t.Z=n.p+"279da5fb6aec6e921b9dcb06f8a34ae9.png"},49954:function(e){e.exports="data:application/font-woff;charset=utf-8;base64, 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"}}]);
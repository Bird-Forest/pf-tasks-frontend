"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[865],{7909:function(n,e,t){t.d(e,{Z:function(){return f}});var i=t(9439),r=t(2791),o=t(2438),d=t(9126),a=t(9434),l=t(6355),c=t(57),s=t(6857),u=t(184);function f(n){var e=n.task,t=(0,a.I0)(),f=(0,r.useState)(!1),x=(0,i.Z)(f,2),p=x[0],h=x[1],g=function(n){var e={taskId:n.currentTarget.name,newColor:n.currentTarget.value};t((0,c.m9)(e))};return(0,u.jsx)(o.Zj,{id:e._id,children:(0,u.jsx)(o.im,{children:(0,u.jsxs)(o.ub,{style:{backgroundColor:e.color},children:[(0,u.jsx)(o.xv,{children:e.title}),(0,u.jsxs)(o.Mc,{style:{transform:p?"translate(0, 0)":"translate(-124%, 0)"},children:[(0,u.jsx)(o.IF,{type:"button",name:e._id,value:s.u.blue,onClick:g,children:(0,u.jsx)(d.i$B,{className:"icon-color"})}),(0,u.jsx)(o.IF,{type:"button",name:e._id,value:s.u.red,onClick:g,children:(0,u.jsx)(d.M3w,{className:"icon-color"})}),(0,u.jsx)(o.IF,{type:"button",name:e._id,value:s.u.yellow,onClick:g,children:(0,u.jsx)(d.M3w,{className:"icon-color"})}),(0,u.jsx)(o.IF,{type:"button",name:e._id,value:s.u.green,onClick:g,children:(0,u.jsx)(d.M3w,{className:"icon-color"})}),(0,u.jsx)(o.ZP,{name:e._id,onClick:function(n){var e=n.currentTarget.name;t((0,c._5)(e))},children:(0,u.jsx)(d.VgY,{className:"icon-delete"})})]}),(0,u.jsx)(o.oq,{onClick:function(){h(!p)},children:(0,u.jsx)(l.rU2,{className:"icon-setting"})})]})})})}},2438:function(n,e,t){t.d(e,{BA:function(){return k},BN:function(){return h},IF:function(){return y},Mc:function(){return j},ZP:function(){return Z},Zj:function(){return g},im:function(){return m},oq:function(){return v},ub:function(){return b},xv:function(){return w}});var i,r,o,d,a,l,c,s,u,f,x=t(168),p=t(5867),h=p.ZP.ul(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n  padding: 0;\n  /* margin: 80px auto; */\n  /* @media screen and (min-width: 320px) {\n    min-width: 320px;\n  }\n  @media screen and (min-width: 440px) {\n    min-width: 420px;\n  }\n  @media screen and (min-width: 500px) {\n    width: 480px;\n  } */\n"]))),g=p.ZP.li(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2px;\n  width: 100%;\n  /* min-width: 300px; */\n  /* width: 100%; */\n  /* height: 36px;\n  background-color: #9e9e9e;\n  border-radius: 8px;\n  border: 3px solid RGBA(117, 117, 117, 0.6);\n  margin: 0;\n  padding: 0; */\n  /* padding: 0;\n  margin: 0 auto; */\n"]))),m=p.ZP.div(o||(o=(0,x.Z)(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  height: 36px;\n  background-color: #9e9e9e;\n  border-radius: 8px;\n  border: 3px solid RGBA(117, 117, 117, 0.6);\n  padding: 0 2px;\n  margin: 0;\n"]))),b=p.ZP.div(d||(d=(0,x.Z)(["\n  /* position: relative;\n  overflow: hidden; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 32px;\n  width: 100%;\n  background-color: ",";\n  border-radius: 6px;\n  border: 1px solid #bdbdbd;\n  padding: 0;\n  margin: 0;\n"])),(function(n){return n.value})),w=p.ZP.p(a||(a=(0,x.Z)(["\n  display: flex;\n  /* flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center; */\n  /* flex-grow: 1; */\n  /* width: 150px; */\n  font-size: 16px;\n  font-weight: 400;\n  color: #424242;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n  padding: 0 0 0 36px;\n  /* @media screen and (min-width: 380px) {\n    width: 300px;\n  }\n  @media screen and (min-width: 440px) {\n    width: 360px;\n  }\n  @media screen and (min-width: 500px) {\n    width: 404px;\n  } */\n"]))),v=p.ZP.button(l||(l=(0,x.Z)(["\n  position: absolute;\n  /* overflow: hidden; */\n  display: flex;\n  /* flex-grow: 0.2; */\n  width: 32px;\n  height: 32px;\n  justify-content: center;\n  align-items: center;\n  background-color: #bdbdbd;\n  border: 1px solid #bdbdbd;\n  outline: none;\n  /* width: 40px; */\n  padding: 0;\n  margin: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  cursor: pointer;\n  .icon-setting {\n    width: 24px;\n    height: 24px;\n    fill: #ffffff;\n  }\n  .icon-setting:hover,\n  .icon-setting:focus {\n    fill: #616161;\n  }\n"]))),j=p.ZP.div(c||(c=(0,x.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 4px;\n  background-color: #bdbdbd;\n  /* color: #ffffff; */\n  flex-basis: 250px;\n  height: 32px;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  /* border: 1px solid #bdbdbd; */\n  padding: 0 4px;\n  margin: 0;\n  transform: translate(0, 0);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  /* right: 140px; */\n  left: 34px;\n"]))),y=p.ZP.button(s||(s=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #616161;\n  border-radius: 50%;\n  background-color: ",";\n  cursor: pointer;\n  .icon-color {\n    width: 24px;\n    height: 24px;\n    fill: #616161;\n  }\n  /* .icon-color:hover,\n  .icon-color:focus {\n    width: 24px;\n    height: 24px;\n    fill: #ffffff;\n  } */\n"])),(function(n){return n.value})),Z=p.ZP.button(u||(u=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 50%;\n  border: 1px solid #616161;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  cursor: pointer;\n  .icon-delete {\n    width: 20px;\n    height: 20px;\n    fill: #616161;\n  }\n  /* .icon-delete:hover,\n  .icon-delete:focus {\n    fill: #1769aa;\n  } */\n  /* @media screen and (min-width: 600px) {\n    width: 40px;\n    height: 40px;\n    .icon-delete {\n      width: 24px;\n      height: 24px;\n    }\n  } */\n"]))),k=p.ZP.div(f||(f=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-color: #e0e0e0;\n  padding: 0;\n  margin: 20px 0;\n  .empty-text {\n    font-size: 20px;\n    font-weight: 500;\n    color: #424242;\n  }\n  .icon-lizard {\n    width: 160px;\n    height: 160px;\n    fill: #424242;\n  }\n"])))},6865:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var i=t(2219),r=(t(2791),t(9434)),o=t(6351),d=t(1283),a=t(2438),l=t(7909),c=t(4175),s=t(184);function u(){var n=(0,r.v9)(o.xU),e=(0,r.v9)(o.XF),t=(0,r.v9)(o.Uq),u=(0,r.v9)(o.AD);console.log(u);var f=t.filter((function(n){return n.color===u})),x=Array.isArray(f)&&0!==f.length;return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(i.Z,{}),e&&(0,s.jsx)(d.Z,{}),(0,s.jsx)(a.BN,{children:x?f.map((function(n){return(0,s.jsx)(l.Z,{task:n},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}())})):(0,s.jsx)(c.Z,{})})]})}},4175:function(n,e,t){t.d(e,{Z:function(){return d}});t(2791);var i=t(2438),r=t(978),o=t(184);function d(){return(0,o.jsxs)(i.BA,{children:[(0,o.jsx)("h4",{className:"empty-text",children:"It's empty here"}),(0,o.jsx)(r.GfO,{className:"icon-lizard"})]})}},1283:function(n,e,t){t.d(e,{Z:function(){return l}});t(2791);var i=t(2438),r=t(978),o=t(9434),d=t(6351),a=t(184);function l(){var n=(0,o.v9)(d.XF);return(0,a.jsxs)(i.BA,{children:[(0,a.jsx)("h4",{className:"empty-text",children:n}),(0,a.jsx)(r.GfO,{className:"icon-lizard"})]})}},6857:function(n,e,t){t.d(e,{u:function(){return i}});var i=Object.freeze({white:"#ffffff",blue:"#64b5f6",red:"#ff5252",yellow:"#ffee58",green:"#00e676"})}}]);
//# sourceMappingURL=865.c9c9014f.chunk.js.map
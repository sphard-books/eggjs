"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[877],{6223:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=e(5893),d=e(1151);const a={sidebar_position:8},s="\u9879\u76ee\uff1a\u5929\u6c14\u9884\u62a5",i={id:"weather",title:"\u9879\u76ee\uff1a\u5929\u6c14\u9884\u62a5",description:"\u5929\u6c14\u63a5\u53e3\u5730\u5740\uff1ahttps://api.map.baidu.com/telematics/v3/weather",source:"@site/docs/weather.md",sourceDirName:".",slug:"/weather",permalink:"/eggjs/weather",draft:!1,unlisted:!1,editUrl:"https://github.com/sphard-books/eggjs/edit/main/docs/weather.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u9ed8\u8ba4favicon\u56fe\u6807",permalink:"/eggjs/egg-favicon"},next:{title:"\u6846\u67b6\u6269\u5c55",permalink:"/eggjs/extend"}},c={},o=[];function l(n){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u9879\u76ee\u5929\u6c14\u9884\u62a5",children:"\u9879\u76ee\uff1a\u5929\u6c14\u9884\u62a5"}),"\n",(0,r.jsx)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/YBr1lPHlPmA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,r.jsx)("iframe",{width:"100%",height:"415",src:"//player.bilibili.com/player.html?aid=667829422&bvid=BV1Ra4y1x7y3&cid=181558500&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:e(6148).Z+"",width:"1446",height:"626"}),"\n\u5929\u6c14\u63a5\u53e3\u5730\u5740\uff1a",(0,r.jsx)(t.code,{children:"https://api.map.baidu.com/telematics/v3/weather"}),(0,r.jsx)("br",{}),"\n\u8bf7\u6c42\u65b9\u5f0f\uff1a",(0,r.jsx)(t.code,{children:"GET"}),"\u3001",(0,r.jsx)(t.code,{children:"POST"}),(0,r.jsx)("br",{}),"\n\u53c2\u65701\uff1a",(0,r.jsx)(t.code,{children:"ak"}),"  \u503c\uff1a",(0,r.jsx)(t.code,{children:"zVo5SStav7IUiVON0kuCogecm87lonOj"}),(0,r.jsx)("br",{}),"\n\u53c2\u65702\uff1a",(0,r.jsx)(t.code,{children:"output"}),"  \u503c\uff1a",(0,r.jsx)(t.code,{children:"json"}),(0,r.jsx)("br",{}),"\n\u53c2\u65703\uff1a",(0,r.jsx)(t.code,{children:"location"}),"  \u503c\uff1a\u57ce\u5e02\u540d\u5b57"]}),"\n",(0,r.jsx)(t.p,{children:"\u5929\u6c14\u89c6\u56fe\u9875\u9762\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers'",children:'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u5929\u6c14\u9884\u62a5</title>\n  <style>\n    h1 {\n      margin-top: 60px;\n      text-align: center;\n    }\n\n    .box {\n      width: 1000px;\n      margin: 80px auto;\n    }\n\n    .inp {\n      margin-bottom: 10px;\n    }\n\n    table {\n      width: 100%;\n      text-align: center;\n      background-color: #F5F5F5;\n    }\n\n    td {\n      border: 1px solid #ccc;\n    }\n\n    tr:nth-child(1) {\n      background-color: pink;\n    }\n\n    .date {\n      background-color: #DFF0D8;\n    }\n\n    .temperature {\n      background-color: #8ED0F9;\n    }\n\n    .wind {\n      background-color: #FCF8E3;\n    }\n  </style>\n</head>\n\n<body>\n  <h1>\u5929\u6c14\u9884\u62a5\u9879\u76ee</h1>\n\n  <div class="box">\n    <div class="inp">\n      <span>\u67e5\u8be2\u54ea\u4e2a\u57ce\u5e02\u7684\u5929\u6c14\uff1a</span>\n      <form action="http://127.0.0.1:7001/weather" method="POST">\n        <input type="text" name="location" required>\n        <button type="submit">\u67e5\u8be2</button>\n      </form>\n    </div>\n    <table cellspacing="0" cellpadding="10">\n      <tr>\n        <td>\u5317\u4eac</td>\n        <td>\u6e29\u5ea6</td>\n        <td>\u98ce\u5411</td>\n        <td>\u5929\u6c14</td>\n      </tr>\n      <tr>\n        <td class="date">\u5468\u65e5 04\u670819\u65e5 (\u5b9e\u65f6\uff1a18\u2103)</td>\n        <td class="temperature">19 ~ 14\u2103</td>\n        <td class="wind">\u4e1c\u5317\u98ce\u5fae\u98ce</td>\n        <td>\u9634</td>\n      </tr>\n      <tr>\n        <td class="date">\u5468\u65e5 04\u670819\u65e5 (\u5b9e\u65f6\uff1a18\u2103)</td>\n        <td class="temperature">19 ~ 14\u2103</td>\n        <td class="wind">\u4e1c\u5317\u98ce\u5fae\u98ce</td>\n        <td>\u9634</td>\n      </tr>\n      <tr>\n        <td class="date">\u5468\u65e5 04\u670819\u65e5 (\u5b9e\u65f6\uff1a18\u2103)</td>\n        <td class="temperature">19 ~ 14\u2103</td>\n        <td class="wind">\u4e1c\u5317\u98ce\u5fae\u98ce</td>\n        <td>\u9634</td>\n      </tr>\n      <tr>\n        <td class="date">\u5468\u65e5 04\u670819\u65e5 (\u5b9e\u65f6\uff1a18\u2103)</td>\n        <td class="temperature">19 ~ 14\u2103</td>\n        <td class="wind">\u4e1c\u5317\u98ce\u5fae\u98ce</td>\n        <td>\u9634</td>\n      </tr>\n    </table>\n  </div>\n</body>\n\n</html>\n'})}),"\n",(0,r.jsx)("a",{href:"https://www.vultr.com/?ref=8371895-6G",children:(0,r.jsx)(t.img,{src:e(6269).Z+"",width:"728",height:"90"})})]})}function p(n={}){const{wrapper:t}={...(0,d.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},6269:(n,t,e)=>{e.d(t,{Z:()=>r});const r=e.p+"assets/images/banner_1-31447ee593c52611b64df8a912413ba4.png"},6148:(n,t,e)=>{e.d(t,{Z:()=>r});const r=e.p+"assets/images/weather-9bf4969484f3fa20340ac1ce0174680d.png"},1151:(n,t,e)=>{e.d(t,{Z:()=>i,a:()=>s});var r=e(7294);const d={},a=r.createContext(d);function s(n){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),r.createElement(a.Provider,{value:t},n.children)}}}]);
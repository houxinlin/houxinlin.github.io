"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8910],{7186:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=i(5893),n=i(1151);const c={sidebar_position:1},r="\u626b\u63cfAPI",o={id:"tutorial-basics/startup",title:"\u626b\u63cfAPI",description:"Cool Request\u63d0\u4f9b\u4e86\u4e24\u79cd\u626b\u63cf\u9879\u76eeAPI\u65b9\u5f0f\uff0cStatic\u548cDyanmic\u3002",source:"@site/docs/tutorial-basics/startup.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/startup",permalink:"/docs/tutorial-basics/startup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u6559\u7a0b",permalink:"/docs/category/\u4f7f\u7528\u6559\u7a0b"},next:{title:"API\u641c\u7d22",permalink:"/docs/tutorial-basics/api_search"}},a={},d=[];function l(t){const e={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u626b\u63cfapi",children:"\u626b\u63cfAPI"}),"\n",(0,s.jsx)(e.p,{children:"Cool Request\u63d0\u4f9b\u4e86\u4e24\u79cd\u626b\u63cf\u9879\u76eeAPI\u65b9\u5f0f\uff0cStatic\u548cDyanmic\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Static"}),"\n",(0,s.jsx)(e.p,{children:"Static\u626b\u63cf\u4f1a\u5c3d\u53ef\u80fd\u591a\u7684\u626b\u63cf\u51faAPI\uff0c\u4f46\u4e0d\u4f1a\u626b\u63cf\u7b2c\u4e09\u65b9\u5e93\u4e2d\u7684\u6570\u636e\uff0c\u5728IDEA \u5efa\u7acb\u7d22\u5f15\u5b8c\u6210\u540e\u81ea\u52a8\u89e6\u53d1\u4e00\u6b21Static\u626b\u63cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Alt text",src:i(9592).Z+"",width:"902",height:"236"})}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsxs)(e.p,{children:["Static\u626b\u63cf\u652f\u6301\u83b7\u53d6\u9879\u76ee\u4e2d\u5b9a\u4e49\u7684",(0,s.jsx)(e.code,{children:"server.port"}),"\u548c",(0,s.jsx)(e.code,{children:"server.servlet.context-path"}),"\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a",(0,s.jsx)(e.code,{children:"8080"}),"\u548c",(0,s.jsx)(e.code,{children:"/"}),",\u540c\u65f6\u652f\u6301",(0,s.jsx)(e.code,{children:"spring.profiles.active"}),"\u68c0\u6d4b\u3002"]}),(0,s.jsxs)(e.p,{children:["Static\u4e0d\u652f\u6301\u542f\u52a8\u53c2\u6570\u68c0\u6d4b\uff0c\u5982",(0,s.jsx)(e.code,{children:"--server.port"}),"\u548c",(0,s.jsx)(e.code,{children:"--server.servlet.context-path"}),"\uff0c\u4ed6\u7531Dynamic\u6240\u5f25\u8865\u3002"]})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Dynamic"}),"\n",(0,s.jsxs)(e.p,{children:["Dynamic\u4ec5\u5728\u9879\u76ee\u542f\u52a8\u540e\u6709\u6548\uff0c\u539f\u7406\u662f\u4eceSpringBoot\u5bb9\u5668\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u6b64\u65b9\u6cd5\u83b7\u53d6\u7684\u6570\u636e\u6700\u5168\uff0c\u5f53\u626b\u63cf\u6210\u529f\u540e\uff0c\u6bcf\u4e2aAPI\u5217\u8868\u524d\u4f1a\u51fa\u73b0",(0,s.jsx)(e.img,{alt:"SVG \u56fe\u6807",src:i(1202).Z+"",width:"16",height:"16"}),"\u56fe\u6807\uff0c",(0,s.jsx)(e.strong,{children:"\u53ea\u6709\u5177\u6709\u6b64\u56fe\u6807\u7684API\u624d\u53ef\u4ee5\u8fdb\u884c\u53cd\u5c04\u8c03\u7528\u3002"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Alt text",src:i(2863).Z+"",width:"906",height:"248"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\u52a8\u6001\u626b\u63cf\u652f\u6301",(0,s.jsx)(e.code,{children:"--server.port"}),"\u548c",(0,s.jsx)(e.code,{children:"--server.servlet.context-path"}),"\u542f\u52a8\u53c2\u6570\uff0c\u5982\u679c\u9879\u76ee\u7684",(0,s.jsx)(e.code,{children:"port"}),"\u548c",(0,s.jsx)(e.code,{children:"context-path"}),"\u4ee5\u6b64\u65b9\u5f0f\u542f\u52a8\uff0c\u5219\u9700\u8981\u4f7f\u7528Dynamic\u626b\u63cf\u6280\u672f\uff0c\u8fd9\u6837\u5728API\u8c03\u8bd5\u65f6\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u5f53\u524d\u53c2\u6570\u7684Host\u4fe1\u606f\u3002"]})}),"\n"]}),"\n"]})]})}function p(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},2863:(t,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/dynamic-refresh-298066baf819e3d27617f8755aefdde5.png"},1202:(t,e,i)=>{i.d(e,{Z:()=>s});const s="data:image/svg+xml;base64,PHN2ZyB0PSIxNzA0ODExMjAyOTIyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg4MjIiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTc1NC40IDQ5MC4ybC0xOTQuNy00MC40IDgzLjItMjgzLjEtMzczLjMgMzY3LjEgMTk0LjcgNDAuNC04My4yIDI4My4xIDM3My4zLTM2Ny4xeiIgZmlsbD0iI0ZGRDgxQSIgcC1pZD0iODgyMyI+PC9wYXRoPjwvc3ZnPg=="},9592:(t,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/static-refresh-349d3a44c0525d2cf5cc001d0257e38b.png"},1151:(t,e,i)=>{i.d(e,{Z:()=>o,a:()=>r});var s=i(7294);const n={},c=s.createContext(n);function r(t){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),s.createElement(c.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[640],{7002:function(e,t,i){i.d(t,{H:function(){return E}});var n=i(4316),a=i(1883),o=i(917);const l=(0,n.Z)("div",{target:"e1canbo63"})({name:"3ge2tn",styles:"width:100%;display:flex;flex-direction:column;margin-top:32px;padding:0 18px;@media (max-width: 428px){margin-top:18px;}"}),r=(0,n.Z)("div",{target:"e1canbo62"})({name:"1e8seb3",styles:"font-size:18px;font-weight:600;line-height:24px;color:#ff8982;margin-bottom:32px;padding:0 14px;@media (max-width: 428px){font-size:14px;line-height:20px;margin-bottom:18px;}"}),p=(0,n.Z)((e=>{let{active:t,...i}=e;return(0,o.tZ)(a.Link,i)}),{target:"e1canbo61"})("width:100%;line-height:44px;padding:0 14px;font-size:14px;font-weight:",(e=>{let{active:t}=e;return t?"600":"400"}),";color:",(e=>{let{active:t}=e;return t?"#C25450":"#504538"}),";background-color:",(e=>{let{active:t}=e;return t?"#f8ebe7":"none"}),";border-radius:10px;vertical-align:middle;text-decoration:none;overflow:hidden;text-overflow:ellipsis;transition:background-color 0.3s ease;&:hover{background-color:#f8ebe7;}@media (max-width: 428px){font-size:12px;line-height:40px;}"),c=(0,n.Z)("span",{target:"e1canbo60"})({name:"e8h9p3",styles:"font-size:12px;color:inherit;padding-left:4px;@media (max-width: 428px){font-size:10px;}"}),s=e=>{let{selectedCategory:t,categoryList:i}=e;return(0,o.tZ)(l,null,(0,o.tZ)(r,null,"Category"),Object.entries(i).map((e=>{let[i,n]=e;return(0,o.tZ)(p,{to:"/?category="+i,active:i===t,key:i},i,(0,o.tZ)(c,null,"(",n,")"))})))};var d=i(7294),x=i(8032);const h=(0,n.Z)(x.G,{target:"e10vfb9c0"})({name:"1d97vpt",styles:"width:112px;height:112px;margin-bottom:12px;border-radius:50%;@media (max-width: 428px){width:80px;height:80px;}"}),m=e=>{let{profileImage:t}=e;return(0,o.tZ)(h,{image:t,alt:"CheeseBall"})};const g=(0,n.Z)("a",{target:"e19yp4gk1"})({name:"1ohaaa7",styles:"width:36px;height:36px;border-radius:50%;background-color:#fff;display:flex;justify-content:center;align-items:center;@media (max-width: 428px){width:32px;height:32px;}"}),f=(0,n.Z)("img",{target:"e19yp4gk0"})({name:"15d7ciz",styles:"width:28px;height:28px;@media (max-width: 428px){width:24px;height:24px;}"}),u=e=>{let{link:t,image:i}=e;return(0,o.tZ)(g,{href:t,target:"_blank"},(0,o.tZ)(f,{src:i,alt:"icon"}))};const Z=(0,n.Z)("div",{target:"epqaili0"})({name:"1wesxqa",styles:"display:flex;gap:12px"}),w=()=>(0,o.tZ)(Z,null,(0,o.tZ)(u,{link:"https://github.com/CheeseB",image:"/icon/github.svg"}),(0,o.tZ)(u,{link:"https://www.instagram.com/malang_cheeseb/",image:"/icon/instagram.svg"}),(0,o.tZ)(u,{link:"mailto:2489ckckck@naver.com",image:"/icon/email.svg"}));var v=i(9458);const y=(0,n.Z)("div",{target:"e1bgzb722"})({name:"zy0kvu",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:338px;border-bottom:1px solid rgba(183, 169, 154, 0.3);@media (max-width: 428px){height:266px;}"}),b=(0,n.Z)(a.Link,{target:"e1bgzb721"})({name:"ac5lgj",styles:"font-weight:600;font-size:20px;line-height:30px;color:#504538;margin-bottom:4px;@media (max-width: 428px){font-size:16px;line-height:24px;}"}),k=(0,n.Z)("div",{target:"e1bgzb720"})({name:"1vdyk6k",styles:"font-weight:600;font-size:14px;line-height:20px;color:#a87564;margin-bottom:16px;@media (max-width: 428px){font-size:12px;line-height:18px;}"}),z=e=>{let{profileImage:t}=e;const{setOpen:i}=(0,d.useContext)(v.j)||{};return(0,o.tZ)(y,null,(0,o.tZ)(m,{profileImage:t}),(0,o.tZ)(b,{to:"/",onClick:()=>{i&&i(!1)}},"개발자맛 치즈볼"),(0,o.tZ)(k,null,"CheeseB"),(0,o.tZ)(w,null))},C=(0,n.Z)("nav",{target:"e5s4scl1"})("position:fixed;left:0;top:0;width:220px;height:calc(var(--vh, 1vh) * 100);z-index:5;overflow-y:scroll;background-color:#fff8ee;box-shadow:2px 0px 6px rgba(0, 0, 0, 0.1);-ms-overflow-style:none;scrollbar-width:none;transition:left 0.5s ease;&::-webkit-scrollbar{display:none;}@media (max-width: 1024px){left:",(e=>{let{isOpen:t}=e;return t?"0":"-220px"}),";box-shadow:none;}"),j=(0,n.Z)("div",{target:"e5s4scl0"})("display:none;width:100%;height:calc(var(--vh, 1vh) * 100);position:fixed;left:0;top:0;background:rgba(0, 0, 0, 0.3);z-index:4;@media (max-width: 1024px){display:",(e=>{let{isOpen:t}=e;return t?"block":"none"}),";}"),E=e=>{let{selectedCategory:t}=e;const{isOpen:i,setOpen:n}=(0,d.useContext)(v.j)||{};(0,d.useEffect)((()=>{document.body.style.overflow=i?"hidden":"scroll"}),[i]),(0,d.useEffect)((()=>{n&&n(!1)}),[t]);const l=(0,a.useStaticQuery)("2269898903"),r=(0,d.useMemo)((()=>l.allMarkdownRemark.edges.reduce(((e,t)=>{let{node:{frontmatter:{categories:i}}}=t;return i.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,o.tZ)(d.Fragment,null,(0,o.tZ)(C,{isOpen:i||!1},(0,o.tZ)(z,{profileImage:l.file.childImageSharp.gatsbyImageData}),(0,o.tZ)(s,{selectedCategory:t,categoryList:r})),(0,o.tZ)(j,{isOpen:i||!1,onClick:()=>n(!1)}))}},5109:function(e,t,i){i.d(t,{Y:function(){return b}});var n=i(4316),a=i(917);const o=(0,n.Z)("div",{target:"e1oae0v81"})({name:"n8krxy",styles:"width:1380px;margin:100px auto 50px;padding-left:220px;@media (max-width: 1440px){width:980px;}@media (max-width: 1024px){width:calc(100% - 96px);padding-left:0;}@media (max-width: 744px){width:calc(100% - 72px);}@media (max-width: 428px){width:calc(100% - 56px);}@media (max-width: 320px){width:calc(100% - 36px);}"}),l=(0,n.Z)("footer",{target:"e1oae0v80"})({name:"1hu157n",styles:"display:flex;justify-content:end;color:#b7a99a;width:100%;font-size:12px;line-height:30px;border-top:1px solid rgba(183, 169, 154, 0.3);align-self:flex-end"}),r=()=>(0,a.tZ)(o,null,(0,a.tZ)(l,null,"© CheeseB, Powered By Gatsby."));var p=i(5907),c=i(405),s=i(9458),d=i(7294);const x=(0,n.Z)("header",{target:"e1ke0ojz4"})({name:"n4ngez",styles:"position:fixed;left:0;top:0;z-index:3;display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;padding:0 48px;background-color:#fff8ee;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.1);transition:top 0.5s ease;@media (min-width: 1024px){top:-52px;box-shadow:none;}@media (max-width: 744px){padding:0 36px;}@media (max-width: 428px){height:42px;padding:0 28px;}@media (max-width: 320px){padding:0 18px;}"}),h=(0,n.Z)("button",{target:"e1ke0ojz3"})({name:"1nyrzhw",styles:"border:none;background-color:transparent;cursor:pointer"}),m=(0,n.Z)("img",{target:"e1ke0ojz2"})({name:"mm63dn",styles:"width:32px;height:32px;@media (max-width: 428px){width:24px;height:24px;}"}),g=(0,n.Z)("div",{target:"e1ke0ojz1"})({name:"w6502o",styles:"font-size:20px;line-height:30px;font-weight:800;color:#504538;position:relative;top:-2px;@media (max-width: 428px){font-size:14px;line-height:20px;}"}),f=(0,n.Z)("img",{target:"e1ke0ojz0"})({name:"1rag03g",styles:"width:40px;height:40px;@media (max-width: 428px){width:24px;height:24px;}"}),u=()=>{const{setOpen:e}=(0,d.useContext)(s.j)||{};return(0,a.tZ)(x,null,(0,a.tZ)(h,{onClick:()=>{e&&e((e=>!e))}},(0,a.tZ)(m,{src:"/icon/hamburger-button.svg",alt:"-"})),(0,a.tZ)(g,null,"개발자맛 치즈볼"),(0,a.tZ)(f,{src:"/profile-image-small.png"}))},Z=(0,n.Z)("div",{target:"eaiqoiu0"})("position:fixed;top:0;left:0;width:",(e=>{let{scrollWidth:t}=e;return t}),"%;height:4px;background-color:#fec479;z-index:10000;transition:width 0.3s ease;@media (max-width: 1024px){top:52px;}@media (max-width: 744px){height:2px;}@media (max-width: 428px){top:42px;}"),w=()=>{const{0:e,1:t}=(0,d.useState)(0),i=()=>{const e=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=window.scrollY;t(i/e*100)};return(0,d.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[]),(0,a.tZ)(Z,{scrollWidth:e})};const v=(0,n.Z)("main",{target:"e1strnqo1"})({name:"bgrp4n",styles:"display:flex;flex-direction:column;height:100%;min-height:calc(var(--vh, 1vh) * 100);overflow-x:hidden"}),y=(0,n.Z)("div",{target:"e1strnqo0"})({name:"1cagiq7",styles:"width:100%;flex:1"}),b=e=>{let{title:t,description:i,url:n,image:o,children:l}=e;return(0,a.tZ)(v,null,(0,a.tZ)(c.Helmet,null,(0,a.tZ)("title",null,t),(0,a.tZ)("meta",{name:"description",content:i}),(0,a.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.tZ)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,a.tZ)("meta",{property:"og:type",content:"website"}),(0,a.tZ)("meta",{property:"og:title",content:t}),(0,a.tZ)("meta",{property:"og:description",content:i}),(0,a.tZ)("meta",{property:"og:image",content:o}),(0,a.tZ)("meta",{property:"og:url",content:n}),(0,a.tZ)("meta",{property:"og:site_name",content:t}),(0,a.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,a.tZ)("meta",{name:"twitter:title",content:t}),(0,a.tZ)("meta",{name:"twitter:description",content:i}),(0,a.tZ)("meta",{name:"twitter:image",content:o}),(0,a.tZ)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/favicon/apple-icon-57x57.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/favicon/apple-icon-60x60.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/favicon/apple-icon-72x72.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/favicon/apple-icon-76x76.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/favicon/apple-icon-114x114.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/favicon/apple-icon-120x120.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/favicon/apple-icon-144x144.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/favicon/apple-icon-152x152.png"}),(0,a.tZ)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-icon-180x180.png"}),(0,a.tZ)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicon/android-icon-192x192.png"}),(0,a.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,a.tZ)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon/favicon-96x96.png"}),(0,a.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,a.tZ)("link",{rel:"manifest",href:"/favicon/manifest.json"}),(0,a.tZ)("meta",{name:"msapplication-TileColor",content:"#FEC479"}),(0,a.tZ)("meta",{name:"msapplication-TileImage",content:"/favicon/ms-icon-144x144.png"}),(0,a.tZ)("meta",{name:"theme-color",content:"#FEC479"}),(0,a.tZ)("meta",{name:"google-site-verification",content:"QxP8HV3avuS-TynhxJcJZBJnyXaInJHSmpLvXF9PiWU"}),(0,a.tZ)("meta",{name:"naver-site-verification",content:"ae65cb659d9c9ea1ae78b5b3cf6745526fe8ef8d"}),(0,a.tZ)("html",{lang:"ko"})),(0,a.tZ)(p.Z,null),(0,a.tZ)(u,null),(0,a.tZ)(w,null),(0,a.tZ)(y,null,l),(0,a.tZ)(r,null))}}}]);
//# sourceMappingURL=d0dcf9c1039535d44ee74defc829dfbf62dac3c5-dbbd6717ed631b9bcbdf.js.map
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{4875:function(e,t,r){r.r(t),r.d(t,{default:function(){return re}});var n={};r.r(n),r.d(n,{exclude:function(){return X},extract:function(){return P},parse:function(){return _},parseUrl:function(){return D},pick:function(){return T},stringify:function(){return B},stringifyUrl:function(){return M}});var i=r(7462),a=r(4316),o=r(7294),s=r(1883),l=r(8032),p=r(917);const c=(0,a.Z)(s.Link,{target:"e1eg5kak8"})({name:"1qtgpz6",styles:"position:relative;top:0px;display:flex;flex-direction:column;border-radius:10px;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.2);cursor:pointer;transition:top 0.2s ease;&:hover{top:-5px;}"}),d=(0,a.Z)(l.G,{target:"e1eg5kak7"})({name:"1bn85ei",styles:"width:100%;height:220px;border-radius:10px 10px 0 0;@media (max-width: 1024px){height:184px;}@media (max-width: 320px){height:140px;}"}),u=(0,a.Z)("div",{target:"e1eg5kak6"})({name:"wtksym",styles:"flex:1;display:flex;flex-direction:column;justify-content:space-between;padding:14px;gap:14px;@media (max-width: 1024px){gap:12px;}@media (max-width: 320px){padding:10px;gap:10px;}"}),m=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"cl7urv",styles:"display:flex;flex-wrap:wrap;gap:8px"}),x=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"tn9ry8",styles:"font-size:14px;line-height:20px;font-weight:600;padding:2px 8px;border-radius:4px;background-color:#ffeccc;color:#402e32;@media (max-width: 1024px){font-size:12px;line-height:18px;}@media (max-width: 320px){font-size:10px;line-height:16px;}"}),f=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"15hzv2l",styles:"display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:18px;font-weight:600;line-height:24px;color:#402e32;@media (max-width: 1024px){font-size:16px;line-height:22px;}@media (max-width: 320px){font-size:14px;line-height:20px;}"}),g=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1h62ke9",styles:"display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:14px;line-height:20px;color:#b7a99a;@media (max-width: 1024px){font-size:12px;line-height:18px;}@media (max-width: 320px){font-size:10px;line-height:16px;}"}),h=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1eoy87d",styles:"display:flex;justify-content:space-between"}),y=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"u8xzwi",styles:"font-size:12px;line-height:16px;color:#504538;@media (max-width: 1024px){font-size:10px;line-height:14px;}@media (max-width: 320px){font-size:8px;line-height:12px;}"}),b=e=>{let{title:t,date:r,categories:n,summary:i,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:o}=e;return(0,p.tZ)(c,{to:o},(0,p.tZ)(d,{image:a,alt:"Post Item Image"}),(0,p.tZ)(u,null,(0,p.tZ)(m,null,n.map((e=>(0,p.tZ)(x,{key:e},e)))),(0,p.tZ)(f,null,t),(0,p.tZ)(g,null,i),(0,p.tZ)(h,null,(0,p.tZ)(y,null,r))))};const w=(0,a.Z)("div",{target:"es8e92y2"})({name:"cytt9r",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:18px;width:1020px;margin:0 auto;padding-left:220px;@media (max-width: 1440px){width:920px;}@media (max-width: 1024px){width:700px;padding-left:0;}@media (max-width: 744px){width:100%;padding:0 36px;grid-gap:12px;}@media (max-width: 428px){padding:0 28px;grid-template-columns:1fr;}@media (max-width: 320px){padding:0 18px;}"}),k=(0,a.Z)("div",{target:"es8e92y1"})({name:"1yao7m5",styles:"margin:80px auto 70px;padding-left:220px;text-align:center;@media (max-width: 1024px){padding-left:0;margin-top:132px;}@media (max-width: 428px){margin:86px auto 50px;}"}),v=(0,a.Z)("span",{target:"es8e92y0"})({name:"npmumk",styles:"display:inline-block;font-size:20px;line-height:50px;font-weight:800;color:#c25450;border-bottom:1px solid #ff8982;padding:0 60px;@media (max-width: 428px){font-size:16px;line-height:40px;padding:0 40px;}@media (max-width: 320px){font-size:14px;line-height:30px;padding:0 30px;}"}),Z=e=>{let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:a}=((e,t)=>{const r=(0,o.useRef)(null),n=(0,o.useRef)(null),{0:i,1:a}=(0,o.useState)(1),s=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,o.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(a((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((()=>a(1)),[e]),(0,o.useEffect)((()=>{10*i>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:s.slice(0,10*i)}})(t,r);return(0,p.tZ)(o.Fragment,null,(0,p.tZ)(k,null,(0,p.tZ)(v,null,"All"===t?"전체 게시글":t)),(0,p.tZ)(w,{ref:n},a.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,p.tZ)(b,(0,i.Z)({},n,{link:r,key:t}))}))))},j="%[a-f0-9]{2}",F=new RegExp("("+j+")|([^%]+?)","gi"),z=new RegExp("("+j+")+","gi");function I(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],I(r),I(n))}function O(e){try{return decodeURIComponent(e)}catch{let t=e.match(F)||[];for(let r=1;r<t.length;r++)t=(e=I(t,r).join("")).match(F)||[];return e}}function S(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=z.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=O(r[0]);e!==r[0]&&(t[r[0]]=e)}r=z.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const i of n)e=e.replace(new RegExp(i,"g"),t[i]);return e}(e)}}function E(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function R(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);if(i.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,i)}}return r}const C=Symbol("encodeFragmentIdentifier");function A(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function N(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(e):e}function $(e,t){return t.decode?S(e):e}function U(e){return Array.isArray(e)?e.sort():"object"==typeof e?U(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function L(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function q(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function P(e){const t=(e=L(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function _(e,t){A((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const i="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!i&&$(r,e).includes(e.arrayFormatSeparator);r=a?$(r,e):r;const o=i||a?r.split(e.arrayFormatSeparator).map((t=>$(t,e))):null===r?r:$(r,e);n[t]=o};case"bracket-separator":return(t,r,n)=>{const i=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!i)return void(n[t]=r?$(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>$(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const i of e.split("&")){if(""===i)continue;const e=t.decode?i.replace(/\+/g," "):i;let[a,o]=E(e,"=");void 0===a&&(a=e),o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:$(o,t),r($(a,t),o,n)}for(const[i,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=q(r,t);else n[i]=q(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=U(r):e[t]=r,e}),Object.create(null))}function B(e,t){if(!e)return"";A((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[N(t,e),"[",i,"]"].join("")]:[...r,[N(t,e),"[",N(i,e),"]=",N(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[N(t,e),"[]"].join("")]:[...r,[N(t,e),"[]=",N(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[N(t,e),":list="].join("")]:[...r,[N(t,e),":list=",N(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length?[[N(r,e),t,N(i,e)].join("")]:[[n,N(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,N(t,e)]:[...r,[N(t,e),"=",N(n,e)].join("")]}}(t),i={};for(const[o,s]of Object.entries(e))r(o)||(i[o]=s);const a=Object.keys(i);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const i=e[r];return void 0===i?"":null===i?N(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?N(r,t)+"[]":i.reduce(n(r),[]).join("&"):N(r,t)+"="+N(i,t)})).filter((e=>e.length>0)).join("&")}function D(e,t){t={decode:!0,...t};let[r,n]=E(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:_(P(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:$(n,t)}:{}}}function M(e,t){t={encode:!0,strict:!0,[C]:!0,...t};const r=L(e.url).split("?")[0]||"";let n=B({..._(P(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let i=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,i=t[C]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${i}`}function T(e,t,r){r={parseFragmentIdentifier:!0,[C]:!1,...r};const{url:n,query:i,fragmentIdentifier:a}=D(e,r);return M({url:n,query:R(i,t),fragmentIdentifier:a},r)}function X(e,t,r){return T(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var G=n,H=r(8514),K=r(4211);const Y=(0,a.Z)("div",{target:"etirylg3"})({name:"1e44c70",styles:"position:relative;width:1028px;height:calc(var(--vh, 1vh) * 100);margin:0 auto;padding-left:220px;@media (max-width: 1024px){width:100%;padding:0 48px;}@media (max-width: 744px){padding:0 36px;}@media (max-width: 428px){width:70%;padding:0;}"}),J=(0,a.Z)("div",{target:"etirylg2"})({name:"13fsjgw",styles:"width:100%;height:100%;background-image:url('/main.webp');background-repeat:no-repeat;background-position:center;background-size:contain;@media (max-width: 428px){background-image:url('/main-vertical.webp');}"}),Q=(0,a.Z)("div",{target:"etirylg1"})({name:"oz3jw7",styles:"position:absolute;bottom:84px;font-size:24px;color:#fec479;line-height:34px;left:calc(50% + 110px);transform:translateX(-50%);@media (max-width: 1024px){left:50%;}@media (max-width: 428px){font-size:16px;line-height:24px;bottom:56px;}@media (max-width: 320px){font-size:14px;line-height:20px;bottom:40px;}"}),V=(0,a.Z)("img",{target:"etirylg0"})({name:"z7a87x",styles:"position:absolute;width:50px;height:50px;left:calc(50% + 110px);transform:translateX(-50%);-webkit-animation:bounce 1s infinite;animation:bounce 1s infinite;@-webkit-keyframes bounce{0%{bottom:38px;}50%{bottom:30px;}100%{bottom:38px;}}@keyframes bounce{0%{bottom:38px;}50%{bottom:30px;}100%{bottom:38px;}}@media (max-width: 1024px){left:50%;}@media (max-width: 428px){width:32px;height:32px;@-webkit-keyframes bounce{0%{bottom:28px;}50%{bottom:20px;}100%{bottom:28px;}}@keyframes bounce{0%{bottom:28px;}50%{bottom:20px;}100%{bottom:28px;}}}@media (max-width: 320px){width:28px;height:28px;@-webkit-keyframes bounce{0%{bottom:20px;}50%{bottom:12px;}100%{bottom:20px;}}@keyframes bounce{0%{bottom:20px;}50%{bottom:12px;}100%{bottom:20px;}}}"}),W=()=>(0,p.tZ)(Y,null,(0,p.tZ)(J,null),(0,p.tZ)(Q,null,"Scroll"),(0,p.tZ)(V,{src:"/icon/down.svg"}));var ee=r(8208),te=r(5177);var re=e=>{let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:i}},allMarkdownRemark:{edges:a},file:{publicURL:o}}}=e;const s=G.parse(t),l=!s.category||"string"!=typeof s.category,c=l?"All":s.category,d=(0,ee.Z)();return(0,p.tZ)(H.Y,{title:r,description:n,url:i,image:o},d&&(0,p.tZ)(te.Z,null),(0,p.tZ)(K.H,{selectedCategory:c}),l&&(0,p.tZ)(W,null),(0,p.tZ)(Z,{selectedCategory:c,posts:a}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-40a883c490712bc5f16d.js.map
if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const o=e=>r(e,n),f={module:{uri:n},exports:t,require:o};i[n]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"cb9adee3936fb4852c84c441dffefba9"},{url:"app.js",revision:"4937133c00a339a46b2bc3da6a35e401"},{url:"helpers.js",revision:"a8402ec0a5bb61271586c77e29c0473b"},{url:"icon.png",revision:"93944143dc8d7f9b3da5ffc7c7bc1e4d"},{url:"index.html",revision:"048a1b49ec54008928a7ff32a080e398"},{url:"manifest.webmanifest",revision:"f7150f9625233afca7cb6977a0cb012f"},{url:"style.css",revision:"0588670e11067d3e0e4af057e8ee80bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

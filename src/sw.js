if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const o=e=>c(e,n),d={module:{uri:n},exports:t,require:o};i[n]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(s(...e),t)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"cb9adee3936fb4852c84c441dffefba9"},{url:"app.js",revision:"22ece3fb0e518a1e8f6359cc569d399d"},{url:"helpers.js",revision:"a8402ec0a5bb61271586c77e29c0473b"},{url:"icon.png",revision:"93944143dc8d7f9b3da5ffc7c7bc1e4d"},{url:"index.html",revision:"7dd6b1f8d2e1de1dc4d17a8bf56554a9"},{url:"manifest.webmanifest",revision:"c6ace11beaa9715d3c269cca2a72c7b2"},{url:"style.css",revision:"0588670e11067d3e0e4af057e8ee80bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

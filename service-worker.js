!function(){"use strict";const e=1617205801897,t=`cache${e}`,n=["/client/client.4a563851.js","/client/inject_styles.5607aec6.js","/client/index.f8df21d9.js","/client/constants.47ea52f8.js","/client/PlusIcon.3b3dcd4b.js","/client/[id].618234aa.js","/client/Button.b75eaf21.js","/client/[id].0c56877e.js"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/logo-192.png","/logo-512.png","/logo-maskable.png","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();

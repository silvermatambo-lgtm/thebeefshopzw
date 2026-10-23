// Independent offline shell; online checkout and WhatsApp remain network-dependent.
const CACHE="the-beef-shop-shell-v2";
const ASSETS=["/","/index.html","/styles/site.css","/scripts/main.js","/scripts/catalog.js","/scripts/cart.js","/scripts/chatbot.js","/assets/beef-shop-logo.webp","/manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==location.origin)return;e.respondWith(fetch(e.request).then(res=>{if(res.ok&&u.pathname!=="/sw.js")caches.open(CACHE).then(c=>c.put(e.request,res.clone()));return res;}).catch(()=>caches.match(e.request).then(r=>r||caches.match("/index.html"))));});

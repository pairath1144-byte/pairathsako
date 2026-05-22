const CACHE_NAME='sako-supervision-v1';
const ASSETS=['./','./index.html','./manifest.json','./assets/icon.svg','./assets/logo.jpeg','./assets/director-blue.jpeg','./assets/supervisor-black.jpeg','./assets/dashboard-reference.jpeg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy)).catch(()=>{});return res}).catch(()=>caches.match(e.request).then(res=>res||caches.match('./index.html'))))});

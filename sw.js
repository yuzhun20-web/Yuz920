
const CACHE = 'ronin-reader-cat-toolbar-v1758360263';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll([
    './','./index.html','./settings.html','./styles.css','./script.js','./config.js','./manifest.json',
    './icons/icon-192.png','./icons/icon-512.png','./assets/novel_chapters.csv','./assets/images/logo.png'
  ])));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

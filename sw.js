const cacheName = 'v1';
const cacheAssets = [
  './index.html',
  './css/bootstrap.min.css',
  './css/all.min.css',
  './css/style.css',
  './css/media.css',
  './js/bootstrap.bundle.min.js',
  './js/script.js',
  './images/favicon.png',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
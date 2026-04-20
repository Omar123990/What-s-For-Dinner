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
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Service Worker: Caching Files');
      return cache.addAll(cacheAssets);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    fetch(e.request)
      .catch(() => caches.match(e.request))
  );
});
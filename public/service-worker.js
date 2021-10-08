const deCache = false;
const CACHE_NAME = 'pwa-cache';

self.addEventListener('activate', (event) => {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhiteList.includes(key)) {
            console.log('Deleting cache:', key);
            return caches.delete(key);
          }
          return keyList;
        })
      )
    )
  );
});

self.addEventListener('install', (event) => {
  if (deCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        fetch('manifest.json')
          .then((response) => {
            response.json();
          })
          .then((assets) => {
            const urlsToCache = ['/', assets['bundle.js']];
            cache.addAll(urlsToCache);
            console.log('cached');
          });
      })
    );
  }
});

self.addEventListener('fetch', (event) => {
  if (deCache) {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => response || fetch(event.request))
    );
  }
});

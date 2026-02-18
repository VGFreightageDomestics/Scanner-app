self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('vg-store').then((cache) => cache.addAll([
      '/Scanner-app/',
      '/Scanner-app/index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

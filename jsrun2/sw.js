self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/jsrun2/',
       '/jsrun2/index.html',
       '/jsrun2/index.js',
       '/jsrun2/images/pirate_PNG90.png',
       'https://www.w3schools.com/w3css/4/w3.css',
       'https://www.w3schools.com/lib/w3.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
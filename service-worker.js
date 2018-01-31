var CACHE_NAME = 'static-cache';
var urlsToCache = [
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '.',
  '/restaurant.html',
  '/css/styles.css',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
];

self.addEventListener('fetch', catchFetch);

function catchFetch(event) {
if(event.request.url.startsWith("http://localhost:8000")){
  console.log({url:event.request.url})
  event.respondWith(
    caches.match(event.request)
  );}
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

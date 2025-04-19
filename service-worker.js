const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
"/",
"/index.html",
"/styles.css",
"/app.js",
"/destinations.html",
"/blog.html",
"/contact.html",
"/gallery.html",
"login.html",
"/packages.html",
"/register.html",
"/reviews.html",
"/script.js",
"/images/andamn.webp",
"./images/bali.webp",
"./images/logo.webp",
"./images/beach.webp",
"./images/darjeeling.webp",
"./images/dharamshala.webp",
"./images/dubai.webp",
"./images/goa.webp",
"./images/goa1.webp",
"./images/goa2.webp",
"./images/hero.webp",
"./images/jaipur.webp",
"./images/kerala.webp",
"./images/kerala1.webp",
"./images/kerala2.webp",
"./images/ladakh.webp",
"./images/ladakh1.webp",
"./images/ladakh2.webp",
"./images/mountain.webp",
"./images/rishikesh.webp",
"./images/taj-mahal.webp"
];
// Install event: Caches the assets
self.addEventListener("install", (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
console.log("Caching assets");
return cache.addAll(urlsToCache);
})
);
});
// Fetch event: Serves cached assets
self.addEventListener("fetch", (event) => {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
})
);
});
// Activate event: Clears old caches
self.addEventListener("activate", (event) => {
event.waitUntil(
caches.keys().then((cacheNames) => {
return Promise.all(
cacheNames.map((cache) => {
if (cache !== CACHE_NAME) {
console.log("Deleting old cache:", cache);
return caches.delete(cache);
}
})
);
})
);
});

// تخزين الملفات في الـ Cache لتعمل الصفحة Offline
const CACHE_NAME = "offline-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png"
];

// عند التثبيت
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  console.log("📦 Service Worker تم تثبيته وتخزين الملفات");
});

// عند طلب أي ملف
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


const CACHE_NAME = 'cache-v1';

const FILES_TO_CACHE = [
  '/offline.html',
];

self.addEventListener('install', (evt) => {
  // 將需要用到的靜態檔案cache起來
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  // 如果有舊版本的cache，將它清掉
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  // 只針對 request.mode 是 navigate 的處理 (網頁換頁時)
  if (evt.request.mode !== 'navigate') {
    return;
  }
  // 直接送 request 打 API，如果沒有成功則顯示offline畫面
  evt.respondWith(
    fetch(evt.request)
      .catch(() => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.match('/offline.html');
          });
      })
  );
});

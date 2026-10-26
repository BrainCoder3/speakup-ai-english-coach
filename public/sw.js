/* SpeakUp service worker: pages and files you have opened keep working offline. */
const CACHE = "speakup-v1";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

async function fromNetwork(request) {
  const response = await fetch(request);
  if (response.ok) {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, copy));
  }
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  // The AI server and other sites are never cached.
  if (request.method !== "GET" || url.origin !== self.location.origin || url.pathname.includes("/api/")) return;
  const immutable = url.pathname.includes("/_next/static/");
  event.respondWith(
    immutable
      ? caches.match(request).then((hit) => hit || fromNetwork(request))
      : fromNetwork(request).catch(() => caches.match(request).then((hit) => hit || caches.match(self.registration.scope))),
  );
});

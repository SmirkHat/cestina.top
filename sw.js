const CACHE = 'cestina-v1';
const ASSETS = [
	'/',
	'/style.css',
	'/script.js',
	'/favicon.ico',
	'/mneMe.png',
	'/jiJi.png',
	'/tip.png',
	'/holdHolt.png',
	'/bysme.png'
];

// Install - cache core assets
self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(CACHE).then(cache => cache.addAll(ASSETS))
	);
	self.skipWaiting();
});

// Activate - clean old caches
self.addEventListener('activate', e => {
	e.waitUntil(
		caches.keys().then(keys =>
			Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
		)
	);
	self.clients.claim();
});

// Fetch - network first, fallback to cache
self.addEventListener('fetch', e => {
	// Skip non-GET and cross-origin requests
	if (e.request.method !== 'GET') return;
	if (!e.request.url.startsWith(self.location.origin)) return;

	// Skip YouTube embeds
	if (e.request.url.includes('youtube')) return;

	e.respondWith(
		fetch(e.request)
			.then(res => {
				const clone = res.clone();
				caches.open(CACHE).then(cache => cache.put(e.request, clone));
				return res;
			})
			.catch(() => caches.match(e.request))
	);
});

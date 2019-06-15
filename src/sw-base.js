/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded ðŸŽ‰`);

    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/,
        workbox.strategies.cacheFirst({
            cacheName: 'googleapis',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 30 * 24 * 60 * 60
                })
            ],
            networkTimeoutSeconds: 3
        })
    );

    const imageHandler = workbox.strategies.cacheFirst({
        cacheName: 'images-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
            new workbox.expiration.Plugin({
                maxEntries: 150,
                maxAgeSeconds: 2 * 24 * 60 * 60
            })
        ]
    });

    workbox.routing.registerRoute('/', workbox.strategies.networkFirst());

    workbox.routing.registerRoute(/.*(apwcontent)\.com.*$/, args => {
        return imageHandler.handle(args)
    });

    workbox.routing.registerRoute(/.*(apw21)\.com.*$/, args => {
        return imageHandler.handle(args)
    });

    const apiHandler = workbox.strategies.staleWhileRevalidate({
        cacheName: 'data-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
            new workbox.expiration.Plugin({
                maxEntries: 20
            })
        ],
    });

    workbox.routing.registerRoute(/.*(usautoparts)\.com.*$/, args => {
        return apiHandler.handle(args).then(response => {
            if (!response) {
                return new Response(JSON.stringify({ sw_error_type: 'SUCC007' }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            } else if (response.status === 404) {
                return caches.match('pages/404.html');
            } else if (response.status === 500) {
                return caches.match('pages/404.html');
            }
            return response;
        });
    })

} else {
    console.log(`Boo! Workbox didn't load ðŸ˜¬`);
}

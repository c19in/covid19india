if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"6ac822f30c30bb971f8687b052b49d39","url":"404.html"},{"revision":"afc78a01afc6d9a7b63c5daab37dd5af","url":"c659e8ad0bd30d160901.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"6ac822f30c30bb971f8687b052b49d39","url":"index.html"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"1d23272d3465feea3a6d8066dbff23a3","url":"static/css/20.bded3b46.chunk.css"},{"revision":"f82b35bcf907b604ecc67ed2d2c75c65","url":"static/css/21.371c3fc8.chunk.css"},{"revision":"85f44499c3d52ebd6256ee53982ddf27","url":"static/js/0.6b6d08a1.chunk.js"},{"revision":"c74959eebcd281f5c9800f0cd339f2d5","url":"static/js/1.b23230ab.chunk.js"},{"revision":"d947ae2bac44ac4a3090badc16503562","url":"static/js/11.3c92a324.chunk.js"},{"revision":"1e0d3790e07ef38090681d5a3daf406f","url":"static/js/12.ca1168cb.chunk.js"},{"revision":"79bcb16cfeca343a4ca3d943cadd51ea","url":"static/js/13.578d3dea.chunk.js"},{"revision":"050e34bd7fc25871df4733daa81810a9","url":"static/js/14.60866c7b.chunk.js"},{"revision":"0be9b031c1e6ba9536056cc4d244dfe0","url":"static/js/15.91a80f46.chunk.js"},{"revision":"4f2434c0feb9d9db4155c786fc2134c6","url":"static/js/16.73bfd4ee.chunk.js"},{"revision":"6e7430a4d11b14d943ae987edbbcdda3","url":"static/js/17.5eca191b.chunk.js"},{"revision":"b93b83cbb4104b30686bb22678742f81","url":"static/js/18.5f07dc3d.chunk.js"},{"revision":"e3b83f9a667a31d26d8ec59f0396ea7a","url":"static/js/19.7397516f.chunk.js"},{"revision":"21915278131b506bb30ee7c764e5ca2c","url":"static/js/2.afb350de.chunk.js"},{"revision":"23e696ce3df66a08128f2f877b0a496f","url":"static/js/20.4f9bf0c1.chunk.js"},{"revision":"f959fb7a17319f7ef3b8beaa88f5de8c","url":"static/js/21.3af624ed.chunk.js"},{"revision":"4229f8b337a4a6f9081e8e9bec9b56d4","url":"static/js/22.6ecaf9ce.chunk.js"},{"revision":"90c469cc826b8693325eb7f066baef34","url":"static/js/23.494afe5b.chunk.js"},{"revision":"7899b3a5ad72f812ede1683d2de42fa4","url":"static/js/24.27027b32.chunk.js"},{"revision":"def4245025b8a6ce84f10c4eabe27532","url":"static/js/25.caf9520d.chunk.js"},{"revision":"53ea37e0c4378e64ccfc727711b247f6","url":"static/js/26.287986ea.chunk.js"},{"revision":"216b24e3a90c381bb330a23b04861d39","url":"static/js/27.6cc0380d.chunk.js"},{"revision":"49b6456a7e17177f86f116a31f0762a3","url":"static/js/28.74aa0529.chunk.js"},{"revision":"7190661016ee39f8e0cf8807d015aa7a","url":"static/js/29.ef220a6a.chunk.js"},{"revision":"9293bfcc845523f05463f2745b62c926","url":"static/js/3.40b17fe9.chunk.js"},{"revision":"5c87c643d0254f96581b3bce610aa4af","url":"static/js/30.411807d9.chunk.js"},{"revision":"776a0b5aa4653e256fde050221f29861","url":"static/js/31.bc57e9f9.chunk.js"},{"revision":"3faaeb3baa8df4a37d38d1334417eef4","url":"static/js/32.5cc0808c.chunk.js"},{"revision":"d43d1801a8ab3b8ce0d643f805506f12","url":"static/js/33.0bf388ee.chunk.js"},{"revision":"822985a8febdbdf9ddd762f9a1344942","url":"static/js/34.491fe668.chunk.js"},{"revision":"61a145bd06a841b080c7882da21943ec","url":"static/js/35.6f1ee315.chunk.js"},{"revision":"675b93bf7d344ceb7a9fe4b596edba9b","url":"static/js/36.1f06f076.chunk.js"},{"revision":"a0bd782701e06fd25f7773c7f38a6364","url":"static/js/37.411d2867.chunk.js"},{"revision":"4b13bbbe586253a235bc69b63fd0ecc5","url":"static/js/38.c2367677.chunk.js"},{"revision":"337a3420e929df289b3d05b9e7923ea5","url":"static/js/39.0256f5f7.chunk.js"},{"revision":"aacd7483aa5b3b55017e1292fbd5cc34","url":"static/js/4.9645c405.chunk.js"},{"revision":"364a2b6536c32fa6c116521e34224e35","url":"static/js/40.aab07f57.chunk.js"},{"revision":"392e422562afa3cab62344871c039f48","url":"static/js/41.42fb98dd.chunk.js"},{"revision":"62a78927c45ee7725d63526260b7ff08","url":"static/js/42.8329f39d.chunk.js"},{"revision":"2f7b9e299fd5b55de6a7b65df3fee513","url":"static/js/43.e8401283.chunk.js"},{"revision":"ed7a67c0b3ff9efd42fc2078476ff301","url":"static/js/44.f6f160eb.chunk.js"},{"revision":"b97f1324e0595aacafbe2b2762aba7f9","url":"static/js/45.253e6bc1.chunk.js"},{"revision":"9f9d433b24d816c2e1c503045114de23","url":"static/js/5.618c4bbd.chunk.js"},{"revision":"639e7bf93b78bee8abe13ba25a18d072","url":"static/js/6.3a604bf6.chunk.js"},{"revision":"634d1b72ac83b832048bc482eb61ee1d","url":"static/js/7.b59fd4bc.chunk.js"},{"revision":"be071d042a4d61c5611aef6a6b6d7ae1","url":"static/js/8.f098f14e.chunk.js"},{"revision":"e42a0403eb158d068eee0feed5cdb872","url":"static/js/main.0986d4d6.chunk.js"},{"revision":"fa22686917a0a8960609b96aa2d8db20","url":"static/js/runtime-main.0c38e417.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}

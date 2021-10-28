if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"9f8f84f02b3a20285e18e8a68937201b","url":"404.html"},{"revision":"afc78a01afc6d9a7b63c5daab37dd5af","url":"c659e8ad0bd30d160901.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"9f8f84f02b3a20285e18e8a68937201b","url":"index.html"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"1d23272d3465feea3a6d8066dbff23a3","url":"static/css/20.bded3b46.chunk.css"},{"revision":"f82b35bcf907b604ecc67ed2d2c75c65","url":"static/css/21.371c3fc8.chunk.css"},{"revision":"3b5c8fcd13639df76e28cfb4098fe822","url":"static/js/0.1ef30ce3.chunk.js"},{"revision":"7d3a8342fed6a85a27e8e3d5e1781fa1","url":"static/js/1.804ee4ef.chunk.js"},{"revision":"b3704edd32009ff77eea5bdf7530de81","url":"static/js/11.3888f6b3.chunk.js"},{"revision":"e937af32495e6ae23149759f67298fae","url":"static/js/12.9018940c.chunk.js"},{"revision":"51eaedc4c8c4da9ba9205204e42ac41e","url":"static/js/13.acb58849.chunk.js"},{"revision":"ab1b22d9098164679e6d97851ef6e649","url":"static/js/14.e76ad866.chunk.js"},{"revision":"9aef2e06eae894c66aeeed404d00e05f","url":"static/js/15.a04136af.chunk.js"},{"revision":"8dc91446c76d9b80af70a8becfd64da7","url":"static/js/16.a396e3df.chunk.js"},{"revision":"56256418c3592f98b7bfa8aa689ae4d4","url":"static/js/17.57297c3c.chunk.js"},{"revision":"11792c6a624f100496015371b5d3cb0e","url":"static/js/18.4a1ae14e.chunk.js"},{"revision":"05d8e51ef3c9fec39406fc8eecf9ce1d","url":"static/js/19.a72e74a7.chunk.js"},{"revision":"4aa49d95d07bb8f03ff17f654c843279","url":"static/js/2.5857a2a1.chunk.js"},{"revision":"4af7356356836ba3695330f01c4a9f91","url":"static/js/20.7ec63c4f.chunk.js"},{"revision":"ae686b6e5f3370dd5739f3732520f0db","url":"static/js/21.24050d76.chunk.js"},{"revision":"5ccb2fe7658fb2b04f5a742bc0b25e8c","url":"static/js/22.7f984a7b.chunk.js"},{"revision":"7e05b72abb7670cf16ff2b117318540a","url":"static/js/23.da32b055.chunk.js"},{"revision":"06ee70453cf3d35859973c5b669215d9","url":"static/js/24.91fbbefb.chunk.js"},{"revision":"e9b6cea9dd7915dd69f1d2267072b435","url":"static/js/25.5c152f63.chunk.js"},{"revision":"11f6c41c5c83162c3298a4a43cd9acbe","url":"static/js/26.89b34eaf.chunk.js"},{"revision":"0946fa6df1ccf5d7a5018703a8557695","url":"static/js/27.1d8e7b64.chunk.js"},{"revision":"16216c402a854c987ca2edaa24ac0c9d","url":"static/js/28.a9a5598e.chunk.js"},{"revision":"e95cbd3dc6c80935a46888ffa40ac456","url":"static/js/29.3a264ff1.chunk.js"},{"revision":"25a465d3ad0a6fed2c347cd012792829","url":"static/js/3.cead407c.chunk.js"},{"revision":"05652923cfadf74ed6301bcff0aa226a","url":"static/js/30.330b8965.chunk.js"},{"revision":"afce02ac23ceef28a79c81fdd6f1be8e","url":"static/js/31.50fcc9c8.chunk.js"},{"revision":"1eb2a25a042814de86f763109787d936","url":"static/js/32.3abb1a62.chunk.js"},{"revision":"ce39767cbf73bd7953300a6d71083eda","url":"static/js/33.071ef9d5.chunk.js"},{"revision":"6f1e86ebb9d4300135ba910d06987e77","url":"static/js/34.4395f11e.chunk.js"},{"revision":"2cdafc06443dd716eda4dc396520de72","url":"static/js/35.5b4071ba.chunk.js"},{"revision":"b269b5741f1ed4afc50fc4fcea12b3da","url":"static/js/36.33df04b0.chunk.js"},{"revision":"0165ce161e22c5289a2d4753b5181b21","url":"static/js/37.02006e6d.chunk.js"},{"revision":"2668bf8700988c365e0c8d37624dbedb","url":"static/js/38.aa69a467.chunk.js"},{"revision":"2b78f356960e1950f26234c492f6953a","url":"static/js/39.6cc92a3d.chunk.js"},{"revision":"891dea8b75c764ec5b2936d9adf685ff","url":"static/js/4.bda6d45f.chunk.js"},{"revision":"eab1ebb8b3728284d74fa6400a41828c","url":"static/js/40.2bde231b.chunk.js"},{"revision":"393be9e9186b76119a31052b9ac0d704","url":"static/js/41.78e4beaf.chunk.js"},{"revision":"1f3ef889aec0f8f26e46547f676cbda3","url":"static/js/42.78c65241.chunk.js"},{"revision":"ef7c743301cd751b3b00c8968a896fa4","url":"static/js/43.57c23807.chunk.js"},{"revision":"b5ffa6f2d1cea8d7075a0fd79d873b2d","url":"static/js/44.b078e803.chunk.js"},{"revision":"a1874b90717e1d3f58a817f3136538a4","url":"static/js/45.8ea902a1.chunk.js"},{"revision":"b5bd72c967f561092b1fac1fe551d686","url":"static/js/5.8e367786.chunk.js"},{"revision":"e89d4218f79eb18684382f32878b59d8","url":"static/js/6.093421a0.chunk.js"},{"revision":"1b88e63cd16f5f659cf5d0a7c482031a","url":"static/js/7.4cd80f1d.chunk.js"},{"revision":"030ab39938e8b9eb20a3b3ce310c0878","url":"static/js/8.9312d052.chunk.js"},{"revision":"b89b83573897ebaa69799784675b64be","url":"static/js/main.b8a78e75.chunk.js"},{"revision":"7efd1b62dfb2bb14060d2318d74dfd0e","url":"static/js/runtime-main.43e69f9b.js"}]);

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

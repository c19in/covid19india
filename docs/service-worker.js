if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"73f5d31e52232395c19362fcb04598b2","url":"404.html"},{"revision":"afc78a01afc6d9a7b63c5daab37dd5af","url":"c659e8ad0bd30d160901.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"73f5d31e52232395c19362fcb04598b2","url":"index.html"},{"revision":"0f451eaa34102d0646cd42434affd8a0","url":"static/css/19.bded3b46.chunk.css"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"af5d5eca98c8633059b4836595f94888","url":"static/css/20.371c3fc8.chunk.css"},{"revision":"804c1607b5376fedb9d4848df364883e","url":"static/js/0.1984e27f.chunk.js"},{"revision":"c81281939cd903e7011d7854e78b9379","url":"static/js/1.262d1734.chunk.js"},{"revision":"b3704edd32009ff77eea5bdf7530de81","url":"static/js/11.3888f6b3.chunk.js"},{"revision":"8c2d77c9aa4308af7285144ece14b64a","url":"static/js/12.28280e78.chunk.js"},{"revision":"6c11da71fe95771410c5985c76158f8a","url":"static/js/13.a900779b.chunk.js"},{"revision":"bceca8fdf55b812c051115e39687aa30","url":"static/js/14.420c3ec6.chunk.js"},{"revision":"3e452bf52a1fc13b2f3ebab95cb44cc9","url":"static/js/15.7aa90c87.chunk.js"},{"revision":"f1632960842ba1fca6a9fae67c8abe45","url":"static/js/16.029ad07c.chunk.js"},{"revision":"959c76494db7c28aa3ec6e9bf193fd25","url":"static/js/17.14a52626.chunk.js"},{"revision":"ea45129a3f25bccc0ad14f11fd84e9f0","url":"static/js/18.aca0e8eb.chunk.js"},{"revision":"3f9d61a9988882391d28d0799ea61bc6","url":"static/js/19.4140a540.chunk.js"},{"revision":"c77389c586cbcff37a2c690ffddd4393","url":"static/js/2.26f7bedb.chunk.js"},{"revision":"5a35da64ae7fb4f1c95750b9509e259b","url":"static/js/20.3506e233.chunk.js"},{"revision":"d9de5647849359f3368a9e9645cb9bd7","url":"static/js/21.f69cfb62.chunk.js"},{"revision":"06bd5edd3157c559fb26f4e151db004d","url":"static/js/22.b0fdd50e.chunk.js"},{"revision":"4c91313ee7659bf2ed9be4e37fdad51a","url":"static/js/23.de486088.chunk.js"},{"revision":"e758edb86af06d0b2f85698dc46706a3","url":"static/js/24.c0effc91.chunk.js"},{"revision":"858298706cab6b8bc20c2c02fc1d48fc","url":"static/js/25.cc97a33b.chunk.js"},{"revision":"f78a8d51b1be247cfb893ef781f6729a","url":"static/js/26.f4e418d5.chunk.js"},{"revision":"1ba6609922e085b5f02b7187dfc83f9c","url":"static/js/27.71f51aac.chunk.js"},{"revision":"3300d7763987a4b573ee52fb21373ab3","url":"static/js/28.c667e7d5.chunk.js"},{"revision":"409d84e23c5a002477913d87b001d8bf","url":"static/js/29.023c802b.chunk.js"},{"revision":"9b8739482139b641f8f8a1193363eeb2","url":"static/js/3.db3bf713.chunk.js"},{"revision":"db7e23ea0cee174e921c3f03ecc3d98b","url":"static/js/30.f88c333b.chunk.js"},{"revision":"802d0747d008fbf5e8077696107fe9b4","url":"static/js/31.ec4e6656.chunk.js"},{"revision":"78f6929ed14c772a56ce9a27d0f2163f","url":"static/js/32.68952d1d.chunk.js"},{"revision":"66a3619db897d1a2b83946e82c442b18","url":"static/js/33.a5801c78.chunk.js"},{"revision":"2d902dc6dcd7602f633fae507e12eb67","url":"static/js/34.81c7c4b8.chunk.js"},{"revision":"11d2bd0425324addc25dde7670a2abb2","url":"static/js/35.356a93f8.chunk.js"},{"revision":"d4b168e307c92388d4a63688c358ca29","url":"static/js/36.10133840.chunk.js"},{"revision":"bf79bece4bb8b24b489fbd17f68454be","url":"static/js/37.1165be1b.chunk.js"},{"revision":"8c373fa07a6969faf4a25d82b0008bde","url":"static/js/38.461b803d.chunk.js"},{"revision":"7f6306b4c81d1caface8aa870ff86ad7","url":"static/js/39.45a6b4e6.chunk.js"},{"revision":"f2949048a21d4e3c1cf5f402b8e356b6","url":"static/js/4.f4e4dbc3.chunk.js"},{"revision":"96d8cf5db325ce5a7902905975df4560","url":"static/js/40.19b90bd1.chunk.js"},{"revision":"75f17daeafdb65e4413a5ec636a201c0","url":"static/js/41.15644114.chunk.js"},{"revision":"7df6c1dd3e6cbeab4dcae37c2e999c86","url":"static/js/42.26ebb8a1.chunk.js"},{"revision":"115572ea4b9d01f8779cf8ebacb2eadb","url":"static/js/43.8f7118f1.chunk.js"},{"revision":"6bfccc7c6b39f58fcb2cb5edf7a28f96","url":"static/js/44.4700dee3.chunk.js"},{"revision":"a76e067eb8aab112ef7304136198b652","url":"static/js/5.581f3cf3.chunk.js"},{"revision":"5a74f942e2bde637d2943dbefe8939ea","url":"static/js/6.e3b7ccac.chunk.js"},{"revision":"7921d6df6796aced1ea3933e94665ef0","url":"static/js/7.454b1bdf.chunk.js"},{"revision":"bc11d359884bd8bf8ec5b0aae158c683","url":"static/js/8.3a8693ce.chunk.js"},{"revision":"9eb502f6434ab59dd1b86eb52f105c9a","url":"static/js/main.302c72e9.chunk.js"},{"revision":"bd0813ca9b41bdf096945a5abca973bb","url":"static/js/runtime-main.43ad5ad2.js"}]);

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

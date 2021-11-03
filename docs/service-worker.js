if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"a751d5b168d54edf4ba08584b04d7793","url":"404.html"},{"revision":"afc78a01afc6d9a7b63c5daab37dd5af","url":"c659e8ad0bd30d160901.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"a751d5b168d54edf4ba08584b04d7793","url":"index.html"},{"revision":"0f451eaa34102d0646cd42434affd8a0","url":"static/css/19.bded3b46.chunk.css"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"af5d5eca98c8633059b4836595f94888","url":"static/css/20.371c3fc8.chunk.css"},{"revision":"03ada91fa755124bb56a92169bfaa0ec","url":"static/js/0.2c72183f.chunk.js"},{"revision":"391c4df3fc08cb69012e12da665dfbd4","url":"static/js/1.b4263fec.chunk.js"},{"revision":"d947ae2bac44ac4a3090badc16503562","url":"static/js/11.3c92a324.chunk.js"},{"revision":"ecb000bcba60235358471cf24668a475","url":"static/js/12.3fe9ea17.chunk.js"},{"revision":"05196febc3f629e73b81026bcb1289a0","url":"static/js/13.bc3d3e0f.chunk.js"},{"revision":"46aeedcbed2934e7359fd6d2642a94af","url":"static/js/14.04ae4698.chunk.js"},{"revision":"585abf6ba57fe048f19a634302fa0768","url":"static/js/15.01dd0b10.chunk.js"},{"revision":"620a4583d956e21360ca028bbf869710","url":"static/js/16.4a4151a8.chunk.js"},{"revision":"ae961592deb74e17d34ac92bed0ef17a","url":"static/js/17.b849bb1a.chunk.js"},{"revision":"fe998ce345f5a2fec286e806ec300f16","url":"static/js/18.7eee9d30.chunk.js"},{"revision":"0da2e19e25e8fbbeb9e6e8935181874f","url":"static/js/19.4018e5d3.chunk.js"},{"revision":"170bff93cbafb2d73cd3971302cce4d2","url":"static/js/2.88adac44.chunk.js"},{"revision":"9be02dc42b9963bc41029fd7106608f0","url":"static/js/20.f5b38b13.chunk.js"},{"revision":"fd0003512ceac5b1bc3453ec57b5ac0e","url":"static/js/21.306433cc.chunk.js"},{"revision":"2bc421cf897f243eea891f97647d4858","url":"static/js/22.af25ba3c.chunk.js"},{"revision":"b3c1f927444f42fe6e25d91ee43b7c3d","url":"static/js/23.fa33c5a0.chunk.js"},{"revision":"64a9ee7fcfcfac8ded7b85209c5aebd7","url":"static/js/24.a230d684.chunk.js"},{"revision":"82b7d02823a4d2335cc42a7f64fc23ab","url":"static/js/25.ff4efdd2.chunk.js"},{"revision":"5631a22483e58d95533003ccc5f1e297","url":"static/js/26.596dd7f6.chunk.js"},{"revision":"444f41fecd39909f49eb75a6a94ba55e","url":"static/js/27.acaaea79.chunk.js"},{"revision":"28e70a91795e0767d3b8af637c80bb02","url":"static/js/28.011073a8.chunk.js"},{"revision":"90ca606aabcb1f35e6d879892a007fc9","url":"static/js/29.3dba1b36.chunk.js"},{"revision":"6caeb7908ec7cf406ac9b93cf7432493","url":"static/js/3.16a57187.chunk.js"},{"revision":"edad1b69ba8a063de5b7e9235e313da9","url":"static/js/30.09b8873a.chunk.js"},{"revision":"6e8f40ffe4d2c9686284d6151f7ed5b2","url":"static/js/31.c0aaf6a2.chunk.js"},{"revision":"849be487da2c2afb91ff32c81fe146c4","url":"static/js/32.4a0d908c.chunk.js"},{"revision":"9af202b9ffde5c9c8d5a3f3719eb3483","url":"static/js/33.95251565.chunk.js"},{"revision":"d04f0e8599b73f80129630e74aa3bdec","url":"static/js/34.e11598b2.chunk.js"},{"revision":"9a30094d82e139ecd553026ea765741a","url":"static/js/35.464f3e6e.chunk.js"},{"revision":"4308a044ca3f65f8d5b557befd7168f8","url":"static/js/36.3cd2dd9b.chunk.js"},{"revision":"43c098e2ec1da7a4a3321bc490a071be","url":"static/js/37.e90fd22c.chunk.js"},{"revision":"67e92e255025ae1b215e6004ce508a61","url":"static/js/38.263e29ad.chunk.js"},{"revision":"c5b9685471956aa11a94385b5161ff42","url":"static/js/39.60e8b3fb.chunk.js"},{"revision":"90fd0df5ee6243255d1376ff265bc4df","url":"static/js/4.c8910dc9.chunk.js"},{"revision":"0bb8e90be86a9b99890dd9a62670e4ea","url":"static/js/40.9d932fd9.chunk.js"},{"revision":"5f0b3fcf64923b8586d7be7bf101b71b","url":"static/js/41.de1ff5b5.chunk.js"},{"revision":"1da8eb28035943f544364cf622589b51","url":"static/js/42.54fa93f2.chunk.js"},{"revision":"38294fcdc9c503ae69f1eb6a6fba0283","url":"static/js/43.3de7532b.chunk.js"},{"revision":"f4a05e5aab60387c67e6ddcfe0ed9bed","url":"static/js/44.7b03124d.chunk.js"},{"revision":"4b8750ce97dedc858773130c3218bb0d","url":"static/js/5.ca687d12.chunk.js"},{"revision":"f953d2f38b13e76dddc7ddb1e2c36d49","url":"static/js/6.a7ff3540.chunk.js"},{"revision":"41282cd15604bdf7fb2de6cff880c72d","url":"static/js/7.b5c665f7.chunk.js"},{"revision":"1316962dcb175f454e20e187e3d50dc0","url":"static/js/8.33809765.chunk.js"},{"revision":"6cf79af32d2e2e6af85a6c6a90748f60","url":"static/js/main.1e9c23cb.chunk.js"},{"revision":"0edc8c87f6df4c2c61bdcc7ad10cb97c","url":"static/js/runtime-main.3164228a.js"}]);

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

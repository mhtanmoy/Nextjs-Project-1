import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;700&family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/vendor/fontawesome-free/webfonts/fa-regular-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/vendor/fontawesome-free/webfonts/fa-solid-900.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/vendor/fontawesome-free/webfonts/fa-brands-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/wolmart87d5.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/wolmart87d5.ttf"
            as="font"
            crossOrigin=""
          />
          <style data-href="/vendor/fontawesome-free/webfonts/fa-brands-400.woff2"></style>

          <link
            rel="preload"
            href="/fonts/wolmart87d5.woff?png09e"
            as="font"
            type="font/woff"
            crossOrigin=""
          />

          {/* <!-- Vendor CSS --> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/fontawesome-free/css/all.min.css"
          />
          {/* <!-- Plugins CSS --> */}

          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/animate/animate.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/magnific-popup/magnific-popup.min.css"
          />
          {/* <!-- Link Swiper's CSS --> */}
          <link rel="stylesheet" href="/vendor/swiper/swiper-bundle.min.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/photoswipe/photoswipe.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/photoswipe/default-skin/default-skin.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/sticky/sticky.js"></script>
        <script src="/vendor/jquery.plugin/jquery.plugin.min.js"></script>
        <script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script src="/vendor/zoom/jquery.zoom.js"></script>
        <script src="/vendor/jquery.countdown/jquery.countdown.min.js"></script>
        <script src="/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
        <script src="/vendor/skrollr/skrollr.min.js"></script>
        <script src="/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/vendor/photoswipe/photoswipe.js"></script>
        <script src="/vendor/photoswipe/photoswipe-ui-default.js"></script>
        <script src="/js/main.min.js"></script>
      </Html>
    );
  }
}

export default MyDocument;

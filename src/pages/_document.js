/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
              rel='stylesheet' type='text/css'/>
        <link href='/js/vendor/aos/aos.css' rel='stylesheet' type='text/css'/>
        <link href='/js/vendor/bootstrap/css/bootstrap.min.css' rel='stylesheet' type='text/css'/>
        <link href='/js/vendor/bootstrap-icons/bootstrap-icons.css' rel='stylesheet' type='text/css'/>
        <link href='/js/vendor/boxicons/css/boxicons.min.css' rel='stylesheet' type='text/css'/>
        <link href='/js/vendor/glightbox/css/glightbox.min.css' rel='stylesheet' type='text/css'/>
        <link href='/js/vendor/remixicon/remixicon.css' rel='stylesheet' type='text/css'/>
        <link href='/js/vendor/swiper/swiper-bundle.min.css' rel='stylesheet' type='text/css'/>       
      </Head>
      <body id='page-top'>
        <Main />
        <NextScript />
        {/* theme js */}
        <script  src='/js/vendor/purecounter/purecounter_vanilla.js'></script>
        <script  src='/js/vendor/aos/aos.js'></script>
        <script  src='/js/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
        <script  src='/js/vendor/glightbox/js/glightbox.min.js'></script>
        <script  src='/js/vendor/isotope-layout/isotope.pkgd.min.js'></script>
        <script  src='/js/vendor/swiper/swiper-bundle.min.js'></script>
        <script src="/js/main.js"></script>
      </body>
    </Html>
  )
}

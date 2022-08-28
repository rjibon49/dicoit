import '../styles/globals.css'
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import Head from 'next/head';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <title>Dico IT</title>
  <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/public/favicon.ico"
    />
    {/* <link rel="shortcut icon" href={fav} /> */}
    
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    <meta name="title" content="Dico IT"></meta>
    <meta name="description" content="Build your dream website"></meta>

    {/* Link  */}
  </Head>
  <Script
      id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
  <Component {...pageProps} />
  
</>
}

export default MyApp

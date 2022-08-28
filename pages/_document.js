import { Head, Html, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts  */}
        {/* <link rel="shortcut icon" href="/public/favicon/dicoiticon.ico" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap"
          rel="stylesheet"
        ></link>

        {/* Bootsrap CSS  Link */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>

        {/* Custom CSS  */}

        {/* <link rel="stylesheet" type="css" href="/_next/public/static/styles.css" /> */}
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  );
}
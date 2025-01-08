import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Megajon Comedy</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src={process.env.GOOGLE_URL}></script>
      </body>
    </Html>
  )
}

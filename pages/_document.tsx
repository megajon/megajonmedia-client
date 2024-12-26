import { Html, Head, Main, NextScript } from 'next/document'

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
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsCzg8XVmCuRDA4FcdonIijyaoXYelI58&libraries=places"></script>
      </body>
    </Html>
  )
}

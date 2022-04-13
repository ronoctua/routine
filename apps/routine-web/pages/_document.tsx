import { getCssText } from '@routine/ui-web';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/images/routine-32.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/routine-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/routine-16.png"
          />
          <link rel="apple-touch-icon" href="/images/routine-192.png" />

          <link rel="manifest" href="manifest.json" />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

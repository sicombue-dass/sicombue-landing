import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://store-sicombue.s3.us-west-2.amazonaws.com/vite.svg"
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

export default CustomDocument;

/*<meta
http-equiv="Content-Security-Policy"
content="upgrade-insecure-requests"
></meta>*/

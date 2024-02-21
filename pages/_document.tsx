import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx : any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <meta name="description" content="Bellie Joe Jandusay is a Software Developer based on the Philippines. Equip with different skills necessary for software development such as React, Laravel, MySQL, Ionic etc." />
          <meta name="keywords" content="Bellie, Bellie Joe, Bellie Joe Jandusay, Laravel Developer, React Developer, Software Developer, Web Developer, Full Stack Developer" />
          <meta name="google-site-verification" content="jZJCryi0BISLzVdsPo61ud4yVBIPHQeiKOdF4iC9maY" />
          <title>Bellie Joe Jandusay - Portfolio</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

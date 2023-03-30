import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme, Theme  } from '@nextui-org/react';
import Layout from '@/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }: AppProps) {

  
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

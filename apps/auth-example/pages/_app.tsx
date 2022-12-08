import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './styles.css';

import { trpc } from '../utils/trpc';


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to auth-example!</title>
      </Head>
      <main className="min-h-screen bg-blue">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default trpc.withTRPC(CustomApp);

import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp(
  { Component }: { Component: any },
  { pageProps }: { pageProps: any }
) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* 
      Tailwind's normalize isn't applied
      thus 8px margin is added around "body". 
      Fix it with a global style.
      https://github.com/zeit/next.js/issues/151#issuecomment-257090939 */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          --tw-bg-opacity: 1;
          background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        }
      `}</style>
    </>
  );
}

export default MyApp;

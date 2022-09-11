import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { Layout } from "./components";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>One Cut</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/clapperboard.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

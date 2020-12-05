// pages/_app.js
import React from 'react';
import '../assets/index.scss';
import App from 'next/app';
import Layout from '../components/Layout';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
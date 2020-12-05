// components/Layout.js
import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
        <Footer/>
      </div>
    );
  }
}
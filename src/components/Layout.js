import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/componets/Layout.css';

export default function Layout({ children }) {
  return (
    <div>
      <div className="Main">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

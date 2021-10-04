import React from 'react';
import Products from '../components/Products';
import SEO from '../components/SEO';
import initialState from '../initialState';

export default function Home() {
  return (
    <>
      <SEO title="Platzi Conf Merch | Products" />
      <Products products={initialState.products} />
    </>
  );
}

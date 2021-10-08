import React from 'react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="an error has happen"
        content="Not found content"
        name="404 Not found"
      />
      <div>404 NOT FOUND</div>
    </>
  );
}

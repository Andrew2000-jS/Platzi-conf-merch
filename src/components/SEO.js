import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ title, name, content } = {}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
}

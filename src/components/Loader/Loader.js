import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = props => (
  <ContentLoader
    speed={2}
    width={1000}
    height={120}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="100" y="10" rx="0" ry="0" width="100" height="100" />
    <rect x="210" y="10" rx="0" ry="0" width="100" height="100" />
    <rect x="320" y="10" rx="0" ry="0" width="100" height="100" />
  </ContentLoader>
);

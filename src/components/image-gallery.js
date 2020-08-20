import React from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import SEO from './seo';

const ImageGallery = ({ images, year }) => (
  <div>
    <SEO title={year} />
    <ReactBnbGallery
      opacity={0.8}
      show
      photos={images}
      onClose={() => navigate('/')}
    />
  </div>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired,
  year: PropTypes.string.isRequired,
};

export default ImageGallery;

import React from 'react';
import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

import Layout from './layout';
import SEO from './seo';
import Title from './title';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ImageGallery = ({ images, year }) => (
  <Layout>
    <SEO title={year} />
    <Title>{year}</Title>
    <Container>
      <ReactImageGallery
        autoPlay={false}
        lazyLoad
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </Container>
  </Layout>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired,
  year: PropTypes.string.isRequired,
};

export default ImageGallery;

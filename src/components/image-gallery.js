import React from 'react';
import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

import Layout from './layout';
import SEO from './seo';
import RightArrow from '../images/image-gallery/right-arrow.svg';
import LeftArrow from '../images/image-gallery/left-arrow.svg';
import { desktop, tablet, phone } from './global-style';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  .image-gallery-description {
    display: none;
    font-family: 'Montserrat Alternates', sans-serif;
  }

  .image-gallery-slide:hover .image-gallery-description {
    display: block;
  }

  .image-gallery-slide {
    outline: none;
  }

  .image-gallery-thumbnail {
    border 2px solid transparent;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    border: 2px solid #000;
  }

  @media (max-width: ${desktop}) {
    max-width: 550px;
  }

  @media (max-width: ${tablet}) {
    max-width: 100%;
  }

  @media (max-width: ${phone}) {
    .image-gallery-thumbnails-wrapper {
      display: none;
    }
  }
`;

const ArrowContainer = styled.div`
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));

  img {
    width: 25px;
    transition: width 0.2s ease-in-out;

    &:hover {
      width: 27px;
    }
  }

  @media (max-width: ${tablet}) {
    display: none;
  }
`;

const ImageGallery = ({ images, year }) => {
  const renderLeftNav = (onClick, disabled) => (
    <ArrowContainer
      aria-label="Previous Slide"
      className="image-gallery-icon image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      role="presentation"
      style={{ left: '-75px' }}
    >
      <img alt="" src={LeftArrow} />
    </ArrowContainer>
  );

  const renderRightNav = (onClick, disabled) => (
    <ArrowContainer
      aria-label="Next Slide"
      className="image-gallery-icon image-gallery-right-nav"
      disabled={disabled}
      onClick={onClick}
      role="presentation"
      style={{ right: '-75px' }}
    >
      <img alt="" src={RightArrow} />
    </ArrowContainer>
  );

  return (
    <Layout>
      <SEO title={year} />
      <Container>
        <h2>{year}</h2>
        <ReactImageGallery
          autoPlay={false}
          lazyLoad
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          renderRightNav={renderRightNav}
          renderLeftNav={renderLeftNav}
        />
      </Container>
    </Layout>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired,
  year: PropTypes.string.isRequired,
};

export default ImageGallery;

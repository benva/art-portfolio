import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  pointer-events: none;
  overflow: hidden;

  a {
    pointer-events: auto;
  }

  img {
    transition: transform 0.5s ease;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, #00000088 20%, #ffffff44 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .year {
    opacity: 1;
  }

  .year {
    color: #ffffff;
    font-size: 1.75em;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease;
    z-index: 10;
  }
`;

const Card = ({ image, year }) => (
  <Container>
    <Link to={`/${year}`}>
      <img alt={year} src={image} />
      <h2 className="year">{year}</h2>
    </Link>
  </Container>
);

Card.propTypes = {
  image: PropTypes.string,
  year: PropTypes.string,
};

Card.defaultProps = {
  image: 'https://via.placeholder.com/375',
  year: '',
};

export default Card;

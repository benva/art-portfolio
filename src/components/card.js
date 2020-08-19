import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { phone } from './global-style';

const Container = styled.div`
  position: relative;
  pointer-events: none;

  a {
    pointer-events: auto;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  .year {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: ${phone}) {
      display: none;
    }
  }
`;

const Card = ({ year }) => (
  <Container>
    <Link to={`/${year}`}>
      <img alt={year} src="https://via.placeholder.com/300" />
      <h3 className="year">{year}</h3>
    </Link>
  </Container>
);

Card.propTypes = {
  year: PropTypes.string,
};

Card.defaultProps = {
  year: '',
};

export default Card;

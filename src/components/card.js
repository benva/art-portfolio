import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin-bottom: 50px;
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
    background: rgba(0, 0, 0, 0.2);
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
  }
`;

const Card = ({ year }) => (
  <Container>
    <Link to={`/${year}`}>
      <img alt={year} src="https://via.placeholder.com/300" />
      <p className="year">{year}</p>
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

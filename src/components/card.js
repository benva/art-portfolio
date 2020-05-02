import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin-bottom: 50px;

  .year {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Card = ({ year }) => (
  <Link to={`/${year}`}>
    <Container>
      <img alt={year} src="https://via.placeholder.com/300" />
      <p className="year">{year}</p>
    </Container>
  </Link>
);

Card.propTypes = {
  year: PropTypes.string,
};

Card.defaultProps = {
  year: '',
};

export default Card;

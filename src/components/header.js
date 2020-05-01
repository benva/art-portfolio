import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  text-transform: uppercase;
  display: flex;
  margin: 20px;

  h1 {
    margin-right: auto;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <LinkContainer>
      <h3>
        <Link to="/about">About</Link>
      </h3>
      <h3>
        <Link to="/contact">Contact</Link>
      </h3>
    </LinkContainer>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

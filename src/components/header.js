import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { tablet } from './global-style';

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

  @media (max-width: ${tablet}) {
    display: none;
  }
`;

const MobileLinkContainer = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '100%')};
  width: 100%;
  height: 100%;
  transition: left 0.5s ease;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;

  @media (min-width: ${tablet}) {
    display: none;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  top: 28px;
  right: 20px;
  z-index: 1;

  @media (max-width: ${tablet}) {
    display: block;
  }
`;

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      hamburger: file(relativePath: { eq: "header/hamburger.png" }) {
        childImageSharp {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      close: file(relativePath: { eq: "header/close.png" }) {
        childImageSharp {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);

  const closeMenu = () => setMenuOpen(false);

  const renderLinks = () => (
    <>
      <h3>
        <Link onClick={closeMenu} to="/about">
          About
        </Link>
      </h3>
      <h3>
        <Link onClick={closeMenu} to="/contact">
          Contact
        </Link>
      </h3>
    </>
  );

  return (
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <LinkContainer>{renderLinks()}</LinkContainer>
      <MobileLinkContainer open={menuOpen}>{renderLinks()}</MobileLinkContainer>
      <Hamburger onClick={toggleMenu}>
        {!menuOpen && <Img alt="menu" fixed={data.hamburger.childImageSharp.fixed} />}
        {menuOpen && <Img alt="menu" fixed={data.close.childImageSharp.fixed} />}
      </Hamburger>
    </Container>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

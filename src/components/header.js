import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { phone } from './global-style';

const Container = styled.header`
  text-transform: uppercase;
  display: flex;
  margin: 20px;

  h1 {
    margin-right: auto;
  }
`;

const Links = styled.div`
  @media (max-width: ${phone}) {
    display: none;
  }
`;

const MobileLinks = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;

  @media (max-width: ${phone}) {
    flex-direction: column;
    width: inherit;
    text-align: center;
    margin-top: 100px;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  position: fixed;
  top: 28px;
  right: 20px;
  z-index: 1;

  @media (max-width: ${phone}) {
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
    <LinksContainer>
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
    </LinksContainer>
  );

  return (
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Links>{renderLinks()}</Links>
      <Hamburger onClick={toggleMenu}>
        {!menuOpen && <Img alt="menu" fixed={data.hamburger.childImageSharp.fixed} />}
        {menuOpen && <Img alt="menu" fixed={data.close.childImageSharp.fixed} />}
      </Hamburger>
      {menuOpen && <MobileLinks open={menuOpen}>{renderLinks()}</MobileLinks>}
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

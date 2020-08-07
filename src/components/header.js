import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from '../images/header/hamburger.png';
import Close from '../images/header/close.png';
import { tablet, red } from './global-style';

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

  .selected {
    border-bottom: 2px ${red} solid;
  }

  @media (max-width: ${tablet}) {
    display: none;
  }
`;

const MobileLinkContainer = styled.div`
  background-color: ${red};
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

  .selected {
    border-bottom: 2px white solid;
  }

  @media (min-width: calc(${tablet} + 1px)) {
    display: none;
  }
`;

const Action = styled.div`
  cursor: pointer;
  display: none;
  position: fixed;
  top: 28px;
  right: 20px;
  z-index: 1;
  width: 30px;

  @media (max-width: ${tablet}) {
    display: block;
  }
`;

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);

  const closeMenu = () => setMenuOpen(false);

  const renderLinks = () => {
    if (typeof window !== 'undefined') {
      return (
        <>
          <Link to="/">
            <h4
              className={
                window.location.pathname === '/' ||
                window.location.pathname.includes('/20')
                  ? 'selected'
                  : ''
              }
            >
              Work
            </h4>
          </Link>
          <Link to="/about">
            <h4
              className={
                window.location.pathname.includes('/about') ? 'selected' : ''
              }
            >
              About
            </h4>
          </Link>
          <Link to="/contact">
            <h4
              className={
                window.location.pathname.includes('/contact') ? 'selected' : ''
              }
            >
              Contact
            </h4>
          </Link>
        </>
      );
    }

    return <></>;
  };

  return (
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <LinkContainer>{renderLinks()}</LinkContainer>
      <MobileLinkContainer open={menuOpen}>{renderLinks()}</MobileLinkContainer>
      <Action onClick={menuOpen ? closeMenu : openMenu}>
        {!menuOpen && <img alt="menu" src={Hamburger} />}
        {menuOpen && <img alt="close" src={Close} />}
      </Action>
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

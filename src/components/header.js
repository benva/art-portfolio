import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from '../images/header/hamburger-menu.svg';
import Close from '../images/header/close.svg';
import { tablet, red, phone } from './global-style';

const Container = styled.header`
  text-transform: uppercase;
  display: flex;
  margin: 27px 20px 20px 20px;

  h1 {
    margin-right: auto;

    @media (max-width: ${phone}) {
      font-size: 1.5em;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  height: 30px;

  .selected {
    border-bottom: 2px ${red} solid;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);
    top: 30px;
    left: -10px;
    padding: 20px 20px 0 20px;
    z-index: 2;
    background-color: #fff;

    a:not(:last-of-type) {
      margin-bottom: 1.5em;
    }
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

  .dropdown-content {
    display: none;
  }

  @media (min-width: calc(${tablet} + 1px)) {
    display: none;
  }
`;

const Action = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 20px;

  .close {
    width: 30px;
  }

  .menu {
    width: 40px;
  }

  @media (max-width: ${tablet}) {
    display: block;
  }
`;

const Header = ({ siteTitle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setMobileMenuOpen(true);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const renderYearLinks = () => {
    if (typeof window !== 'undefined') {
      return (
        <>
          <Link to="/2018">
            <h4
              className={
                window.location.pathname.includes('2018') ? 'selected' : ''
              }
            >
              2018
            </h4>
          </Link>
          <Link to="/2017">
            <h4
              className={
                window.location.pathname.includes('2017') ? 'selected' : ''
              }
            >
              2017
            </h4>
          </Link>
          <Link to="/2016">
            <h4
              className={
                window.location.pathname.includes('2016') ? 'selected' : ''
              }
            >
              2016
            </h4>
          </Link>
          <Link to="/2015">
            <h4
              className={
                window.location.pathname.includes('2015') ? 'selected' : ''
              }
            >
              2015
            </h4>
          </Link>
        </>
      );
    }

    return <></>;
  };

  const renderLinks = () => {
    if (typeof window !== 'undefined') {
      return (
        <>
          <div className="dropdown">
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
            <div className="dropdown-content">{renderYearLinks()}</div>
          </div>
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
      <MobileLinkContainer open={mobileMenuOpen}>
        {renderLinks()}
      </MobileLinkContainer>
      <Action onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}>
        {!mobileMenuOpen && <img alt="menu" className="menu" src={Hamburger} />}
        {mobileMenuOpen && <img alt="close" className="close" src={Close} />}
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

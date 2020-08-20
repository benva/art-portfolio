import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import { tablet } from '../components/global-style';
import Sunny from '../images/about/sunny.jpg';

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;

  @media (max-width: ${tablet}) {
    padding: 0;
    width: 90%;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${tablet}) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  margin-right: 20px;
  margin-bottom: 20px;

  @media (max-width: ${tablet}) {
    margin-right: 0px;
    width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  a {
    font-weight: 600;
  }

  @media (max-width: ${tablet}) {
    max-width: 100%;
  }
`;

const IndexPage = () => (
  <div>
    <SEO title="About" />
    <Container>
      <h2>ABOUT</h2>
      <AboutContainer>
        <ImageContainer>
          <img alt="portrait" src={Sunny} />
        </ImageContainer>
        <Column>
          <p>
            Seo Eun Kim is an artist born in South Korea and raised in Toronto.
            She has an Honours Bachelor of Arts from University of Toronto in
            Visual Arts and Cinema Studies. Seo Eun has exhibited in numerous
            galleries including a solo show at Yumart Gallery in Toronto. She
            has also participated in Images Festival as a Guest Programmer and
            in Regent Park Film Festival&apos;s School Programming Advisory
            Board. As an artist Seo Eun Kim focuses on healing, rediscovery, and
            rootlessness. Seo Eun was a part of Image Festival&apos;s media arts
            mentorship program (Now What?) and is producing works for her
            upcoming solo exhibition in September 2020. She is currently
            completing her M.A. in Cinema Studies.
          </p>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
            style={{ marginBottom: '20px' }}
          >
            <p>CV</p>
          </a>
        </Column>
      </AboutContainer>
    </Container>
  </div>
);

export default IndexPage;

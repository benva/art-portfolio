import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import { tablet } from '../components/global-style';

const Container = styled.div`
  max-width: 800px;
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
  width: 300px;
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
  width: 400px;

  a {
    font-weight: 600;
  }

  @media (max-width: ${tablet}) {
    width: 100%;
  }
`;

const IndexPage = () => (
  <div>
    <SEO title="About" />
    <Container>
      <h2>ABOUT</h2>
      <AboutContainer>
        <ImageContainer>
          <img alt="portrait" src="https://via.placeholder.com/300" />
        </ImageContainer>
        <Column>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
            sem pulvinar, rhoncus urna eget, euismod nisl. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Mauris convallis, ipsum
            vitae iaculis condimentum, metus ante mollis enim, ut convallis
            massa magna in sapien. Ut at tempus lectus. Proin mattis diam
            turpis, sit amet tempor tellus interdum sed. Pellentesque semper,
            elit eget sollicitudin cursus, neque turpis dignissim urna, vehicula
            tincidunt purus nisi consequat nisl. Phasellus eget lacus id urna
            hendrerit efficitur eu id arcu.
          </p>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
            style={{ marginBottom: '20px' }}
          >
            CV
          </a>
          <ul>
            <li>
              <a
                href="https://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Some article
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Other article
              </a>
            </li>
          </ul>
        </Column>
      </AboutContainer>
    </Container>
  </div>
);

export default IndexPage;

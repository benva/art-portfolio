import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/title';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  img {
    margin-bottom: 60px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  a {
    font-weight: 600;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Title>ABOUT</Title>
    <Container>
      <img alt="portrait" src="https://via.placeholder.com/600" />
      <Column>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sem pulvinar, rhoncus
          urna eget, euismod nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Mauris convallis, ipsum vitae iaculis condimentum, metus ante mollis enim, ut convallis
          massa magna in sapien. Ut at tempus lectus. Proin mattis diam turpis, sit amet tempor
          tellus interdum sed. Pellentesque semper, elit eget sollicitudin cursus, neque turpis
          dignissim urna, vehicula tincidunt purus nisi consequat nisl. Phasellus eget lacus id urna
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
            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
              Some article
            </a>
          </li>
          <li>
            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
              Other article
            </a>
          </li>
        </ul>
      </Column>
    </Container>
  </Layout>
);

export default IndexPage;

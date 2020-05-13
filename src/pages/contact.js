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
    <SEO title="Contact" />
    <Title>CONTACT</Title>
    <Container>
      <img alt="portrait" src="https://via.placeholder.com/600" />
      <Column>
        <p>
          For purchase and exhibition inquiries, please contact:
          {' '}
          <a href="mailto:seoeunkimart@gmail.com">seoeunkimart@gmail.com</a>
        </p>
      </Column>
    </Container>
  </Layout>
);

export default IndexPage;

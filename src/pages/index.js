import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 50px;
  max-width: 750px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 650px) {
    grid-template-columns: 200px 200px;
    grid-gap: 25px;
  }

  @media (max-width: 425px) {
    grid-template-columns: 150px 150px;
    grid-gap: 20px;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CardContainer>
      <Card year="2018" />
      <Card year="2017" />
      <Card year="2016" />
      <Card year="2015" />
    </CardContainer>
  </Layout>
);

export default IndexPage;

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-evenly;
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

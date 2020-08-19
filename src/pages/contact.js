import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import { tablet } from '../components/global-style';

const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  a {
    font-weight: 600;
  }

  @media (max-width: ${tablet}) {
    width: 90%;
  }
`;

const IndexPage = () => (
  <div>
    <SEO title="Contact" />
    <Container>
      <h2>CONTACT</h2>
      <p>
        For purchase and exhibition inquiries, please contact:{' '}
        <a href="mailto:seoeunkimart@gmail.com">seoeunkimart@gmail.com</a>
      </p>
    </Container>
  </div>
);

export default IndexPage;

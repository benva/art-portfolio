import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Card from '../components/card';
import TwentyTwenty from '../images/2020/thumbnails/Making_Troubles_6x8_Cardstock_and_Acrylic_2020.jpg';
import TwentyEighteen from '../images/2018/thumbnails/Suture_1.jpg';
import TwentySeventeen from '../images/2017/thumbnails/Filtered_Collage_6.jpg';
import TwentySixteen from '../images/2016/thumbnails/Untitled.jpg';
import TwentyFifteen from '../images/2015/thumbnails/Untitled_Collage_1.jpg';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 375px 375px;
  grid-template-rows: 375px 375px;
  grid-gap: 75px;
  height: 1275px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: 300px 300px;
    grid-template-rows: 300px 300px;
    grid-gap: 50px;
    height: 1000px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px 200px;
    grid-gap: 25px;
    height: 650px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 150px 150px;
    grid-template-rows: 150px 150px;
    grid-gap: 20px;
    height: 490px;
  }
`;

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <CardContainer>
      <Card image={TwentyTwenty} year="2020" />
      <Card image={TwentyEighteen} year="2018" />
      <Card image={TwentySeventeen} year="2017" />
      <Card image={TwentySixteen} year="2016" />
      <Card image={TwentyFifteen} year="2015" />
    </CardContainer>
  </div>
);

export default IndexPage;

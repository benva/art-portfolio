import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h2`
  margin-left: 25%;
`;

const Title = ({ children }) => <Text>{children}</Text>;

Title.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Title;

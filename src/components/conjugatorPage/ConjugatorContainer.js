import React from 'react';
import Text from './Text';
import Input from './Input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  }
`;

const ConjugatorContainer = props => {
  return (
    <div>
      <StyledLink to="/options">Options</StyledLink>
      <Text data={props.data} />
      <Input data={props.data} />
    </div>
  );
};

export default ConjugatorContainer;

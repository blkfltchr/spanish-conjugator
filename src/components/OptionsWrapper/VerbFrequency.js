import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.select`
  padding: 1%;
`;

const VerbFrequency = () => {
  return (
    <div>
      <Dropdown>
        <option value="20">20 most popular</option>
        <option value="50">50 most popular</option>
        <option selected="100">100 most popular</option>
        <option value="all">All verbs</option>
      </Dropdown>
    </div>
  );
};

export default VerbFrequency;

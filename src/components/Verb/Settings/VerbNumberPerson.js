import React from 'react';
import styled from 'styled-components';

const SettingsText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

const VerbNumberPerson = props => {
  return (
    <div>
      <SettingsText>Spanish Type</SettingsText>
      <select onChange={props.updateNumPerson}>
        <option value="Latam">Latin America</option>
        <option value="Spain">Spain</option>
      </select>
    </div>
  );
};

export default VerbNumberPerson;

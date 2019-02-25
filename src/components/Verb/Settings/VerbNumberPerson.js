import React from 'react';
import styled from 'styled-components';

const SettingsOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Dropdown = styled.select`
  padding: 1%;
`;

const SettingsText = styled.p`
  font-size: 0.8rem;
  margin-left: 3%;
  font-weight: bold;
`;

const VerbNumberPerson = props => {
  return (
    <SettingsOptions>
      <SettingsText>Spanish Type</SettingsText>
      <Dropdown onChange={props.updateNumPerson}>
        <option value="Latam">Latin America</option>
        <option value="Spain">Spain</option>
      </Dropdown>
    </SettingsOptions>
  );
};

export default VerbNumberPerson;

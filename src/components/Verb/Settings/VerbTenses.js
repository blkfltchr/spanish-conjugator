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
  padding-right: 3%;
  margin-left: 3%;
  font-weight: bold;
`;

const VerbTenses = props => {
  return (
    <SettingsOptions>
      <SettingsText>Difficulty</SettingsText>
      <Dropdown onChange={props.updateVerbTenses}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate" selected="Intermediate">
          Intermediate
        </option>
        <option value="Advanced">Advanced</option>
      </Dropdown>
    </SettingsOptions>
  );
};

export default VerbTenses;

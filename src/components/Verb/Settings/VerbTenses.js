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
        <option value='0' defaultValue="Beginner">
          Level One
        </option>
        <option value="1">Level Two</option>
        <option value="2">Level Three</option>
        <option value="3">Level Four</option>
        <option value="4">Level Five</option>
        <option value="5">Level Six</option>
        <option value="6">Level Seven</option>
      </Dropdown>
    </SettingsOptions>
  );
};

export default VerbTenses;

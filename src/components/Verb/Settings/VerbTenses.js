import React from 'react';
import styled from 'styled-components';

const DropdownTwo = styled.select`
  padding: 2%;
  margin-top: 3%;
`;

const VerbTenses = props => {
  return (
    <div>
      Difficulty:
      <DropdownTwo onChange={props.updateVerbTenses}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate" selected="Intermediate">
          Intermediate
        </option>
        <option value="Advanced">Advanced</option>
      </DropdownTwo>
    </div>
  );
};

export default VerbTenses;

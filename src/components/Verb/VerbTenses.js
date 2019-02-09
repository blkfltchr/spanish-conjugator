import React from "react";
import styled from "styled-components";

const DropdownTwo = styled.select`
  padding: 2%;
  margin-top: 3%;
`;

// const List = styled.li`
//   font-size: 0.8rem;
// `;

const VerbTenses = props => {
  return (
      <div>
          {/* <List>Beginner: Present, Preterite</List>
          <List>Intermediate: Imperfect, Conditional, Future, Present Perfect</List>
          <List>Advanced: All tenses</List> */}
          <p>Difficulty: </p>
          <DropdownTwo onChange={ props.updateVerbTenses }>
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

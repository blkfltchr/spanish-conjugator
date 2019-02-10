import React from "react";
import styled from "styled-components";

const Dropdown = styled.select`
  padding: 1%;
`;

const VerbNumberPerson = props => {
  return (
      <div>
        Spanish Type:
          <Dropdown onChange={ props.updateNumPerson }>
              <option value="Latam">Latin America</option>
              <option value="Spain">Spain</option>
          </Dropdown>
      </div>
  );
};

export default VerbNumberPerson;

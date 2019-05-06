import React from "react";
import Verb from "../Verb/index.js";
import styled from "styled-components";

const Container = () => {
  return (
    <MyDiv>
      <Verb />
    </MyDiv>
  );
};

export default Container;

const MyDiv = styled.div`
  width: 75%;
`;

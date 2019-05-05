import React from "react";
import image from "../assets/404.svg";
import styled from "styled-components";

const NotFound = styled.img`
  height: 50%
  width: 50%;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageNotFound = () => {
  return (
    <StyledDiv>
      <NotFound src={image} alt="page not found" />
      <h2>How'd you get here?</h2>
      <p>The page you're looking for either doesn't exist</p>
      <h2>404 ERROR</h2>
    </StyledDiv>
  );
};
export default PageNotFound;

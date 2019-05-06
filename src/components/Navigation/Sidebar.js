import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsernameContext } from "../../Context/Store";
import styled from "styled-components";

const Sidebar = props => {
  const [username] = useContext(UsernameContext);
  return (
    <StyledContainer>
      <h2> Hi {username} </h2>
      <div className="my-links">
        <MyLink to="/">Home</MyLink>
        <MyLink to="/learn">Go Learn</MyLink>
        <MyLink to="/my-account">My Account</MyLink>
        <MyLink to="/about">About</MyLink>
      </div>
    </StyledContainer>
  );
};

export default Sidebar;

const StyledContainer = styled.div`
  background: #941511;
  box-shadow: 1px 1px 5px 1px #000000;
  text-shadow: 2px 2px 2px #000000;
  color: #ffc400;
  right: 0;
  text-align: center;
  height: 100vh;
  opacity: 0.9;
  padding: 5px 0;
  width: 25%;
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
`;

const MyLink = styled(Link)`
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;

  &:hover {
    color: #ffc400;
    text-decoration: none;
  }

  &:active {
    color: #941600;
  }
  margin: 30% auto;
`;

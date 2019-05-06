import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { UsernameContext } from "../../Context/Store";
import { StyledContainer, MyLink } from "./Styled";
import { RouterContext } from "../../Context/CustomBrowserRouter";

const Sidebar = props => {
  const [username] = useContext(UsernameContext);
  const routeProps = useContext(RouterContext);

  return (
    <StyledContainer>
      <h2> Hi {username} </h2>
      <div className="my-links">
        <MyLink to="/">Home</MyLink>
        <MyLink to="/learn">Go Learn</MyLink>
        <MyLink to="/my-account">My Account</MyLink>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/goodbye">Goodbye</MyLink>
      </div>
    </StyledContainer>
  );
};

export default Sidebar;

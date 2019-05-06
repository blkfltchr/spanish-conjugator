import React, { useContext } from "react";
import { TopBar, NavLogo } from "./Styled";

const Navigation = props => {
  return (
    <TopBar>
      <NavLogo>
        <h1>Spanish Conjugator</h1>
      </NavLogo>
    </TopBar>
  );
};

export default Navigation;

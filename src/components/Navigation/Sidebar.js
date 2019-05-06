import React, { useContext, useState } from "react";
import { UsernameContext, ModalContext } from "../../Context/Store";
import { SidebarStyled, MyLink } from "./Styled";

const Sidebar = props => {
  const [username] = useContext(UsernameContext);
  const [setModal] = useContext(ModalContext);

  const logOut = () => {
    localStorage.removeItem("jwt");
    setModal(false);
  };

  return (
    <SidebarStyled>
      <h2> Hi {username} </h2>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/learn">Go Learn</MyLink>
      <MyLink to="/my-account">My Account</MyLink>
      <MyLink to="/about">About</MyLink>
      <MyLink to="/goodbye" onClick={logOut}>
        Log Out
      </MyLink>
    </SidebarStyled>
  );
};

export default Sidebar;

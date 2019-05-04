import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./navigation.css";

import Login from "./Login";
import SignUp from "./SignUp";

const Navigation = props => {
  return (
    <div className="top-bar">
      <div className="nav-logo">
        <h1>Spanish Conjugator</h1>
      </div>
      <nav>
        <div className="default-menu">
          <Login />
          <SignUp />
          {/* </div>
        {/* <div className="user-menu">
          {/* <NavLink to="/">Home</NavLink> */}
          {/* <NavLink to="/learn">Go Learn</NavLink>  */}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

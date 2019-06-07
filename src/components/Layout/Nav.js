import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav">
      <NavLink activeClassName="active-link" to="/">
        <span className="logo">Spanish Conjugator</span>
      </NavLink>
      <div>
        <NavLink activeClassName="active-link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active-link" to="/dashboard">
          Dashboard
        </NavLink>
        {props.token.length > 0 ? null : <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  );
}

export default Nav;

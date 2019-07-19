import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="nav">
      <NavLink
        className="inactive"
        to="/"
      >
        Spanish Conjugator
      </NavLink>
      <div>
        <NavLink
          exact
          activeClassName="active-link"
          className="inactive"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          exact
          activeClassName="active-link"
          className="inactive"
          to="/settings"
        >
          Settings
        </NavLink>
        {props.token.length > 0 ? null : (
          <NavLink
            exact
            activeClassName="active-link"
            className="inactive"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Nav;

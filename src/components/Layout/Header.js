import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <span className="logo">
          Spanish Conjugator{' '}
          <span role="img" aria-label="colombia">
            🇪🇸
          </span>
        </span>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {props.token.length > 0 ? null : <Link to="/login">Login</Link>}
      </div>
    </div>
  );
}

export default Header;

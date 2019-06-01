import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
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
    </div>
  </div>
);

export default Header;

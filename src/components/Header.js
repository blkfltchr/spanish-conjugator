import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>
        Bienvenidos, a la{' '}
        <Link to="/" className="logo">
          Spanish Conjugator
        </Link>
      </h2>
      <p>Practice conjugating verbs and break your best streak!</p>
    </div>
  );
};

export default Header;

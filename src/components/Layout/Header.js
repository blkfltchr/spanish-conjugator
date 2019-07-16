import React from 'react';

function Header() {
  return (
    <div className="header">
      <h1>
        <span className="logo">
          Conjugator{' '}
          <span role="img" aria-label="colombia">
            🇪🇸
          </span>
        </span>
      </h1>
    </div>
  );
}

export default Header;

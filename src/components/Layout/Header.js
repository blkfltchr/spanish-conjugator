import React from 'react';

function Header() {
  return (
    <div className="header">
      <h2>
        <span className="logo">
          Spanish Conjugator{' '}
          <span role="img" aria-label="colombia">
            🇪🇸
          </span>
        </span>
      </h2>
    </div>
  );
}

export default Header;

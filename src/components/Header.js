import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h2>
        Bienvenidos, al{' '}
        <span className="logo">
          Spanish Conjugator <span role="img" aria-label="colombia">🇪🇸</span>
        </span>
      </h2>
      <div>Verb practice for Spanish language learners.</div>
    </div>
  );
};

export default Header;

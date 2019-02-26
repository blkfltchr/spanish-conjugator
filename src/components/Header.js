import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h2>
        Bienvenidos, a la{' '}
        <span to="/" className="logo">
          Spanish Conjugator 🇪🇸
        </span>
      </h2>
      <div>Verb practice for Spanish language learners.</div>
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const RandomButton = () => {
  return (
    <div>
      <Link to="/random" style={{ color: 'grey', textDecoration: 'none' }}>
        <div className="box">
          <b style={{ color: 'blue', textDecoration: 'underline' }}>
            Practice with Selected Verbs
          </b>
          <p>Conjugate random verbs based on your preferences.</p>
        </div>
      </Link>
    </div>
  );
};

export default RandomButton;

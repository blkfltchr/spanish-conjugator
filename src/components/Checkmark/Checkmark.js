import React from 'react';
import './checkmark.css';
import PropTypes from 'prop-types';

const Checkmark = props => {
  const hide = 'checkmark-hide';
  const display = 'checkmark-display';
  const { correct } = props;
  return (
    <div className={correct ? display : hide}>
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
};

Checkmark.propTypes = {
  correct: PropTypes.bool,
};

export default Checkmark;

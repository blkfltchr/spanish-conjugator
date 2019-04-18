import React from 'react';
import PropTypes from 'prop-types';

const VerbStreak = props => {
  const { count, bestStreak } = props;
  return (
    <div className="verb-streak">
      <div className="current-best-streak">
        <div className="streak">current streak:</div>
        <div className="twenty-four">{count}</div>
      </div>
      <div className="current-best-streak">
        <div className="streak">best streak:</div>
        <div className="twenty-four">
          {bestStreak}{' '}
          <span role="img" aria-label="salsa dancer">
            💃
          </span>
        </div>
      </div>
    </div>
  );
};

VerbStreak.propTypes = {
  count: PropTypes.string,
  bestStreak: PropTypes.string,
};

export default VerbStreak;

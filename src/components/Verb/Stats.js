import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  const { count, percentage, bestStreak } = props;
  return (
    <div className="verb-streak">
      <div className="current-best-streak">
        <div className="streak">current streak:</div>
        <div className="twenty-four">{count}</div>
      </div>
      <div className="current-best-streak">
        <div className="streak">best streak:</div>
        <div className="twenty-four">{bestStreak}</div>
      </div>
      <div className="current-best-streak">
        <div className="streak">percentage:</div>
        <div className="twenty-four">{percentage}%</div>
      </div>
    </div>
  );
}

Stats.propTypes = {
  count: PropTypes.number,
  percentage: PropTypes.number,
  bestStreak: PropTypes.number,
};

export default Stats;

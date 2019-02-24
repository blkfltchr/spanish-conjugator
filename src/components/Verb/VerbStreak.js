import React from 'react';

const VerbStreak = props => {
  return (
    <div>
        <b>
          Streak:
          <span> </span>
          {props.count}
        </b>
        <b>
          Best streak:
          <span> </span>
          {props.bestStreak}
        </b>
    </div>
  );
};

export default VerbStreak;

import React from 'react';

const VerbStreak = props => {
  return (
    <div className='verb-streak'>
      <div className='current-best-streak'>
        <div className='streak'>current streak:</div>
        <div className='twenty-four'>{props.count}</div>
      </div>
      <div className='current-best-streak'>
        <div className='streak'>best streak:</div>
        <div className='twenty-four'>{props.bestStreak} <span role='img' aria-label='salsa dancer'>💃</span></div>
      </div>
    </div>
  );
};

export default VerbStreak;

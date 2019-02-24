import React from 'react';

const VerbStreak = props => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{backgroundColor: 'white', padding: '10px', borderRadius: '10px', margin: '10px'}}>
        <div style={{fontSize: '12px'}}>current streak:</div>
        <div style={{fontSize: '24px'}}>{props.count}</div>
      </div>
      <div style={{backgroundColor: 'white', padding: '10px', borderRadius: '10px', margin: '10px'}}>
        <div style={{fontSize: '12px'}}>best streak:</div>
        <div style={{fontSize: '24px'}}>{props.bestStreak}</div>
      </div>
    </div>
  );
};

export default VerbStreak;

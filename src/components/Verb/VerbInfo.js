import React from 'react';

const VerbInfo = props => {
  console.log('props.tense_english', props.tense_english);
  return (
    <div style={{backgroundColor: 'white', padding: '15px 20px', borderRadius: '20px'}}>
      <div style={{fontSize: '12px'}}>Verb:</div>
      <div style={{fontSize: '24px', textTransform: 'uppercase'}}>{props.infinitive}</div>
      <div style={{fontSize: '12px'}}>Tense:</div>
      <div style={{fontSize: '24px', textTransform: 'uppercase'}}>{props.tense_english}{' '}
            {props.mood_english === 'Subjunctive'
              ? `(${props.mood_english})`
              : null}</div>
    </div>
  );
};

export default VerbInfo;

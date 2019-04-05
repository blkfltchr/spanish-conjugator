import React from 'react';

const Info = props => {
  return (
    <div className='verb-info'>
      <div className='twelve'>Verb:</div>
      <div className='twenty-four'>{props.infinitive} <span>({props.infinitive_english})</span></div>
      <div className='twelve'>Tense:</div>
      <div className='twenty-four'>{props.tense_english}{' '}
            {props.mood_english === 'Subjunctive'
              ? `(${props.mood_english})`
              : null}</div>
    </div>
  );
};

export default Info;

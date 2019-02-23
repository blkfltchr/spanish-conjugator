import React from 'react';

const VerbInfo = props => {
  console.log('props.tense_english', props.tense_english);
  return (
    <div>
      <div className="verb-info-text">
        <div className="verb-info-text-left">
          <p>
            Verb:&nbsp;<span> </span>
          </p>
          <p>
            <b>{props.infinitive}</b> <span> </span> ({props.infinitive_english}
            )
          </p>
        </div>
        <b>
          Streak:
          <span> </span>
          {props.count}
        </b>
      </div>
      <div className="verb-info-text">
        <div className="verb-info-text-left">
          <span>Tense:&nbsp;</span>
          <p>
            {props.tense_english}{' '}
            {props.mood_english === 'Subjunctive'
              ? `(${props.mood_english})`
              : null}
          </p>
        </div>
        <b>
          Best streak:
          <span> </span>
          {props.bestStreak}
        </b>
      </div>
    </div>
  );
};

export default VerbInfo;

import React from 'react';

const VerbInfo = props => {
  console.log('PROPS from verb info', props);
  return (
    <div>
      <div className="streak-flex">
        <p>
          <b>Verb: </b>
          {props.infinitive} <span>({props.infinitive_english})</span>
        </p>
        <p>
          <b>Streak: </b>
          {props.count}
        </p>
      </div>
      <div className="best-streak">
        <p>
          <b>Tense: </b>
          {props.tense_english} {props.mood_english}
        </p>
        <p>
          <b>Best streak: </b>
          {props.bestStreak}
        </p>
      </div>
      <div className="tense-section" />
    </div>
  );
};

export default VerbInfo;

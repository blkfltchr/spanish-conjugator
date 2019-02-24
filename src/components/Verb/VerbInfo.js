import React from 'react';

const VerbInfo = props => {
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
      </div>
      <div className="verb-info-text">
        <div className="verb-info-text-left">
          <span>Tense:&nbsp;</span>
          <p>
            <b>{props.tense_english} {props.mood_english}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerbInfo;

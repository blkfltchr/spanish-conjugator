import React from 'react';
import PropTypes from 'prop-types';

const Info = props => {
  const { infinitive, infinitive_english, tense_english, mood_english } = props;
  return (
    <div className="verb-info">
      <div className="twelve">Verb:</div>
      <div className="twenty-four">
        {infinitive} <span>({infinitive_english})</span>
      </div>
      <div className="twelve">Tense:</div>
      <div className="twenty-four">
        {tense_english}{' '}
        {mood_english === 'Subjunctive' ? `(${mood_english})` : null}
      </div>
    </div>
  );
};

Info.propTypes = {
  infinitive: PropTypes.string,
  infinitive_english: PropTypes.string,
  tense_english: PropTypes.string,
  mood_english: PropTypes.string
};

export default Info;

import React from 'react';
import PropTypes from 'prop-types';

function Info(props) {
  const { infinitive, infinitiveEnglish, tenseEnglish, moodEnglish } = props;
  // console.log('infinitive_english FROM INFO', infinitiveEnglish);
  return (
    <div className="verb-info">
      <div className="twelve">Verb:</div>
      <div className="twenty-four">
        {infinitive} <span>({infinitiveEnglish})</span>
      </div>
      <div className="twelve">Tense:</div>
      <div className="twenty-four">
        {tenseEnglish}{' '}
        {moodEnglish === 'Subjunctive' ? `(${moodEnglish})` : null}
      </div>
    </div>
  );
}

Info.propTypes = {
  infinitive: PropTypes.string,
  infinitiveEnglish: PropTypes.string,
  tenseEnglish: PropTypes.string,
  moodEnglish: PropTypes.string
};

export default Info;

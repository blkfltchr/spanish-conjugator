import React from 'react';
import PropTypes from 'prop-types';

function Info(props) {
  const { loading, verb } = props;
  const { infinitive, infinitiveEnglish, tenseEnglish, moodEnglish } = verb;
  let verbInfo;
  if (loading) {
    verbInfo = <span>Loading..</span>;
  } else {
    verbInfo = (
      <span>
        <b>{infinitive.toUpperCase()}</b> ({infinitiveEnglish})
      </span>
    );
  }
  return (
    <div className="verb-info">
      <div className="twelve">Verb:</div>
      <div className="twenty-four">{verbInfo}</div>
      <div className="twelve">Tense:</div>
      <div className="twenty-four">
        {tenseEnglish}{' '}
        {moodEnglish === 'Subjunctive' ? `(${moodEnglish})` : null}
      </div>
    </div>
  );
}

Info.propTypes = {
  verb: PropTypes.object,
  loading: PropTypes.bool,
};

export default Info;

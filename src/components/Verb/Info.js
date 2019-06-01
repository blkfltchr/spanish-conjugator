import React from 'react';
import PropTypes from 'prop-types';

function Info(props) {
  const {
    loading,
    infinitive,
    infinitiveEnglish,
    tenseEnglish,
    moodEnglish,
  } = props;
  let verb;
  if (loading) {
    verb = <span>Loading..</span>;
  } else {
    verb = (
      <span>
        <b>{infinitive.toUpperCase()}</b> ({infinitiveEnglish})
      </span>
    );
  }
  return (
    <div className="verb-info">
      <div className="twelve">Verb:</div>
      <div className="twenty-four">{verb}</div>
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
  moodEnglish: PropTypes.string,
  loading: PropTypes.bool,
};

export default Info;

import React from 'react';
import PropTypes from 'prop-types';

function VerbTenses(props) {
  const { updateVerbTenses } = props;
  return (
    <div className="settings-dropdown">
      <p className="settings-text">Difficulty</p>
      <select onChange={updateVerbTenses}>
        <option value="0" defaultValue="Beginner">
          Present tense
        </option>
        <option value="1">Present and Preterite</option>
        <option value="2">Present, Preterite and Imperfect</option>
        <option value="3">The above + Present Perfect</option>
        <option value="4">The above + Conditional</option>
        <option value="5">The above + Future</option>
        <option value="6">The above + Subjunctive</option>
      </select>
    </div>
  );
}

VerbTenses.propTypes = {
  updateVerbTenses: PropTypes.func
};

export default VerbTenses;

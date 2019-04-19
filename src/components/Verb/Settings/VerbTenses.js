import React from 'react';

const VerbTenses = props => {
  return (
    <div className="settings-dropdown">
      <p className="settings-text">Difficulty</p>
      <select onChange={props.updateVerbTenses}>
        <option value='0' defaultValue="Beginner">
          Popular verbs, present tense
        </option>
        <option value="1">Popular verbs, present + preterite</option>
        <option value="2">All verbs, present + preterite</option>
        <option value="3">The above + Imperfect</option>
        <option value="4">The above + future</option>
        <option value="5">The above + present perfect</option>
        <option value="6">All verbs and tenses</option>
      </select>
    </div>
  );
};

export default VerbTenses;

import React from 'react';

const VerbNumberPerson = props => {
  return (
    <div>
      <p className="settings-text">Spanish Type</p>
      <select onChange={props.updateNumPerson}>
        <option value="Latam">Latin America</option>
        <option value="Spain">Spain</option>
      </select>
    </div>
  );
};

export default VerbNumberPerson;

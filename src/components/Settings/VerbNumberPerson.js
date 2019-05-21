import React from 'react';
import PropTypes from 'prop-types';

function VerbNumberPerson(props) {
  const { updateNumPerson } = props;
  return (
    <div className="settings-dropdown">
      <p className="settings-text">Spanish Type</p>
      <select onChange={updateNumPerson}>
        <option value="Latam">Latin America</option>
        <option value="Spain">Spain</option>
      </select>
    </div>
  );
}

VerbNumberPerson.propTypes = {
  updateNumPerson: PropTypes.func
};

export default VerbNumberPerson;

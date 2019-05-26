import React from 'react';
import PropTypes from 'prop-types';

function VerbRegion(props) {
  const { updateLatam } = props;
  return (
    <div className="settings-dropdown">
      <p className="settings-text">Spanish Type</p>
      <select onChange={updateLatam}>
        <option value="Latam">Latin America</option>
        <option value="Spain">Spain</option>
      </select>
    </div>
  );
}

VerbRegion.propTypes = {
  updateLatam: PropTypes.func
};

export default VerbRegion;

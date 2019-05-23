import React, { useState } from 'react';
import '../../app.css';
import PropTypes from 'prop-types';
import VerbTenses from './VerbTenses';
import VerbRegion from './VerbRegion';

function Settings(props) {
  const [updateSettings, setUpdateSettings] = useState(false);
  const hide = 'settings-buttons-hide';
  const display = 'settings-buttons-display';
  const { updateVerbTenses, updateNumPerson } = props;

  const changeSettings = event => {
    const { handleRefresh } = props;
    event.preventDefault();
    setUpdateSettings(!updateSettings);
    if (updateSettings) {
      alert('Your settings are updated.');
      handleRefresh(event);
    }
  };
  return (
    <div className="settings">
      <button type="button" onClick={changeSettings} className="button-options">
        {updateSettings ? 'Update level' : 'Change level'}
      </button>
      <div className="two-dropdowns">
        <div className={updateSettings ? display : hide}>
          <VerbTenses updateVerbTenses={updateVerbTenses} />
        </div>
        <div className={updateSettings ? display : hide}>
          <VerbRegion updateNumPerson={updateNumPerson} />
        </div>
      </div>
    </div>
  );
}

Settings.propTypes = {
  updateVerbTenses: PropTypes.func,
  updateNumPerson: PropTypes.func,
  handleRefresh: PropTypes.func
};

export default Settings;

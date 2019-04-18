import React, { Component } from 'react';
import '../../app.css';
import PropTypes from 'prop-types';
import VerbTenses from './VerbTenses';
import NumberPerson from './VerbNumberPerson';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSettings: false,
    };
  }

  changeSettings = event => {
    const { updateSettings } = this.state;
    const { filterData } = this.props;
    event.preventDefault();
    this.setState({
      updateSettings: !updateSettings,
    });
    if (updateSettings) {
      alert('Your settings are updated.');
      filterData(event);
    }
  };

  render() {
    const hide = 'settings-buttons-hide';
    const display = 'settings-buttons-display';
    const { updateSettings } = this.state;
    const { updateVerbTenses, updateNumPerson } = this.props;
    return (
      <div className="settings">
        <button
          type="button"
          onClick={this.changeSettings}
          className="button-options"
        >
          {updateSettings ? 'Update level' : 'Change level'}
        </button>
        <div className="two-dropdowns">
          <div className={updateSettings ? display : hide}>
            <VerbTenses updateVerbTenses={updateVerbTenses} />
          </div>
          <div className={updateSettings ? display : hide}>
            <NumberPerson updateNumPerson={updateNumPerson} />
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  updateVerbTenses: PropTypes.bool,
  updateNumPerson: PropTypes.bool,
  filterData: PropTypes.func,
};

export default Settings;

import React, { Component } from 'react';
import VerbTenses from './VerbTenses';
import NumberPerson from './VerbNumberPerson';
import '../../app.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSettings: false
    };
  }
  changeSettings = event => {
    event.preventDefault();
    this.setState({
      updateSettings: !this.state.updateSettings
    });
    if(this.state.updateSettings) {
      alert('Your settings are updated.')
      this.props.filterData(event)
    }
  };

  render() {
    const hide = 'settings-buttons-hide';
    const display = 'settings-buttons-display';
    return (
      <div className="settings">
        <button onClick={this.changeSettings} className="button-options">
          {this.state.updateSettings ? 'Update level' : 'Change level'}
        </button>
      <div className="two-dropdowns">
        <div className={this.state.updateSettings ? display : hide}>
            <VerbTenses updateVerbTenses={this.props.updateVerbTenses} />
        </div>
        <div className={this.state.updateSettings ? display : hide}>
            <NumberPerson updateNumPerson={this.props.updateNumPerson} />
        </div>
      </div>
      </div>
    );
  }
}

export default Settings;

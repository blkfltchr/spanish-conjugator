import React, { Component } from 'react';
import VerbFrequency from './VerbFrequency';
import VerbTenses from './VerbTenses';
import NumberPerson from './NumberPerson';
import RandomButton from '../home/RandomButton';
import ConversationButton from '../home/ConversationButton';

class OptionsContainer extends Component {
  constructor() {
    super();
    this.state = {
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate'
    };
  }

  updateNumPerson = event => {
    this.setState({
      NumberPerson: event.target.value
    });
  };

  updateVerbTenses = event => {
    this.setState({
      VerbTenses: event.target.value
    });
  };

  render() {
    console.log('Verbs', this.state.VerbTenses);
    return (
      <div>
        <form onSubmit={this.props.filterData}>
          <button type="submit">Start</button>
        </form>
        <div>
          <h3>Verb Frequency</h3>
          <VerbFrequency />
        </div>
        <div>
          <h3>Verb Tenses</h3>
          <VerbTenses
            setTenses={this.props.setTenses}
            updateVerbTenses={this.updateVerbTenses}
          />
        </div>
        <div>
          <h3>Number and Person</h3>
          <NumberPerson updateNumPerson={this.updateNumPerson} />
        </div>
        <RandomButton />
        <ConversationButton />
      </div>
    );
  }
}

export default OptionsContainer;

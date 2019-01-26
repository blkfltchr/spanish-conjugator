import React, { Component } from 'react';
import miniData from '../../miniData';
import VerbFrequency from './VerbFrequency';
import VerbTenses from './VerbTenses';
import NumberPerson from './NumberPerson';
import RandomButton from '../home/RandomButton';
import ConversationButton from '../home/ConversationButton';
import { spainSpanish, latamSpanish } from '../../components/NumPersonFilters';
import { beginner, intermediate } from '../../components/VerbTensesFilters';
import { Link } from 'react-router-dom';

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: miniData,
      tempData: [],
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate'
    };
  }

  filterData = event => {
    event.preventDefault();

    if (this.state.VerbTenses === 'Beginner') {
      this.setState({
        data: beginner
      });
    } else if (this.state.VerbTenses === 'Intermediate') {
      this.setState({
        data: intermediate
      });
    } else if (this.state.VerbTenses === 'Advanced') {
      this.setState({
        data: miniData
      });
    }

    const spainSpanishFiltered = spainSpanish(this.state.data);
    if (this.state.NumberPerson === 'Spain') {
      this.setState({
        tempData: spainSpanishFiltered
      });
    }
    const latamFiltered = latamSpanish(this.state.data);
    if (this.state.NumberPerson === 'Latam') {
      this.setState({
        tempData: latamFiltered
      });
    }
  };

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
    console.log('Data =', this.state.data);
    console.log('Temp data =', this.state.tempData);
    return (
      <div>
        <form onSubmit={this.filterData}>
          <Link to="/random">
            <button type="submit">Start</button>
          </Link>
        </form>
        <div>
          <h3>Verb Frequency</h3>
          <VerbFrequency />
        </div>
        <div>
          <h3>Verb Tenses</h3>
          <VerbTenses updateVerbTenses={this.updateVerbTenses} />
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

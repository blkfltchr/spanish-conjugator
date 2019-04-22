import React, { Component } from 'react';

import '../../app.css';

import Settings from '../Settings/Settings';
import { spainSpanish, latamSpanish } from '../Filters/NumPersonFilters';
import { VerbTenseFilters } from '../Filters/VerbTensesFilters';
import Input from './Input';

const initialState = {
  correct: false,
  randomVerb: {},
  randomPerson: [],
};

class Verb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      data: latamSpanish(VerbTenseFilters[0]),
      NumberPerson: 'Latam',
      level: 0,
      count: 0,
    };
  }

  componentDidMount() {
    this.randomize();
  }

  randomize = () => {
    const { data } = this.state;
    let randomVerb = data[Math.floor(Math.random() * data.length)];
    let randomPerson = Object.entries(randomVerb)[
      Math.floor(Math.random() * 5) + 7
    ];
    // This do while loop check for an empty string or Imperative Negative and randomises the verb again if it's found
    do {
      randomVerb = data[Math.floor(Math.random() * data.length)];
      randomPerson = Object.entries(randomVerb)[
        Math.floor(Math.random() * 5) + 7
      ];
    } while (
      randomPerson[1] === '' ||
      randomVerb.mood_english === 'Imperative Negative'
    );
    this.setState({
      randomVerb,
      randomPerson,
    });
  };

  handleRefresh = () => {
    this.setState({
      ...initialState,
    });
    this.randomize();
  };

  addCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  resetCounter = () => {
    this.setState({
      count: 0,
    });
  };

  updateNumPerson = event => {
    this.setState({
      NumberPerson: event.target.value,
    });
  };

  updateVerbTenses = event => {
    this.setState({
      level: event.target.value,
    });
    this.handleRefresh();
  };

  filterData = event => {
    event.preventDefault();
    const { level, NumberPerson } = this.state;
    const Level = parseInt(level);
    if (NumberPerson === 'Spain') {
      const spainSpan = spainSpanish(VerbTenseFilters[Level]);
      this.setState({
        data: spainSpan,
      });
    }

    if (NumberPerson === 'Latam') {
      const latamSpan = latamSpanish(VerbTenseFilters[Level]);
      this.setState({
        data: latamSpan,
      });
    }
    this.handleRefresh();
  };

  render() {
    const { randomVerb, randomPerson, data, count } = this.state;
    console.log('Answer:', randomPerson[1]);
    return (
      <div>
        <Input
          data={data}
          randomPerson={randomPerson}
          randomVerb={randomVerb}
          randomize={this.randomize}
          addCounter={this.addCounter}
          resetCounter={this.resetCounter}
          addStreak={this.addStreak}
          count={count}
        />
        <Settings
          filterData={this.filterData}
          updateVerbTenses={this.updateVerbTenses}
          updateNumPerson={this.updateNumPerson}
        />
      </div>
    );
  }
}

export default Verb;

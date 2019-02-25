import React, { Component } from 'react';

import '../../app.css';
import miniData from '../../miniData';

import VerbInfo from './VerbInfo';
import Settings from './Settings/Settings';
import { spainSpanish, latamSpanish } from '../NumPersonFilters';
import { Beginner, Intermediate } from '../VerbTensesFilters';
import VerbInput from './VerbInput';
import VerbStreak from './VerbStreak';

const initialState = {
  value: '',
  helperText: null,
  correct: false,
  randomVerb: {},
  randomPerson: []
};
class Verb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      count: 0,
      bestStreak: 0,
      beginner: true,
      data: latamSpanish(Beginner),
      NumberPerson: 'Latam',
      VerbTenses: 'Beginner',
      answered: false
    };
  }

  componentDidMount() {
    this.setState({
      hint: false
    });
    this.randomize();
  }

  randomize = () => {
    const randomVerb = this.state.data[
      Math.floor(Math.random() * this.state.data.length)
    ];
    const randomPerson = Object.entries(randomVerb)[
      Math.floor(Math.random() * 5) + 7
    ];
    this.setState({
      randomVerb,
      randomPerson
    });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userInput = this.state.value.toLowerCase();
    if (this.state.answered === true) {
      this.handleRefresh();
      this.setState({
        answered: false
      });
    } else if (this.state.randomPerson[1] === userInput) {
      this.addCounter();
      alert('Correct!');
      this.handleRefresh();
      this.setState({
        correct: true
      });
      this.addStreak();
    } else if (this.state.randomPerson[1] !== userInput) {
      this.setState({
        helperText: `False, the correct answer is ${
          this.state.randomPerson[1]
        }.`,
        answered: true
      });
      this.resetCounter();
    }
  };

  handleRefresh = () => {
    this.setState({
      ...initialState
    });
    this.randomize();
  };

  handleHint = event => {
    const answer = this.state.randomPerson[1];
    event.preventDefault();
    this.setState({
      hint: true,
      helperText: `The answer ends with -${answer.substring(
        answer.length - 3,
        answer.length
      )}.`
    });
  };

  addStreak = () => {
    if (this.state.count >= this.state.bestStreak) {
      this.setState(prevState => {
        return {
          bestStreak: prevState.bestStreak + 1
        };
      });
    }
  };

  addCounter = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0
    });
  };

  handleLevelChange = () => {
    this.setState(prevState => {
      return {
        beginner: !prevState.beginner
      };
    });
    this.handleRefresh();
    if (!this.state.beginner) {
      alert(
        "If you don't know the first verb tense/conjugation, you can click the 'Next verb' button."
      );
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
    this.handleRefresh();
  };

  filterData = event => {
    event.preventDefault();

    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Beginner'
    ) {
      const spainBeg = spainSpanish(Beginner);
      this.setState({
        data: spainBeg
      });
    }
    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Intermediate'
    ) {
      const spainInter = spainSpanish(Intermediate);
      this.setState({
        data: spainInter
      });
    }
    if (
      this.state.NumberPerson === 'Spain' &&
      this.state.VerbTenses === 'Advanced'
    ) {
      const spainAdv = spainSpanish(miniData);
      this.setState({
        data: spainAdv
      });
    }

    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Beginner'
    ) {
      const latamBeg = latamSpanish(Beginner);
      this.setState({
        data: latamBeg
      });
    }
    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Intermediate'
    ) {
      const latamInter = latamSpanish(Intermediate);
      this.setState({
        data: latamInter
      });
    }
    if (
      this.state.NumberPerson === 'Latam' &&
      this.state.VerbTenses === 'Advanced'
    ) {
      const latamAdv = latamSpanish(miniData);
      this.setState({
        data: latamAdv
      });
    }
  };

  addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    this.setState({
      value: this.state.value + accent
    });
  };

  render() {
    const { count, bestStreak, randomVerb, randomPerson } = this.state;
    const {
      infinitive,
      tense_english,
      mood_english
    } = randomVerb;
    const buttonText = this.state.randomPerson[1] !== this.state.value.toLowerCase() && this.state.answered ? 'Next verb' : 'Submit'
    return (
      <div>
        <Settings
          updateNumPerson={this.updateNumPerson}
          updateVerbTenses={this.updateVerbTenses}
          filterData={this.filterData}
        />
        <div className="verb-info-wrapper">
          <VerbStreak bestStreak={bestStreak} count={count} />
          <VerbInfo
            randomPerson={randomPerson[0]}
            infinitive={infinitive}
            tense_english={tense_english}
            mood_english={mood_english}
          />
        </div>
        <VerbInput
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          addAccent={this.addAccent}
        />
        <Settings handleRefresh={this.handleRefresh}/>
        <div style={{textAlign: 'center'}}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
      </div>
    );
  }
}

export default Verb;

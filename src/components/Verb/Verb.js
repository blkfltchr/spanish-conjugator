import React, { Component } from 'react';

import '../../app.css';
import miniData from '../../miniData';

import VerbInfo from './VerbInfo';
import VerbPerson from './VerbPerson';
import Settings from './Settings/Settings';
import { spainSpanish, latamSpanish } from '../NumPersonFilters';
import { Beginner, Intermediate } from '../VerbTensesFilters';
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
      data: latamSpanish(Intermediate),
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate',
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
          this.state.randomPerson[1].toUpperCase()
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

  handleExample = event => {
    const hablar = this.state.data.filter(verb => (verb.infinitive === 'hablar'))
    const hablarTense = hablar.filter(verb => (verb.tense_english === this.state.randomVerb.tense_english))
    const hablarMood = hablarTense.filter(verb => (verb.mood_english === this.state.randomVerb.mood_english))
    const hablarExample = hablarMood[0]
    event.preventDefault();
    this.setState({
      hint: true,
      helperText: `Yo + Hablar + ${this.state.randomVerb.tense_english} = YO ${hablarExample.form_1s.toUpperCase()}`
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

  render() {
    console.log('answer:', this.state.randomPerson[1]);
    const {
      count,
      bestStreak,
      randomVerb,
      randomPerson,
      helperText,
      value
    } = this.state;
    const {
      infinitive,
      tense_english,
      mood_english
    } = randomVerb;
    const buttonText = this.state.randomPerson[1] !== this.state.value.toLowerCase() && this.state.answered ? 'Next verb' : 'Submit'
    return (
      <div>
        <div className="verb-info-wrapper">
          <VerbStreak bestStreak={bestStreak} count={count} />
          <VerbInfo
            randomPerson={randomPerson[0]}
            infinitive={infinitive}
            tense_english={tense_english}
            mood_english={mood_english}
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className="input-section">
              <VerbPerson randomPerson={randomPerson[0]} />
              <input
                type="text"
                value={value}
                placeholder="Enter conjugated verb..."
                onChange={this.handleChange}
                className="input"
              />
            </div>
            <div className="text-under-input">
              <div
                style={{cursor: 'pointer'}}
                type="button"
                onClick={this.handleExample}
              >
                Show example
              </div>
              <span>En Español</span>
            </div>
          </label>
          <div style={{height: '105px'}}>
            <button
              className="submit-button"
              type="submit"
              onClick={this.handleSubmit}
              >
              {buttonText}
            </button>
          {helperText && <p>{helperText}</p>}
        </div>
        </form>
        <Settings handleRefresh={this.handleRefresh}/>
        <div style={{textAlign: 'center'}}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
      </div>
    );
  }
}

export default Verb;

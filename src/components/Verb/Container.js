import React, { Component } from 'react';

import '../../app.css';

import Info from './Info';
import Settings from './Settings/Settings';
import { spainSpanish, latamSpanish } from '../NumPersonFilters';
import { VerbTenseFilters } from '../VerbTensesFilters';
import Input from './Input';
// import VerbStreak from './VerbStreak';
import Reward from 'react-rewards';

const initialState = {
  value: '',
  helperText: null,
  correct: false,
  randomVerb: {},
  randomPerson: []
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      count: 0,
      bestStreak: 0,
      beginner: true,
      data: latamSpanish(VerbTenseFilters[0]),
      NumberPerson: 'Latam',
      VerbTenses: 'Beginner',
      answered: false,
      totalAnswers: 0,
      correctAnswers: 0,
      Level: 0
    };
  }

  componentDidMount() {
    this.setState({
      hint: false
    });
    this.randomize();
  }

  randomize = () => {
    let randomVerb = this.state.data[
      Math.floor(Math.random() * this.state.data.length)
    ];
    let randomPerson = Object.entries(randomVerb)[
      Math.floor(Math.random() * 5) + 7
    ];
    // This do while loop check for an empty string or Imperative Negative and randomises the verb again if it's found
    do {
      randomVerb = this.state.data[
        Math.floor(Math.random() * this.state.data.length)
      ];
      randomPerson = Object.entries(randomVerb)[
            Math.floor(Math.random() * 5) + 7]
    } while (randomPerson[1] === '' || randomVerb.mood_english === 'Imperative Negative')
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
      this.setState(prevState => {
        return {
          totalAnswers: prevState.totalAnswers + 1
        };
      });
      this.handleRefresh();
      this.setState({
        answered: false
      });
    } else if (this.state.randomPerson[1] === userInput) {
      this.addCounter();
      this.setState(prevState => {
        return {
          correctAnswers: prevState.correctAnswers + 1,
          totalAnswers: prevState.totalAnswers + 1
        };
      });
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
      })
      if (this.state.bestStreak % 5 === 0) {
        this.reward.rewardMe();
      }
      
    }
  };

  addCounter = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  updateNumPerson = event => {
    this.setState({
      NumberPerson: event.target.value
    });
  };

  updateVerbTenses = event => {
    this.setState({
      Level: event.target.value
    });
    this.handleRefresh();
  };

  filterData = event => {
    event.preventDefault();

    let Level = parseInt(this.state.Level)
    if (
      this.state.NumberPerson === 'Spain'
    ) {
      const spainSpan = spainSpanish(VerbTenseFilters[Level]);
      this.setState({
        data: spainSpan
      });
    }

    if (this.state.NumberPerson === 'Latam') {
      const latamSpan = latamSpanish(VerbTenseFilters[Level])
      this.setState({
        data: latamSpan
      })
    }
    this.handleRefresh()
  };

  addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    this.setState({
      value: this.state.value + accent
    });
  };

  render() {
    console.log("Answer:", this.state.randomPerson[1])
    console.log('data', this.state.data)
    const percentage = this.state.totalAnswers < 1 ? 0 : ((this.state.correctAnswers/this.state.totalAnswers) * 100).toFixed(0)
    const { count, bestStreak, randomVerb, randomPerson } = this.state;
    const {
      infinitive,
      tense_english,
      mood_english
    } = randomVerb;
    const buttonText = this.state.randomPerson[1] !== this.state.value.toLowerCase() && this.state.answered ? 'Next verb' : 'Submit'
    return (
      <div>
        <div className="verb-info-wrapper">
          <div className='verb-streak'>
            <div className='current-best-streak'>
              <div className='streak'>current streak:</div>
              <div className='twenty-four'>{count}</div>
            </div>
            <Reward
              ref={(ref) => { this.reward = ref }}
              type='emoji'
            >
              <div className='current-best-streak'>
                <div className='streak'>best streak:</div>
                <div className='twenty-four'>{bestStreak} <span role='img' aria-label='salsa dancer'>💃</span></div>
              </div>
            </Reward>
            <div className='current-best-streak'>
                <div className='streak'>percentage:</div>
                <div className='twenty-four'>{percentage}%</div>
              </div>
          </div>
          <Info
            infinitive={infinitive}
            tense_english={tense_english}
            mood_english={mood_english}
          />
        </div>
        <Input
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          addAccent={this.addAccent}
          handleExample={this.handleExample}
          buttonText={buttonText}
          randomPerson={randomPerson}
          randomVerb={randomVerb}
          randomize={this.randomize}
          // handleRefresh={this.handleRefresh}
        />
        <Settings handleRefresh={this.handleRefresh}
        filterData={this.filterData}
        updateVerbTenses={this.updateVerbTenses}
        updateNumPerson={this.updateNumPerson}
        />
      </div>
    );
  }
}

export default Container;

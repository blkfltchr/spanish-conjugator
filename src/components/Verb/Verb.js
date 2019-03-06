import React, { Component } from 'react';

import '../../app.css';
import miniData from '../../miniData';

import VerbInfo from './VerbInfo';
import Settings from './Settings/Settings';
import { spainSpanish, latamSpanish } from '../NumPersonFilters';
// import { Beginner, Intermediate } from '../VerbTensesFilters';
import { VerbTenseFilters } from '../VerbTensesFilters';
import VerbInput from './VerbInput';
import VerbStreak from './VerbStreak';

import TakeMoney from './Billing/TakeMoney'
import { Elements, StripeProvider } from 'react-stripe-elements';


// console.log("VerbTenseFilters", Object.keys(VerbTenseFilters).includes('LevelOne'))
// console.log("VerbTenseFilters ===", VerbTenseFilters.filter(verb => Object.values(verb).includes('LevelOne')))
// console.log("VerbTenseFilters ===", VerbTenseFilters.map(verb => verb.LevelOne))
// var res = ob.filter(o=>Object.values(o).includes(input))
const level = 'LevelOne';
console.log("LEVEL", level)
console.log("Verb filter ===", VerbTenseFilters[1])

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
      data: latamSpanish(VerbTenseFilters[0]),
      NumberPerson: 'Latam',
      // VerbTensesLevel: 'LevelOne',
      Level: 0,
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

    const { Level } = Number(this.state.Level)
    console.log("LEVEL from filter data ===", Level)
    // let currentFilter = VerbTenseFilters.filter(verbSet => verbSet === this.)

    console.log("Data from filter data", this.state.data)
    if (
      this.state.NumberPerson === 'Spain'
    ) {
      const spainSpanish = spainSpanish(VerbTenseFilters[Level]);
      this.setState({
        data: spainSpanish
      });
    }

    if (this.state.NumberPerson === 'Latam') {
      const latamSpanish = spainSpanish(VerbTenseFilters(this.state.Level))
      this.setState({
        data: latamSpanish
      })
    }

    // if (
    //   this.state.NumberPerson === 'Spain' &&
    //   this.state.VerbTenses === 'LevelOne'
    // ) {
    //   const spainBeg = spainSpanish(VerbTenseFilters[this.state.Level]);
    //   this.setState({
    //     data: spainBeg
    //   });
    // }
    // if (
    //   this.state.NumberPerson === 'Spain' &&
    //   this.state.VerbTenses === 'Intermediate'
    // ) {
    //   const spainInter = spainSpanish(VerbTenseFilters);
    //   this.setState({
    //     data: spainInter
    //   });
    // }
    // if (
    //   this.state.NumberPerson === 'Spain' &&
    //   this.state.VerbTenses === 'Advanced'
    // ) {
    //   const spainAdv = spainSpanish(miniData);
    //   this.setState({
    //     data: spainAdv
    //   });
    // }

    // if (
    //   this.state.NumberPerson === 'Latam' &&
    //   this.state.VerbTenses === 'Beginner'
    // ) {
    //   const latamBeg = latamSpanish(VerbTenseFilters);
    //   this.setState({
    //     data: latamBeg
    //   });
    // }
    // if (
    //   this.state.NumberPerson === 'Latam' &&
    //   this.state.VerbTenses === 'Intermediate'
    // ) {
    //   const latamInter = latamSpanish(VerbTenseFilters);
    //   this.setState({
    //     data: latamInter
    //   });
    // }
    // if (
    //   this.state.NumberPerson === 'Latam' &&
    //   this.state.VerbTenses === 'Advanced'
    // ) {
    //   const latamAdv = latamSpanish(miniData);
    //   this.setState({
    //     data: latamAdv
    //   });
    // }
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
    console.log("Data from render", this.state.data)
    console.log("Level", this.state.Level)
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
          handleExample={this.handleExample}
          buttonText={buttonText}
        />
        <Settings handleRefresh={this.handleRefresh}
        filterData={this.filterData}
        updateVerbTenses={this.updateVerbTenses}
        updateNumPerson={this.updateNumPerson}
        />
        {/* <StripeProvider apiKey="pk_test_6uEhds8mHz26DG95ZvUwTURp"> */}
          {/* <Elements> */}
            {/* <TakeMoney /> */}
          {/* </Elements> */}
        {/* </StripeProvider> */}
        <div style={{textAlign: 'center'}}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
      </div>
    );
  }
}

export default Verb;

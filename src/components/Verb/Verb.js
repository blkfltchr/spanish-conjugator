import React, {
  Component
} from "react";

import "../../app.css";
import miniData from "../../miniData";

import VerbButtons from "./VerbButtons";
import VerbInfo from "./VerbInfo";
import VerbPerson from "./VerbPerson";
import VerbTenses from "./VerbTenses"
import NumberPerson from '../Verb/VerbNumberPerson'
import {
  spainSpanish,
  latamSpanish
} from "../NumPersonFilters";
import {
  Beginner,
  Intermediate
} from "../VerbTensesFilters"

const initialState = {
  value: "",
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
      NumberPerson: "Latam",
      VerbTenses: "Intermediate",
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
    const randomVerb = this.state.data[Math.floor(Math.random() * this.state.data.length)];
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
    event.preventDefault()
    if (this.state.answered === true){
      this.handleRefresh();
      this.setState({
        answered: false
      })
    }
    else if (this.state.randomPerson[1] === this.state.value) {
      this.addCounter();
      alert("Correct!");
      this.handleRefresh();
      this.setState({
        correct: true
      });
      this.addStreak();
    } else if (this.state.randomPerson[1] !== this.state.value) {
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
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Beginner"
    ) {
      const spainBeg = spainSpanish(Beginner);
      this.setState({
        data: spainBeg
      });
    }
    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Intermediate"
    ) {
      const spainInter = spainSpanish(Intermediate);
      this.setState({
        data: spainInter
      });
    }
    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Advanced"
    ) {
      const spainAdv = spainSpanish(miniData);
      this.setState({
        data: spainAdv
      });
    }

    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Beginner"
    ) {
      const latamBeg = latamSpanish(Beginner);
      this.setState({
        data: latamBeg
      });
    }
    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Intermediate"
    ) {
      const latamInter = latamSpanish(Intermediate);
      this.setState({
        data: latamInter
      });
    }
    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Advanced"
    ) {
      const latamAdv = latamSpanish(miniData);
      this.setState({
        data: latamAdv
      });
    }
  };

  render() {
    console.log("answer:", this.state.randomPerson);
    console.log("this.state.data:", this.state.data);
    console.log("ANSWERED", this.state.answered)
      const {count, bestStreak, randomVerb, randomPerson, helperText, value} = this.state; 
      const {infinitive, infinitive_english, tense_english, mood_english} = randomVerb;
      return (
          <div>
              <VerbTenses updateVerbTenses={ this.updateVerbTenses } />
              <NumberPerson updateNumPerson={ this.updateNumPerson } />
              <button onClick={ this.filterData } className="button-options">Update Settings</button>
              <VerbInfo infinitive={ infinitive } count={ count } infinitive_english={ infinitive_english } bestStreak={ bestStreak } tense_english={ tense_english } mood_english={ mood_english } />
              <VerbPerson randomPerson={ randomPerson[0] } />
              <form onSubmit={this.handleSubmit}>
              <label>
                  <input
              type="text"
              value={ value }
              onChange={ this.handleChange }
              className="input"
            />
            <div className="text-under-input">
                  <button className="hint-button" type="button" onClick={this.handleHint}>Hint?</button>
                  <span>En Español</span>
            </div>
              </label>
              {helperText && <p>{helperText}</p>}
              <VerbButtons handleSubmit={ this.handleSubmit } handleHint={ this.handleHint } handleRefresh={ this.handleRefresh } />
              </form>
              {/* <VerbLevelButton handleLevelChange={ this.handleLevelChange } beginner={ beginner }/> */}
          </div>
      );
    }
  }

  export default Verb
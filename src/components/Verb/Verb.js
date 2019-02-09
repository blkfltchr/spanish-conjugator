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
      data: Intermediate,
      NumberPerson: "Latam",
      VerbTenses: "Intermediate",
      updated: false
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

  handleSubmit = () => {
    if (this.state.randomPerson[1] === this.state.value) {
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
            }.`
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
    if (event.target.value === "Beginner") {
      this.setState({
        VerbTenses: "Beginner"
      });
    } else if (event.target.value === "Intermediate") {
      this.setState({
        VerbTenses: "Intermediate"
      });
    } else if (event.target.value === "Advanced") {
      this.setState({
        VerbTenses: "Advanced"
      });
    }
    this.handleRefresh();
  };

  filterData = event => {
    event.preventDefault();

    const spainBeg = spainSpanish(Beginner);
    const spainInter = spainSpanish(Intermediate);
    const spainAdv = spainSpanish(miniData);

    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Beginner"
    ) {
      this.setState({
        data: spainBeg
      });
    }
    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Intermediate"
    ) {
      this.setState({
        data: spainInter
      });
    }
    if (
      this.state.NumberPerson === "Spain" &&
      this.state.VerbTenses === "Advanced"
    ) {
      this.setState({
        data: spainAdv
      });
    }

    const latamBeg = latamSpanish(Beginner);
    const latamInter = latamSpanish(Intermediate);
    const latamAdv = latamSpanish(miniData);

    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Beginner"
    ) {
      this.setState({
        data: latamBeg
      });
    }
    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Intermediate"
    ) {
      this.setState({
        data: latamInter
      });
    }
    if (
      this.state.NumberPerson === "Latam" &&
      this.state.VerbTenses === "Advanced"
    ) {
      this.setState({
        data: latamAdv
      });
    }
    this.setState({
      updated: true
    });
  };

  render() {
    console.log("answer:", this.state.randomPerson[1]);
    console.log("this.state.data:", this.state.data);
      const {count, bestStreak, randomVerb, randomPerson, helperText, value} = this.state; // beginner
      const {infinitive, infinitive_english, tense_english, mood_english} = randomVerb;
      return (
          <div>
              <VerbTenses updateVerbTenses={ this.updateVerbTenses } />
              <NumberPerson updateNumPerson={ this.updateNumPerson } />
              <button onClick={ this.filterData } className="button-options">Update Settings</button>
              <VerbInfo infinitive={ infinitive } count={ count } infinitive_english={ infinitive_english } bestStreak={ bestStreak } tense_english={ tense_english } mood_english={ mood_english } />
              <VerbPerson randomPerson={ randomPerson[0] } />
              <label>
                  <input
              type="text"
              value={ value }
              onChange={ this.handleChange }
              className="input"
            />
                  <span style={ {fontSize: "12px"} }>En Español</span>
              </label>
              {helperText && <p>{helperText}</p>}
              <VerbButtons handleSubmit={ this.handleSubmit } handleHint={ this.handleHint } handleRefresh={ this.handleRefresh } />
              {/* <VerbLevelButton handleLevelChange={ this.handleLevelChange } beginner={ beginner }/> */}
          </div>
      );
    }
  }

  export default Verb
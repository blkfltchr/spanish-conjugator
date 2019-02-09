import React, {Component} from "react";
import "../../app.css";
import miniData from "../../miniData";

import VerbButtons from "../Verb/VerbButtons";
import VerbInfo from "../Verb/VerbInfo";
import VerbLevelButton from "../Verb/VerbLevelButton";
import VerbPerson from "../Verb/VerbPerson";

const initialState = {
  value: "",
  helperText: null,
  correct: false,
  randomVerb: {},
  randomPerson: []
};

class BeginnerRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      count: 0,
      bestStreak: 0,
      beginner: true
    };
  }

  componentDidMount() {
    this.setState({hint: false});
    this.randomize();
  }

  randomize = () => {
    const data = this.state.beginner ? this.props.beginnerData : miniData;
    const randomVerb = data[Math.floor(Math.random() * data.length)];
    const randomPerson = Object.entries(randomVerb)[
      Math.floor(Math.random() * 5) + 7
    ];
    this.setState({
      randomVerb,
      randomPerson
    });
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  handleSubmit = () => {
    if (this.state.randomPerson[1] === this.state.value) {
      this.addCounter();
      alert("Correct!");
      this.handleRefresh();
      this.setState({correct: true});
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
    this.setState({...initialState});
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

  render() {
      console.log("answer:", this.state.randomPerson[1]);
      const {count, bestStreak, randomVerb, randomPerson, helperText, value, beginner} = this.state;
      const {infinitive, infinitive_english, tense_english, mood_english} = randomVerb;
      return (
          <div>
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
              <VerbLevelButton handleLevelChange={ this.handleLevelChange } beginner={ beginner }/>
          </div>
      );
    }
  }

export default BeginnerRandom;

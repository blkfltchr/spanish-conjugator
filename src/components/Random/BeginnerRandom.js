import React, {Component} from "react";
import "../../app.css";
import RandomPerson from "./RandomPerson"
import miniData from "../../miniData"

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
    const data = this.state.beginner ? this.props.beginnerData : miniData
    const randomVerb = data[
      Math.floor(Math.random() * data.length)
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
        beginner: !prevState.beginner}
      })
    this.handleRefresh()
  }

  render() {
    console.log("this.state.beginner:", this.state.beginner);
    console.log("answer:", this.state.randomPerson[1]);
    if (!this.state.randomVerb) {
      return <h1>Loading....</h1>;
    } else {
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
        infinitive_english,
        tense_english,
        mood_english
      } = randomVerb;
      return (
          <div>
              <div className="streak-flex">
                  <p>
                      <b>Verb: </b>
                      {infinitive}
                  </p>
                  <p>
                      <b>Streak: </b>
                      {count}
                  </p>
              </div>
              <div className="streak-flex">
                  <p>
                      <b>Translation: </b>
                      {infinitive_english}
                  </p>
                  <p>
                      <b>Best streak: </b>
                      {bestStreak}
                  </p>
              </div>
              <p>
                  <b>Tense: </b>
                  {tense_english} {mood_english}
              </p>
              <div className="person-flex">
                  <b>Pronoun: </b>
                  <RandomPerson randomPerson={ randomPerson[0] }/>
              </div>
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
              <div className="three-buttons">
                  <button className="button" onClick={ this.handleSubmit }>
              Check
                  </button>
                  <button className="button" onClick={ this.handleHint }>
              Hint
                  </button>
                  <button className="button" onClick={ this.handleRefresh }>
              Next verb
                  </button>
              </div>
              <div className="box-container" onClick={ this.handleLevelChange }>
                  <div className='box'>
                      {this.state.beginner &&
                      <div>
                          <p><b>Advanced</b></p>
                          <p>You've been speaking Spanish for a while, feel comfortable in conversation, and want to take your skills to the highest level.</p>
                      </div>
                      }
                      {!this.state.beginner &&
                      <div>
                          <p><b>Beginner</b></p>
                          <p>You've just started learning Spanish and you want to build a strong foundation by practicing the basics.</p>
                      </div>
                      }
                  </div>
              </div>
          </div>
      );
    }
  }
}

export default BeginnerRandom;

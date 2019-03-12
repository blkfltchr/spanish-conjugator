import React, { Component } from 'react'
import Person from './Person';
import AccentButtons from './AccentButtons';

const initialState = {
  value: '',
  helperText: null
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      helperText: null,
      totalAnswers: 0,
      correctAnswers: 0,
      answered: false
    }
  }

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
    } else if (this.props.randomPerson[1] === userInput) {
      this.props.addCounter();
      this.setState(prevState => {
        return {
          correctAnswers: prevState.correctAnswers + 1,
          totalAnswers: prevState.totalAnswers + 1
        };
      });
      alert('Correct!')
      this.handleRefresh();
      this.setState({
        correct: true
      });
      this.props.addStreak();
    } else if (this.props.randomPerson[1] !== userInput) {
      this.setState({
        helperText: `False, the correct answer is ${
          this.props.randomPerson[1].toUpperCase()
        }.`,
        answered: true
      });
      this.resetCounter();
    }
  };
  
  handleExample = event => {
    const hablar = this.props.state.data.filter(verb => (verb.infinitive === 'hablar'))
    const hablarTense = hablar.filter(verb => (verb.tense_english === this.props.randomVerb.tense_english))
    const hablarMood = hablarTense.filter(verb => (verb.mood_english === this.props.randomVerb.mood_english))
    const hablarExample = hablarMood[0]
    event.preventDefault();
    this.setState({
      hint: true,
      helperText: `Yo + Hablar + ${this.props.randomVerb.tense_english} = YO ${hablarExample.form_1s.toUpperCase()}`
    });
  };

  addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    this.setState({
      value: this.state.value + accent
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0
    });
  };

  handleRefresh = () => {
    this.setState({
      ...initialState
    });
    this.props.randomize();
  };

  render() {
    const { randomPerson } = this.props.state;
    const {helperText, value, answered} = this.state
    const buttonText = randomPerson[1] !== value.toLowerCase() && answered ? 'Next verb' : 'Check'
    return (
      <div>
              <form onSubmit={this.handleSubmit}>
        <label>
          <div className="input-section">
            <Person randomPerson={randomPerson[0]} />
            <input
              type="text"
              value={value}
              placeholder="Enter conjugated verb..."
              onChange={this.handleChange}
              className="input"
              style={{paddingLeft: "10px"}}
              />
          </div>
          <div className="text-under-input">
              <AccentButtons addAccent={this.addAccent} />
              <div
                className="hover-text"
                type="button"
                onClick={this.handleExample}
              >
                Show example <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </div>
        </label>
        <div style={{height: '85px', position: "relative", padding: "10px 0"}}>
        {helperText && <div style={{textAlign: "center"}}>{helperText}</div>}
        <button
          className="submit-button"
          type="submit"
          onClick={this.handleSubmit}
          >
          {buttonText}
        </button>
        </div>
      </form>
      </div>
    );
  }
}

export default Input;

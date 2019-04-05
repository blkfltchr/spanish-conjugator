import React, { Component } from 'react'
import Person from './Person';
import AccentButtons from './AccentButtons';
import Info from './Info';
import Reward from 'react-rewards';
import Checkmark from '../Checkmark/Checkmark';

const initialState = {
  value: '',
  helperText: null,
  correct: false
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      bestStreak: 0,
      totalAnswers: 0,
      correctAnswers: 0,
      answered: false,
    }
  }

  handleChange = event => {
    this.setState({
      correct: false,
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
      // alert('Correct!')
      this.handleRefresh();
      this.setState({
        correct: true
      });
      this.addStreak();
    } else if (this.props.randomPerson[1] !== userInput) {
      this.setState({
        helperText: `False, the correct answer is ${
          this.props.randomPerson[1].toUpperCase()
        }.`,
        answered: true
      });
      this.props.resetCounter();
    }
  };
  
  handleExample = event => {
    const hablar = this.props.data.filter(verb => (verb.infinitive === 'hablar'))
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

  handleRefresh = () => {
    this.setState({
      ...initialState,
      correct: false
    });
    this.props.randomize();
  };

  addStreak = () => {
    if (this.props.count >= this.state.bestStreak) {
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

  render() {
    const { randomPerson, randomVerb, count } = this.props;
    const { helperText, value, answered, bestStreak, correct } = this.state
    const { infinitive, tense_english, mood_english, infinitive_english } = randomVerb;
    const buttonText = randomPerson[1] !== value.toLowerCase() && answered ? 'Next verb' : 'Submit'
    const percentage = this.state.totalAnswers < 1 ? 0 : ((this.state.correctAnswers/this.state.totalAnswers) * 100).toFixed(0)
    console.log(infinitive_english)
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
            infinitive_english={infinitive_english}
            tense_english={tense_english}
            mood_english={mood_english}
          />
        </div>
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
              />
              <Checkmark correct={correct} />
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
        <div className="helper-text">
        {helperText && <div>{helperText}</div>}
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
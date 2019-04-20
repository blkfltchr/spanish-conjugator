import React, { Component } from 'react';
import Reward from 'react-rewards';
import PropTypes from 'prop-types';
import Info from './Info';
import Input from './Input';

const initialState = {
  value: '',
  helperText: null,
  correct: false,
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      bestStreak: 0,
      totalAnswers: 0,
      correctAnswers: 0,
      answered: false,
    };
  }

  handleChange = event => {
    this.setState({
      correct: false,
      value: event.target.value,
    });
  };

  handleSubmit = event => {
    const { value, answered } = this.state;
    const { randomPerson, addCounter, resetCounter } = this.props;
    event.preventDefault();
    const userInput = value.toLowerCase();
    if (answered === true) {
      this.setState(prevState => ({
        totalAnswers: prevState.totalAnswers + 1,
      }));
      this.handleRefresh();
      this.setState({
        answered: false,
      });
    } else if (randomPerson[1] === userInput) {
      addCounter();
      this.setState(prevState => ({
        correctAnswers: prevState.correctAnswers + 1,
        totalAnswers: prevState.totalAnswers + 1,
      }));
      // alert('Correct!')
      this.handleRefresh();
      this.setState({
        correct: true,
      });
      this.addStreak();
    } else if (randomPerson[1] !== userInput) {
      this.setState({
        helperText: `False, the correct answer is ${randomPerson[1].toUpperCase()}.`,
        answered: true,
      });
      resetCounter();
    }
  };

  handleExample = event => {
    const { data, randomVerb } = this.props;
    const hablar = data.filter(verb => verb.infinitive === 'hablar');
    const hablarTense = hablar.filter(
      verb => verb.tense_english === randomVerb.tense_english
    );
    const hablarMood = hablarTense.filter(
      verb => verb.mood_english === randomVerb.mood_english
    );
    const hablarExample = hablarMood[0];
    event.preventDefault();
    this.setState({
      helperText: `Yo + Hablar + ${
        randomVerb.tense_english
      } = YO ${hablarExample.form_1s.toUpperCase()}`,
    });
  };

  addAccent = event => {
    event.preventDefault();
    const { value } = this.state;
    const accent = event.target.value;
    this.setState({
      value: value + accent,
    });
  };

  handleRefresh = () => {
    const { randomize } = this.props;
    this.setState({
      ...initialState,
      correct: false,
    });
    randomize();
  };

  addStreak = () => {
    const { bestStreak } = this.state;
    const { count } = this.props;
    if (count >= bestStreak) {
      this.setState(prevState => ({
        bestStreak: prevState.bestStreak + 1,
      }));
      if (bestStreak % 5 === 0) {
        this.reward.rewardMe();
      }
    }
  };

  render() {
    const { randomPerson, randomVerb, count } = this.props;
    const {
      helperText,
      value,
      answered,
      bestStreak,
      correct,
      totalAnswers,
      correctAnswers,
    } = this.state;
    const {
      infinitive,
      tense_english,
      mood_english,
      infinitive_english,
    } = randomVerb;
    const buttonText =
      randomPerson[1] !== value.toLowerCase() && answered
        ? 'Next verb'
        : 'Submit';
    const percentage =
      totalAnswers < 1 ? 0 : ((correctAnswers / totalAnswers) * 100).toFixed(0);
    console.log(infinitive_english);
    return (
      <div>
        <div className="verb-info-wrapper">
          <div className="verb-streak">
            <div className="current-best-streak">
              <div className="streak">current streak:</div>
              <div className="twenty-four">{count}</div>
            </div>
            <Reward
              ref={ref => {
                this.reward = ref;
              }}
              type="emoji"
            >
              <div className="current-best-streak">
                <div className="streak">best streak:</div>
                <div className="twenty-four">
                  {bestStreak}{' '}
                  <span role="img" aria-label="salsa dancer">
                    💃
                  </span>
                </div>
              </div>
            </Reward>
            <div className="current-best-streak">
              <div className="streak">percentage:</div>
              <div className="twenty-four">{percentage}%</div>
            </div>
          </div>
          <Info
            infinitive={infinitive}
            infinitive_english={infinitive_english}
            tense_english={tense_english}
            mood_english={mood_english}
          />
        </div>
        <Input
          helperText={helperText}
          correct={correct}
          value={value}
          buttonText={buttonText}
          addAccent={this.addAccent}
          handleSubmit={this.handleSubmit}
          randomPerson={randomPerson}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

Container.propTypes = {
  randomPerson: PropTypes.string,
  addCounter: PropTypes.func,
  resetCounter: PropTypes.func,
  data: PropTypes.array,
  randomVerb: PropTypes.object,
  randomize: PropTypes.func,
  count: PropTypes.number,
};

export default Container;

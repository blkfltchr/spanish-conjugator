import React, { useState } from 'react';
import Reward from 'react-rewards';
import PropTypes from 'prop-types';
import Info from './Info';
import Input from './Input';

import { useQuery } from 'react-apollo-hooks';

// const initialState = {
//   value: '',
//   helperText: null,
//   correct: false
// };

// class Container extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       bestStreak: 0,
//       totalAnswers: 0,
//       correctAnswers: 0,
//       answered: false
//     };
//   }

function Container(props) {
  const [value, setValue] = useState('');
  const [bestStreak, setBestStreak] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [helperText, setHelperText] = useState(null);
  const [correct, setCorrect] = useState(false);

  const handleChange = event => {
    setCorrect(false);
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    // const { value, answered } = this.state;
    const { randomPerson, addCounter, resetCounter } = props;
    event.preventDefault();
    const userInput = value.toLowerCase();
    if (answered === true) {
      setTotalAnswers(totalAnswers + 1);
      handleRefresh();
      setAnswered(false);
    } else if (randomPerson[1] === userInput) {
      addCounter();
      setCorrectAnswers(correctAnswers + 1);
      setTotalAnswers(totalAnswers + 1);
      handleRefresh();
      setCorrect(true);
      addStreak();
    } else if (randomPerson[1] !== userInput) {
      setHelperText(
        `False, the correct answer is ${randomPerson[1].toUpperCase()}.`
      );
      setAnswered(true);
      resetCounter();
    }
  };

  // const handleExample = event => {
  //   const { data, randomVerb } = this.props;
  //   const hablar = data.filter(verb => verb.infinitive === 'hablar');
  //   const hablarTense = hablar.filter(
  //     verb => verb.tense_english === randomVerb.tense_english
  //   );
  //   const hablarMood = hablarTense.filter(
  //     verb => verb.mood_english === randomVerb.mood_english
  //   );
  //   const hablarExample = hablarMood[0];
  //   event.preventDefault();
  //   this.setState({
  //     helperText: `Yo + Hablar + ${
  //       randomVerb.tense_english
  //     } = YO ${hablarExample.form_1s.toUpperCase()}`
  //   });
  // };

  const addAccent = event => {
    event.preventDefault();
    // const { value } = this.state;
    const accent = event.target.value;
    // this.setState({
    //   value: value + accent
    // });
    setValue(value + accent);
  };

  const handleRefresh = () => {
    const { randomize } = props;
    // this.setState({
    //   ...initialState,
    //   correct: false
    // });

    //   value: '',
    //   helperText: null,
    //   correct: false

    setValue('');
    setHelperText(null);
    setCorrect(false);

    randomize();
  };

  const addStreak = () => {
    //   // const { bestStreak } = this.state;
    const { count } = props;
    if (count >= bestStreak) {
      // this.setState(prevState => ({
      //   bestStreak: prevState.bestStreak + 1
      // }));
      setBestStreak(bestStreak + 1);
      // if (bestStreak % 5 === 0) {
      //   this.reward.rewardMe();
      // }
    }
  };

  // render() {
  const { randomPerson, randomVerb, count } = props;
  // const {
  //   helperText,
  //   value,
  //   answered,
  //   bestStreak,
  //   correct,
  //   totalAnswers,
  //   correctAnswers
  // } = this.state;

  const { infinitive, tenseEnglish, moodEnglish, infinitiveEnglish } = props;
  const buttonText =
    randomPerson[1] !== value.toLowerCase() && answered
      ? 'Next verb'
      : 'Submit';
  const percentage =
    totalAnswers < 1 ? 0 : ((correctAnswers / totalAnswers) * 100).toFixed(0);

  console.log('FROM CONTAINER....', props);
  return (
    <div>
      <div className="verb-info-wrapper">
        <div className="verb-streak">
          <div className="current-best-streak">
            <div className="streak">current streak:</div>
            <div className="twenty-four">{count}</div>
          </div>
          {/* <Reward
            ref={ref => {
              reward = ref;
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
          </Reward> */}
          <div className="current-best-streak">
            <div className="streak">percentage:</div>
            <div className="twenty-four">{percentage}%</div>
          </div>
        </div>
        <Info
          infinitive={infinitive}
          infinitiveEnglish={infinitiveEnglish}
          tenseEnglish={tenseEnglish}
          moodEnglish={moodEnglish}
        />
      </div>
      <Input
        helperText={helperText}
        correct={correct}
        value={value}
        buttonText={buttonText}
        addAccent={addAccent}
        handleSubmit={handleSubmit}
        randomPerson={randomPerson}
        handleChange={handleChange}
      />
    </div>
  );
}

Container.propTypes = {
  randomPerson: PropTypes.array,
  _addCounter: PropTypes.func,
  get addCounter() {
    return this._addCounter;
  },
  set addCounter(value) {
    this._addCounter = value;
  },
  resetCounter: PropTypes.func,
  data: PropTypes.array,
  randomVerb: PropTypes.object,
  randomize: PropTypes.func,
  count: PropTypes.number
};

Container.defaultProps = {
  randomPerson: ['answer', 'answer']
};

export default Container;

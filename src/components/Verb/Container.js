import React, { useState } from 'react';
import Reward from 'react-rewards';
import PropTypes from 'prop-types';
import Info from './Info';
import Input from './Input';

function Container(props) {
  const [value, setValue] = useState('');
  const [bestStreak, setBestStreak] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [helperText, setHelperText] = useState(null);
  const [correct, setCorrect] = useState(false);
  const { randomPerson, count } = props;
  const {
    loading,
    infinitive,
    tenseEnglish,
    moodEnglish,
    infinitiveEnglish
  } = props;
  const buttonText =
    randomPerson[1] !== value.toLowerCase() && answered
      ? 'Next verb'
      : 'Submit';
  const percentage =
    totalAnswers < 1 ? 0 : ((correctAnswers / totalAnswers) * 100).toFixed(0);

  const handleChange = event => {
    setCorrect(false);
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    const { addCounter, resetCounter, randomVerb } = props;
    event.preventDefault();
    let userInput = value.toLowerCase();
    if (answered === true) {
      setTotalAnswers(totalAnswers + 1);
      handleRefresh();
      setAnswered(false);
    } else if (randomVerb === userInput) {
      addCounter();
      setCorrectAnswers(correctAnswers + 1);
      setTotalAnswers(totalAnswers + 1);
      handleRefresh();
      setCorrect(true);
      addStreak();
    } else if (randomVerb !== userInput) {
      setHelperText(
        `False, the correct answer is ${randomVerb.toUpperCase()}.`
      );
      setAnswered(true);
      resetCounter();
    }
  };

  const addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    setValue(value + accent);
  };

  const handleRefresh = () => {
    const { getRandomVerb } = props;

    setValue('');
    setHelperText(null);
    setCorrect(false);

    getRandomVerb();
  };

  const addStreak = () => {
    const { count } = props;
    if (count >= bestStreak) {
      setBestStreak(bestStreak + 1);
    }
  };

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
          loading={loading}
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
  getRandomVerb: PropTypes.func,
  count: PropTypes.number
};

Container.defaultProps = {
  randomPerson: ['answer', 'answer']
};

export default Container;

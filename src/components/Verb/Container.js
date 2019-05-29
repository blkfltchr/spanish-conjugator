import React, { useState, useEffect } from 'react';
import Reward from 'react-rewards';
import PropTypes from 'prop-types';
import Info from './Info';
import Input from './Input';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { verbQueries } from '../GqlQueries/verbQueries';
import { CREATE_LOG } from '../GqlQueries/logQueries';
import Settings from '../Settings/Settings';

function Container(props) {
  const [value, setValue] = useState('');
  const [bestStreak, setBestStreak] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [helperText, setHelperText] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [randomPerson, setRandomPerson] = useState([]);
  const [randomVerb, setRandomVerb] = useState({});
  const [infinitive, setInfinitive] = useState('');
  const [tenseEnglish, setTenseEnglish] = useState('');
  const [moodEnglish, setMoodEnglish] = useState('');
  const [infinitiveEnglish, setInfinitiveEnglish] = useState('');
  const { level, latam } = props;
  const buttonText =
    randomPerson[1] !== value.toLowerCase() && answered
      ? 'Next verb'
      : 'Submit';
  const percentage =
    totalAnswers < 1 ? 0 : ((correctAnswers / totalAnswers) * 100).toFixed(0);

  // we're importing an array of GraphQL queries and
  // slicing by the level which is a number between 0-6
  const { loading, data } = useQuery(verbQueries[level], {
    variables: { latam }
  });

  const mutate = useMutation(CREATE_LOG);

  // const multiQuery = () => {
  //   const {loading, data} =
  // }

  console.log('Data -->', data);

  useEffect(() => {
    getRandomVerb();
  }, [data]);

  const getRandomVerb = () => {
    // this checks to see if the gql query has loaded
    if (Object.values(data).length !== 0) {
      const dataLength = Object.keys(data.verbs).length;
      const randomNum = Math.floor(Math.random() * dataLength);
      const randomVerbNum = Math.floor(Math.random() * 5); // this grabs the 6 yo, tu, ellos etc that we want to use
      const randomVerb = data.verbs[randomNum];

      setRandomVerb(Object.values(randomVerb)[randomVerbNum]);
      setRandomPerson(Object.keys(randomVerb)[randomVerbNum]);
      setInfinitive(randomVerb.infinitive);
      setInfinitiveEnglish(randomVerb.infinitiveEnglish);
      setTenseEnglish(randomVerb.tenseEnglish);
      setMoodEnglish(randomVerb.moodEnglish);
    }
  };

  const handleChange = event => {
    setCorrect(false);
    setValue(event.target.value);
  };

  const handleSubmit = async event => {
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
    const logData = await mutate({
      variables: {
        verbInfinitive: infinitive,
        tense: tenseEnglish,
        answer: randomVerb,
        correct: correct
      }
    });
    console.log('Log data mutate...', logData);
  };

  const addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    setValue(value + accent);
  };

  const handleRefresh = () => {
    setValue('');
    setHelperText(null);
    setCorrect(false);
    getRandomVerb();
  };

  const addStreak = () => {
    if (count >= bestStreak) {
      setBestStreak(bestStreak + 1);
    }
  };

  const addCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
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
      <Settings
        handleRefresh={handleRefresh}
        updateLevel={props.updateLevel}
        updateLatam={props.updateLatam}
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

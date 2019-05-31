import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-apollo-hooks';
import Info from './Info';
import Input from './Input';
import Settings from '../Settings/Settings';
import { verbQueries } from '../GqlQueries/verbQueries';
import { CREATE_LOG } from '../GqlQueries/logQueries';

function Container(props) {
  const [value, setValue] = useState('');
  const [bestStreak, setBestStreak] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [helperText, setHelperText] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [verb, setVerb] = useState({
    infinitive: '',
    tenseEnglish: '',
    infinitiveEnglish: '',
    moodEnglish: '',
    answer: '',
    person: '',
  });
  // const [randomPerson, setRandomPerson] = useState([]);
  // const [randomVerb, setRandomVerb] = useState({});
  // const [infinitive, setInfinitive] = useState('');
  // const [tenseEnglish, setTenseEnglish] = useState('');
  // const [infinitiveEnglish, setInfinitiveEnglish] = useState('');
  // const [moodEnglish, setMoodEnglish] = useState('');
  const { level, latam, token } = props;
  const buttonText =
    verb.answer !== value.toLowerCase() && answered ? 'Next verb' : 'Submit';
  const percentage =
    totalAnswers < 1 ? 0 : ((correctAnswers / totalAnswers) * 100).toFixed(0);

  // we're importing an array of GraphQL queries and
  // slicing by the level which is a number between 0-6
  const { loading, data } = useQuery(verbQueries[level], {
    variables: { latam },
  });

  const mutate = useMutation(CREATE_LOG);

  console.log('Data -->', data);

  const getRandomVerb = () => {
    // this checks to see if the gql query has loaded
    if (Object.values(data).length !== 0) {
      const dataLength = Object.keys(data.verbs).length;
      const randomNum = Math.floor(Math.random() * dataLength);
      const randomVerbNum = Math.floor(Math.random() * 5); // this grabs the 6 yo, tu, ellos etc that we want to use
      const randomVerb = data.verbs[randomNum];

      // setRandomVerb(Object.values(randomVerb)[randomVerbNum]);
      // setRandomPerson(Object.keys(randomVerb)[randomVerbNum]);
      setVerb({
        infinitive: randomVerb.infinitive,
        infinitiveEnglish: randomVerb.infinitiveEnglish,
        tenseEnglish: randomVerb.tenseEnglish,
        moodEnglish: randomVerb.moodEnglish,
        person: Object.keys(randomVerb)[randomVerbNum],
        answer: Object.values(randomVerb)[randomVerbNum],
      });
    }
  };

  useEffect(() => {
    getRandomVerb();
  }, [data]);

  const handleChange = event => {
    setCorrect(false);
    setValue(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const userInput = value.toLowerCase();
    if (answered === true) {
      setTotalAnswers(totalAnswers + 1);
      handleRefresh();
      setAnswered(false);
    } else if (verb.answer === userInput) {
      addCounter();
      setCorrectAnswers(correctAnswers + 1);
      setTotalAnswers(totalAnswers + 1);
      handleRefresh();
      setCorrect(true);
      addStreak();
    } else if (verb.answer !== userInput) {
      setHelperText(
        `False, the correct answer is ${verb.answer.toUpperCase()}.`
      );
      setAnswered(true);
      resetCounter();
    }
    const logData = await mutate({
      variables: {
        verbInfinitive: verb.infinitive,
        tense: verb.tenseEnglish,
        answer: verb.answer,
        correct,
      },
    });
    console.log('Log data --->', logData);
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

  console.log('randomVerb', verb.answer);
  console.log('randomPerson', verb.person);

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
          infinitive={verb.infinitive}
          infinitiveEnglish={verb.infinitiveEnglish}
          tenseEnglish={verb.tenseEnglish}
          moodEnglish={verb.moodEnglish}
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
        randomPerson={verb.person}
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
  count: PropTypes.number,
};

Container.defaultProps = {
  randomPerson: ['answer', 'answer'],
};

export default Container;

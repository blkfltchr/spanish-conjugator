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
  const [updated, setUpdated] = useState(false);
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

  useEffect(() => {
    getRandomVerb();
  }, [data]);

  useEffect(() => {
    sendLogData();
  }, [updated]);

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

  const handleSubmit = async event => {
    event.preventDefault();
    let userInput = value.toLowerCase();

    // if has already answered the question and has a green tick
    // or helper text stating that it was incorrect
    if (answered === true) {
      // setTotalAnswers(totalAnswers + 1);
      setAnswered(false);
      setUpdated(true);

      // if the user's answer is correct
    } else if (randomVerb === userInput) {
      setCount(count + 1);
      setCorrectAnswers(correctAnswers + 1);
      // setTotalAnswers(totalAnswers + 1);
      setCorrect(true);
      if (count >= bestStreak) {
        setBestStreak(bestStreak + 1);
      }
      setAnswered(true);

      // if the user's answer is incorrect
    } else if (randomVerb !== userInput) {
      setHelperText(
        `False, the correct answer is ${randomVerb.toUpperCase()}.`
      );
      setAnswered(true);
      setCount(0);
    }
    // setTotalAnswers(totalAnswers + 1);
  };

  const sendLogData = async () => {
    if (updated) {
      let userInput = value.toLowerCase();
      await mutate({
        variables: {
          verbInfinitive: infinitive,
          tense: tenseEnglish,
          answer: userInput,
          correct: correct
        }
      });
      setUpdated(false);
      setValue('');
      setHelperText(null);
      setCorrect(false);
      getRandomVerb();
      setTotalAnswers(totalAnswers + 1);
    }
  };

  const addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    setValue(value + accent);
  };

  const handleRefresh = () => {
    setHelperText(null);
    setCorrect(false);
    getRandomVerb();
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
        setValue={setValue}
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
  data: PropTypes.array,
  randomVerb: PropTypes.object,
  getRandomVerb: PropTypes.func,
  count: PropTypes.number
};

Container.defaultProps = {
  randomPerson: ['answer', 'answer']
};

export default Container;

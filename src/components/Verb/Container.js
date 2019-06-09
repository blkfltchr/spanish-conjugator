import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-apollo-hooks';
import Info from './Info';
import Input from './Input';
import Settings from '../Settings/Settings';
import { verbQueries } from '../GqlQueries/verbQueries';
import { CREATE_LOG } from '../GqlQueries/logQueries';
import Stats from './Stats';
import Header from '../Layout/Header';

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
  const [verb, setVerb] = useState({
    infinitive: '',
    tenseEnglish: '',
    infinitiveEnglish: '',
    moodEnglish: '',
    answer: '',
    person: ''
  });
  const { level, latam, updateLevel, updateLatam } = props;

  const buttonText =
    verb.answer !== value.toLowerCase() && answered ? 'Next verb' : 'Submit';
  const percentage =
    totalAnswers < 1 ? 0 : ((correctAnswers / totalAnswers) * 100).toFixed(0);

  // we're importing an array of GraphQL queries and
  // slicing by the level which is a number between 0-6
  const { loading, data } = useQuery(verbQueries[level], {
    variables: { latam }
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

      setVerb({
        infinitive: randomVerb.infinitive,
        infinitiveEnglish: randomVerb.infinitiveEnglish,
        tenseEnglish: randomVerb.tenseEnglish,
        moodEnglish: randomVerb.moodEnglish,
        person: Object.keys(randomVerb)[randomVerbNum],
        answer: Object.values(randomVerb)[randomVerbNum]
      });
    }
  };

  useEffect(() => {
    getRandomVerb();
  }, [data]);

  const sendLogData = async () => {
    if (updated) {
      const userInput = value.toLowerCase();
      const logData = await mutate({
        variables: {
          verbInfinitive: verb.infinitive,
          tense: verb.tenseEnglish,
          correctAnswer: verb.answer,
          userAnswer: userInput,
          verbPerson: verb.person,
          correct
        }
      });
      console.log('logData -->', logData);
      setUpdated(false);
      setValue('');
      setHelperText(null);
      getRandomVerb();
      setCorrect(false);
    }
  };

  useEffect(() => {
    sendLogData();
  }, [updated]);

  const handleSubmit = async event => {
    event.preventDefault();
    const userInput = value.toLowerCase();

    // if has already answered the question and has a green tick
    // or helper text stating that it was incorrect
    if (answered === true) {
      setAnswered(false);
      setUpdated(true);
      // setCorrect(false);

      // if the user's answer is correct
    } else if (verb.answer === userInput) {
      setCount(count + 1);
      setCorrectAnswers(correctAnswers + 1);
      setTotalAnswers(totalAnswers + 1);
      setCorrect(true);
      if (count >= bestStreak) {
        setBestStreak(bestStreak + 1);
      }
      setAnswered(true);

      // if the user's answer is incorrect
    } else if (verb.answer !== userInput) {
      setHelperText(
        `False, the correct answer is ${verb.answer.toUpperCase()}.`
      );
      setAnswered(true);
      setCount(0);
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
    <div className="app">
      <Header />
      <div className="verb-info-wrapper">
        <Stats count={count} percentage={percentage} />
        <Info verb={verb} loading={loading} />
      </div>
      <Input
        helperText={helperText}
        correct={correct}
        value={value}
        buttonText={buttonText}
        addAccent={addAccent}
        handleSubmit={handleSubmit}
        person={verb.person}
        setValue={setValue}
      />
      <Settings
        handleRefresh={handleRefresh}
        updateLevel={updateLevel}
        updateLatam={updateLatam}
      />
    </div>
  );
}

Container.propTypes = {
  level: PropTypes.number,
  latam: PropTypes.bool,
  updateLevel: PropTypes.func,
  updateLatam: PropTypes.func
};

export default Container;

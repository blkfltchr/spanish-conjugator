import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Info from '../Verb/Info';
import Input from '../Verb/Input';

const LEVEL_ONE = gql`
  query {
    verbs(
      where: {
        AND: [{ moodEnglish: "Indicative" }, { tenseEnglish: "Present" }]
        OR: [
          { infinitive: "caminar" }
          { infinitive: "hablar" }
          { infinitive: "ayudar" }
          { infinitive: "necesitar" }
          { infinitive: "escribir" }
          { infinitive: "esperar" }
          { infinitive: "cocinar" }
          { infinitive: "comer" }
          { infinitive: "beber" }
          { infinitive: "vivir" }
        ]
      }
    ) {
      form1p
      form1s
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

function Landing() {
  const [value, setValue] = useState('');

  const [answer, setAnswer] = useState({
    answered: false,
    correct: false,
    helperText: '',
  });

  const [verb, setVerb] = useState({
    infinitive: '',
    tenseEnglish: '',
    infinitiveEnglish: '',
    moodEnglish: '',
    answer: '',
    person: '',
  });

  const buttonText =
    verb.answer !== value.toLowerCase() && answer.answered
      ? 'Next verb'
      : 'Submit';

  const { loading, data } = useQuery(LEVEL_ONE);

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
        answer: Object.values(randomVerb)[randomVerbNum],
      });
    }
  };

  useEffect(() => {
    getRandomVerb();
  }, [data]);

  const addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    setValue(value + accent);
  };

  const handleRefresh = () => {
    getRandomVerb();
    setValue('');
    setAnswer({
      answered: false,
      correct: false,
      helperText: '',
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const userInput = value.toLowerCase();
    if (answer.answered) {
      handleRefresh();
    }
    // if the answer is correct
    else if (userInput === verb.answer) {
      setAnswer({
        correct: true,
        answered: true,
      });
    } // if the answer is incorrect
    else if (userInput !== verb.answer) {
      setAnswer({
        correct: false,
        answered: true,
        helperText: `False, the correct answer is ${verb.answer.toUpperCase()}.`,
      });
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Easy verb practice for Spanish language learners.
      </h1>
      <Info verb={verb} loading={loading} />
      <Input
        helperText={answer.helperText}
        correct={answer.correct}
        value={value}
        buttonText={buttonText}
        addAccent={addAccent}
        handleSubmit={handleSubmit}
        person={verb.person}
        setValue={setValue}
      />
    </div>
  );
}

export default Landing;

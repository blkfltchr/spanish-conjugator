import React, { useState, useEffect } from 'react';
import '../../app.css';
import Settings from '../Settings/Settings';
import Container from './Container';

function Verb(props) {
  const [verbData, setVerbData] = useState(props.data);
  const [count, setCount] = useState(0);
  const [randomPerson, setRandomPerson] = useState([]);
  const [randomVerb, setRandomVerb] = useState({});
  const [infinitive, setInfinitive] = useState('');
  const [tenseEnglish, setTenseEnglish] = useState('');
  const [moodEnglish, setMoodEnglish] = useState('');
  const [infinitiveEnglish, setInfinitiveEnglish] = useState('');

  useEffect(() => {
    setVerbData(props.data);
  }, [props.data]);

  useEffect(() => {
    getRandomVerb();
  }, [verbData]);

  const getRandomVerb = () => {
    if (verbData != undefined) {
      const dataLength = Object.keys(props.data).length;
      const randomNum = Math.floor(Math.random() * dataLength) + 1;
      const randomVerbNum = Math.floor(Math.random() * 5); // this grabs the 6 yo, tu, ellos etc that we want to use
      const randomVerb = props.data[randomNum];

      setRandomVerb(Object.values(randomVerb)[randomVerbNum]);
      setRandomPerson(Object.keys(randomVerb)[randomVerbNum]);
      setInfinitive(randomVerb.infinitive);
      setInfinitiveEnglish(randomVerb.infinitiveEnglish);
      setTenseEnglish(randomVerb.tenseEnglish);
      setMoodEnglish(randomVerb.moodEnglish);
    }
  };

  const handleRefresh = () => {
    getRandomVerb();
  };

  const addCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const updateNumPerson = event => {
    props.updateLatam();
  };

  return (
    <div>
      <Container
        verbData={verbData}
        randomPerson={randomPerson}
        randomVerb={randomVerb}
        getRandomVerb={getRandomVerb}
        addCounter={addCounter}
        resetCounter={resetCounter}
        // addStreak={addStreak} looks like this isn't in this file?
        count={count}
        infinitive={infinitive}
        tenseEnglish={tenseEnglish}
        moodEnglish={moodEnglish}
        infinitiveEnglish={infinitiveEnglish}
      />
      <Settings
        handleRefresh={handleRefresh}
        updateVerbTenses={props.updateVerbTenses}
        updateNumPerson={updateNumPerson}
      />
    </div>
  );
}

export default Verb;

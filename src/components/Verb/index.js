import React, { useState, useEffect } from 'react';
import '../../app.css';
import Settings from '../Settings/Settings';
import { spainSpanish, latamSpanish } from '../Filters/NumPersonFilters';
import Container from './Container';

function Verb(props) {
  const [verbData, setVerbData] = useState(props.data);
  const [NumberPerson, setNumberPerson] = useState('Latam');
  const [level, setLevel] = useState(0);
  const [count, setCount] = useState(0);
  const [randomPerson, setRandomPerson] = useState([]);
  const [randomVerb, setRandomVerb] = useState({});
  const [correct, setCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);
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
      const randomNum = Math.floor(Math.random() * 1272) + 1; // length of query data
      const randomPersonNum = Math.floor(Math.random() * 7);
      const randomVerb = props.data[randomNum];

      setRandomVerb(Object.values(randomVerb)[randomPersonNum]);
      setRandomPerson(randomVerb.moodEnglish);
      setInfinitive(randomVerb.infinitive);
      setInfinitiveEnglish(randomVerb.infinitiveEnglish);
      setTenseEnglish(randomVerb.tenseEnglish);
      setMoodEnglish(randomVerb.moodEnglish);
    }
    //   // This do while loop check for an empty string or Imperative Negative and randomises the verb again if it's found
    //   do {
    //     randomVerb = verbData[Math.floor(Math.random() * verbData.length)];
    //     randomPerson = Object.entries(randomVerb)[
    //       Math.floor(Math.random() * 5) + 7
    //     ];
    //   } while (
    //     randomPerson[1] === '' ||
    //     randomVerb.mood_english === 'Imperative Negative'
    //   );
  };

  const handleRefresh = () => {
    setCorrect(false);
    getRandomVerb();
  };

  const addCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const updateNumPerson = event => {
    setNumberPerson(event.target.value);
  };

  const updateVerbTenses = event => {
    setLevel(event.target.value);
    handleRefresh();
  };

  const filterData = event => {
    event.preventDefault();
    // const { level, NumberPerson } = this.state;
    // const Level = parseInt(level);
    // if (NumberPerson === 'Spain') {
    //   const spainSpan = spainSpanish(VerbTenseFilters[Level]);
    //   this.setState({
    //     data: spainSpan
    //   });
    // }

    // if (NumberPerson === 'Latam') {
    //   const latamSpan = latamSpanish(VerbTenseFilters[Level]);
    //   this.setState({
    //     data: latamSpan
    //   });
    // }

    // setVerbData(verbData.LevelThreeQuery);
    handleRefresh();
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
        filterData={filterData}
        updateVerbTenses={updateVerbTenses}
        updateNumPerson={updateNumPerson}
      />
    </div>
  );
}

export default Verb;

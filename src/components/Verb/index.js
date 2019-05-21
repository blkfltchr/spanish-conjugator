import React, { useState, useEffect } from 'react';

import '../../app.css';

import Settings from '../Settings/Settings';
import { spainSpanish, latamSpanish } from '../Filters/NumPersonFilters';
import { VerbTenseFilters, TEST_QUERY } from '../Filters/VerbTensesFilters';
import Container from './Container';

import { useQuery } from 'react-apollo-hooks';
import { setTimeout } from 'timers';

// const initialState = {
//   correct: false,
//   randomVerb: {},
//   randomPerson: []
// };

{
  /* <Query query={LevelThree}>
  {({ loading, error, data }) => {
    if (loading) return <h4>Loading</h4>;
    if (error) console.log(error);
    console.log('From state in index..', data);
    return data;
  }}
</Query>; */
}

// class Verb extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...initialState,
//       theTest: [],
//       data: latamSpanish(VerbTenseFilters[0]),
//       NumberPerson: 'Latam',
//       level: 0,
//       count: 0
//     };
//   }

function Verb(props) {
  // const { loading, data } = useQuery(TEST_QUERY);
  // const [verbData, setVerbData] = useState(latamSpanish(VerbTenseFilters[0]));
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
    console.log('In use effect ----:)----');
    setVerbData(props.data);
    // getRandomVerb();
    // console.log('DATA from use effect -->', verbData);
    // if (verbData !== undefined) {
    //   // console.log('verbData from use effect', verbData[0]);
    //   setVerbData(verbData[0]);
    //   return;
    // const randomNum = Math.floor(Math.random() * 1272) + 1;
    // const tempVerbData = verbData[randomNum];
    // if (tempVerbData !== undefined) {
    // const randomPersonNum = Math.floor(Math.random() * 7);
    // setRandomVerb(Object.values(tempVerbData)[randomPersonNum]);
    // setRandomPerson(tempVerbData.moodEnglish);
    // setInfinitive(tempVerbData.infinitive);
    // setInfinitiveEnglish(tempVerbData.infinitiveEnglish);
    // setTenseEnglish(tempVerbData.tenseEnglish);
    // setMoodEnglish(tempVerbData.moodEnglish);
    // getRandomVerb(tempVerbData);
    // }
    // }
  }, [props.data]);

  useEffect(() => {
    if (verbData != undefined) {
      const randomNum = Math.floor(Math.random() * 1272) + 1; // length of query data
      const randomPersonNum = Math.floor(Math.random() * 7);

      const randomVerb = props.data[randomNum];

      // const randomVerbValues = Object.values(props.data[randomNum]);
      console.log('randomVerb ->', randomVerb.moodEnglish);

      setRandomVerb(Object.values(randomVerb)[randomPersonNum]);
      setRandomPerson(randomVerb.moodEnglish);
      setInfinitive(randomVerb.infinitive);
      setInfinitiveEnglish(randomVerb.infinitiveEnglish);
      setTenseEnglish(randomVerb.tenseEnglish);
      setMoodEnglish(randomVerb.moodEnglish);
    }
  }, [verbData]);

  async function getRandomVerb(tempVerbData) {
    console.log('FROM GET RANDOM _>>>', props.data);
    const randomNum = Math.floor(Math.random() * 7);
    // await setRandomVerb(Object.values(tempVerbData)[randomNum]);
    // await setRandomPerson(tempVerbData.moodEnglish);
    // setInfinitive(tempVerbData.infinitive);
    // await setTenseEnglish(tempVerbData.tenseEnglish);
    // setMoodEnglish(tempVerbData.moodEnglish);
    // setInfinitiveEnglish(tempVerbData.infinitiveEnglish);
    // return;
  }

  const randomize = () => {
    // refetch();
    // console.log('WE ARE RANDOMIZING', refetch());
    //   // const { data } = this.state;
    // let randomVerb = verbData[Math.floor(Math.random() * 7)];
    //   let randomPerson = Object.entries(randomVerb)[
    //     Math.floor(Math.random() * 5) + 7
    //   ];
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
    //   setRandomVerb(randomVerb);
    //   setRandomPerson(randomPerson);
    //   // this.setState({
    //   //   randomVerb,
    //   //   randomPerson
    //   // });
  };

  const handleRefresh = () => {
    setCorrect(false);
    // setRandomVerb({});
    // setRandomPerson([]);
    // this.setState({
    //   ...initialState
    // });
    randomize();
  };

  const addCounter = () => {
    setCount(count + 1);
    // this.setState(prevState => ({
    //   count: prevState.count + 1
    // }));
  };

  const resetCounter = () => {
    // this.setState({
    //   count: 0
    // });
    setCount(0);
  };

  const updateNumPerson = event => {
    // this.setState({
    //   NumberPerson: event.target.value
    // });
    setNumberPerson(event.target.value);
  };

  const updateVerbTenses = event => {
    // this.setState({
    //   level: event.target.value
    // });
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

  // render() {
  // const { randomVerb, randomPerson, data, count } = this.state;
  // console.log('Answer:', randomPerson[1]);

  // console.log('STATE VERB DATA and Data', verbData, data);
  // console.log('TENSE ENGLISH', tenseEnglish);

  console.log('VERB DATA ----->>>>', verbData);

  // console.log('RANDOM PERSON, VERB', randomPerson, randomVerb);
  // console.log('ACCESS THE DATA..', Object.entries(data.LevelThreeQuery));
  // console.log('my query data', this.props.queryData.LevelThreeQuery);
  // console.log('THE TEST.. has it worked?', this.state.theTest);
  return (
    <div>
      <Container
        verbData={verbData}
        randomPerson={randomPerson}
        randomVerb={randomVerb}
        randomize={randomize}
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
// }
// }

export default Verb;

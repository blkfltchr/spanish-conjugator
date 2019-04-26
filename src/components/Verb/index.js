import React, { useState , useEffect} from 'react';

import '../../app.css';

import Settings from '../Settings/Settings';
import { spainSpanish, latamSpanish } from '../Filters/NumPersonFilters';
import { VerbTenseFilters } from '../Filters/VerbTensesFilters';
import Input from './Input';

// const initialState = {
//   correct: false,
//   randomVerb: {},
//   randomPerson: [],
// };

function Verb (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...initialState,
  //     data: latamSpanish(VerbTenseFilters[0]),
  //     NumberPerson: 'Latam',
  //     level: 0,
  //     count: 0,
  //   };
  // }
  const [correct, setCorrect] = useState(false);
  const [randomVerb, setRandomVerb] = useState({});
  const [randomPerson, setRandomPerson] = useState([]);
  const [data, setData] = useState(latamSpanish(VerbTenseFilters[0]));
  const [NumberPerson, setNumberPerson ] = useState('Latam');
  const [level, setLevel] = useState(0);
  const [count, setCount]  = useState(0);
 


  useEffect(() => {
    randomize();
  }, [correct])

  const randomize = () => {
    // const { data } = this.state;
    let randomVerb = data[Math.floor(Math.random() * data.length)];
    let randomPerson = Object.entries(randomVerb)[
      Math.floor(Math.random() * 5) + 7
    ];
    // This do while loop check for an empty string or Imperative Negative and randomises the verb again if it's found
    do {
      randomVerb = data[Math.floor(Math.random() * data.length)];
      randomPerson = Object.entries(randomVerb)[
        Math.floor(Math.random() * 5) + 7
      ];
    } while (
      randomPerson[1] === '' ||
      randomVerb.mood_english === 'Imperative Negative'
    );
    // this.setState({
    //   randomVerb,
    //   randomPerson,
    // });
    setRandomVerb(randomVerb);
    setRandomPerson(randomPerson);
  };

  const handleRefresh = () => {
    // this.setState({
    //   ...initialState,
    // });
  //   const [correct, setCorrect] = useState(false);
    setCorrect(false);
  // const [randomVerb, setRandomVerb] = useState({});
    setRandomVerb({});
  // const [randomPerson, setRandomPerson] = useState([]);
    setRandomPerson([])
    randomize();
  };

  const addCounter = () => {
    // this.setState(prevState => ({
    //   count: prevState.count + 1,
    // }));
    setCount(count + 1);
  };

  const resetCounter = () => {
    // this.setState({
    //   count: 0,
    // });
    setCount(0);
  };

  const updateNumPerson = event => {
    // this.setState({
    //   NumberPerson: event.target.value,
    // });
    setNumberPerson(event.target.value);
  };

  const updateVerbTenses = event => {
    // this.setState({
    //   level: event.target.value,
    // });
    setLevel(event.target.value);
    handleRefresh();
  };

  const filterData = (event) => {
    event.preventDefault();
    // const { level, NumberPerson } = this.state;
    const Level = parseInt(level);
    if (NumberPerson === 'Spain') {
      const spainSpan = spainSpanish(VerbTenseFilters[Level]);
      // this.setState({
      //   data: spainSpan,
      // });
      setData(spainSpan);
    }

    if (NumberPerson === 'Latam') {
      const latamSpan = latamSpanish(VerbTenseFilters[Level]);
      // this.setState({
      //   data: latamSpan,
      // });
      setData(latamSpan)
    }
    handleRefresh();
  };

    // const { randomVerb, randomPerson, data, count } = this.state;
    console.log('Answer:', randomPerson[1]);
    // console.log(this);
    return (
      <div>
        <Input
          data={data}
          randomPerson={randomPerson}
          randomVerb={randomVerb}
          randomize={randomize}
          addCounter={addCounter}
          resetCounter={resetCounter}
          // addStreak={addStreak}
          count={count}
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

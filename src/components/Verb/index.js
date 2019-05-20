// import React, { Component } from 'react';
import React, { useState } from 'react';

import '../../app.css';

import Settings from '../Settings/Settings';
import { spainSpanish, latamSpanish } from '../Filters/NumPersonFilters';
import { VerbTenseFilters, LEVEL_THREE } from '../Filters/VerbTensesFilters';
import Container from './Container';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useQuery } from 'react-apollo-hooks';

const TEST = gql`
  query VerbsQuery {
    LevelThreeQuery {
      form1p
      form1s
      form2p
      form2s
      form3p
      form3s
      gerund
      gerundEnglish
      index
      infinitive
      infinitiveEnglish
      mood
      moodEnglish
      pastparticiple
      pastparticipleEnglish
      tense
      tenseEnglish
      verbEnglish
    }
  }
`;

const initialState = {
  correct: false,
  randomVerb: {},
  randomPerson: []
};

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
  const [verbData, setVerbData] = useState(latamSpanish(VerbTenseFilters[0]));
  const [NumberPerson, setNumberPerson] = useState('Latam');
  const [level, setLevel] = useState(0);
  const [count, setCount] = useState(0);
  const [randomPerson, setRandomPerson] = useState([]);
  const [randomVerb, setRandomVerb] = useState({});
  const [correct, setCorrect] = useState(false);

  // componentDidMount() {
  //   this.randomize();
  // }

  // const randomize = () => {
  //   const { data } = this.state;
  //   let randomVerb = data[Math.floor(Math.random() * data.length)];
  //   let randomPerson = Object.entries(randomVerb)[
  //     Math.floor(Math.random() * 5) + 7
  //   ];
  //   // This do while loop check for an empty string or Imperative Negative and randomises the verb again if it's found
  //   do {
  //     randomVerb = data[Math.floor(Math.random() * data.length)];
  //     randomPerson = Object.entries(randomVerb)[
  //       Math.floor(Math.random() * 5) + 7
  //     ];
  //   } while (
  //     randomPerson[1] === '' ||
  //     randomVerb.mood_english === 'Imperative Negative'
  //   );
  //   this.setState({
  //     randomVerb,
  //     randomPerson
  //   });
  // };

  // const handleRefresh = () => {
  //   this.setState({
  //     ...initialState
  //   });
  //   this.randomize();
  // };

  // const addCounter = () => {
  //   this.setState(prevState => ({
  //     count: prevState.count + 1
  //   }));
  // };

  // const resetCounter = () => {
  //   this.setState({
  //     count: 0
  //   });
  // };

  // const updateNumPerson = event => {
  //   this.setState({
  //     NumberPerson: event.target.value
  //   });
  // };

  // const updateVerbTenses = event => {
  //   this.setState({
  //     level: event.target.value
  //   });
  //   this.handleRefresh();
  // };

  // const filterData = event => {
  //   event.preventDefault();
  //   const { level, NumberPerson } = this.state;
  //   const Level = parseInt(level);
  //   if (NumberPerson === 'Spain') {
  //     const spainSpan = spainSpanish(VerbTenseFilters[Level]);
  //     this.setState({
  //       data: spainSpan
  //     });
  //   }

  //   if (NumberPerson === 'Latam') {
  //     const latamSpan = latamSpanish(VerbTenseFilters[Level]);
  //     this.setState({
  //       data: latamSpan
  //     });
  //   }
  //   this.handleRefresh();
  // };

  // render() {
  const data = useQuery(LEVEL_THREE);
  // const { randomVerb, randomPerson, data, count } = this.state;
  // console.log('Answer:', randomPerson[1]);
  console.log('Hook data says..:', data);
  // console.log('my query data', this.props.queryData.LevelThreeQuery);
  // console.log('THE TEST.. has it worked?', this.state.theTest);
  return (
    <div>
      {/* <Container
        data={data}
        randomPerson={randomPerson}
        randomVerb={randomVerb}
        randomize={this.randomize}
        addCounter={this.addCounter}
        resetCounter={this.resetCounter}
        addStreak={this.addStreak}
        count={count}
      />
      <Settings
        filterData={this.filterData}
        updateVerbTenses={this.updateVerbTenses}
        updateNumPerson={this.updateNumPerson}
      /> */}
    </div>
  );
}
// }
// }

export default Verb;

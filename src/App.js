import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { useQuery } from 'react-apollo-hooks';
import { Route } from 'react-router-dom';
import { verbQueries } from './components/GqlQueries/Queries';
import Signup from './components/Signup';
import Login from './components/Login';
import VerbTool from '../src/components/Verb/VerbTool';
import Header from '../src/components/Layout/Header';

import Container from './components/Verb/Container';
import Settings from './components/Settings/Settings';

const client = new ApolloClient({
  uri: 'https://mighty-peak-22601.herokuapp.com/' // production
});

function App() {
  // const [isShowing, setIsShowing] = useState(false);
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);

  // we're importing an array of GraphQL queries and
  // slicing by the level which is a number between 0-6
  // const { loading, data } = useQuery(verbQueries[level], {
  //   variables: { latam }
  // });

  const updateLatam = () => {
    setLatam(!latam);
  };

  const updateVerbTenses = event => {
    setLevel(event.target.value);
    // handleRefresh();
  };

  // console.log('data -->', data);
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Header />
        <div className="app-wrapper">
          {/* {isShowing ? (
                <div onClick={closeModalHandler} className="back-drop" />
              ) : null} */}
          {/* <VerbTool
            level={level}
            updateVerbTenses={updateVerbTenses}
            data={data.verbs}
            loading={loading}
            updateLatam={updateLatam}
          /> */}
          <Container
            // verbData={verbData}
            // data={data}
            // randomPerson={randomPerson}
            // randomVerb={randomVerb}
            // getRandomVerb={getRandomVerb}
            // addCounter={addCounter}
            // resetCounter={resetCounter}
            // addStreak={addStreak} looks like this isn't in this file?
            // count={count}
            // infinitive={infinitive}
            // tenseEnglish={tenseEnglish}
            // moodEnglish={moodEnglish}
            // infinitiveEnglish={infinitiveEnglish}
            latam={latam}
            level={level}
            updateVerbTenses={updateVerbTenses}
            updateLatam={updateLatam}
            // loading={loading}
          />
          {/* <Settings
            // handleRefresh={handleRefresh}
            updateVerbTenses={updateVerbTenses}
            updateLatam={updateLatam}
          /> */}
          {/* <div className="made-with-love" onClick={openModalHandler}>
                Made with
                <span role="img" aria-label="heart">
                  {'  '}
                  ❤️
                </span>
                in
                <span role="img" aria-label="colombia">
                  {'  '}
                  🇨🇴
                </span>
              </div>
              <Modal show={isShowing} close={closeModalHandler} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

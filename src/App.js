import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from '../src/components/Layout/Header';
import Container from './components/Verb/Container';

const client = new ApolloClient({
  uri: 'https://pacific-eyrie-99205.herokuapp.com/' // production
});

function App() {
  // const [isShowing, setIsShowing] = useState(false);
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);

  const updateLatam = () => {
    setLatam(!latam);
  };

  const updateLevel = event => {
    setLevel(event.target.value);
  };

  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div className="app">
          <Header />
          <div className="app-wrapper">
            {/* {isShowing ? (
                <div onClick={closeModalHandler} className="back-drop" />
              ) : null} */}
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
            <Route
              exact
              path="/"
              render={() => (
                <Container
                  latam={latam}
                  level={level}
                  updateLevel={updateLevel}
                  updateLatam={updateLatam}
                />
              )}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;

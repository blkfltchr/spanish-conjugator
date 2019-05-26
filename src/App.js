import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from '../src/components/Layout/Header';
import Container from './components/Verb/Container';

const client = new ApolloClient({
  uri: 'https://mighty-peak-22601.herokuapp.com/' // production
});

function App() {
  // const [isShowing, setIsShowing] = useState(false);
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);

  const updateLatam = () => {
    setLatam(!latam);
  };

  const updateVerbTenses = event => {
    setLevel(event.target.value);
    // handleRefresh();
  };

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Header />
        <div className="app-wrapper">
          {/* {isShowing ? (
                <div onClick={closeModalHandler} className="back-drop" />
              ) : null} */}
          <Container
            latam={latam}
            level={level}
            updateVerbTenses={updateVerbTenses}
            updateLatam={updateLatam}
          />
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

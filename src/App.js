import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from '../src/components/Layout/Header';
import Container from './components/Verb/Container';

function App() {
  // const [isShowing, setIsShowing] = useState(false);
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);
  const [token, setToken] = useState('');

  // if there's a token, we pass the auth headers to the server
  const client = token
    ? new ApolloClient({
        uri: process.env.REACT_APP_HEROKU_URL,
        request: async operation => {
          operation.setContext({
            headers: {
              authorization: token
            }
          });
        }
      })
    : new ApolloClient({
        uri: process.env.REACT_APP_HEROKU_URL
      });

  const updateLatam = () => {
    setLatam(!latam);
  };

  const updateLevel = event => {
    setLevel(event.target.value);
  };

  const updateToken = tok => {
    setToken(tok);
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
                  token={token}
                />
              )}
            />
            <Route
              path="/signup"
              render={props => <Signup {...props} updateToken={updateToken} />}
            />
            <Route
              path="/login"
              render={props => <Login {...props} updateToken={updateToken} />}
            />
          </div>
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import Container from './components/Verb/Container';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nav from './components/Layout/Nav';

function App() {
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);
  const [token, setToken] = useState('');

  // if there's a token, we pass the auth headers to the server
  const client = token
    ? new ApolloClient({
        uri: 'https://thawing-lake-36877.herokuapp.com/',
        request: async operation => {
          operation.setContext({
            headers: {
              authorization: token
            }
          });
        }
      })
    : new ApolloClient({
        uri: 'https://thawing-lake-36877.herokuapp.com/'
      });

  const updateLatam = () => {
    setLatam(latam => !latam);
  };

  const updateLevel = e => {
    setLevel(e.target.value);
  };

  const updateToken = tok => {
    setToken(tok);
  };

  return (
    <ApolloProvider client={client}>
      <div className="app-wrapper">
        <Nav token={token} />
        <div className="app">
          <Switch>
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
              render={props => (
                <Login {...props} token={token} updateToken={updateToken} />
              )}
            />
            <Route
              path="/dashboard"
              render={props => <Dashboard {...props} token={token} />}
            />
            <Route render={() => <h1>URL not found!</h1>} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

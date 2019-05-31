import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import Header from './components/Layout/Header';
import Container from './components/Verb/Container';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const client = new ApolloClient({
  uri: 'https://pacific-eyrie-99205.herokuapp.com/', // production
});

function App() {
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);
  const [token, setToken] = useState('');

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
      <div>
        <Header />
        <div className="app">
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
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

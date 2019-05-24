import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { useQuery } from 'react-apollo-hooks';
import { Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import { verbQueries } from './components/GqlQueries/Queries';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

const client = new ApolloClient({
  uri: 'https://mighty-peak-22601.herokuapp.com/', // production
});

function App() {
  // const [isShowing, setIsShowing] = useState(false);
  const [level] = useState(0);
  const [latam] = useState(true);

  // we're importing an array of GraphQL queries and
  // slicing by the level which is a number between 0-6
  const { loading, data } = useQuery(verbQueries[level], {
    variables: { latam },
  })

  console.log('data -->', data);
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </ApolloProvider>
  );
}

export default App;

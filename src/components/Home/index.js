import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { useQuery } from 'react-apollo-hooks';
import VerbTool from '../Verb/VerbTool';
import { verbQueries } from '../GqlQueries/Queries';

const client = new ApolloClient({
  uri: 'https://mighty-peak-22601.herokuapp.com/' // production
});

function App() {
  // const [isShowing, setIsShowing] = useState(false);
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);

  // we're importing an array of GraphQL queries and
  // slicing by the level which is a number between 0-6
  const { loading, data } = useQuery(verbQueries[level], {
    variables: { latam }

  const updateLatam = () => {
    setLatam(!latam);
  };

  // const openModalHandler = () => {
  //   this.setState({
  //     isShowing: true,
  //   });
  // };

  // const closeModalHandler = () => {
  //   this.setState({
  //     isShowing: false,
  //   });
  // };

  const updateVerbTenses = event => {
    setLevel(event.target.value);
    // handleRefresh();
  };

  console.log('data -->', data);
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <div className="app-wrapper">
          {/* {isShowing ? (
            <div onClick={closeModalHandler} className="back-drop" />
          ) : null} */}
          <VerbTool
            level={level}
            updateVerbTenses={updateVerbTenses}
            data={data.verbs}
            loading={loading}
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
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

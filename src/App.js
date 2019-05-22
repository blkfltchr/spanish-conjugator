import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Index from './components/Verb/index';
import Modal from './components/Modal/Modal';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { LEVEL_THREE } from './components/Filters/VerbTensesFilters';
import { useQuery } from 'react-apollo-hooks';

const client = new ApolloClient({
  uri: 'https://mighty-peak-22601.herokuapp.com/' // production
});
// localhost:4000 in development

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       isShowing: false
//     };
//   }

function App(props) {
  const [isShowing, setIsShowing] = useState(false);
  const [level, setLevel] = useState(0);
  const test = 'LEVEL_THREE';
  const { loading, data } = useQuery(LEVEL_THREE);

  console.log('From App.js --->', data);

  const openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  const closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
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
          {isShowing ? (
            <div onClick={closeModalHandler} className="back-drop" />
          ) : null}
          <Index
            level={level}
            updateVerbTenses={updateVerbTenses}
            loading={loading}
            data={data.verbs}
          />
          ;
          <div className="made-with-love" onClick={openModalHandler}>
            Made with
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            in
            <span role="img" aria-label="colombia">
              🇨🇴
            </span>
          </div>
          <Modal show={isShowing} close={closeModalHandler} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

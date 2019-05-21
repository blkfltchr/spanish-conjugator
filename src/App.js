import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Index from './components/Verb/index';
import Modal from './components/Modal/Modal';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { TEST_QUERY } from './components/Filters/VerbTensesFilters';
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
  const { loading, data } = useQuery(TEST_QUERY);

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

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Header />
        <div className="app-wrapper">
          {isShowing ? (
            <div onClick={closeModalHandler} className="back-drop" />
          ) : null}
          <Index loading={loading} data={data.LevelThreeQuery} />;
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

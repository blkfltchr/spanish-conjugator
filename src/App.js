import React, { Component } from 'react';
import Header from './components/Layout/Header';
import Index from './components/Verb/index';
import Modal from './components/Modal/Modal';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://mighty-peak-22601.herokuapp.com/' // production
});
// localhost:4000 in development

const LevelThree = gql`
  query VerbsQuery {
    LevelThreeQuery(first: 1) {
      form1p
      form1s
      form2p
      form2s
      form3p
      form3s
      gerund
      gerundEnglish
      index
      infinitive
      infinitiveEnglish
      mood
      moodEnglish
      pastparticiple
      pastparticipleEnglish
      tense
      tenseEnglish
      verbEnglish
    }
  }
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    const { isShowing } = this.state;
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <Header />
          <div className="app-wrapper">
            {isShowing ? (
              <div onClick={this.closeModalHandler} className="back-drop" />
            ) : null}
            <Index />;
            <div className="made-with-love" onClick={this.openModalHandler}>
              Made with
              <span role="img" aria-label="heart">
                ❤️
              </span>{' '}
              in
              <span role="img" aria-label="colombia">
                🇨🇴
              </span>
            </div>
            <Modal show={isShowing} close={this.closeModalHandler} />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

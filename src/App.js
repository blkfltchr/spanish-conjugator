import React, { Component } from 'react';
import miniData from './miniData';
import { Route } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import Home from './components/home/Home';
import Header from './components/Header';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import Conversation from './conversationPage/Conversation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData,
      tempData: [],
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate'
    };
  }
  render() {
    return (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/conversation" component={Conversation} />
        <Route
          exact
          path="/random"
          render={props => (
            <ConjugatorContainer
              {...props}
              setTenses={this.updateVerbTenses}
              data={this.state.data}
            />
          )}
        />
        <div>
          <Route exact path="/options" component={OptionsContainer} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import miniData from './miniData';
import { Route } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import AdvancedOptions from './components/optionsPage/AdvancedOptions';
import Home from './components/home/Home';
import Header from './components/Header';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import Conversation from './conversationPage/Conversation';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/conversation" component={Conversation} />
        <Route path="/options" component={OptionsContainer} />
        <Route path="/advancedOptions" component={AdvancedOptions} />
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
      </div>
    );
  }
}

export default App;

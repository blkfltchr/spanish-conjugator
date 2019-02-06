import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import presentData from './presentData';

import Header from './components/Header';
import Home from './components/home/Home';
import BeginnerPage from './components/home/Levels/BeginnerPage';

import ConversationOne from './components/Conversation/ConversationOne';
import ConversationTwo from './components/Conversation/ConversationTwo';

import AdvancedOptions from './components/OptionsPage/AdvancedOptions';
import OptionsContainer from './components/OptionsPage/OptionsContainer';
import Random from './components/Random/Random';
import RandomFiltered from './components/OptionsPage/RandomFiltered/RandomFiltered';
import FilteredBegRandom from './components/OptionsPage/RandomFiltered/FilteredBegRandom';
import LoadingSpinner from './components/OptionsPage/LoadingSpinner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      present: presentData
    };
  }
  render() {
    return (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beginner" component={BeginnerPage} />
        <Route exact path="/conversation/one" component={ConversationOne} />
        <Route
          exact
          path="/conversation/two"
          component={ConversationTwo}
        />{' '}
        <Route path="/options" component={OptionsContainer} />
        <Route path="/advancedOptions" component={AdvancedOptions} />
        <Route
          exact
          path="/random"
          render={props => <Random {...props} data={this.state.present} />}
        />
        <Route path="/randomFiltered" component={RandomFiltered} />
        <Route path="/LoadingSpinner" component={LoadingSpinner} />
      </div>
    );
  }
}

export default App;

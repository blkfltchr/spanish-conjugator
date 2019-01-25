import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import miniData from './miniData';
import presentData from './presentData';

import Header from './components/Header';
import Home from './components/home/Home';
import BeginnerPage from './components/home/Levels/BeginnerPage';

import ConversationOne from './components/Conversation/ConversationOne';
import ConversationTwo from './components/Conversation/ConversationTwo'

import OptionsContainer from './components/optionsPage/OptionsContainer';
import Random from './components/Random/Random'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData,
      present: presentData,
      verbTenses: []
    };
  }

  filterData = event => {
    event.preventDefault();
    const test = Object.values(miniData).filter(
      verb => verb.infinitive === 'hablar'
    );
    this.setState({
      data: test
    });
  };

  setTenses = event => {
    this.setState({
      verbTenses: event.target.value
    });
    console.log('Clicked!');
  };

  render() {
    return (
      <div style={{width: '420px', margin: '0 auto'}}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/conversation" component={ConversationOne} />
        <Route exact path="/conversation/two" component={ConversationTwo} />
        <Route exact path="/beginner" component={BeginnerPage} />
        <Route exact path="/random"
            render={props => (
              <Random
                {...props}
                data={this.state.present}
              />
            )}
          />
        <div>
          <Route
            exact path="/options"
            render={props => (
              <OptionsContainer {...props} filterData={this.filterData} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;

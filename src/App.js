import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import beginnerData from './beginnerData';

import Header from './components/Header';
import Home from './components/home/Home';
import BeginnerPage from './components/home/Levels/BeginnerPage';

import AdvancedOptions from './components/optionsPage/AdvancedOptions'
import OptionsContainer from './components/optionsPage/OptionsContainer';
import Random from './components/Random/Random'

class App extends Component {
  constructor() {
    super();
    this.state = {
      beginnerData: beginnerData,
    };
  }
  render() {
    return (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beginner" component={BeginnerPage} />      
        <Route path="/options" component={OptionsContainer} />
        <Route path="/advancedOptions" component={AdvancedOptions} />
        <Route exact path="/random"
            render={props => (
              <Random
                {...props}
                data={this.state.beginnerData}
              />
            )}
          />
      </div>
    );
  }
}

export default App;

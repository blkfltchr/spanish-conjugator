import React, { Component } from 'react';
import miniData from './miniData';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import { Route } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData
    };
  }
  render() {
    return (
      <div>
        <h1>Spanish Conjugator</h1>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <ConjugatorContainer {...props} data={this.state.data} />
            )}
          />
        </div>
        <div>
          <Route
            path="/options"
            render={props => <OptionsContainer {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;

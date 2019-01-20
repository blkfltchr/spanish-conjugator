import React, { Component } from 'react';
import miniData from './miniData';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Spanish Conjugator</h1>
        <h2>
          <ConjugatorContainer data={this.state.data} />
        </h2>
      </div>
    );
  }
}

export default App;

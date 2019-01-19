import React, { Component } from 'react';
// import data from './fred-jehle-spanish-verbs';
import miniData from './miniData';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Spanish Conjugator</h1>
        <p>Hello world. Vamos! Ondulé!</p>
        <p>{miniData.map(word => word.infinitive)}</p>
      </div>
    );
  }
}

export default App;

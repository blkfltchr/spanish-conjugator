import React, { useState } from 'react';

import Header from './components/Layout/Header';

import Container from './components/Verb/index';


function App () {
  return(
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <Container />
        </div>
      </div>
  );
}

export default App;

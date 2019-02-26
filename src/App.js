import React from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";

import Verb from "./components/Verb/Verb";

const App = () => {
  return (
      <div className="app">
          <Route path="/" component={ Header } />
          <Route exact path="/" component={ Verb } />
      </div>
  );
};

export default App;

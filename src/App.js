import React from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";

import Verb from "./components/Verb/Verb";

import Modal from "./components/Modal/Modal"

const App = () => {
  return (
      <div className="app">
          <Route path="/" component={ Header } />
          <Route exact path="/" component={ Verb } />
          <Route exact path="/modal" component={ Modal } />
      </div>
  );
};

export default App;

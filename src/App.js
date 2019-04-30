import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Container from "./components/Verb/index";
import Navigation from "./components/Navigation/Navigation";
import DefaultLanding from "./DefaultLanding";
import SignUp from "./components/Navigation/SignUp";
import Graph from "./components/Graph/Graph";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <div className="app-wrapper">
        <Route exact path="/" component={DefaultLanding} />

        <Route exact path="/learn" component={Container} />
        <Route exact path="/progress" component={Graph} />
      </div>
    </div>
  );
};

export default App;

import React from "react";

import Header from "./components/Layout/Header";
import Container from "./components/Verb/index";
import Graph from "./components/Graph/Graph";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Container />
        <Graph />
      </div>
    </div>
  );
}

export default App;

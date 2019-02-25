import React from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";

import Verb from "./components/Verb/Verb";

const App = () => {
  return (
      <div style={ {width: "420px", margin: "0 auto", border: 'solid 3px black', padding: '10px 20px', backgroundColor: '#f6f9fc', borderRadius: '25px'} }>
          <Route path="/" component={ Header } />
          <Route exact path="/" component={ Verb } />
      </div>
  );
};

export default App;

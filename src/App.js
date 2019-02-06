import React from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";

import AdvancedOptions from "./components/optionsPage/AdvancedOptions";
import OptionsContainer from "./components/optionsPage/OptionsContainer";
import Random from "./components/Random/Random";

const App = () => {  
    return (
        <div style={ {width: "420px", margin: "0 auto"} }>
            <Route path="/" component={ Header } />
            <Route path="/options" component={ OptionsContainer } />
            <Route path="/advancedOptions" component={ AdvancedOptions } />
            <Route exact path="/" component={ Random } /> 
        </div>
    );
  }


export default App;

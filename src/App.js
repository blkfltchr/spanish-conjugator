import React, { Component } from "react";

import { Route } from 'react-router-dom';
import Home from "./components/home/Home";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Login/RegisterForm";


    class App extends Component {

      constructor() {
        super();

        this.state = {
          isShowing: false
        }
      }

      

      render () {
      return(
      <div className="app">
      <Route exact path='/' component={Home} /> 
      <Route exact path='/Login' component={LoginForm} /> 
      <Route exact path='/Register' component={RegisterForm} /> 
          
      </div>
      
  );
};
    }

export default App;

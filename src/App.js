import React, { Component } from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";

import Verb from "./components/Verb/Verb";

import Modal from "./components/Modal/Modal"

    class App extends Component {

      constructor() {
        super();

        this.state = {
          isShowing: false
        }
      }

      openModalHandler = () => {
        this.setState({
          isShowing: true
        });
      }

      closeModalHandler = () => {
        this.setState({
          isShowing: false
        });
      }

      render () {
      return(
      <div className="app">
          <Route path="/" component={ Header } />
          <Route exact path="/" component={ Verb } />
          <div style={{textAlign: 'center'}} className="hover-text" onClick={this.openModalHandler}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
          <Modal
					show={this.state.isShowing}
					close={this.closeModalHandler} 
          />
      </div>
      
  );
};
    }

export default App;

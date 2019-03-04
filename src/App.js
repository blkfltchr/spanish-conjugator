import React, { Component } from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";

import Verb from "./components/Verb/Verb";

import Popup from "./components/Modal/Popup"

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
          { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
          <Route path="/" component={ Header } />
          <Route exact path="/" component={ Verb } />
          {/* <Route exact path="/modal" component={ Modal } /> */}
          <div style={{textAlign: 'center', cursor: "pointer"}} onClick={this.openModalHandler}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
          <Popup
					className="modal"
					show={this.state.isShowing}
					close={this.closeModalHandler} />
      </div>
      
  );
};
    }

export default App;

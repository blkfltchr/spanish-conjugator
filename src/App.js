import React, { Component } from "react";

import Header from "./components/Layout/Header";

import Container from "./components/Verb/index";

import Modal from "./components/Modal/Modal";

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
          <Header />
        <div className="app-wrapper">
          { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
          <Container />
          <div className="made-with-love" onClick={this.openModalHandler}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
          <Modal
					show={this.state.isShowing}
					close={this.closeModalHandler} 
          />
        </div>
      </div>
      
  );
};
    }

export default App;

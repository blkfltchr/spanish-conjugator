import React, { Component } from "react";

import Header from "./components/Header";

import Container from "./components/Verb/Container";

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
          { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
          <Header />
          <Container />
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

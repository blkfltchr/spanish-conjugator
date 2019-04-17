import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../Header";
import Container from "../Verb/Container";
import Modal from "../Modal/Modal";



    class Home extends Component {

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
      <div className="home">
          <Header />
        <div className="home-wrapper">
          { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
          <Container />
          <div className="made-with-love" onClick={this.openModalHandler}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
          <Modal
            show={this.state.isShowing}
            close={this.closeModalHandler} 
          />
        </div>
        <div>
            <Link to='/Login'><button>Login</button></Link>
            <Link to='/Register'><button>Register</button></Link>
        </div>
      </div>
      
  );
};
    }

export default Home;
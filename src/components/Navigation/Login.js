import React, { useContext, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  ModalContext,
  UsernameContext,
  PasswordContext
} from "../../Context/Store";

import axios from "axios";
// import jwt_decode from "jwt";

const Login = props => {
  const [modal, setModal] = useContext(ModalContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [password, setPassword] = useContext(PasswordContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  // useEffect(() => {
  //     axios.post("https://glacial-hamlet-47910.herokuapp.com/api/login");
  // }, [input])
  submitHandler = e => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };

    // Axios.post("http://localhost:3333/api/login", user)
    Axios.post("https://glacial-hamlet-47910.herokuapp.com/api/login", user)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        setLoggedIn({ isLoggedIn: true });
      })
      .catch(error => {
        console.log("Axios Error Msg: ", error);
      });
  };

  handleInput = async e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  if (this.state.isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="login-form">
        <div>
          <button className="log-in-button" onClick={toggle}>
            Login
          </button>
          <Modal isOpen={modal} toggle={toggle} className={props.className}>
            <ModalHeader toggle={toggle}>Login</ModalHeader>
            <ModalBody>
              <form className="sign-up-form">
                <span>Username</span>
                <input
                  className="sign-up-input"
                  name="username"
                  value=""
                  placeholder="username"
                />
                <span>Password</span>
                <input
                  className="sign-up-input"
                  name="password"
                  value=""
                  placeholder="password"
                />
                <div>
                  <input
                    className="sign-up-input"
                    type="checkbox"
                    name="remeber me"
                  />{" "}
                  remember me <br />
                </div>
              </form>
              <button className="form-button">Login</button>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>
      </div>
    );
  }
};

export default Login;

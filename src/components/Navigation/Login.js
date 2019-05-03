import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  ModalContext,
  UsernameContext,
  PasswordContext
} from "../../Context/Store";
// import jwt_decode from "jwt";

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
  const submitHandler = e => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };

    // Axios.post("http://localhost:3333/api/login", user)
    fetch("https://glacial-hamlet-47910.herokuapp.com/api/login", user)
      .then(res => {
        console.log(res);
        console.log("data ", res.token);
        localStorage.setItem("jwt", res.token);
        // setLoggedIn(true);
      })
      .catch(error => {
        console.log("Axios Error Msg: ", error);
      });
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  if (loggedIn) {
    return <Redirect to="/learn" />;
  } else {
    // return <Redirect to="/" />;

    return (
      <div className="login-form">
        <div>
          <button className="log-in-button" onClick={toggle}>
            Login
          </button>
          <Modal isOpen={modal} toggle={toggle} className={props.className}>
            <ModalHeader toggle={toggle}>Login</ModalHeader>
            <ModalBody>
              <form className="sign-up-form" onSubmit={submitHandler}>
                <span>Username</span>
                <input
                  className="sign-up-input"
                  name="username"
                  onChange={handleUsername}
                  value={username}
                  placeholder="username"
                />
                <span>Password</span>
                <input
                  type="password"
                  className="sign-up-input"
                  name="password"
                  onChange={handlePassword}
                  value={password}
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
                <button className="form-button">Login</button>
              </form>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>
      </div>
    );
  }
};

export default Login;

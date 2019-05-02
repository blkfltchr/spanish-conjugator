import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  ModalContext,
  UsernameContext,
  PasswordContext
} from "../../Context/Store";

const SignUp = () => {
  const [modal, setModal] = useContext(ModalContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [password, setPassword] = useContext(PasswordContext);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="sign-up-form">
      <div>
        <button className="sign-up-button" onClick={this.toggle}>
          Sign Up
        </button>
        <Modal isOpen={modal} toggle={toggle} className={this.props.className}>
          <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <form className="sign-up-form">
              <span>Username</span>
              <input
                className="sign-up-input"
                name="username"
                value=""
                placeholder="Username"
              />
              <span>Email</span>
              <input
                className="sign-up-input"
                name="email"
                value=""
                placeholder="Email"
              />
              <span>password</span>
              <input
                className="sign-up-input"
                name="password"
                value=""
                placeholder="Password"
              />
              <span>Retype Password</span>
              <input
                className="sign-up-input"
                name="password"
                value=""
                placeholder="Retype password"
              />
              <button className="form-button">Register</button>
            </form>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  ModalContext,
  UsernameContext,
  PasswordContext
} from "../../Context/Store";

const Login = props => {
  const [modal, setmodal] = useContext(ModalContext);
  const [username, setusername] = useContext(UsernameContext);
  const [password, setpassword] = useContext(PasswordContext);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="login-form">
      <div>
        <button className="log-in-button" onClick={toggle}>
          Login
        </button>
        <Modal isOpen={modal} toggle={this.toggle} className={props.className}>
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
};


export default Login;

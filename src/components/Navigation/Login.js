<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Form, Input } from './Navigation';
import { ModalContext, UsernameContext, PasswordContext } from '../../Context/Store';

const Login = (props) => {
	const [ modal, setModal ] = useContext(ModalContext);
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);

	const toggle = () => {
		setModal(!modal);
	};
	return (
		<div className="login-form">
			<div>
				<Button onClick={toggle}>Login</Button>
				<Modal isOpen={modal} toggle={toggle}>
					<ModalHeader toggle={toggle}>Login</ModalHeader>
					<ModalBody>
						<Form>
							<span>Username</span>
							<Input name="username" value="" placeholder="username" />
							<span>Password</span>
							<Input name="password" value="" placeholder="password" />
							<div>
								<Input type="checkbox" name="remeber me" /> remember me <br />
							</div>
						</Form>
						<Button form>Login</Button>
					</ModalBody>
					<ModalFooter />
				</Modal>
			</div>
		</div>
	);
=======
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useContext, useState } from "react";
>>>>>>> fae4cd68a94ecceb64f519b067f50d893a4979bc
import axios from "axios";
import auth from "../auth/auth";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  ModalContext,
  UsernameContext,
  PasswordContext
} from "../../Context/Store";
import { useRouter } from "../../hooks/useRouter";
import { RouterContext } from "../../Context/CustomBrowserRouter";

// import jwt_decode from "jwt";

const Login = props => {
  const [modal, setModal] = useContext(ModalContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [password, setPassword] = useContext(PasswordContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const routeProps = useContext(RouterContext);

  const toggle = () => {
    setModal(!modal);
  };

  const submitHandler = e => {
    e.preventDefault();

    // Axios.post("http://localhost:3333/api/login", user)
    axios
      .post("https://glacial-hamlet-47910.herokuapp.com/api/login", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res.data);
        console.log("data ", res.data.your_token);
        localStorage.setItem("jwt", res.data.your_token);
        // setLoggedIn(true)
      })
      .catch(error => {
        console.log("Axios Error Msg: ", error);
      });
  };

  const clickHandler = e => {
    e.preventDefault();
    auth.login(() => {
      routeProps.history.push("/learn");
    });
    toggle();
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }

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
              <button className="form-button" onClick={clickHandler}>
                Login
              </button>
            </form>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
<<<<<<< HEAD
    );
  }
>>>>>>> b9fd16b4bd2eef182d4301f37f3c49cedf3e9d2e
=======
    </div>
  );
>>>>>>> fae4cd68a94ecceb64f519b067f50d893a4979bc
};

export default Login;

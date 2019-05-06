import React, { useContext } from "react";
import { Form, Input, Button, Span } from "../Navigation/Styled";
import { UsernameContext, PasswordContext } from "../../Context/Store";
import { RouterContext } from "../../Context/CustomBrowserRouter";

import axios from "axios";
import auth from "../auth/auth";

import "./login.css";

const SignUpPage = props => {
  const [username, setUsername] = useContext(UsernameContext);
  const [password, setPassword] = useContext(PasswordContext);
  const routeProps = useContext(RouterContext);

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://glacial-hamlet-47910.herokuapp.com/api/register", {
        username: username,
        password: password
      })
      .then(res => {
        console.log("res ", res);
      })
      .catch(error => {
        console.log("Error signing up: ", error);
      });
    auth.login(() => {
      routeProps.history.push("/login");
    });
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <div className="login-page-container">
      <div className="form-wrapper">
        <Form onSubmit={submitHandler}>
          <h3>
            Not Registered? <br />
            Sign Up Below!
          </h3>
          <br />
          <Input
            type="username"
            name="username"
            value={username}
            onChange={handleUsername}
            placeholder="Username"
          />
          <span>Password:</span>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
          />
          <span>Retype Password:</span>
          <Input
            type="password"
            name="confirmationPassword"
            validate={{ match: { value: "password" } }}
            placeholder="Retype password"
          />
          <Button>Register</Button>
        </Form>
      </div>{" "}
    </div>
  );
};

export default SignUpPage;

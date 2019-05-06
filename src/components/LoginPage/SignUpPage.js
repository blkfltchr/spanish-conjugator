import React, { useEffect, useState, useContext } from "react";
import { Form, Input, Button } from "../Navigation/Navigation";
import auth from "../auth/auth";
import SignUp from "../Navigation/SignUp";
import {
  ModalContext,
  UsernameContext,
  PasswordContext
} from "../../Context/Store";
import { useRouter } from "../../hooks/useRouter";
import { RouterContext } from "../../Context/CustomBrowserRouter";

import axios from "axios";

import styled from "styled-components";
import "./login.css";

const SignUpPage = props => {
  const [modal, setModal] = useContext(ModalContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [password, setPassword] = useContext(PasswordContext);
  const [loggedIn, setLoggedIn] = useState(false);
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

  // const clickHandler = e => {
  //   e.preventDefault();
  // };

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
{
  /* <div className="form-wrapper">
				<Form onSubmit={submitHandler}>
					<h3>
						Not Registered? <br />Sign Up Below!
					</h3>
					<br />
					<span>Username:</span>
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
						validate={{ match: { value: 'password' } }}
						placeholder="Retype password"
					/>
					<Button>Register</Button>
				</Form>
			</div> */
}

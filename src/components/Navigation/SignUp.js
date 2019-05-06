import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import {
  UsernameContext,
  PasswordContext,
  RegisterContext
} from "../../Context/Store";
import { Span } from "../Navigation/Styled";

const SignUp = props => {
  const [setRegister] = useContext(RegisterContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [password, setPassword] = useContext(PasswordContext);

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://glacial-hamlet-47910.herokuapp.com/api/register", {
        username: username,
        password: password
      })
      .then(res => {
        setRegister(true);
        console.log("res ", res);
      })
      .catch(error => {
        console.log("Error signing up: ", error);
      });
  };

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  useEffect(() => {
    console.log("username:", username);
    console.log("password:", password);
  }, []);

  return (
    <div className="sign-up-form">
      <div>
        <form className="sign-up-form" onSubmit={submitHandler}>
          <Span>Username</Span>
          <input
            tpye="username"
            className="sign-up-input"
            name="username"
            value={username}
            onChange={handleUsername}
            placeholder="Username"
          />
          <Span>password</Span>
          <input
            type="password"
            className="sign-up-input"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
          />
          <Span>Retype Password</Span>
          <input
            type="password"
            className="sign-up-input"
            name="confirmationPassword"
            validate={{ match: { value: "password" } }}
            placeholder="Retype password"
          />
          <Button>Register </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useContext } from "react";
import { Form, Input, Button, Span, MyLink } from "../Navigation/Styled";
import {
  ModalContext,
  UsernameContext,
  PasswordContext
} from "../../Context/Store";
import { RouterContext } from "../../Context/CustomBrowserRouter";

import axios from "axios";

import "./login.css";

const Login = props => {
  const [setModal] = useContext(ModalContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [password, setPassword] = useContext(PasswordContext);
  const routeProps = useContext(RouterContext);

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
        routeProps.history.push("/learn");
      })
      .then(res => {
        setModal(true);
      })
      .catch(error => {
        console.log("Axios Error Msg: ", error);
      });
  };

  const handleNewUser = e => {
    e.preventDefault();
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
          <h3>Sign In</h3>
          <br />
          <Span>Username:</Span>
          <Input
            name="username"
            onChange={handleUsername}
            value={username}
            placeholder="username"
          />
          <Span>Password:</Span>
          <Input
            type="password"
            name="password"
            onChange={handlePassword}
            value={password}
            placeholder="password"
          />
          <div>
            {/* <input type="checkbox" name="remember me" />{" "} */}
            <Span>remember me</Span> <br />
          </div>
          <Button>Login</Button>
          <Button onClick={handleNewUser}>
            <MyLink to="/signup">New User</MyLink>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState, useContext } from 'react';
import { Form, Input, Button } from '../Navigation/Navigation';
import auth from '../auth/auth';
import SignUp from '../Navigation/SignUp';
import { ModalContext, UsernameContext, PasswordContext } from '../../Context/Store';
import { useRouter } from '../../hooks/useRouter';
import { RouterContext } from '../../Context/CustomBrowserRouter';

import axios from 'axios';

import styled from 'styled-components';
import './login.css';

const Login = (props) => {
	const [ modal, setModal ] = useContext(ModalContext);
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);
	const [ loggedIn, setLoggedIn ] = useState(false);
	const routeProps = useContext(RouterContext);

	const toggle = () => {
		setModal(!modal);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		// Axios.post("http://localhost:3333/api/login", user)
		axios
			.post('https://glacial-hamlet-47910.herokuapp.com/api/login', {
				username: username,
				password: password
			})
			.then((res) => {
				console.log(res.data);
				console.log('data ', res.data.your_token);
				localStorage.setItem('jwt', res.data.your_token);
				// setLoggedIn(true)
			})
			.catch((error) => {
				console.log('Axios Error Msg: ', error);
			});
	};

	const clickHandler = (e) => {
		e.preventDefault();
		auth.login(() => {
			routeProps.history.push('/learn');
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
		<div className="login-page-container">
			<FormContainer>
				<Form>
					<h2>Sign In</h2>
					<br />
					<span>Username:</span>
					<Input name="username" onChange={handleUsername} value={username} placeholder="username" />
					<span>Password:</span>
					<Input
						type="password"
						name="password"
						onChange={handlePassword}
						value={password}
						placeholder="password"
					/>
					<input type="checkbox" name="remember me" /> <span>remember me</span> <br />
					<Button onClick={clickHandler}>Login</Button>
				</Form>
			</FormContainer>
			<div className="divider" />
			<FormContainer>
				<Form onSubmit={submitHandler}>
					<h3>Not Registered? Sign Up Below!</h3>
					<br />
					<span>Username</span>
					<Input
						type="username"
						name="username"
						value={username}
						onChange={handleUsername}
						placeholder="Username"
					/>
					<span>password</span>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={handlePassword}
						placeholder="Password"
					/>
					<span>Retype Password</span>
					<Input
						type="password"
						name="confirmationPassword"
						validate={{ match: { value: 'password' } }}
						placeholder="Retype password"
					/>
					<Button>Register</Button>
				</Form>
			</FormContainer>
		</div>
	);
};

export default Login;

const FormContainer = styled.div`
	background: #f6f9fc;
	padding: 40px;
	justify-content: center;
	text-align: center;
	width: 45%;
`;

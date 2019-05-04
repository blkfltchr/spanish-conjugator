import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import auth from '../auth/auth';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalContext, UsernameContext, PasswordContext } from '../../Context/Store';
import { useRouter } from '../../hooks/useRouter';
import { RouterContext } from '../../Context/CustomBrowserRouter';
import { Button, Form, Input } from './Navigation';

// import jwt_decode from "jwt";

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
		<div className="login-form">
			<div>
				<Button onClick={toggle}>Login</Button>
				<Modal isOpen={modal} toggle={toggle} className={props.className}>
					<ModalHeader toggle={toggle}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={submitHandler}>
							<span>Username</span>
							<Input name="username" onChange={handleUsername} value={username} placeholder="username" />
							<span>Password</span>
							<Input
								type="password"
								name="password"
								onChange={handlePassword}
								value={password}
								placeholder="password"
							/>
							<div>
								<Input type="checkbox" name="remember me" /> remember me <br />
							</div>
							<Button onClick={clickHandler}>Login</Button>
						</Form>
					</ModalBody>
					<ModalFooter />
				</Modal>
			</div>
		</div>
	);
};

export default Login;

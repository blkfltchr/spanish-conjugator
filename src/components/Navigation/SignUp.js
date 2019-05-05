import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalContext, UsernameContext, PasswordContext, RegisterContext } from '../../Context/Store';
import { Button, Form, Input } from './Navigation';

const SignUp = (props) => {
	const [ register, setRegister ] = useContext(RegisterContext);
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);
	const [ signedUp, setSignedUp ] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://glacial-hamlet-47910.herokuapp.com/api/register', {
				username: username,
				password: password
			})
			.then((res) => {
				setSignedUp(true);
				console.log('res ', res);
			})
			.catch((error) => {
				console.log('Error signing up: ', error);
				// console.log(user);
			});
	};
	//   useEffect(() => {
	//     return () => {
	//       console.log(user);
	//     };
	//   }, [user]);
	const toggle = () => {
		setRegister(!register);
	};

	function handleUsername(e) {
		setUsername(e.target.value);
	}
	function handlePassword(e) {
		setPassword(e.target.value);
	}
	useEffect(() => {
		console.log('username:', username);
		console.log('password:', password);
	}, []);

	return (
		<div className="sign-up-form">
			<div>
				<Button alt onClick={toggle}>
					Sign Up
				</Button>
				<Modal isOpen={register} toggle={toggle} className={props.className}>
					<ModalHeader toggle={toggle}>Sign Up</ModalHeader>
					<ModalBody>
						<Form onSubmit={submitHandler}>
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
					</ModalBody>
					<ModalFooter />
				</Modal>
			</div>
		</div>
	);
};

export default SignUp;

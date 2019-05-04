import React from 'react';
import { Form, Input, Button } from '../Navigation/Navigation';
import SignUp from '../Navigation/SignUp';

import styled from 'styled-components';
import './login.css';

const Login = (props) => {
	return (
		<div>
			<FormContainer>
				<Form>
					<h2>Sign In</h2>
					<span>Username:</span>
					<Input />
					<span>Password:</span>
					<Input />
					<input className="checkbox" type="checkbox" name="remeber me" /> <span>remember me</span> <br />
					<Button>Login</Button>
				</Form>
				<div className="login-sign-up">
					<p>If you haven't already </p>
					{<SignUp />}
				</div>
			</FormContainer>
		</div>
	);
};

export default Login;

const FormContainer = styled.div`
	background: #f6f9fc;
	border: 5px solid #941511;
	padding: 50px;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	width: 70%;
`;

import React, { useContext } from 'react';
import { Form, Input, Button, Span, PageContainer, FormWrap, Title, LoginSvg } from '../Pages/PagesStyled';
import { UsernameContext, PasswordContext } from '../../Context/Store';
import { RouterContext } from '../../Context/CustomBrowserRouter';
import Happy from '../../assets/happy.svg';
import axios from 'axios';
import auth from '../auth/auth';

const SignUpPage = (props) => {
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);
	const routeProps = useContext(RouterContext);

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://glacial-hamlet-47910.herokuapp.com/api/register', {
				username: username,
				password: password
			})
			.then((res) => {
				console.log('res ', res);
			})
			.catch((error) => {
				console.log('Error signing up: ', error);
			});
		auth.login(() => {
			routeProps.history.push('/login');
		});
	};

	function handlePassword(e) {
		setPassword(e.target.value);
	}
	function handleUsername(e) {
		setUsername(e.target.value);
	}

	return (
		<PageContainer>
			<Title>Sign Up Below!</Title>
			<FormWrap>
				<Form onSubmit={submitHandler}>
					<Span>Username:</Span>
					<Input
						type="username"
						name="username"
						value={username}
						onChange={handleUsername}
						placeholder="Username"
					/>
					<Span>Password:</Span>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={handlePassword}
						placeholder="Password"
					/>
					<Span>Retype Password:</Span>
					<Input
						type="password"
						name="confirmationPassword"
						validate={{ match: { value: 'password' } }}
						placeholder="Retype password"
					/>
					<Button>Register</Button>
				</Form>
			</FormWrap>{' '}
			<LoginSvg src={Happy} alt="happy" />
		</PageContainer>
	);
};

export default SignUpPage;

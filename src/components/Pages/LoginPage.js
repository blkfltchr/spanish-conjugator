import React, { useContext } from 'react';
import {
	Form,
	Input,
	Button,
	Span,
	MyLink,
	FormWrap,
	PageContainer,
	ButtonContainer,
	Title,
	LoginSvg,
	SignUpButton
} from '../Pages/PagesStyled';
import { ModalContext, UsernameContext, PasswordContext } from '../../Context/Store';
import { RouterContext } from '../../Context/CustomBrowserRouter';
import LoginImage from '../../assets/login.svg';
import axios from 'axios';

const Login = (props) => {
	const [ modal, setModal ] = useContext(ModalContext);
	const [ username, setUsername ] = useContext(UsernameContext);
	const [ password, setPassword ] = useContext(PasswordContext);
	const routeProps = useContext(RouterContext);

	const toggle = () => {
		setModal(!modal);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://glacial-hamlet-47910.herokuapp.com/api/login', {
				username: username,
				password: password
			})
			.then((res) => {
				console.log(res.data);
				console.log('data ', res.data.your_token);
				localStorage.setItem('jwt', res.data.your_token);
				routeProps.history.push('/learn');
				toggle();
			})
			.catch((error) => {
				console.log('Axios Error Msg: ', error);
			});
	};

	const handleNewUser = (e) => {
		e.preventDefault();
	};

	function handlePassword(e) {
		setPassword(e.target.value);
	}
	function handleUsername(e) {
		setUsername(e.target.value);
	}
	return (
		<PageContainer>
			<Title>Sign In</Title>
			<FormWrap>
				<Form onSubmit={submitHandler}>
					<br />
					<Span>Username:</Span>
					<Input name="username" onChange={handleUsername} value={username} placeholder="username" />
					<Span>Password:</Span>
					<Input
						type="password"
						name="password"
						onChange={handlePassword}
						value={password}
						placeholder="password"
					/>
					<ButtonContainer>
						<Button>Login</Button>
						<SignUpButton onClick={handleNewUser}>
							<MyLink to="/signup">New User</MyLink>
						</SignUpButton>
					</ButtonContainer>
				</Form>
			</FormWrap>
			<LoginSvg src={LoginImage} alt="login" />
		</PageContainer>
	);
};

export default Login;

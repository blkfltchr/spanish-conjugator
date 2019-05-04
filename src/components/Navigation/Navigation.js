import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './navigation.css';
import styled, { css } from 'styled-components';

import Login from './Login';
import SignUp from './SignUp';
import Sidebar from './Sidebar';

const Navigation = (props) => {
	return (
		<TopBar>
			<NavLogo>
				<h1>Spanish Conjugator</h1>
			</NavLogo>
			<nav>
				<div className="default-menu">
					<Login />
					<SignUp />
					<Sidebar />
				</div>
				<div className="user-menu">
					<NavLink to="/">
						<Button>Home</Button>
					</NavLink>
					<NavLink to="/learn">
						<Button alt>Go Learn</Button>
					</NavLink>
				</div>
			</nav>
		</TopBar>
	);
};

export default Navigation;

// Styled Components

const TopBar = styled.div`
	margin: 0 0 10px 0;
	padding: 0 15px;
	display: flex;
	justify-content: space-between;
`;

const NavLogo = styled.div`
	background: #941511;
	border: 5px solid #ffc400;
	box-shadow: 1px 1px 3px #000000;
	border-radius: 0 35px 25px 0;
	color: #ffffff;
	text-shadow: 1px 1px 4px #000000;
	width: 40%;
	display: flex;
	justify-content: center;
	align-self: center;
`;

export const Form = styled.form`
	margin: 0 auto;
	text-align: start;
	height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Button = styled.button`
	background: #ffc400;
	border: 1px solid #000000;
	border-radius: 10px;
	box-shadow: 2px 2px 4px #000000;
	color: #000000;
	cursor: pointer;
	margin: 0 auto;
	padding: 5px 20px;
	display: flex;

	&:hover {
		background: #941511;
		color: #ffffff;
		font-weight: bold;
		padding: 7px 24px;
	}

	${(props) =>
		props.alt &&
		css`
			background: #941511;
			color: #ffffff;

			&:hover {
				background: #ffc400;
				color: #000000;
			}
		`};

	${(props) =>
		props.form &&
		css`
			margin: 10px auto;
			padding: 10px 30px;

			&:hover {
				background: #941511;
				color: #ffffff;
				padding: 10px 30px;
			}
		`};
`;

export const Input = styled.input`
	background-color: #ffffff;
	border-radius: 5px;
	border 1px solid;
	padding: 5px;
	margin: 10px 0;
`;

import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Sidebar = (props) => {
	return (
		<div>
			<Container>
				<h2> Hi User </h2>
				<div className="my-links">
					<MyLink to="/">Home</MyLink>
					<MyLink to="/learn">Go Learn</MyLink>
					<MyLink to="/my-account">My Account</MyLink>
					<MyLink to="/about">About</MyLink>
				</div>
			</Container>
		</div>
	);
};

export default Sidebar;

const Container = styled.div`
	background: #941511;
	box-shadow: 1px 1px 5px 1px #000000;
	text-shadow: 2px 2px 2px #000000;
	color: #ffc400;
	right: 0;
	text-align: center;
	height: 100vh;
	opacity: 0.9;
	padding: 5px 0;
	position: absolute;
	width: 25%;
	display: flex;
	flex-direction: column;
	display: none;
`;

const MyLink = styled(Link)`
	color: white;
	font-size: 24px;
	display: flex;
	flex-direction: column;

	&:hover {
		color:#ffc400;
		text-decoration: none;
	}

	&:active {
		color: #941600;
	}`;

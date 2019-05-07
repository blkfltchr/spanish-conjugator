import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
// Styled Components

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

export const H1 = styled.h1`
	position: absolute;
	left: 0;
	margin-left: 20px;
	font-size: 1.8rem;
`;

export const TopBar = styled.div`
	margin: 0 0 10px 0;
	padding: 0 15px;
	display: flex;
	justify-content: space-between;
	background: #f6f9fc;
	width: 100%;
	position: relative;
`;

export const NavLogo = styled.div`
	background: #2f2e41;
	border: 5px solid #ffc400;
	box-shadow: 1px 1px 3px #000000;
	color: #ffc107;
	font-size: 1.8rem;
	height: 75px;
	line-height: 1.8rem;
	margin: 5px 0;
	text-shadow: 1px 1px 4px #000000;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-family: Sofia;
	position: absolute;
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
	background: #ffc107;
	border: 1px solid #000000;
	border-radius: 10px;
	box-shadow: 2px 2px 4px #000000;
	color: #000000;
	cursor: pointer;
	padding: 5px 25px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
	align-content: center;

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
				background: #ffc107;
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

export const Span = styled.span`
	color: #941511;
	margin: 10px;
	text-align: left;
	font-size: 20px;
`;
export const MyLink = styled(Link)`
    color: white;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    &:hover {
      color: #ffc107;
      text-decoration: none;
    }
    
    &:active {
      color: #ffc107;
		}
		@media only screen and (max-width: 730px) {
			font-size: 1rem;
		}
    `;

export const SidebarStyled = styled.div`
	background: #2f2e41;
	box-shadow: 0 1px 1px 1px #ffc728;
	text-shadow: 2px 2px 2px #000000;
	color: #ffc107;
	right: 0;
	text-align: center;
	height: 100vh;
	opacity: 0.9;
	padding: 10px;
	width: 20%;
	@media only screen and (max-width: 730px) {
		margin-left: 25%;
		margin-right: auto;
		left: 0;
		right: 0;
	}
`;

export const SideContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;

export const StlyedH3 = styled.div`
	font-size: 2rem;
	font-family: roboto;
	@media only screen and (max-width: 730px) {
		font-size: 1rem;
		display: block;
		text-align: center;
	}
`;

export const AboutDiv = styled.div`
	position: absolute;
	margin: 100px auto;
	display: flex;
	flex-wrap: wrap;
`;
export const AboutH3Div = styled.div`
	display: flex;
	a {
		text-decoration: none;
		&:hover {
			text-decoration: none;
		}
	}
`;

export const AboutImgDiv = styled.div`
	display: flex;
	align-items: space-around;
`;

export const PageContainer = styled.div`postion: absolute;`;

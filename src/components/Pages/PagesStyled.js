import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
export const Svg = styled.img`
	height: auto;
	width: 50%;
	margin-top: 150px;
`;
export const Words = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Sofia;
	h2 {
		margin: 20px 20px;
		font-size: 4rem;
	}
`;

export const MyLink = styled(Link)`
  color: #2f2e41;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  &:hover {
    background: #2f2e41;
    color: #ffc107;
    text-decoration: none;
  }

  &:active {
    color: #ffc107;
  }
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
	margin: 5% 5%;
	display: flex;
	font-size: 1rem;
	justify-content: center;
	align-items: center;
	align-self: center;
	align-content: center;

	&:hover {
		background: #2f2e41;
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
margin: 5px 0;
width: 70%;
display: flex;
`;

export const Span = styled.span`
	color: #941511;
	margin: 5px;
	text-align: left;
	font-size: 1.4rem;
`;

export const FormWrap = styled.div`
	background: #f6f9fc;
	position: absolute;
	margin-left: 20px;
	margin-right: 200px;
	left: 0;
	right: 0;

	@media only screen and (max-width: 730px) {
		margin-left: 25%;
		margin-right: auto;
		left: 0;
		right: 0;
	}
`;

export const Form = styled.form`
	margin: 0 auto;
	text-align: start;
	display: flex;
	width: 100%;
	flex-direction: column;

	@media only screen and (max-width: 730px) {
	}
`;

export const PageContainer = styled.div`
position: relative;
background: #f6f9fc;
border: 5px solid #ffc107;
border-radius: 25px;
height: 80vh;
width: 75%
display: flex;
justify-content: center;
align-items: center;
  justify-self: center;
  margin: 150px auto;
  
  @media only screen and (max-width: 730px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	height: 40%;
`;

export const Title = styled.h3`
	font-size: 2rem;
	position: absolute;
	top: 0;
	left: 2%;
	padding: 10px;
	@media only screen and (max-width: 730px) {
		left: 35%;
	}
`;

export const LoginSvg = styled.img`
	margin: 0 auto;
	width: 30%;
	height: auto;
	position: absolute;
	display: flex;
  right: 10%;

  @media only screen and (max-width: 730px) {
      display: none;
    }
  }
`;

export const SignUpButton = styled(Button)`
  padding: 10px 30px;
`;

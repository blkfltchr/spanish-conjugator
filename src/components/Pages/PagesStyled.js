import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Svg = styled.img`
  height: 75%
  width: 75%;
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

  ${props =>
    props.alt &&
    css`
      background: #941511;
      color: #ffffff;

      &:hover {
        background: #ffc107;
        color: #000000;
      }
    `};

  ${props =>
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

export const Form = styled.form`
  margin: 0 auto;
  text-align: start;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Input = styled.input`
	background-color: #ffffff;
	border-radius: 5px;
	border 1px solid;
	padding: 5px;
	margin: 10px 0;
	width: 70%;
`;

export const Span = styled.span`
  color: #941511;
  margin: 10px;
  text-align: left;
  font-size: 20px;
`;

export const FormWrap = styled.div`
  background: #f6f9fc;
  padding: 40px;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;
export const LoginPageContainer = styled.div`
  position: absolute;
  background: #f6f9fc;
  border: 5px solid #ffc107;
  border-radius: 25px;
  height: 80vh;
  width: 75%
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin: 10% 0px;
  border: 1px solid red;
  width: 100%;
  height: 60%;
`;

export const Title = styled.h3`
  font-size: 3rem;
  position: absolute;
  top: 5%;
  margin-top: 20px;
  padding: 5px;
`;

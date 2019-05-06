import React from "react";
import "./navigation.css";
import styled, { css } from "styled-components";

const Navigation = props => {
  return (
    <TopBar>
      <NavLogo>Spanish Conjugator</NavLogo>
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
  background: #f6f9fc;
  border: 1px solid blue;
`;

const NavLogo = styled.div`
  background: #941511;
  border: 5px solid #ffc400;
  box-shadow: 1px 1px 3px #000000;
  border-radius: 0 35px 25px 0;
  color: #ffffff;
  font-size: 2rem;
  height: 75px;
  line-height: 1.8rem;
  margin: 5px 0;
  text-shadow: 1px 1px 4px #000000;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
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

  ${props =>
    props.alt &&
    css`
      background: #941511;
      color: #ffffff;

      &:hover {
        background: #ffc400;
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

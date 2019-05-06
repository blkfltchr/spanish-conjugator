import styled from "styled-components";
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
  color: #ffc107;
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

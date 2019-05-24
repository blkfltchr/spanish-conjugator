import styled from 'styled-components';

export const SmallForm = styled.div`
  width: 400px;
  padding-bottom: 30px;
  margin: 0 auto;
  -webkit-border-radius: 8px/7px;
  -moz-border-radius: 8px/7px;
  border-radius: 8px/7px;
  background-color: #ebebeb;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border: solid 1px #cbc9c9;
  text-align: center;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const MediumForm = styled.div`
  width: 60%;
  padding-bottom: 30px;
  margin: 0 auto;
  -webkit-border-radius: 8px/7px;
  -moz-border-radius: 8px/7px;
  border-radius: 8px/7px;
  background-color: #ebebeb;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border: solid 1px #cbc9c9;
  text-align: center;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

import styled from 'styled-components';

export const SmallForm = styled.form`
  width: 400px;
  padding-bottom: 30px;
  margin: 0 auto;
  margin-top: 100px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
    0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  border: solid 1px #cbc9c9;
  text-align: center;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const MediumForm = styled.form`
  width: 60%;
  padding-bottom: 30px;
  margin: 0 auto;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
    0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  border: solid 1px #cbc9c9;
  text-align: center;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

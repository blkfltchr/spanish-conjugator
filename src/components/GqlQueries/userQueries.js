import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      user {
        name
        email
      }
      token
    }
  }
`;

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

const GET_MY_INFO = gql`
  query {
    me {
      id
      name
      email
    }
  }
`;

const GET_LOGS = gql`
  query($id: String!) {
    users(where: { id: $id }) {
      id
      name
      email
      logs {
        id
        verbInfinitive
        tense
        correctAnswer
        userAnswer
        verbPerson
        correct
      }
    }
  }
`;

export { CREATE_USER, LOGIN, GET_MY_INFO, GET_LOGS };

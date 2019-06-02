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

const GET_NAME = gql`
  query {
    me {
      name
      email
    }
  }
`;

export { CREATE_USER, LOGIN, GET_NAME };

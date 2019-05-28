import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      user {
        name
        email
      }
    }
  }
`;

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        name
        email
      }
      token
    }
  }
`;

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export { CREATE_USER, LOGIN, GET_USERS };

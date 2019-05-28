import gql from 'graphql-tag';

const LOGS = gql`
  query {
    logs {
      id
      verbInfinitive
      tense
      answer
      correct
      createdAt
      user {
        id
        name
        email
      }
    }
  }
`;

// const CREATE_LOG = gql`
//   mutation(
//     $verbInfinitive: String!
//     $tense: String!
//     $answer: String!
//     $correct: Boolean!
//   ) {
//     createLog(
//       data: {
//         verbInfinitive: "crecer"
//         tense: "Present"
//         answer: "crecoo"
//         correct: false
//       }
//     ) {
//       id
//       verbInfinitive
//       tense
//       answer
//       correct
//       createdAt
//       user {
//         id
//         name
//         email
//         password
//         createdAt
//       }
//     }
//   }
// `;

export { LOGS };

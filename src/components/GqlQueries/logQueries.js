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
      student {
        id
        name
        email
      }
    }
  }
`;

const CREATE_LOG = gql`
  mutation(
    $verbInfinitive: String!
    $tense: String!
    $correctAnswer: String!
    $userAnswer: String!
    $verbPerson: String!
    $correct: Boolean!
  ) {
    createLog(
      data: {
        verbInfinitive: $verbInfinitive
        tense: $tense
        correctAnswer: $correctAnswer
        userAnswer: $userAnswer
        verbPerson: $verbPerson
        correct: $correct
      }
    ) {
      id
      verbInfinitive
      tense
      correctAnswer
      userAnswer
      verbPerson
      correct
      createdAt
      student {
        id
        name
        email
      }
    }
  }
`;

const MY_LOGS = gql`
  query {
    myLogs {
      id
      verbInfinitive
      tense
      correctAnswer
      userAnswer
      verbPerson
      correct
      createdAt
      student {
        id
        name
        email
      }
    }
  }
`;

const MY_LOGS_BY_DATE = gql`
  query($date: DateTime!) {
    myLogs(where: { createdAt_gte: $date }) {
      id
      verbInfinitive
      tense
      correctAnswer
      userAnswer
      verbPerson
      correct
      createdAt
      student {
        id
        name
        email
      }
    }
  }
`;

export { LOGS, CREATE_LOG, MY_LOGS_BY_DATE, MY_LOGS };

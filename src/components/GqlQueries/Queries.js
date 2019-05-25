import gql from 'graphql-tag';

const LEVEL_ONE = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        AND: [{ moodEnglish: "Indicative" }, { tenseEnglish: "Present" }]
        OR: [
          { infinitive: "caminar" }
          { infinitive: "hablar" }
          { infinitive: "ayudar" }
          { infinitive: "necesitar" }
          { infinitive: "escribir" }
          { infinitive: "esperar" }
          { infinitive: "cocinar" }
          { infinitive: "comer" }
          { infinitive: "beber" }
          { infinitive: "vivir" }
        ]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

const LEVEL_TWO = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        AND: [
          { moodEnglish: "Indicative" }
          { OR: [{ tenseEnglish: "Preterite" }, { tenseEnglish: "Present" }] }
        ]
        OR: [
          { infinitive: "caminar" }
          { infinitive: "hablar" }
          { infinitive: "ayudar" }
          { infinitive: "necesitar" }
          { infinitive: "escribir" }
          { infinitive: "esperar" }
          { infinitive: "cocinar" }
          { infinitive: "comer" }
          { infinitive: "beber" }
          { infinitive: "vivir" }
          { infinitive: "saber" }
          { infinitive: "dormir" }
          { infinitive: "morir" }
          { infinitive: "mover" }
          { infinitive: "jugar" }
          { infinitive: "encontrar" }
          { infinitive: "empezar" }
          { infinitive: "entender" }
          { infinitive: "querer" }
          { infinitive: "conocer" }
          { infinitive: "conducir" }
          { infinitive: "traducir" }
          { infinitive: "salir" }
          { infinitive: "traer" }
          { infinitive: "hacer" }
          { infinitive: "tener" }
          { infinitive: "ser" }
          { infinitive: "estar" }
          { infinitive: "dar" }
        ]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

const LEVEL_THREE = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        AND: [
          { moodEnglish: "Indicative" }
          {
            OR: [
              { tenseEnglish: "Preterite" }
              { tenseEnglish: "Present" }
              { tenseEnglish: "Imperfect" }
            ]
          }
        ]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

const LEVEL_FOUR = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        AND: [
          { moodEnglish: "Indicative" }
          {
            OR: [
              { tenseEnglish: "Preterite" }
              { tenseEnglish: "Present" }
              { tenseEnglish: "Imperfect" }
              { tenseEnglish: "Present Perfect" }
            ]
          }
        ]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

const LEVEL_FIVE = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        AND: [
          { moodEnglish: "Indicative" }
          {
            OR: [
              { tenseEnglish: "Preterite" }
              { tenseEnglish: "Present" }
              { tenseEnglish: "Imperfect" }
              { tenseEnglish: "Present Perfect" }
              { tenseEnglish: "Conditional" }
            ]
          }
        ]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

const LEVEL_SIX = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        AND: [
          { moodEnglish: "Indicative" }
          {
            OR: [
              { tenseEnglish: "Preterite" }
              { tenseEnglish: "Present" }
              { tenseEnglish: "Present Perfect" }
              { tenseEnglish: "Imperfect" }
              { tenseEnglish: "Conditional" }
              { tenseEnglish: "Future" }
            ]
          }
        ]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

const LEVEL_SEVEN = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        NOT: [
          {
            OR: [
              { moodEnglish: "Imperative Affirmative" }
              { moodEnglish: "Imperative Negative" }
            ]
          }
        ]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      infinitive
      infinitiveEnglish
      moodEnglish
      tenseEnglish
      verbEnglish
    }
  }
`;

const CREATE_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      user {
        name
        email
        password
      }
    }
  }
`;

const verbQueries = [
  LEVEL_ONE,
  LEVEL_TWO,
  LEVEL_THREE,
  LEVEL_FOUR,
  LEVEL_FIVE,
  LEVEL_SIX,
  LEVEL_SEVEN
];

export { verbQueries, CREATE_USER };

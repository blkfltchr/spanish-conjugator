import gql from 'graphql-tag';

const BEGINNER = gql`
  query($latam: Boolean!, $tenseArr: [String!], $subjArr: [String!]) {
    verbs(
      where: {
        OR: [
          {
            tenseEnglish_in: $tenseArr
            infinitive_in: [
              "caminar"
              "hablar"
              "ayudar"
              "necesitar"
              "escribir"
              "esperar"
              "cocinar"
              "comer"
              "beber"
              "vivir"
            ]
            moodEnglish: "Indicative"
          }
          {
            tenseEnglish_in: $subjArr
            infinitive_in: [
              "caminar"
              "hablar"
              "ayudar"
              "necesitar"
              "escribir"
              "esperar"
              "cocinar"
              "comer"
              "beber"
              "vivir"
            ]
            moodEnglish: "Subjunctive"
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

const INTERMEDIATE = gql`
  query($latam: Boolean!, $tenseArr: [String!], $subjArr: [String!]) {
    verbs(
      where: {
        OR: [
          {
            tenseEnglish_in: $tenseArr
            infinitive_in: [
              "caminar"
              "hablar"
              "ayudar"
              "necesitar"
              "escribir"
              "esperar"
              "cocinar"
              "comer"
              "beber"
              "vivir"
              "saber"
              "dormir"
              "morir"
              "mover"
              "jugar"
              "encontrar"
              "empezar"
              "entender"
              "querer"
              "conocer"
              "conducir"
              "traducir"
              "salir"
              "traer"
              "hacer"
              "tener"
              "ser"
              "estar"
              "dar"
            ]
            moodEnglish: "Indicative"
          }
          {
            tenseEnglish_in: $subjArr
            infinitive_in: [
              "caminar"
              "hablar"
              "ayudar"
              "necesitar"
              "escribir"
              "esperar"
              "cocinar"
              "comer"
              "beber"
              "vivir"
              "saber"
              "dormir"
              "morir"
              "mover"
              "jugar"
              "encontrar"
              "empezar"
              "entender"
              "querer"
              "conocer"
              "conducir"
              "traducir"
              "salir"
              "traer"
              "hacer"
              "tener"
              "ser"
              "estar"
              "dar"
            ]
            moodEnglish: "Subjunctive"
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

const All_VERBS = gql`
  query($latam: Boolean!, $tenseArr: [String!], $subjArr: [String!]) {
    verbs(
      where: {
        OR: [
          {
            AND: [{ tenseEnglish_in: $tenseArr }, { moodEnglish: "Indicative" }]
          }
          {
            AND: [{ tenseEnglish_in: $subjArr }, { moodEnglish: "Subjunctive" }]
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

const verbQueries = [BEGINNER, INTERMEDIATE, All_VERBS];

export { verbQueries };

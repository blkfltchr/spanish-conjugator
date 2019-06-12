import gql from 'graphql-tag';

// const LEVEL_ONE = gql`
//   query($latam: Boolean!) {
//     verbs(
//       where: {
//         AND: [{ moodEnglish: "Indicative" }, { tenseEnglish: "Present" }]
//         OR: [
//           { infinitive: "caminar" }
//           { infinitive: "hablar" }
//           { infinitive: "ayudar" }
//           { infinitive: "necesitar" }
//           { infinitive: "escribir" }
//           { infinitive: "esperar" }
//           { infinitive: "cocinar" }
//           { infinitive: "comer" }
//           { infinitive: "beber" }
//           { infinitive: "vivir" }
//         ]
//       }
//     ) {
//       form1p
//       form1s
//       form2p @skip(if: $latam)
//       form2s
//       form3p
//       form3s
//       infinitive
//       infinitiveEnglish
//       moodEnglish
//       tenseEnglish
//       verbEnglish
//     }
//   }
// `;

// const LEVEL_TWO = gql`
//   query($latam: Boolean!) {
//     verbs(
//       where: {
//         AND: [
//           { moodEnglish: "Indicative" }
//           { OR: [{ tenseEnglish: "Preterite" }, { tenseEnglish: "Present" }] }
//         ]
//         OR: [
//           { infinitive: "caminar" }
//           { infinitive: "hablar" }
//           { infinitive: "ayudar" }
//           { infinitive: "necesitar" }
//           { infinitive: "escribir" }
//           { infinitive: "esperar" }
//           { infinitive: "cocinar" }
//           { infinitive: "comer" }
//           { infinitive: "beber" }
//           { infinitive: "vivir" }
//           { infinitive: "saber" }
//           { infinitive: "dormir" }
//           { infinitive: "morir" }
//           { infinitive: "mover" }
//           { infinitive: "jugar" }
//           { infinitive: "encontrar" }
//           { infinitive: "empezar" }
//           { infinitive: "entender" }
//           { infinitive: "querer" }
//           { infinitive: "conocer" }
//           { infinitive: "conducir" }
//           { infinitive: "traducir" }
//           { infinitive: "salir" }
//           { infinitive: "traer" }
//           { infinitive: "hacer" }
//           { infinitive: "tener" }
//           { infinitive: "ser" }
//           { infinitive: "estar" }
//           { infinitive: "dar" }
//         ]
//       }
//     ) {
//       form1p
//       form1s
//       form2p @skip(if: $latam)
//       form2s
//       form3p
//       form3s
//       infinitive
//       infinitiveEnglish
//       moodEnglish
//       tenseEnglish
//       verbEnglish
//     }
//   }
// `;

// const LEVEL_THREE = gql`
//   query($latam: Boolean!) {
//     verbs(
//       where: {
//         AND: [
//           { moodEnglish: "Indicative" }
//           {
//             OR: [
//               { tenseEnglish: "Preterite" }
//               { tenseEnglish: "Present" }
//               { tenseEnglish: "Imperfect" }
//             ]
//           }
//         ]
//       }
//     ) {
//       form1p
//       form1s
//       form2p @skip(if: $latam)
//       form2s
//       form3p
//       form3s
//       infinitive
//       infinitiveEnglish
//       moodEnglish
//       tenseEnglish
//       verbEnglish
//     }
//   }
// `;

// const LEVEL_FOUR = gql`
//   query($latam: Boolean!) {
//     verbs(
//       where: {
//         AND: [
//           { moodEnglish: "Indicative" }
//           {
//             OR: [
//               { tenseEnglish: "Preterite" }
//               { tenseEnglish: "Present" }
//               { tenseEnglish: "Imperfect" }
//               { tenseEnglish: "Present Perfect" }
//             ]
//           }
//         ]
//       }
//     ) {
//       form1p
//       form1s
//       form2p @skip(if: $latam)
//       form2s
//       form3p
//       form3s
//       infinitive
//       infinitiveEnglish
//       moodEnglish
//       tenseEnglish
//       verbEnglish
//     }
//   }
// `;

// const LEVEL_FIVE = gql`
//   query($latam: Boolean!) {
//     verbs(
//       where: {
//         AND: [
//           { moodEnglish: "Indicative" }
//           {
//             OR: [
//               { tenseEnglish: "Preterite" }
//               { tenseEnglish: "Present" }
//               { tenseEnglish: "Imperfect" }
//               { tenseEnglish: "Present Perfect" }
//               { tenseEnglish: "Conditional" }
//             ]
//           }
//         ]
//       }
//     ) {
//       form1p
//       form1s
//       form2p @skip(if: $latam)
//       form2s
//       form3p
//       form3s
//       infinitive
//       infinitiveEnglish
//       moodEnglish
//       tenseEnglish
//       verbEnglish
//     }
//   }
// `;

// const LEVEL_SIX = gql`
//   query($latam: Boolean!) {
//     verbs(
//       where: {
//         AND: [
//           { moodEnglish: "Indicative" }
//           {
//             OR: [
//               { tenseEnglish: "Preterite" }
//               { tenseEnglish: "Present" }
//               { tenseEnglish: "Present Perfect" }
//               { tenseEnglish: "Imperfect" }
//               { tenseEnglish: "Conditional" }
//               { tenseEnglish: "Future" }
//             ]
//           }
//         ]
//       }
//     ) {
//       form1p
//       form1s
//       form2p @skip(if: $latam)
//       form2s
//       form3p
//       form3s
//       infinitive
//       infinitiveEnglish
//       moodEnglish
//       tenseEnglish
//       verbEnglish
//     }
//   }
// `;

// const LEVEL_SEVEN = gql`
//   query($latam: Boolean!) {
//     verbs(
//       where: {
//         NOT: [
//           {
//             OR: [
//               { moodEnglish: "Imperative Affirmative" }
//               { moodEnglish: "Imperative Negative" }
//             ]
//           }
//         ]
//       }
//     ) {
//       form1p
//       form1s
//       form2p @skip(if: $latam)
//       form2s
//       form3p
//       form3s
//       infinitive
//       infinitiveEnglish
//       moodEnglish
//       tenseEnglish
//       verbEnglish
//     }
//   }
// `;

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

// where: {
//   OR: [
//     {
//       tenseEnglish_in: [Present],
//       infinitive_in: [
//         "caminar",
//         "hablar",
//         "ayudar",
//         "necesitar",
//         "escribir",
//         "esperar",
//         "cocinar",
//         "comer",
//         "beber",
//         "vivir"
//       ],
//       moodEnglish: 'Indicative'
//     },
//     {
//       tenseEnglish_in: ['Present'],
//       infinitive_in: [
//         'caminar',
//         'hablar',
//         'ayudar',
//         'necesitar',
//         'escribir',
//         'esperar',
//         'cocinar',
//         'comer',
//         'beber',
//         'vivir'
//       ],
//       moodEnglish: 'Indicative'
//     }
//   ];
// }

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

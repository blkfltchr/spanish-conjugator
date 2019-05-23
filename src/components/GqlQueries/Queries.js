// import beginnerData from '../../data/beginnerData';
import gql from 'graphql-tag';

// We could still use beginnerData for the first two levels
// const LEVEL_ONE = beginnerData.filter(
//   verb => verb.tense_english === 'Present' && verb.mood_english === 'Indicative'
// );

// const Two = beginnerData.filter(
//   verb =>
//     verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative'
// );

const LEVEL_ONE = gql`
  query($latam: Boolean!) {
    verbs(
      where: {
        AND: [{ moodEnglish: "Indicative" }, { tenseEnglish: "Present" }]
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      gerund
      gerundEnglish
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
      }
    ) {
      form1p
      form1s
      form2p @skip(if: $latam)
      form2s
      form3p
      form3s
      gerund
      gerundEnglish
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
      gerund
      gerundEnglish
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
      gerund
      gerundEnglish
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
      gerund
      gerundEnglish
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
      gerund
      gerundEnglish
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

const verbQueries = [
  LEVEL_ONE,
  LEVEL_TWO,
  LEVEL_THREE,
  LEVEL_FOUR,
  LEVEL_FIVE,
  LEVEL_SIX,
  LEVEL_SEVEN
];

export { verbQueries };

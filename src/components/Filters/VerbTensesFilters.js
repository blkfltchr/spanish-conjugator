import miniData from '../../data/miniData';
import beginnerData from '../../data/beginnerData';

import gql from 'graphql-tag';
// import { Query } from 'react-apollo';

const LevelOne = beginnerData.filter(
  verb => verb.tense_english === 'Present' && verb.mood_english === 'Indicative'
);

const Two = beginnerData.filter(
  verb =>
    verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative'
);

const LevelTwo = LevelOne.concat(Two);

// const LevelThree = miniData.filter(
//   verb =>
//     (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
//     (verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative')
// );

const LEVEL_THREE = gql`
  query VerbsQuery {
    LevelThreeQuery {
      form1p
      form1s
      form2p
      form2s
      form3p
      form3s
      gerund
      gerundEnglish
      index
      infinitive
      infinitiveEnglish
      mood
      moodEnglish
      pastparticiple
      pastparticipleEnglish
      tense
      tenseEnglish
      verbEnglish
    }
  }
`;

// const LevelThree = () => {
//   <Query query={whatAQuery}>
//     {({ loading, error, data }) => {
//       if (loading) return <h4>Loading</h4>;
//       if (error) console.log(error);
//       console.log('From state in index..', data);
//       return <div>{data}</div>;
//     }}
//   </Query>;
// };

// console.log('DATA MOFO', whatAQuery);

const LevelFour = miniData.filter(
  verb =>
    verb.tense_english === 'Present Perfect' &&
    verb.mood_english === 'Indicative'
);

// const LevelFour = LevelThree.concat(Four);

const Five = miniData.filter(
  verb => verb.tense_english === 'Future' && verb.mood_english === 'Indicative'
);

const LevelFive = LevelFour.concat(Five);

const Six = miniData.filter(
  verb =>
    verb.tense_english === 'Present Perfect' &&
    verb.mood_english === 'Indicative'
);

const LevelSix = LevelFive.concat(Six);

const VerbTenseFilters = [
  LevelOne,
  LevelTwo,
  // LevelThree,
  LevelFour,
  LevelFive,
  LevelSix,
  miniData
];

export { VerbTenseFilters, LEVEL_THREE };

// export default LEVEL_THREE;

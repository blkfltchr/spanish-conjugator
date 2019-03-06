import miniData from '../miniData';
import beginnerData from '../beginnerData'

const LevelOne = beginnerData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative')
);

const LevelTwo = beginnerData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative')
);

const LevelThree = miniData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative')
);

const LevelFour = miniData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative') ||
    ((verb.tense_english === 'Present Perfect' &&
    verb.mood_english === 'Indicative'))
    );

const LevelFive = miniData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative') ||
    ((verb.tense_english === 'Present Perfect' &&
    verb.mood_english === 'Indicative')) ||
    ((verb.tense_english === 'Future' && verb.mood_english === 'Indicative'))
)


const LevelSix = miniData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Preterite' &&
      verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Conditional' &&
      verb.mood_english === 'Indicative') ||
    ((verb.tense_english === 'Future' && verb.mood_english === 'Indicative') ||
      (verb.tense_english === 'Present Perfect' &&
        verb.mood_english === 'Indicative'))
);

// const VerbTenseFilters = {LevelOne: 'LevelOne', LevelTwo: 'LevelTwo', LevelThree: 'LevelThree', LevelFour: 'LevelFour', LevelFive: 'LevelFive', LevelSix: 'LevelSix' }
// const VerbTenseFilters = {'LevelOne': LevelOne, 'LevelTwo': LevelTwo, 'LevelThree': LevelThree, 'LevelFour': LevelFour, 'LevelFive': LevelFive, 'LevelSix': LevelSix}
const VerbTenseFilters = [LevelOne, LevelTwo, LevelThree, LevelFour, LevelFive, LevelSix]
// const VerbTenseFilters = {'Level': LevelOne, 'Level': LevelTwo, 'Level': LevelThree, 'Level': LevelFour, 'Level': LevelFive, 'Level': LevelSix}

export { VerbTenseFilters };

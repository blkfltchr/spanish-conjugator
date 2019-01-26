import miniData from '../miniData';

const Beginner = miniData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative')
);

const Intermediate = miniData.filter(
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

export { Beginner, Intermediate };

import miniData from '../miniData';

const beginner = miniData.filter(
  verb =>
    (verb.tense_english === 'Present' && verb.mood_english === 'Indicative') ||
    (verb.tense_english === 'Preterite' && verb.mood_english === 'Indicative')
);

const intermediate = miniData.filter(
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

export { beginner, intermediate };

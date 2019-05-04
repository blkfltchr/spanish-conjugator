import miniData from "../../data/miniData";
import beginnerData from "../../data/beginnerData";

const LevelOne = beginnerData.filter(
  verb => verb.tense_english === "Present" && verb.mood_english === "Indicative"
);

const Two = beginnerData.filter(
  verb =>
    verb.tense_english === "Preterite" && verb.mood_english === "Indicative"
);

const LevelTwo = LevelOne.concat(Two);

const LevelThree = miniData.filter(
  verb =>
    (verb.tense_english === "Present" && verb.mood_english === "Indicative") ||
    (verb.tense_english === "Preterite" && verb.mood_english === "Indicative")
);

const Four = miniData.filter(
  verb =>
    verb.tense_english === "Present Perfect" &&
    verb.mood_english === "Indicative"
);

const LevelFour = LevelThree.concat(Four);

const Five = miniData.filter(
  verb => verb.tense_english === "Future" && verb.mood_english === "Indicative"
);

const LevelFive = LevelFour.concat(Five);

const Six = miniData.filter(
  verb =>
    verb.tense_english === "Present Perfect" &&
    verb.mood_english === "Indicative"
);

const LevelSix = LevelFive.concat(Six);

const VerbTenseFilters = [
  LevelOne,
  LevelTwo,
  LevelThree,
  LevelFour,
  LevelFive,
  LevelSix,
  miniData
];

export { VerbTenseFilters };
